
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Utensils } from "lucide-react";
import { Meal } from "@/utils/mealData";
import { Link } from "react-router-dom";

interface MealCardProps {
  meal: Meal;
}

const MealCard = ({ meal }: MealCardProps) => {
  return (
    <Link to={`/meal/${meal.id}`}>
      <Card className="overflow-hidden h-full card-hover">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={meal.imageUrl} 
            alt={meal.name} 
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 capitalize bg-white/80 backdrop-blur-sm text-foreground">
            {meal.mealType}
          </Badge>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{meal.name}</CardTitle>
          <CardDescription className="line-clamp-2">{meal.description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Utensils className="h-4 w-4" />
              <span>{meal.calories} cal</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{meal.preparationTime} min</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-1">
          {meal.tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} variant="secondary" className="capitalize">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default MealCard;
