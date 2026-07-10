import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="font-manrope
                  font-normal"
    >
      <nav
        className="flex 
                  flex-row
                  pt-3
                  h-12
                  "
      >
        <div className="pl-2">
          <NavLink to="/">LOGO</NavLink>
        </div>

        <div
          className="flex 
                        flex-row 
                        gap-2 
                        ml-auto 
                        mr-4"
        >
          <NavLink to="/about" className="hover:underline">
            ABOUT
          </NavLink>

          <NavLink to="/projects" className="hover:underline">
            PROJECTS
          </NavLink>

          <NavLink to="/resume" className="hover:underline">
            RESUME
          </NavLink>

          <NavLink to="/contact" className="hover:underline">
            CONTACT
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
