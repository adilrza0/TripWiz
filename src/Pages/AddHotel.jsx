import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHotel } from '../Redux/AddhotelReducer/action'; // Assuming you have an action for adding a hotel
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const initialState =  {
    name: "",
    location: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: 0
  }

export default function AddHotel() {
  const [hotelData, setHotelData] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelData({
      ...hotelData,
      [name]: name === "price" || name === "rating"? +value : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHotel(hotelData)); // Dispatch the action to add the hotel
    // Clear the form fields if needed
    setHotelData(initialState);
  };

  return (
    <DIV>
     <div className='cont'>
    

     <div className="container">
      <h2 style={{color:"#007bff"}} className="title" >Add New Hotel</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label  htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={hotelData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            value={hotelData.location}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={hotelData.price}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            value={hotelData.description}
            onChange={handleChange}
            required
            className="input-field"
          ></textarea>
        </div>
        <div className="form-group">
        <label htmlFor="category">Category</label>
            <select name="category" onChange={handleChange} value={hotelData.category} required>
                <option value="">Select a category</option>
                <option value="Vilas">Vilas</option>
                <option value="Resort">Resort</option>
                <option value="Hotel">Hotel</option>
                <option value="Homestay">Homestay</option>

            </select>
        </div>
        <div className="form-group">
          <label  htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            value={hotelData.image}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label  htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            value={hotelData.rating}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        {/* Add other input fields for hotel details */}
        <button type="submit" className="submit-button">
          Add Hotel
        </button>
      </form>
      </div>
      <div className='btn'  >
       
        <button
            style={{marginRight:"350px",backgroundColor:" #007bff",padding:"20px"}} 
        >
           <Link style={{color:"white",textDecoration:"none"}} to={"/admin"}> Back to Admin Page</Link>
        </button>
        
     </div>
      </div>
    </DIV>
  );
}



const DIV = styled.div`
/* Container styling */
*{
    color:  gray;
}

.cont{
 display: flex;
}

.btn{
  /* border:1px solid green; */
  height: 70px;
}

.btn button{
  width: 200px;
  font-size: 15px;
  /* text-decoration: none; */
  color: white;
}

.container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 50px;
    margin-left: 35%;
    /* border: 1px solid #007bff; */
  }

  /* Form styling */
  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 6px;
    font-weight: bold;
    font-size: 20px;
  }

  .input-field {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    border: 1px solid lightblue;
  }

  /* Submit button styling */
  .submit-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .submit-button:hover {
    background-color: #0056b3;
  }

  .title{
    /* color:"#1071db"; */
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 20px;

  }

  .form-group{
    display: flex;
    justify-content: space-between;
  }

  select {
    margin: 10px 0 20px 0 ;
    border: 1px solid gray;
    border-radius: 4px;
    border: 1px solid blue;
  }

  @media screen and (max-width: 800px){
    .cont{
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    display: flex;
    flex-direction: column;
    /* margin: auto; */
    gap: 20px;
    margin-bottom: 50px;

  }
  .btn button{
    /* margin-left: 100px; */
    /* width: 200%; */
    /* margin-left: 200px; */
  }
  
  .btn {
    /* width: 200px; */
    /* margin: auto; */
    /* border: 1px solid green; */
    margin-left: 270px
  }

  .container {
    /* width: 100%; */
    max-width: 350px;
    /* margin: 0 auto; */
    /* padding: 20px; */
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
    margin-bottom: 50px;
    /* margin-left: 35%; */
    /* border: 1px solid #007bff; */
  }

  
}
`