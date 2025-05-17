
import React from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

interface QRCodePageProps {
  tableId?: string;
}

const QRCodePage: React.FC<QRCodePageProps> = ({ tableId = "12" }) => {
  const navigate = useNavigate();
  const appUrl = window.location.origin;
  const qrValue = `${appUrl}/?table=${tableId}`;
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-restaurant-secondary py-4 px-6 text-white">
        <div className="container mx-auto flex justify-center items-center">
          <Logo />
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-restaurant-secondary mb-6">
            Scan to Order
          </h1>
          
          {/* Real QR Code that links to the restaurant menu with table ID */}
          <div className="border-4 border-restaurant-primary rounded-lg p-6 mb-6">
            <QRCodeSVG 
              value={qrValue}
              size={180}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              level={"H"}
              includeMargin={false}
            />
          </div>
          
          <div className="text-center mb-6">
            <p className="text-gray-600 mb-2">Scan this code with your phone</p>
            <p className="text-lg font-medium text-restaurant-primary">
              Table #{tableId}
            </p>
          </div>
          
          {/* For demo purposes - allows navigating to home in our preview */}
          <Button 
            onClick={() => navigate("/")}
            className="bg-restaurant-primary hover:bg-restaurant-secondary"
          >
            Continue to Menu (Demo)
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-gray-500 max-w-md text-center">
          Having trouble scanning? Ask our staff for assistance or visit {appUrl} on your device.
        </p>
      </main>
      
      <footer className="bg-restaurant-secondary text-white py-4 text-center">
        <p>&copy; 2025 Thai Orchid. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default QRCodePage;
