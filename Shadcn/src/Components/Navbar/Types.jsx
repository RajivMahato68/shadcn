// import { Icons } from "@/components/icons";

// You can now just use plain JavaScript objects
const NavItem = {
  title: "",
  href: "",
  disabled: false,
  external: false,
  icon: "", // 'icon' can be one of the keys of Icons object
  label: "",
};

const NavItemWithChildren = {
  ...NavItem,
  items: [], // items will be an array of NavItemWithChildren objects
};

const MainNavItem = {
  ...NavItem,
};

const SidebarNavItem = {
  ...NavItemWithChildren,
};

export { NavItem, NavItemWithChildren, MainNavItem, SidebarNavItem };
