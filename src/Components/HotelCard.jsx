import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';

export default function HotelCard({ category, description, id, image, location, name, price, rating }) {
  return (
    <DIV>
    <div className='Hotel-card'>
      <div className='Hotel-card-image' style={{ backgroundImage: `url(${image})` }}>
        <div className='Hotel-card-details'>
            <div className='name' ><h2>{name}</h2><h2>{rating}⭐</h2></div>
            <div className='name'><p>Location </p><p>{location}</p></div>
            <div className='name'><p>Category </p><p>{category}</p></div>
          
          
          
          
          {/* <p>{description}</p> */}
          
          <div className='book-section'><p>${price}</p> 
          <Link to={`/cart/${id}`}>
          
          <button>Reserve</button>
          </Link>
          </div> 
        </div>
      </div>
    </div>
    </DIV>
  );
}
const DIV=styled.div`
/* font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight:bold; */
//font-size: 18px;

.Hotel-card {
    margin: 20px;
    margin-bottom: 40px;
    
   

    box-shadow: 0px 2px 6px 3px rgba(0, 0, 0, 0.1);
}

  
 // margin: 20px; /* Add spacing between cards */
h2{
  font-size: 16px;
  font-weight: bold;
}
.name{
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-bottom: 0px;
    font-size: 14px;
}
.book-section{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
    color: #1071DB;
    margin-top: 2px;
    margin-left:20px;
    margin-right: 20px;
    
    
    button{
        border-radius: 15px;
        color: white;
        font-size: 18px;
        width: 90px;
        height: 30px;
        background-color: #1071DB;
        border: none;
    }

}

.Hotel-card-image {
  height: 400px;
  width: 300px;
  background-size: cover;
  position: relative;
  border-radius:10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items:center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  
 



}

.Hotel-card-details {
  /* position: absolute;
  
  top: 50%;
  left: 0; */
  
  box-sizing: border-box;
  width: 90%;
 padding: 20px;
 

  margin-left: 10px;
  margin-right: 10px;
  
    
    border-radius:5px;
  background: rgba(158, 204, 235, 0.7); /* Adjust the opacity as needed for the blur effect */
  backdrop-filter: blur(0.1px); /* Adjust the blur radius as needed */
  p{
    margin-bottom:10px;
    margin-top: 5px;
    
  }
  
  
  
}


/* Add additional styling for h2, p, etc. within .Hotel-card-details as needed */

    
`