
import { useState, useEffect } from "react";
import { Meal, getRecommendedMeals } from "@/utils/mealData";
import MealList from "./MealList";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface MealRecommendationProps {
  calories: number;
}

const MealRecommendation = ({ calories }: MealRecommendationProps) => {
  const [recommendedMeals, setRecommendedMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [healthCondition, setHealthCondition] = useState<string>("");

  useEffect(() => {
    if (calories > 0) {
      setLoading(true);
      // Simulating API call with setTimeout
      setTimeout(() => {
        const meals = getRecommendedMeals(calories, healthCondition || undefined);
        setRecommendedMeals(meals);
        setLoading(false);
      }, 1000);
    }
  }, [calories, healthCondition]);

  if (calories === 0) {
    return null;
  }

  const healthConditions = [
    { value: "", label: "No specific condition" },
    { value: "diabetes-friendly", label: "Diabetes Friendly" },
    { value: "weight-loss", label: "Weight Loss" },
    { value: "weight-gain", label: "Weight Gain" },
    { value: "heart-healthy", label: "Heart Healthy" }
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Your Recommended Nigerian Meals</h2>
      <p className="text-muted-foreground mb-4">
        Based on your daily requirement of {calories} calories, here's a suggested Nigerian meal plan:
      </p>

      <div className="mb-8">
        <h3 className="text-md font-medium mb-2">Do you have any specific health needs?</h3>
        <Select value={healthCondition} onValueChange={setHealthCondition}>
          <SelectTrigger className="w-full md:w-[300px]">
            <SelectValue placeholder="Select health condition" />
          </SelectTrigger>
          <SelectContent>
            {healthConditions.map((condition) => (
              <SelectItem key={condition.value} value={condition.value}>
                {condition.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {healthCondition && (
          <p className="text-sm text-mint-500 mt-2">
            Your meal plan has been adjusted for {healthConditions.find(c => c.value === healthCondition)?.label}.
          </p>
        )}
      </div>

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
