import { Fragment } from 'react'
import NavProvider from './Navbar/Functions/NavContext'
import Navbar from './Navbar/Navbar'
import About from './1-About/About'
import Proficiencies from './2-Proficiencies/Proficiencies'
import MyWork from './3-MyWork/MyWork'
import Algorithms from './4-Algorithms/Algorithms'
import Blogs from './5-Blogs/Blogs'
import Contact from './6-Contact/Contact'

function App() {
  return (
    <Fragment>
      <NavProvider>
        <Navbar/>
        <About/>
        <Proficiencies/>
        <MyWork/>
        <Algorithms/>
        <Blogs/>
        <Contact/>
      </NavProvider>
    </Fragment>
  )
}

export default App