import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Amit Mahmud Sabbir,</span> student of CSE at United International University. </h1>
        <p>I'm also an Undergraduate Teaching Assistant (UA) at United International University</p>
        <div className="hero-action">
          <AnchorLink className='anchor-link' offset={70} href='#contact'><div className='hero-connect'>Connect with me</div></AnchorLink>
          {/* <a href="https://drive.google.com/uc?export=download&id=1FeuAdT8d-BOro34lHhepSMUkwvTUD3Tc"><div className='hero-resume'>My resume</div></a> */}
        </div>
    </div>
  )
}

export default Hero