import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen w-full font-manrope">
      <h1 className="text-5xl sm:text-7xl text-center p-10">Projects</h1>
      <h2 className="text-3xl sm:text-5xl/16 text-center text-gray-300 p-3">
        A brief tour of some of my favorite projects
      </h2>
      <div>
        <nav>
          <Link to="WTWR">WTWR</Link>
          <Link to="Spots">Spots</Link>
          <Link to="Mortgage-Amortization">Mortgage Amortization Table</Link>
          <Link to="Powerball-Generator">Powerball-Generator</Link>
          <Link to="Library-Landing">Library Landing Page</Link>
        </nav>
      </div>
    </div>
  );
};

export default Projects;
