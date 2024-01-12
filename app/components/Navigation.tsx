"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  // get the current path to determine which link is active
  const pathname = usePathname();

  return (
    <div className="relative flex justify-between items-center w-2/5 dark:text-white text-zinc-800 font-bold tracking-[1px]">
      <Link
        href="/"
        className={`dark:hover:text-blue-300 hover:text-blue-500 ${
          pathname === "/" ? "font-semibold" : "dark:text-white"
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`dark:hover:text-pink-300 hover:text-pink-500 ${
          pathname === "/about" ? "font-semibold" : "dark:text-white"
        }`}
      >
        About
      </Link>
      <Link
        href="/blog"
        className={`dark:hover:text-yellow-400 hover:text-yellow-700 ${
          pathname === "/blog" ? "font-semibold" : "dark:text-white"
        }`}
      >
        Blog
      </Link>
    </div>
  );
};

export default Navigation;
