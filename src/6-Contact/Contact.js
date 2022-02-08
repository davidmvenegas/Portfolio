import './contact.css'
import { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

function Contact() {
    useEffect(() => {window.scrollTo(0, 0)}, [])
    const [loading, setLoading] = useState(false)
    const formRef = useRef()

    function sendEmail(e) {
        e.preventDefault()
        setLoading(true)
        Swal.fire({
            title: 'Your message has been sent',
            color: '#f5f5f5',
            icon: 'success',
            background: '#444',
            backdrop: `rgba(0,0,0,0.5)`
        })
        emailjs.sendForm('service_p4e9t3x', 'template_40qv28e', formRef.current, 'user_Wr18txCeJipUS6ENtKUc0')
        .then(e.target.reset())
        .then(setLoading(false))
        .catch (error => console.log(error.text))
    }

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
                    I'm interested and actively searching for a developer position. I currently reside in New York City, but open to relocation. If you have any questions or requests, don't hesitate to reach out.
                </p>
                <form className={loading ? "contact-form-loading" : "contact-form"} ref={formRef} onSubmit={sendEmail}>
                    <ul>
                        <li className='contact-item' id='contact-half-left'>
                            <input type="text" placeholder='Name' name="from_name" required/>
                            <span className="contact-after"></span>
                        </li>
                        <li className='contact-item' id='contact-half-right'>
                            <input type="email" placeholder='Email' name="from_email" required/>
                            <span className="contact-after"></span>
                        </li>
                        <li className='contact-item' id='contact-subject'>
                            <input id='contact-third-child' type="text" placeholder='Subject' name="subject" required/>
                            <span className="contact-after"></span>
                        </li>
                        <li className='contact-item'>
                            <textarea placeholder='Message' name="message" required/>
                            <span className="contact-after"></span>
                        </li>
                    </ul>
                    <button type="submit">Send message!</button>
                </form>
                <p className="contact-aside">Or email me directly at: <span>venegasdavidm@gmail.com</span></p>
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
