import hamburgerMenuIcon from "../assets/hamburger-menu-svgrepo-com.svg";
import HamburgerNavbar from "./HamburgerNavbar";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [sideNavbar, setSideNavbar] = useState(true);
  function handleOpenSideNavbar() {
    setSideNavbar(true);
  }
  function handleCloseSideNavbar() {
    setSideNavbar(false);
  }
  return (
    <div
      className="font-manrope
                  font-normal
                  text-[22px]
                  h-14
                  sticky
                  top-0
                  bg-white
                  z-100"
    >
      <HamburgerNavbar isOpen={sideNavbar} />
      {/* Mobile view */}
      <div className="block md:hidden">
        <nav
          className="flex 
                    flex-row
                    justify-between
                    items-center
                  "
        >
          <NavLink to="/">
            <p
              className="
                        font-bold 
                        text-[24px]
                        ml-2
                        "
            >
              MR
            </p>
          </NavLink>
          <button className="mr-2" onClick={handleOpenSideNavbar}>
            <img
              src={hamburgerMenuIcon}
              alt="hamburger icon"
              className="size-14"
            />
          </button>
        </nav>
      </div>
      {/* Desktop view */}
      <div className="hidden md:block">
        <nav
          className="flex 
                  flex-row
                  pt-2.5
                  "
        >
          <div className="pl-2">
            <NavLink to="/">
              <p
                className="font-bold 
              text-[24px]
              transform
              transition-transform
              duration-400
              ease-in-out
              hover:scale-130"
              >
                MR
              </p>
            </NavLink>
          </div>

          <div
            className="flex 
                        flex-row 
                        gap-5 
                        ml-auto 
                        mr-4"
          >
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 hover:underline"
                  : "text-black hover:underline"
              }
            >
              ABOUT
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 hover:underline"
                  : "text-black hover:underline"
              }
            >
              PROJECTS
            </NavLink>

            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 hover:underline"
                  : "text-black hover:underline"
              }
            >
              RESUME
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 hover:underline"
                  : "text-black hover:underline"
              }
            >
              CONTACT
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
