import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen w-full font-manrope">
      <h1 className="text-5xl sm:text-7xl text-center p-10">Projects</h1>
      <h2 className="text-3xl sm:text-5xl/16 text-center text-gray-300 p-3">
        A brief tour of some of my favorite projects
      </h2>
      <div>
        <nav className="flex flex-col gap-5 p-3">
          <Link to="/projects/WTWR">WTWR</Link>
          <Link to="/projects/Spots">Spots</Link>
          <Link to="/projects/Mortgage-Amortization">
            Mortgage Amortization Table
          </Link>
          <Link to="/projects/Powerball-Generator">Powerball-Generator</Link>
          <Link to="/projects/Library-Landing">Library Landing Page</Link>
        </nav>
      </div>
    </div>
  );
};

export default Projects;
