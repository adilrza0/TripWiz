import React, { useState, useEffect } from 'react';
import { Box, Heading,  Text, SimpleGrid, Image, Button, Select, Flex, ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Footer } from '../Components/Footer';
//import { SlideImage } from '../components/SlideImage';



export const Destinations = () => {
  const [data , setData] = useState([]);

  useEffect(()=>{
    getData(2)
  },[])

  const getData = async ()=> {
    try {
      let res = await axios.get(`http://localhost:8080/destinations`)
      setData(res.data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
    <Box p={4} w="90%" m="auto">
      <Box>
        <Flex justifyContent="space-between" alignContent="center">

        
        <Heading as="h1" size="2xl" mb={10} mt={10} textAlign="left">
        Popular <span style={{color:"#1071BD"}}>Destinations</span>
        </Heading>

        <Select placeholder='Select option' mb={10} mt={10} colorScheme='blue' variant='outline' w="20%" border="2px" borderColor="#1071BD">
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>

        </Flex>
      </Box>
      

      {/* <SlideImage/> */}
      <SimpleGrid columns={[1, 2, 3]} spacing={4} >
        {data.length>0 && data.map(destination => (
          <Box key={destination.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Box p={4}>
                <Image
                  src={destination.image}
                  alt="TravelWorld Team"
                  maxW="500px"
                  mx="auto"
                  maxH="280px"
                  borderRadius="lg"
                  boxShadow="lg"
                />
              <Heading as="h2" size="lg" mt={4}>
                {destination.name}
              </Heading>
              <Text mt={4} >
                {destination.description}
              </Text>
              <Text mt={4}>
                {destination.rating}⭐
              </Text>

              <Link to={`/Destinations/${destination.id}`}>
              <Button
                mt="30px"
                loadingText='Submitting'
                colorScheme='blue'
                variant='outline'
                w="50%"

              >
                Explore
              </Button>

              </Link>

              
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      
    </Box>


      <ChakraProvider>
        <Footer/>
      </ChakraProvider>

   </div>
  );
};

