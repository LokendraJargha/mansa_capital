"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownMenuClick = () => {
    setShowDropdownMenu((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      showDropdownMenu
    ) {
      setShowDropdownMenu(false);
    }
  };

  const handleLinkClick = () => {
    setShowDropdownMenu(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdownMenu]);

  return (
    <div className="flex items-center justify-between p-4 bg-[#174894] dark:bg-zinc-800 shadow-md relative">
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center bg-[#174894]">
          <img
            src="https://placehold.co/30x30"
            alt="TailAdmin Logo"
            className="mr-2"
          />
          <span className="text-xl text-white font-bold">Mansa Capital</span>
        </div>
        <div className="relative"></div>
      </div>
      <div className="flex items-center justify-end space-x-4">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={handleDropdownMenuClick}
          ref={dropdownRef}
        >
          <img
            src="https://placehold.co/40x40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-left">
            <div className="text-sm font-medium text-white">Thomas Anree</div>
            <div className="text-xs text-white">UX Designer</div>
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
      {showDropdownMenu && (
        <div
          ref={dropdownRef}
          className="absolute w-64 bg-white dark:bg-zinc-800 p-4 shadow-lg z-50 top-16 right-4"
        >
          <nav className="mt-4">
            <ul className="space-y-2">
              <li className="text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 p-2 rounded-lg">
                <Link
                  href="/user/settings"
                  className="flex flex-row"
                  onClick={handleLinkClick}
                >
                  <FaUser className="mr-2" />
                  <span>Profile</span>
                </Link>
              </li>

              <li className="text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 p-2 rounded-lg">
                <Link
                  href="/auth/login"
                  className="flex flex-row"
                  onClick={handleLinkClick}
                >
                  <FaSignOutAlt className="mr-2" />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
