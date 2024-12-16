import { ModeToggle } from "./ModeToggle";
// import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="flex mb-8 mx-auto border-b border-gray-200 py-4 px-8 dark:border-gray-700 ">
      {/* <Link to="/">hello</Link> */}
      <ModeToggle />
    </div>
  );
}

export default NavBar;
