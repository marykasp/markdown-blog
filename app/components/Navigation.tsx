"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  // get the current path to determine which link is active
  const pathname = usePathname();

  return (
    <ul className="flex justify-between items-center w-2/5 text-white">
      <li
        className={`hover:text-blue-300 hover:border-blue-300 p-2 ${
          pathname === "/" ? "border-b-2 border-blue-300" : "border-none"
        }`}
      >
        <Link
          href="/"
          className={`${pathname === "/" ? "font-semibold" : "text-white"}`}
        >
          Home
        </Link>
      </li>
      <li
        className={`hover:text-pink-400 p-2 ${
          pathname === "/about" ? "border-b-2 border-pink-400" : "border-none"
        }`}
      >
        <Link
          href="/about"
          className={`${
            pathname === "/about" ? "font-semibold" : "text-white"
          }`}
        >
          About
        </Link>
      </li>
      <li
        className={`p-2 ${
          pathname === "/blog" ? "border-b-2 border-lime-400" : "border-none"
        }`}
      >
        <Link
          href="/blog"
          className={`${pathname === "/blog" ? "font-semibold" : "text-white"}`}
        >
          Blog
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
