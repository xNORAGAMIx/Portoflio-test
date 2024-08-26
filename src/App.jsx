import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectCarousel from "./components/Project/ProjectCarousel";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="text-white">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <ProjectCarousel />
      <Contact />
    </div>
  );
};

export default App;
