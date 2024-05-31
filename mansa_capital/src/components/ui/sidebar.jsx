"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { GrPlan } from "react-icons/gr";
import { LuListTodo } from "react-icons/lu";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const router = useRouter();

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
    setActiveSubmenu(null);
  };

  const handleSubmenuClick = (submenu) => {
    setActiveSubmenu(submenu);
    switch (submenu) {
      // Plan sub-routes
      case "Strategy":
        router.push("/user/plan/strategy");
        break;
      case "Setup":
        router.push("/user/plan/setup");
        break;
      case "Backtest":
        router.push("/user/plan/backtest");
        break;
      // Review sub-routes
      case "Results":
        router.push("/user/review/results");
        break;
      case "Reviews":
        router.push("/user/review/reviews");
        break;
      case "Actions":
        router.push("/user/review/actions");
        break;
      //   Execute sub-routes
      case "Analysis":
        router.push("/user/execute/analysis");
        break;
      case "Ideas":
        router.push("/user/execute/ideas");
        break;
      case "Trades":
        router.push("/user/execute/trades");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col bg-white fixed w-1/5 h-screen bg-white-900 text-white">
      <div className="flex-1 overflow-y-auto">
        <nav className="mt-4">
          <ul className="mt-2 mx-2 flex text-black  flex-col gap-2 ">
            <li className="flex flex-col">
              <div
                className={`flex items-center rounded-lg justify-between p-4 cursor-pointer ${
                  activeMenu === "Review" ? "bg-[#174894] text-white" : ""
                }`}
                onClick={() => handleMenuClick("Review")}
              >
                <div className="flex items-center">
                  <FaMagnifyingGlassChart className="mr-2" />
                  <span>Review</span>
                </div>
                <IoIosArrowDown />
              </div>
              {activeMenu === "Review" && (
                <ul className="ml-4 mt-2 flex flex-col gap-1">
                  <li
                    className={`p-3 rounded-lg cursor-pointer ${
                      activeSubmenu === "Results"
                        ? "text-white bg-[#174894]"
                        : "text-black"
                    }`}
                    onClick={() => handleSubmenuClick("Results")}
                  >
                    Results
                  </li>
                  <li
                    className={`p-3 rounded-lg cursor-pointer  ${
                      activeSubmenu === "Reviews"
                        ? "text-white bg-[#174894]"
                        : "text-black"
                    }`}
                    onClick={() => handleSubmenuClick("Reviews")}
                  >
                    Reviews
                  </li>
                  <li
                    className={`p-3 rounded-lg cursor-pointer ${
                      activeSubmenu === "Actions"
                        ? "text-white bg-[#174894]"
                        : "text-black"
                    }`}
                    onClick={() => handleSubmenuClick("Actions")}
                  >
                    Actions
                  </li>
                </ul>
              )}
            </li>
            <li className="flex flex-col">
              <div
                className={`flex items-center justify-between rounded-lg p-4 cursor-pointer ${
                  activeMenu === "Plan" ? "bg-[#174894] text-white" : ""
                }`}
                onClick={() => handleMenuClick("Plan")}
              >
                <div className="flex items-center">
                  <GrPlan className="mr-2" />
                  <span>Plan</span>
                </div>
                <IoIosArrowDown />
              </div>
              {activeMenu === "Plan" && (
                <ul className="ml-4 mt-2 flex flex-col gap-1">
                  <li
                    className={`p-3 rounded-lg cursor-pointer ${
                      activeSubmenu === "Strategy"
                        ? "text-white bg-[#174894]"
                        : "text-black"
                    }`}
                    onClick={() => handleSubmenuClick("Strategy")}
                  >
                    Strategy
                  </li>
                  <li
                    className={`p-3 rounded-lg cursor-pointer ${
                      activeSubmenu === "Setup"
                        ? "text-white bg-[#174894]"
                        : "text-black"
                    }`}
                    onClick={() => handleSubmenuClick("Setup")}
                  >
                    Setup
                  </li>
                  <li
                    className={`p-3 rounded-lg cursor-pointer ${
                      activeSubmenu === "Backtest"
                        ? "text-white bg-[#174894]"
                        : "text-black"
                    }`}
                    onClick={() => handleSubmenuClick("Backtest")}
                  >
                    Backtest
                  </li>
                </ul>
              )}
            </li>
            <li className="flex flex-col">
              <div
                className={`flex items-center justify-between rounded-lg p-4 cursor-pointer ${
                  activeMenu === "Execute" ? "bg-[#174894] text-white" : ""
                }`}
                onClick={() => handleMenuClick("Execute")}
              >
                <div className="flex items-center">
                  <LuListTodo className="mr-2" />
                  <span>Execute</span>
                </div>
                <IoIosArrowDown />
              </div>
              {activeMenu === "Execute" && (
                <ul className="ml-4 mt-2 flex flex-col gap-1">
                  <li
                    className={`p-3 rounded-lg cursor-pointer ${
                      activeSubmenu === "Analysis"
                        ? "text-white bg-[#174894]"
                        : "text-black"
                    }`}
                    onClick={() => handleSubmenuClick("Analysis")}
                  >
                    Analysis
                  </li>
                  <li
                    className={`p-3 rounded-lg cursor-pointer ${
                      activeSubmenu === "Ideas"
                        ? "text-white bg-[#174894]"
                        : "text-black"
                    }`}
                    onClick={() => handleSubmenuClick("Ideas")}
                  >
                    Ideas
                  </li>
                  <li
                    className={`p-3 rounded-lg cursor-pointer ${
                      activeSubmenu === "Trades"
                        ? "text-white bg-[#174894]"
                        : "text-black"
                    }`}
                    onClick={() => handleSubmenuClick("Trades")}
                  >
                    Trades
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
