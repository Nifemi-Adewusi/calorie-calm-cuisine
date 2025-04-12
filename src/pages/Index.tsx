
import { useState } from "react";
import CalorieCalculator from "@/components/CalorieCalculator";
import MealRecommendation from "@/components/MealRecommendation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, UtensilsCrossed, Sparkles, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [calculatedCalories, setCalculatedCalories] = useState(0);

  return (
    <div className="min-h-screen flex flex-col pattern-bg">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-mint-500 to-sky-500 bg-clip-text text-transparent">
                    Nourish
                  </span>{" "}
                  your body with perfect portions
                </h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                  Discover personalized meal recommendations tailored to your caloric needs. Eat well, feel great.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-mint-400 to-sky-400 hover:from-mint-500 hover:to-sky-500"
                  >
                    Get Started
                  </Button>
                  <Link to="/meals">
                    <Button variant="outline" size="lg">
                      Browse Meal Plans
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="relative z-10 animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Balanced meal" 
                    className="rounded-2xl shadow-lg max-w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-gradient-to-br from-lavender-200 to-mint-200 rounded-2xl -z-10 blur-lg opacity-70"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-white/70">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Tailored to Your <span className="text-mint-500">Nutrition Goals</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="w-12 h-12 rounded-full bg-lavender-100 flex items-center justify-center mb-4">
                  <UtensilsCrossed className="h-6 w-6 text-lavender-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Meals</h3>
                <p className="text-muted-foreground">
                  Get meal recommendations based on your individual caloric needs and dietary preferences.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-mint-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Balanced Nutrition</h3>
                <p className="text-muted-foreground">
                  Every meal plan is designed to provide balanced macronutrients for optimal health.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="w-12 h-12 rounded-full bg-peach-100 flex items-center justify-center mb-4">
                  <HeartPulse className="h-6 w-6 text-peach-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Health Focused</h3>
                <p className="text-muted-foreground">
                  Nutritious, delicious meals that support your health and wellness journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Calculate Your Calorie Needs</h2>
              <p className="text-xl text-muted-foreground">
                Enter your details to discover your recommended daily calorie intake and get personalized meal suggestions.
              </p>
            </div>
            
            <CalorieCalculator />
            <MealRecommendation calories={calculatedCalories} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
