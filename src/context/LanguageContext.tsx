
import React, { createContext, useState, useContext, ReactNode } from "react";

export type Language = "en" | "th" | "zh-cn" | "zh-tw";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations data
const translations: Record<Language, Record<string, string>> = {
  "en": {
    "app.title": "Thai Orchid",
    "categories.appetizers": "Appetizers",
    "categories.soups": "Soups",
    "categories.salads": "Salads",
    "categories.mainDishes": "Main Dishes",
    "categories.noodles": "Noodles",
    "categories.rice": "Rice Dishes",
    "categories.desserts": "Desserts",
    "categories.beverages": "Beverages",
    "categories.specials": "Chef's Specials",
    "categories.vegetarian": "Vegetarian",
    "ui.welcome": "Welcome",
    "ui.viewOrder": "View Your Order",
    "ui.addToCart": "Add to Cart",
    "ui.customize": "Customize",
    "ui.options": "Options",
    "ui.details": "Details",
    "ui.itemsInCart": "items in cart",
    "ui.itemInCart": "item in cart",
  },
  "th": {
    "app.title": "ไทย ออร์คิด",
    "categories.appetizers": "ของว่าง",
    "categories.soups": "ซุป",
    "categories.salads": "ยำ",
    "categories.mainDishes": "อาหารจานหลัก",
    "categories.noodles": "ก๋วยเตี๋ยว",
    "categories.rice": "ข้าว",
    "categories.desserts": "ของหวาน",
    "categories.beverages": "เครื่องดื่ม",
    "categories.specials": "เมนูแนะนำจากเชฟ",
    "categories.vegetarian": "อาหารมังสวิรัติ",
    "ui.welcome": "ยินดีต้อนรับ",
    "ui.viewOrder": "ดูรายการสั่งซื้อ",
    "ui.addToCart": "เพิ่มลงตะกร้า",
    "ui.customize": "ปรับแต่ง",
    "ui.options": "ตัวเลือก",
    "ui.details": "รายละเอียด",
    "ui.itemsInCart": "รายการในตะกร้า",
    "ui.itemInCart": "รายการในตะกร้า",
  },
  "zh-cn": {
    "app.title": "泰国兰花",
    "categories.appetizers": "开胃菜",
    "categories.soups": "汤类",
    "categories.salads": "沙拉",
    "categories.mainDishes": "主菜",
    "categories.noodles": "面条",
    "categories.rice": "饭类",
    "categories.desserts": "甜点",
    "categories.beverages": "饮料",
    "categories.specials": "厨师推荐",
    "categories.vegetarian": "素食",
    "ui.welcome": "欢迎",
    "ui.viewOrder": "查看订单",
    "ui.addToCart": "添加到购物车",
    "ui.customize": "定制",
    "ui.options": "选项",
    "ui.details": "详情",
    "ui.itemsInCart": "件商品在购物车中",
    "ui.itemInCart": "件商品在购物车中",
  },
  "zh-tw": {
    "app.title": "泰國蘭花",
    "categories.appetizers": "開胃菜",
    "categories.soups": "湯類",
    "categories.salads": "沙拉",
    "categories.mainDishes": "主菜",
    "categories.noodles": "麵條",
    "categories.rice": "飯類",
    "categories.desserts": "甜點",
    "categories.beverages": "飲料",
    "categories.specials": "廚師推薦",
    "categories.vegetarian": "素食",
    "ui.welcome": "歡迎",
    "ui.viewOrder": "查看訂單",
    "ui.addToCart": "添加到購物車",
    "ui.customize": "定制",
    "ui.options": "選項",
    "ui.details": "詳情",
    "ui.itemsInCart": "件商品在購物車中",
    "ui.itemInCart": "件商品在購物車中",
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  // Translation function
  const t = (key: string, fallback?: string): string => {
    return translations[language][key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
