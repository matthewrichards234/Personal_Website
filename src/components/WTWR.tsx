import ProjectTemplate from "./ProjectTemplate";
const WTWR = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen w-full">
      <ProjectTemplate
        projectTitle="WTWR"
        technologiesUsedList={[
          "React",
          "JavaScript",
          "MongoDB",
          "Mongoose",
          "Joi",
          "Google VM",
        ]}
      ></ProjectTemplate>
    </div>
  );
};

export default WTWR;
