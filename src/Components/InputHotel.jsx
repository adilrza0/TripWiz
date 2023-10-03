import { HStack, Input, VStack,Text, Heading, Button,Modal,ModalBody,ModalOverlay,ModalContent,ModalHeader ,ModalCloseButton,ModalFooter, useDisclosure } from '@chakra-ui/react'
import { SingleDatepicker } from 'chakra-dayzed-datepicker'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { parseDateTime } from '../FunctionalComponent/parseDate'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { UPDATE_CHECKIN, UPDATE_CHECKOUT, UPDATE_GUESTDETAILS, UPDATE_SEARCH } from '../Redux/actionType'
import { calculateDaysNights } from '../FunctionalComponent/difference'
import { useSearchParams } from 'react-router-dom'

export default function InputHotel({setTrig,trig}) {
    // const [search,setSearch]=useSearchParams()
    // const [se,setSe]=useState(search.get("se")||"")
    // const [trig,setTrig]=useState(false)
    const dispatch=useDispatch()
    const {checkin,checkout,guestDeatails}=useSelector(((store)=>store.hotelSearchReducer),shallowEqual)
    const {search}=useSelector(((store)=>store.hotelReducer),shallowEqual)
    const { isOpen, onOpen, onClose } =useDisclosure()

    
        
        
    

    const handleCheckin=(e)=>{
        const datedetails=parseDateTime(e.target.value)
        dispatch({type:UPDATE_CHECKIN,payload:datedetails})

    }
    const handleCheckout=(e)=>{
        const datedetails=parseDateTime(e.target.value)
        dispatch({type:UPDATE_CHECKOUT,payload:datedetails})

    }
    
  return (
    <DIV>
        <HStack borderRadius="20px" m="30px"  border="2px solid #0071db" justifyContent="space-evenly"  padding="1px">
            {!setTrig?<></>:
            <VStack h="110px" padding="10px" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" textAlign='start' >
                <Text ml="0px">Destnation</Text>
                
                <Input value={search||""} onChange={(e)=>dispatch({type:UPDATE_SEARCH,payload:e.target.value})} ></Input>
            </VStack>}
            <HStack h="110px" mt="19px" mb="19px" padding="20px" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" textAlign='start' >
                <VStack   >
                    <Text fontSize="12px">Check In</Text>
                    <HStack>
                    <Heading size="xs">{`${checkin.day} ${checkin.month} ${checkin.year}`}</Heading>
                    

                    <Input
                     
                    onChange={handleCheckin}
                    w="30px"
                    placeholder="Select Date and Time"
                    size="xs"
                    type="datetime-local"
                    /></HStack>
                    <Heading size="xs">{checkin.time}</Heading>
                </VStack>
                <VStack mr="20px" ml="20px">
                    <Text fontSize="12px">{calculateDaysNights(checkin,checkout).days} Days</Text>
                    <Text fontSize="12px">{calculateDaysNights(checkin,checkout).nights} Nights</Text>
                </VStack>
                <VStack>
                    <Text fontSize="12px">Check Out</Text>
                    <HStack>
                    <Heading size="xs">{`${checkout.day} ${checkout.month} ${checkout.year}`}</Heading>
                    

                    <Input
                    
                    onChange={handleCheckout}
                    w="30px"
                    placeholder="Select Date and Time"
                    size="xs"
                    type="datetime-local"
                    /></HStack>
                    <Heading size="xs">{checkout.time}</Heading>
                </VStack>
            </HStack>
            <VStack h="110px" padding="10px" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" textAlign='start' >
                    <Text>Room and Guests</Text>
                    <Button onClick={onOpen}>
                    <Heading  size="xs" >{guestDeatails.rooms} Room, {guestDeatails.adult} Adult, {guestDeatails.children} Child</Heading>
                    </Button>
                   
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody >
                            {/* <Lorem count={2} /> */}
                            <HStack mt="10px" justifyContent="space-between">
                                <Text >Rooms</Text>
                                <HStack>
                                <Button onClick={()=>dispatch({type:UPDATE_GUESTDETAILS,payload:{...guestDeatails,rooms:guestDeatails.rooms-1}})}>-</Button>
                                <Text>{guestDeatails.rooms}</Text>
                                <Button onClick={()=>dispatch({type:UPDATE_GUESTDETAILS,payload:{...guestDeatails,rooms:guestDeatails.rooms+1}})}>+</Button>
                                </HStack>

                            </HStack>
                            <HStack mt="10px"  justifyContent="space-between">
                                <Text>Adults</Text>
                                <HStack>
                                <Button onClick={()=>dispatch({type:UPDATE_GUESTDETAILS,payload:{...guestDeatails,adult:guestDeatails.adult-1}})}>-</Button>
                                <Text>{guestDeatails.adult}</Text>
                                <Button onClick={()=>dispatch({type:UPDATE_GUESTDETAILS,payload:{...guestDeatails,adult:guestDeatails.adult+1}})}>+</Button>
                                </HStack>

                            </HStack>
                            <HStack mt="10px"  justifyContent="space-between">
                                <Text>Children</Text>
                                <HStack>
                                <Button onClick={()=>dispatch({type:UPDATE_GUESTDETAILS,payload:{...guestDeatails,children:guestDeatails.children-1}})}>-</Button>
                                <Text >{guestDeatails.children}</Text>
                                <Button onClick={()=>dispatch({type:UPDATE_GUESTDETAILS,payload:{...guestDeatails,children:guestDeatails.children+1}})}>+</Button>
                                </HStack>

                            </HStack>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                            </Button>
                            {/* <Button variant='ghost'>Secondary Action</Button> */}
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
                </VStack>

            {setTrig?<Button onClick={()=>setTrig((prev)=>!prev)} colorScheme='blue'>Search Hotels</Button>:<></>}
        </HStack>

    </DIV>
  )
}
const DIV=styled.div`
/* position: -webkit-sticky;
  position: sticky; */
  /* top: 0; */
  background-color: #ffffff;
  padding-bottom: 20px;
  padding-top:5px;
  /* font-size: 20px; */


.dateInput{
   
}
.chakra-button .css-1mjviu4{
    background-color: #0071db;
}
    
`