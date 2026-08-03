import { useState, useEffect } from "react";

interface ProjectTemplateI {
  projectTitle: string;
  projectDescription: string;
  technologiesUsedList: string[];
  projectImages: string[];
  githubLink: string;
}

const ProjectTemplate = ({
  projectTitle,
  projectDescription,
  technologiesUsedList,
  projectImages,
  githubLink,
}: ProjectTemplateI) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerDistance = 300;
      if (window.scrollY > triggerDistance) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-manrope bg-blue-900 text-white min-h-screen w-full">
      {/* Container stays mounted; visibility toggled via opacity and pointer-events */}
      <div
        className={`sticky top-16 z-50 flex justify-center transition-all duration-300 md:hidden ${
          isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => history.back()}
          className={`px-4 py-2 rounded-full bg-white text-black cursor-pointer shadow-md ${
            isVisible ? "animate-backButtonFadeIn" : ""
          }`}
        >
          ← back
        </button>
      </div>

      <p className="text-3xl text-center p-3">{projectTitle}</p>
      <p className="px-7 text-base/8 pb-1.5">{projectDescription}</p>
      <p className="text-3xl text-center pb-3">Technologies Used</p>
      <ul className="flex justify-center w-full gap-4 flex-wrap">
        {technologiesUsedList.map((technology, index) => (
          <li
            key={index}
            className="text-blue-900 px-4 py-2 rounded-full bg-blue-100 text-lg hover:scale-110 ease-in-out duration-300"
          >
            {technology}
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-2">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl active:translate-y-0"
        >
          View on GitHub →
        </a>
      </div>
      <ul className="flex flex-col justify-center items-center gap-5 mt-5 pb-5">
        {projectImages.map((projectImage, index) => (
          <li
            key={index}
            className="border rounded-2xl bg-white p-2 h-60 w-80 flex justify-center items-center shadow-2xl"
          >
            <img
              src={projectImage}
              alt="Project Image"
              className="h-50 w-70 rounded-2xl shadow-2xl"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectTemplate;
