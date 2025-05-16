
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-12 h-12 bg-restaurant-primary rounded-full flex items-center justify-center">
        <span className="text-white text-2xl font-bold font-poppins">TO</span>
      </div>
      <div className="text-2xl font-bold font-poppins text-white">
        Thai Orchid
      </div>
    </div>
  );
};

export default Logo;
