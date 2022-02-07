import './contact.css'
import { useEffect } from 'react'

function Contact() {
    useEffect(() => {window.scrollTo(0, 0)}, [])
    return (
        <div className='contact-container'>
            <div className="contact-left-box">
                <div className="contact-header"></div>
                <div className="contact-message"></div>
                <div className="contact-form"></div>
                <div className="contact-aside"></div>
            </div>
            <div className="contact-right-box">
                <div className="map-popup"></div>
                <div className="map-wrapper">
                    <iframe src="https://snazzymaps.com/embed/370475" width="550px" height="755px" style={{border: 'none'}} title='Contact Map'></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact
