import { ModeToggle } from "./ModeToggle";
// import { ThemeProvider } from "./Components/ThemeProvider";
import { ThemeProvider } from "./ThemeProvider";

import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="flex mb-8 mx-auto border-b border-gray-200 py-4 px-8 dark:border-gray-700 gap-4">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contract">Contract</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle />
      </ThemeProvider>
    </div>
  );
}

export default NavBar;
