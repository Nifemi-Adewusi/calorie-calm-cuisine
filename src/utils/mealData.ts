
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
}

export const meals: Meal[] = [
  {
    id: "1",
    name: "Akara with Pap",
    calories: 350,
    protein: 15,
    carbs: 45,
    fat: 10,
    imageUrl: "https://images.unsplash.com/photo-1651476278602-797e0fd12a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    mealType: "breakfast",
    description: "Traditional Nigerian bean cakes (Akara) served with soft fermented corn porridge (Pap). Rich in protein and complex carbohydrates.",
    ingredients: ["Black-eyed beans", "Onions", "Peppers", "Palm oil", "Corn pap", "Spices"],
    preparationTime: 35,
    tags: ["traditional", "vegetarian", "high-protein"],
    healthConditions: ["diabetes-friendly", "weight-gain"]
  },
  {
    id: "2",
    name: "Moi Moi with Fresh Fruit",
    calories: 280,
    protein: 16,
    carbs: 35,
    fat: 6,
    imageUrl: "https://images.unsplash.com/photo-1654590704485-77faeb92c8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    mealType: "breakfast",
    description: "Steamed bean pudding made with blended beans, peppers, and spices, served with fresh seasonal fruits.",
    ingredients: ["Black-eyed beans", "Red peppers", "Onions", "Palm oil", "Mixed fruits", "Fish (optional)"],
    preparationTime: 45,
    tags: ["high-protein", "gluten-free"],
    healthConditions: ["diabetes-friendly", "heart-healthy"]
  },
  {
    id: "3",
    name: "Jollof Rice with Grilled Chicken",
    calories: 550,
    protein: 35,
    carbs: 65,
    fat: 15,
    imageUrl: "https://images.unsplash.com/photo-1593560708920-61b98310b2b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    mealType: "lunch",
    description: "Fragrant rice cooked in tomato sauce with spices, served with lean grilled chicken. A classic Nigerian favorite.",
    ingredients: ["Long grain rice", "Tomatoes", "Peppers", "Onions", "Chicken breast", "Nigerian spices"],
    preparationTime: 50,
    tags: ["popular", "high-protein"],
    healthConditions: ["weight-gain"]
  },
  {
    id: "4",
    name: "Efo Riro with Grilled Fish",
    calories: 380,
    protein: 32,
    carbs: 15,
    fat: 22,
    imageUrl: "https://images.unsplash.com/photo-1606791422814-b32c705e3e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    mealType: "lunch",
    description: "Vegetable soup made with spinach, peppers, and spices, served with grilled fish. High in protein and nutrients.",
    ingredients: ["Spinach/Green vegetables", "Peppers", "Onions", "Palm oil", "Grilled fish", "Nigerian spices"],
    preparationTime: 40,
    tags: ["high-protein", "low-carb", "nutrient-rich"],
    healthConditions: ["diabetes-friendly", "weight-loss", "heart-healthy"]
  },
  {
    id: "5",
    name: "Egusi Soup with Pounded Yam",
    calories: 620,
    protein: 30,
    carbs: 60,
    fat: 30,
    imageUrl: "https://images.unsplash.com/photo-1596611646423-d51a4eb51706?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    mealType: "dinner",
    description: "Rich melon seed soup with assorted meat and vegetables, served with smooth pounded yam. A traditional Nigerian delicacy.",
    ingredients: ["Egusi (melon seeds)", "Assorted meats", "Vegetables", "Palm oil", "Yam", "Nigerian spices"],
    preparationTime: 65,
    tags: ["traditional", "rich", "filling"],
    healthConditions: ["weight-gain"]
  },
  {
    id: "6",
    name: "Okra Soup with Wheat Fufu",
    calories: 420,
    protein: 25,
    carbs: 45,
    fat: 15,
    imageUrl: "https://images.unsplash.com/photo-1633796331241-a43fa82412d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
    mealType: "dinner",
    description: "Nutritious okra soup with fish and seafood, served with wheat fufu. Gluten-free and rich in fiber.",
    ingredients: ["Fresh okra", "Fish", "Seafood", "Palm oil", "Wheat flour", "Nigerian spices"],
    preparationTime: 45,
    tags: ["fiber-rich", "gluten-free"],
    healthConditions: ["diabetes-friendly", "weight-loss", "heart-healthy"]
  },
  {
    id: "7",
    name: "Plantain Chips with Tiger Nut Milk",
    calories: 220,
    protein: 4,
    carbs: 40,
    fat: 8,
    imageUrl: "https://images.unsplash.com/photo-1593001920095-0602a327de25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    mealType: "snack",
    description: "Crunchy plantain chips paired with refreshing tiger nut milk (Kunun Aya). A healthy Nigerian snack.",
    ingredients: ["Unripe plantain", "Tiger nuts", "Dates", "Coconut", "Spices"],
    preparationTime: 20,
    tags: ["quick", "vegan", "dairy-free"],
    healthConditions: ["diabetes-friendly", "heart-healthy"]
  },
  {
    id: "8",
    name: "Suya with Fresh Cabbage Salad",
    calories: 250,
    protein: 30,
    carbs: 10,
    fat: 12,
    imageUrl: "https://images.unsplash.com/photo-1544598740-fcbf7b5bbd78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    mealType: "snack",
    description: "Spicy grilled beef skewers (Suya) served with fresh cabbage and tomato salad. High in protein and low in carbs.",
    ingredients: ["Lean beef", "Suya spice", "Cabbage", "Tomatoes", "Onions", "Cucumber"],
    preparationTime: 25,
    tags: ["high-protein", "low-carb", "spicy"],
    healthConditions: ["weight-loss", "weight-gain"]
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
