
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface CustomizableLogoProps {
  logoUrl?: string;
}

const CustomizableLogo: React.FC<CustomizableLogoProps> = ({ logoUrl }) => {
  const { t } = useLanguage();
  
  // Default logo if no custom logo is provided
  if (!logoUrl) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-restaurant-primary rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-bold font-poppins">TO</span>
        </div>
        <div className="text-2xl font-bold font-poppins text-white">
          {t("app.title")}
        </div>
      </div>
    );
  }
  
  // Custom logo if provided
  return (
    <div className="flex items-center gap-2">
      <img 
        src={logoUrl} 
        alt={t("app.title")} 
        className="w-12 h-12 object-contain" 
      />
      <div className="text-2xl font-bold font-poppins text-white">
        {t("app.title")}
      </div>
    </div>
  );
};

export default CustomizableLogo;
