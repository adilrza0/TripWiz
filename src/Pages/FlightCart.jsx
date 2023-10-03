import { HStack, Heading, Image, VStack, Box, Text, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { LuBaggageClaim } from 'react-icons/lu'
import { FaRegCircle } from 'react-icons/fa'
import { PiArrowsVerticalDuotone } from 'react-icons/pi'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../LandingComponents/Footer'
import { PAYMENT_DATA } from '../Redux/PaymentReducer/actionType'

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
  const dispatch=useDispatch()
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
 
  useEffect(() => {
    const flight = flights.find((el) => el.id == id)
    setflightData(flight);
  }, [id])

  let refund50 = Math.ceil(+flightData.price * (50 / 100));
  let refund30 = Math.ceil(+flightData.price * (30 / 100));
  let surcharge = Math.floor(flightData.price * (8 / 100));

  let total = flightData.price+surcharge;

  priceStore = localStorage.setItem("flight",total)
 
  return (
    <DIV>
      <div className='container'>
        <div id='flight-details'>
          <h3>{flightData.from_city} <Image
            w="20px"
            mx="20px"
            src="https://i.ibb.co/CPZYCk7/icons8-plane.gif"
          />{flightData.to_city}</h3>
          <br />
          <Text>Non Stop - {flightData.duration}</Text>
          <div id='flight1'>
            <Image src={flightData.image} w="30px" alt={flightData.airline} />
            <Text>{flightData.airline}</Text>
            <Heading as="h4" color="gray">{flightData.flight_number}</Heading>
          </div>
          <br />
          <hr />
          <div id='flight2'>
            <div className='flight2a'>
              <Heading as="h4">{flightData.arrival}</Heading>
              <FaRegCircle />
              <Heading as="h4">{flightData.from_city}. </Heading>
              <Text>Indira Gandhi International Airport, Terminal 2</Text>
            </div>

            <div className='flight2a' style={{ marginLeft: "7%" }}>
              <PiArrowsVerticalDuotone size="30px" />
              <Text>{flightData.duration}</Text>
            </div>
            <div className='flight2a'>
              <Heading as="h4">{flightData.departure}</Heading>
              <FaRegCircle />
              <Heading as="h4">{flightData.to_city}. </Heading>
              <Text>{flightData.to_city} International Airport, Terminal 1</Text>
            </div>
            <div className='flight2a'>
              <LuBaggageClaim />
              <Text>Got excess baggage? Don’t stress, buy extra check-in baggage allowance for {flightData.from_code} - {flightData.to_city} at fab rates!</Text>
            </div>
          </div>
          <div id='policy'>
            <div className='policy1'>
              <h3>Cancellation Refund Policy</h3>
              <p> View Policy</p>
            </div>
            <div className='policy2'>
              <Image src={flightData.image} w="30px" alt={flightData.airline} />
              <h3>{flightData.from_code}<Image
                w="20px"
                mx="20px"
                src="https://i.ibb.co/CPZYCk7/icons8-plane.gif" />
                {flightData.to_code}</h3>
            </div>

            <div className='makeFlex'>
              <div className='leftInfo'>
                <p className='cancellation'>Cancellation Penalty :</p>
                <p>Cancel Between :</p>
              </div>
              <div className='rightInfo'>

                <div className='priceGradinent'>
                  <span>{refund50}</span>
                  <span>{refund30}</span>

                </div>
                <p className='gradient'></p>
                <div className='timeLine'>
                  <div className='now'>
                    <p>Now</p>
                  </div>
                  <div className='after' >
                    <p>Before 5 hr</p>
                  </div>
                </div>

              </div>
            </div>
            <Link to="/flight">

              <button id='delete'>Delete</button>
            </Link>
          </div>
        </div>
        <Box w={"29%"}>
          <div className='fareCard'>
            <h2>Fare Summary</h2>
            <div className='baseFare'>
              <div style={{display:"flex",gap:"10px",}}>
              <AiOutlinePlusCircle />
              <h4>Base fare</h4>
              </div>
              <p>{flightData.price}</p>

            </div>
            <br />
            <hr />
            <div className='tax'>
              <div style={{display:"flex",gap:"10px",}}>

              <AiOutlinePlusCircle/>
              <h4>Taxes and SurCharges</h4>
              </div>
              <p>{surcharge}</p>

            </div>
            <br />
            <hr />
            <div className='total'>
              <h2>Total Amount</h2>
              <h2>₹ {total}</h2>
            </div>
          </div>
          <Link onClick={()=>dispatch({type:PAYMENT_DATA,payload:{type:"FLIGHT",totalPrice:total}})} to="/payment">
          <Button display="block" p="15px" color="white"  border="none" bg="blue" borderRadius="15px" m="auto" mt="20px">Make Paymetn</Button>
          </Link>
        </Box>
      </div>


      <br />
      <div>
      <Heading fontSize="large" textAlign={"center"}>Passenger details</Heading>
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
            <br />
            <input type="date" id='date' />
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
      </div>
      <Footer />
    </DIV>
  )
}

export default FlightCart

const DIV = styled.div`

width: 95%;
text-align: start;
margin: auto;
padding-bottom: 50px;

.container{
  display: flex;
  margin-top: 30px;
  gap:15px;

}
#flight-details{
  width: 69%;
  padding: 10px 10px 20px 20px;
  border: 1px solid #abd0f7;
  border-radius: 10px;
}
#flight1{
  display: flex;
  gap:20px;
}
#flight2{
  width: 98%;
  background-color: #dceaf9;
  padding:15px;
  border-radius:15px;
  margin-top: 20px;;
  
}
.flight2a{
  display: flex;
  gap:20px
}
#policy{
  width: 97%;
  padding:10px;
  margin-top: 30px;
  border-radius: 15px;
  border: 1px solid #abd0f7;
}
.policy1{
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
}
.policy2{
  display: flex;
  gap: 10px;
}

.makeFlex{
  display: flex;
  
}

.leftInfo{
  min-width: 140px;
    font-size: calc(var(--font-scale, 1)*12px);
    color: #4a4a4a;
    font-weight: 700;
    max-width: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 15px;
   
}
.cancellation{
  margin-bottom: 20px;
}
.priceGradinent{
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: auto;
}
.rightInfo{

  width: 100%;

}
.gradient{
  width: 100%;
  background-image: linear-gradient(to right,rgb(1, 149, 60), rgb(131, 180, 48), rgb(214, 158, 21), rgb(250, 93, 93));
  height: 6px;
    margin: 3px 0 8px;
    border-radius: 12px;
}
.timeLine{
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
}
.now{
  position: relative;
    color: #4a4a4a;
}
.after{
  position: relative;
    color: #4a4a4a;
}
.fareCard{
width: 90%;
padding: 10px;
margin: auto;
margin-top: 20px;
border: 1px solid #abd0f7;
border-radius: 15px;
}
.baseFare{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

}
.tax{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.total{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #955085;
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

  #delete{
    margin-left: 45%;
    width: 150px;
    padding: 7px;
    border-radius: 18px;
    border: none;
    color: #f1f1f1;
    background:red;
    font-size: 25px;
  }
  #guest{
    width: 97%;
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
#date{
  width:50%;
  margin-top: 20px;
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
    .payment-page{
      width: 80%;
    }
  .delete{
    align-items: center;
  }
  }
`