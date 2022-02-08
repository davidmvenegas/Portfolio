import './contact.css'
import { useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"

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
                <div className="map-wrapper"></div>
            </div>
        </div>
    )
}

export default Contact
