
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface NutritionChartProps {
  protein: number;
  carbs: number;
  fat: number;
}

const NutritionChart = ({ protein, carbs, fat }: NutritionChartProps) => {
  const data = [
    { name: "Protein", value: protein, color: "#8370E5" },
    { name: "Carbs", value: carbs, color: "#3EB593" },
    { name: "Fat", value: fat, color: "#FF7B5C" },
  ];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NutritionChart;
