export interface Meal {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  imageUrl: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  description: string;
  ingredients: string[];
  preparationTime: number; // in minutes
  tags: string[];
  healthConditions?: string[]; // For specific health conditions
  preparationSteps: string[]; // Added preparation steps
}

export const meals: Meal[] = [
  {
    id: "1",
    name: "Akara with Pap",
    calories: 350,
    protein: 15,
    carbs: 45,
    fat: 10,
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    mealType: "breakfast",
    description: "Traditional Nigerian bean cakes (Akara) served with soft fermented corn porridge (Pap). Rich in protein and complex carbohydrates.",
    ingredients: ["Black-eyed beans", "Onions", "Peppers", "Palm oil", "Corn pap", "Spices"],
    preparationTime: 35,
    tags: ["traditional", "vegetarian", "high-protein"],
    healthConditions: ["diabetes-friendly", "weight-gain"],
    preparationSteps: [
      "Soak black-eyed beans for 2-3 hours, then peel the skin by rubbing between your palms.",
      "Blend the peeled beans with peppers and onions into a thick paste. Add a pinch of salt.",
      "Whip the mixture vigorously for 5 minutes to incorporate air, making the batter lighter.",
      "Heat palm oil in a deep pan until very hot.",
      "Using a spoon, scoop the bean mixture and drop into the hot oil to form small cakes.",
      "Fry until golden brown on both sides, about 3-4 minutes per side.",
      "For the pap, mix corn pap powder with cold water to form a paste.",
      "Boil water separately, then add the pap paste while stirring continuously to avoid lumps.",
      "Simmer for 3-5 minutes until it thickens. Serve hot with Akara."
    ]
  },
  {
    id: "2",
    name: "Moi Moi with Fresh Fruit",
    calories: 280,
    protein: 16,
    carbs: 35,
    fat: 6,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    mealType: "breakfast",
    description: "Steamed bean pudding made with blended beans, peppers, and spices, served with fresh seasonal fruits.",
    ingredients: ["Black-eyed beans", "Red peppers", "Onions", "Palm oil", "Mixed fruits", "Fish (optional)"],
    preparationTime: 45,
    tags: ["high-protein", "gluten-free"],
    healthConditions: ["diabetes-friendly", "heart-healthy"],
    preparationSteps: [
      "Soak black-eyed beans for 30 minutes, then peel by rubbing between your palms.",
      "Blend the beans with red peppers and onions until smooth.",
      "Add a tablespoon of palm oil, salt, and spices to taste.",
      "If using fish, break it into small pieces and add to the mixture.",
      "Grease small heat-resistant containers or traditional leaves with oil.",
      "Pour the mixture into the greased containers, covering them with foil or leaves.",
      "Place the containers in a pot with water that comes halfway up the sides.",
      "Steam on medium heat for 35-40 minutes until firm.",
      "Allow to cool slightly before turning out. Serve with fresh cut seasonal fruits."
    ]
  },
  {
    id: "3",
    name: "Jollof Rice with Grilled Chicken",
    calories: 550,
    protein: 35,
    carbs: 65,
    fat: 15,
    imageUrl: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    mealType: "lunch",
    description: "Fragrant rice cooked in tomato sauce with spices, served with lean grilled chicken. A classic Nigerian favorite.",
    ingredients: ["Long grain rice", "Tomatoes", "Peppers", "Onions", "Chicken breast", "Nigerian spices"],
    preparationTime: 50,
    tags: ["popular", "high-protein"],
    healthConditions: ["weight-gain"],
    preparationSteps: [
      "Marinate chicken breasts with salt, pepper, garlic, and ginger for at least 30 minutes.",
      "Blend tomatoes, red peppers, and onions to make a smooth sauce.",
      "Heat oil in a pot and sauté chopped onions until translucent.",
      "Add the blended tomato mixture and cook on medium heat for 10-15 minutes.",
      "Add Nigerian spices, curry powder, thyme, bay leaves, and a small amount of salt.",
      "Wash rice thoroughly and add to the tomato sauce, stirring well.",
      "Add chicken stock or water, just enough to cover the rice by about an inch.",
      "Cover with foil and then the pot lid to trap steam, and cook on low heat for 25-30 minutes.",
      "Meanwhile, grill the marinated chicken until fully cooked, about 6-8 minutes per side.",
      "Fluff the rice with a fork when done and serve with the grilled chicken."
    ]
  },
  {
    id: "4",
    name: "Efo Riro with Grilled Fish",
    calories: 380,
    protein: 32,
    carbs: 15,
    fat: 22,
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    mealType: "lunch",
    description: "Vegetable soup made with spinach, peppers, and spices, served with grilled fish. High in protein and nutrients.",
    ingredients: ["Spinach/Green vegetables", "Peppers", "Onions", "Palm oil", "Grilled fish", "Nigerian spices"],
    preparationTime: 40,
    tags: ["high-protein", "low-carb", "nutrient-rich"],
    healthConditions: ["diabetes-friendly", "weight-loss", "heart-healthy"],
    preparationSteps: [
      "Clean and chop spinach or other green vegetables into medium pieces.",
      "Season fish with salt, pepper, and a little oil, then grill until cooked through.",
      "Heat palm oil in a pot until hot but not smoking.",
      "Add chopped onions and sauté briefly.",
      "Add blended peppers (red bell peppers and scotch bonnet) and cook for 10 minutes.",
      "Add Nigerian spices, crayfish, and salt to taste.",
      "If using, add small amounts of assorted meats or seafood at this point.",
      "Simmer for 5-7 minutes until the sauce thickens slightly.",
      "Add the chopped spinach, stir gently, and cook for 3-5 minutes until just wilted.",
      "Serve hot with the grilled fish."
    ]
  },
  {
    id: "5",
    name: "Egusi Soup with Pounded Yam",
    calories: 620,
    protein: 30,
    carbs: 60,
    fat: 30,
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80",
    mealType: "dinner",
    description: "Rich melon seed soup with assorted meat and vegetables, served with smooth pounded yam. A traditional Nigerian delicacy.",
    ingredients: ["Egusi (melon seeds)", "Assorted meats", "Vegetables", "Palm oil", "Yam", "Nigerian spices"],
    preparationTime: 65,
    tags: ["traditional", "rich", "filling"],
    healthConditions: ["weight-gain"],
    preparationSteps: [
      "Blend or grind egusi seeds until fine, set aside.",
      "Prepare assorted meats (beef, goat, tripe) by boiling with salt, onions, and spices until tender.",
      "Heat palm oil in a pot until hot but not smoking.",
      "Add chopped onions and sauté until translucent.",
      "Add the ground egusi and fry for about 10 minutes, stirring frequently.",
      "Add meat stock, crayfish, and additional spices. Simmer for 15 minutes.",
      "Add the cooked meats and vegetables (spinach, bitter leaf, or ugu), stir gently.",
      "Simmer for another 5-7 minutes until vegetables are wilted but still green.",
      "For pounded yam, peel and cut yam into chunks, then boil until very soft.",
      "Pound the boiled yam in a mortar until smooth and elastic, or blend using a food processor.",
      "Serve hot egusi soup with a smooth ball of pounded yam."
    ]
  },
  {
    id: "6",
    name: "Okra Soup with Wheat Fufu",
    calories: 420,
    protein: 25,
    carbs: 45,
    fat: 15,
    imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    mealType: "dinner",
    description: "Nutritious okra soup with fish and seafood, served with wheat fufu. Gluten-free and rich in fiber.",
    ingredients: ["Fresh okra", "Fish", "Seafood", "Palm oil", "Wheat flour", "Nigerian spices"],
    preparationTime: 45,
    tags: ["fiber-rich", "gluten-free"],
    healthConditions: ["diabetes-friendly", "weight-loss", "heart-healthy"],
    preparationSteps: [
      "Wash and slice okra into small rounds.",
      "Clean and cut fish into medium-sized pieces.",
      "Prepare seafood (shrimp, crab) by cleaning and removing shells where necessary.",
      "Heat a tablespoon of palm oil in a pot.",
      "Add chopped onions and sauté briefly.",
      "Add fish, seafood, Nigerian spices, and a little salt. Cook for 5 minutes.",
      "Add enough water to make a broth and simmer for 7-10 minutes.",
      "Add sliced okra and cook for another 5-7 minutes until slightly slimy.",
      "For wheat fufu, boil 2 cups of water.",
      "In a bowl, mix wheat flour with cold water to form a paste.",
      "Slowly add the paste to the boiling water, stirring continuously to avoid lumps.",
      "Keep stirring until it thickens and becomes smooth, about 5-7 minutes.",
      "Serve the hot okra soup with a ball of wheat fufu."
    ]
  },
  {
    id: "7",
    name: "Plantain Chips with Tiger Nut Milk",
    calories: 220,
    protein: 4,
    carbs: 40,
    fat: 8,
    imageUrl: "https://images.unsplash.com/photo-1478369402113-1fd53f17e8b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    mealType: "snack",
    description: "Crunchy plantain chips paired with refreshing tiger nut milk (Kunun Aya). A healthy Nigerian snack.",
    ingredients: ["Unripe plantain", "Tiger nuts", "Dates", "Coconut", "Spices"],
    preparationTime: 20,
    tags: ["quick", "vegan", "dairy-free"],
    healthConditions: ["diabetes-friendly", "heart-healthy"],
    preparationSteps: [
      "For plantain chips: Peel unripe (green) plantains.",
      "Slice the plantains thinly using a knife or mandoline slicer.",
      "Heat oil in a deep pan until moderately hot.",
      "Fry the plantain slices in small batches until golden and crisp, about 2-3 minutes.",
      "Remove and drain on paper towels. Sprinkle with salt while still hot.",
      "For tiger nut milk: Soak tiger nuts in water for 6-8 hours or overnight.",
      "Rinse the soaked tiger nuts and blend with dates, coconut, and water until smooth.",
      "Strain the mixture through a fine mesh sieve or cheesecloth.",
      "Add a pinch of cinnamon or nutmeg for extra flavor.",
      "Refrigerate until cold and serve with the plantain chips."
    ]
  },
  {
    id: "8",
    name: "Suya with Fresh Cabbage Salad",
    calories: 250,
    protein: 30,
    carbs: 10,
    fat: 12,
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    mealType: "snack",
    description: "Spicy grilled beef skewers (Suya) served with fresh cabbage and tomato salad. High in protein and low in carbs.",
    ingredients: ["Lean beef", "Suya spice", "Cabbage", "Tomatoes", "Onions", "Cucumber"],
    preparationTime: 25,
    tags: ["high-protein", "low-carb", "spicy"],
    healthConditions: ["weight-loss", "weight-gain"],
    preparationSteps: [
      "Slice lean beef (sirloin or tenderloin) into thin, flat pieces.",
      "Make suya spice by mixing ground peanuts, ginger, garlic powder, paprika, cayenne pepper, and salt.",
      "Thread the beef slices onto skewers.",
      "Generously coat the beef with suya spice, pressing it firmly to adhere.",
      "Let the meat marinate for at least 30 minutes, or ideally 2 hours.",
      "Grill the beef skewers on medium-high heat for 3-4 minutes per side.",
      "For the salad, finely shred cabbage and slice tomatoes, onions, and cucumber.",
      "Mix the vegetables in a bowl and sprinkle with a little salt.",
      "Add a dash of olive oil and lemon juice for dressing.",
      "Serve the hot suya with the fresh cabbage salad."
    ]
  }
];

