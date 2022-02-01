import './contact.css'
import NavRef from '../Navbar/Functions/NavRef'

function Contact() {
    const contactRef = NavRef('Contact')

    return (
        <div ref={contactRef} id='contactContainer' className='contactContainer'>
            CONTACT
        </div>
    )
}

export default Contact
