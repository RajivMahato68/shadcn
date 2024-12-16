import { ModeToggle } from "./ModeToggle";
function NavBar() {
  return (
    <div className="flex mb-8 mx-auto border-b border-gray-200 py-4 px-8 dark:border-gray-700 ">
      <ModeToggle />
    </div>
  );
}

export default NavBar;
