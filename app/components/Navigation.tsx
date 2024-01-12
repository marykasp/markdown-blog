"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  // get the current path to determine which link is active
  const pathname = usePathname();

  return (
    <div className="relative flex justify-between items-center w-2/5 text-white font-bold tracking-[1px]">
      <Link
        href="/"
        className={`hover:text-blue-300 ${
          pathname === "/" ? "font-semibold" : "text-white"
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`hover:text-pink-400 ${
          pathname === "/about" ? "font-semibold" : "text-white"
        }`}
      >
        About
      </Link>
      <Link
        href="/blog"
        className={`hover:text-yellow-400 ${
          pathname === "/blog" ? "font-semibold" : "text-white"
        }`}
      >
        Blog
      </Link>
    </div>
  );
};

export default Navigation;
