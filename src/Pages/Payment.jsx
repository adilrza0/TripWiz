
import { Box, Input, Flex, FormLabel, Text, Icon, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'; // Import the CSS for styling
import {BiCreditCardAlt} from 'react-icons/bi'
import {PiContactlessPaymentLight} from 'react-icons/pi'

export const Payment = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const price = localStorage.getItem("flight")
  const hotelprice = localStorage.getItem("hotelprice")


  console.log(price, hotelprice)


  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <Box w="85%" m="auto" mt="30px" mb="30px">
      <Text fontSize="3xl" fontWeight="bold" textAlign="left" mb="50px">Payment </Text>

      <Flex gap="5%" justifyContent="space-around">
      
      <Box  p={20}   w="100%" borderWidth="2px" borderRadius="10px" borderColor="#1071DB">
      <Text fontSize="xl" fontWeight="bold" textAlign="left">Payment Methods  </Text>
      <Box justifyContent="left" w="30%" gap="5%" mt="30px">
       <Icon alignItem="left" cursor={'pointer'} ml={2} w={12} h={12} as={BiCreditCardAlt}></Icon>
       <Icon alignItem="left" cursor={'pointer'} ml={2} w={12} h={12} as={PiContactlessPaymentLight}></Icon>
      </Box>
      

        <form>
          
          <Box mt="50px" >
            
            <Flex justifyContent="space-between" gap="5%">

              <Box w="100%">

              <FormLabel fontWeight="bold">Card Number</FormLabel>
              <Input
                //css
                display="inline"
                w="100%"
                borderColor="gray.300" // Border color
                borderWidth="1px" // Border width
                borderRadius="md" // Border radius
                boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"

                //css
                type="tel" // Use type="tel" for card numbers
                name="number"
                placeholder="Card Number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              </Box>
              <Box w="100%">

              <FormLabel>Card Holder Name</FormLabel>
              <Input
                //css
                boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"

                //css
                type="text"
                name="name"
                placeholder="Cardholder Name"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              </Box>

              </Flex>

          </Box>

          <Box mt="50px">
            
            <Flex justifyContent="space-between" gap="5%">

              <Box w="100%">
                <FormLabel>Expiry MM/YY</FormLabel>
                <Input
                  //css
                  boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"

                  //css
                  type="text"
                  name="expiry"
                  placeholder="MM/YY Expiry"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  />
              </Box>

              <Box w="100%">
                  
                <FormLabel>CVV</FormLabel>
                <Input
                  //css
                  boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                  //css
                  type="tel" // Use type="tel" for CVC
                  name="cvc"
                  placeholder="CVV"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Box>

              {/* <Button
                mt="30px"
                loadingText='Submitting'
                colorScheme='blue'
                variant='outline'
                w="50%"
              >
                Pay
              </Button> */}

            </Flex>
            <Text textAlign="left" fontSize="xs" mt="20px">
              By comforming payment you are approving our <span style={{color:"blue"}}>Terms & Conditions</span>
              and acknowledging our <span style={{color:"blue"}}>Privacy Policy</span>  Your Payment information and </Text>

              <Box>
                <Flex justifyContent="space-between">

                  <Button
                    mt="30px"
                    loadingText='Submitting'
                    colorScheme='red'
                    variant='outline'
                    w="30%"
                    borderRadius="20px"
                  >
                    Cancel
                  </Button>

                  <Button
                    mt="30px"
                    loadingText='Submitting'
                    colorScheme='green'
                    variant='outline'
                    w="40%"
                    borderRadius="20px"
                  >
                    Pay
                  </Button>
                  </Flex>
              </Box>

          </Box>

          

        </form>


      </Box>

      <Box bg="#1071DB"  p={10} w="70%" borderRadius="10px">

      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      </Box>
      </Flex>
    </Box>
  );
}
