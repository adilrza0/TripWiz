import { Card } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Cart = () => {
  const {id} = useParams()

  const hotels = useSelector((store)=>store.hotelReducer.hotels)
  const  [hotel, setHotel] = useState({})
  const [count, setCount] = useState(1)
  useEffect(()=>{
    const data = hotels.find((el)=>el.id===id)
    setHotel(data);
  },[count])

  const handleCount=(val)=>{
    setCount((prev)=>prev+val)
  }


  return (
    <DIV >
      
      <div className='cart-item'>
        <div className='image'>

       <img src={hotel.image} alt={hotel.name} />
        </div>
        <Card className='hotel'>

      <h2>{hotel.name} </h2>
      <h5>Location: {hotel.location}</h5>
      <p>Rating: {hotel.rating}</p>
      <h4>Price: ${hotel.price}</h4>
      <div className='quantity'>
        <button onClick={()=>handleCount(-1)} disabled={count===1}>-</button>
        <button>{count}</button>
        <button onClick={()=>handleCount(1)} >+</button>
      </div>
        </Card>
      </div>
      <div className='payment-page'>
      <button>Payment Amount: </button>
      <h3>${count*hotel.price}</h3>
      </div>
    </DIV>
  )
}

/*

*/
export {Cart}

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
    width:60%;
    /* height: 350px; */
    display: flex;
    justify-content: space-around;
    padding: 30px;
    border-radius: 15px;
    background: linear-gradient(90deg, rgba(175,170,255,1) 0%, rgba(110,193,143,1) 63%, rgba(0,212,255,1) 100%);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  .image{
    width:57%;
    height: auto;
  }
  img{
    width: 100%;
    border-radius: 15px;
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
`