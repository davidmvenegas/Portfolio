import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Logo from '../Media/Images/logo.png'
import { Fragment } from 'react/cjs/react.production.min'
import { useEffect, useState } from 'react'

function Navbar() {
    const navigate = useNavigate()
    const closeNav = () => setNavActive(false)
    const [navActive, setNavActive] = useState(false)
    useEffect(() => {navActive ?  document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [navActive])
    function handleLogoClick() {
        navigate('/contact')
        closeNav()
    }
    return (
        <Fragment>
            <p className="navbar-toggle-button" onClick={() => setNavActive(!navActive)}>
                <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
                <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
                <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
            </p>
            <div className={navActive ? "navbar-container navActive" : "navbar-container"}>
                <div className="navbar-top">
                    <img src={Logo} alt="DV" onClick={() => handleLogoClick()} />
                    <h1>David Venegas</h1>
                    <p>Fullstack Developer</p>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/" activeClassName="active" className="nav-link"><h1 id='first-nav-link'>About</h1></NavLink></li>
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/skills" activeClassName="active" className="nav-link"><h1>My Skills</h1></NavLink></li>
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/work" activeClassName="active" className="nav-link"><h1>Work</h1></NavLink></li>
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/algorithms" activeClassName="active" className="nav-link"><h1>Algorithms</h1></NavLink></li>
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/blogs" activeClassName="active" className="nav-link"><h1>Blogs</h1></NavLink></li>
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/contact" activeClassName="active" className="nav-link"><h1>Contact</h1></NavLink></li>
                </ul>
                <div className="navbar-bottom">
                    <a href="https://www.linkedin.com/in/david-venegas-m/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='nav-icon'/></a>
                    <a href="https://github.com/davidmvenegas" target="_blank" rel="noopener noreferrer"><FaGithub className='nav-icon'/></a>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar
