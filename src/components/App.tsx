import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Resume from "./Resume";
import Navbar from "./Navbar";
import WTWR from "./WTWR";
import Spots from "./Spots";
import PowerballGenerator from "./PowerballGenerator";
import MortgageAmortization from "./MortgageAmortization";
import LibraryLanding from "./LibraryLanding";
import PersonalWebsite from "./PersonalWebsite";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ScrollToTop />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/WTWR" element={<WTWR />}></Route>
        <Route path="/projects/Spots" element={<Spots />}></Route>
        <Route
          path="/projects/Mortgage-Amortization"
          element={<MortgageAmortization />}
        ></Route>
        <Route
          path="/projects/Powerball-Generator"
          element={<PowerballGenerator />}
        ></Route>
        <Route
          path="/projects/Library-Landing"
          element={<LibraryLanding />}
        ></Route>
        <Route
          path="/projects/Personal-Website"
          element={<PersonalWebsite />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
