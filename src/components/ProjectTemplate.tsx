interface ProjectTemplateI {
  projectTitle: string;
  technologiesUsedList: string[];
}

const ProjectTemplate = ({
  projectTitle,
  technologiesUsedList,
}: ProjectTemplateI) => {
  return (
    <div className="font-manrope">
      <p>{projectTitle}</p>
      <ul>
        {technologiesUsedList.map((technology) => {
          return <li className="">{technology}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProjectTemplate;
