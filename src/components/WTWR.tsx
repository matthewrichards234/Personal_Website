import ProjectTemplate from "./ProjectTemplate";
const WTWR = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen w-full">
      <ProjectTemplate
        projectTitle="WTWR"
        projectDescription="WTWR is a full stack web app that suggest outfits based on real time weather updates in your area. 
        Clothing items are generated"
        technologiesUsedList={[
          "React",
          "JavaScript",
          "MongoDB",
          "Mongoose",
          "Joi",
          "Google VM",
        ]}
        projectImages={[]}
      ></ProjectTemplate>
    </div>
  );
};

export default WTWR;
