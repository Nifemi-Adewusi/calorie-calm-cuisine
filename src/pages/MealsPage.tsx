
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MealList from "@/components/MealList";
import { meals, Meal } from "@/utils/mealData";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, X, Heart } from "lucide-react";

const MealsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mealType, setMealType] = useState<string>("all");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [healthCondition, setHealthCondition] = useState<string>("all");
  
  const availableTags = Array.from(
    new Set(meals.flatMap(meal => meal.tags))
  ).sort();

  const availableHealthConditions = Array.from(
    new Set(meals.flatMap(meal => meal.healthConditions || []))
  ).sort();

  const handleTagToggle = (tag: string) => {
    setActiveFilters(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const filteredMeals = meals.filter(meal => {
    // Search term filter
    const matchesSearch = meal.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          meal.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Meal type filter
    const matchesMealType = mealType === "all" || meal.mealType === mealType;
    
    // Tags filter
    const matchesTags = activeFilters.length === 0 || 
                        activeFilters.every(tag => meal.tags.includes(tag));
    
    // Health condition filter
    const matchesHealth = healthCondition === "all" || 
                         meal.healthConditions?.includes(healthCondition);
    
    return matchesSearch && matchesMealType && matchesTags && matchesHealth;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setMealType("all");
    setActiveFilters([]);
    setHealthCondition("all");
  };

  return (
    <div className="min-h-screen flex flex-col pattern-bg">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Explore Nigerian Meals</h1>
            <p className="text-xl text-muted-foreground">
              Discover delicious and nutritious Nigerian meal options tailored to your health needs.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-12 space-y-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search meals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="w-full sm:w-auto">
                <Select value={mealType} onValueChange={setMealType}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Meal Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Meals</SelectItem>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="lunch">Lunch</SelectItem>
                    <SelectItem value="dinner">Dinner</SelectItem>
                    <SelectItem value="snack">Snack</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full sm:w-auto">
                <Select value={healthCondition} onValueChange={setHealthCondition}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Health Needs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Health Conditions</SelectItem>
                    {availableHealthConditions.map((condition) => (
                      <SelectItem key={condition} value={condition}>
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-2 text-peach-500" />
                          <span className="capitalize">{condition.replace(/-/g, ' ')}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full sm:w-auto flex flex-wrap gap-2 justify-center">
                <div className="bg-white rounded-full p-1 flex items-center">
                  <SlidersHorizontal className="h-4 w-4 text-muted-foreground mx-2" />
                  <span className="text-sm pr-2">Filters:</span>
                </div>
                {availableTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={activeFilters.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer capitalize"
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
                {(searchTerm !== "" || mealType !== "all" || activeFilters.length > 0 || healthCondition !== "all") && (
                  <Badge
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={clearFilters}
                  >
                    Clear <X className="ml-1 h-3 w-3" />
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          {/* Meal Results */}
          <MealList meals={filteredMeals} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MealsPage;
