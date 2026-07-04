import Landing from "./Landing";
import About from "./About";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
