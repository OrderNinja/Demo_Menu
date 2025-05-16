
import { MenuItem } from "../context/CartContext";

// Menu data with items organized by categories
export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: "app-1",
    name: "Bruschetta",
    description: "Grilled bread rubbed with garlic and topped with olive oil, salt, tomato and herbs.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "appetizers",
  },
  {
    id: "app-2",
    name: "Spinach Artichoke Dip",
    description: "Creamy blend of spinach, artichoke hearts, and melted cheese served with tortilla chips.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1576506295286-5cda18df9ef1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "appetizers",
  },
  {
    id: "app-3",
    name: "Calamari Fritti",
    description: "Crispy fried squid served with a side of marinara sauce and lemon wedges.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "appetizers",
  },
  
  // Main Courses
  {
    id: "main-1",
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables and lemon butter sauce.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
  },
  {
    id: "main-2",
    name: "Chicken Parmesan",
    description: "Breaded chicken breast topped with marinara sauce and mozzarella, served with spaghetti.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
  },
  {
    id: "main-3",
    name: "Beef Tenderloin",
    description: "8oz beef tenderloin cooked to your preference, served with mashed potatoes and grilled asparagus.",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
  },
  {
    id: "main-4",
    name: "Vegetable Risotto",
    description: "Creamy Arborio rice cooked with seasonal vegetables, white wine, and Parmesan cheese.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1519488628252-46ad0a0e0159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
  },
  
  // Desserts
  {
    id: "dessert-1",
    name: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
  },
  {
    id: "dessert-2",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
  },
  {
    id: "dessert-3",
    name: "New York Cheesecake",
    description: "Rich and creamy cheesecake with a graham cracker crust, topped with fresh berries.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd258f7055?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
  },
  
  // Drinks
  {
    id: "drink-1",
    name: "Classic Mojito",
    description: "Refreshing cocktail with white rum, fresh mint, lime juice, sugar, and soda water.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1551734322-f43d8794477d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
  },
  {
    id: "drink-2",
    name: "Red Wine",
    description: "Glass of house red wine. Full-bodied with notes of blackberry and spice.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1553361371-9a22f6be36d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
  },
  {
    id: "drink-3",
    name: "Craft Beer",
    description: "Local IPA with citrus and pine notes, medium body with a hoppy finish.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
  },
];

// Define food categories for the navigation
export const categories = [
  {
    id: "appetizers",
    name: "Appetizers",
  },
  {
    id: "main-courses",
    name: "Main Courses",
  },
  {
    id: "desserts",
    name: "Desserts",
  },
  {
    id: "drinks",
    name: "Drinks",
  },
];
