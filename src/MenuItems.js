const FoodItems = [
    {
        Name: "EggRolls",
        Title: "Vietnamese Egg Rolls",
        DisplayName: "Vietnamese Egg Rolls (5)",
        ItemType: "Appetizer",
        Description: null,
        Price: "$5.95",
        Ingredients: [
            "Pork",
            "Chicken",
            "Cabbage",
            "Carrots",
            "Glass Noodles",
            "Onions",
            "Spring Roll Wrapper"
        ],
        Image: null,
    },
    {
        Name: "VeggieRolls",
        Title: 'Veggie Rolls',
        DisplayName: 'Veggie Rolls (5)&nbsp;<i class="fas fa-leaf text-success"></i>',
        ItemType: "Appetizer",
        Description: null,
        Price: "$5.95",
        Ingredients: [
            "Tofu",
            "Cabbage",
            "Carrots",
            "Glass Noodles",
            "Onions",
            "Spring Roll Wrapper"
        ],
        Image: null,
    },
    {
        Name: "EggRollNuggets",
        Title: "Egg Roll Nuggets",
        DisplayName: "Egg Roll Nuggets (12)",
        ItemType: "Appetizer",
        Description: null,
        Price: "$5.95",
        Ingredients: [
            "Pork",
            "Shrimp",
            "Shredded Taro",
            "Rice Paper"
        ],
        Image: null,
    },
    {
        Name: "ShrimpRolls",
        Title: "Shrimp Rolls",
        DisplayName: "Shrimp Rolls (5)",
        ItemType: "Appetizer",
        Description: null,
        Price: "$5.95",
        Ingredients: [
            "Shrimp",
            "Spring Roll Wrapper"
        ],
        Image: null,
    },
    {
        Name: "CrabRangoons",
        Title: "Crab Rangoons (8)",
        DisplayName: "Crab Rangoons (8)",
        ItemType: "Appetizer",
        Description: null,
        Price: "$5.95",
        Ingredients: [
            "Imitation Crab Meat",
            "Cream Cheese",
            "Scallions",
            "Wonton Wrapper"
        ],
        Image: null,
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
        Image: null,
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
        Image: "NewYorker.png",
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
        Image: null,
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
        Image: null,
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
        Image: null,
    },
    {
        Name: "SecretGarden",
        Title: 'Secret Garden',
        DisplayName: 'Secret Garden&nbsp;<i class="fas fa-leaf text-success"></i>',
        ItemType: "Sub-Sandwhich",
        Description: null,
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
        Image: null,
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
        Image: null,
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
        Image: null,
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
        Image: null,
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
        Image: null,
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
            "Tomaro", 
            "Onions", 
            "Chilis", 
            "Sweet Chili Sauce", 
            "Mayo", 
            "Sriracha", 
            "Organic Spring Mix", 
        ],
        Image: null,
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
        Image: null,
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
        Image: null,
    },
    {
        Name: "ZenCombo",
        Title: "Zen Combination",
        DisplayName: "Zen Combination",
        ItemType: "Vietnamese (Banh Mi) Sandwiches",
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
        Image: null,
    },
    {
        Name: "TofuDelight",
        Title: 'Tofu Delight',
        DisplayName: 'Tofu Delight&nbsp;<i class="fas fa-leaf text-success"></i>',
        ItemType: "Vietnamese (Banh Mi) Sandwiches",
        Description: null,
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
        Image: null,
    },
    {
        Name: "PorkRoll&Pate",
        Title: "Pork Roll & Pate",
        DisplayName: "Pork Roll & Pate",
        ItemType: "Vietnamese (Banh Mi) Sandwiches",
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
        Image: null,
    },
    {
        Name: "ZenVeggie",
        Title: "Zen Veggie",
        DisplayName: 'Zen Veggie&nbsp;<i class="fas fa-leaf text-success"></i>',
        ItemType: "Vietnamese (Banh Mi) Sandwiches",
        Description: null,
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
        Image: null,
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
            "Strawberry",
            "Watermelon",
            "Winter Melon",
            "Hibiscus",
        ],
        Image: "FruitDrink.jpg",
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
            "Strawberry",
            "Watermelon",
            "Winter Melon",
            "Hibiscus",
        ],
        Image: null,
    },
    {
        Name: "Smoothies",
        DisplayName: "Smoothies",
        Description: null,
        Price: "$4.95",
        Flavors: [
            "Avacado",
            "Coconut",
            "Mango",
            "Strawberry",
            "Strawberry & Banana",
            "Thai Tea",
            "Taro",
            "Honeydew"
        ],
        Image: null,
    },
    {
        Name: "MilkTeas",
        DisplayName: "Milk Tea",
        Description: null,
        Price: "$4.65",
        Flavors: [
            "Coconut Milk Tea",
            "Coffee Milk Tea",
            "Thai Tea",
            "Taro Milk Tea",
            "Honeydew Milk Tea",
            "Winter Melon Milk Tea",
            "Watermelon Milk Tea",
        ],
        Image: "WinterWaterMilk.JPG",
    },
];

const DrinkAddOns = [
    "Honey Boba",
    "Coffee Jelly",
    "Lychee Bursting Pearl",
    "Strawberry Bursting Pearl",
    "Orange Bursting Pearl",
    "Mango Bursting Pearl",
    "Sea Salt Cream",
]
