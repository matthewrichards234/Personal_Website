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
        projectDescription="Library Landing Page — This responsive single-page website was built with HTML and CSS to 
        recreate a professional café landing page from a design specification. The project helped me develop a strong 
        foundation in semantic HTML, Flexbox, CSS positioning, BEM methodology, forms, and animations while reinforcing 
        the importance of writing clean, maintainable front-end code. It also introduced me to translating UI mockups 
        into fully functional web pages and sparked my interest in creating polished, user-friendly interfaces."
        technologiesUsedList={["HTML", "CSS"]}
        projectImages={projectImages}
        githubLink="https://github.com/matthewrichards234/se_project_coffeeshop-ft"
      />
    </div>
  );
};

export default LibraryLanding;
