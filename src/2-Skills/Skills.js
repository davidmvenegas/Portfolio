import './skills.css'

function Skills() {
    return (
        <div className='skills-container'>
            <div className="skills-container">
                <h1 className="skills-title">My Proficiencies</h1>
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
                            <p>I am well versed in SQL development, from queries to schemas</p>
                        </div>
                        <div className="skills-back-item">
                            <img src="" alt="Firebase" />
                            <h2>Firebase</h2>
                            <p>A highly versitile NoSQL database - I'm also experienced in its Storage and Authentication systems</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="education-container">
                <h1 className="education-title">Education and Certifications</h1>
                
            </div>
        </div>
    )
}

export default Skills
