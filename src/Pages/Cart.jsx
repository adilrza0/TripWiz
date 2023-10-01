import { Card } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
const inital = {
  firstname: "",
  lastname: "",
  gender: "",
  adult: "",
  email: "",
  mobile: 0,
  address: ""
}
const Cart = () => {
  const { id } = useParams()
  const hotels = useSelector((store) => store.hotelReducer.hotels)
  const [hotel, setHotel] = useState({})
  const [count, setCount] = useState(1)
  const [data, setData] = useState(inital)
  let priceStore = localStorage.getItem("priceStore") || hotel.price;
  useEffect(() => {
    const data = hotels.find((el) => el.id === id)
    setHotel(data);
  }, [count])


  useEffect(() => {
    priceStore = count * hotel.price;
    localStorage.setItem("priceStore", priceStore)
  }, [count])

  const handleCount = (val) => {
    setCount((prev) => prev + val)
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: name == "monile" ? +value : value }
    })


  }

  console.log(data)
  return (
    <DIV >

      <div className='cart-item'>
        <div className='image'>

          <img src={hotel.image} alt={hotel.name} />
        </div>
        <Card className='hotel'>

          <h1>{hotel.name} </h1>
          <h5>Location: {hotel.location}</h5>
          <br />

          <p>{hotel.description}</p>
          <br />
          <p>Rating: {hotel.rating}</p>
          <h4>Price: ${hotel.price}</h4>
          <br />
          <div className='quantity'>
            <label> <h1>Add Days</h1></label>
            <button onClick={() => handleCount(-1)} disabled={count === 1}>-</button>
            <button>{count}</button>
            <button onClick={() => handleCount(1)} >+</button>
          </div>
          <br />
          <Link to="/hotels">
            <button id='delete'>Delete</button>
          </Link>

        </Card>
      </div>
      <h2>Guest details</h2>

      <div id="guest">
        <form>
          <div>
            <label>First name: </label>
            <input type='text' placeholder='Enter first name' name="firstname" value={data.firstname} onChange={handleChange} />
            <br />
            <label>Last name: </label>
            <input type='text' placeholder='Enter last name' name='lastname' value={data.lastname} onChange={handleChange} />
          </div>
          <br />


          <div>
            <select name="gender" value={data.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <br />
          <select name="adult" value={data.adult} onChange={handleChange}>
            <option value="">Adult</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <br />
          <label>Email id : </label>
          <input type='email' placeholder='email' name='email' value={data.email} onChange={handleChange} />
          <label>Mobile No : </label>
          <input type='number' placeholder='mobile number' name='mobile' value={data.mobile} onChange={handleChange} />
          <br />
          <label>Address: </label>
          <input type="textarea" placeholder='Address' name='address' value={data.address} onChange={handleChange} />
        </form>

      </div>
      <div className='payment-page'>
        <button>Payment Amount: </button>
        <h3>${count * hotel.price}</h3>
      </div>
    </DIV>
  )
}

export { Cart }

const DIV = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  gap:10px;
  margin-top: 30px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
 

  .cart-item{
    width:80%;
    display: flex;
    justify-content: space-around;
    padding: 30px;
    border-radius: 15px;
    border: 10px solid #BCDCFF;
    background: #1071db;
    color:whitesmoke;
    margin: auto;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  .image{
    width:57%;
    height: auto;
  }
  img{
    width: 100%;
    height: 400px;
    border-radius: 15px;
    margin: auto;
  }
  .hotel{
    display: flex;
    flex-direction: column;
    width: 37%;
    text-align: start;
   

    
  }
  .payment-page{
    width: 60%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-radius: 15px;
    border: 10px solid #BCDCFF;
    margin-top: 50px;
    margin-bottom: 50px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  .payment-page>button{
    width: 50%;
    padding: 20px;
    border: none;
    background-color: #a9faf6;
    border-radius: 15px;
    font-size: x-large;
    
    
  }
  .payment-page>h3{
    color: #955085;
  }
  .quantity{
    display: flex;
    justify-content:space-evenly;
    gap: 10px;
    
  }
  .quantity button{
    width: 50px;
    height: 50px;
    margin: auto;
    border-radius: 50%;
    border: none;
    background-color: #b86705;
    font-size: 30px;
    color: #ffefdb;
  }
  #delete{
    background-color: red;
    width:50%;
    margin: auto;
    padding: 10px;
    border-radius: 18px;
    border: none;
  }
  #guest{
    width: 80%;
  }
  #guest>form{
    width:80%;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: start;
    border: 10px solid #BCDCFF;
    border-radius: 15px;
    padding: 30px;
    
  }

  @media (max-width: 700px) {
    .cart-item{
      flex-direction: column;
      margin: auto;
      width: 95%;
      align-items: center;
    }
    .payment-page{
      width: 80%;
    }
    img{
      width: 100%;
    }
    .quantity{
    display: flex;
    justify-content:space-evenly;
    flex-direction: column;
    gap: 10px;
    
  }
  .delete{
    align-items: center;
  }
  }
`