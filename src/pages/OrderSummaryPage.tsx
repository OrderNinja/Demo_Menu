
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomizableLogo from "@/components/CustomizableLogo";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Minus, Plus, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const OrderSummaryPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const { userInfo, isInfoComplete } = useUser();
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  
  // Redirect to landing if user info is not complete
  React.useEffect(() => {
    if (!isInfoComplete) {
      navigate("/");
    }
    
    if (items.length === 0 && !isOrderPlaced) {
      navigate("/menu");
    }
  }, [isInfoComplete, navigate, items.length, isOrderPlaced]);

  const handleConfirmOrder = () => {
    // In a real app, this would submit the order to a backend
    setIsOrderPlaced(true);
    setIsConfirmationOpen(false);
    
    // Show success message
    toast.success("Your order has been placed successfully!");
    
    // Clear cart after order is placed
    clearCart();
  };

  // Calculate item price including add-ons for display
  const calculateItemPrice = (item: any) => {
    let price = item.price;
    if (item.selectedCustomizations?.addOns) {
      const addOns = item.selectedCustomizations.addOns;
      price += addOns.reduce((sum: number, addon: any) => sum + addon.price, 0);
    }
    return price;
  };

  return (
    <div className="min-h-screen flex flex-col bg-restaurant-secondary">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col items-center space-y-2">
          <CustomizableLogo />
          <h1 className="text-xl sm:text-2xl font-semibold text-restaurant-primary">Order Summary</h1>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <Button 
          variant="outline" 
          className="flex items-center mb-4 sm:mb-6 text-restaurant-primary hover:bg-restaurant-secondary hover:text-restaurant-primary transition-all duration-200 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 border-2 border-restaurant-primary hover:border-restaurant-primary font-medium shadow-sm"
          onClick={() => navigate("/menu")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Menu
        </Button>
        
        {isOrderPlaced ? (
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center max-w-2xl mx-auto animate-fade-in">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
              <Check className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-restaurant-primary mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Thank you for your order, {userInfo.name}. The kitchen is preparing your food!
            </p>
            <Button 
              onClick={() => navigate("/menu")} 
              className="bg-restaurant-primary hover:bg-restaurant-primary/80 text-sm sm:text-base"
            >
              Place Another Order
            </Button>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-restaurant-primary mb-4 sm:mb-6">Your Order</h1>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Order items */}
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-restaurant-primary mb-4">Order Details</h2>
                
                <div className="space-y-4">
                  {items.map((item) => {
                    const itemPrice = calculateItemPrice(item);
                    return (
                      <div 
                        key={item.id} 
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-gray-200 gap-4"
                      >
                        <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-12 w-12 sm:h-16 sm:w-16 rounded-md object-cover flex-shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <h3 className="font-medium text-black text-sm sm:text-base">{item.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-500">
                              ฿{itemPrice.toFixed(0)}
                              {item.selectedCustomizations?.addOns && (
                                <span className="text-xs ml-1">
                                  (includes add-ons)
                                </span>
                              )}
                            </p>
                            {item.selectedCustomizations && Object.keys(item.selectedCustomizations).length > 0 && (
                              <div className="text-xs text-gray-500 mt-1">
                                {Object.entries(item.selectedCustomizations)
                                  .filter(([key]) => key !== 'addOns')
                                  .map(([key, value]) => (
                                    <div key={key}>
                                      <span className="font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                                      {value as string}
                                    </div>
                                  ))}
                                {item.selectedCustomizations.addOns && (
                                  <div>
                                    <span className="font-medium">Add-ons: </span>
                                    {(item.selectedCustomizations.addOns as any[]).map(addon => 
                                      `${addon.name} (+$${addon.price.toFixed(2)})`
                                    ).join(', ')}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between w-full sm:w-auto sm:space-x-4">
                          <div className="flex items-center border rounded-md overflow-hidden">
                            <button 
                              className="px-2 sm:px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                            </button>
                            <span className="px-3 sm:px-4 py-1 text-center min-w-[40px] text-sm">{item.quantity}</span>
                            <button 
                              className="px-2 sm:px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                            </button>
                          </div>
                          
                          <span className="font-medium text-black text-sm sm:text-base">
                            ฿{(itemPrice * item.quantity).toFixed(0)}
                          </span>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 text-xs sm:text-sm"
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Order summary */}
              <div className="bg-gray-50 p-4 sm:p-6">
                <div className="flex justify-between text-lg sm:text-xl font-bold text-restaurant-primary">
                  <span>Total</span>
                  <span>฿{totalPrice.toFixed(0)}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-4">
              <Button
                variant="outline"
                onClick={() => navigate("/menu")}
                className="border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white text-sm sm:text-base"
              >
                Go Back to Menu
              </Button>
              <Button
                onClick={() => setIsConfirmationOpen(true)}
                className="bg-restaurant-primary hover:bg-restaurant-primary/80 text-sm sm:text-base"
              >
                Confirm Order
              </Button>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer - always English */}
      <footer className="bg-restaurant-primary text-white py-4 text-center mt-16">
        <p className="text-sm sm:text-base">&copy; 2025 Order Ninja. All rights reserved.</p>
      </footer>
      
      {/* Confirmation Dialog */}
      <Dialog open={isConfirmationOpen} onOpenChange={setIsConfirmationOpen}>
        <DialogContent className="mx-2 sm:mx-0">
          <DialogHeader>
            <DialogTitle className="text-base sm:text-lg">Confirm Your Order</DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              Are you ready to place your order? We'll contact you at {userInfo.phone} when your order is ready.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <h3 className="font-medium text-black mb-2 text-sm sm:text-base">Order Summary</h3>
            <div className="space-y-2">
              {items.map((item) => {
                const itemPrice = calculateItemPrice(item);
                return (
                  <div key={item.id} className="flex justify-between text-xs sm:text-sm">
                    <span>
                      {item.quantity} x {item.name}
                      {item.selectedCustomizations?.addOns && (
                        <span className="text-xs ml-1 text-gray-500">
                          (with add-ons)
                        </span>
                      )}
                    </span>
                    <span>฿{(itemPrice * item.quantity).toFixed(0)}</span>
                  </div>
                );
              })}
              <div className="border-t pt-2 mt-2 font-bold text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span>฿{totalPrice.toFixed(0)}</span>
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setIsConfirmationOpen(false)} className="text-sm sm:text-base">
              Cancel
            </Button>
            <Button onClick={handleConfirmOrder} className="bg-restaurant-primary hover:bg-restaurant-secondary text-sm sm:text-base">
              Place Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrderSummaryPage;
