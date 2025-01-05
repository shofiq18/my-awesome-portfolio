
import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Education from './component/Education'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Projects from './component/project/Projects'
import Skills from './component/Skills'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default App
