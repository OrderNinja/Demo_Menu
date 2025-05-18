import { MenuItem } from "../context/CartContext";

// Menu data with items organized by categories
export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: "app-1",
    name: "Thai Spring Rolls",
    description: "Crispy spring rolls filled with vegetables, served with sweet chili dipping sauce.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1620531480894-a612b4ab0641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "appetizers",
    customizations: {
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
      addOns: [
        { name: "Extra Sauce", price: 0.99 },
        { name: "Peanut Sauce", price: 1.49 }
      ]
    }
  },
  {
    id: "app-2",
    name: "Satay Skewers",
    description: "Grilled chicken skewers marinated in Thai spices, served with peanut sauce.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "appetizers",
    customizations: {
      protein: ["Chicken", "Tofu", "Beef"],
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
      addOns: [
        { name: "Extra Skewers (2)", price: 3.99 },
        { name: "Cucumber Salad", price: 2.49 }
      ]
    }
  },
  {
    id: "app-3",
    name: "Tom Kha Soup",
    description: "Coconut soup with galangal, lemongrass, mushrooms, and your choice of protein.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "appetizers",
    customizations: {
      protein: ["Chicken", "Shrimp", "Tofu", "Vegetable"],
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot", "Thai Hot"],
      addOns: [
        { name: "Extra Lime", price: 0.50 },
        { name: "Extra Mushrooms", price: 1.49 }
      ]
    }
  },
  {
    id: "app-4",
    name: "Mango Salad",
    description: "Fresh green mango with red onion, cashews, and cilantro in a zesty lime dressing.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1617118602201-1d1dec239d61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "appetizers",
    customizations: {
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
      addOns: [
        { name: "Add Grilled Shrimp", price: 3.99 },
        { name: "Add Grilled Chicken", price: 2.99 },
        { name: "Add Crispy Tofu", price: 2.49 }
      ]
    }
  },
  {
    id: "app-5",
    name: "Tod Mun Pla",
    description: "Thai fish cakes made with red curry paste, kaffir lime leaves, and served with cucumber relish.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1617118602065-92652c38d107?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "appetizers",
    customizations: {
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
      addOns: [
        { name: "Extra Sauce", price: 0.99 },
        { name: "Extra Cucumber Relish", price: 1.49 }
      ]
    }
  },
  {
    id: "app-6",
    name: "Som Tum",
    description: "Traditional green papaya salad with tomatoes, peanuts, and lime dressing.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1626804372905-52c9fb0a60fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "appetizers",
    customizations: {
      spicyLevel: ["Mild", "Medium", "Hot", "Thai Hot"],
      addOns: [
        { name: "Grilled Shrimp", price: 3.99 },
        { name: "Salted Egg", price: 1.99 }
      ]
    }
  },
  
  // Main Courses
  {
    id: "main-1",
    name: "Pad Thai",
    description: "Thailand's famous stir-fried rice noodles with eggs, bean sprouts, peanuts, and lime.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
    customizations: {
      protein: ["Chicken", "Shrimp", "Tofu", "Vegetable", "Combo"],
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot", "Thai Hot"],
      addOns: [
        { name: "Extra Egg", price: 1.49 },
        { name: "Extra Peanuts", price: 0.99 },
        { name: "Extra Bean Sprouts", price: 0.99 }
      ]
    }
  },
  {
    id: "main-2",
    name: "Green Curry",
    description: "Aromatic green curry with Thai eggplant, bamboo shoots, bell peppers, and basil leaves.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
    customizations: {
      protein: ["Chicken", "Beef", "Shrimp", "Tofu", "Vegetable"],
      spicyLevel: ["Mild", "Medium", "Hot", "Thai Hot"],
      rice: ["Jasmine Rice", "Brown Rice", "Sticky Rice", "No Rice"],
      addOns: [
        { name: "Extra Vegetables", price: 2.49 },
        { name: "Extra Protein", price: 3.99 }
      ]
    }
  },
  {
    id: "main-3",
    name: "Massaman Curry",
    description: "Rich, mild curry with potatoes, peanuts, and your choice of protein.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
    customizations: {
      protein: ["Chicken", "Beef", "Tofu"],
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
      rice: ["Jasmine Rice", "Brown Rice", "Sticky Rice", "No Rice"],
      addOns: [
        { name: "Extra Potatoes", price: 1.99 },
        { name: "Extra Peanuts", price: 0.99 }
      ]
    }
  },
  {
    id: "main-4",
    name: "Drunken Noodles",
    description: "Wide rice noodles stir-fried with vegetables, Thai basil, and your choice of protein.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
    customizations: {
      protein: ["Chicken", "Beef", "Shrimp", "Tofu", "Combo"],
      spicyLevel: ["Medium", "Hot", "Thai Hot", "Extra Hot"],
      addOns: [
        { name: "Extra Vegetables", price: 2.49 },
        { name: "Extra Protein", price: 3.99 },
        { name: "Extra Basil", price: 0.99 }
      ]
    }
  },
  {
    id: "main-5",
    name: "Pineapple Fried Rice",
    description: "Fragrant fried rice with pineapple chunks, cashews, raisins, and curry powder.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1536489885071-87983c3e2859?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
    customizations: {
      protein: ["Chicken", "Shrimp", "Tofu", "Vegetable", "Combo"],
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
      addOns: [
        { name: "Extra Cashews", price: 1.49 },
        { name: "Extra Pineapple", price: 1.49 },
        { name: "Extra Protein", price: 3.99 }
      ]
    }
  },
  {
    id: "main-6",
    name: "Khao Soi",
    description: "Northern Thai curry noodle soup with crispy noodles on top.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1569562211263-0ec0c7a722e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
    customizations: {
      protein: ["Chicken", "Beef", "Tofu"],
      spicyLevel: ["Mild", "Medium", "Hot", "Thai Hot"],
      addOns: [
        { name: "Extra Crispy Noodles", price: 1.99 },
        { name: "Extra Pickled Vegetables", price: 1.49 }
      ]
    }
  },
  {
    id: "main-7",
    name: "Pad See Ew",
    description: "Stir-fried wide rice noodles with egg, Chinese broccoli, and sweet soy sauce.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1553163698-fbf75abfd4c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
    customizations: {
      protein: ["Chicken", "Beef", "Shrimp", "Tofu"],
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
      addOns: [
        { name: "Extra Vegetables", price: 2.49 },
        { name: "Extra Protein", price: 3.99 },
        { name: "Extra Egg", price: 1.49 }
      ]
    }
  },
  {
    id: "main-8",
    name: "Tom Yum Goong",
    description: "Spicy and sour soup with shrimp, lemongrass, galangal, and kaffir lime leaves.",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "main-courses",
    customizations: {
      protein: ["Shrimp", "Chicken", "Mixed Seafood (+$3)"],
      spicyLevel: ["Medium", "Hot", "Thai Hot", "Extra Hot"],
      addOns: [
        { name: "Extra Mushrooms", price: 1.99 },
        { name: "Extra Shrimp", price: 3.99 },
        { name: "Coconut Milk (Tom Kha Style)", price: 1.49 }
      ]
    }
  },
  
  // Desserts
  {
    id: "dessert-1",
    name: "Mango Sticky Rice",
    description: "Sweet sticky rice topped with fresh mango slices and coconut sauce.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1621236378591-eaf80b32b100?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
    customizations: {
      addOns: [
        { name: "Extra Mango", price: 1.99 },
        { name: "Coconut Ice Cream", price: 2.99 }
      ]
    }
  },
  {
    id: "dessert-2",
    name: "Thai Tea Crème Brûlée",
    description: "Creamy custard infused with Thai tea, topped with caramelized sugar.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1531240062960-4d562977f221?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
    customizations: {
      addOns: [
        { name: "Fresh Berries", price: 1.49 },
        { name: "Whipped Cream", price: 0.99 }
      ]
    }
  },
  {
    id: "dessert-3",
    name: "Coconut Ice Cream",
    description: "Homemade coconut ice cream served with crushed peanuts and sticky rice.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
    customizations: {
      toppings: ["Crushed Peanuts", "Palm Sugar Syrup", "Mango Sauce", "No Topping"],
      addOns: [
        { name: "Sticky Rice", price: 1.99 },
        { name: "Extra Scoop", price: 2.99 }
      ]
    }
  },
  {
    id: "dessert-4",
    name: "Khanom Krok",
    description: "Coconut rice pancakes with sweet or savory toppings.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
    customizations: {
      toppings: ["Sweet Corn", "Green Onion", "Taro", "Coconut"],
      addOns: [
        { name: "Extra Pancakes (3)", price: 3.99 }
      ]
    }
  },
  {
    id: "dessert-5",
    name: "Bua Loy",
    description: "Colorful rice flour dumplings in warm coconut milk.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1606804581030-84c30ad98f14?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
    customizations: {
      addOns: [
        { name: "Sesame Filling", price: 1.49 },
        { name: "Taro Filling", price: 1.49 }
      ]
    }
  },
  
  // Drinks
  {
    id: "drink-1",
    name: "Thai Tea",
    description: "Sweet and creamy Thai tea with condensed milk, served over ice.",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    customizations: {
      ice: ["Regular", "Light", "Extra", "No Ice"],
      sugarLevel: ["Regular", "Half Sweet", "Less Sweet", "No Sugar"],
      addOns: [
        { name: "Boba Pearls", price: 0.99 },
        { name: "Grass Jelly", price: 0.99 }
      ]
    }
  },
  {
    id: "drink-2",
    name: "Lychee Coconut Smoothie",
    description: "Refreshing blend of lychee and coconut milk, perfect for cooling down.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1513558161201-1d1dec239d61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    customizations: {
      ice: ["Regular", "Light", "Extra"],
      sugarLevel: ["Regular", "Half Sweet", "Less Sweet", "No Sugar"],
      addOns: [
        { name: "Boba Pearls", price: 0.99 },
        { name: "Fresh Lychee Fruit", price: 1.49 }
      ]
    }
  },
  {
    id: "drink-3",
    name: "Singha Beer",
    description: "Thailand's most popular pale lager beer.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks"
  },
  {
    id: "drink-4",
    name: "Pandan Leaf Juice",
    description: "Traditional Thai juice made from pandan leaves, slightly sweet with a unique flavor.",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1578523773635-24c000b7dd46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    customizations: {
      ice: ["Regular", "Light", "Extra", "No Ice"],
      sugarLevel: ["Regular", "Half Sweet", "Less Sweet", "No Sugar"],
      addOns: [
        { name: "Coconut Jelly", price: 0.99 },
        { name: "Chia Seeds", price: 0.99 }
      ]
    }
  },
  {
    id: "drink-5",
    name: "Coconut Smoothie",
    description: "Refreshing coconut smoothie made with fresh coconut meat and milk.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    customizations: {
      ice: ["Regular", "Light", "Extra"],
      sugarLevel: ["Regular", "Half Sweet", "Less Sweet", "No Sugar"],
      addOns: [
        { name: "Grass Jelly", price: 0.99 },
        { name: "Coconut Jelly", price: 0.99 }
      ]
    }
  },
  {
    id: "drink-6",
    name: "Chrysanthemum Tea",
    description: "Traditional Thai herbal tea with chrysanthemum flowers.",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    customizations: {
      temperature: ["Hot", "Cold"],
      sugarLevel: ["Regular", "Half Sweet", "Less Sweet", "No Sugar"],
      addOns: [
        { name: "Honey", price: 0.75 },
        { name: "Lemon", price: 0.50 }
      ]
    }
  },
  
  // Combos
  {
    id: "combo-1",
    name: "Thai Street Food Combo",
    description: "Sample authentic Thai street foods: 2 spring rolls, Pad Thai, and Thai iced tea.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "combos",
    customizations: {
      protein: ["Chicken", "Tofu", "Shrimp (+$2)"],
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot", "Thai Hot"],
      addOns: [
        { name: "Extra Spring Roll", price: 1.99 },
        { name: "Peanut Sauce", price: 0.99 },
        { name: "Mango Sticky Rice Dessert", price: 6.99 }
      ]
    }
  },
  {
    id: "combo-2",
    name: "Family Feast",
    description: "Perfect for 4: Spring rolls, Tom Yum soup, Pad Thai, Green Curry, and Mango Sticky Rice.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "combos",
    customizations: {
      curryProtein: ["Chicken", "Beef", "Tofu"],
      noodleProtein: ["Chicken", "Shrimp", "Combo"],
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
      rice: ["Jasmine Rice", "Brown Rice", "Sticky Rice"],
      addOns: [
        { name: "Extra Rice", price: 3.99 },
        { name: "Thai Iced Tea (4)", price: 14.99 },
        { name: "Extra Curry", price: 12.99 }
      ]
    }
  },
  {
    id: "combo-3",
    name: "Lunch Express",
    description: "Quick lunch with Satay skewers, small green curry, rice, and Thai iced tea.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "combos",
    customizations: {
      protein: ["Chicken", "Tofu", "Beef (+$1)"],
      rice: ["Jasmine Rice", "Brown Rice", "No Rice"],
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
      addOns: [
        { name: "Spring Roll", price: 1.99 },
        { name: "Mango Salad", price: 4.99 }
      ]
    }
  },
  {
    id: "combo-4",
    name: "Vegetarian Delight",
    description: "Vegetarian combo with spring rolls, Pad Thai with tofu, vegetable green curry, and coconut ice cream.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "combos",
    customizations: {
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
      rice: ["Jasmine Rice", "Brown Rice", "Sticky Rice", "No Rice"],
      addOns: [
        { name: "Mango Sticky Rice (instead of ice cream)", price: 2.99 },
        { name: "Thai Iced Tea", price: 3.99 },
        { name: "Extra Tofu", price: 2.99 }
      ]
    }
  },
  {
    id: "combo-5",
    name: "Spicy Lover's Special",
    description: "Tom Yum soup, Som Tum salad, and Pad Kee Mao (Drunken Noodles) with your choice of protein.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "combos",
    customizations: {
      protein: ["Chicken", "Beef", "Shrimp (+$2)", "Tofu"],
      spicyLevel: ["Medium", "Hot", "Thai Hot", "Extra Hot"],
      addOns: [
        { name: "Thai Iced Tea", price: 3.99 },
        { name: "Extra Rice", price: 2.99 },
        { name: "Coconut Ice Cream", price: 4.99 }
      ]
    }
  },
  {
    id: "combo-6",
    name: "Royal Thai Feast",
    description: "Satay skewers, Tom Kha soup, Green Curry, Pad Thai, and Mango Sticky Rice for 2-3 people.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "combos",
    customizations: {
      curryProtein: ["Chicken", "Beef", "Tofu"],
      noodleProtein: ["Chicken", "Shrimp", "Combo"],
      spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
      rice: ["Jasmine Rice", "Brown Rice", "Sticky Rice"],
      addOns: [
        { name: "Thai Tea (2)", price: 8.99 },
        { name: "Extra Satay Skewers (4)", price: 6.99 }
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
