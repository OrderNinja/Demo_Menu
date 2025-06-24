
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-restaurant-secondary">
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="container mx-auto">
          <Logo />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md p-6">
          <h1 className="text-6xl font-bold text-restaurant-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-restaurant-primary mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button 
            onClick={() => navigate("/")} 
            className="bg-restaurant-primary hover:bg-restaurant-primary/80"
          >
            Return Home
          </Button>
        </div>
      </main>

      <footer className="bg-restaurant-primary text-white py-4 text-center">
        <p>&copy; 2025 Order Ninja. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NotFoundPage;
