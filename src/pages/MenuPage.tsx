
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import MenuItemCard from "@/components/MenuItemCard";
import CartIcon from "@/components/CartIcon";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import { menuItems, categories } from "@/data/menuData";

const MenuPage: React.FC = () => {
  const navigate = useNavigate();
  const { userInfo, isInfoComplete } = useUser();
  const { totalItems } = useCart();
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [filteredItems, setFilteredItems] = useState(menuItems.filter(item => item.category === activeCategory));

  // Redirect to landing if user info is not complete
  useEffect(() => {
    if (!isInfoComplete) {
      navigate("/");
    }
  }, [isInfoComplete, navigate]);

  // Filter items when category changes
  useEffect(() => {
    setFilteredItems(menuItems.filter(item => item.category === activeCategory));
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-gray-600">
              Welcome, {userInfo.name}
            </span>
            <CartIcon />
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories sidebar */}
          <aside className="md:w-64 shrink-0">
            <div className="bg-white rounded-lg shadow p-4 sticky top-24">
              <h2 className="text-xl font-bold text-restaurant-secondary mb-4">Categories</h2>
              <nav className="space-y-1">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      activeCategory === category.id
                        ? "bg-restaurant-primary text-white"
                        : "hover:bg-restaurant-light text-gray-700"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
          
          {/* Menu items */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-restaurant-secondary mb-6">
              {categories.find(cat => cat.id === activeCategory)?.name}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      {/* Sticky order button */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-4">
          <div className="container mx-auto flex justify-between items-center">
            <span className="font-medium text-restaurant-secondary">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} in cart
            </span>
            <Button 
              onClick={() => navigate("/order")}
              className="bg-restaurant-primary hover:bg-restaurant-secondary"
            >
              View Your Order
            </Button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-restaurant-secondary text-white py-4 text-center mt-16">
        <p>&copy; 2025 Bistro Royale. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MenuPage;
