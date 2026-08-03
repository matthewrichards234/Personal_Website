import ProjectTemplate from "./ProjectTemplate";
import screenshot1 from "../assets/website_screenshot_1.png";
import screenshot2 from "../assets/website_screenshot_2.png";
import screenshot3 from "../assets/website_screenshot_3.png";

const PersonalWebsite = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen w-full">
      <ProjectTemplate
        projectTitle="Personal Website"
        projectDescription="This is the project you're viewing right now! More than any of my previous projects, this one helped me grow as a front-end developer. Building reusable UI components with Storybook taught me how to design and test components in isolation, while creating an entire application with Tailwind made me much more confident using the framework. Working with TypeScript reinforced the importance of writing maintainable, type-safe code, and this project made me appreciate React's component-based architecture even more. Overall, it was one of the most enjoyable and rewarding projects I've built."
        technologiesUsedList={["React", "TypeScript", "Storybook", "Tailwind"]}
        projectImages={[screenshot1, screenshot2, screenshot3]}
        githubLink="https://github.com/matthewrichards234/Personal_Website"
      />
    </div>
  );
};

export default PersonalWebsite;
