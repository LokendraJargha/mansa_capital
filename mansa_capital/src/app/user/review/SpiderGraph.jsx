"use client";
import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";

const radarData = [
  {
    subject: "Asia",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "London",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "New York",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Out of Session",
    A: 99,
    B: 100,
    fullMark: 150,
  },
];

const SpiderGraph_ = ({ title }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-center mb-10">{title}</h3>
      <RadarChart outerRadius={90} width={200} height={200} data={radarData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="A"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />

        <Legend />
      </RadarChart>
    </div>
  );
};

const SpiderGraph = () => {
  return (
    <div className="flex justify-around flex-wrap m-4">
      <SpiderGraph_ title="Win Rate" />
      <SpiderGraph_ title="Total Trades" />
      <SpiderGraph_ title="Max RR" />
      <SpiderGraph_ title="Profit" />
    </div>
  );
};

export default SpiderGraph;
