
import { Meal } from "@/utils/mealData";
import MealCard from "./MealCard";

interface MealListProps {
  meals: Meal[];
  title?: string;
}

const MealList = ({ meals, title }: MealListProps) => {
  return (
    <div className="w-full">
      {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>

      {meals.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p>No meals found.</p>
        </div>
      )}
    </div>
  );
};

export default MealList;
