import React from 'react'
import './education.css'
import {FaGraduationCap} from "react-icons/fa"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  return (
    <>
    <div className=' education' id='education'>
    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
            Education Details
        </h2>
        <hr />
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  grey' }}
    date="2019 - 2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<FaGraduationCap />}
  >
    <h3 className="vertical-timeline-element-title">BSIT (Information Technology)</h3>
    <br/>
    <h4 className="vertical-timeline-element-subtitle">PUCIT (Punjab University College of Information Technology)</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  grey' }}
    date="2017 - 2019"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<FaGraduationCap />}
  >
    <h3 className="vertical-timeline-element-title">ICS (Computer Science)</h3>
    <br/>
    <h4 className="vertical-timeline-element-subtitle">Govt College for women, Gulshan Ravi, Lahore</h4>
    
  </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    </>
  )
}

export default Education