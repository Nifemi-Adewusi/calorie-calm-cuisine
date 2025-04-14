
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Utensils } from "lucide-react";
import { Meal } from "@/utils/mealData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface MealCardProps {
  meal: Meal;
}

const MealCard = ({ meal }: MealCardProps) => {
  const [imageError, setImageError] = useState(false);
  
  const fallbackImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80";
  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Link to={`/meal/${meal.id}`}>
      <Card className="overflow-hidden h-full card-hover">
        <AspectRatio ratio={16/9} className="relative overflow-hidden">
          <img 
            src={imageError ? fallbackImage : meal.imageUrl} 
            alt={meal.name} 
            onError={handleImageError}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 capitalize bg-white/80 backdrop-blur-sm text-foreground">
            {meal.mealType}
          </Badge>
        </AspectRatio>
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
