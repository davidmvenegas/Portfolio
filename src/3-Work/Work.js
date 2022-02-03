import './work.css'
import { useNavigate } from 'react-router-dom'

function Work() {
    const navigate = useNavigate()
    return (
        <div className='work-container'>
            <div className="portfolio-wrapper">
            <h1 className="portfolio-header">
                    <span>M</span>
                    <span>y</span>&nbsp;
                    <span>P</span>
                    <span>o</span>
                    <span>r</span>
                    <span>t</span>
                    <span>f</span>
                    <span>o</span>
                    <span>l</span>
                    <span>i</span>
                    <span>o</span>
                </h1>
                <p className="portfolio-description">
                    <div id='portfolio-slide1'>A gallery of recent projects I've built.&nbsp;&nbsp;</div> 
                    <div id='portfolio-slide2'> 
                        <span id='portfolio-contact-slide'><span onClick={() => navigate('/contact')}>Contact me</span> for a complete code walkthrough.</span>
                    </div>
                </p>
            </div>
            <div className="other-work-wrapper"></div>
        </div>
    )
}

export default Work
