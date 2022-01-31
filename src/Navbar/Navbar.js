import './navbar.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAlt, faWrench, faFolder, faNetworkWired, faPencilAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Navlink from './Navlink'

function Navbar() {
    const [activeNavLinkId, setActiveNavLinkId] = useState('')
    const navLinks = [
        {navLinkId: 'Home', scrollToId: 'homeContainer', navIcon: faHome},
        {navLinkId: 'About', scrollToId: 'aboutContainer', navIcon: faUserAlt},
        {navLinkId: 'Proficiencies', scrollToId: 'ProficienciesContainer', navIcon: faWrench},
        {navLinkId: 'My Work', scrollToId: 'myWorkContainer', navIcon: faFolder},
        {navLinkId: 'Algorithms', scrollToId: 'algorithmsContainer', navIcon: faNetworkWired},
        {navLinkId: 'Blogs', scrollToId: 'blogsContainer', navIcon: faPencilAlt},
        {navLinkId: 'Contact', scrollToId: 'contactContainer', navIcon: faEnvelope}
    ]

    return (
        <div className='navbarContainer'>
            <div className="navbarHeader">
                <h1 className='navbarHeaderTitle'>David Venegas</h1>
                <h4 className='navbarHeaderDescription'>Available for Work</h4>
            </div>
            <ul className='navbarLinks'>
                {navLinks.map(({navLinkId, scrollToId, navIcon}) => (
                    <Navlink navLinkId={navLinkId} navIcon={navIcon} scrollToId={scrollToId} activeNavLinkId={activeNavLinkId} setActiveNavLinkId={setActiveNavLinkId} />
                ))}
            </ul>
            <div className="navbarFooter">
                <div className="navFooterItem">
                    <FontAwesomeIcon icon={faEnvelope} id='navFooterIcon'/>
                    <p className='navFooterText'>venegasdavidm@gmail.com</p>
                </div>
                <div className="navFooterItem">
                    <FontAwesomeIcon icon={faPhoneAlt} id='navFooterIcon'/>
                    <p className='navFooterText'>803-944-1772</p>
                </div>
                <div className="navFooterItem">
                    <FontAwesomeIcon icon={faLinkedin} id='navFooterIcon'/>
                    <p className='navFooterText'>david-venegas-m</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar