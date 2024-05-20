import React from "react";
import "tailwindcss/tailwind.css";

// Sample data
const data = [
  { day: "Sunday", wins: 0, losses: 0 },
  { day: "Monday", wins: 264649.8, losses: 0 },
  { day: "Tuesday", wins: 546961.06, losses: 0 },
  { day: "Wednesday", wins: 0, losses: 88108 },
  { day: "Thursday", wins: 247809.67, losses: 1000 },
  { day: "Friday", wins: 215169.91, losses: 0 },
  { day: "Saturday", wins: 0, losses: 0 },
];

const PerformanceChart = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Performance per day</h2>
      <div className="w-full grid grid-cols-3 gap-4">
        <div className="text-right font-bold">Day</div>
        <div className="text-right font-bold">Losses</div>
        <div className="text-left font-bold">Wins</div>

        {data.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-right pr-2">{item.day}</div>
            <div className="flex justify-end items-center relative">
              <div
                className="bg-red-300 h-8"
                style={{ width: item.losses / 1000 }}
                title={item.losses > 0 ? item.losses.toFixed(2) : ""}
              ></div>
              {item.losses > 0 && (
                <span className="absolute right-0 mr-2 text-red-700">
                  {item.losses.toFixed(2)}
                </span>
              )}
            </div>
            <div className="flex items-center relative">
              <div
                className="bg-green-300 h-8"
                style={{ width: item.wins / 1000 }}
                title={item.wins > 0 ? item.wins.toFixed(2) : ""}
              ></div>
              {item.wins > 0 && (
                <span className="absolute left-0 ml-2 text-green-700">
                  {item.wins.toFixed(2)}
                </span>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-300 mr-2"></div>
          <span>Daily Wins</span>
        </div>
        <div className="flex items-center mt-2">
          <div className="w-4 h-4 bg-red-300 mr-2"></div>
          <span>Daily Losses</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
