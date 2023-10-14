import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from "./images/logo-no-background.png";
import { FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import "./Navbar.css"


const Navbar = () => {
  const [isscrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location=useLocation();

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
    <MAIN_DIV className='eee' isscrolled={isscrolled.toString()}>
      <DIV className='DIV'>
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
        <input type="text" placeholder='Search for destinations' className="search-input" />
        {/* <FaSearch className="search-icon" /> */}
        <div className="nav-links">
        <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/destination"}>Destinations</NavLink>
          <NavLink to={"/booking"}>Booking</NavLink>
          <NavLink to={"/review"}>Review</NavLink>
          <NavLink to={"/contact"}>Contact Us</NavLink>
        
          <NavLink to={"/login"}> <BsFillPersonFill className="search-login" /></NavLink>
        </div>
        <div className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>
       
      </DIV>
      {isMobileMenuOpen && (
        <MobileMenu>
              <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/destination"}>Destinations</NavLink>
          <NavLink to={"/booking"}>Booking</NavLink>
          <NavLink to={"/review"}>Review</NavLink>
          <NavLink to={"/contact"}>Contact Us</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </MobileMenu>
      )}
    </MAIN_DIV>
  );
}

export default Navbar;

const MAIN_DIV = styled.div`
  width: 100%;
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;
  //position: fixed;
  display: flex;
  height: 80px;

  background-color: #00375c;
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
  font-size: 17px;
  align-items: center !important;
  /* position: relative; */
  

  margin-top:-6px;

  a {
    text-decoration: none;
    color: white;
  }

  img {
    width: 50px;
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

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  position: relative;
  margin-left: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff6600; /* Change to your desired hover color */
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

