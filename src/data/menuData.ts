import { StaticImageData } from "next/image";

// Define types for menu items and categories
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  customizations?: Customizations;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export interface Customizations {
  size?: string[];
  spiceLevel?: string[];
  protein?: string[];
  addOns?: AddOnOption[];
  [key: string]: string[] | AddOnOption[] | undefined;
}

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
}

// Define categories
export const categories: Category[] = [
  { id: "appetizers", name: "Appetizers" },
  { id: "soups", name: "Soups" },
  { id: "salads", name: "Salads" },
  { id: "entrees", name: "Entrees" },
  { id: "noodles", name: "Noodles" },
  { id: "rice", name: "Rice Dishes" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
  { id: "specials", name: "Chef's Specials" },
  { id: "vegetarian", name: "Vegetarian" },
];

// Define menu items
export const menuItems: MenuItem[] = [
  {
    id: "spring-rolls",
    name: "Spring Rolls",
    description: "Crispy spring rolls filled with vegetables and glass noodles.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1612878918838-590d1299a2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "appetizers",
    isVegetarian: true,
  },
  {
    id: "satay-chicken",
    name: "Satay Chicken",
    description: "Grilled chicken skewers marinated in Thai spices, served with peanut sauce.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1632574399449-5945495565e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "appetizers",
  },
  {
    id: "tom-yum-soup",
    name: "Tom Yum Soup",
    description: "Hot and sour soup with shrimp, mushrooms, and lemongrass.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1620327796743-047408f7499e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "soups",
    isSpicy: true,
  },
  {
    id: "tom-kha-soup",
    name: "Tom Kha Soup",
    description: "Coconut milk soup with chicken, galangal, and mushrooms.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1661956602153-2338e5419541?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "soups",
  },
  {
    id: "green-papaya-salad",
    name: "Green Papaya Salad",
    description: "Spicy salad with shredded green papaya, tomatoes, and peanuts.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1603569754454-a5562f941984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "salads",
    isSpicy: true,
    isVegetarian: true,
  },
  {
    id: "thai-beef-salad",
    name: "Thai Beef Salad",
    description: "Grilled beef with mixed greens, red onions, and a spicy lime dressing.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1630427514217-5d8834c89891?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "salads",
  },
  {
    id: "pad-thai",
    name: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, peanuts, and bean sprouts.",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1673875544193-710fa11c8844?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "noodles",
    customizations: {
      protein: ["Chicken", "Shrimp", "Tofu", "Vegetable"],
    },
  },
  {
    id: "drunken-noodles",
    name: "Drunken Noodles",
    description: "Wide rice noodles stir-fried with chicken, vegetables, and basil in a spicy sauce.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1630427375753-42f4a9729a80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "noodles",
    isSpicy: true,
    customizations: {
      protein: ["Chicken", "Beef", "Tofu", "Vegetable"],
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
  },
  {
    id: "green-curry",
    name: "Green Curry",
    description: "Green curry with coconut milk, bamboo shoots, and vegetables.",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1664299885592-7990a9591527?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "entrees",
    isSpicy: true,
    isVegetarian: true,
    customizations: {
      protein: ["Chicken", "Beef", "Tofu", "Vegetable"],
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
  },
  {
    id: "red-curry",
    name: "Red Curry",
    description: "Red curry with coconut milk, bell peppers, and basil.",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1664299885444-4183b546999f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "entrees",
    isSpicy: true,
    customizations: {
      protein: ["Chicken", "Beef", "Tofu", "Vegetable"],
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
  },
   {
    id: "massaman-curry",
    name: "Massaman Curry",
    description: "A mild, flavorful curry with potatoes, onions, peanuts, and coconut milk.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1635442947345-196799494343?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "entrees",
    customizations: {
      protein: ["Chicken", "Beef", "Tofu", "Vegetable"],
    },
  },
  {
    id: "pineapple-fried-rice",
    name: "Pineapple Fried Rice",
    description: "Fried rice with pineapple, shrimp, chicken, cashews, and raisins.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1600828354463-5b882965c737?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "rice",
    customizations: {
      protein: ["Chicken", "Shrimp", "Tofu", "Vegetable"],
    },
  },
  {
    id: "mango-sticky-rice",
    name: "Mango Sticky Rice",
    description: "Sweet sticky rice with fresh mango and coconut milk.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1611824744754-679842e210c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "desserts",
    isVegetarian: true,
  },
  {
    id: "thai-iced-tea",
    name: "Thai Iced Tea",
    description: "Sweet and creamy Thai iced tea.",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1617975414786-cfb9a43974d1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "beverages",
    isVegetarian: true,
  },
   {
    id: "pad-see-ew",
    name: "Pad See Ew",
    description: "Stir-fried wide rice noodles with egg, Chinese broccoli, and a sweet soy sauce.",
    price: 12.99,
    image: "https://example.com/pad-see-ew.jpg",
    category: "noodles",
     customizations: {
      protein: ["Chicken", "Pork", "Tofu", "Shrimp", "Vegetable"],
    },
  },
  {
    id: "red-snapper",
    name: "Steamed Red Snapper",
    description: "Steamed Red Snapper with chili-lime sauce.",
    price: 21.99,
    image: "https://example.com/red-snapper.jpg",
    category: "specials",
    isSpicy: true,
  },
  {
    id: "vegetarian-spring-rolls",
    name: "Vegetarian Spring Rolls",
    description: "Crispy spring rolls filled with vegetables and glass noodles.",
    price: 7.99,
    image: "https://example.com/veg-spring-rolls.jpg",
    category: "vegetarian",
    isVegetarian: true,
  },
   {
    id: "tofu-green-curry",
    name: "Tofu Green Curry",
    description: "Green curry with coconut milk, bamboo shoots, tofu and vegetables.",
    price: 12.99,
    image: "https://example.com/tofu-green-curry.jpg",
    category: "vegetarian",
    isVegetarian: true,
    isSpicy: true,
    customizations: {
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
  },
  {
    id: "vegetable-pad-thai",
    name: "Vegetable Pad Thai",
    description: "Stir-fried rice noodles with tofu, peanuts, and bean sprouts.",
    price: 10.99,
    image: "https://example.com/veg-pad-thai.jpg",
    category: "vegetarian",
    isVegetarian: true,
  },
  {
    id: "jasmine-rice",
    name: "Jasmine Rice",
    description: "Steamed jasmine rice.",
    price: 2.99,
    image: "https://example.com/jasmine-rice.jpg",
    category: "rice",
    isVegetarian: true,
  },
  {
    id: "brown-rice",
    name: "Brown Rice",
    description: "Steamed brown rice.",
    price: 3.99,
    image: "https://example.com/brown-rice.jpg",
    category: "rice",
    isVegetarian: true,
  },
  {
    id: "thai-coffee",
    name: "Thai Coffee",
    description: "Sweet and creamy Thai coffee.",
    price: 3.99,
    image: "https://example.com/thai-coffee.jpg",
    category: "beverages",
    isVegetarian: true,
  },
  {
    id: "coconut-juice",
    name: "Coconut Juice",
    description: "Fresh coconut juice.",
    price: 4.99,
    image: "https://example.com/coconut-juice.jpg",
    category: "beverages",
    isVegetarian: true,
  },
  {
    id: "sticky-rice-with-taro",
    name: "Sticky Rice with Taro",
    description: "Sweet sticky rice with taro and coconut milk.",
    price: 9.99,
    image: "https://example.com/sticky-rice-taro.jpg",
    category: "desserts",
    isVegetarian: true,
  },
  {
    id: "banana-spring-rolls",
    name: "Banana Spring Rolls",
    description: "Crispy spring rolls filled with banana and chocolate.",
    price: 7.99,
    image: "https://example.com/banana-spring-rolls.jpg",
    category: "desserts",
  },
  {
    id: "cashew-chicken",
    name: "Cashew Chicken",
    description: "Stir-fried chicken with cashews, vegetables, and a savory sauce.",
    price: 13.99,
    image: "https://example.com/cashew-chicken.jpg",
    category: "entrees",
    customizations: {
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
  },
  {
    id: "pra-ram",
    name: "Pra Ram",
    description: "Steamed mixed vegetables and peanut sauce.",
    price: 11.99,
    image: "https://example.com/pra-ram.jpg",
    category: "vegetarian",
    isVegetarian: true,
  },
  {
    id: "pad-kra-pao",
    name: "Pad Kra Pao",
    description: "Stir-fried meat with basil, chili, garlic, and a fried egg on top.",
    price: 12.99,
    image: "https://example.com/pad-kra-pao.jpg",
    category: "entrees",
    isSpicy: true,
    customizations: {
      protein: ["Chicken", "Pork", "Beef", "Tofu"],
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
  },
  {
    id: "panang-curry",
    name: "Panang Curry",
    description: "A rich and creamy curry with coconut milk, bell peppers, and lime leaves.",
    price: 14.99,
    image: "https://example.com/panang-curry.jpg",
    category: "entrees",
    customizations: {
      protein: ["Chicken", "Beef", "Tofu", "Vegetable"],
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
  },
  {
    id: "yellow-curry",
    name: "Yellow Curry",
    description: "A mild and flavorful curry with potatoes, carrots, and coconut milk.",
    price: 13.99,
    image: "https://example.com/yellow-curry.jpg",
    category: "entrees",
    customizations: {
      protein: ["Chicken", "Beef", "Tofu", "Vegetable"],
    },
  },
  {
    id: "mango-salad",
    name: "Mango Salad",
    description: "Fresh mango with red onions, mint, and a tangy dressing.",
    price: 9.99,
    image: "https://example.com/mango-salad.jpg",
    category: "salads",
    isVegetarian: true,
  },
  {
    id: "larb",
    name: "Larb",
    description: "A flavorful minced meat salad with herbs, chili, and lime juice.",
    price: 11.99,
    image: "https://example.com/larb.jpg",
    category: "salads",
    isSpicy: true,
    customizations: {
      protein: ["Chicken", "Pork", "Tofu"],
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
  },
  {
    id: "som-tum-thai",
    name: "Som Tum Thai",
    description: "The classic green papaya salad with peanuts, tomatoes, and a spicy dressing.",
    price: 10.99,
    image: "https://example.com/som-tum-thai.jpg",
    category: "salads",
    isSpicy: true,
    isVegetarian: true,
  },
  {
    id: "kao-pad",
    name: "Kao Pad",
    description: "Thai fried rice with egg, vegetables, and your choice of protein.",
    price: 11.99,
    image: "https://example.com/kao-pad.jpg",
    category: "rice",
    customizations: {
      protein: ["Chicken", "Pork", "Beef", "Tofu", "Shrimp"],
    },
  },
  {
    id: "pad-kee-mao",
    name: "Pad Kee Mao",
    description: "Drunken noodles with a flavorful sauce, vegetables, and your choice of protein.",
    price: 12.99,
    image: "https://example.com/pad-kee-mao.jpg",
    category: "noodles",
    isSpicy: true,
    customizations: {
      protein: ["Chicken", "Pork", "Beef", "Tofu", "Shrimp"],
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
  },
  {
    id: "kuay-teow-reua",
    name: "Kuay Teow Reua",
    description: "Thai boat noodles soup with a rich and flavorful broth.",
    price: 13.99,
    image: "https://example.com/kuay-teow-reua.jpg",
    category: "soups",
  },
  {
    id: "gaeng-keow-wan",
    name: "Gaeng Keow Wan",
    description: "Thai green curry with coconut milk, bamboo shoots, and your choice of protein.",
    price: 14.99,
    image: "https://example.com/gaeng-keow-wan.jpg",
    category: "entrees",
    isSpicy: true,
    customizations: {
      protein: ["Chicken", "Beef", "Tofu", "Vegetable"],
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
  },
  {
    id: "pla-nueng-manao",
    name: "Pla Nueng Manao",
    description: "Steamed fish with a spicy lime sauce.",
    price: 22.99,
    image: "https://example.com/pla-nueng-manao.jpg",
    category: "specials",
    isSpicy: true,
  },
  {
    id: "khao-niao-mamuang",
    name: "Khao Niao Mamuang",
    description: "Sweet sticky rice with fresh mango and coconut milk.",
    price: 9.99,
    image: "https://example.com/khao-niao-mamuang.jpg",
    category: "desserts",
    isVegetarian: true,
  },
  {
    id: "kluay-buat-chee",
    name: "Kluay Buat Chee",
    description: "Bananas in warm coconut milk.",
    price: 7.99,
    image: "https://example.com/kluay-buat-chee.jpg",
    category: "desserts",
    isVegetarian: true,
  },
  {
    id: "nam-manao",
    name: "Nam Manao",
    description: "Thai limeade.",
    price: 3.99,
    image: "https://example.com/nam-manao.jpg",
    category: "beverages",
    isVegetarian: true,
  },
  {
    id: "cha-yen",
    name: "Cha Yen",
    description: "Thai iced tea with milk.",
    price: 4.99,
    image: "https://example.com/cha-yen.jpg",
    category: "beverages",
    isVegetarian: true,
  },
  {
    id: "tom-yum-goong",
    name: "Tom Yum Goong",
    description: "Classic hot and sour soup with shrimp, lemongrass, and galangal.",
    price: 9.99,
    image: "https://example.com/tom-yum-goong.jpg",
    category: "soups",
    isSpicy: true,
    customizations: {
      spiceLevel: ["Hot", "Medium", "Mild"],
      addOns: [
        { id: "extra-shrimp", name: "Extra Shrimp", price: 3.00 },
        { id: "mushrooms", name: "Mushrooms", price: 1.50 },
      ],
    },
  },
];
