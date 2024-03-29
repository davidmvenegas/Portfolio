import './about.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PDF_Icon from '../Media/Images/pdf.png'
import GoogleDocs_Icon from '../Media/Images/googleDocs.png'

function About() {
    const navigate = useNavigate()
    useEffect(() => { window.scrollTo(0, 0) }, [])
    return (
        <div className='about-container'>
            <div className="about-left-box">
                <h1 className="about-left-title">
                    <span id='letter_H'>H</span>
                    <span id='letter_i_one'>i</span>
                    <span id='letter_comma_one'>,</span>
                    <br />
                    <span id='letter_I'>I</span>
                    <span id='letter_hyphen'>'</span>
                    <span id='letter_m'>m</span>&nbsp;
                    <span id='letter_D_one'>D</span>
                    <span id='letter_a'>a</span>
                    <span id='letter_v_one'>v</span>
                    <span id='letter_i_two'>i</span>
                    <span id='letter_d'>d</span>
                    <span id='letter_comma_two'>,</span>
                    <br />
                    <span id='letter_W'>F</span>
                    <span id='letter_e_one'>u</span>
                    <span id='letter_b'>l</span>
                    <span id='letter_D_two'>l</span>
                    <span id='letter_e_two'>s</span>
                    <span id='letter_v_two'>t</span>
                    <span id='letter_e_three'>a</span>
                    <span id='letter_l'>c</span>
                    <span id='letter_o'>k</span>&nbsp;
                    <span id='letter_p'>E</span>
                    <span id='letter_e_four'>n</span>
                    <span id='letter_r'>g</span>
                    <span id='letter_r1'>i</span>
                    <span id='letter_r2'>n</span>
                    <span id='letter_r3'>e</span>
                    <span id='letter_r4'>e</span>
                    <span id='letter_r5'>r</span>
                </h1>
                <p className='about-left-description'>Software Engineer / Technology Enthusiast</p>
                <div className="about-left-button-box">
                    <button onClick={() => navigate('/contact')} className="about-contact-button">Contact me!</button>
                    <div className="about-resume-box">
                        <h2 className="about-resume-title">My Resume:</h2>
                        <div className="about-resume-buttons-wrapper">
                            <a href="David_Venegas_Resume.pdf" download><img src={PDF_Icon} alt="PDF" className="about-resume-pdf" /></a>
                            <a href="https://docs.google.com/document/d/1Oe-zKdlp0BpDYQMK6FmnJpq2rV_KYMvbh3ElkJ0QXdw/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={GoogleDocs_Icon} alt="Google Docs" className="about-resume-googleDocs" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-right-box">
                <div className="about-right-title">About me</div>
                <p className='about-right-description'>
                    I'm an engineer focused on solving problems that contribute to making the world a better place.
                    <br /><br />Being apart of technological advancements is what gets me up in the morning, and I constantly strive to outdo myself with every <span onClick={() => navigate('/projects')}>challenge</span> I undertake.
                    <br /><br />My goal is work alongside similarly motivated people to make the world a more exciting and fulfilling place to live.
                </p>
            </div>
        </div>
    )
}

export default About
