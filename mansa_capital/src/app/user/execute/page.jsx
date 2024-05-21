"use client";
import { useState } from "react";
import Navbar from "@/components/ui/navbar";

import Analysis from "./analysis/page";
import Ideas from "./ideas/page";
import Trades from "./trades/page";

const Execute = () => {
  const [activeTab, setActiveTab] = useState("analysis");

  const renderContent = () => {
    switch (activeTab) {
      case "analysis":
        return <Analysis />;
      case "ideas":
        return <Ideas />;
      case "trades":
        return <Trades />;
      default:
        return null;
    }
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-around bg-gray-100 p-4 mx-auto w-[50%]">
        <button
          onClick={() => handleTabClick("analysis")}
          className={`p-2 ${
            activeTab === "analysis"
              ? "font-bold border-b-2 border-gray-800"
              : ""
          }`}
        >
          Analysis
        </button>
        <button
          onClick={() => handleTabClick("ideas")}
          className={`p-2 ${
            activeTab === "ideas" ? "font-bold border-b-2 border-gray-800" : ""
          }`}
        >
          Ideas
        </button>
        <button
          onClick={() => handleTabClick("trades")}
          className={`p-2 ${
            activeTab === "trades" ? "font-bold border-b-2 border-gray-800" : ""
          }`}
        >
          Trades
        </button>
      </div>
      <div className="p-4 bg-white border border-gray-300 mt-4">
        {renderContent()}
      </div>
    </>
  );
};

export default Execute;
