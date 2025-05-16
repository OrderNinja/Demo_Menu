
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useUser();

  const handleContinue = () => {
    // Just set default values since we don't collect user info anymore
    setUserInfo({ name: "Guest", phone: "N/A" });
    toast.success("Welcome to Thai Orchid!");
    navigate("/menu");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[url('https://images.unsplash.com/photo-1618516976405-127715062a9a?q=80&w=1950')] bg-cover bg-center">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 bg-black/40">
        <div className="max-w-4xl w-full mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Authentic Thai Cuisine
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Experience the vibrant flavors of Thailand with our chef's traditional recipes.
            Fresh herbs, exotic spices, and the perfect balance of sweet, sour, salty, and spicy.
          </p>

          {/* Welcome section with continue button */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-restaurant-secondary mb-6">
              Welcome to Thai Orchid
            </h2>
            
            <Button 
              onClick={handleContinue}
              className="w-full bg-restaurant-primary hover:bg-restaurant-secondary"
            >
              Explore Our Menu
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-restaurant-secondary/90 backdrop-blur-sm text-white py-4 text-center">
        <p>&copy; 2025 Thai Orchid. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
