import { Fragment } from 'react'
import Navbar from './Navbar/Navbar'
import Home from './0-Home/Home'
import About from './1-About/About'
import Proficiencies from './2-Proficiencies/Proficiencies'
import Projects from './3-Projects/Projects'
import Algorithms from './4-Algorithms/Algorithms'
import Blogs from './5-Blogs/Blogs'
import Contact from './6-Contact/Contact'

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
      <About/>
      <Proficiencies/>
      <Projects/>
      <Algorithms/>
      <Blogs/>
      <Contact/>
    </Fragment>
  )
}

export default App