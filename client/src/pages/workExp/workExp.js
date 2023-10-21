import React from 'react'
import './workExp.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaLaptopCode} from 'react-icons//fa'
import {SiMicrosoftoffice} from 'react-icons/si'

const WorkExp = () => {
  return (
    <>
    <div className='work' id='certificate'>
        <div className='container work-exp'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
            Certificate
        </h2>
            <hr />
            <VerticalTimeline lineColor='#1e1e2c'>
            <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2023"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaLaptopCode />}
  >
    <h3 className="vertical-timeline-element-title">MERN Stack Development</h3><br/>
    <h4 className="vertical-timeline-element-subtitle">NexSkill (Arfa Software Technology Park) </h4>
    <p>
      I completed 6 months Web Development Course from NexSkill which included HTML, CSS, JS, Bootstrap, Material UI, React JS, Node JS, Express JS, MongoDB.  
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<SiMicrosoftoffice />}
  >
    <h3 className="vertical-timeline-element-title">MS OFFICE</h3><br/>
    <h4 className="vertical-timeline-element-subtitle">PUCIT (Punjab University College of Information Technology)</h4>
    <p>
      I completed 3 months MicroSoft Office Course from PUCIT which included MS Word, MS Excel, MS PowerPoint, Typing Speed, making doc files, making presentation.  
    </p>
  </VerticalTimelineElement>
            </VerticalTimeline>
            
        </div>
    </div>
    </>
  )
}

export default WorkExp