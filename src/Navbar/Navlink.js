import './navlink.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavLink({ navLinkId, navIcon, scrollToId, activeNavLinkId, setActiveNavLinkId }) {

    function handleClick() {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({behavior: 'smooth'})
	}

	return (
        <li id={navLinkId} className={activeNavLinkId === navLinkId ? 'navLink activeClass' : 'navLink'} onClick={handleClick}>
            <FontAwesomeIcon icon={navIcon} id='navLinkIcon'/>
            <span className="navLinkTitle">{navLinkId}</span>
        </li>
	)
}

export default NavLink