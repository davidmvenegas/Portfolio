import './contact.css'
import { useEffect } from 'react'

function Contact() {
    useEffect(() => {window.scrollTo(0, 0)}, [])
    return (
        <div className='contact-container'>
            <div className="contact-left-box">
                <h1 className="contact-title">
                    <span>C</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>a</span>
                    <span>c</span>
                    <span>t</span>&nbsp;
                    <span>M</span>
                    <span>e</span>
                </h1>
                <p className="contact-message">
                    I'm interested and actively searching for a developer position. I currently reside in New York City, but am open to relocation. If you have any questions or requests, don't hesitate to reach out.
                </p>
                <form className="contact-form">
                    <ul>
                        <li id='contact-name' ><input type="text" placeholder='Name'/></li>
                        <li id='contact-email' ><input type="email" placeholder='Email'/></li>
                        <li><input id='contact-subject' type="text" placeholder='Subject'/></li>
                        <li>
                            <textarea placeholder='Message'/>
                        </li>
                    </ul>
                    <button type="submit">Send message!</button>
                </form>
                <div className="contact-aside"></div>
            </div>
            <div className="contact-right-box">
            <div className="contact-right-cover"></div>
                <div className="map-popup">
                    <p>David Venegas</p>
                    <p>venegasdavidm@gmail.com</p>
                    <p>1-803-944-1772</p>
                    <p>NYC, NY - USA</p>
                </div>
                <div className="map-wrapper">
                    <iframe title='Contact Map' src="https://snazzymaps.com/embed/370659" width="100%" height="100%" style={{border: "none"}}/>
                </div>
            </div>
        </div>
    )
}

export default Contact
