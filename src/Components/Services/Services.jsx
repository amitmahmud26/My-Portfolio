import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Services.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Services = () => {
  return (
    <div id='services' className="services">
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((service, index) => {
                return (
                <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p className='service-desc'>{service.s_desc}</p>
                    {/* <AnchorLink className='anchor-link' offset={70} href='#contact'><div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div></AnchorLink> */}
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services