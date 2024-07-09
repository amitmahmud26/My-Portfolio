import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {

    const [visibleCards, setVisibleCards] = useState(6);
    const showMoreCards = () =>{
        setVisibleCards(mywork_data.length);
        setShowButtonMore(false);
        setShowButtonLess(true);
    };
    const [showButtonMore, setShowButtonMore] = useState(true);
    const [showButtonLess, setShowButtonLess] = useState(false);
    // const toggleButton = () =>{
    //     setShowButton(false);
    // }
    const showLessCards = () =>{
        setVisibleCards(6);
        setShowButtonLess(false);
        setShowButtonMore(true);
    };

  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.slice(0,visibleCards).map((work, index)=>{
                return(
                    <div className='mywork-single'>
                    <a href={work.w_link} target='blank'><img key={index} src={work.w_img}/></a>
                    <h2>{work.w_name}</h2>
                    </div>
                )
            })}
        </div>
        {showButtonMore &&
            <div onClick={showMoreCards} className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="arrow" />
            </div>
        }
        {showButtonLess &&
            <div onClick={showLessCards} className="mywork-showmore">
            <p>Show Less</p>
            <img src={arrow_icon} alt="arrow" />
        </div>
        }
    </div>
  )
}

export default MyWork