import Section from "./components/Section/Section.jsx"
import NameText from "./components/NameText/NameText.jsx"
import AboutContent from "./components/AboutContent/AboutContent.jsx";
import NavBar from "./components/NavBar/NavBar.jsx"
import ProjectCarousel from "./components/ProjectCarousel/ProjectCarousel.jsx";

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
      </Section>
    </>
  )
}

export default App
