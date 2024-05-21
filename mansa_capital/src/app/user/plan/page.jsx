"use client";
import { useState } from "react";
import Navbar from "@/components/ui/navbar";

import Strategy from "./strategy/page";
import Setup from "./setup/page";
import Backtest from "./backtest/page";

const Plan = () => {
  const [activeTab, setActiveTab] = useState("strategy");

  const renderContent = () => {
    switch (activeTab) {
      case "strategy":
        return <Strategy />;
      case "setup":
        return <Setup />;
      case "backtest":
        return <Backtest />;
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
          onClick={() => handleTabClick("strategy")}
          className={`p-2 ${
            activeTab === "strategy"
              ? "font-bold border-b-2 border-gray-800"
              : ""
          }`}
        >
          Strategy
        </button>
        <button
          onClick={() => handleTabClick("setup")}
          className={`p-2 ${
            activeTab === "setup" ? "font-bold border-b-2 border-gray-800" : ""
          }`}
        >
          Setup
        </button>
        <button
          onClick={() => handleTabClick("backtest")}
          className={`p-2 ${
            activeTab === "backtest"
              ? "font-bold border-b-2 border-gray-800"
              : ""
          }`}
        >
          Backtest
        </button>
      </div>
      <div className="p-4 bg-white border border-gray-300 mt-4">
        {renderContent()}
      </div>
    </>
  );
};

export default Plan;
