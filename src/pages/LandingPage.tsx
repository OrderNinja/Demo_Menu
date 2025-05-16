
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useUser();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "" });

  const validateForm = () => {
    const newErrors = { name: "", phone: "" };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setUserInfo({ name, phone });
      toast.success(`Welcome, ${name}!`);
      navigate("/menu");
    }
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

          {/* Welcome form */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-restaurant-secondary mb-6">
              Welcome to Bistro Royale
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-restaurant-primary hover:bg-restaurant-secondary"
                >
                  Continue
                </Button>
              </div>
            </form>
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
