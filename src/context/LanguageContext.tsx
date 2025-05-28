
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
    "app.title": "Order Ninja",
    "categories.mainDishes": "Main Dishes",
    "categories.soups": "Soups",
    "categories.appetizers": "Appetizers",
    "categories.salads": "Salads",
    "categories.beverages": "Beverages",
    "ui.welcome": "Welcome",
    "ui.viewOrder": "View Your Order",
    "ui.addToCart": "Add to Cart",
    "ui.customize": "Customize",
    "ui.options": "Options",
    "ui.details": "Details",
    "ui.itemsInCart": "items in cart",
    "ui.itemInCart": "item in cart",
    "cart.added": "Added {item} to your order",
    "cart.addedAnother": "Added another {item} to your order",
    "cart.removed": "Removed {item} from your order",
    "cart.cleared": "Your cart has been cleared",
  },
  "th": {
    "app.title": "ออเดอร์นินจา",
    "categories.mainDishes": "อาหารจานหลัก",
    "categories.soups": "ซุป",
    "categories.appetizers": "ของว่าง",
    "categories.salads": "ยำ",
    "categories.beverages": "เครื่องดื่ม",
    "ui.welcome": "ยินดีต้อนรับ",
    "ui.viewOrder": "ดูรายการสั่งซื้อ",
    "ui.addToCart": "เพิ่มลงตะกร้า",
    "ui.customize": "ปรับแต่ง",
    "ui.options": "ตัวเลือก",
    "ui.details": "รายละเอียด",
    "ui.itemsInCart": "รายการในตะกร้า",
    "ui.itemInCart": "รายการในตะกร้า",
    "cart.added": "เพิ่ม {item} ลงในรายการสั่งซื้อแล้ว",
    "cart.addedAnother": "เพิ่ม {item} อีกหนึ่งรายการลงในรายการสั่งซื้อแล้ว",
    "cart.removed": "ลบ {item} ออกจากรายการสั่งซื้อแล้ว",
    "cart.cleared": "ล้างตะกร้าสินค้าแล้ว",
  },
  "zh-cn": {
    "app.title": "订餐忍者",
    "categories.mainDishes": "主菜",
    "categories.soups": "汤类",
    "categories.appetizers": "开胃菜",
    "categories.salads": "沙拉",
    "categories.beverages": "饮料",
    "ui.welcome": "欢迎",
    "ui.viewOrder": "查看订单",
    "ui.addToCart": "添加到购物车",
    "ui.customize": "定制",
    "ui.options": "选项",
    "ui.details": "详情",
    "ui.itemsInCart": "件商品在购物车中",
    "ui.itemInCart": "件商品在购物车中",
    "cart.added": "已添加 {item} 到你的订单",
    "cart.addedAnother": "已添加另一个 {item} 到你的订单",
    "cart.removed": "已从你的订单中移除 {item}",
    "cart.cleared": "你的购物车已清空",
  },
  "zh-tw": {
    "app.title": "訂餐忍者",
    "categories.mainDishes": "主菜",
    "categories.soups": "湯類",
    "categories.appetizers": "開胃菜",
    "categories.salads": "沙拉",
    "categories.beverages": "飲料",
    "ui.welcome": "歡迎",
    "ui.viewOrder": "查看訂單",
    "ui.addToCart": "添加到購物車",
    "ui.customize": "定制",
    "ui.options": "選項",
    "ui.details": "詳情",
    "ui.itemsInCart": "件商品在購物車中",
    "ui.itemInCart": "件商品在購物車中",
    "cart.added": "已添加 {item} 到你的訂單",
    "cart.addedAnother": "已添加另一個 {item} 到你的訂單",
    "cart.removed": "已從你的訂單中移除 {item}",
    "cart.cleared": "你的購物車已清空",
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
