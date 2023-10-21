import React from 'react'
import './project.css'
import Spin from 'react-reveal/Spin';
import project1 from '../../assests/project/whatsapp1.PNG'
import project2 from '../../assests/project/chatGpt.PNG'
import project3 from '../../assests/project/medicineInventory.PNG'

const Project = () => {
  return (
    <>
        <div className='container project' id='projects'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
            Recent projects
        </h2>
            <hr />
            <p className='pb-3 text-center'> 👉 Here are my recent project with live links and source code </p>
           {/* CARD DESIGN */}
            <div className='row' id='ads'>
                <Spin>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Full Stack</span>
                            <img src={project1} alt='project1' />
                        </div>
                        <div className='card-image-overly m-auto mt-3'>
                            <span className='card-details-badge'>Node</span>
                            <span className='card-details-badge'>Express</span>
                            <span className='card-details-badge'>React</span>
                            <span className='card-details-badge'>MongoDB</span>
                        </div>
                        <div className='card-body m-auto'>
                            <div className='ad-title'>
                                <h5 className='text-uppercase'>WhatsApp Clone</h5>
                            </div>
                            <a className='ad-btn' href='#' >View</a>
                        </div>
                        
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Full Stack</span>
                            <img src={project2} alt='project2' />
                        </div>
                        <div className='card-image-overly m-auto mt-3'>
                            <span className='card-details-badge'>Node</span>
                            <span className='card-details-badge'>Express</span>
                            <span className='card-details-badge'>React</span>
                            <span className='card-details-badge'>MongoDB</span>
                        </div>
                        <div className='card-body m-auto'>
                            <div className='ad-title'>
                                <h5 className='text-uppercase'>ChatGPT Clone</h5>
                            </div>
                            <a className='ad-btn' href='#' >View</a>
                        </div>
                        
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Full Stack</span>
                            <img src={project3} alt='project3' />
                        </div>
                        <div className='card-image-overly m-auto mt-3'>
                            <span className='card-details-badge'>Node</span>
                            <span className='card-details-badge'>Express</span>
                            <span className='card-details-badge'>React</span>
                            <span className='card-details-badge'>MongoDB</span>
                        </div>
                        <div className='card-body m-auto'>
                            <div className='ad-title'>
                                <h5 className='text-uppercase'>Medicine Inventory</h5>
                            </div>
                            <a className='ad-btn' href='view' >View</a>
                        </div>
                        
                    </div>
                </div>
                </Spin>
            </div>
        </div>
    </>
  )
}

export default Project