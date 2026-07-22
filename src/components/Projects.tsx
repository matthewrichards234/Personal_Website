// Test images
import imgTest from "/Users/matthewrichards/Desktop/Projects/Active/Personal_Website/src/assets/luisa-brimble-VfHoMBagDPc-unsplash.jpg";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="bg-blue-900
                    text-white
                    min-h-screen
                    font-manrope"
    >
      <h1
        className="text-8xl 
                      text-center
                      p-10
                      "
      >
        Projects
      </h1>
      <h2 className="text-3xl text-center text-gray-300 p-3">
        A brief tour of some of my favorite projects
      </h2>
      <div
        className="flex 
        flex-col 
        flex-wrap 
        gap-4 
        mt-3
        items-center 
        animate-scrollAppear
        [animation-timeline:view()] 
        [animation-range:entry_0%_cover_40%]"
      >
        <ProjectCard
          title="WTWR"
          images={[imgTest, imgTest, imgTest]}
          technologies={[
            "React",
            "JavaScript",
            "Mongoose",
            "Express",
            "Google VM Cloud Hosting",
            "Joi",
            "HTML / CSS",
          ]}
          description="WTWR is a full-stack weather application that provides personalized outfit recommendations based on real-time weather conditions in a user's city. Built with React, Redux, and React Router, the application delivers a responsive user experience through reusable components, custom hooks, and centralized state management. A Node.js and Express.js backend handles user authentication and securely manages user data, creating a seamless experience that combines dynamic weather information with personalized recommendations."
        />
      </div>

      <div
        className="flex 
                      flex-col 
                      flex-wrap 
                      gap-4 
                      border
                      mt-3
                      items-center 
                      animate-scrollAppear 
                      [animation-timeline:view()] 
                      [animation-range:entry_0%_cover_20%]"
      >
        <ProjectCard
          title="Spots"
          images={[imgTest, imgTest, imgTest]}
          technologies={["HTML / CSS", "JavaScript"]}
          description="Spots is a responsive social media application designed for students and young professionals to share posts, like content, and interact in real time. Built with HTML, CSS, JavaScript, Webpack, and npm, the application integrates RESTful API requests (GET, POST, PUT, and DELETE) to manage user data and content seamlessly. It also features client-side form validation, dynamic DOM manipulation, interactive modal windows, and loading states to provide a smooth, responsive, and user-friendly experience.."
        />
      </div>

      <div
        className="flex 
        flex-col 
        flex-wrap 
        gap-4 
        border
        mt-3
        items-center 
        animate-scrollAppear 
        [animation-timeline:view()] 
        [animation-range:entry_0%_cover_20%]"
      >
        <ProjectCard
          title="Library landing page"
          images={[imgTest, imgTest, imgTest]}
          technologies={["HTML", "CSS", "JavaScript"]}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, maxime."
        />
      </div>
      <span className="mx-7"></span>
    </div>
  );
};

export default Projects;
