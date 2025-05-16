
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
    customizations: {
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
      addOns: [
        { name: "Extra Garlic", price: 0.99 },
        { name: "Extra Cheese", price: 1.49 }
      ]
    }
  },
  {
    id: "app-2",
    name: "Spinach Artichoke Dip",
    description: "Creamy blend of spinach, artichoke hearts, and melted cheese served with tortilla chips.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1576506295286-5cda18df9ef1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "appetizers",
    customizations: {
      addOns: [
        { name: "Extra Chips", price: 1.99 },
        { name: "Gluten-Free Chips", price: 2.49 }
      ]
    }
  },
  {
    id: "app-3",
    name: "Calamari Fritti",
    description: "Crispy fried squid served with a side of marinara sauce and lemon wedges.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "appetizers",
    customizations: {
      sauce: ["Marinara", "Aioli", "Sweet Chili", "Tartar"],
      addOns: [
        { name: "Extra Sauce", price: 0.99 }
      ]
    }
  },
  {
    id: "app-4",
    name: "Buffalo Wings",
    description: "Crispy chicken wings tossed in buffalo sauce served with celery sticks and blue cheese dip.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1608039783021-aa5cfd70e8bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "appetizers",
    customizations: {
      spicyLevel: ["Mild", "Medium", "Hot", "Extra Hot"],
      sauce: ["Buffalo", "BBQ", "Honey Garlic", "Teriyaki"],
      addOns: [
        { name: "Extra Blue Cheese", price: 0.99 },
        { name: "Extra Ranch", price: 0.99 },
        { name: "Extra Celery", price: 0.49 }
      ]
    }
  },
  
  // Main Courses
  {
    id: "main-1",
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables and lemon butter sauce.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
    customizations: {
      spicyLevel: ["Not Spicy", "Mild", "Medium"],
      doneness: ["Medium Rare", "Medium", "Medium Well", "Well Done"],
      sides: ["Mashed Potatoes", "Roasted Vegetables", "Quinoa", "Rice Pilaf"],
      addOns: [
        { name: "Extra Sauce", price: 1.49 },
        { name: "Garlic Bread", price: 2.99 }
      ]
    }
  },
  {
    id: "main-2",
    name: "Chicken Parmesan",
    description: "Breaded chicken breast topped with marinara sauce and mozzarella, served with spaghetti.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
    customizations: {
      pastaType: ["Spaghetti", "Penne", "Fettuccine"],
      sauce: ["Marinara", "Alfredo", "Rosé"],
      addOns: [
        { name: "Extra Cheese", price: 1.99 },
        { name: "Side Salad", price: 3.99 },
        { name: "Garlic Bread", price: 2.99 }
      ]
    }
  },
  {
    id: "main-3",
    name: "Beef Tenderloin",
    description: "8oz beef tenderloin cooked to your preference, served with mashed potatoes and grilled asparagus.",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
    customizations: {
      doneness: ["Rare", "Medium Rare", "Medium", "Medium Well", "Well Done"],
      sauce: ["Red Wine Sauce", "Peppercorn", "Mushroom", "Béarnaise"],
      sides: ["Mashed Potatoes", "Roasted Vegetables", "Fries", "Baked Potato"],
      addOns: [
        { name: "Grilled Shrimp", price: 5.99 },
        { name: "Sautéed Mushrooms", price: 2.99 }
      ]
    }
  },
  {
    id: "main-4",
    name: "Vegetable Risotto",
    description: "Creamy Arborio rice cooked with seasonal vegetables, white wine, and Parmesan cheese.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1519488628252-46ad0a0e0159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
    customizations: {
      addOns: [
        { name: "Grilled Chicken", price: 4.99 },
        { name: "Grilled Shrimp", price: 5.99 },
        { name: "Extra Parmesan", price: 1.49 }
      ]
    }
  },
  {
    id: "main-5",
    name: "Thai Green Curry",
    description: "Authentic Thai curry with coconut milk, vegetables, and your choice of protein, served with jasmine rice.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
    customizations: {
      protein: ["Chicken", "Beef", "Shrimp", "Tofu"],
      spicyLevel: ["Mild", "Medium", "Hot", "Thai Hot"],
      addOns: [
        { name: "Extra Rice", price: 1.99 },
        { name: "Extra Vegetables", price: 2.49 }
      ]
    }
  },
  
  // Desserts
  {
    id: "dessert-1",
    name: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
    customizations: {
      addOns: [
        { name: "Chocolate Drizzle", price: 0.99 },
        { name: "Raspberry Sauce", price: 0.99 },
        { name: "Whipped Cream", price: 0.49 }
      ]
    }
  },
  {
    id: "dessert-2",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
    customizations: {
      addOns: [
        { name: "Extra Ice Cream", price: 1.99 },
        { name: "Caramel Sauce", price: 0.99 },
        { name: "Fresh Berries", price: 1.49 }
      ]
    }
  },
  {
    id: "dessert-3",
    name: "New York Cheesecake",
    description: "Rich and creamy cheesecake with a graham cracker crust, topped with fresh berries.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd258f7055?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
    customizations: {
      topping: ["Strawberry", "Blueberry", "Caramel", "Chocolate"],
      addOns: [
        { name: "Whipped Cream", price: 0.49 },
        { name: "Extra Berries", price: 1.49 }
      ]
    }
  },
  
  // Drinks
  {
    id: "drink-1",
    name: "Classic Mojito",
    description: "Refreshing cocktail with white rum, fresh mint, lime juice, sugar, and soda water.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1551734322-f43d8794477d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    customizations: {
      ice: ["Regular", "Light", "Extra", "No Ice"],
      sugarLevel: ["Regular", "Half Sweet", "Less Sweet", "No Sugar"],
      addOns: [
        { name: "Extra Mint", price: 0.49 },
        { name: "Fruit Garnish", price: 0.99 }
      ]
    }
  },
  {
    id: "drink-2",
    name: "Red Wine",
    description: "Glass of house red wine. Full-bodied with notes of blackberry and spice.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1553361371-9a22f6be36d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks"
  },
  {
    id: "drink-3",
    name: "Craft Beer",
    description: "Local IPA with citrus and pine notes, medium body with a hoppy finish.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks"
  },
  {
    id: "drink-4",
    name: "Strawberry Smoothie",
    description: "Fresh strawberries blended with yogurt and honey for a refreshing treat.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1638176067000-9a227f9c0009?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    customizations: {
      ice: ["Regular", "Light", "Extra", "No Ice"],
      sugarLevel: ["Regular", "Half Sweet", "Less Sweet", "No Sugar"],
      addOns: [
        { name: "Protein Boost", price: 1.49 },
        { name: "Chia Seeds", price: 0.99 },
        { name: "Almond Milk (Instead of Regular)", price: 1.49 }
      ]
    }
  },
  
  // Combo Meals
  {
    id: "combo-1",
    name: "Burger Combo",
    description: "Angus beef burger with fries and your choice of drink. Save 15% compared to individual items.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "combos",
    customizations: {
      protein: ["Beef", "Chicken", "Veggie"],
      sides: ["French Fries", "Sweet Potato Fries", "Side Salad", "Onion Rings"],
      drinks: ["Soda", "Iced Tea", "Lemonade", "Water"],
      addOns: [
        { name: "Cheese", price: 0.99 },
        { name: "Bacon", price: 1.49 },
        { name: "Avocado", price: 1.99 }
      ]
    }
  },
  {
    id: "combo-2",
    name: "Family Dinner",
    description: "Choose 2 main courses, 2 appetizers, and a dessert to share. Perfect for family of 4.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "combos",
    customizations: {
      mains: ["Chicken Parmesan", "Beef Tenderloin", "Grilled Salmon", "Vegetable Risotto"],
      appetizers: ["Bruschetta", "Spinach Artichoke Dip", "Calamari Fritti", "Buffalo Wings"],
      desserts: ["Tiramisu", "Chocolate Lava Cake", "New York Cheesecake"],
      addOns: [
        { name: "Extra Main Course", price: 15.99 },
        { name: "Extra Appetizer", price: 7.99 },
        { name: "Additional Dessert", price: 5.99 }
      ]
    }
  },
  {
    id: "combo-3",
    name: "Date Night Special",
    description: "Romantic dinner for two with shared appetizer, two main courses, dessert, and wine.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "combos",
    customizations: {
      appetizer: ["Bruschetta", "Spinach Artichoke Dip", "Calamari Fritti"],
      mains: ["Beef Tenderloin", "Grilled Salmon", "Chicken Parmesan", "Vegetable Risotto"],
      dessert: ["Tiramisu", "Chocolate Lava Cake", "New York Cheesecake"],
      wine: ["Red Wine", "White Wine", "Sparkling Wine"],
      addOns: [
        { name: "Flowers at Table", price: 14.99 },
        { name: "Champagne Upgrade", price: 9.99 }
      ]
    }
  }
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
  {
    id: "combos",
    name: "Combos",
  }
];
