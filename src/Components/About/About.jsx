import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpeg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Passionate and detail-oriented front-end developer with a strong foundation in HTML, CSS, and JavaScript, eager to create stunning and responsive web experiences.</p>
                    <p>Proficient in modern web technologies and committed to continuous learning and improvement in the fast-evolving world of web development.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p> <hr style={{width: "50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript & React JS</p> <hr style={{width: "70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>C & C++</p> <hr style={{width: "60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Java & Python</p> <hr style={{width: "50%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEAR OF EXPERIENCE</p>
                </div> <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div> <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
        </div>
    </div>
  )
}

export default About