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

  console.log(prop,"SlideImage")
  
  const images = prop || []
  
  console.log(images)
  return (
    <Box maxWidth="50%" mx="auto" mt="150px">
      <Slider {...sliderSettings}>

        {images.length>0 && images.map((image, index) => (
          <Box key={index}>
            <Image 
            w="700px"
            h="400px"
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
