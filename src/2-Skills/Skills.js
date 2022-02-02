import './skills.css'
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
import TypeWriterEffect from 'react-typewriter-effect'

function Skills() {
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
                        <div id="ReduxSkill" className="skills-item">
                            <img src={ReduxImg} alt="Redux" />
                            <h2>Redux</h2>
                            <p>My best friend when building large-scale applications</p>
                        </div>
                        <div id="JavascriptSkill" className="skills-item">
                            <img src={JavascriptImg} alt="Javascript" />
                            <h2>Javascript</h2>
                            <p>The duct tape of the Internet and my first love</p>
                        </div>
                        <div id="RubySkill" className="skills-item">
                            <img src={RubyImg} alt="Ruby" />
                            <h2>Ruby</h2>
                            <p>Dynamic and simplistic - my first programming language</p>
                        </div>
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
                        <div id="MongoDBSkill" className="skills-item">
                            <img src={MongoDBImg} alt="MongoDB" />
                            <h2>MongoDB</h2>
                            <p>Mongoose's flexibility allows me to create complex data models with ease</p>
                        </div>
                        <div id="SQLSkill" className="skills-item">
                            <img src={SQLImg} alt="SQL" />
                            <h2>SQL</h2>
                            <p>I am well versed in SQL development - from queries to schemas</p>
                        </div>
                        <div id="RubyonRailsSkill" className="skills-item">
                            <img src={RailsImg} alt="Ruby-on-Rails" />
                            <h2>Ruby-on-Rails</h2>
                            <p>I have a solid understanding of Rails MVC and Active Record</p>
                        </div>
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
                    <span>n</span>&nsbp;
                    <span>a</span>
                    <span>n</span>
                    <span>d</span>&nsbp;
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
                <div className="education-box">
                    <div className="education-item">
                        <img src="" alt="AWS" />
                        <div className="education-item-text">
                            <h1>AMAZON WEB SERVICES</h1>
                            <h4>Certified Cloud Practitioner</h4>
                            <p>The foundational accreditation from the world's largest cloud provider. Cloud technology is expanding at an incredible pace and I intend to receive many more qualifications for the field in the near future.</p>
                        </div>
                    </div>
                    <div className="flatiron-item">
                        <div className="flatiron-img-box">
                            <img src="" alt="Flatiron" />
                            <p>From Oct 2021 to Feb 2022</p>
                        </div>
                        <div className="flatiron-item-text">
                            <h3>NYC, New York City</h3>
                            <h1>FLATIRON SCHOOL</h1>
                            <h4>Software Engineering - 16 weeks - Full Time & In-person</h4>
                            <p>A highly acknowledged Software Engineering trade school and proven leader in tech education. During my time as a student I studied coding best practices, engaged in pair programming with my peers, collaborated on projects as a team and learned proper ways to tackle complex problems. Throughout my time at the school I actively improved my skills with 500+ hours of live coding experience.</p>
                        </div>
                    </div>
                    <div className="education-item">
                        <img src="" alt="Flatiron" />
                        <div className="education-item-text">
                            <h1>CYBER SECURITY</h1>
                            <h4>CompTiA Security +</h4>
                            <p>A globally recognized certification that validates the baseline skills necessary to perform core security functions. Cybersecurity is a core component of the internet and I'm looking forward to expanding my knowledge further.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="note-wrapper">
                <p><span>*</span> While I don't have a computer science degree, I do have a working understanding of the theory and maths behind the code. I've completed Harvard's CS50, finished numerous of MIT's Computer Science courses, read countless textbooks, taken advanced math courses and much more. I'm passionate about the fundamentals of programming - not just at the surface level, and I believe that dedication will show.</p>
            </div>
        </div>
    )
}

export default Skills
