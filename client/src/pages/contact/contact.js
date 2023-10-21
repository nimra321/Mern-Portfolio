import React, { useState } from 'react' 
import {  toast } from 'react-toastify';
import axios from 'axios';

import './contact.css'
import Rotate from 'react-reveal/Rotate';
import ContantUs from "../../assests/contact.jpeg"
import LightSpeed from 'react-reveal/LightSpeed';
import {AiFillLinkedin, AiFillInstagram} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"

const Contact = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [msg,setMsg] = useState("")

    // handle submit button
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if(!name || !email || !msg) {
                toast("Please Provide all fields");
            }
            const res = await axios.post('/api/v1/portfolio/sendEmail', {name, email, msg});
            // Validation
            if(res.data.success) {
                toast.success(res.data.message);
            }else  {
                toast.error(res.data.message);
            }

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
    <div className='contact' id='contact'>
        <div className='card card0 border-0'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-xk-6 col-sm-12'>
                    <div className='card1'>
                        <div className='row border-line'>
                            <LightSpeed>
                            <img src={ContantUs} alt='contact' className='image'/>
                            </LightSpeed>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                    <Rotate>
                    <div className='card2 d-flex card border-0 px-4 py-3'>
                    <div className='row'>
                            <div className='row'>
                            <h6>Contact with 
                                <AiFillLinkedin color='blue' size={30} className='ms-2' />
                                <BsGithub color='black' size={30} className='ms-2' />
                                <AiFillInstagram color='#C13584' size={30} className='ms-2' />

                            </h6>
                        </div>
                        <div className='row px-3 mb-4'>
                            <div className='line'/>
                                <small className='or text-center'>OR</small>
                                <div className='line'/>
                        </div>
                        <div className='row px-3'>
                            <input type='text' name='name' placeholder='Write your Name' className='mb-3' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className='row px-3'>
                            <input type='email' name='email' placeholder='Enter your Email Address' className='mb-3' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='row px-3'>
                            <textarea type='text' name='msg' placeholder='Write your Message' className='mb-3' value={msg} onChange={(e) => setMsg(e.target.value)}/>
                        </div>
                        <div className='row px-3'>
                            <button className='button' onClick={handleSubmit}>SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
                </Rotate>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact