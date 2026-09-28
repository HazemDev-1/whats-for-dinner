

const meals = [

    {
        name: "Creamy Spaghetti Carbonara",
        description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
        emoji: "🍝",

        rating: 4.8,
        reviews: 234,

        prepTime: 15,
        cookTime: 20,
        servings: 4,

        difficulty: "Easy",
        cuisine: "Italian",

        ingredients: [
            "400g spaghetti pasta",
            "200g pancetta, diced",
            "4 large eggs",
            "100g parmesan cheese, grated",
            "2 cloves garlic, minced",
            "Black pepper to taste"
        ],

        instructions: [
            "Bring a large pot of salted water to boil and cook spaghetti until al dente",
            "While pasta cooks, fry pancetta in a pan until crispy",
            "Whisk eggs with grated parmesan in a bowl",
            "Drain pasta, reserving 1 cup of pasta water",
            "Off the heat, mix hot pasta with pancetta, then quickly stir in egg mixture",
            "Add pasta water gradually until creamy. Season with black pepper and serve"
        ],

        nutrition: {
            calories: 520,
            protein: 28,
            carbs: 62,
            fat: 18,
            fiber: 3,
            sodium: 680
        },

        chefTips: [
            "Never add the egg mixture while the pan is still on the heat, or you'll get scrambled eggs instead of a creamy sauce",
            "Reserve pasta water before draining - the starch helps the sauce stick to the pasta"
        ]
    },

    {
        name: "Butter Chicken",
        description: "Tender chicken simmered in a rich, creamy tomato and butter sauce",
        emoji: "🍛",

        rating: 4.9,
        reviews: 512,

        prepTime: 20,
        cookTime: 35,
        servings: 4,

        difficulty: "Medium",
        cuisine: "Indian",

        ingredients: [
            "600g chicken thighs, cubed",
            "1 cup plain yogurt",
            "2 tbsp butter",
            "1 onion, finely chopped",
            "3 cloves garlic, minced",
            "1 tbsp ginger, grated",
            "400g canned tomato puree",
            "1 cup heavy cream",
            "2 tsp garam masala",
            "1 tsp turmeric",
            "1 tsp paprika"
        ],

        instructions: [
            "Marinate chicken in yogurt, turmeric, and half the garam masala for at least 30 minutes",
            "Sear the marinated chicken in a hot pan until browned, then set aside",
            "In the same pan, melt butter and saute onion, garlic, and ginger until soft",
            "Add tomato puree and remaining spices, simmer for 10 minutes",
            "Return the chicken to the pan and simmer for another 15 minutes",
            "Stir in the heavy cream and simmer for 5 more minutes until thickened",
            "Serve hot with rice or naan bread"
        ],

        nutrition: {
            calories: 610,
            protein: 42,
            carbs: 18,
            fat: 40,
            fiber: 2,
            sodium: 720
        },

        chefTips: [
            "Marinating the chicken longer (even overnight) makes it much more tender",
            "Add the cream at the end and keep the heat low so it doesn't split"
        ]
    },

    {
        name: "Chicken Biryani",
        description: "Fragrant spiced rice layered with tender marinated chicken",
        emoji: "🍚",

        rating: 4.7,
        reviews: 389,

        prepTime: 25,
        cookTime: 40,
        servings: 6,

        difficulty: "Medium",
        cuisine: "Indian",

        ingredients: [
            "500g basmati rice, soaked",
            "700g chicken, bone-in pieces",
            "2 onions, thinly sliced and fried",
            "1 cup plain yogurt",
            "2 tbsp biryani masala",
            "A pinch of saffron soaked in warm milk",
            "4 tbsp ghee",
            "Fresh mint and coriander leaves",
            "Whole spices: bay leaf, cinnamon, cardamom, cloves"
        ],

        instructions: [
            "Marinate chicken in yogurt, biryani masala, and half the fried onions for 1 hour",
            "Parboil the soaked rice with whole spices until 70% cooked, then drain",
            "Cook the marinated chicken in ghee until nearly done",
            "Layer the partially cooked rice over the chicken in a heavy pot",
            "Top with saffron milk, remaining fried onions, mint, and coriander",
            "Cover tightly and cook on low heat for 20 minutes to let the flavors steam together",
            "Gently fluff and mix before serving"
        ],

        nutrition: {
            calories: 680,
            protein: 35,
            carbs: 78,
            fat: 24,
            fiber: 3,
            sodium: 640
        },

        chefTips: [
            "Soaking the rice for 30 minutes before cooking keeps the grains long and separate",
            "Sealing the pot tightly during the final steaming step is what makes real biryani - don't skip it"
        ]
    },

    {
        name: "Classic Cheeseburger",
        description: "A juicy grilled beef patty with melted cheese and all the fixings",
        emoji: "🍔",

        rating: 4.6,
        reviews: 298,

        prepTime: 15,
        cookTime: 10,
        servings: 2,

        difficulty: "Easy",
        cuisine: "American",

        ingredients: [
            "300g ground beef",
            "2 burger buns",
            "2 slices cheddar cheese",
            "Lettuce, tomato, and pickles",
            "1 tbsp mustard",
            "1 tbsp ketchup",
            "Salt and pepper to taste"
        ],

        instructions: [
            "Season the ground beef with salt and pepper, then form into two patties",
            "Grill or pan-fry the patties for about 4 minutes per side",
            "Add a cheese slice on top of each patty during the last minute to melt",
            "Toast the burger buns lightly",
            "Assemble with lettuce, tomato, pickles, mustard, and ketchup",
            "Serve immediately while hot"
        ],

        nutrition: {
            calories: 590,
            protein: 32,
            carbs: 34,
            fat: 36,
            fiber: 2,
            sodium: 820
        },

        chefTips: [
            "Don't press down on the patty while cooking - it squeezes out the juices",
            "Let the beef rest for a minute or two before assembling for a juicier bite"
        ]
    },

    {
        name: "Margherita Pizza",
        description: "A simple classic with tomato, fresh mozzarella, and basil",
        emoji: "🍕",

        rating: 4.7,
        reviews: 445,

        prepTime: 20,
        cookTime: 15,
        servings: 4,

        difficulty: "Easy",
        cuisine: "Italian",

        ingredients: [
            "1 pizza dough ball",
            "1/2 cup tomato sauce",
            "200g fresh mozzarella, sliced",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "Salt to taste"
        ],

        instructions: [
            "Preheat the oven to its highest setting with a pizza stone or tray inside",
            "Stretch the dough into a round base on a floured surface",
            "Spread the tomato sauce evenly, leaving a border for the crust",
            "Arrange the mozzarella slices on top",
            "Bake for 10-12 minutes until the crust is golden and cheese is bubbling",
            "Top with fresh basil and a drizzle of olive oil before serving"
        ],

        nutrition: {
            calories: 480,
            protein: 20,
            carbs: 56,
            fat: 18,
            fiber: 3,
            sodium: 590
        },

        chefTips: [
            "A very hot oven is the secret to a crisp crust - preheat it for at least 20 minutes",
            "Add the basil after baking so it stays fresh and doesn't burn"
        ]
    },

    {
        name: "Crispy Vegetable Samosas",
        description: "Golden pastry pockets filled with spiced potatoes and peas",
        emoji: "🥟",

        rating: 4.5,
        reviews: 176,

        prepTime: 30,
        cookTime: 20,
        servings: 6,

        difficulty: "Medium",
        cuisine: "Indian",

        ingredients: [
            "12 samosa pastry sheets",
            "3 potatoes, boiled and mashed",
            "1/2 cup green peas",
            "1 tsp cumin seeds",
            "1 tsp garam masala",
            "1 green chili, finely chopped",
            "Oil for frying"
        ],

        instructions: [
            "Saute cumin seeds, then add peas and chili and cook for 2 minutes",
            "Mix in the mashed potatoes and garam masala, cooking until well combined",
            "Let the filling cool slightly before assembling",
            "Fill each pastry sheet with a spoonful of the potato mixture and fold into a triangle, sealing the edges",
            "Heat oil and fry the samosas in batches until golden and crisp",
            "Drain on paper towels and serve hot with chutney"
        ],

        nutrition: {
            calories: 340,
            protein: 8,
            carbs: 45,
            fat: 15,
            fiber: 4,
            sodium: 410
        },

        chefTips: [
            "Seal the edges with a little water or flour paste so they don't open while frying",
            "Fry on medium heat - too hot and the outside browns before the inside is cooked through"
        ]
    },

    {
        name: "Chocolate Lava Cake",
        description: "A warm chocolate cake with a molten, gooey center",
        emoji: "🍫",

        rating: 4.9,
        reviews: 267,

        prepTime: 20,
        cookTime: 30,
        servings: 4,

        difficulty: "Medium",
        cuisine: "French",

        ingredients: [
            "200g dark chocolate",
            "200g butter",
            "4 eggs",
            "100g sugar",
            "60g all-purpose flour",
            "A pinch of salt",
            "Butter and cocoa powder for the ramekins"
        ],

        instructions: [
            "Preheat the oven and grease four ramekins with butter and a dusting of cocoa powder",
            "Melt the chocolate and butter together until smooth",
            "Whisk the eggs and sugar until pale and slightly thickened",
            "Fold the melted chocolate into the egg mixture",
            "Gently fold in the flour and salt until just combined",
            "Divide the batter into the ramekins and bake for 12-14 minutes until the edges are set but the center is still soft",
            "Let rest for a minute, then invert onto plates and serve immediately"
        ],

        nutrition: {
            calories: 540,
            protein: 8,
            carbs: 42,
            fat: 38,
            fiber: 4,
            sodium: 210
        },

        chefTips: [
            "Don't overbake - the molten center is what makes this dessert special, so check it a minute early",
            "Room-temperature eggs whip up better and give the cake a lighter texture"
        ]
    }

];

