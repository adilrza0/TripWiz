import React from 'react';
import { Box, Flex, Image, Text,Icon } from '@chakra-ui/react';
//import {  } from '@chakra-ui/icons';
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { TfiYoutube, TfiEmail,TfiLocationPin } from "react-icons/tfi";
import { SiAmericanexpress } from "react-icons/si";

export const Footer = () => {
  return (
    <Box>
    <Box   w="90%" m="auto" borderBottom="1px solid">
      <Flex
        maxW="1200px"
        mx="auto"
        px="4"
        justifyContent="space-between"
        flexWrap="wrap"
        gap="2%"
      >
        <Box flex="1" mb="4">
          <Flex alignItems="center">
            <Box mr="2" w="30%">
              <Image src="https://i.ibb.co/DVQLYVm/logo-color.png" alt="" w="100%" />
            </Box>
            <Text fontSize="3xl" fontWeight="bold">
              Outdoor Life
            </Text>
          </Flex>
          <Text mt="4" textAlign="left" fontSize="sm">
            Outdoor Life is a digital service where you can book your local & international trips
            with the cheapest costs. It includes hotel booking & services by which you can get a
            complete trip package without any hustle for those services individually. We have
            various payment methods which are completely secured by our website. So what are you
            waiting for? Choose your plan today.
          </Text>
          <Box w="60%" m="auto" mt="20px" ml="0">
          <Flex justifyContent="space-between" >
          <Icon cursor={'pointer'} ml={2} w={6} h={6} as={FaFacebook}/>
          <Icon cursor={'pointer'} ml={2} w={6} h={6} as={FaTwitter}/>
          <Icon cursor={'pointer'} ml={2} w={6} h={6} as={FaInstagram}/>
          <Icon cursor={'pointer'} ml={2} w={6} h={6} as={TfiYoutube}/>
          </Flex>
          </Box>
        </Box>

        <Box flex="1" mb="4"  mt="30px">
          <Flex justifyContent="space-around">
          <Box textAlign="left">
            <Text cursor={'pointer'} fontSize="2xl" mb="20px">Company</Text>
            <Text cursor={'pointer'} fontSize="sm" mb="10px" >Home</Text>
            <Text cursor={'pointer'} fontSize="sm" mb="10px">Destinations</Text>
            <Text cursor={'pointer'} fontSize="sm" mb="10px">Bookings</Text>
            <Text cursor={'pointer'} fontSize="sm" mb="10px">Reviews</Text>
            <Text cursor={'pointer'} fontSize="sm" mb="10px">Contact Us</Text>
          </Box>

          <Box  textAlign="left">
            <Text  cursor={'pointer'} fontSize="2xl" mb="20px">More</Text>
            <Text cursor={'pointer'} fontSize="sm" mb="10px">Packages</Text>
            <Text cursor={'pointer'} fontSize="sm" mb="10px">Blogs</Text>
            <Text cursor={'pointer'} fontSize="sm" mb="10px">Suport</Text>
            <Text cursor={'pointer'} fontSize="sm" mb="10px">Our Partners</Text>
          </Box>
          </Flex>
        
        </Box>

        <Box flex="1" mb="4" mt="30px" pl="4%">
        <Text fontSize="2xl" textAlign="left" mb="20px">Contact Us</Text>
          <Box  mb="10px">
            <Flex gap="5%">
              <Icon as={TfiEmail}/>
              <Text fontSize="sm">Outdoorlife@gamil.com</Text>
            </Flex>
          </Box>
          <Box mb="10px">
            <Flex gap="5%">
              <Icon  as={FaPhoneAlt}/>
              <Text fontSize="sm">(022) 2262 5525</Text>
            </Flex>
          </Box>
          <Box mb="10px">
            <Flex gap="5%">
              <Icon as={TfiLocationPin}/>
              <Text fontSize="sm" w="70%" textAlign="left">Corner of Rustom Sidhwa Marg & D.N.Road, Fort</Text>
            </Flex>
          </Box>

          <Box w="70%" mt="20px">
          <Text fontSize="2xl" textAlign="left" mb="20px" borderBottom="2px solid">Payment Options</Text>
          </Box>
         
          <Box w="60%" m="auto" mt="20px" ml="0">
          <Flex justifyContent="space-between">
          <Icon cursor={'pointer'} ml={2} w={12} h={12} as={FaCcVisa}/>
          <Icon cursor={'pointer'} ml={2} w={12} h={12} as={FaCcMastercard}/>
          <Icon cursor={'pointer'} ml={2} w={12} h={12} as={SiAmericanexpress}/> 
          </Flex>
          </Box>
        </Box>

      </Flex>
    </Box>

    <Box w="90%" m="auto" >
      <Flex justifyContent="space-between" gap="10%" pt="5px">
        <Box>
          <Text>Copyright @ Outdoot Life. All rights Reserved</Text>
        </Box>
        <Box>
          <Text>Terms & Conditions | Cookies Polcy | Privacy Polcy</Text>
        </Box>
      </Flex>
    </Box>


   </Box>
  );
};
