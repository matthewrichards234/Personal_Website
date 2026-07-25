// Test images
import imgTest from "/Users/matthewrichards/Desktop/Projects/Active/Personal_Website/src/assets/luisa-brimble-VfHoMBagDPc-unsplash.jpg";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="bg-blue-900
                    text-white
                    min-h-screen
                    w-full
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
                    my-40
                    items-center 
                    animate-scrollAppear
                    [animation-timeline:view()] 
                    [animation-range:entry_0%_cover_100%]"
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
          description="WTWR is a full-stack weather application that provides personalized outfit recommendations based on real-time weather conditions in a user's city. 
          Built with React, Redux, and React Router, the application delivers a responsive user experience through reusable components, custom hooks, and centralized state management. 
          A Node.js and Express.js backend handles user authentication and securely manages user data, creating a seamless experience that combines dynamic weather information with personalized recommendations."
          githubLink="https://github.com/matthewrichards234/se_project_react"
        />
      </div>

      <div
        className="flex 
                      flex-col 
                      flex-wrap 
                      my-40
                      items-center 
                      animate-scrollAppear 
                      [animation-timeline:view()] 
                      [animation-range:entry_0%_cover_100%]"
      >
        <ProjectCard
          title="Spots"
          images={[imgTest, imgTest, imgTest]}
          technologies={["HTML / CSS", "JavaScript"]}
          description="Spots is a responsive social media application designed for students and young professionals to share posts, like content, and interact in real time. 
                        Built with HTML, CSS, JavaScript, Webpack, and npm, the application integrates RESTful API requests (GET, POST, PUT, and DELETE) to manage user data and content seamlessly. 
                        It also features client-side form validation, dynamic DOM manipulation, interactive modal windows, and loading states to provide a smooth, responsive, and user-friendly experience."
          githubLink="https://github.com/matthewrichards234/se_project_spots"
        />
      </div>

      <div
        className="flex 
                      flex-col 
                      flex-wrap 
                      my-40
                      items-center 
                      animate-scrollAppear 
                      [animation-timeline:view()] 
                      [animation-range:entry_0%_cover_100%]"
      >
        <ProjectCard
          title="Coffee Shop Landing Page"
          images={[imgTest, imgTest, imgTest]}
          technologies={["HTML / CSS"]}
          description="Coffee Shop Landing Page is a responsive front-end website built with HTML and CSS to showcase a modern coffee shop's brand, menu, and atmosphere. 
                        The project features Flexbox-based layouts, smooth CSS animations, embedded YouTube videos, and interactive forms to create an engaging user experience while 
                        demonstrating responsive design principles and clean, semantic front-end development."
          githubLink="https://github.com/matthewrichards234/se_project_coffeeshop-ft"
        />
      </div>

      <div
        className="flex 
                    flex-col 
                    flex-wrap 
                    my-40
                    items-center 
                    animate-scrollAppear 
                    [animation-timeline:view()] 
                    [animation-range:entry_0%_cover_100%]"
      >
        <ProjectCard
          title="Mortgage Amortization Table"
          images={[imgTest]}
          technologies={["C++"]}
          description="Mortgage Amortization Calculator is a C++ application designed to help users understand how mortgage payments 
                      are distributed over the life of a loan by visualizing principal, interest, and remaining balance. The program performs precise 
                      amortization calculations, dynamically generates a complete payment schedule using loops and file handling, and exports the results as a clean, 
                      column-aligned table for easy reading and local download."
          githubLink="https://github.com/matthewrichards234/Mortgage-Amortization-Table"
        />
      </div>
      <span className="mx-7"></span>
    </div>
  );
};

export default Projects;
