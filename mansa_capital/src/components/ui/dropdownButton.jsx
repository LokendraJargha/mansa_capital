import React from "react";
import {
  FaHome,
  FaQuestionCircle,
  FaBell,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaChevronRight,
} from "react-icons/fa";

const DropdownMenu = () => {
  return (
    <div className="absolute w-64 bg-white dark:bg-zinc-800 p-4 shadow-lg z-50 top-16 right-4">
      <div className="flex items-center space-x-4 p-2">
        {/* <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
          S
        </div> */}
        <img
          src="https://placehold.co/40x40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <h4 className="text-base font-semibold text-zinc-700 dark:text-zinc-100">
            Thomas Anree
          </h4>
        </div>
        <div className="text-zinc-400">{/* <FaChevronRight /> */}</div>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          {/* <li className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 p-2 rounded-lg">
            <FaHome />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 p-2 rounded-lg">
            <FaQuestionCircle />
            <span>Help Center</span>
          </li>
          <li className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 p-2 rounded-lg">
            <FaBell />
            <span>Notifications</span>
          </li> */}
          <li className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 p-2 rounded-lg">
            <FaUser />
            <span>Profile</span>
          </li>
          <li className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 p-2 rounded-lg">
            <FaCog />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 p-2 rounded-lg">
            <FaSignOutAlt />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DropdownMenu;
