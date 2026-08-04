import wtwrImage from "../assets/wtwr_screenshot_1.png";
import spotsImage from "../assets/spots_screenshot_1.png";
import personalWebsiteImage from "../assets/Screenshot 2026-08-03 at 8.17.23 PM.png";
import amortizationTableImage from "../assets/f5412dc340319c20ffc8dd9cefa17a62279cd908.jpeg";
import libraryLandingImage from "../assets/library_screenshot_1.png";
import powerballImage from "../assets/14340550_2024StockPowerballimg.jpg";

import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projectList = [
    { name: "WTWR", image: wtwrImage },
    { name: "Spots", image: spotsImage },
    { name: "Library Landing Page", image: libraryLandingImage },
    { name: "Personal Website", image: personalWebsiteImage },
    { name: "Mortgage Amortization Table", image: amortizationTableImage },
    { name: "Powerball Generator", image: powerballImage },
  ];
  return (
    <div className="bg-blue-900 text-white min-h-screen w-full font-manrope pb-2 lg:pb-4">
      <h1 className="text-5xl sm:text-7xl text-center pt-6">Projects</h1>
      <h2 className="text-3xl sm:text-5xl/16 text-center text-gray-300 p-3">
        A brief tour of some of my favorite projects
      </h2>
      <h3 className="text-xl md:text-[26px] lg:text-3xl text-center text-gray-400 pb-1 px-2">
        Pick a project to open up more information on how I built it
      </h3>
      <div>
        <nav className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-7 gap-5 p-3 items-center justify-center lg:pt-15">
          {projectList.map((project) => {
            return (
              <Link to={`${project["name"].replaceAll(" ", "-")}`}>
                <ProjectCard
                  title={project["name"]}
                  projectCardClassName="border hover:scale-105 ease-in-out duration-300 bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl p-2 size-67 sm:size-80 md:size-120 lg:w-150 lg:h-110"
                  titleClassName="text-2xl md:text-3xl pb-2 font-bold text-center text-black"
                  imageClassName="size-55 sm:size-60 md:size-92 lg:h-80 lg:w-110 rounded-2xl shadow-2xl"
                  coverImage={project["image"]}
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
