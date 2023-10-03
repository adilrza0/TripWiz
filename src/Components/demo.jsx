import { Box, ChakraProvider,Checkbox,HStack, Heading, Image, Stack, Text, VStack, UnorderedList,ListItem } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import InputHotel from './InputHotel'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {Icon} from "@chakra-ui/icons"
import { FaLocationDot,FaStar } from "react-icons/fa6";
import axios from 'axios'
import { calculateDaysNights } from '../FunctionalComponent/difference'
import { PAYMENT_DATA } from '../Redux/PaymentReducer/actionType'


export  const HotelBookingPage=() =>{
    const {id}=useParams()
    const dispatch=useDispatch()
    const [hotel,setHotel]=useState({})
    const [star,setStar]=useState([])
    const {checkin,checkout,guestDeatails}=useSelector(((store)=>store.hotelSearchReducer),shallowEqual)
    const {days}=calculateDaysNights(checkin,checkout)
    const navigate=useNavigate()
   useEffect(() => {
       axios.get(`http://localhost:8080/hotels/${id}`)
       .then((res)=>{
        console.log(res.data)
        setHotel(res.data)
        const stars=new Array(Math.floor(res.data.rating)).fill(-1)
        setStar(stars)

       })

      }, [])
    
    
    console.log(hotel)
    
    
      
  return (
    <ChakraProvider>
    <DIV>
        <InputHotel/>
        
        

        <HStack p="20px" justifyContent="space-evenly">
        <HStack w="70%" borderRadius="10px" m="20px" p="20px" border="1px solid #0071db">
            <Image borderRadius="10px" h="40%" w="40%" src={hotel.image}/>
            
            <Box p="30px" mt="0px" pl="50px" spacing="20px"  w="50%" textAlign="left">
                <Heading mb="30px" as="h2" size="lg" >{hotel.name}</Heading>
                <Heading mb="20px" size="md"><Icon as={FaLocationDot}/> Location : {hotel.location}  </Heading>
                <Heading mb="20px" size="md">
                    {star.map((ele)=>{
                        return <Icon size="xs" as={FaStar}/>
                    })}
                </Heading>
                <Text mb="20px">{hotel.description}</Text>
                
            </Box>
        </HStack>
            <Box  h="350px" borderRadius="10px" border="2px solid #0071db" w="30%">
                <Heading mt="10px" size="lg">Price BreakUp</Heading>
                <VStack>
                    <HStack mt="10px" w="90%" justifyContent="space-between">
                        <Text>Base Price</Text>
                        <Text>$ {hotel.price}</Text>
                    </HStack>
                </VStack>
                <VStack>
                    <HStack mt="10px" w="90%" justifyContent="space-between">
                        <Text>{guestDeatails.rooms} Room x {days+1} Night</Text>
                        <Text>$ {hotel.price*guestDeatails.rooms*days}</Text>
                    </HStack>
                </VStack>
                <VStack>
                    <HStack mt="10px" w="90%" justifyContent="space-between">
                        <Text>Total Discount</Text>
                        <Text>$ 641</Text>
                    </HStack>
                </VStack>
                <VStack>
                    <HStack mt="10px" w="90%" justifyContent="space-between">
                        <Text>Hotel taxes</Text>
                        <Text>$ 341</Text>
                    </HStack>
                </VStack>
                {/* <VStack>
                    <HStack mt="10px" w="90%" justifyContent="space-between">
                        <Text> <Checkbox/>Donate 15 towards flood relief efforts
in Himachal Pradesh.</Text>
                        <Text>$ {hotel.price}</Text>
                    </HStack>
                </VStack> */}
                <HStack onClick={()=>{dispatch({type:PAYMENT_DATA,payload:{type:"STAY",totalPrice:hotel.price*guestDeatails.rooms*(days+1)-641+341}});navigate("/payment")}} borderRadius="10px" m="10px" mt="60px" p="20px" color="white" backgroundColor="#0071db" w="90%" justifyContent="space-between">
                    <Heading size="md">
                        Total Amoun to be Paid
                    </Heading>
                    <Heading size="md">
                      $  {hotel.price*guestDeatails.rooms*(days+1)-641+341}
                    </Heading>
                </HStack>
            </Box>
            
        </HStack>
        <Box m="40px" color="orange" textAlign="left" p="50px" width="800px" border="2px dotted red">
            <Heading size="lg">Important Information</Heading>
        <UnorderedList color="grey" p="10px"  textAlign="left">
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
         </UnorderedList>

            </Box>
       

    </DIV>
    </ChakraProvider>
  )
}
const DIV=styled.div`

 
    
`