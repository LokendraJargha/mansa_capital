import React from "react";
import "tailwindcss/tailwind.css";

// Sample data
const data = [
  {
    year: 2023,
    months: [
      11.97,
      8.84,
      null,
      -12,
      null,
      null,
      null,
      null,
      null,
      6.44,
      null,
      null,
    ],
    ytd: 29.71,
  },
  {
    year: 2024,
    months: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    ytd: null,
  },
];

const PerformanceTable = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Performance Per Month</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2"> </th>
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
                "YTD",
              ].map((month, index) => (
                <th key={index} className="border border-gray-300 p-2">
                  {month}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((yearData, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2 font-bold">
                  {yearData.year}
                </td>
                {yearData.months.map((monthData, monthIndex) => (
                  <td
                    key={monthIndex}
                    className="border border-gray-300 p-2 text-center"
                  >
                    {monthData !== null ? (
                      <div
                        className={`p-2 ${
                          monthData >= 0 ? "bg-green-200" : "bg-red-200"
                        }`}
                        title={monthData}
                      >
                        {monthData.toFixed(2)}%
                      </div>
                    ) : null}
                  </td>
                ))}
                <td className="border border-gray-300 p-2 text-center">
                  {yearData.ytd !== null ? (
                    <div
                      className={`p-2 ${
                        yearData.ytd >= 0 ? "bg-green-200" : "bg-red-200"
                      }`}
                      title={yearData.ytd}
                    >
                      {yearData.ytd.toFixed(2)}%
                    </div>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceTable;
