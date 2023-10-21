import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineMenuFold} from 'react-icons/ai'
import './mobileNav.css'
import {FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcBusinessContact} from 'react-icons/fc'
import { Link} from 'react-scroll';

const MobileNAv = () => {

 const [open, setOpen] = useState(false);

 // handle open 
 const handleOpen = () => {
  setOpen(!open);
 }
 // handle menu click 
 const handleMenuClick =() => {
  setOpen(false);
 }

  return (
    <>
    <div className='mobile-nav'>
        <div className='mobile-nav-header'>
          {
            open ? (<AiOutlineMenuFold size={30} className='mobile-nav-icon' onClick={handleOpen}/>
            ) : (<GiHamburgerMenu size={30} className='mobile-nav-icon' onClick={handleOpen}/>) 
          }
            
            <span className='mobile-nav-title'>My Portfolio App</span>
        </div>
        { open && (
          <div className='nav-mobile-menu'>
        <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                    <Link to='home' spy={true} offset={-100} duration={100} onClick={handleMenuClick} >
                    <FcHome />Home
                    
                    </Link>
                    </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='about' spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FcAbout />About
                    </Link>
                    </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='education' spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FcReadingEbook />Eduction
                    </Link></div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='technology' spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FcBiotech />Tech Stack
                    </Link>
                    </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='projects' spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                     <FcVideoProjector />Projects
                    </Link>
                   </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link to='certificate' spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
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
        </div>
        ) }
        
    </div>

    </>
  )
}

export default MobileNAv