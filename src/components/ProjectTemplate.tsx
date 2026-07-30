interface ProjectTemplateI {
  projectTitle: string;
}

const ProjectTemplate = ({ projectTitle }: ProjectTemplateI) => {
  return (
    <div className="font-manrope">
      <p>{projectTitle}</p>
    </div>
  );
};

export default ProjectTemplate;
