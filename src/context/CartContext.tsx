
import { createContext, useState, useContext, ReactNode } from "react";
import { useCartNotifications } from "@/hooks/useCartNotifications";
import { MenuItem, AddOnOption, Customizations } from "@/data/menuData";

export interface ItemCustomization {
  [key: string]: string | AddOnOption[];
}

export interface CartItem extends MenuItem {
  quantity: number;
  selectedCustomizations?: ItemCustomization;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, customizations?: ItemCustomization) => void;
  removeFromCart: (itemId: string, customizationKey?: string) => void;
  updateQuantity: (itemId: string, quantity: number, customizationKey?: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProviderInner = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { showAddedToCart, showRemovedFromCart, showCartCleared } = useCartNotifications();

  // Generate a unique key for each item + customization combination
  const getCustomizationKey = (item: MenuItem, customizations?: ItemCustomization): string => {
    if (!customizations || Object.keys(customizations).length === 0) {
      return item.id;
    }
    
    const customizationString = JSON.stringify(customizations);
    return `${item.id}-${customizationString}`;
  };

  // Add an item to the cart with optional customizations
  const addToCart = (item: MenuItem, customizations?: ItemCustomization) => {
    const customizationKey = getCustomizationKey(item, customizations);
    
    setItems((prevItems) => {
      // Check if item with same customizations is already in cart
      const existingItemIndex = prevItems.findIndex((cartItem) => 
        getCustomizationKey(cartItem, cartItem.selectedCustomizations) === customizationKey
      );
      
      if (existingItemIndex > -1) {
        // Increment quantity if item with same customizations exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        showAddedToCart(item, true);
        return updatedItems;
      } else {
        // Add new item with quantity 1
        showAddedToCart(item, false);
        return [...prevItems, { 
          ...item, 
          quantity: 1,
          selectedCustomizations: customizations 
        }];
      }
    });
  };

  // Remove an item from cart (optionally with specific customization)
  const removeFromCart = (itemId: string, customizationKey?: string) => {
    setItems((prevItems) => {
      if (customizationKey) {
        // Remove specific item with given customization key
        const itemToRemove = prevItems.find((item) => 
          getCustomizationKey(item, item.selectedCustomizations) === customizationKey
        );
        
        if (itemToRemove) {
          showRemovedFromCart(itemToRemove);
        }
        
        return prevItems.filter((item) => 
          getCustomizationKey(item, item.selectedCustomizations) !== customizationKey
        );
      } else {
        // Remove all items with matching id regardless of customizations
        const itemToRemove = prevItems.find((item) => item.id === itemId);
        if (itemToRemove) {
          showRemovedFromCart(itemToRemove);
        }
        return prevItems.filter((item) => item.id !== itemId);
      }
    });
  };

  // Update item quantity
  const updateQuantity = (itemId: string, quantity: number, customizationKey?: string) => {
    if (quantity <= 0) {
      removeFromCart(itemId, customizationKey);
      return;
    }
    
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (customizationKey) {
          // Update specific item with given customization key
          if (getCustomizationKey(item, item.selectedCustomizations) === customizationKey) {
            return { ...item, quantity };
          }
        } else if (item.id === itemId) {
          // Update all items with matching id
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  // Clear cart
  const clearCart = () => {
    setItems([]);
    showCartCleared();
  };

  // Calculate total items in cart
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  // Calculate total price (including add-ons)
  const totalPrice = items.reduce((total, item) => {
    let itemPrice = item.price;
    
    // Add prices of selected add-ons
    if (item.selectedCustomizations?.addOns) {
      const addOns = item.selectedCustomizations.addOns as AddOnOption[];
      const addOnTotal = addOns.reduce((sum, addon) => sum + addon.price, 0);
      itemPrice += addOnTotal;
    }
    
    return total + (itemPrice * item.quantity);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  return <CartProviderInner>{children}</CartProviderInner>;
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
