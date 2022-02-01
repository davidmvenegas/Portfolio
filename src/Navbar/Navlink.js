import './navlink.css'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavContext } from './Functions/NavContext'

function NavLink({ navLinkId, navIcon, scrollToId }) {
    const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext)

    function handleClick() {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({behavior: 'smooth'})
	}

	return (
        <li id={navLinkId} className={activeNavLinkId === navLinkId ? 'navLink active' : 'navLink'} onClick={handleClick}>
            <FontAwesomeIcon icon={navIcon} id='navLinkIcon'/>
            <span className="navLinkTitle">{navLinkId}</span>
        </li>
	)
}

export default NavLink