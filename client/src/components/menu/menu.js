import React from 'react'
import "./menu.css"
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import profileImg from '../../assests/femaleProfile.png';
import {FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcBusinessContact} from 'react-icons/fc'
import { Link} from 'react-scroll';

const Menu = ({toggle}) => {
  return (
    <>
    {toggle? (
        <>
        <Zoom>
           <div className='navbar-profile-pic'>
            <img src={profileImg} alt='profile pic' />
        </div> 
        </Zoom>
        <Fade left>

        
        <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                    <Link to='home' spy={true} offset={-100} duration={100}>
                    <FcHome />Home
                    </Link>
                    </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='about' spy={true} offset={-100} duration={100}>
                    <FcAbout />About
                    </Link>
                    </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='education' spy={true} offset={-100} duration={100}>
                    <FcReadingEbook />Eduction
                    </Link></div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='technology' spy={true} offset={-100} duration={100}>
                    <FcBiotech />Tech Stack
                    </Link>
                    </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='projects' spy={true} offset={-100} duration={100}>
                     <FcVideoProjector />Projects
                    </Link>
                   </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='certificate' spy={true} offset={-100} duration={100}>
                   <FcPortraitMode />Certificate
                    </Link>
                    </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='contact' spy={true} offset={-100} duration={100}>
                    <FcBusinessContact />Contact
                    </Link>
                    </div>
            </div>
        </div>
        </Fade>
        </>
    ) : (
        <>
        <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='home' spy={true} offset={-100} duration={100}>
                    <FcHome />
                    </Link>
                </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='about' spy={true} offset={-100} duration={100}>
                    <FcAbout />
                    </Link>
                </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='education' spy={true} offset={-100} duration={100}>
                    <FcReadingEbook />
                    </Link>
                </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='technology' spy={true} offset={-100} duration={100}>
                    <FcBiotech />
                    </Link>
                </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='projects' spy={true} offset={-100} duration={100}>
                     <FcVideoProjector />
                    </Link>
                </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='certificate' spy={true} offset={-100} duration={100}>
                   <FcPortraitMode />
                    </Link>
                </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='contact' spy={true} offset={-100} duration={100}>
                    <FcBusinessContact />
                    </Link>
                </div>
            </div>
        </div>
        </>
    ) }
        
    </>
  )
}

export default Menu