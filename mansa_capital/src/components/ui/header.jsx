"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import DropdownMenu from "./dropdownButton";

const Header = () => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownMenuClick = () => {
    setShowDropdownMenu((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdownMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800 shadow-md">
      <div className="flex items-center space-x-4">
        <div className="relative">
          {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-zinc-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </span> */}
          {/* <input
            type="text"
            placeholder="Type to search..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-white"
          /> */}
        </div>
      </div>
      <div className="flex items-center justify-end space-x-4">
        {/* <button className="relative p-2 bg-zinc-100 rounded-full dark:bg-zinc-700">
          <svg
            className="w-6 h-6 text-zinc-500 dark:text-zinc-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12l4-4m0 0l-4-4m4 4H4" />
          </svg>
        </button>
        <button className="relative p-2 bg-zinc-100 rounded-full dark:bg-zinc-700">
          <svg
            className="w-6 h-6 text-zinc-500 dark:text-zinc-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12l4-4m0 0l-4-4m4 4H4" />
          </svg>
          <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full ring-2 ring-white dark:ring-zinc-800"></span>
        </button>
        <button className="relative p-2 bg-zinc-100 rounded-full dark:bg-zinc-700">
          <svg
            className="w-6 h-6 text-zinc-500 dark:text-zinc-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12l4-4m0 0l-4-4m4 4H4" />
          </svg>
          <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full ring-2 ring-white dark:ring-zinc-800"></span>
        </button> */}
        {/* Dropdown Button Opener */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleDropdownMenuClick()}
          ref={dropdownRef}
        >
          <img
            src="https://placehold.co/40x40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-left">
            <div className="text-sm font-medium text-zinc-900 dark:text-white">
              Thomas Anree
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              UX Designer
            </div>
          </div>
          <svg
            className="w-5 h-5 text-zinc-500 dark:text-zinc-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {showDropdownMenu && <DropdownMenu />}
    </div>
  );
};

export default Header;
