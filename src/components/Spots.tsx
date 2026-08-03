import ProjectTemplate from "./ProjectTemplate";
import spots_screenshot_1 from "../assets/spots_screenshot_1.png";
import spots_screenshot_2 from "../assets/spots_screenshot_2.png";
import spots_screenshot_3 from "../assets/spots_screenshot_3.png";
const Spots = () => {
  const projectImages = [
    spots_screenshot_1,
    spots_screenshot_2,
    spots_screenshot_3,
  ];
  return (
    <div>
      <ProjectTemplate
        projectTitle="Spots"
        projectDescription="Spots is..."
        technologiesUsedList={["HTML", "CSS", "JavaScript"]}
        projectImages={projectImages}
        githubLink="https://github.com/matthewrichards234/se_project_spots"
      />
    </div>
  );
};

export default Spots;
