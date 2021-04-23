import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import particlesConfig from "./config/configParticles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectModal from "./components/ProjectModal";

function App() {
  return (
    <>
      <Navbar />
      <Particles
        className="particles-canvas"
        params={particlesConfig}
      />
      <Header />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ProjectModal/>
      <Contact/>
    </>
  );
}

export default App;
