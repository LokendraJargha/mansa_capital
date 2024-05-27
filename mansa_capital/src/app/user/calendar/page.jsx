"use client";
import { useState } from "react";
export default function Calendar() {
  function convertToMultiDimensional(arr) {
    //chatgpt
    const result = [];
    for (let i = 0; i < arr.length; i += 7) {
      result.push(arr.slice(i, i + 7));
    }
    return result;
  }

  const numOfDays = (y, m) => new Date(y, m, 0).getDate(); //chatgpt

  function getDayOfWeek(year, month, day) {
    //chatgpt
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek;
  }
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState(1);

  const firstDayofMonth = getDayOfWeek(year, month, 1); //0 for sunday

  const allDaysOfMonth = () => {
    const days = Array(firstDayofMonth).fill(" ");
    const numDays = numOfDays(year, month);

    for (let i = 1; i <= numDays; i++) {
      days.push(i);
    }

    return days;
  };

  const breakedArray = convertToMultiDimensional(allDaysOfMonth());
  return (
    <div className="border">
      Year is {year}
      Month is {month}
      <table>
        <tr className="w-full">
          {days.map((item) => {
            return <td className="border p-3">{item}</td>;
          })}
        </tr>

        {breakedArray.map((item) => {
          return (
            <tr className="w-full">
              {item.map((item) => {
                return <td className="border p-3">{item}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
