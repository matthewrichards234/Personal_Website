import ProjectCard from "./ProjectCard";

const ProjectCards = () => {
  return (
    <div className="flex flex-col gap-2">
      <ProjectCard
        images={["Img1", "img2", "img3"]}
        technologies={["HTML", "CSS", "JavaScript"]}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, maxime."
      />
      <ProjectCard
        images={["Img1", "img2", "img3"]}
        technologies={["HTML", "CSS", "JavaScript"]}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, maxime."
      />
      <ProjectCard
        images={["Img1", "img2", "img3"]}
        technologies={["HTML", "CSS", "JavaScript"]}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, maxime."
      />
    </div>
  );
};

export default ProjectCards;
