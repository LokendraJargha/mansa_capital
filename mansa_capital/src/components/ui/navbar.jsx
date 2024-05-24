// "use client";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";

// const Sidebar = () => {
//   const pathname = usePathname();
//   const router = useRouter();

//   const isActive = (path) => pathname === path;

//   const getLinkClassName = (path) => {
//     return isActive(path) ? "text-gray-800 px-3 py-2 font-bold" : "px-3 py-2";
//   };

//   const getLiClassName = (path) => {
//     return isActive(path)
//       ? "bg-white mb-4 p-2 cursor-pointer"
//       : "mb-4 p-2 cursor-pointer";
//   };

//   const handleClick = (path) => {
//     router.push(path);
//   };

//   return (
//     <nav className="bg-gray-800 h-screen text-white w-64">
//       <ul className="flex flex-col">
//         <li
//           className={getLiClassName("/user/review")}
//           onClick={() => handleClick("/user/review")}
//         >
//           <Link
//             href="/user/review"
//             className={getLinkClassName("/user/review")}
//           >
//             Review
//           </Link>
//         </li>
//         <li
//           className={getLiClassName("/user/plan")}
//           onClick={() => handleClick("/user/plan")}
//         >
//           <Link href="/user/plan" className={getLinkClassName("/user/plan")}>
//             Plan
//           </Link>
//         </li>
//         <li
//           className={getLiClassName("/user/execute")}
//           onClick={() => handleClick("/user/execute")}
//         >
//           <Link
//             href="/user/execute"
//             className={getLinkClassName("/user/execute")}
//           >
//             Execute
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Sidebar;

"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ setActiveTab }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path) => pathname === path || pathname.startsWith(path);

  const getLinkClassName = (path) => {
    return isActive(path) ? "text-gray-800 px-3 py-2 font-bold" : "px-3 py-2";
  };

  const getLiClassName = (path) => {
    return isActive(path)
      ? "bg-gray-300 mb-2 p-2 cursor-pointer rounded text-white"
      : "mb-2 p-2 cursor-pointer rounded text-white";
  };

  const handleClick = (path, tabName) => {
    setActiveTab(tabName);
    router.push(path);
  };

  return (
    <nav className="bg-gray-800 h-screen text-white w-64">
      <ul className="flex flex-col">
        <li
          className={`mb-4 p-2 cursor-pointer rounded ${
            isActive("/user/review") ? "bg-white text-black" : ""
          }`}
          onClick={() => handleClick("/user/review", "review")}
        >
          <Link
            href="/user/review"
            className={getLinkClassName("/user/review")}
          >
            Review
          </Link>
        </li>
        <li>
          <span
            className={`mb-4 p-2 cursor-pointer rounded px-3 ${
              isActive("/user/plan") ? "bg-white text-black" : ""
            }`}
            onClick={() => handleClick("/user/plan/strategy", "strategy")}
          >
            Plan
          </span>
          <ul className="ml-4">
            <li
              className={getLiClassName("/user/plan/strategy")}
              onClick={() => handleClick("/user/plan/strategy", "strategy")}
            >
              <Link
                href="/user/plan/strategy"
                className={getLinkClassName("/user/plan/strategy")}
              >
                Strategy
              </Link>
            </li>
            <li
              className={getLiClassName("/user/plan/setup")}
              onClick={() => handleClick("/user/plan/setup", "setup")}
            >
              <Link
                href="/user/plan/setup"
                className={getLinkClassName("/user/plan/setup")}
              >
                Setup
              </Link>
            </li>
            <li
              className={getLiClassName("/user/plan/backtest")}
              onClick={() => handleClick("/user/plan/backtest", "backtest")}
            >
              <Link
                href="/user/plan/backtest"
                className={getLinkClassName("/user/plan/backtest")}
              >
                Backtest
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <span
            className={`mb-4 p-2 cursor-pointer rounded px-3 ${
              isActive("/user/plan") ? "bg-white text-black" : ""
            }`}
            onClick={() => handleClick("/user/execute/", "analysis")}
          >
            Execute
          </span>
          <ul className="ml-4">
            <li
              className={getLiClassName("/user/execute/analysis")}
              onClick={() => handleClick("/user/execute/analysis", "analysis")}
            >
              <Link
                href="/user/execute/analysis"
                className={getLinkClassName("/user/execute/analysis")}
              >
                Analysis
              </Link>
            </li>
            <li
              className={getLiClassName("/user/execute/ideas")}
              onClick={() => handleClick("/user/execute/ideas", "ideas")}
            >
              <Link
                href="/user/execute/ideas"
                className={getLinkClassName("/user/execute/ideas")}
              >
                Ideas
              </Link>
            </li>
            <li
              className={getLiClassName("/user/execute/trades")}
              onClick={() => handleClick("/user/execute/trades", "trades")}
            >
              <Link
                href="/user/execute/trades"
                className={getLinkClassName("/user/execute/trades")}
              >
                Trades
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
