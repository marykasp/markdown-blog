import Link from "next/link";
import { FaYoutube, FaLinkedin, FaGithub, FaLaptop } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 p-4 sticky top-0 drop-shadow-xl z-10">
      {/* keep same width of article */}
      <div className="max-w-4xl mx-auto flex justify-between align-middle sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white no-underline hover:text-[#ACB8C0]"
          >
            MaryK.
          </Link>
        </h1>
        <div className="flex flex-row justify-center align-middle items-center sm:justify-evenly gap-4 text-white text-2xl lg:text-3xl">
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.youtube.com"
          >
            <FaYoutube />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.marykasparian.com"
          >
            <FaLaptop />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.github.com/marykasp"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
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
