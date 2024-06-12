import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
import github_icon from '../../assets/github.png'
import linkedin_icon from '../../assets/linkedin.png'
import whatsapp_icon from '../../assets/whatsapp.png'
import fb_icon from '../../assets/fb.png'
import messenger_icon from '../../assets/messenger.png'
import x_icon from '../../assets/x.png'
import insta_icon from '../../assets/insta.png'


const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img className='logo' src={footer_logo} alt="" />
                    <p>I'm a frontend developer from Bangladesh with 2 years of experience.</p>
                </div>
                <div className="footer-top-right">
                    {/* <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" name="" id="" placeholder='Enter your email.' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div> */}
                    <div className="my-socials">
                        <div><h1>My Socials</h1></div>
                        <div className="all-socials">
                            <a target='blank' href="https://github.com/amitmahmud26"><img src={github_icon} alt=" " /></a>
                            <a target='blank' href="https://www.linkedin.com/in/amit-mahmud-sabbir-703142161/"><img src={linkedin_icon} alt=" " /></a>
                            <a target='blank' href="https://wa.me/+8801521745494"><img src={whatsapp_icon} alt=" " /></a>
                            <a target='blank' href="https://www.facebook.com/amitmahmud26/"><img src={fb_icon} alt=" " /></a>
                            <a target='blank' href="https://m.me/amitmahmud26"><img src={messenger_icon} alt=" " /></a>
                            <a target='blank' href="https://x.com/amitmahmud26"><img src={x_icon} alt=" " /></a>
                            <a target='blank' href="https://www.instagram.com/shut_up_sabbir_here/"><img src={insta_icon} alt=" " /></a>
                        </div>
                    </div>
                </div>
            </div> <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@2024 Amit Mahmud Sabbir. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer