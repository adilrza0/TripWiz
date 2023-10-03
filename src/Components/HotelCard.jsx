import React from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";

export default function HotelCard({
  category,
  description,
  id,
  image,
  location,
  name,
  price,
  rating,
}) {
  return (
    <DIV>

      <div
        className="Hotel-card-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="Hotel-card-details">
          <div className="name">
            <h2>{name}</h2>
            <h2>{rating}⭐</h2>
          </div>
          <div className="name">
            <p>Location </p>
            <p>{location}</p>
          </div>
          <div className="name">
            <p>Category </p>
            <p>{category}</p>
          </div>

          {/* <p>{description}</p> */}

          <div className="book-section">
            <p>${price}</p>
            <Link to={`/hotelcart/${id}`}>
              <button>Reserve</button>
            </Link>
          </div>
        </div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  /* font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight:bold; */
  //font-size: 18px;

  // margin: 20px; /* Add spacing between cards */
  h2 {
    font-size: 12px;
    font-weight: bold;
  }
  .name {
    display: flex;
    justify-content: space-between;
    text-align: left;
    
    font-size: 10px;
  }
  .book-section {
    display: flex;
    justify-content: space-between;
   
    font-size: 14px;
    font-weight: bold;
    color: #1071db;
    
    margin-left: 20px;
    margin-right: 20px;

    button {
      border-radius: 15px;
      color: #1071db;
      font-size: 14px;
      width: 90px;
      height: 30px;
      background-color: white;
      border: 1px solid #1071db;
    }
    button:hover{
      border: 1px solid white;
      background-color: #1071db;
      color: white;
    }
  }

  .Hotel-card-image {
    height: 300px;
    width: 300px;
    background-size: cover;
    position: relative;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .Hotel-card-details {
    /* position: absolute;
  
  top: 50%;
  left: 0; */

    box-sizing: border-box;
    width: 90%;
    padding: 30px;
    padding-bottom: 10px;
    margin: 10px;
    line-height: 20px;

    border-radius: 5px;
    background: rgba(
      158,
      204,
      235,
      0.7
    ); /* Adjust the opacity as needed for the blur effect */
    backdrop-filter: blur(0.1px); /* Adjust the blur radius as needed */
    p {
      /* margin-bottom: 10px;
      margin-top: 5px; */
    }
  }
  .Hotel-card-details:hover {
    transform: scale(1.05); /* Scale the card on hover */
    opacity: 1; /* Fully reveal the card on hover */
  }

  /* Add additional styling for h2, p, etc. within .Hotel-card-details as needed */
`;
