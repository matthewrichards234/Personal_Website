interface ProjectTemplateI {
  projectTitle: string;
  projectDescription: string;
  technologiesUsedList: string[];
}

const ProjectTemplate = ({
  projectTitle,
  projectDescription,
  technologiesUsedList,
}: ProjectTemplateI) => {
  return (
    <div className="font-manrope">
      <p className="text-3xl text-center p-3">{projectTitle}</p>
      <p className="px-7 text-base">{projectDescription}</p>
      <ul className="flex justify-center w-full gap-4 flex-wrap">
        {technologiesUsedList.map((technology) => {
          return (
            <li className="text-blue-900 px-4 py-2 rounded-full bg-blue-100 text-lg hover:scale-110 ease-in-out duration-300">
              {technology}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectTemplate;
