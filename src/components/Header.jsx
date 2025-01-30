import { useState } from "react";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggleClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-700 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-semibold text-gray-800 dark:text-white"
        >
          Jasvant Maddheshiya
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggleClick}
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          aria-controls="navbar-menu"
          aria-expanded={isNavbarOpen}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isNavbarOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isNavbarOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent dark:bg-gray-900 md:dark:bg-transparent shadow-md md:shadow-none md:flex md:items-center transition-all`}
          id="navbar-menu"
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 py-4 md:py-0">
            {["Home", "About", "Projects", "Contact Me"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="block px-6 py-3 text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
