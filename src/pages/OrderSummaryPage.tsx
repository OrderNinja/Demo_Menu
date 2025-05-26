import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <span className="text-gray-600">Order Summary</span>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="flex items-center mb-6 text-restaurant-secondary"
          onClick={() => navigate("/menu")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Menu
        </Button>
        
        {isOrderPlaced ? (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-2xl mx-auto animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-green-100 mx-auto mb-6 flex items-center justify-center">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-black mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your order, {userInfo.name}. The kitchen is preparing your food!
            </p>
            <Button 
              onClick={() => navigate("/menu")} 
              className="bg-restaurant-primary hover:bg-restaurant-secondary"
            >
              Place Another Order
            </Button>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-black mb-6">Your Order</h1>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Order items */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-black mb-4">Order Details</h2>
                
                <div className="space-y-4">
                  {items.map((item) => {
                    const itemPrice = calculateItemPrice(item);
                    return (
                      <div 
                        key={item.id} 
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-gray-200"
                      >
                        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-16 w-16 rounded-md object-cover"
                          />
                          <div>
                            <h3 className="font-medium text-black">{item.name}</h3>
                            <p className="text-sm text-gray-500">
                              ${itemPrice.toFixed(2)}
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
                        
                        <div className="flex items-center space-x-4 w-full sm:w-auto">
                          <div className="flex items-center border rounded-md overflow-hidden">
                            <button 
                              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-1 text-center min-w-[40px]">{item.quantity}</span>
                            <button 
                              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          <span className="font-medium text-black">
                            ${(itemPrice * item.quantity).toFixed(2)}
                          </span>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Order summary - removed tax calculation */}
              <div className="bg-gray-50 p-6">
                <div className="flex justify-between text-lg font-bold text-black">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
              <Button
                variant="outline"
                onClick={() => navigate("/menu")}
                className="border-restaurant-secondary text-restaurant-secondary"
              >
                Go Back to Menu
              </Button>
              <Button
                onClick={() => setIsConfirmationOpen(true)}
                className="bg-restaurant-primary hover:bg-restaurant-secondary"
              >
                Confirm Order
              </Button>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-restaurant-secondary text-white py-4 text-center mt-16">
        <p>&copy; 2025 Bistro Royale. All rights reserved.</p>
      </footer>
      
      {/* Confirmation Dialog - also updated to remove tax */}
      <Dialog open={isConfirmationOpen} onOpenChange={setIsConfirmationOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Your Order</DialogTitle>
            <DialogDescription>
              Are you ready to place your order? We'll contact you at {userInfo.phone} when your order is ready.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <h3 className="font-medium text-black mb-2">Order Summary</h3>
            <div className="space-y-2">
              {items.map((item) => {
                const itemPrice = calculateItemPrice(item);
                return (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.quantity} x {item.name}
                      {item.selectedCustomizations?.addOns && (
                        <span className="text-xs ml-1 text-gray-500">
                          (with add-ons)
                        </span>
                      )}
                    </span>
                    <span>${(itemPrice * item.quantity).toFixed(2)}</span>
                  </div>
                );
              })}
              <div className="border-t pt-2 mt-2 font-bold">
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsConfirmationOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmOrder} className="bg-restaurant-primary hover:bg-restaurant-secondary">
              Place Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrderSummaryPage;
