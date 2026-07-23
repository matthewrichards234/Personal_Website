import { NavLink } from "react-router-dom";

interface HamburgerNavbarInterface {
  isOpen: boolean;
}

const HamburgerNavbar = ({ isOpen }: HamburgerNavbarInterface) => {
  return (
    <div className={isOpen ? "visible" : "hidden"}>
      <nav className="flex flex-col bg-white h-full">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/resume">RESUME</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </nav>
    </div>
  );
};

export default HamburgerNavbar;
