import './about.css'

function About() {
    return (
        <div className='about-container'>
            <div className="about-left-box">
                <h1 className="about-left-title">Hi, <br /> I'm David, <br /> Fullstack Developer</h1>
                <p className='about-left-description'>Software Engineer / Tech Enthusiast</p>
                <div className="about-left-button-box">
                    <button className="about-contact-button">Contact me!</button>
                    <div className="about-resume-box">
                        <div className="about-resume-pdf">PDF</div>
                        <div className="about-resume-googleDocs">Google Docs</div>
                    </div>
                </div>
            </div>
            <div className="about-right-box">
                <div className="about-right-title">About</div>
                <p className='about-right-description'>I am a recent Bootcamp graduate with a passion for programming.</p>
                <p className='about-right-description'>My entire life I have always held a natural affinity for technology. I have high aspirations and strive to constantly outdo myself with every challenge I undertake.</p>
                <p className='about-right-description'>My goal is to join a team that is truly passionate about what they create and are proud to make the world a better place.</p>
            </div>
        </div>
    )
}

export default About
