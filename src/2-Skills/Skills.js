import './skills.css'

function Skills() {
    return (
        <div className='skills-container'>
            <div className="skills-container">
                <h1 className="skills-title">My Proficiencies</h1>
                <p className="skills-description">
                    I love to learn and am always teaching myself new things. These are my strongest skillsets and technologies.
                </p>
                <div className="skills-front-box">
                    <h1 className="skills-front-title">Frontend</h1>
                    <div className="skills-front-content">
                        <div className="skills-front-item">
                            <img src="" alt="React" />
                            <h2>React JS</h2>
                            <p>I use React on a daily basis for nearly everything I do</p>
                        </div>
                        <div className="skills-front-item">
                            <img src="" alt="Javascript" />
                            <h2>Javascript</h2>
                            <p>The duct tape of the Internet and my first love</p>
                        </div>
                        <div className="skills-front-item">
                            <img src="" alt="CSS" />
                            <h2>CSS</h2>
                            <p>I utilize CSS to bring an attractive look and feel to my work</p>
                        </div>
                        <div className="skills-front-item">
                            <img src="" alt="Ruby" />
                            <h2>Ruby</h2>
                            <p>Dynamic and simplistic - my first programming language</p>
                        </div>
                        <div className="skills-front-item">
                            <img src="" alt="Redux" />
                            <h2>Redux</h2>
                            <p>My best friend when building large-scale applications</p>
                        </div>
                    </div>
                </div>
                <div className="skills-back-box">
                    <h1 className="skills-back-title">Backend</h1>
                    <div className="skills-back-content">
                        <div className="skills-back-item">
                            <img src="" alt="Node JS" />
                            <h2>Node JS</h2>
                            <p>I use Node to get data-intensive, real-time backends up and running fast</p>
                        </div>
                        <div className="skills-back-item">
                            <img src="" alt="MongoDB" />
                            <h2>MongoDB</h2>
                            <p>Mongoose's flexibility allows me to create complex data models with ease</p>
                        </div>
                        <div className="skills-back-item">
                            <img src="" alt="Ruby-on-Rails" />
                            <h2>Ruby-on-Rails</h2>
                            <p>I have a solid understanding of Rails MVC and Active Record</p>
                        </div>
                        <div className="skills-back-item">
                            <img src="" alt="SQL" />
                            <h2>SQL</h2>
                            <p>I am well versed in SQL development - from queries to schemas</p>
                        </div>
                        <div className="skills-back-item">
                            <img src="" alt="Firebase" />
                            <h2>Firebase</h2>
                            <p>A highly versatile NoSQL database - I'm also experienced in its Storage and Authentication systems</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="education-container">
                <h1 className="education-title">Education and Certifications</h1>
                <div className="education-wrapper">
                    <div className="education-item">
                        <img src="" alt="AWS" />
                        <div className="education-item-text">
                            <h1>AMAZON WEB SERVICES</h1>
                            <h4>Certified Cloud Practitioner</h4>
                            <p>The foundational accreditation from the world's largest cloud provider. Cloud technology is expanding at an incredible pace and I intend to receive many more qualifications for the field in the near future.</p>
                        </div>
                    </div>
                    <div className="education-item">
                        <div className="education-img-box">
                            <img src="" alt="Flatiron" />
                            <p>From Oct 2021 to Feb 2022</p>
                        </div>
                        <div className="education-item-text">
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
            <div className="note-container">
                <p><span>*</span> While I don't have a computer science degree, I do have a working understanding of the theory and maths behind the code. I've completed Harvard's CS50, finished numerous of MIT's Computer Science courses, read countless textbooks, taken advanced math courses and much more. I'm passionate about the fundamentals of programming - not just at the surface level, and I believe that dedication will show.</p>
            </div>
        </div>
    )
}

export default Skills
