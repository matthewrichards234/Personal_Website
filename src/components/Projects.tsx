import imgTest from "../assets/luisa-brimble-VfHoMBagDPc-unsplash.jpg";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projectList = [
    "WTWR",
    "Spots",
    "Amortization Table",
    "Powerball Generator",
    "Library Landing Page",
  ];
  return (
    <div className="bg-blue-900 text-white min-h-screen w-full font-manrope">
      <h1 className="text-5xl sm:text-7xl text-center pt-6">Projects</h1>
      <h2 className="text-3xl sm:text-5xl/16 text-center text-gray-300 p-3">
        A brief tour of some of my favorite projects
      </h2>
      <div>
        <nav className="flex flex-col gap-5 p-3 items-center">
          {projectList.map((project) => {
            return (
              <Link to={`projects/${project}`}>
                <ProjectCard
                  title={project}
                  projectCardClassName="border bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl p-2 size-67"
                  titleClassName="text-2xl font-bold text-center text-black"
                  imageClassName="size-55 rounded-2xl shadow-2xl"
                  coverImage={imgTest}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Projects;
