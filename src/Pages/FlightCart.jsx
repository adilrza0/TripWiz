import { Button, HStack, Heading, Image, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
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


const FlightCart = () => {
  const flights = useSelector((store) => store.flightReducer.flights)
  const { id } = useParams()
  const [flightData, setflightData] = useState({})
  const [count, setCount] = useState(1)
  const [data, setData] = useState(inital)
  let priceStore = localStorage.getItem("flight") || flightData.price
 
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: name == "monile" ? +value : value }
    })


  }
  let amount = flightData.price
  priceStore = localStorage.setItem("flight", amount)
  useEffect(() => {
    const flight = flights.find((el) => el.id == id)
    setflightData(flight);
  }, [id])
  return (
    <DIV>
      <div id="flight">
        <Image src={"./images/trip_wiz.png"} alt="" ></Image>
        <HStack justifyContent="space-evenly" className="flight-card">
          <VStack >
            <Image boxSize="50px" className="airline-logo" src={flightData.image} alt={flightData.airline} />
            <Heading as='h3' size='md'>{flightData.airline}|{flightData.flight_number}</Heading>


          </VStack>

          <VStack>
            <Heading as='h2' size='lg'>{flightData.departure}</Heading>
            <Heading as='h6' size='xs'>{flightData.from_city} ({flightData.from_code})</Heading>

          </VStack>
          <VStack>
            <Heading mr="30px" ml="30px" as='h3' size='md'>{flightData.duration}</Heading>
            <HStack>
              <AiOutlineArrowLeft width="50px" />

              <AiOutlineArrowRight />

            </HStack>
          </VStack>
          <VStack>
            <Heading as='h2' size='lg' >{flightData.arrival}</Heading>
            <Heading as='h6' size='xs'>{flightData.to_city} ({flightData.to_code})</Heading>
          </VStack>
          <VStack>
            <Heading color="#1071DB" as='h4' size='md'>${flightData.price}</Heading>
            <Link to="/flight">

              <Button id='delete'>Delete</Button>
            </Link>
          </VStack>

        </HStack>

        <hr />
      </div>
      <br />
      <Heading fontSize="large">Passenger details</Heading>
      <br />
      <div id="guest">
        <form>
          <div className='name'>
            <div>

              <label>First name: </label>
              <input type='text' 
              placeholder='Enter first name' 
              className='name' 
              name="firstname" 
              value={flightData.firstname} 
              onChange={handleChange} />
            </div>
            <div>

              <label>Last name: </label>
              <input type='text' 
              placeholder='Enter last name' 
              className='name' 
              name='lastname' 
              value={flightData.lastname} 
              onChange={handleChange} />
            </div>
          </div>
          <br />
          <hr />


          <div className='gender'>
            <select name="gender" value={flightData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>


            <select name="adult" value={flightData.adult} onChange={handleChange}>
              <option value="">Adult</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <br />

          <label>Email id : </label>
          <input type='email' placeholder='email' name='email' value={flightData.email} onChange={handleChange} />
          <label>Mobile No : </label>
          <input type='number' placeholder='mobile number' name='mobile' value={flightData.mobile} onChange={handleChange} />

          <br />
          <label>Address: </label>
          <textarea type="text" placeholder='Address' name='address' value={flightData.address} onChange={handleChange} />
        </form>

      </div>
      <div className='payment-page'>
        <Link to={"/Payment"}>
        <button>Payment Amount: </button>
        </Link>
        <h1>${count * flightData.price}</h1>
      </div>
    </DIV>
  )
}

export default FlightCart

const DIV = styled.div`

width: 95%;
margin: auto;

#flight{

  width: 80%;
  margin:auto;
  padding: 30px;
  margin-top: 40px;
  background-color: #abd0f7;
  border-radius:10px;
  font-size: x-large;
}

.payment-page{
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 20px;
    border-radius: 15px;
    border: 2px solid #abd0f7;
    margin-top: 50px;
    margin-bottom: 50px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  .payment-page button{
    width: 100%;
    padding: 20px;
    border: none;
    background-color: #a9faf6;
    border-radius: 15px;
    font-size: x-large;
    
    
  }
  .payment-page>h1{
    color: #955085;
    text-align: center;
    margin: auto;
    font-size: x-large;
  }
  /* .quantity{
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
  } */
  #delete{
    margin: auto;
    padding: 7px;
    border-radius: 18px;
    border: none;
    color: red;
    background:none;
    font-size: 25px;
  }
  #guest{
    width: 95%;
    margin: auto;
  }
  #guest>form{
    width:85%;
    display: flex;
    flex-direction: column;
    align-items: start;

    margin: auto;
    border-radius: 15px;
    padding: 30px;
    border: 1px solid #a9faf6;
    font-size: 20px;
    
  }
  .name{
  width: 80%;
  display:grid;
 grid-template-columns:auto auto;
 margin: auto;
 gap:10px;
}
.name div{
  width:100%;
  
}
input {
  width: 60%;
  height: 40px;
  border-radius: 10px;
  border-color:#BCDCFF;
}

textarea{
  width: 60%;
  border-radius: 10px;
  border-color:#BCDCFF;
}

.name input{
  margin-left: 20px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border-color:#BCDCFF;
}
.gender{
width: 80%;
display: flex;
flex-wrap: wrap;
}
select{
  width: 25%;
  height: 33px;
  border-radius: 10px;
  border-color:#BCDCFF ;
}
.gender> :nth-child(2){
  margin-left: 5%;
}
input,select,label {
  font-size:25px;
}
  @media (max-width: 700px) {
    #flight{
      width:100%;
      padding: 10px;
    }
    .payment-page{
      width: 80%;
    }
  .delete{
    align-items: center;
  }
  }
`