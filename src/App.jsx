import React from "react"
import NavbarMain from "./components/navbar/NavbarMain"
import Body from "./components/home/Body"
import AboutMain from "./components/about/AboutMain"
import SkillMain from "./components/skills/SkillMain"
import ExperienceMain from "./components/experience/ExperienceMain"
import ProjectsMain from "./components/projects/ProjectsMain"

function App() {

  return (
    <main className="font-body">
      <NavbarMain />
      <Body />
      <AboutMain />
      <SkillMain />
      <ExperienceMain />
      <ProjectsMain />
    </main>
  )
}

export default App
