import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../images/trip_wiz.png";
import { FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import "./Navbar.css"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MAIN_DIV className='eee' isScrolled={isScrolled}>
      <DIV className='DIV'>
       
        <Link to={"/"}>
          <img  src={logo} alt="Logo" />
        </Link>
        <input type="text" placeholder='Search for destinations' className="search-input" />
      
        {/* <FaSearch className="search-icon" /> */}
        <div className="nav-links">
          <Link to={"/"}> Home</Link>
          <Link to={"/destination"}>Destinations</Link>
          <Link to={"/booking"}>Booking</Link>
          <Link to={"/review"}>Review</Link>
          <Link to={"/contact"}>Contact Us</Link>
          <Link to={"/login"}> <BsFillPersonFill className="search-login" /></Link>
        </div>
        <div className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>
       
      </DIV>
      {isMobileMenuOpen && (
        <MobileMenu>
          <Link to={"/"}>Home</Link>
          <Link to={"/destination"}>Destinations</Link>
          <Link to={"/booking"}>Booking</Link>
          <Link to={"/review"}>Review</Link>
          <Link to={"/contact"}>Contact Us</Link>
          <Link to={"/login"}>Login</Link>
        </MobileMenu>
      )}
    </MAIN_DIV>
  );
}

export default Navbar;

const MAIN_DIV = styled.div`
  width: 100%;
  background-color: ${(props) => (props.isScrolled ? '#00375c' : 'transparent')};
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;
  position: fixed;
  display: flex;
  height: 80px;
  align-items:center !important;
`;

const DIV = styled.div`
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  width: 80%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  position: relative;
  margin-top:8px;

  a {
    text-decoration: none;
    color: white;
  }
  
  img {
    width: 200px;
    margin-right: 50px;
  }

 

  .search-input {
    position: relative;
    padding-left: 30px;
    font-size: 17px;
    padding: 7px 14px;
    border: none;
    border-radius: 15px;
    background: none;
    border: 1px solid white;
    width:40%; /* Adjust as needed to ensure proper spacing */
    color:white;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 500px; /* Adjust as needed for the desired icon placement */
    transform: translateY(-50%);
    cursor: pointer;
    color: grey;
  }

  .search-login {
    font-size: 28px;
  }

  .nav-links {
    display: flex;
  }

  .nav-links a {
    margin-left: 20px;
  }

  .mobile-menu-button {
  display: none; /* Initially hide the menu button */

  @media (max-width: 1000px) {



    cursor: pointer;
    .search-input {
    position: relative;
    padding-left: 30px;
    font-size: 17px;
    padding: 7px 14px;
    border: none;
    border-radius: 15px;
    background: none;
    border: 1px solid white;
    width:50%!important; /* Adjust as needed to ensure proper spacing */
  }

    .menu-icon {
      width: 30px;
      height: 30px;
      border-radius:40%;
      background-color: white;
      margin: 4px 0;
      transition: 0.4s;

      &.open:nth-child(1) {
        transform: rotate(-90deg) translate(-5px, 6px);
      }

      &.open:nth-child(2) {
        transform: scaleX(0);
        opacity: 0;
      }

      &.open:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
      }
    }
  }
}




  @media screen and (max-width: 1000px) {
    .nav-links {
      display: none;
    }
    .search-input {
    position: relative;
    padding-left: 30px;
    font-size: 17px;
    padding: 7px 14px;
    border: none;
    border-radius: 15px;
    background: none;
    border: 1px solid white;
    width:50%!important; /* Adjust as needed to ensure proper spacing */
  }

    .mobile-menu-button {
      display: flex;
    }
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  right: 0;
  background-color: #00375c;
  width: 100%;
  text-align: center;
  z-index: 999;

  a {
    color: white;
    text-decoration: none;
    padding: 10px;
    font-size: 16px;
  }
  
`;

