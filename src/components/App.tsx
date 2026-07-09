import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Resume from "./Resume";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProjectCard
        images={[]}
        technologies={["HTML", "CSS", "JavaScript"]}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, maxime."
      />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
