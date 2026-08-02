interface ProjectTemplateI {
  projectTitle: string;
  projectDescription: string;
  technologiesUsedList: string[];
  projectImages: string[];
}

const ProjectTemplate = ({
  projectTitle,
  projectDescription,
  technologiesUsedList,
  projectImages,
}: ProjectTemplateI) => {
  return (
    <div className="font-manrope">
      <div className="visible md:hidden sticky top-16 flex justify-center">
        <button
          onClick={() => {
            history.back();
          }}
          className="px-4 py-2 rounded-full bg-white text-black cursor-pointer"
        >
          &#8592; back
        </button>
      </div>
      <p className="text-3xl text-center p-3">{projectTitle}</p>
      <p className="px-7 text-base pb-1.5">{projectDescription}</p>
      <p className="text-3xl text-center pb-3">Technologies Used</p>
      <ul className="flex justify-center w-full gap-4 flex-wrap">
        {technologiesUsedList.map((technology) => {
          return (
            <li className="text-blue-900 px-4 py-2 rounded-full bg-blue-100 text-lg hover:scale-110 ease-in-out duration-300">
              {technology}
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col justify-center items-center gap-5 mt-5 pb-5">
        {projectImages.map((projectImage) => {
          return (
            <li className="border rounded-2xl bg-white padding-2 size-80 flex justify-center items-center shadow-2xl">
              <img
                src={projectImage}
                alt="Project Image"
                className="size-70 rounded-2xl shadow-2xl"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectTemplate;
