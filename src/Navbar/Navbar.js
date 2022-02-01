import './navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar-container'>
            {/* <h1 className="nav-logo">David Venegas</h1> */}
            <ul className="nav-menu">
                <li className="nav-item"><NavLink to="/" activeClassName="active" className="nav-link"><h1>About</h1></NavLink></li>
                <li className="nav-item"><NavLink to="/skills" activeClassName="active" className="nav-link"><h1>My Skills</h1></NavLink></li>
                <li className="nav-item"><NavLink to="/work" activeClassName="active" className="nav-link"><h1>Work</h1></NavLink></li>
                <li className="nav-item"><NavLink to="/algorithms" activeClassName="active" className="nav-link"><h1>Algorithms</h1></NavLink></li>
                <li className="nav-item"><NavLink to="/blogs" activeClassName="active" className="nav-link"><h1>Blogs</h1></NavLink></li>
                <li className="nav-item"><NavLink to="/contact" activeClassName="active" className="nav-link"><h1>Contact</h1></NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
