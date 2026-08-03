import library_screenshot_1 from "../assets/library_screenshot_1.png";
import library_screenshot_2 from "../assets/library_screenshot_2.png";
import library_screenshot_3 from "../assets/library_screenshot_3.png";
import ProjectTemplate from "./ProjectTemplate";
const LibraryLanding = () => {
  const projectImages = [
    library_screenshot_1,
    library_screenshot_2,
    library_screenshot_3,
  ];
  return (
    <div>
      <ProjectTemplate
        projectTitle="Library Landing Page"
        projectDescription="Library Landing Page is..."
        technologiesUsedList={["HTML", "CSS"]}
        projectImages={projectImages}
        githubLink="https://github.com/matthewrichards234/se_project_coffeeshop-ft"
      />
    </div>
  );
};

export default LibraryLanding;
