
import React from "react";
import { useCart, AddOnOption } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const CartIcon: React.FC = () => {
  const { totalItems, totalPrice, items, removeFromCart, updateQuantity } = useCart();

  // Format customization selections for display
  const formatCustomizations = (item: any) => {
    if (!item.selectedCustomizations) return null;
    
    const customizationsToDisplay = Object.entries(item.selectedCustomizations)
      .filter(([key]) => key !== 'addOns')
      .map(([key, value]) => {
        const formattedKey = key.replace(/([A-Z])/g, ' $1').trim();
        return (
          <div key={key} className="text-xs text-gray-600">
            <span className="font-medium">{formattedKey}:</span> {value as string}
          </div>
        );
      });
      
    // Add add-ons if present
    if (item.selectedCustomizations.addOns && (item.selectedCustomizations.addOns as AddOnOption[]).length > 0) {
      const addOns = item.selectedCustomizations.addOns as AddOnOption[];
      customizationsToDisplay.push(
        <div key="addOns" className="text-xs text-gray-600">
          <span className="font-medium">Add-ons:</span> {addOns.map(a => a.name).join(', ')}
        </div>
      );
    }
    
    return customizationsToDisplay.length > 0 ? (
      <div className="mt-1 space-y-1">{customizationsToDisplay}</div>
    ) : null;
  };

  // Calculate item price with add-ons
  const calculateItemPrice = (item: any) => {
    let price = item.price;
    if (item.selectedCustomizations?.addOns) {
      const addOns = item.selectedCustomizations.addOns as AddOnOption[];
      price += addOns.reduce((sum, addon) => sum + addon.price, 0);
    }
    return price;
  };

  // Generate a unique key for each cart item
  const getItemKey = (item: any) => {
    if (!item.selectedCustomizations) return item.id;
    return `${item.id}-${JSON.stringify(item.selectedCustomizations)}`;
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative"
        >
          <ShoppingCart className="h-6 w-6 text-black" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-restaurant-primary text-white">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-black">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="text-center py-10">
              <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-4 text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-[60vh] overflow-auto">
                {items.map((item) => {
                  const itemKey = getItemKey(item);
                  const itemPrice = calculateItemPrice(item);
                  
                  return (
                    <div 
                      key={itemKey} 
                      className="flex justify-between items-center border-b border-gray-200 pb-4"
                    >
                      <div className="flex items-center space-x-4">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="h-16 w-16 rounded-md object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-black">{item.name}</h4>
                          <p className="text-sm text-gray-500">${itemPrice.toFixed(2)}</p>
                          {formatCustomizations(item)}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => updateQuantity(item.id, item.quantity - 1, itemKey)}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => updateQuantity(item.id, item.quantity + 1, itemKey)}
                        >
                          +
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="h-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => removeFromCart(item.id, itemKey)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-black font-bold">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="mt-6 space-y-2">
                  <Button 
                    className="w-full bg-restaurant-primary hover:bg-restaurant-secondary"
                    asChild
                  >
                    <Link to="/order">View Order Summary</Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartIcon;
