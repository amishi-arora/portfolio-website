import Section from "./components/Section/Section.jsx"
import NameText from "./components/NameText/NameText.jsx"
import AboutContent from "./components/AboutContent/AboutContent.jsx";
import NavBar from "./components/NavBar/NavBar.jsx"
import ProjectCarousel from "./components/ProjectCarousel/ProjectCarousel.jsx";
import ProjectSlide from "./components/ProjectSlide/ProjectSlide.jsx";
import DoAndDone from "./assets/DoAndDone.png"
function App() {
  return (
    <>
      <NavBar />
      <Section id="homeSection">
        <NameText />
      </Section>
      <Section id="aboutSection" title="About">
        <AboutContent />
      </Section>
      <Section id="projectSection" title="Projects">
        <ProjectCarousel />
        <ProjectSlide title = "Do and Done" description = "sample description" image = {DoAndDone} tags = {["JavaScript", "HTML", "CSS"]} gitHubLink = "https://www.youtube.com/" demoLink = "https://www.youtube.com/"/>
      </Section>
    </>
  )
}

export default App
