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
    "Personal Website",
  ];
  return (
    <div className="bg-blue-900 text-white min-h-screen w-full font-manrope">
      <h1 className="text-5xl sm:text-7xl text-center pt-6">Projects</h1>
      <h2 className="text-3xl sm:text-5xl/16 text-center text-gray-300 p-3">
        A brief tour of some of my favorite projects
      </h2>
      <div>
        <nav className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-7 gap-5 p-3 items-center justify-center">
          {projectList.map((project) => {
            return (
              <Link to={`${project.replaceAll(" ", "-")}`}>
                <ProjectCard
                  title={project}
                  projectCardClassName="border hover:scale-105 ease-in-out duration-300 bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl p-2 size-67 sm:size-80 md:size-120 lg:w-150 lg:h-90"
                  titleClassName="text-2xl md:text-3xl pb-2 font-bold text-center text-black"
                  imageClassName="size-55 sm:size-60 md:size-70 lg:size-75 rounded-2xl shadow-2xl"
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
