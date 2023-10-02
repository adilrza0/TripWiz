import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Heading, Image, Text, Flex, Button, FormLabel, Input, Select } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  useParams, Link } from 'react-router-dom';
import { SlideImage } from './SlideImages';

export const Explore = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [allDestinations, setAllDestinations] = useState([]);

  useEffect(() => {
    getData(id);
  }, [id]);

  

  const getData = async (id) => {
    try {
      let res = await axios.get(`http://localhost:8080/destinations/${id}`);
      setDestination(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const findDestinationIndexById = (id) => {
    return allDestinations.findIndex((destination) => destination.id === id);
  };

  
  

  const currentIndex = findDestinationIndexById(parseInt(id));

  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  //const previousDestination = allDestinations[previousIndex];
  //const nextDestination = allDestinations[nextIndex];

  return (
    <div style={{width:"90%", margin:"auto"}}>
      <Heading as="h1" size="2xl" textAlign="left" mt="50px"><span style={{color:"#0C246C"}}>Holiday Package</span> to</Heading>
      {destination && (
        <Box p={6} w="100%" m="auto" mb="30px" mt="50px"  borderBottom="2px" borderRadius="20px" borderColor="#1071DB">
          <Flex gap="5%">
            <Box textAlign="left" w="100%" >
              <Heading as="h1" size="4xl">
              <span style={{color:"#1071DB"}}>{destination.name}</span>
              </Heading>
              <Text mt={5} fontSize="3xl" fontWeight="500">
                {destination.description}
              </Text>
              <Text mt={5} fontSize="2xl" fontWeight="400">
                {destination.about}
              </Text>
              
            </Box>
            <Box w="100%" textAlign="left" p={6} borderTop="2px" borderRadius="20px" borderColor="#1071DB">
              <Image
                src={destination.image}
                alt="TravelWorld Team"
                maxW="500px"
                mx="auto"
                borderRadius="lg"
                boxShadow="lg"
                mb="30px"
              />
              <Text ml="40px" fontSize="xl" mb="20px">Rating : {destination.rating}⭐</Text>
              <Text ml="40px" fontSize="xl" mb="20px"><span style={{color:"#1071DB"}}>{destination.name} </span> | by TripWiz</Text>
              <Text mt={5} fontSize="xl" fontWeight="400" ml="40px" mb="20px">
              <span style={{color:"green"}}>{destination.price}/-</span> for One Person
              </Text>

              
            </Box>
          </Flex>
        </Box>
      )}

      <Box>
        <Flex gap="5%">

        {destination && <SlideImage prop={destination.placeImages} />}

         
          <Box>
          {destination && (
            <Box w="90%" m="auto" mb="50px">
              <Heading as="h3" size="3xl" mt="50px" textAlign="left">
                Explore - {destination.name}
              </Heading>
              <Text mt={20} textAlign="left" lineHeight="35px" fontSize="lg">
                {destination.famous}
              </Text>
              <Text mt={20} textAlign="left" lineHeight="35px" fontSize="lg">
                {destination.history}
              </Text>
            </Box>
          )}
          </Box>
        </Flex>
       
      </Box>

      {/* Traveler Form Details */}
      <Box  p={20}   w="100%" borderWidth="2px" borderRadius="10px" borderColor="#1071DB">
      <Text fontSize="3xl" fontWeight="bold" textAlign="left">Traveler Details  </Text>

        <form>
          
          <Box mt="50px" >
            
            <Flex justifyContent="space-between" gap="5%">

              <Box w="100%">

              <FormLabel fontWeight="bold">Name</FormLabel>
              <Input
                //css
                display="inline"
                w="100%"
                borderColor="gray.300" // Border color
                borderWidth="1px" // Border width
                borderRadius="md" // Border radius
                boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"

                //css
                type="text" // Use type="tel" for card numbers
                name="name"
                placeholder="Name"
                value={state.number}
                
              />
              </Box>
              <Box w="100%">

              <FormLabel>Mobile Number</FormLabel>
              <Input
                //css
                boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"

                //css
                type="number"
                name="number"
                placeholder="Mobile Number"
                value={state.name}
                
              />
              </Box>

              <Box w="100%">

              <FormLabel>Email</FormLabel>
              <Input
                //css
                boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"

                //css
                type="email"
                name="email"
                placeholder="Email"
                value={state.name}
                
              />
              </Box>

              </Flex>

          </Box>

          <Box mt="50px" w="70%">
            
            <Flex justifyContent="space-between" gap="5%">

              <Box w="100%">
                <FormLabel>Gender</FormLabel>
                  <Select placeholder='Select option' colorScheme='blue' variant='outline' border="2px" borderColor="#1071BD">
                    <option value='option1'>Male</option>
                    <option value='option2'>Female</option>
                    
                  </Select>
              </Box>

              <Box w="100%">
                <FormLabel>No. Of Travlers</FormLabel>
                  <Select placeholder='Select option' colorScheme='blue' variant='outline' border="2px" borderColor="#1071BD">
                    <option value='option1'>1</option>
                    <option value='option2'>2</option>
                    <option value='option1'>3</option>
                    <option value='option2'>4</option>
                    
                  </Select>
              </Box>
              
              

            </Flex>

            <Box mt="50px">
                <Flex alignItems="center">
                  <Box flex="1">
                  <FormLabel>Day</FormLabel>
                    <Select
                      placeholder="Day"
                      //value={day}
                      //onChange={(e) => onDayChange(e.target.value)}
                    >
                      {Array.from({ length: 31 }, (_, index) => (
                        <option key={index} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </Select>
                  </Box>
                  <Text mx={2}>/</Text>
                  <Box flex="1">
                  <FormLabel>Month</FormLabel>
                    <Select
                      placeholder="Month"
                      //value={month}
                      //onChange={(e) => onMonthChange(e.target.value)}
                    >
                      {Array.from({ length: 12 }, (_, index) => (
                        <option key={index} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </Select>
                  </Box>
                  <Text mx={2}>/</Text>
                  <Box flex="1">
                  <FormLabel>Year</FormLabel>
                    <Select
                      placeholder="Year"
                      //value={year}
                      //onChange={(e) => onYearChange(e.target.value)}
                    >
                      {Array.from({ length: 100 }, (_, index) => (
                        <option key={index} value={2023 - index}>
                          {2023 - index}
                        </option>
                      ))}
                    </Select>
                  </Box>
                </Flex>
            </Box>

            <Box w="30%" mt="50px">
                  
                <FormLabel>Nationality</FormLabel>
                <Input
                  //css
                  boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                  //css
                  type="tel" // Use type="tel" for CVC
                  name="cvc"
                  placeholder="Nationality"
                  value={state.cvc}

                />
              </Box>

            <Box textAlign="left" mt="50px">
            <Link to={'/Payment'}>
              <Button width="30%"  colorScheme='blue' h={50} borderRadius="25px"  backgroundColor="#1071BD" color="white">
                Book Now
              </Button>

            </Link>
            </Box>
           
           

          </Box>

          

        </form>


      </Box>


      {/* Traveler Form Details */}


      <Box mb="50px" mt="50px">
        <Flex justifyContent="space-around">
          
            <Link to={`/Destinations/${+id-1}`}>
              <Button leftIcon={<ArrowBackIcon />} colorScheme='blue' borderRadius="20px" variant='outline'>
                Previous
              </Button>
            </Link>
          
            <Link to={`/Destinations/${+id+1}`}>
              <Button rightIcon={<ArrowForwardIcon />} colorScheme='blue' borderRadius="20px" variant='outline'>
                Next
              </Button>
            </Link>
            
        </Flex>
      </Box>
    </div>
  );
};
