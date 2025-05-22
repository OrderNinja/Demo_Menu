
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface CustomizableLogoProps {
  logoUrl?: string;
}

const CustomizableLogo: React.FC<CustomizableLogoProps> = ({ logoUrl }) => {
  const { t } = useLanguage();
  
  // If logoUrl is provided, use it; otherwise use the Order Ninja logo
  const logoToUse = logoUrl || "/lovable-uploads/711ed731-9c8f-4dba-a6ab-20bb9b27f6b4.png";
  
  return (
    <div className="flex items-center gap-2">
      <img 
        src={logoToUse} 
        alt="Order Ninja" 
        className="h-12 object-contain" 
      />
    </div>
  );
};

export default CustomizableLogo;
