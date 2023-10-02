import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Heading, Image, Text, Flex, Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';

export const Explore = () => {
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

  const previousDestination = allDestinations[previousIndex];
  const nextDestination = allDestinations[nextIndex];

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

              <Link to={'/Payment'}>
              <Button marginLeft="40%" colorScheme='blue' borderRadius="20px" variant='outline'>
                Book Now
              </Button>

            </Link>
            </Box>
          </Flex>
        </Box>
      )}

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
