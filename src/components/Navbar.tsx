import hamburgerMenuIcon from "../assets/hamburger-menu-svgrepo-com.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="font-manrope
                  font-normal
                  text-[22px]
                  pt-2.5
                  h-14
                  sticky
                  top-0
                  bg-white
                  z-100"
    >
      {/* Mobile view */}
      <div className="block md:hidden">
        {" "}
        <nav
          className="flex 
                  flex-row
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
        </nav>
      </div>
      {/* Desktop view */}
      <div className="hidden md:block">
        <nav
          className="flex 
                  flex-row
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
