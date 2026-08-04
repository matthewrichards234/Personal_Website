import wtwr_screenshot_1 from "../assets/wtwr_screenshot_1.png";
import wtwr_screenshot_2 from "../assets/wtwr_screenshot_2.png";
import wtwr_screenshot_3 from "../assets/wtwr_screenshot_3.png";

import ProjectTemplate from "./ProjectTemplate";
const WTWR = () => {
  const projectImages = [
    wtwr_screenshot_1,
    wtwr_screenshot_2,
    wtwr_screenshot_3,
  ];
  return (
    <div>
      <ProjectTemplate
        projectTitle="WTWR"
        projectDescription="WTWR (What to Wear?) — This full-stack weather application recommends clothing based
         on real-time weather data retrieved from an external API. Developing this project gave me hands-on experience 
         building RESTful APIs, implementing user authentication and authorization, working with databases, and creating 
         secure back-end services using Node.js and Express. It also strengthened my understanding of client-server architecture, 
         CRUD operations, and integrating a React front end with a custom back end."
        technologiesUsedList={[
          "React",
          "JavaScript",
          "MongoDB",
          "Mongoose",
          "Joi",
          "Google VM",
        ]}
        projectImages={projectImages}
        githubLink="https://github.com/matthewrichards234/se_project_react"
      ></ProjectTemplate>
    </div>
  );
};

export default WTWR;
