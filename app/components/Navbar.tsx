import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 p-4 sticky top-0 drop-shadow-xl z-10">
      {/* keep same width of article */}
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link href="/" className="text-white no-underline hover:text-sky-500">
            MaryK.
          </Link>
        </h1>
        {/* social icons */}
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
