import { NavLink } from "react-router-dom";

interface HamburgerNavbarInterface {
  isOpen: boolean;
  handleNavlinkClick: () => void;
}

const HamburgerNavbar = ({
  isOpen,
  handleNavlinkClick,
}: HamburgerNavbarInterface) => {
  return (
    <div className={isOpen ? "visible" : "hidden"}>
      <nav
        className="flex 
                    flex-col 
                    bg-white
                    opacity-80 
                    h-full 
                    w-full 
                    gap-8 
                    items-center 
                    justify-center 
                    fixed  
                    inset-0
                    z-200
                    "
      >
        <NavLink to="/" onClick={handleNavlinkClick}>
          HOME
        </NavLink>
        <NavLink to="/about" onClick={handleNavlinkClick}>
          ABOUT
        </NavLink>
        <NavLink to="/projects" onClick={handleNavlinkClick}>
          PROJECTS
        </NavLink>
        <NavLink to="/resume" onClick={handleNavlinkClick}>
          RESUME
        </NavLink>
        <NavLink to="/contact" onClick={handleNavlinkClick}>
          CONTACT
        </NavLink>
      </nav>
    </div>
  );
};

export default HamburgerNavbar;
