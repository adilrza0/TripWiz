import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, SimpleGrid, Image, Button, Select, Flex } from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Destinations = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 9; // Number of items per page
  const [filterType, setFilterType] = useState(''); // State to store the selected filter type

  useEffect(() => {
    getData(page, perPage, filterType);
  }, [page, filterType]);

  const getData = async (page, perPage, filterType) => {
    try {
      let url = `https://tripwizapi.onrender.com/destinations?page=${1}&perPage=${5}`;
      if (filterType) {
        url += `&type=${filterType}`;
      }
      let res = await axios.get(url);
      setData(res.data);
      console.log(res);
      // Scroll to the top after fetching new data
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.log(error);
    }
  };

  const totalPages = Math.ceil(data.length / perPage);

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleFilterChange = (event) => {
    const selectedType = event.target.value;
    setFilterType(selectedType);
    setPage(1); // Reset page to 1 when changing the filter
  };

  return (
    <div>
      <Box p={4} w="90%" m="auto">
        <Box mt="50px">
          <Flex justifyContent="space-between" alignContent="center" direction={["column", "row"]} gap="10%">
            <Heading as="h1" size="2xl" mb={10} mt={10} textAlign="left">
              Popular <span style={{ color: "#1071BD" }}>Destinations</span>
            </Heading>
            <Select
              placeholder='Select option'
              mb={10}
              mt={10}
              colorScheme='blue'
              variant='outline'
              w={{ base: '100%', md: '25%' }}
              border="2px"
              borderColor="#1071BD"
              value={filterType}
              onChange={handleFilterChange}
            >
              <option value=''>All</option>
              <option value='beach'>Beach</option>
              <option value='city'>City</option>
              <option value='hills'>Hills</option>
            </Select>
          </Flex>
        </Box>

        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {data.slice((page - 1) * perPage, page * perPage).map((destination) => (
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
                <Text mt={4}>{destination.description}</Text>
                <Text mt={4}>{destination.rating}⭐</Text>
                <Link to={`/Destinations/${destination.id}`}>
                  <Button mt="30px" loadingText='Submitting' colorScheme='blue' variant='outline' w="50%"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Explore
                  </Button>
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* <Flex justifyContent="center" mt={4}>
          <Button onClick={prevPage} disabled={page === 1} colorScheme="blue" variant="outline" mr={2}>
            Previous
          </Button> */}
          {pageNumbers.map((pageNumber) => (
            <Button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              colorScheme="blue"
              variant={page === pageNumber ? 'solid' : 'outline'}
              mx={1}
              mt="50px"
              mb="50px"
            >
              {pageNumber}
            </Button>
          ))}
          {/* <Button onClick={nextPage} disabled={page === totalPages} colorScheme="blue" variant="outline">
            Next
          </Button>
        </Flex> */}
      </Box>
    </div>
  );
};
