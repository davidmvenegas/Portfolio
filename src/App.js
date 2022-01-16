import { Fragment } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Home from './0-Home/Home'
import About from './1-About/About'
import Skills from './2-Skills/Skills'
import Projects from './3-Projects/Projects'
import Algorithms from './4-Algorithms/Algorithms'
import Blogs from './5-Blogs/Blogs'
import Contact from './6-Contact/Contact'

function App() {
  return (
    <Fragment>
      <Sidebar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Algorithms/>
      <Blogs/>
      <Contact/>
    </Fragment>
  )
}

export default App;