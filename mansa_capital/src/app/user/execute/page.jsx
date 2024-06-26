"use client";
import { useState } from "react";

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
    <div className="flex m-3 px-3 py-6 rounded-lg  bg-white">
      <div className="flex flex-col w-[100%]">
        {/* <div className="flex justify-around bg-gray-100 p-4 mx-auto w-[50%]">
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
              activeTab === "ideas"
                ? "font-bold border-b-2 border-gray-800"
                : ""
            }`}
          >
            Ideas
          </button>
          <button
            onClick={() => handleTabClick("trades")}
            className={`p-2 ${
              activeTab === "trades"
                ? "font-bold border-b-2 border-gray-800"
                : ""
            }`}
          >
            Trades
          </button>
        </div> */}
        <div className="p-4 bg-white border border-gray-300 mt-4 w-100%">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Execute;
