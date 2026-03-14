import Section from "./components/Section/Section.jsx"
import NameText from "./components/NameText/NameText.jsx"
import AboutContent from "./components/AboutContent/AboutContent.jsx";
import NavBar from "./components/NavBar/NavBar.jsx"
import ProjectCarousel from "./components/ProjectCarousel/ProjectCarousel.jsx";
import ProjectSlide from "./components/ProjectSlide/ProjectSlide.jsx";
import DoAndDone from "./assets/DoAndDone.png"
import projectDescriptions from "./ProjectDescriptions.js";
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
        {projectDescriptions.map(p => <ProjectSlide title = {p.title} description = {p.description} tags = {p.tags} gitHubLink = {p.gitHubLink} demoLink = {p.demoLink}/>)}
      </Section>
    </>
  )
}

export default App
