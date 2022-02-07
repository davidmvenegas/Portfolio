import './contact.css'
import { useEffect } from 'react'

function Contact() {
    useEffect(() => {window.scrollTo(0, 0)}, [])
    return (
        <div className='contact-container'>
            CONTACT
        </div>
    )
}

export default Contact
