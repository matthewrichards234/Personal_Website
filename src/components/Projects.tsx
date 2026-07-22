import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="bg-blue-900
                    text-white
                    min-h-screen
                    font-manrope"
    >
      <h1
        className="text-8xl 
                      text-center
                      p-10
                      "
      >
        Projects
      </h1>
      <h2 className="text-3xl text-center text-gray-300 p-3">
        A brief tour of some of my favorite projects
      </h2>
      <div
        className="flex 
        flex-col 
        flex-wrap 
        gap-4 
        border
        mt-3
        items-center 
        animate-scrollAppear
        [animation-timeline:view()] 
        [animation-range:entry_0%_cover_40%]"
      >
        <ProjectCard
          title="WTWR"
          images={["Img1", "img2", "img3"]}
          technologies={["HTML", "CSS", "JavaScript"]}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, maxime."
        />
      </div>

      <div
        className="flex 
        flex-col 
        flex-wrap 
        gap-4 
        border
        mt-3
        items-center 
        animate-scrollAppear 
        [animation-timeline:view()] 
        [animation-range:entry_0%_cover_20%]"
      >
        <ProjectCard
          images={["Img1", "img2", "img3"]}
          technologies={["HTML", "CSS", "JavaScript"]}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, maxime."
        />
      </div>

      <div
        className="flex 
        flex-col 
        flex-wrap 
        gap-4 
        border
        mt-3
        items-center 
        animate-scrollAppear 
        [animation-timeline:view()] 
        [animation-range:entry_0%_cover_20%]"
      >
        <ProjectCard
          images={["Img1", "img2", "img3"]}
          technologies={["HTML", "CSS", "JavaScript"]}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, maxime."
        />
      </div>
    </div>
  );
};

export default Projects;
