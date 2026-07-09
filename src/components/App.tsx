import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Resume from "./Resume";
import Navbar from "./Navbar";
import ProjectCards from "./ProjectCards";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProjectCards />
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
