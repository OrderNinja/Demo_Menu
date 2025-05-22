
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomizableLogo from "@/components/CustomizableLogo";
import MenuItemCard from "@/components/MenuItemCard";
import CartIcon from "@/components/CartIcon";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import { useLanguage } from "@/context/LanguageContext";
import { menuItems, categories } from "@/data/menuData";

const MenuPage: React.FC = () => {
  const navigate = useNavigate();
  const { userInfo, isInfoComplete } = useUser();
  const { totalItems } = useCart();
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [filteredItems, setFilteredItems] = useState(menuItems.filter(item => item.category === activeCategory));
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Redirect to landing if user info is not complete
  useEffect(() => {
    if (!isInfoComplete) {
      navigate("/");
    }
  }, [isInfoComplete, navigate]);

  // Filter items when category changes
  useEffect(() => {
    setFilteredItems(menuItems.filter(item => item.category === activeCategory));
    // Scroll to top when changing categories
    window.scrollTo(0, 0);
  }, [activeCategory]);

  // Simulate loading more items for UX
  const loadMoreItems = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setIsLoadingMore(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-restaurant-secondary">
      {/* Header */}
      <header className="bg-restaurant-primary py-4 px-6 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <CustomizableLogo />
          
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-gray-100">
              {t("ui.welcome")}, {userInfo.name}
            </span>
            <LanguageSwitcher />
            <CartIcon />
          </div>
        </div>
      </header>
      
      {/* Category tabs - horizontal below header */}
      <div className="bg-white shadow-md py-2 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="w-full h-auto flex overflow-x-auto pb-1 justify-start md:justify-center gap-1">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-4 py-2 whitespace-nowrap data-[state=active]:bg-restaurant-primary data-[state=active]:text-white"
                >
                  {t(`categories.${category.id}`, category.name)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Menu items */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-2 bg-restaurant-primary"></div>
            <h1 className="text-3xl font-bold text-restaurant-primary">
              {t(`categories.${activeCategory}`, categories.find(cat => cat.id === activeCategory)?.name || "")}
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>

          {isLoadingMore && (
            <div className="flex justify-center my-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-restaurant-primary"></div>
            </div>
          )}
        </div>
      </main>
      
      {/* Sticky order button */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-4">
          <div className="container mx-auto flex justify-between items-center">
            <span className="font-medium text-restaurant-primary">
              {totalItems} {totalItems === 1 ? t("ui.itemInCart") : t("ui.itemsInCart")}
            </span>
            <Button 
              onClick={() => navigate("/order")}
              className="bg-restaurant-primary hover:bg-restaurant-primary/80"
            >
              {t("ui.viewOrder")}
            </Button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-restaurant-primary text-white py-4 text-center mt-16">
        <p>&copy; 2025 {t("app.title")}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MenuPage;
