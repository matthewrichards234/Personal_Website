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
        projectDescription="Spots – Social Media Web App — This responsive social media-inspired web application 
        was built using HTML and CSS to recreate a polished Figma design. Through this project, I strengthened my 
        understanding of semantic HTML, CSS Grid, Flexbox, responsive design, and the BEM methodology while learning 
        how to translate professional UI mockups into clean, maintainable code. It also reinforced the importance of 
        accessibility, mobile-first design, and building scalable front-end layouts before introducing JavaScript functionality."
        technologiesUsedList={["HTML", "CSS", "JavaScript"]}
        projectImages={projectImages}
        githubLink="https://github.com/matthewrichards234/se_project_spots"
      />
    </div>
  );
};

export default Spots;
