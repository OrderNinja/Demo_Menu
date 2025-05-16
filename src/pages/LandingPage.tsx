
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
    toast.success("Welcome to Bistro Royale!");
    navigate("/menu");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <div 
        className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-restaurant-light to-white px-4 py-12"
      >
        <div className="max-w-4xl w-full mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-restaurant-secondary mb-6">
            Exquisite Dining Experience
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Indulge in our chef's culinary masterpieces, featuring fresh local ingredients 
            and internationally inspired flavors. Reserve your table or order online.
          </p>

          {/* Welcome section with continue button */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-restaurant-secondary mb-6">
              Welcome to Bistro Royale
            </h2>
            
            <Button 
              onClick={handleContinue}
              className="w-full bg-restaurant-primary hover:bg-restaurant-secondary"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-restaurant-secondary text-white py-4 text-center">
        <p>&copy; 2025 Bistro Royale. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
