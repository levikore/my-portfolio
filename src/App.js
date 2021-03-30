import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import particlesConfig from "./config/configParticles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

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
    </>
  );
}

export default App;
