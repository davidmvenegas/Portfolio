import './about.css'
import NavRef from '../Navbar/Functions/NavRef'

function About() {
    const aboutRef = NavRef('About')

    return (
        <div ref={aboutRef} id='aboutContainer' className='aboutContainer'>
            ABOUT
        </div>
    )
}

export default About
