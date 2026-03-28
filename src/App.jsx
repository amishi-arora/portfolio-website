import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Section from "./components/Section/Section.jsx"
import NameText from "./components/NameText/NameText.jsx"
import AboutContent from "./components/AboutContent/AboutContent.jsx";
import NavBar from "./components/NavBar/NavBar.jsx"
import ProjectCarousel from "./components/ProjectCarousel/ProjectCarousel.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,      
      once: false,         
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <NavBar />
      <Section id="homeSection">
        <NameText />
      </Section>
      <Section id="aboutSection" title="About Me">
        <AboutContent />
      </Section>
      <Section id="projectSection" title="Projects">
        <ProjectCarousel />
      </Section>
    </>
  )
}

export default App
