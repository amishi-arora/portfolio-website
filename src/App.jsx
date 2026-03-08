import Section from "./components/Section/Section.jsx"
import NameText from "./components/NameText/NameText.jsx"
import AboutContent from "./components/AboutContent/AboutContent.jsx"; 
function App() {
  return (
    <>
      <Section>
          <NameText />
      </Section>
      <Section title = "About">
          <AboutContent />
      </Section>
    </>
  )
}

export default App
