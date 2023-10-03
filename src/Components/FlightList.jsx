import { Button, HStack, Heading, Image, VStack,Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    UnorderedList,
    ListItem,Text
     } from "@chakra-ui/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import React, { useState } from "react";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";

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
      <Image src={"./images/trip_wiz.png"} alt=""></Image>
      <HStack justifyContent="space-between" className="flight-card">
        <VStack pr="10px" borderRight="1px solid #1071DB">
          <Image
            boxSize="50px"
            className="airline-logo"
            src={image}
            alt={airline}
          />
          <Heading as="h3" size="xs">
            {airline} | {flight_number}
          </Heading>
        </VStack>
        {/* **************************************************** */}
        <VStack>
        <HStack>
        <VStack>
          <Heading as="h2" size="md">
            {departure}
          </Heading>
          <Heading as="h6" fontSize="11px">
            {from_city} ({from_code})
          </Heading>
        </VStack>

        <VStack>
          <Heading mr="30px" ml="30px" as="h3" size="xs">
            {duration}
          </Heading>
          <HStack>
            <AiOutlineArrowLeft className="adi" />
            
            <Image
              w="20px"
              src="https://i.ibb.co/CPZYCk7/icons8-plane.gif"
            ></Image>
            <AiOutlineArrowRight />
          </HStack>
        </VStack>
        <VStack>
          <Heading as="h2" size="md">
            {arrival}
          </Heading>
          <Heading as="h6" fontSize="11px">
            {to_city} ({to_code})
          </Heading>
        </VStack>
        </HStack>
        <HStack mt="20px" p="20px">
        <Popover>
        <PopoverTrigger>
            <Button className="detailButton" size="xs">Flight details</Button>
        </PopoverTrigger>
        <PopoverContent>
            <PopoverArrow />
           
            
            <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
        </PopoverContent>
        </Popover>
        <Popover>
        <PopoverTrigger>
            <Button className="detailButton" size="xs">Fare Info</Button>
        </PopoverTrigger>
        <PopoverContent>
            <PopoverArrow />
           
            <PopoverBody>
                <VStack>
                    <HStack className="fare" >
                        <Text>Base Fare</Text>
                        <Text>$ {price}</Text>
                        
                    </HStack>
                    <HStack className="fare">
                        <Text>Taxes and Fees</Text>
                        <Text>$120</Text>
                        
                    </HStack>
                    <HStack className="fare" >
                        <Text>Total Fare </Text>
                        <Text>$ {price+120}</Text>
                        
                    </HStack>
                    

                </VStack>
            </PopoverBody>
        </PopoverContent>
        </Popover>
            
        <Popover>
        <PopoverTrigger>
            <Button className="detailButton" size="xs">Refund</Button>
        </PopoverTrigger>
        <PopoverContent>
            <PopoverArrow />
            
            
            <PopoverBody >
                <UnorderedList spacing="10px"  textAlign="start">
                    <ListItem>Refunds are subject to airline policies.</ListItem>
                    <ListItem>Eligible cancellations will be refunded to the original payment method.</ListItem>
                    <ListItem>Refunds may take [number of days] to process.</ListItem>
                    <ListItem>Applicable fees may be deducted.</ListItem>
                    <ListItem>Refer to the airline's refund guidelines for details.</ListItem>
                </UnorderedList>
            </PopoverBody>
        </PopoverContent>
        </Popover>
           
        </HStack>
        </VStack>
        {/* **************************************************** */}
        <VStack pl="10px" borderLeft="1px solid #1071DB">
          <Heading color="#1071DB" as="h4" size="md">
            ${price}
          </Heading>
          <Link to={`/flightcart/${id}`}>
            <Button colorScheme="blue">
              BOOK NOW
            </Button>
          </Link>
        </VStack>
      </HStack>
    </DIV>
  );
}
const DIV = styled.div`
  padding: 30px;
  width: 800px;
  margin: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #1071db;
  .adil {
    width: 100px;
  }
  .detailButton{
    background-color: #d8e7f7;
    color: #1071db;
  }

  .fare{
    justify-content: space-between;
    font-size: 10px;
    text-align: justify;
  }
  
    .css-kkv1yt{
        font-size: 13px;

    }

    
`;
