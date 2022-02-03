import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Logo from '../Media/Images/logo.png'

function Navbar() {
    const navigate = useNavigate()
    return (
        <div className='navbar-container'>
            <div className="navbar-top">
                <img src={Logo} alt="DV" onClick={() => navigate('/contact')} />
                <h1>David Venegas</h1>
                <p>Fullstack Developer</p>
            </div>
            <ul className="nav-menu">
                <li className="nav-item"><NavLink to="/" activeClassName="active" className="nav-link"><h1 id='first-nav-link'>About</h1></NavLink></li>
                <li className="nav-item"><NavLink to="/skills" activeClassName="active" className="nav-link"><h1>My Skills</h1></NavLink></li>
                <li className="nav-item"><NavLink to="/work" activeClassName="active" className="nav-link"><h1>Work</h1></NavLink></li>
                <li className="nav-item"><NavLink to="/other" activeClassName="active" className="nav-link"><h1>Other</h1></NavLink></li>
                <li className="nav-item"><NavLink to="/contact" activeClassName="active" className="nav-link"><h1>Contact</h1></NavLink></li>
            </ul>
            <div className="navbar-bottom">
                <a href="https://www.linkedin.com/in/david-venegas-m/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='nav-icon'/></a>
                <a href="https://github.com/davidmvenegas" target="_blank" rel="noopener noreferrer"><FaGithub className='nav-icon'/></a>
            </div>
        </div>
    )
}

export default Navbar
