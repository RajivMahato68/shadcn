import { useState } from "react";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip } from "recharts";
import { Card, CardHeader, CardContent, CardTitle } from "@/Components/ui/card";
// import { cn } from "./lib/utils"; // Utility for conditional classNames
import { cn } from "@/lib/utils";

// Sample Data
const data = [
  { date: "2024-12-11", desktop: 4000, mobile: 2400 },
  { date: "2024-12-12", desktop: 3000, mobile: 1398 },
  { date: "2024-12-13", desktop: 2000, mobile: 9800 },
  { date: "2024-12-14", desktop: 2780, mobile: 3908 },
  { date: "2024-12-15", desktop: 1890, mobile: 4800 },
  { date: "2024-12-16", desktop: 2390, mobile: 3800 },
  { date: "2024-12-17", desktop: 3490, mobile: 4300 },
];

// Chart Configuration
const chartConfig = {
  desktop: { label: "Desktop", color: "#8884d8" },
  mobile: { label: "Mobile", color: "#82ca9d" },
};

export default function About() {
  const [activeChart, setActiveChart] = useState("desktop");

  const total = data.reduce(
    (acc, curr) => {
      acc.desktop += curr.desktop;
      acc.mobile += curr.mobile;
      return acc;
    },
    { desktop: 0, mobile: 0 }
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Page Views</CardTitle>
        <div className="flex items-center space-x-4 pt-4">
          {["desktop", "mobile"].map((chart) => {
            return (
              <button
                key={chart}
                onClick={() => setActiveChart(chart)}
                className={cn(
                  "flex flex-col items-center space-y-1.5 rounded-md p-2 transition-all hover:bg-gray-100",
                  activeChart === chart && "bg-gray-200"
                )}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-2xl font-bold">
                  {total[chart].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="h-[300px] w-full">
          <BarChart
            data={data}
            width={500}
            height={300}
            margin={{ top: 16, right: 16, left: -32, bottom: 16 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12, fill: "hsl(var(--foreground))" }}
            />
            <Tooltip />
            <Bar
              dataKey={activeChart}
              fill={chartConfig[activeChart].color}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </div>
      </CardContent>
    </Card>
  );
}
