"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const getLinkClassName = (path) => {
    return pathname === path
      ? "bg-white text-gray-800 px-3 py-2 rounded font-bold"
      : "px-3 py-2 rounded";
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex justify-around">
        <li className="mx-4">
          <Link
            href="/user/review"
            className={getLinkClassName("/user/review")}
          >
            Review
          </Link>
        </li>
        <li className="mx-4">
          <Link href="/user/plan" className={getLinkClassName("/user/plan")}>
            Plan
          </Link>
        </li>
        <li className="mx-4">
          <Link
            href="/user/execute"
            className={getLinkClassName("/user/execute")}
          >
            Execute
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
