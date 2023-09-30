import React from 'react';
import styled from 'styled-components';
import logo from "./images/logo-no-background.png"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlinePhone} from "react-icons/ai"
import {CiLocationOn} from "react-icons/ci"

const Footer = () => {
  return (
  <div>
  <FooterContainer>
      <FooterColumn>
       

            <DIV>
            <img src={logo} alt="" />
             <h1>TripWip</h1> </DIV>
        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta, id doloremque voluptate quia quibusdam ea repudiandae? Natus quis molestias odit nemo rem sequi quasi a? Iusto accusantium maiores ab!</p>
        <div className='icons'> <BsFacebook/><AiFillTwitterCircle/><AiFillInstagram/><AiFillYoutube/></div>
       
        
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>Company</FooterTitle>
        <ul>
          <li>Home</li>
          <li>Destinations</li>
          <li>Booking</li>
          <li>Review</li>
          <li>Contact Us</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>More</FooterTitle>
        <ul>
          <li>Package</li>
          <li>Blogs</li>
          <li>Support</li>
          <li>Our Partners</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>Contact</FooterTitle>
        <ul>
        <li> <AiOutlineMail/> Email: example@example.com</li>
          <li> <AiOutlinePhone/> Phone: +1234567890</li>
          <li> <CiLocationOn/> Address: 123 Street, City</li>
        </ul>
      </FooterColumn>
     
     
    </FooterContainer>

     <DIVP>
     <p>Cpoyright © TripWiz. All rights Reserverd </p>
     <p>Terms& Conditions | Cookies Policy | Privacy Policy</p>
   </DIVP>
  </div>

  
    
  );
};

export default Footer;

const FooterContainer = styled.footer`
  
  color: black;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  width:80%;
  margin: auto;
 /* align-items:center; */
 border-bottom:3px solid grey;
 margin-bottom:20px;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  /* flex: 1; */
  /* padding: 0 20px; */
  text-align: left;
  
  
  li{
    list-style-type:none;
    line-height:40px;
  }
  .desc{
    /* margin-left:10px; */
    width:250px;
   text-align:justify;
   line-height:24px;
  }
  img{
    width: 70px;
  }
  .icons{
    font-size:28px;
   display: flex;
   gap: 10px;
   color: #1071DB;
   margin-top:10px;
   margin-bottom:50px;
  }
  

  @media (max-width: 768px) {
    padding: 10px 0;
    width: 100%;
  }
`;

const FooterTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  /* margin-left:40px; */
  align-items:center;
/* line-height: 80px; */
  
`;

const ul = styled.ul`
  list-style: none;
  padding: 0;
  
 
  
`;

ul.li = styled.li`
  margin-bottom: 5px;
  list-style-type:none;
`;

const DIV=styled.div`
    display:flex;
    gap:20px;
`
const DIVP=styled.div`
  display: flex;
  width: 80%;
  justify-content:space-between;
  margin:auto;
  margin-bottom: 20px;
`
// CSS-in-JS with styled-components is used to style the footer.
