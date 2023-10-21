import React from 'react'
import './techStack.css'
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';
import { techStackList } from '../../utils/techStackList'

const TechStack = () => {
  return (
    <>
        <div className='container techStack' id='technology'>
            <RubberBand>
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technologies Stack</h2>
            <hr />
            <p className='pb-3 text-center'> 👉 including programming Languages, frameworks, databases, front-end and back-end tools, and APIs </p>
            </RubberBand>
        <div className='row'>
            {techStackList.map((tech)  =>  (
                <Fade left>
                <div key={tech._id} className='col-md-3'>
                    <div className='card m-2'>
                        <div className='card-content'>
                            <div className='card-body'>
                                <div className='media d-flex justify-content-center'>
                                    <div className='align-self-center'>
                                        <tech.icon className='tech-icon' />
                                    </div>
                                    <div className='media-body'>
                                        <h5>{tech.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
            ))}
        </div>
        </div>
    </>
  )
}

export default TechStack