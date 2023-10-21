import React from 'react'
import "./home.css"
import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';
import Resume from '../../assests/pdf/Nimra.pdf'

const Home = () => {
  return (
    <>
     <div className='container-fluid home-container' id='home'>
        <div className='container home-content'>
            <Fade right>
            <h2>Hi👋, I'm Nimra Jahangir </h2> 
            <h1>
            <Typewriter
  options={{
    strings: ['FullStack Developer!', 'MERN Stack Developer!'],
    autoStart: true,
    loop: true,
  }}
/>  
            </h1>   
            </Fade>
            <Fade bottom>
            <div className='home-buttons'>

              <a className='btn btn-hire' href="http://api.whatsapp.com/send?phone=03062415366" rel='noreferrer' target='_blank'>
                Hire Me
                </a>
              
              <a className='btn btn-cv' href={Resume} download="Nimra">My Resume</a>
            </div>
            </Fade>
        </div>    
    </div>   
    </>
  )
}

export default Home