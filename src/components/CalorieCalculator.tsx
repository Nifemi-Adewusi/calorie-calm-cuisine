
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { Activity, Dumbbell, BarChart3 } from "lucide-react";

const CalorieCalculator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    age: 30,
    gender: "female",
    weight: 70,
    height: 170,
    activityLevel: "moderate",
  });
  const [calories, setCalories] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSliderChange = (name: string, value: number[]) => {
    setFormData({ ...formData, [name]: value[0] });
  };

  const calculateCalories = () => {
    // Basic BMR calculation using Mifflin-St Jeor Equation
    let bmr = 0;
    if (formData.gender === "male") {
      bmr = 10 * formData.weight + 6.25 * formData.height - 5 * formData.age + 5;
    } else {
      bmr = 10 * formData.weight + 6.25 * formData.height - 5 * formData.age - 161;
    }

    // Activity multiplier
    let activityMultiplier = 1.2; // Sedentary
    switch (formData.activityLevel) {
      case "light":
        activityMultiplier = 1.375;
        break;
      case "moderate":
        activityMultiplier = 1.55;
        break;
      case "active":
        activityMultiplier = 1.725;
        break;
      case "very-active":
        activityMultiplier = 1.9;
        break;
    }

    const dailyCalories = Math.round(bmr * activityMultiplier);
    setCalories(dailyCalories);

    toast({
      title: "Calculation Complete!",
      description: `Your estimated daily calorie need is ${dailyCalories} calories.`,
    });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-sm border p-6 animate-scale-in">
      <div className="flex items-center justify-center mb-6">
        <div className="w-12 h-12 rounded-full bg-lavender-100 flex items-center justify-center">
          <BarChart3 className="h-6 w-6 text-lavender-500" />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-center mb-6">Calculate Your Daily Calories</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <RadioGroup
            value={formData.gender}
            onValueChange={(value) => handleSelectChange("gender", value)}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleInputChange}
              min={18}
              max={100}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleInputChange}
              min={40}
              max={200}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="height">Height (cm)</Label>
          <div className="pt-2">
            <Slider
              id="height"
              name="height"
              value={[formData.height]}
              min={140}
              max={220}
              step={1}
              onValueChange={(value) => handleSliderChange("height", value)}
            />
          </div>
          <div className="text-sm text-muted-foreground text-center">
            {formData.height} cm
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="activityLevel">Activity Level</Label>
          <Select
            value={formData.activityLevel}
            onValueChange={(value) => handleSelectChange("activityLevel", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select activity level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedentary">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  <span>Sedentary (little or no exercise)</span>
                </div>
              </SelectItem>
              <SelectItem value="light">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  <span>Light (exercise 1-3 days/week)</span>
                </div>
              </SelectItem>
              <SelectItem value="moderate">
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4" />
                  <span>Moderate (exercise 3-5 days/week)</span>
                </div>
              </SelectItem>
              <SelectItem value="active">
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4" />
                  <span>Active (exercise 6-7 days/week)</span>
                </div>
              </SelectItem>
              <SelectItem value="very-active">
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4" />
                  <span>Very Active (intense exercise daily)</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={calculateCalories}
          className="w-full mt-4 bg-gradient-to-r from-mint-400 to-sky-400 hover:from-mint-500 hover:to-sky-500"
        >
          Calculate Calories
        </Button>

        {calories && (
          <div className="mt-6 text-center p-4 bg-mint-100 rounded-lg">
            <h4 className="font-medium text-foreground">Your Daily Calorie Need</h4>
            <p className="text-2xl font-bold text-mint-500">{calories} calories</p>
            <p className="text-sm text-muted-foreground mt-2">
              This is an estimate based on your inputs. Individual needs may vary.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalorieCalculator;
