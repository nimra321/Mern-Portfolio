import React from 'react'
import './about.css'
import Jump from 'react-reveal/Jump';
import profileImg from '../../assests/femaleProfile.png';

const About = () => {
  return (
    <> 
    <Jump>
        <div className='about' id='about'>
            <div className='row'>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                    <img src={profileImg} alt='profile_pic'/>
                </div>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                    <h1>About me</h1>
                    <p>
                    I currently enrolled in BS-IT program, 8th semester. I consider my self responsible and orderly person. m learning web development, and now at this stage of learning , I aim to secure a position within a company to gain experience in organizational work, enhance my coding abilities, and eventually become someone who can make a significant impact on the tech world.
                    </p>
                </div>
                
            </div>
        </div>
        </Jump>
    </>
  )
}

export default About