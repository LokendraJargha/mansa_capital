"use client";
import { useState } from "react";
import Navbar from "@/components/ui/navbar";

const Plan = () => {
  const [activeTab, setActiveTab] = useState("Strategy");

  const renderContent = () => {
    switch (activeTab) {
      case "Strategy":
        return <p>Content for Strategy</p>;
      case "Setup":
        return <p>Content for Setup</p>;
      case "Backtest":
        return <p>Content for Backtest</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-around bg-gray-100 p-4 w-[50%] mx-auto">
        <button
          onClick={() => setActiveTab("Strategy")}
          className={`p-2 ${
            activeTab === "Strategy"
              ? "font-bold border-b-2 border-gray-800"
              : ""
          }`}
        >
          Strategy
        </button>
        <button
          onClick={() => setActiveTab("Setup")}
          className={`p-2 ${
            activeTab === "Setup" ? "font-bold border-b-2 border-gray-800" : ""
          }`}
        >
          Setup
        </button>
        <button
          onClick={() => setActiveTab("Backtest")}
          className={`p-2 ${
            activeTab === "Backtest"
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
