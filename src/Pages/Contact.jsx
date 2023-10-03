import React from 'react'
import { Footer } from '../Components/Footer'
import "../LandingComponents/Home.css"
// import {FaLocationPin} from "react-icons/fa"
import {AiFillPhone} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {ImLocation2} from "react-icons/im"

const Contact = () => {
  return (
    <div>
      <div className="customerr">
        <h1 className="review">Contact Us</h1>
      </div>
     <div className='contact'>
     <img src="https://images.unsplash.com/photo-1586495985096-787fb4a54ac0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGRpdmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" alt="" />
     <div className='main-contact'>
     <span className='span1'>Contact</span>
    <span className='span2'>Us</span>
    <p><ImLocation2/> Tower A, Unitech Business Park, Block - F, South City 1, Sector - 41, Gurgaon, Haryana - 122001 </p>
    <p><AiFillPhone/> +91 9876543210</p>
    <p><AiFillYoutube/> TripWiz</p>
    <input type="text" placeholder='Full Name' />
    <input type="number" placeholder='Phone Number' />
    <input type="email" placeholder='Email Address' />
    <textarea name="" id="" cols="30" rows="10" placeholder='Type Message'/>
    <button className='planTrip'>Submit</button>
     </div>
     </div>
    
     
      <Footer />
    </div>
  )
}

export default Contact