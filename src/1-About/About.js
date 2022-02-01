import './about.css'
import { useNavigate } from 'react-router-dom'
import PDF_Icon from '../Media/Images/pdf.png'
import GoogleDocs_Icon from '../Media/Images/googleDocs.png'

function About() {
    const navigate = useNavigate()
    return (
        <div className='about-container'>
            <div className="about-left-box">
                <h1 className="about-left-title">Hi, <br /> I'm David, <br /> Web Developer</h1>
                <p className='about-left-description'>Software Engineer / Tech Enthusiast</p>
                <div className="about-left-button-box">
                    <button onClick={() => navigate('/contact')} className="about-contact-button">Contact me!</button>
                    <div className="about-resume-box">
                        <h2 className="about-resume-title">My Resume:</h2>
                        <div className="about-resume-buttons-wrapper">
                            <a href="David_Venegas_Resume.pdf" download><img src={PDF_Icon} alt="PDF" className="about-resume-pdf"/></a>
                            <a href="https://docs.google.com/document/d/1cORwzeAcRleqft_Sr1tGFhCWtQYIel3OXK4rBaA3mQY/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={GoogleDocs_Icon} alt="Google Docs" className="about-resume-googleDocs"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-right-box">
                <div className="about-right-title">About</div>
                <p className='about-right-description'>
                    I am a recent Bootcamp graduate with a passion for programming and solving difficult problems.
                    <br /><br />I have always held a natural affinity for technology and am ready to translate my skills profesionally. I have high aspirations and constantly strive to outdo myself with every challenge I undertake.
                    <br /><br />My goal is to join a team that is truly passionate about what they create and are proud to make the world a better place.
                </p>
            </div>
        </div>
    )
}

export default About
