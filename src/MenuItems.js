const FoodItems = [
    {
        Name: "EggRolls",
        Title: "Vietnamese Egg Rolls",
        DisplayName: 'Vietnamese Egg Rolls',
        ItemType: "Appetizer",
        Description: null,
        Price: "5 pieces for $5.95",
        Ingredients: [
            "Pork or Chicken",
            "Cabbage",
            "Carrots",
            "Glass Noodles",
            "Onions",
        ],
        Image: "Egg_Rolls.jpg",
        ImageName: "Vietnamese Egg Rolls",
    },
    {
        Name: "VeggieRolls",
        Title: 'Veggie Rolls',
        DisplayName: 'Veggie Rolls&nbsp;<i class="fas fa-leaf text-success"></i>',
        ItemType: "Appetizer",
        Description: "Vegetarian friendly option",
        Price: "5 pieces for $5.95",
        Ingredients: [
            "Tofu",
            "Cabbage",
            "Carrots",
            "Glass Noodles",
            "Onions",
        ],
        Image: "Veggie_Rolls.jpg",
        ImageName: 'Veggie Rolls',
    },
    {
        Name: "EggRollNuggets",
        Title: "Egg Roll Nuggets",
        DisplayName: 'Egg Roll Nuggets&nbsp;<i class="fas fa-fish text-info"></i>',
        ItemType: "Appetizer",
        Description: "Contains shellfish",
        Price: "12 pieces for $5.95",
        Ingredients: [
            "Pork",
            "Shrimp",
            "Shredded Taro",
        ],
        Image: "Eggroll_Nuggets.jpg",
        ImageName: "Egg Roll Nuggets",
    },
    {
        Name: "ShrimpRolls",
        Title: "Shrimp Rolls",
        DisplayName: 'Shrimp Rolls&nbsp;<i class="fas fa-fish text-info"></i>',
        ItemType: "Appetizer",
        Description: "Contains shellfish",
        Price: "5 pieces for $5.95",
        Ingredients: [
            "Shrimp wrapped in Spring Roll Wrapper",
        ],
        Image: "Shrimp_Roll.jpg",
        ImageName: "Shrimp Rolls",
    },
    {
        Name: "CrabRangoons",
        Title: "Crab Rangoons",
        DisplayName: 'Crab Rangoons&nbsp;<i class="fas fa-fish text-info"></i>',
        ItemType: "Appetizer",
        Description: "Contains shellfish",
        Price: "8 pieces for $5.95",
        Ingredients: [
            "Krab Meat",
            "Cream Cheese",
            "Scallions",
            "Wonton Wrapper"
        ],
        Image: "Crab_Rangoon.jpg",
        ImageName: "Crab Rangoons",
    },
    {
        Name: "ZenSpecial",
        Title: "Zen Special",
        DisplayName: "Zen Special",
        ItemType: "Sliced Rye Bread Sandwich",
        Description: null,
        Price: "$8.95",
        Ingredients: [
            "Pastrami", 
            "Capicola", 
            "Cheddar", 
            "Tomato", 
            "Marinated Cucumbers", 
            "Black Olives", 
            "Marinated Mushroom", 
            "Italian Dressing", 
            "House Dressing",
        ],
        Image: "Zen_Special.jpg",
        ImageName: "Zen Special",
    },
    {
        Name: "NewYorker",
        Title: "New Yorker",
        DisplayName: "New Yorker",
        ItemType: "Sliced Rye Bread Sandwich",
        Description: null,
        Price: "$8.95",
        Ingredients: [
            "Corned Beef", 
            "Pastrami", 
            "Swiss", 
            "Marinated Mushroom", 
            "House Dressing",
            "Deli Mustard",
        ],
        Image: "New_Yorker.jpg",
        ImageName: "New Yorker",
    },
    {
        Name: "PastramiOnRye",
        Title: "Pastrami On Rye",
        DisplayName: "Pastrami On Rye",
        ItemType: "Sliced Rye Bread Sandwich",
        Description: null,
        Price: "$8.95",
        Ingredients: [
            "Pastrami", 
            "Swiss", 
            "Marinated Cucumbers", 
            "Onion", 
            "House Dressing",
            "Deli Mustard",
        ],
        Image: "Pastrami_On_Rye.jpg",
        ImageName: "Pastrami On Rye",
    },
    {
        Name: "TurkeyReuben",
        Title: "Turkey Reuben",
        DisplayName: "Turkey Reuben",
        ItemType: "Sliced Rye Bread Sandwich",
        Description: null,
        Price: "$8.95",
        Ingredients: [
            "Turkey", 
            "Ham", 
            "Swiss", 
            "House Slaw", 
            "House Dressing",
        ],
        Image: "Turkey_Reuben.jpg",
        ImageName: "Turkey Reuben",
    },
    {
        Name: "Reuben",
        Title: "Reuben",
        DisplayName: "Reuben",
        ItemType: "Sliced Rye Bread Sandwich",
        Description: null,
        Price: "$8.95",
        Ingredients: [
            "Corned Beef", 
            "Kraut", 
            "Swiss", 
            "House Dressing",
        ],
        Image: "Reuben.jpg",
        ImageName: "Reuben",
    },
    {
        Name: "SecretGarden",
        Title: 'Secret Garden',
        DisplayName: 'Secret Garden&nbsp;<i class="fas fa-leaf text-success"></i>',
        ItemType: "Sub-Sandwhich",
        Description: "Vegetarian friendly option",
        Price: '<label>12" (Whole) - $9.95</label><label>6" (Half) - $5.95</label>',
        Ingredients: [
            "Vegan Meat", 
            "Swiss", 
            "Tomato", 
            "Marinated Cucumbers", 
            "Roasted Red Peppers", 
            "Black Olives", 
            "House Dressing", 
            "Italian Dressing", 
            "Organic Spring Mix", 
        ],
        Image: "Secret_Garden.jpg",
        ImageName: 'Secret Garden',
    },
    {
        Name: "TheItalian",
        Title: "The Italian",
        DisplayName: "The Italian",
        ItemType: "Sub-Sandwhich",
        Description: null,
        Price: '<label>12" (Whole) - $9.95</label><label>6" (Half) - $5.95</label>',
        Ingredients: [
            "Capicola", 
            "Ham", 
            "Roasted Red Peppers", 
            "Banana Peppers", 
            "Provolone Cheese", 
            "Tomato", 
            "Italian Dressing", 
            "House Dressing", 
            "Organic Spring Mix", 
        ],
        Image: "Italian.jpg",
        ImageName: "The Italian",
    },
    {
        Name: "HarmonieClub",
        Title: "Harmonie Club",
        DisplayName: "Harmonie Club",
        ItemType: "Sub-Sandwhich",
        Description: null,
        Price: '<label>12" (Whole) - $9.95</label><label>6" (Half) - $5.95</label>',
        Ingredients: [
            "Corned Beef", 
            "Pastrami", 
            "Swiss", 
            "Tomato", 
            "Marinated Cucumbers", 
            "Onions", 
            "House Dressing", 
            "Deli Mustard", 
            "Organic Spring Mix", 
        ],
        Image: "Harmonie_Club.jpg",
        ImageName: "Harmonie Club",
    },
    {
        Name: "BBQSteakHouse",
        Title: "BBQ Steak House",
        DisplayName: "BBQ Steak House",
        ItemType: "Sub-Sandwhich",
        Description: null,
        Price: '<label>12" (Whole) - $9.95</label><label>6" (Half) - $5.95</label>',
        Ingredients: [
            "Roast Beef", 
            "Cheddar", 
            "Tomato", 
            "Roasted Red Peppers", 
            "Onions", 
            "Garlic Butter", 
            "House BBQ Sauce", 
            "Organic Spring Mix", 
        ],
        Image: "BBQ_Steakhouse.jpg",
        ImageName: "BBQ Steak House",
    },
    {
        Name: "AllAmerican",
        Title: "All American",
        DisplayName: "All American",
        ItemType: "Sub-Sandwhich",
        Description: null,
        Price: '<label>12" (Whole) - $9.95</label><label>6" (Half) - $5.95</label>',
        Ingredients: [
            "Roast Beef", 
            "Cheddar", 
            "Tomato",  
            "Marinated Cucumbers", 
            "Onions", 
            "Mayo", 
            "Garlic Butter", 
            "Organic Spring Mix", 
        ],
        Image: "All_American.jpg",
        ImageName: "All American",
    },
    {
        Name: "SrirachaTurkey",
        Title: "Sriracha Turkey",
        DisplayName: "Sriracha Turkey",
        ItemType: "Sub-Sandwhich",
        Description: null,
        Price: '<label>12" (Whole) - $9.95</label><label>6" (Half) - $5.95</label>',
        Ingredients: [
            "Turkey", 
            "Cheddar", 
            "Tomato", 
            "Onions", 
            "Chilis", 
            "Sweet Chili Sauce", 
            "Mayo", 
            "Sriracha", 
            "Organic Spring Mix", 
        ],
        Image: "Sriracha_Turkey.jpg",
        ImageName: "Sriracha Turkey",
    },
    {
        Name: "TranquilTurkey",
        Title: "Tranquil Turkey",
        DisplayName: "Tranquil Turkey",
        ItemType: "Sub-Sandwhich",
        Description: null,
        Price: '<label>12" (Whole) - $9.95</label><label>6" (Half) - $5.95</label>',
        Ingredients: [
            "Turkey", 
            "Extra Swiss", 
            "Tomato", 
            "Onions", 
            "Mayo", 
            "Avacado", 
            "Garlic Butter", 
            "Organic Spring Mix", 
        ],
        Image: "Tranquil_Turkey.jpg",
        ImageName: "Tranquil Turkey",
    },
    {
        Name: "ClubHouse",
        Title: "Club House",
        DisplayName: "Club House",
        ItemType: "Sub-Sandwhich",
        Description: null,
        Price: '<label>12" (Whole) - $9.95</label><label>6" (Half) - $5.95</label>',
        Ingredients: [
            "Ham", 
            "Turkey", 
            "Swiss", 
            "Black Olives", 
            "Tomato", 
            "Mayo", 
            "Deli Mustard", 
            "Organic Spring Mix", 
        ],
        Image: "Clubhouse.jpg",
        ImageName: "Club House",
    },
    {
        Name: "ZenCombo",
        Title: "Zen Combination",
        DisplayName: "Zen Combination",
        ItemType: 'Vietnamese "Banh Mi" Sandwich',
        Description: null,
        Price: "$6.95",
        Ingredients: [
            "BBQ Pork", 
            "Pork Roll", 
            "Pate", 
            "House Pickle (Daikon, Carrots)", 
            "Jalapeno", 
            "Cucumber", 
            "Cilantro", 
            "House Mayonnaise", 
            "Zen Sauce", 
        ],
        Image: "Zen_Combo.jpg",
        ImageName: "Zen Combination",
    },
    {
        Name: "TofuDelight",
        Title: 'Tofu Delight',
        DisplayName: 'Tofu Delight&nbsp;<i class="fas fa-leaf text-success"></i>',
        ItemType: 'Vietnamese "Banh Mi" Sandwich',
        Description: "Vegetarian friendly option",
        Price: "$6.95",
        Ingredients: [
            "Vegan Pate", 
            "Fried Tofu", 
            "Vermicelli", 
            "House Pickle (Daikon, Carrots)", 
            "Jalapeno", 
            "Cucumber", 
            "Cilantro", 
            "House Vegetarian Sauces", 
        ],
        Image: "BanhMiNoImage.jpg",
        ImageName: 'Tofu Delight',
    },
    {
        Name: "PorkRoll&Pate",
        Title: "Pork Roll & Pate",
        DisplayName: "Pork Roll & Pate",
        ItemType: 'Vietnamese "Banh Mi" Sandwich',
        Description: null,
        Price: "$6.95",
        Ingredients: [
            "Pork Roll", 
            "Pate", 
            "House Pickle (Daikon, Carrots)", 
            "Jalapeno", 
            "Cucumber", 
            "Cilantro", 
            "House Mayonnaise",
            "Zen Sauce",
        ],
        Image: "BanhMiNoImage.jpg",
        ImageName: "Pork Roll & Pate",
    },
    {
        Name: "ZenVeggie",
        Title: "Zen Veggie",
        DisplayName: 'Zen Veggie&nbsp;<i class="fas fa-leaf text-success"></i>',
        ItemType: 'Vietnamese "Banh Mi" Sandwich',
        Description: "Vegetarian friendly option",
        Price: "$6.95",
        Ingredients: [
            "Vegan Pate", 
            "Vegan Meat", 
            "House Pickle (Daikon, Carrots)", 
            "Jalapeno", 
            "Cucumber", 
            "Cilantro",
            "House Vegetarian Sauces",
        ],
        Image: "Zen_Veggie.jpg",
        ImageName: "Zen Veggie",
    },
];

