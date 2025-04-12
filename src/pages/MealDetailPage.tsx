
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Meal, getMealById, meals } from "@/utils/mealData";
import NutritionChart from "@/components/NutritionChart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Utensils } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import MealList from "@/components/MealList";

const MealDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [relatedMeals, setRelatedMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Simulating API fetch
      setTimeout(() => {
        const foundMeal = getMealById(id);
        setMeal(foundMeal || null);
        
        if (foundMeal) {
          // Get related meals based on same meal type or similar tags
          const related = meals
            .filter(m => 
              m.id !== foundMeal.id && 
              (m.mealType === foundMeal.mealType || 
               m.tags.some(tag => foundMeal.tags.includes(tag)))
            )
            .slice(0, 4);
          setRelatedMeals(related);
        }
        
        setLoading(false);
      }, 500);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col pattern-bg">
        <Header />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="animate-pulse space-y-8">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!meal) {
    return (
      <div className="min-h-screen flex flex-col pattern-bg">
        <Header />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Meal Not Found</h1>
            <p className="text-muted-foreground mb-8">
              We couldn't find the meal you're looking for.
            </p>
            <Link to="/meals">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Meals
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pattern-bg">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/meals" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Meals
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={meal.imageUrl} 
                  alt={meal.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-2">Nutrition Information</h2>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{meal.calories}</div>
                      <div className="text-sm text-muted-foreground">Calories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-lavender-500">{meal.protein}g</div>
                      <div className="text-sm text-muted-foreground">Protein</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-mint-500">{meal.carbs}g</div>
                      <div className="text-sm text-muted-foreground">Carbs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-peach-500">{meal.fat}g</div>
                      <div className="text-sm text-muted-foreground">Fat</div>
                    </div>
                  </div>
                  
                  <NutritionChart 
                    protein={meal.protein} 
                    carbs={meal.carbs} 
                    fat={meal.fat} 
                  />
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="capitalize bg-lavender-100 text-lavender-500 hover:bg-lavender-200">
                  {meal.mealType}
                </Badge>
                {meal.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="capitalize">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{meal.name}</h1>
              
              <div className="flex gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Utensils className="h-4 w-4" />
                  <span>{meal.calories} calories</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{meal.preparationTime} min preparation</span>
                </div>
              </div>
              
              <p className="text-lg mb-8">{meal.description}</p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
                <ul className="space-y-2">
                  {meal.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block h-2 w-2 bg-mint-400 rounded-full mt-2 mr-3"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Preparation</h2>
                <p className="text-muted-foreground">
                  This is a simple meal to prepare. Gather all ingredients, follow the recipe, and enjoy your {meal.name}!
                </p>
              </div>
            </div>
          </div>
          
          <Separator className="my-16" />
          
          {relatedMeals.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-8">You Might Also Like</h2>
              <MealList meals={relatedMeals} />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MealDetailPage;
