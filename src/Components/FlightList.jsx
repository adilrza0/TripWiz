import { Button, HStack, Heading, Image, VStack } from '@chakra-ui/react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
import React from 'react'
import styled from 'styled-components'

export default function FlightList({
    id,
    flight_number,
    image,
    airline,
    from_city,
    from_code,
    to_city,
    to_code,
    arrival,
    departure,
    duration,
    price,
    seats_available,
    layovers,
  }) {
  return (
    <DIV>
        <Image src={"./images/trip_wiz.png"} alt="" ></Image>
    <HStack justifyContent="space-evenly" className="flight-card">
        <VStack >
        <Image boxSize="50px" className="airline-logo" src={image} alt={airline} />
        <Heading  as='h3' size='md'>{airline}|{flight_number}</Heading>


        </VStack>
       
            <VStack>
                <Heading  as='h2' size='lg'>{departure}</Heading>
                <Heading as='h6' size='xs'>{from_city} ({from_code})</Heading>

            </VStack>
            <VStack>
                <Heading mr="30px" ml="30px" as='h3' size='md'>{duration}</Heading>
                <HStack>
                    <AiOutlineArrowLeft width="50px" />
                    
                    <AiOutlineArrowRight/>
                    
                </HStack>
            </VStack>
            <VStack>
                <Heading as='h2' size='lg' >{arrival}</Heading>
                <Heading as='h6' size='xs'>{to_city} ({to_code})</Heading>
            </VStack>
            <VStack>
                <Heading color="#1071DB" as='h4' size='md'>${price}</Heading>
                <Button color="white" bg="#fb9216">BOOK NOW</Button>

            </VStack>
        
  </HStack></DIV>
  )
}
const DIV=styled.div`
padding: 30px;
width: 800px;
margin: 30px;
background-color: #abd0f7;
border-radius:10px;

    
`
