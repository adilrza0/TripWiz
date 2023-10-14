import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Image } from '@chakra-ui/react';


export const SlideImage = ({prop}) => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
  };


  
  const images = prop || []

  return (
      <Box maxWidth={{ base: '100%', lg: '50%' }} mt={{ base: '50px', md: '150px' }}>
        <Slider {...sliderSettings}>
          {images.length > 0 && images.map((image, index) => (
            <Box key={index}>
              <Image
                w={{ base: '100%', md: '700px' }} // Adjust the width for different screen sizes
                h={{ base: '100%', md: '400px' }}
                mb={{ base: '50px', md: '50px' }}
                mx="auto"
                borderRadius="lg"
                boxShadow="lg"
                src={image} alt={`Slide ${index + 1}`} />
            </Box>
          ))}
        </Slider>
      </Box>


  );
}
