import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

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
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" name="" id="" placeholder='Enter your email.' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
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