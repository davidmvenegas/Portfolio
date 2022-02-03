import { Fragment } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar/Navbar'
import About from './1-About/About'
import Skills from './2-Skills/Skills'
import Work from './3-Work/Work'
import Other from './4-Other/Other'
import Contact from './5-Contact/Contact'

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/other" element={<Other/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Fragment>
  )
}

export default App