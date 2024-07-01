import React, { useState } from 'react'
import './Navber.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt="" />
        <img src={menu_open} alt="" className='nav-mov-open' />
        <ul className="nav-menu">
            <img src={menu_close} alt="" className='nav-mov-close' />
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt="" />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={70} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt="" />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={70} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt="" />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={70} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt="" />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={70} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt="" />:<></>}</li>
        </ul>
        <a href="https://drive.google.com/uc?export=download&id=1FeuAdT8d-BOro34lHhepSMUkwvTUD3Tc"><div className="nav-connect">Download Resume ↓</div></a>
    </div>
  )
}

export default Navbar