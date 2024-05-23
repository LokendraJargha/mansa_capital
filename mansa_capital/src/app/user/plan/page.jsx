// "use client";
// import { useState } from "react";
// import Navbar from "@/components/ui/navbar";

// import Strategy from "./strategy/page";
// import Setup from "./setup/page";
// import Backtest from "./backtest/page";

// const Plan = () => {
//   const [activeTab, setActiveTab] = useState("strategy");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "strategy":
//         return <Strategy />;
//       case "setup":
//         return <Setup />;
//       case "backtest":
//         return <Backtest />;
//       default:
//         return null;
//     }
//   };

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//   };

//   return (
//     <div className="flex">
//       <Navbar />
//       <div className="flex flex-col w-[100%]">
//         <div className="p-4 bg-white border border-gray-300 mt-4">
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Plan;

"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/components/ui/navbar";

import Strategy from "./strategy/page";
import Setup from "./setup/page";
import Backtest from "./backtest/page";

const Plan = () => {
  const [activeTab, setActiveTab] = useState("strategy");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const path = pathname.split("/").pop();
    if (path === "plan") {
      setActiveTab("strategy");
      router.push("/user/plan/strategy");
    } else {
      setActiveTab(path);
    }
  }, [pathname, router]);

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

  return (
    <div className="flex">
      {/* <Navbar setActiveTab={setActiveTab} /> */}
      <div className="flex flex-col w-[100%]">
        <div className="p-4 bg-white border border-gray-300 mt-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Plan;
