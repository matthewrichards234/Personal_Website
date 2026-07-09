import ProjectCard from "./ProjectCard";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <div
      className="bg-indigo 
                    text-white
                    min-h-screen"
    >
      <h1
        className="text-8xl 
                      text-center
                      border 
                      h-screen 
                      w-screen"
      >
        PROJECTS
      </h1>
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
        [animation-range:entry_0%_cover_30%]"
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
