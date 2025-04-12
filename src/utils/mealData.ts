
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
}

export const meals: Meal[] = [
  {
    id: "1",
    name: "Avocado Toast with Egg",
    calories: 350,
    protein: 15,
    carbs: 30,
    fat: 20,
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    mealType: "breakfast",
    description: "Creamy avocado spread on whole grain toast topped with a perfectly poached egg and a sprinkle of red pepper flakes.",
    ingredients: ["1 slice whole grain bread", "1/2 avocado", "1 egg", "Salt and pepper to taste", "Red pepper flakes"],
    preparationTime: 15,
    tags: ["high-protein", "vegetarian"]
  },
  {
    id: "2",
    name: "Greek Yogurt Parfait",
    calories: 280,
    protein: 18,
    carbs: 35,
    fat: 8,
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    mealType: "breakfast",
    description: "Layers of creamy Greek yogurt, fresh berries, and crunchy granola for a balanced start to your day.",
    ingredients: ["1 cup Greek yogurt", "1/4 cup granola", "1/2 cup mixed berries", "1 tbsp honey"],
    preparationTime: 5,
    tags: ["quick", "high-protein", "vegetarian"]
  },
  {
    id: "3",
    name: "Quinoa Salad Bowl",
    calories: 450,
    protein: 15,
    carbs: 60,
    fat: 15,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    mealType: "lunch",
    description: "A hearty bowl of quinoa topped with roasted vegetables, chickpeas, and a tangy lemon dressing.",
    ingredients: ["1 cup cooked quinoa", "1/2 cup roasted vegetables", "1/4 cup chickpeas", "2 tbsp lemon dressing", "Fresh herbs"],
    preparationTime: 25,
    tags: ["plant-based", "high-fiber", "vegan"]
  },
  {
    id: "4",
    name: "Grilled Chicken Salad",
    calories: 380,
    protein: 35,
    carbs: 15,
    fat: 18,
    imageUrl: "https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    mealType: "lunch",
    description: "Tender grilled chicken breast served over a bed of mixed greens with cherry tomatoes, cucumber, and balsamic vinaigrette.",
    ingredients: ["4 oz grilled chicken breast", "2 cups mixed greens", "1/4 cup cherry tomatoes", "1/4 cucumber, sliced", "2 tbsp balsamic vinaigrette"],
    preparationTime: 20,
    tags: ["high-protein", "low-carb"]
  },
  {
    id: "5",
    name: "Baked Salmon with Roasted Vegetables",
    calories: 520,
    protein: 40,
    carbs: 25,
    fat: 25,
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    mealType: "dinner",
    description: "Oven-baked salmon fillet with a medley of roasted vegetables seasoned with herbs and olive oil.",
    ingredients: ["6 oz salmon fillet", "1 cup mixed vegetables", "1 tbsp olive oil", "Fresh herbs", "Lemon wedge"],
    preparationTime: 30,
    tags: ["high-protein", "omega-3", "gluten-free"]
  },
  {
    id: "6",
    name: "Vegetable Stir-Fry with Tofu",
    calories: 320,
    protein: 18,
    carbs: 38,
    fat: 12,
    imageUrl: "https://images.unsplash.com/photo-1512058454905-6b841e7ad132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
    mealType: "dinner",
    description: "Crispy tofu and colorful vegetables stir-fried in a savory sauce, served over a small portion of brown rice.",
    ingredients: ["4 oz tofu", "2 cups mixed vegetables", "1 tbsp soy sauce", "1 tsp sesame oil", "1/2 cup brown rice"],
    preparationTime: 25,
    tags: ["plant-based", "vegetarian", "high-fiber"]
  },
  {
    id: "7",
    name: "Apple with Almond Butter",
    calories: 200,
    protein: 5,
    carbs: 25,
    fat: 10,
    imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    mealType: "snack",
    description: "Crisp apple slices paired with creamy almond butter for a satisfying snack.",
    ingredients: ["1 medium apple", "1 tbsp almond butter"],
    preparationTime: 2,
    tags: ["quick", "vegan", "high-fiber"]
  },
  {
    id: "8",
    name: "Cottage Cheese with Berries",
    calories: 180,
    protein: 20,
    carbs: 15,
    fat: 5,
    imageUrl: "https://images.unsplash.com/photo-1551411303-3af3e442d14a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    mealType: "snack",
    description: "Protein-rich cottage cheese topped with a mix of fresh berries and a touch of honey.",
    ingredients: ["1/2 cup cottage cheese", "1/4 cup mixed berries", "1 tsp honey"],
    preparationTime: 3,
    tags: ["high-protein", "low-calorie", "quick"]
  }
];

export const getMealsByType = (type: 'breakfast' | 'lunch' | 'dinner' | 'snack'): Meal[] => {
  return meals.filter(meal => meal.mealType === type);
};

export const getMealById = (id: string): Meal | undefined => {
  return meals.find(meal => meal.id === id);
};

export const getRecommendedMeals = (dailyCalories: number): Meal[] => {
  // Simple algorithm to recommend meals based on calorie needs
  const recommendedMeals: Meal[] = [];
  
  // Rough distribution of calories: 25% breakfast, 35% lunch, 30% dinner, 10% snack
  const breakfastCalories = dailyCalories * 0.25;
  const lunchCalories = dailyCalories * 0.35;
  const dinnerCalories = dailyCalories * 0.30;
  const snackCalories = dailyCalories * 0.10;
  
  // Get breakfast close to target breakfast calories
  const breakfastOptions = getMealsByType('breakfast');
  const breakfast = breakfastOptions.reduce((prev, curr) => 
    Math.abs(curr.calories - breakfastCalories) < Math.abs(prev.calories - breakfastCalories) ? curr : prev
  );
  recommendedMeals.push(breakfast);
  
  // Get lunch close to target lunch calories
  const lunchOptions = getMealsByType('lunch');
  const lunch = lunchOptions.reduce((prev, curr) => 
    Math.abs(curr.calories - lunchCalories) < Math.abs(prev.calories - lunchCalories) ? curr : prev
  );
  recommendedMeals.push(lunch);
  
  // Get dinner close to target dinner calories
  const dinnerOptions = getMealsByType('dinner');
  const dinner = dinnerOptions.reduce((prev, curr) => 
    Math.abs(curr.calories - dinnerCalories) < Math.abs(prev.calories - dinnerCalories) ? curr : prev
  );
  recommendedMeals.push(dinner);
  
  // Get snack close to target snack calories
  const snackOptions = getMealsByType('snack');
  const snack = snackOptions.reduce((prev, curr) => 
    Math.abs(curr.calories - snackCalories) < Math.abs(prev.calories - snackCalories) ? curr : prev
  );
  recommendedMeals.push(snack);
  
  return recommendedMeals;
};