const DrinkItems = [
    {
        Name: "FruitDrinks",
        DisplayName: "Fruit Drinks",
        Description: null,
        Price: "$3.95",
        Flavors: [
            "Kiwi",
            "Kumquat",
            "Lychee",
            "Mango",
            "Passion Fruit",
            "Passion Fruit & Kumquat",
            "Peach",
            "Raspberry",
            "Blueberry",
            "Wild Berry",
            "Strawberry",
            "Watermelon",
            "Winter Melon",
            "Guava",
            "Hibiscus",
        ],
        Image: "Fruit_Drink.jpg",
        ImageName: "Peach Fruit Drink with Orange Popping Pearls",
    },
    {
        Name: "FruitTeas",
        DisplayName: "Fruit Flavored Teas",
        Description: "Fruit flavored teas are made with a Jasmine tea base.",
        Price: "$4.50",
        Flavors: [
            "Kiwi",
            "Kumquat",
            "Lychee",
            "Mango",
            "Passion Fruit",
            "Passion Fruit & Kumquat",
            "Peach",
            "Raspberry",
            "Blueberry",
            "Wild Berry",
            "Strawberry",
            "Watermelon",
            "Winter Melon",
            "Guava"
        ],
        Image: "Fruit_Tea.jpg",
        ImageName: "Tri-Color Kiwi with Strawberry Popping Pearls",
    },
    {
        Name: "Smoothies",
        DisplayName: "Smoothies",
        Description: null,
        Price: "$4.95",
        Flavors: [
            "Avocado",
            "Coconut",
            "Mango",
            "Peach",
            "Blueberry",
            "Raspberry",
            "Wild Berry",
            "Pina Colada",
            "Strawberry",
            "Strawberry & Banana",
            "Thai Tea",
            "Taro",
            "Honeydew",
            "Watermeelon",
            "Pineapple",
            "Pink Lemon",
            "Banana",
            "Matcha",
            "Lemon"
        ],
        Image: "Smoothie.jpg",
        ImageName: "Strawberry Smoothie with Whipped Cream",
    },
    {
        Name: "MilkTeas",
        DisplayName: "Milk Tea",
        Description: "Milk teas are made with lactose-free milk.",
        Price: "$4.65",
        Flavors: [
            "Coconut Milk Tea",
            "Iced Mocha Milk Tea",
            "Iced Coffee Milk Tea",
            "Thai Tea Milk Tea",
            "Taro Milk Tea",
            "Honeydew Milk Tea",
            "Winter Melon Milk Tea",
            "Watermelon Milk Tea",
        ],
        Image: "Milk_Tea.jpg",
        ImageName: "Iced Coffee Milk Tea",
    },
];

const DrinkAddOns = [
    "Honey Boba",
    "Coffee Jelly",
    "Lychee Bursting Pearl",
    "Strawberry Bursting Pearl",
    "Orange Bursting Pearl",
    "Mango Bursting Pearl",
    "Passion Fruit Bursting Pearl",
    "Sea Salt Cream",
]
