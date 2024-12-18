import { Footer } from "./Components";
// import Footer from "./Components";
import { Outlet } from "react-router-dom";
import { SiteHeader } from "./Components/Navbar/Site-header";

function Layout() {
  return (
    <>
      {/* <NavBar /> */}
      <SiteHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
