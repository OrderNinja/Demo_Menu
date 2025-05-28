
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
  // Multi-language support
  localizedNames?: {
    en: string;
    th: string;
    "zh-cn": string;
    "zh-tw": string;
  };
  localizedDescriptions?: {
    en: string;
    th: string;
    "zh-cn": string;
    "zh-tw": string;
  };
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
  { id: "mainDishes", name: "Main Dishes" },
  { id: "soups", name: "Soups" },
  { id: "appetizers", name: "Appetizers" },
  { id: "salads", name: "Salads" },
  { id: "beverages", name: "Beverages" }
];

// Define menu items with Thai Baht prices
export const menuItems: MenuItem[] = [
  // Main Dishes
  {
    id: "pad-thai",
    name: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, peanuts, and bean sprouts.",
    price: 120,
    image: "https://images.pexels.com/photos/2827263/pexels-photo-2827263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mainDishes",
    customizations: {
      protein: ["Chicken", "Shrimp", "Tofu", "Vegetable"],
    },
    localizedNames: {
      en: "Pad Thai",
      th: "ผัดไทย",
      "zh-cn": "泰式炒河粉",
      "zh-tw": "泰式炒河粉"
    },
    localizedDescriptions: {
      en: "Stir-fried rice noodles with shrimp, tofu, peanuts, and bean sprouts.",
      th: "ก๋วยเตี๋ยวผัดกับกุ้ง เต้าหู้ ถั่วลิสง และถั่วงอก",
      "zh-cn": "炒河粉配虾，豆腐，花生和豆芽",
      "zh-tw": "炒河粉配蝦，豆腐，花生和豆芽"
    }
  },
  {
    id: "green-curry",
    name: "Green Curry",
    description: "Green curry with coconut milk, bamboo shoots, and vegetables.",
    price: 150,
    image: "https://images.pexels.com/photos/31029754/pexels-photo-31029754/free-photo-of-delicious-thai-green-curry-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mainDishes",
    isSpicy: true,
    customizations: {
      protein: ["Chicken", "Beef", "Tofu", "Vegetable"],
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
    localizedNames: {
      en: "Green Curry",
      th: "แกงเขียวหวาน",
      "zh-cn": "绿咖喱",
      "zh-tw": "綠咖哩"
    },
    localizedDescriptions: {
      en: "Green curry with coconut milk, bamboo shoots, and vegetables.",
      th: "แกงเขียวหวานกับกะทิ หน่อไม้ และผัก",
      "zh-cn": "绿咖喱配椰奶，竹笋和蔬菜",
      "zh-tw": "綠咖哩配椰奶，竹筍和蔬菜"
    }
  },
  {
    id: "basil-stir-fry",
    name: "Basil Stir-fry",
    description: "Stir-fried meat with basil leaves, chili, and garlic.",
    price: 140,
    image: "https://images.pexels.com/photos/12153472/pexels-photo-12153472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mainDishes",
    isSpicy: true,
    customizations: {
      protein: ["Chicken", "Pork", "Beef"],
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
    localizedNames: {
      en: "Basil Stir-fry",
      th: "ผัดกะเพรา",
      "zh-cn": "九层塔炒肉",
      "zh-tw": "九層塔炒肉"
    },
    localizedDescriptions: {
      en: "Stir-fried meat with basil leaves, chili, and garlic.",
      th: "เนื้อสัตว์ผัดกับใบกะเพรา พริก และกระเทียม",
      "zh-cn": "肉类与罗勒叶，辣椒和蒜蓉炒",
      "zh-tw": "肉類與羅勒葉，辣椒和蒜蓉炒"
    }
  },
  {
    id: "massaman-curry",
    name: "Massaman Curry",
    description: "A mild, flavorful curry with potatoes, onions, peanuts, and coconut milk.",
    price: 160,
    image: "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2024/12/flavorful-chicken-curry-with-potatoes-and-herbs.jpg",
    category: "mainDishes",
    customizations: {
      protein: ["Chicken", "Beef", "Tofu", "Vegetable"],
    },
    localizedNames: {
      en: "Massaman Curry",
      th: "แกงมัสมั่น",
      "zh-cn": "马沙文咖喱",
      "zh-tw": "馬沙文咖哩"
    },
    localizedDescriptions: {
      en: "A mild, flavorful curry with potatoes, onions, peanuts, and coconut milk.",
      th: "แกงรสชาติอ่อน ๆ แต่หอมกับมันฝรั่ง หัวหอม ถั่วลิสง และกะทิ",
      "zh-cn": "温和味美的咖喱，配有土豆，洋葱，花生和椰奶",
      "zh-tw": "溫和味美的咖哩，配有馬鈴薯，洋蔥，花生和椰奶"
    }
  },
  
  // Soups
  {
    id: "tom-yum-goong",
    name: "Tom Yum Goong",
    description: "Hot and sour shrimp soup with lemongrass, galangal, and kaffir lime leaves.",
    price: 95,
    image: "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
    category: "soups",
    isSpicy: true,
    customizations: {
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
    localizedNames: {
      en: "Tom Yum Goong",
      th: "ต้มยำกุ้ง",
      "zh-cn": "冬阴功汤",
      "zh-tw": "冬陰功湯"
    },
    localizedDescriptions: {
      en: "Hot and sour shrimp soup with lemongrass, galangal, and kaffir lime leaves.",
      th: "ซุปกุ้งรสเปรี้ยวเผ็ดกับตะไคร้ ข่า และใบมะกรูด",
      "zh-cn": "酸辣虾汤配香茅，南姜和柠檬叶",
      "zh-tw": "酸辣蝦湯配香茅，南薑和檸檬葉"
    }
  },
  {
    id: "tom-kha-gai",
    name: "Tom Kha Gai",
    description: "Coconut milk soup with chicken, galangal, and mushrooms.",
    price: 85,
    image: "https://creativescookery.com/wp-content/uploads/2024/10/Tom-Kha-Gai-Soup-Thai-Coconut-Soup-1.webp",
    category: "soups",
    localizedNames: {
      en: "Tom Kha Gai",
      th: "ต้มข่าไก่",
      "zh-cn": "椰奶鸡汤",
      "zh-tw": "椰奶雞湯"
    },
    localizedDescriptions: {
      en: "Coconut milk soup with chicken, galangal, and mushrooms.",
      th: "ซุปกะทิกับไก่ ข่า และเห็ด",
      "zh-cn": "椰奶鸡汤配南姜和蘑菇",
      "zh-tw": "椰奶雞湯配南薑和蘑菇"
    }
  },
  {
    id: "clear-noodle-soup",
    name: "Clear Noodle Soup",
    description: "Clear broth with rice noodles, meat, and vegetables.",
    price: 75,
    image: "https://hot-thai-kitchen.com/wp-content/uploads/2023/11/gaeng-jeud-woon-sen-sq.jpg",
    category: "soups",
    customizations: {
      protein: ["Chicken", "Pork", "Beef", "Tofu"],
    },
    localizedNames: {
      en: "Clear Noodle Soup",
      th: "ก๋วยเตี๋ยวน้ำใส",
      "zh-cn": "清汤面",
      "zh-tw": "清湯麵"
    },
    localizedDescriptions: {
      en: "Clear broth with rice noodles, meat, and vegetables.",
      th: "น้ำซุปใสกับก๋วยเตี๋ยว เนื้อสัตว์ และผัก",
      "zh-cn": "清汤配米粉，肉类和蔬菜",
      "zh-tw": "清湯配米粉，肉類和蔬菜"
    }
  },

  // Appetizers
  {
    id: "spring-rolls",
    name: "Spring Rolls",
    description: "Crispy spring rolls filled with vegetables and glass noodles.",
    price: 65,
    image: "https://www.marionskitchen.com/wp-content/uploads/2021/06/20170828_spring-roll-FB-Live-3-1200x1500.jpeg",
    category: "appetizers",
    isVegetarian: true,
    localizedNames: {
      en: "Spring Rolls",
      th: "ปอเปี๊ยะทอด",
      "zh-cn": "春卷",
      "zh-tw": "春捲"
    },
    localizedDescriptions: {
      en: "Crispy spring rolls filled with vegetables and glass noodles.",
      th: "ปอเปี๊ยะทอดกรอบไส้ผักและวุ้นเส้น",
      "zh-cn": "酥脆春卷配蔬菜和粉丝",
      "zh-tw": "酥脆春捲配蔬菜和粉絲"
    }
  },
  {
    id: "chicken-wings",
    name: "Thai Style Chicken Wings",
    description: "Fried chicken wings marinated in fish sauce and garlic.",
    price: 85,
    image: "https://www.shemins.com/wp-content/uploads/2017/07/shemins-thai-chicken-wings.jpg",
    category: "appetizers",
    localizedNames: {
      en: "Thai Style Chicken Wings",
      th: "ปีกไก่ทอดน้ำปลา",
      "zh-cn": "泰式炸鸡翅",
      "zh-tw": "泰式炸雞翅"
    },
    localizedDescriptions: {
      en: "Fried chicken wings marinated in fish sauce and garlic.",
      th: "ปีกไก่ทอดหมักด้วยน้ำปลาและกระเทียม",
      "zh-cn": "鱼露和大蒜腌制的炸鸡翅",
      "zh-tw": "魚露和大蒜醃製的炸雞翅"
    }
  },
  {
    id: "satay",
    name: "Satay",
    description: "Grilled skewers of marinated meat served with peanut sauce.",
    price: 95,
    image: "https://hot-thai-kitchen.com/wp-content/uploads/2015/02/satay-blog.jpg",
    category: "appetizers",
    customizations: {
      protein: ["Chicken", "Pork", "Beef"],
    },
    localizedNames: {
      en: "Satay",
      th: "สะเต๊ะ",
      "zh-cn": "沙爹",
      "zh-tw": "沙爹"
    },
    localizedDescriptions: {
      en: "Grilled skewers of marinated meat served with peanut sauce.",
      th: "เนื้อสัตว์หมักย่างเสิร์ฟพร้อมน้ำจิ้มถั่ว",
      "zh-cn": "烤腌肉串配花生酱",
      "zh-tw": "烤醃肉串配花生醬"
    }
  },

  // Salads
  {
    id: "papaya-salad",
    name: "Papaya Salad",
    description: "Spicy green papaya salad with tomatoes, peanuts, and lime.",
    price: 80,
    image: "https://www.seriouseats.com/thmb/yKNZ9ICJC5ZNhzcYHdHENxogpFw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210928-Som-Tam-Thai-green-papaya-salad-vicky-wasik-24-f0d666fc609f49a0b9f34897bd2c6303.jpg",
    category: "salads",
    isSpicy: true,
    isVegetarian: true,
    customizations: {
      spiceLevel: ["Mild", "Medium", "Hot", "Thai Hot"],
    },
    localizedNames: {
      en: "Papaya Salad",
      th: "ส้มตำ",
      "zh-cn": "青木瓜沙拉",
      "zh-tw": "青木瓜沙拉"
    },
    localizedDescriptions: {
      en: "Spicy green papaya salad with tomatoes, peanuts, and lime.",
      th: "ส้มตำรสเผ็ดกับมะเขือเทศ ถั่วลิสง และมะนาว",
      "zh-cn": "辣青木瓜沙拉配番茄，花生和酸橙",
      "zh-tw": "辣青木瓜沙拉配番茄，花生和酸橙"
    }
  },
  {
    id: "glass-noodle-salad",
    name: "Glass Noodle Salad",
    description: "Spicy salad with glass noodles, minced meat, and herbs.",
    price: 110,
    image: "https://cicili.tv/wp-content/uploads/2019/05/Yum-Woon-Sen-2-scaled.jpg",
    category: "salads",
    isSpicy: true,
    customizations: {
      protein: ["Chicken", "Pork", "Seafood"],
    },
    localizedNames: {
      en: "Glass Noodle Salad",
      th: "ยำวุ้นเส้น",
      "zh-cn": "粉丝沙拉",
      "zh-tw": "粉絲沙拉"
    },
    localizedDescriptions: {
      en: "Spicy salad with glass noodles, minced meat, and herbs.",
      th: "ยำรสเผ็ดกับวุ้นเส้น เนื้อสับ และสมุนไพร",
      "zh-cn": "辣粉丝沙拉配肉末和香草",
      "zh-tw": "辣粉絲沙拉配肉末和香草"
    }
  },
  {
    id: "beef-salad",
    name: "Spicy Beef Salad",
    description: "Grilled beef with cucumber, tomatoes, and herbs in spicy dressing.",
    price: 135,
    image: "https://recipe30.com/wp-content/uploads/2021/08/Thai-beef-salad.jpg",
    category: "salads",
    isSpicy: true,
    localizedNames: {
      en: "Spicy Beef Salad",
      th: "ยำเนื้อ",
      "zh-cn": "泰式牛肉沙拉",
      "zh-tw": "泰式牛肉沙拉"
    },
    localizedDescriptions: {
      en: "Grilled beef with cucumber, tomatoes, and herbs in spicy dressing.",
      th: "เนื้อย่างกับแตงกวา มะเขือเทศ และสมุนไพรในน้ำยำรสเผ็ด",
      "zh-cn": "烤牛肉配黄瓜，番茄和香草，淋上辣酱汁",
      "zh-tw": "烤牛肉配黃瓜，番茄和香草，淋上辣醬汁"
    }
  },

  // Beverages
  {
    id: "coconut-water",
    name: "Coconut Water",
    description: "Fresh coconut water served in the shell.",
    price: 45,
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2024/06/Coconut-water440-c1acff0.jpg",
    category: "beverages",
    isVegetarian: true,
    localizedNames: {
      en: "Coconut Water",
      th: "น้ำมะพร้าว",
      "zh-cn": "椰子水",
      "zh-tw": "椰子水"
    },
    localizedDescriptions: {
      en: "Fresh coconut water served in the shell.",
      th: "น้ำมะพร้าวสดเสิร์ฟในกะลา",
      "zh-cn": "新鲜椰子水，连壳上桌",
      "zh-tw": "新鮮椰子水，連殼上桌"
    }
  },
  {
    id: "lemongrass-drink",
    name: "Lemongrass Drink",
    description: "Refreshing lemongrass tea with honey.",
    price: 35,
    image: "https://thewanderlustkitchen.com/wp-content/uploads/2015/06/Lemongrass-Tea-Recipe-33-2.jpg",
    category: "beverages",
    isVegetarian: true,
    localizedNames: {
      en: "Lemongrass Drink",
      th: "น้ำตะไคร้",
      "zh-cn": "柠檬草茶",
      "zh-tw": "檸檬草茶"
    },
    localizedDescriptions: {
      en: "Refreshing lemongrass tea with honey.",
      th: "ชาตะไคร้สดชื่นกับน้ำผึ้ง",
      "zh-cn": "清新的柠檬草茶配蜂蜜",
      "zh-tw": "清新的檸檬草茶配蜂蜜"
    }
  },
  {
    id: "roselle-juice",
    name: "Roselle Juice",
    description: "Sweet-tart hibiscus tea served cold.",
    price: 40,
    image: "https://hungryinthailand.com/wp-content/uploads/2024/02/roselle-juice.webp",
    category: "beverages",
    isVegetarian: true,
    localizedNames: {
      en: "Roselle Juice",
      th: "น้ำกระเจี๊ยบ",
      "zh-cn": "洛神花茶",
      "zh-tw": "洛神花茶"
    },
    localizedDescriptions: {
      en: "Sweet-tart hibiscus tea served cold.",
      th: "ชากระเจี๊ยบรสหวานอมเปรี้ยวเสิร์ฟเย็น",
      "zh-cn": "酸甜的冰镇洛神花茶",
      "zh-tw": "酸甜的冰鎮洛神花茶"
    }
  },
  {
    id: "chrysanthemum-tea",
    name: "Chrysanthemum Tea",
    description: "Fragrant tea made from dried chrysanthemum flowers.",
    price: 35,
    image: "https://s3-us-east-2.amazonaws.com/production-sfc-web-app/recipe_images/images/000/000/466/original/Chrysanthemum_Tea.jpg?1691609031",
    category: "beverages",
    isVegetarian: true,
    localizedNames: {
      en: "Chrysanthemum Tea",
      th: "น้ำเก๊กฮวย",
      "zh-cn": "菊花茶",
      "zh-tw": "菊花茶"
    },
    localizedDescriptions: {
      en: "Fragrant tea made from dried chrysanthemum flowers.",
      th: "ชาที่มีกลิ่นหอมทำจากดอกเก๊กฮวยแห้ง",
      "zh-cn": "由干菊花制作的香茶",
      "zh-tw": "由乾菊花製作的香茶"
    }
  }
];
