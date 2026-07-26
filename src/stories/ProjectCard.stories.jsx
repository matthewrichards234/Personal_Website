import ProjectCard from "../components/ProjectCard";
import imgTest from "../assets/luisa-brimble-VfHoMBagDPc-unsplash.jpg";

export default {
  title: "ProjectCard",
  component: ProjectCard,
};

const Template = (args) => <ProjectCard {...args} />;

export const ProjectCardWeb = Template.bind({});

ProjectCardWeb.args = {
  title: "WTWR",
  images: [imgTest, imgTest, imgTest],
  technologies: [
    "React",
    "JavaScript",
    "Mongoose",
    "Express",
    "Google VM Cloud Hosting",
    "Joi",
    "HTML / CSS",
  ],
  description:
    "WTWR is a full-stack weather application that provides personalized outfit recommendations based on real-time weather conditions in a user's city. Built with React, Redux, and React Router, the application delivers a responsive user experience through reusable components, custom hooks, and centralized state management. A Node.js and Express.js backend handles user authentication and securely manages user data, creating a seamless experience that combines dynamic weather information with personalized recommendations.",
  githubLink: "https://github.com/matthewrichards234/se_project_react",
};
