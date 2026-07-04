import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-row">
        <div>
          <NavLink to="/">LOGO</NavLink>
        </div>
        <div className="flex flex-row gap-2 pl-15">
          <NavLink to="/about" className="hover:underline">
            ABOUT
          </NavLink>
          <NavLink to="/projects" className="hover:underline">
            PROJECTS
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
