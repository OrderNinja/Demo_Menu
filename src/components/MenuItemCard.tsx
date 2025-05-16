
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MenuItem, useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-restaurant-secondary">{item.name}</h3>
          <span className="font-bold text-restaurant-primary">${item.price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 h-12 overflow-hidden">
          {item.description.length > 70
            ? `${item.description.substring(0, 70)}...`
            : item.description}
        </p>
        
        <div className="flex justify-between items-center">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="link" className="p-0 text-restaurant-secondary hover:text-restaurant-primary">
                Details
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-restaurant-secondary">{item.name}</DialogTitle>
                <DialogDescription>
                  <div className="mt-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <p className="text-gray-700">{item.description}</p>
                    <p className="text-restaurant-primary font-bold mt-2">${item.price.toFixed(2)}</p>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end mt-4">
                <Button onClick={() => { addToCart(item); setIsOpen(false); }}>
                  Add to Cart
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button 
            onClick={() => addToCart(item)} 
            size="sm" 
            className="bg-restaurant-primary hover:bg-restaurant-secondary text-white"
          >
            <Plus className="mr-1 h-4 w-4" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
