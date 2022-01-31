import './Navbar.css'
import { FaHome } from 'react-icons/fa'

function Navbar() {
    return (
        <div className='navbarContainer'>
            <ul>
                <li className="navItem">
                    <a href="home">
                        <span className="icon"><FaHome/></span>
                        <span className="link">Home</span>
                    </a>
                </li>
                <li className="navItem">
                    <a href="about">
                        <span className="icon"></span>
                        <span className="link">About Me</span>
                    </a>
                </li>
                <li className="navItem">
                    <a href="proficiencies">
                        <span className="icon"></span>
                        <span className="link">Proficiencies</span>
                    </a>
                </li>
                <li className="navItem">
                    <a href="work">
                        <span className="icon"></span>
                        <span className="link">My Work</span>
                    </a>
                </li>
                <li className="navItem">
                    <a href="algorithms">
                        <span className="icon"></span>
                        <span className="link">Algorithms</span>
                    </a>
                </li>
                <li className="navItem">
                    <a href="blogs">
                        <span className="icon"></span>
                        <span className="link">Blogs</span>
                    </a>
                </li>
                <li className="navItem">
                    <a href="contact">
                        <span className="icon"></span>
                        <span className="link">Contact</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