// Helper functions
export const getMealsByType = (type: 'breakfast' | 'lunch' | 'dinner' | 'snack'): Meal[] => {
  return meals.filter(meal => meal.mealType === type);
};

export const getMealById = (id: string): Meal | undefined => {
  return meals.find(meal => meal.id === id);
};

export const getMealsByHealthCondition = (condition: string): Meal[] => {
  return meals.filter(meal => meal.healthConditions?.includes(condition));
};

export const getRecommendedMeals = (dailyCalories: number, healthCondition?: string): Meal[] => {
  // First filter by health condition if provided
  let mealPool = healthCondition 
    ? meals.filter(meal => meal.healthConditions?.includes(healthCondition))
    : meals;
  
  // If no meals match the health condition, use all meals
  if (mealPool.length < 4) {
    mealPool = meals;
  }
  
  const recommendedMeals: Meal[] = [];
  
  // Rough distribution of calories: 25% breakfast, 35% lunch, 30% dinner, 10% snack
  const breakfastCalories = dailyCalories * 0.25;
  const lunchCalories = dailyCalories * 0.35;
  const dinnerCalories = dailyCalories * 0.30;
  const snackCalories = dailyCalories * 0.10;
  
  // Get breakfast close to target breakfast calories
  const breakfastOptions = mealPool.filter(meal => meal.mealType === 'breakfast');
  if (breakfastOptions.length > 0) {
    const breakfast = breakfastOptions.reduce((prev, curr) => 
      Math.abs(curr.calories - breakfastCalories) < Math.abs(prev.calories - breakfastCalories) ? curr : prev
    );
    recommendedMeals.push(breakfast);
  }
  
  // Get lunch close to target lunch calories
  const lunchOptions = mealPool.filter(meal => meal.mealType === 'lunch');
  if (lunchOptions.length > 0) {
    const lunch = lunchOptions.reduce((prev, curr) => 
      Math.abs(curr.calories - lunchCalories) < Math.abs(prev.calories - lunchCalories) ? curr : prev
    );
    recommendedMeals.push(lunch);
  }
  
  // Get dinner close to target dinner calories
  const dinnerOptions = mealPool.filter(meal => meal.mealType === 'dinner');
  if (dinnerOptions.length > 0) {
    const dinner = dinnerOptions.reduce((prev, curr) => 
      Math.abs(curr.calories - dinnerCalories) < Math.abs(prev.calories - dinnerCalories) ? curr : prev
    );
    recommendedMeals.push(dinner);
  }
  
  // Get snack close to target snack calories
  const snackOptions = mealPool.filter(meal => meal.mealType === 'snack');
  if (snackOptions.length > 0) {
    const snack = snackOptions.reduce((prev, curr) => 
      Math.abs(curr.calories - snackCalories) < Math.abs(prev.calories - snackCalories) ? curr : prev
    );
    recommendedMeals.push(snack);
  }
  
  return recommendedMeals;
};
