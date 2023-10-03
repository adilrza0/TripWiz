import React, { useState } from 'react'
import "./Home.css"
import {CiLocationOn} from "react-icons/ci"
import {AiFillStar} from "react-icons/ai"
import {AiFillCar} from "react-icons/ai"
import {LiaHotelSolid} from "react-icons/lia"
import {MdFlight} from "react-icons/md"
import Navbar from './Navbar'

import { Link, Navigate, useNavigate } from 'react-router-dom'
import turkey from "./images/fatih-yurur-kNSREmtaGOE-unsplash.jpg"

import dubai from "./images/christoph-schulz-7tb-b37yHx4-unsplash.jpg"

import usa from "./images/renan-kamikoga-2bZeEZx7Kaw-unsplash.jpg"

import aus from "./images/caleb-JmuyB_LibRo-unsplash.jpg"

import france from "./images/cyril-mzn-WSvth_lwCi0-unsplash.jpg"

import uk from "./images/luke-stackpoole-mOEqOtmuPG8-unsplash.jpg"

import italy from "./images/biel-morro-d0xjEv-WJQk-unsplash.jpg"

import canada from "./images/mwangi-gatheca-qlKaN7eqay8-unsplash.jpg"

import brazil from "./images/artists-eyes-zxztWY2Qq-4-unsplash.jpg"

import tor from "./images/christian-lambert-ycyXpdhCnp8-unsplash.jpg"
import { Footer } from '../Components/Footer'
import { ChakraProvider } from '@chakra-ui/react'

