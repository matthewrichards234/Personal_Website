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
        projectImages={projectImages}
        githubLink="https://github.com/matthewrichards234/se_project_react"
      ></ProjectTemplate>
    </div>
  );
};

export default WTWR;
