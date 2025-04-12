
import { useState, useEffect } from "react";
import { Meal, getRecommendedMeals } from "@/utils/mealData";
import MealList from "./MealList";
import { Skeleton } from "@/components/ui/skeleton";

interface MealRecommendationProps {
  calories: number;
}

const MealRecommendation = ({ calories }: MealRecommendationProps) => {
  const [recommendedMeals, setRecommendedMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (calories > 0) {
      setLoading(true);
      // Simulating API call with setTimeout
      setTimeout(() => {
        const meals = getRecommendedMeals(calories);
        setRecommendedMeals(meals);
        setLoading(false);
      }, 1000);
    }
  }, [calories]);

  if (calories === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Your Recommended Meals</h2>
      <p className="text-muted-foreground mb-8">
        Based on your daily requirement of {calories} calories, here's a suggested meal plan:
      </p>

      {loading ? (
        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="space-y-3">
                  <Skeleton className="h-[200px] w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          <MealList meals={recommendedMeals.filter(meal => meal.mealType === 'breakfast')} title="Breakfast" />
          <MealList meals={recommendedMeals.filter(meal => meal.mealType === 'lunch')} title="Lunch" />
          <MealList meals={recommendedMeals.filter(meal => meal.mealType === 'dinner')} title="Dinner" />
          <MealList meals={recommendedMeals.filter(meal => meal.mealType === 'snack')} title="Snack" />
          
          <div className="p-6 bg-mint-100 rounded-xl">
            <h3 className="font-semibold mb-2">Total Nutritional Value:</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-mint-500">
                  {recommendedMeals.reduce((sum, meal) => sum + meal.calories, 0)} 
                </div>
                <div className="text-sm text-muted-foreground">Calories</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-lavender-500">
                  {recommendedMeals.reduce((sum, meal) => sum + meal.protein, 0)}g
                </div>
                <div className="text-sm text-muted-foreground">Protein</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-sky-500">
                  {recommendedMeals.reduce((sum, meal) => sum + meal.carbs, 0)}g
                </div>
                <div className="text-sm text-muted-foreground">Carbs</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-peach-500">
                  {recommendedMeals.reduce((sum, meal) => sum + meal.fat, 0)}g
                </div>
                <div className="text-sm text-muted-foreground">Fat</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealRecommendation;