const Home = () => {
    const [activeButton, setActiveButton] = useState('flights');

  return (
    <div >



<div className='main-container'>
<Navbar/>

<h2>Budget Trvael. Rich Life</h2>
<h1>Enjoy The Best Moments <br /> With TripWiz</h1>

<p>We have more than one million happy customers around the world and <br /> More than 70 plus destination around the globe</p>
<button className='planTrip'>Plan a Trip &gt;</button>
<button className='learnMore'>Learn more</button>

<div className="main-homecard">

    <div className="btn">

     <Link to="/flight">

    <button
          className={activeButton === 'flights' ? 'btn1' : 'btn2'}
          onClick={() => setActiveButton('flights')}
        > <MdFlight/>  Flights</button> </Link> <hr />
        <Link to={"booking"}>
         <button    
          className={activeButton === 'hotels' ? 'btn1' : 'btn2'}
          onClick={() => setActiveButton('hotels')}
        > <LiaHotelSolid/> Hotels</button></Link><hr />
         <button
          className={activeButton === 'transport' ? 'btn1' : 'btn2'}
          onClick={() => setActiveButton('transport')}
        > <AiFillCar/> Transport</button>
    </div>
<div className="homecard">
<div className="locationDiv">
    
    <input type="text" placeholder='From' />
</div>

<div className="distDiv">
   
    <input type="text" placeholder='To' />
</div>

<div className="pricediv">
    
    <input type="date"  />
</div>
<div className="searchdiv">
    
    <input type="text" placeholder={`Search ${activeButton}`} />
</div>

</div>
</div>

</div>




<div className='destination'>
    <span className='span1'>Popular</span>
    <span className='span2'>Destinations</span>
    <br />
  
    <span className='span3'>From historical cities to natural slendours,come see the best of the world.</span>
    <Link  to={'/destination'}>View All → </Link>
    <div className='dest-pics'>
    <div className='image-container'>
      <img src={uk} alt='UK' />
      <div className='image-overlay'>
        <span className='image-overlay-text'>London</span>
      </div>
    </div>
    <div className='image-container'>
      <img src={france} alt='UK' />
      <div className='image-overlay'>
        <span className='image-overlay-text'>France</span>
      </div>
    </div>
    <div className='image-container'>
      <img src={aus} alt='UK' />
      <div className='image-overlay'>
        <span className='image-overlay-text'>Australia</span>
      </div>
    </div>
    <div className='image-container'>
      <img src={usa} alt='UK' />
      <div className='image-overlay'>
        <span className='image-overlay-text'>USA</span>
      </div>
    </div>

    <div className='image-container'>
      <img src={dubai} alt='UK' />
      <div className='image-overlay'>
        <span className='image-overlay-text'>UAE</span>
      </div>
    </div>
    <div className='image-container'>
      <img src={turkey} alt='UK' />
      <div className='image-overlay'>
        <span className='image-overlay-text'>Turkey</span>
      </div>
    </div>

    </div>
</div>
<div className='destination'>
    <span className='span1'>Our</span>
    <span className='span2'>Trip Packages</span>
    <br />
  
    <span className='span3'>From historical cities to natural slendours,come see the best of the world.</span>
    <Link  to={"/destination"}>View All → </Link>
    <div className='dest-pics2'>

    <div className='image-container'>
      <img src={brazil} alt='UK' />
      <div className='image-overlay'>
        <span className='image-overlay-text'>Brasilia, Brazil</span>
        <p className='text-white'>3 Nights, 2 Days</p>
        <div className='star'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
        <div className="makeflex">
        <p className='text-white'>from</p>
        <p className='text-blue'>$800</p>
        </div>
       
        <button className='planTrip2'>Find Details</button>

      </div>
    </div>
    <div className='image-container'>
      <img src={tor} alt='UK' />
      <div className='image-overlay'>
        <span className='image-overlay-text'>Paris, France</span>
        <p className='text-white'>3 Nights, 2 Days</p>
        <div className='star'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
        <div className="makeflex">
        <p className='text-white'>from</p>
        <p className='text-blue'>$800</p>
        </div>
       
        <button className='planTrip2'>Find Details</button>
      </div>
    </div>
    <div className='image-container'>
      <img src={canada} alt='UK' />
      <div className='image-overlay'>
        <span className='image-overlay-text'>Sydney, Australia</span>
        <p className='text-white'>3 Nights, 2 Days</p>
        <div className='star'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
        <div className="makeflex">
        <p className='text-white'>from</p>
        <p className='text-blue'>$800</p>
        </div>
       
        <button className='planTrip2'>Find Details</button>
      </div>
    </div>
    <div className='image-container'>
      <img src={italy} alt='UK' />
      <div className='image-overlay'>
        <span className='image-overlay-text'>New York, USA</span>
        <p className='text-white'>3 Nights, 2 Days</p>
        <div className='star'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
        <div className="makeflex">
        <p className='text-white'>from</p>
        <p className='text-blue'>$800</p>
        </div>
       
        <button className='planTrip2'>Find Details</button>
      </div>
    </div>
    </div>
</div>

<div className='nights3'>
    <div className='main-night3'>
    <div className='first-night3'>
    <p> Suthern Angean Sea, Santorini, Greece</p>
<h1>3 Nights Oasis Hotel</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum iure qui voluptas dolorum non quibusdam consectetur esse? Ipsam, necessitatibus quibusdam.
</p>
<button>View This Offer &gt;</button>
    </div>
    <div className='second-night3'>
        <p>Starting from</p>
        <h1>$1020</h1>
    </div>
    </div>
   

 

</div>



<div className='destination'>
    <span className='span1'>Our</span>
    <span className='span2'>Blogs</span>
    <br />
  
    <span className='span3'>From historical cities to natural slendours,come see the best of the world.</span>
    <Link  to={"/destination"}>View All → </Link>
    <div className='dest-pics2'>

<div className="card-1">
    <div className="card-2">
<h4>Northern lights</h4>
<p>by David</p>
<span> I wanted to share with you the incredible journey I recently embarked upon to witness the awe-inspiring </span><button className='read-more'>Read More</button>
    </div>
</div>

<div className="card-12">
<div className="card-2">
<h4>Pacific Marine</h4>
<p>by Mc Clark</p>
<span>  I recently embarked upon to witness the awe-inspiring I wanted to share with you the incredible journey </span><button className='read-more'>Read More</button>
    </div>
</div>

<div className="card-13">
<div className="card-2">
<h4>Hollywood Fun</h4>
<p>by Jennifer</p>
<span> I wanted to share with you the incredible journey I recently embarked upon to witness the awe-inspiring </span><button className='read-more'>Read More</button>
    </div>
</div>

<div className="card-14">
<div className="card-2">
<h4>Miama Hills</h4>
<p>by Paul Henry</p>
<span> I wanted to share with you the incredible journey I recently embarked upon to witness the awe-inspiring </span><button className='read-more'>Read More</button>
    </div>
</div>


    </div>
</div>
<br />
<br />
<span className='span1'>What</span>
<span className='span2'>Our Customers Say?</span>
<br />
<br />
<div className='customer'>
    <div className='customer-main'>
    <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Zoellick%2C_Robert_%28official_portrait_2008%29.jpg/330px-Zoellick%2C_Robert_%28official_portrait_2008%29.jpg" alt="" />

        <h3>Mr. Andrew</h3>
        <div className='star'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
    
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.</p>
</div>
    <div className="card">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/330px-Tom_Cruise_by_Gage_Skidmore_2.jpg" alt="" />

<h3>Mr.Tom Cruise</h3>
<div className='star'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.</p>
    </div>
    <div className="card">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nicole_Kidman_2_%2829900987478%29.jpg/330px-Nicole_Kidman_2_%2829900987478%29.jpg" alt="" />

<h3>Nicole_Kidman</h3>
<div className='star'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.</p>
    </div>
    <div className="card">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sebastian_Stan_by_Gage_Skidmore_2_%28cropped%29.jpg/330px-Sebastian_Stan_by_Gage_Skidmore_2_%28cropped%29.jpg" alt="" />

<h3>Sebastian Stan</h3>
<div className='star'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.</p>
    </div>

    </div>

<div className='subscribe'>
<h1 >Subscribe To Our Newsletter</h1>
    <p>We will keep your information secret & will send you the offer updates.</p>
    <input 
    
    
    
    
    type="email" placeholder='Enter your Email Address' />
    <button className='planTrip'>SUBSCRIBE</button>
</div>
   
  
</div>
<br />
<br />
      <ChakraProvider>
        <Footer/>
      </ChakraProvider>
    </div>
  )
}

export default Home