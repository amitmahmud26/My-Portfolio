import React from 'react'
import './Navber.css'
import logo from '../../assets/logo.png'
import download_logo from '../../assets/download.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li>Home</li>
            <li>Abour Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <a href="https://drive.google.com/uc?export=download&id=1FeuAdT8d-BOro34lHhepSMUkwvTUD3Tc"><div className="nav-connect">Download Resume ↓</div></a>
    </div>
  )
}

export default Navbar