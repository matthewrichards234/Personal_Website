import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="font-manrope
                  font-normal
                  text-[22px]"
    >
      <nav
        className="flex 
                  flex-row
                  pt-2.5
                  h-12
                  "
      >
        <div className="pl-2">
          <NavLink to="/">
            <p
              className="font-bold 
              text-[24px]
              transform
              transition-transform
              duration-300
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
