import React, { useState } from 'react'
import './Navber.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {

  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li><p onClick={()=>setMenu("home")}>Home</p>{menu==="home"?<img src={underline} alt="" />:<></>}</li>
            <li><p onClick={()=>setMenu("about")}>About Me</p>{menu==="about"?<img src={underline} alt="" />:<></>}</li>
            <li><p onClick={()=>setMenu("services")}>Services</p>{menu==="services"?<img src={underline} alt="" />:<></>}</li>
            <li><p onClick={()=>setMenu("work")}>Portfolio</p>{menu==="work"?<img src={underline} alt="" />:<></>}</li>
            <li><p onClick={()=>setMenu("contact")}>Contact</p>{menu==="contact"?<img src={underline} alt="" />:<></>}</li>
        </ul>
        <a href="https://drive.google.com/uc?export=download&id=1FeuAdT8d-BOro34lHhepSMUkwvTUD3Tc"><div className="nav-connect">Download Resume ↓</div></a>
    </div>
  )
}

export default Navbar