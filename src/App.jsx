import React from "react"
import NavbarMain from "./components/navbar/NavbarMain"
import Body from "./components/home/Body"
import AboutMain from "./components/about/AboutMain"
import SkillMain from "./components/skills/SkillMain"

function App() {

  return (
    <main className="font-body">
      <NavbarMain />
      <Body />
      <AboutMain />
      <SkillMain />
    </main>
  )
}

export default App
