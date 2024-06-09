import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Amit Mahmud Sabbir,</span> student of CSE at United International University. </h1>
        <p>I'm also a Undergraduate Teaching Assistant at United International University</p>
        <div className="hero-action">
          <div className='hero-connect'>Connect with me</div>
          <div className='hero-resume'>My resume</div>
        </div>
    </div>
  )
}

export default Hero