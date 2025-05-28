import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart, ItemCustomization, AddOnOption } from "@/context/CartContext";
import { MenuItem } from "@/data/menuData";
import { useLanguage } from "@/context/LanguageContext";
import { Plus } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCustomizations, setSelectedCustomizations] = useState<ItemCustomization>({});
  
  const calculateAddOnPrice = () => {
    if (!selectedCustomizations.addOns) return 0;
    
    const addOns = selectedCustomizations.addOns as AddOnOption[];
    return addOns.reduce((sum, addon) => sum + addon.price, 0);
  };
  
  const handleOptionSelect = (category: string, value: string) => {
    setSelectedCustomizations(prev => ({
      ...prev,
      [category]: value
    }));
  };
  
  const handleAddOnToggle = (addon: AddOnOption) => {
    setSelectedCustomizations(prev => {
      const currentAddOns = prev.addOns as AddOnOption[] || [];
      const isSelected = currentAddOns.some(item => item.name === addon.name);
      
      let newAddOns;
      if (isSelected) {
        // Remove the add-on
        newAddOns = currentAddOns.filter(item => item.name !== addon.name);
      } else {
        // Add the add-on
        newAddOns = [...currentAddOns, addon];
      }
      
      return {
        ...prev,
        addOns: newAddOns.length > 0 ? newAddOns : undefined
      };
    });
  };
  
  const isAddOnSelected = (addon: AddOnOption) => {
    if (!selectedCustomizations.addOns) return false;
    const addOns = selectedCustomizations.addOns as AddOnOption[];
    return addOns.some(item => item.name === addon.name);
  };

  const totalPrice = item.price + calculateAddOnPrice();
  
  const handleAddToCart = () => {
    // Only pass customizations if something was selected
    const hasCustomizations = Object.keys(selectedCustomizations).length > 0;
    addToCart(item, hasCustomizations ? selectedCustomizations : undefined);
    setIsOpen(false);
    setSelectedCustomizations({});
  };
  
  const handleAddToCartClick = () => {
    if (item.customizations) {
      setIsOpen(true);
    } else {
      addToCart(item);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-36 sm:h-48 object-cover"
      />
      <div className="p-3 sm:p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-base sm:text-lg text-restaurant-primary line-clamp-1">{item.name}</h3>
          <span className="font-bold text-restaurant-primary text-sm sm:text-base whitespace-nowrap ml-2">฿{item.price.toFixed(0)}</span>
        </div>
        
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 h-10 sm:h-12 overflow-hidden line-clamp-2">
          {item.description.length > 70
            ? `${item.description.substring(0, 70)}...`
            : item.description}
        </p>
        
        <div className="flex justify-between items-center">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="link" className="p-0 text-restaurant-primary hover:text-restaurant-primary/80 text-xs sm:text-sm">
                {t("ui.details")}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto mx-2">
              <DialogHeader>
                <DialogTitle className="text-lg sm:text-xl font-bold text-restaurant-primary">{item.name}</DialogTitle>
                <DialogDescription>
                  <div className="mt-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                    />
                    <p className="text-gray-700 text-sm sm:text-base">{item.description}</p>
                    
                    {item.customizations ? (
                      <div className="mt-4">
                        <h3 className="font-medium text-base sm:text-lg mb-3">{t("ui.customize")}</h3>
                        
                        <Tabs defaultValue="options" className="mt-4">
                          <TabsList className="grid w-full grid-cols-2">
                            {Object.keys(item.customizations).filter(key => key !== 'addOns').length > 0 && (
                              <TabsTrigger value="options" className="text-xs sm:text-sm">{t("ui.options")}</TabsTrigger>
                            )}
                            {item.customizations.addOns && item.customizations.addOns.length > 0 && (
                              <TabsTrigger value="addons" className="text-xs sm:text-sm">{t("ui.customize")}</TabsTrigger>
                            )}
                          </TabsList>
                          
                          <TabsContent value="options" className="space-y-4 py-4">
                            {Object.entries(item.customizations)
                              .filter(([key]) => key !== 'addOns')
                              .map(([category, options]) => (
                                <div key={category} className="mb-4">
                                  <h4 className="text-xs sm:text-sm font-medium capitalize mb-2">
                                    {category.replace(/([A-Z])/g, ' $1').trim()}
                                  </h4>
                                  <RadioGroup 
                                    value={selectedCustomizations[category] as string || ''}
                                    onValueChange={(value) => handleOptionSelect(category, value)}
                                    className="flex flex-col space-y-2"
                                  >
                                    {options.map((option) => (
                                      <div key={option} className="flex items-center space-x-2">
                                        <RadioGroupItem value={option} id={`${category}-${option}`} />
                                        <Label htmlFor={`${category}-${option}`} className="text-xs sm:text-sm">{option}</Label>
                                      </div>
                                    ))}
                                  </RadioGroup>
                                </div>
                              ))}
                          </TabsContent>
                          
                          {item.customizations.addOns && item.customizations.addOns.length > 0 && (
                            <TabsContent value="addons" className="py-4">
                              <div className="space-y-3">
                                {item.customizations.addOns.map((addon) => (
                                  <div key={addon.name} className="flex items-center space-x-2">
                                    <Checkbox 
                                      id={`addon-${addon.name}`} 
                                      checked={isAddOnSelected(addon)}
                                      onCheckedChange={() => handleAddOnToggle(addon)}
                                    />
                                    <Label htmlFor={`addon-${addon.name}`} className="flex-1 text-xs sm:text-sm">
                                      {addon.name}
                                    </Label>
                                    <span className="text-xs sm:text-sm text-gray-500">+฿{addon.price.toFixed(0)}</span>
                                  </div>
                                ))}
                              </div>
                            </TabsContent>
                          )}
                        </Tabs>
                        
                        <div className="flex justify-between items-center mt-6">
                          <div className="font-bold text-base sm:text-lg text-restaurant-primary">
                            ฿{totalPrice.toFixed(0)}
                            {calculateAddOnPrice() > 0 && (
                              <span className="text-xs text-gray-500 ml-1">
                                (฿{item.price.toFixed(0)} + ฿{calculateAddOnPrice().toFixed(0)})
                              </span>
                            )}
                          </div>
                          <Button onClick={handleAddToCart} className="bg-restaurant-primary hover:bg-restaurant-primary/80 text-xs sm:text-sm">
                            {t("ui.addToCart")}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="text-restaurant-primary font-bold mt-2 text-base sm:text-lg">฿{item.price.toFixed(0)}</p>
                        <div className="flex justify-end mt-4">
                          <Button onClick={handleAddToCart} className="bg-restaurant-primary hover:bg-restaurant-primary/80 text-xs sm:text-sm">
                            {t("ui.addToCart")}
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          
          <Button 
            onClick={handleAddToCartClick} 
            size="sm" 
            className="bg-restaurant-primary hover:bg-restaurant-primary/80 text-white text-xs sm:text-sm px-2 sm:px-4"
          >
            <Plus className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> {t("ui.addToCart")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
