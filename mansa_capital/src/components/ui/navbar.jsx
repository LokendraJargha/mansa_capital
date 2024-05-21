// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex justify-around">
        <li className="mx-4">
          <Link href="/user/review">Review</Link>
        </li>
        <li className="mx-4">
          <Link href="/user/plan">Plan</Link>
        </li>
        <li className="mx-4">
          <Link href="/user/execute">Execute</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
