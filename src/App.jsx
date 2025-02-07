import React from "react"
import NavbarMain from "./components/navbar/NavbarMain"
import Body from "./components/home/Body"
import AboutMain from "./components/about/AboutMain"
import SkillMain from "./components/skills/SkillMain"
import ExperienceMain from "./components/experience/ExperienceMain"
import ProjectsMain from "./components/projects/ProjectsMain"
import ContactMain from "./components/contact/ContactMain"
import FooterMain from "./components/footer/FooterMain"

const App = () => {

  return (
    <main className="font-body">
      <NavbarMain />
      <Body />
      <AboutMain />
      <ExperienceMain />
      <SkillMain />
      <ProjectsMain />
      <ContactMain />
      <FooterMain />
    </main>
  )
}

export default App
