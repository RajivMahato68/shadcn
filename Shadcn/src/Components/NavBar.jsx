import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { ThemeProvider } from "./ThemeProvider";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu when a nav link is clicked
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap items-center justify-between  mx-auto py-2 px-8 max-w-screen-xl">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link to="/" className="text-xl font-bold">
            Brand
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block lg:hidden p-2"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        <div
          ref={navRef}
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4 lg:mt-0">
            <li>
              <Link
                to="/"
                className="hover:text-gray-700 dark:hover:text-gray-300"
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-700 dark:hover:text-gray-300"
                onClick={handleNavLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contract"
                className="hover:text-gray-700 dark:hover:text-gray-300"
                onClick={handleNavLinkClick}
              >
                Contract
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-gray-700 dark:hover:text-gray-300"
                onClick={handleNavLinkClick}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="hover:text-gray-700 dark:hover:text-gray-300"
                onClick={handleNavLinkClick}
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="mt-4 lg:mt-0 lg:ml-4">
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <ModeToggle />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
