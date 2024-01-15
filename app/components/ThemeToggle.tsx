"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // get theme from localstorage when component mounts
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      if (document.documentElement.classList.contains("light")) {
        document.documentElement.classList.remove("light");
      }

      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
      }
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-zinc-900 bg-blue-500 cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon size={18} className="text-white" />
      {/* toggle ball */}
      <div
        className="absolute bg-white dark:bg-blue-400 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <BsSunFill size={18} className="ml-auto text-yellow-400" />
    </div>
  );
};

export default ThemeToggle;
