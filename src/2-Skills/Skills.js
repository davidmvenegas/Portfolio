import './skills.css'
import { useState } from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs"
import { GiClick } from "react-icons/gi"
import ReactImg from '../Media/Images/skills/react.png'
import JavascriptImg from '../Media/Images/skills/javascript.png'
import CSSImg from '../Media/Images/skills/css.png'
import RubyImg from '../Media/Images/skills/ruby.png'
import ReduxImg from '../Media/Images/skills/redux.png'
import NodeImg from '../Media/Images/skills/node.png'
import MongoDBImg from '../Media/Images/skills/mongodb.png'
import RailsImg from '../Media/Images/skills/rails.png'
import SQLImg from '../Media/Images/skills/sql.png'
import FirebaseImg from '../Media/Images/skills/firebase.png'
import FlatironImg from '../Media/Images/flatiron_logo.png'
import ComptiaImg from '../Media/Images/comptia.png'
import AWSImg from '../Media/Images/aws.jpg'
import FlatironCert from '../Media/Images/flatiron_cert.png'
import AtlassianImg from '../Media/Images/atlassian.png'
import TypeWriterEffect from 'react-typewriter-effect'

function Skills() {
    const [mouse1, setMouse1] = useState(false)
    const [mouse2, setMouse2] = useState(false)
    const [mouse3, setMouse3] = useState(false)
    const [mouse4, setMouse4] = useState(false)
    const [cert, setCert] = useState(false)
    return (
        <div className='skills-container'>
            <div className="skills-wrapper">
                <h1 className="skills-header">
                    <span>P</span>
                    <span>r</span>
                    <span>o</span>
                    <span>f</span>
                    <span>i</span>
                    <span>c</span>
                    <span>i</span>
                    <span>e</span>
                    <span>n</span>
                    <span>c</span>
                    <span>i</span>
                    <span>e</span>
                    <span>s</span>
                </h1>
                <p className="skills-description">
                    <TypeWriterEffect startDelay={1000} cursorColor="white" text="I love to learn and am always teaching myself new things." typeSpeed={35} hideCursorAfterText={true}/>&nbsp;&nbsp;
                    <TypeWriterEffect startDelay={4000} cursorColor="white" text="These are my strongest skillsets and technologies." typeSpeed={35} hideCursorAfterText={true}/>
                </p>
                <div className="skills-box">
                    <h1 className="skills-title">Frontend</h1>
                    <div className="skills-content">
                        <div id="ReactSkill" className="skills-item">
                            <img src={ReactImg} alt="React" />
                            <h2>React JS</h2>
                            <p>I use React on a daily basis for nearly everything I do</p>
                        </div>
                        <div id="ReactSkill" className="skillSeparator"></div>
                        <div id="ReduxSkill" className="skills-item">
                            <img src={ReduxImg} alt="Redux" />
                            <h2>Redux</h2>
                            <p>My best friend when building large-scale applications</p>
                        </div>
                        <div id="ReduxSkill" className="skillSeparator"></div>
                        <div id="JavascriptSkill" className="skills-item">
                            <img src={JavascriptImg} alt="Javascript" />
                            <h2>Javascript</h2>
                            <p>The duct tape of the Internet and my first love</p>
                        </div>
                        <div id="JavascriptSkill" className="skillSeparator"></div>
                        <div id="RubySkill" className="skills-item">
                            <img src={RubyImg} alt="Ruby" />
                            <h2>Ruby</h2>
                            <p>Dynamic and simplistic - my first programming language</p>
                        </div>
                        <div id="RubySkill" className="skillSeparator"></div>
                        <div id="CSSSkill" className="skills-item">
                            <img src={CSSImg} alt="CSS" />
                            <h2>CSS</h2>
                            <p>I utilize CSS to bring an attractive look and feel to my work</p>
                        </div>
                    </div>
                </div>
                <div className="skills-box">
                    <h1 className="skills-title">Backend</h1>
                    <div className="skills-content">
                        <div id="NodeSkill" className="skills-item">
                            <img src={NodeImg} alt="Node JS" />
                            <h2>Node JS</h2>
                            <p>I use Node to get data-intensive, real-time backends up and running fast</p>
                        </div>
                        <div id="NodeSkill" className="skillSeparator"></div>
                        <div id="MongoDBSkill" className="skills-item">
                            <img src={MongoDBImg} alt="MongoDB" />
                            <h2>MongoDB</h2>
                            <p>Mongoose's flexibility allows me to create complex data models with ease</p>
                        </div>
                        <div id="MongoDBSkill" className="skillSeparator"></div>
                        <div id="SQLSkill" className="skills-item">
                            <img src={SQLImg} alt="SQL" />
                            <h2>SQL</h2>
                            <p>I am well versed in SQL development - from queries to schemas</p>
                        </div>
                        <div id="SQLSkill" className="skillSeparator"></div>
                        <div id="RubyonRailsSkill" className="skills-item">
                            <img src={RailsImg} alt="Ruby-on-Rails" />
                            <h2>Ruby-on-Rails</h2>
                            <p>I have a solid understanding of Rails MVC and Active Record</p>
                        </div>
                        <div id="RubyonRailsSkill" className="skillSeparator"></div>
                        <div id="FirebaseSkill" className="skills-item">
                            <img src={FirebaseImg} alt="Firebase" />
                            <h2>Firebase</h2>
                            <p>A highly versatile NoSQL database - I'm also adept at its Storage and Auth systems</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="education-wrapper">
                <h1 className="education-header">
                    <span>E</span>
                    <span>d</span>
                    <span>u</span>
                    <span>c</span>
                    <span>a</span>
                    <span>t</span>
                    <span>i</span>
                    <span>o</span>
                    <span>n</span>&nbsp;
                    <span>a</span>
                    <span>n</span>
                    <span>d</span>&nbsp;
                    <span>C</span>
                    <span>e</span>
                    <span>r</span>
                    <span>t</span>
                    <span>i</span>
                    <span>f</span>
                    <span>i</span>
                    <span>c</span>
                    <span>a</span>
                    <span>t</span>
                    <span>i</span>
                    <span>o</span>
                    <span>n</span>
                    <span>s</span>
                </h1>
                <div className="cert-items">
                    <div className="flatiron-item" onMouseEnter={() => setMouse1(true)} onMouseLeave={() => setMouse1(false)}>
                        <div className="flatiron-img-wrapper" onMouseEnter={() => setMouse1(false)} onMouseLeave={() => setMouse1(true)} onClick={() => setCert(!cert)}>
                            {cert ? <img className="flatiron-img" src={FlatironCert} alt="Flatiron" /> : <img className="flatiron-img" src={FlatironImg} alt="Flatiron" />}
                            <GiClick id={mouse1 ? "flatiron-pointer" : "flatiron-pointer-gone"}/>
                            <div className="flatiron-img-hover-box">
                                {cert ? <h1>Click to hide certificate</h1> : <h1>Click to view certificate</h1>}
                            </div>
                        </div>
                        <div className="flatiron-text-box">
                            <h3>NYC, New York</h3>
                            <h1>Software Engineering</h1>
                            <h4>FLATIRON SCHOOL</h4>
                            <p>A highly acknowledged Software Engineering trade school and proven leader in tech education.</p>
                            <div className="flatiron-description-box">
                                <p>Some things I did as a student:</p>
                                <ul>
                                    <li>Studied coding best practices</li>
                                    <li>Collaborated on projects as a team</li>
                                    <li>Engaged in pair programming with my peers</li>
                                    <li>Learned proper ways to tackle complex problems</li>
                                </ul>
                            </div>
                            <p>I spent 16 weeks full time & in-person at Flatiron School during which I actively improved my skills with 500+ hours of live coding experience.</p>
                        </div>
                    </div>
                    <div className="cert-item" onMouseEnter={() => setMouse2(true)} onMouseLeave={() => setMouse2(false)}>
                        <a href="https://www.credly.com/badges/7414c8a3-6315-4711-b4a3-ead2b9720a2d" target="_blank" rel="noreferrer">
                            <div className="cert-img-wrapper" onMouseEnter={() => setMouse2(false)} onMouseLeave={() => setMouse2(true)}>
                                <img className='cert-img' src={AWSImg} alt="AWS" />
                                <GiClick id={mouse2 ? "cert-pointer" : "cert-pointer-gone"}/>
                                <div className="cert-img-hover-box">
                                    <h1>View certificate</h1>
                                    <BsBoxArrowUpRight id='cert-arrow'/>
                                </div>
                            </div>
                        </a>
                        <div className="cert-text-box">
                            <h1 className='cert-title'>Certified Cloud Practitioner</h1>
                            <p>The foundational accreditation from the world's largest cloud provider. Cloud technology is expanding at an incredible pace and I intend to earn many more qualifications in the near future.</p>
                        </div>
                    </div>
                    <div className="cert-item" onMouseEnter={() => setMouse3(true)} onMouseLeave={() => setMouse3(false)}>
                        <a href="https://www.credly.com/badges/533f456d-e121-4340-b831-cc361012ce59" target="_blank" rel="noreferrer">
                            <div className="cert-img-wrapper" onMouseEnter={() => setMouse3(false)} onMouseLeave={() => setMouse3(true)}>
                                <img className='cert-img' src={ComptiaImg} alt="Comptia Security +" />
                                <GiClick id={mouse3 ? "cert-pointer" : "cert-pointer-gone"}/>
                                <div className="cert-img-hover-box">
                                    <h1>View certificate</h1>
                                    <BsBoxArrowUpRight id='cert-arrow'/>
                                </div>
                            </div>
                        </a>
                        <div className="cert-text-box">
                            <h1 className='cert-title'>CompTiA Security +</h1>
                            <p>A globally recognized certification that validates the baseline skills necessary to perform core security functions. Cybersecurity is a vital aspect of the modern internet and something I care deeply about.</p>
                        </div>
                    </div>
                    <div className="cert-item" onMouseEnter={() => setMouse4(true)} onMouseLeave={() => setMouse4(false)}>
                        <a href="https://university.atlassian.com/student/award/SzMgzKvEBivKWJWuomUu2PR5" target="_blank" rel="noreferrer">
                            <div className="cert-img-wrapper" onMouseEnter={() => setMouse4(false)} onMouseLeave={() => setMouse4(true)}>
                                <img className='cert-img' src={AtlassianImg} alt="Jira Fundamentals" />
                                <GiClick id={mouse4 ? "cert-pointer" : "cert-pointer-gone"}/>
                                <div className="cert-img-hover-box">
                                    <h1>View certificate</h1>
                                    <BsBoxArrowUpRight id='cert-arrow'/>
                                </div>
                            </div>
                        </a>
                        <div className="cert-text-box">
                            <h1 className='cert-title'>Jira Fundamentals</h1>
                            <p>I earned a perfect score on Atlassian University's Jira Fundamentals certification. Atlassian is the leader in SCRUM/agile managment software with their products used by <a href='https://www.linkedin.com/pulse/83-fortune-500-companies-use-atlassian-products-divyanshu-raj-/' target="_blank" rel="noreferrer">83%</a> of Fortune 500 companies.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="note-wrapper">
                <p><span>*</span> While I don't have a computer science degree, I do have a working understanding of the theory and maths behind the code. I've completed Harvard's CS50, finished numerous of MIT's Computer Science courses, read countless textbooks, taken advanced math courses and much more. I'm passionate about the fundamentals of programming - not just at the surface level, and I believe that dedication will show.</p>
            </div> */}
        </div>
    )
}

export default Skills
