import Link from "next/link";
import { FaYoutube, FaLinkedin, FaGithub, FaLaptop } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="dark:bg-zinc-800 bg-neutral-100 p-4 sticky top-0 drop-shadow-xl z-10">
      {/* keep same width of article */}
      <div className="md:px-6 max-w-4xl mx-auto flex justify-between align-middle sm:flex-row">
        <h1 className="text-3xl font-bold dark:text-white text-zinc-800 grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="dark:text-white text-zinc-800 no-underline hover:text-[#ACB8C0]"
          >
            Mary<span className="dark:text-blue-300 text-blue-500">K.</span>
          </Link>
        </h1>
        <div className="flex flex-row justify-center align-middle items-center sm:justify-evenly gap-4 dark:text-white text-zinc-800 text-md lg:text-xl">
          <Link
            className="dark:text-white/90 dark:hover:text-white hover:text-blue-500"
            href="https://www.youtube.com"
          >
            <FaYoutube />
          </Link>
          <Link
            className="dark:text-white/90 dark:hover:text-white hover:text-blue-500"
            href="https://www.marykasparian.com"
          >
            <FaLaptop />
          </Link>
          <Link
            className="dark:text-white/90 dark:hover:text-white hover:text-blue-500"
            href="https://www.github.com/marykasp"
          >
            <FaGithub />
          </Link>
          <Link
            className="dark:text-white/90 dark:hover:text-white hover:text-blue-500"
            href="https://www.linkedin.com/mary-kasparian"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
