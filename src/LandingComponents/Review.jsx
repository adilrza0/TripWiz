import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Footer } from '../Components/Footer';
import Pagination from '../Components/Pagination';
import './Home.css';

const pageSize = 8; // Number of cards per page

const Review = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Generate an array of cards for the current page
  const renderCards = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Array of card data
    const cardData = [
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Zoellick%2C_Robert_%28official_portrait_2008%29.jpg/330px-Zoellick%2C_Robert_%28official_portrait_2008%29.jpg',
          name: 'Mr. Andrew',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/330px-Tom_Cruise_by_Gage_Skidmore_2.jpg',
          name: 'Mr. Tom Cruise',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nicole_Kidman_2_%2829900987478%29.jpg/330px-Nicole_Kidman_2_%2829900987478%29.jpg',
          name: 'Nicole Kidman',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sebastian_Stan_by_Gage_Skidmore_2_%28cropped%29.jpg/330px-Sebastian_Stan_by_Gage_Skidmore_2_%28cropped%29.jpg',
          name: 'Sebastian Stan',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Zoellick%2C_Robert_%28official_portrait_2008%29.jpg/330px-Zoellick%2C_Robert_%28official_portrait_2008%29.jpg',
          name: 'Mr. Andrew',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/330px-Tom_Cruise_by_Gage_Skidmore_2.jpg',
          name: 'Mr. Tom Cruise',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nicole_Kidman_2_%2829900987478%29.jpg/330px-Nicole_Kidman_2_%2829900987478%29.jpg',
          name: 'Nicole Kidman',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sebastian_Stan_by_Gage_Skidmore_2_%28cropped%29.jpg/330px-Sebastian_Stan_by_Gage_Skidmore_2_%28cropped%29.jpg',
          name: 'Sebastian Stan',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Zoellick%2C_Robert_%28official_portrait_2008%29.jpg/330px-Zoellick%2C_Robert_%28official_portrait_2008%29.jpg',
          name: 'Mr. Andrew',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/330px-Tom_Cruise_by_Gage_Skidmore_2.jpg',
          name: 'Mr. Tom Cruise',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nicole_Kidman_2_%2829900987478%29.jpg/330px-Nicole_Kidman_2_%2829900987478%29.jpg',
          name: 'Nicole Kidman',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sebastian_Stan_by_Gage_Skidmore_2_%28cropped%29.jpg/330px-Sebastian_Stan_by_Gage_Skidmore_2_%28cropped%29.jpg',
          name: 'Sebastian Stan',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://igimages.gumlet.io/hindi/gallery/actor/purabkohli/purab_poster.jpg?w=240&dpr=1.3',
          name: 'xaviour stan',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://igimages.gumlet.io/hindi/gallery/actor/arjanbajwa/arjun_poster.jpg?w=240&dpr=1.3',
          name: 'Paul hardy',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://igimages.gumlet.io/hindi/gallery/actor/aamirkhan/amir_poster.jpg?w=240&dpr=1.3',
          name: 'Kinder john',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://igimages.gumlet.io/hindi/gallery/actor/ranveersingh/ranveer_poster.jpg?w=240&dpr=1.3',
          name: 'Stan Maely',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://igimages.gumlet.io/hindi/gallery/actor/hrithikroshan/roshan_poster.jpg?w=240&dpr=1.3',
          name: 'Andrew stinphon',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://igimages.gumlet.io/hindi/gallery/actor/salmankhan/poster.jpg?w=240&dpr=1.3',
          name: 'Henry cavil',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://igimages.gumlet.io/hindi/gallery/actor/sachiinjoshi/joshi_poster.jpg?w=240&dpr=1.3',
          name: 'Sachin Joshi',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        {
          image:
            'https://igimages.gumlet.io/hindi/gallery/actor/arjunkapoor/poster.jpg?w=240&dpr=1.3',
          name: 'Herry Boston',
          stars: 5,
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit laudantium porro molestiae iure! Id, dolorem possimus ex aliquam voluptates officiis eos perferendis nesciunt enim aut natus esse, praesentium libero.',
        },
        // Add more card data here...
      ];
      

    return cardData.slice(startIndex, endIndex).map((card, index) => (
      <div className="card" key={index}>
        <img src={card.image} alt="" />
        <h3>{card.name}</h3>
        <div className="star">
          {Array.from({ length: card.stars }, (_, i) => (
            <AiFillStar key={i} />
          ))}
        </div>
        <p>{card.text}</p>
      </div>
    ));
  };

  return (
    <div>
      <div className="customerr">
        <h1 className="review">Reviews</h1>
      </div>
      <div className="customer-main">{renderCards()}</div>
      <br />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(20 / pageSize)} // Assuming you have 20 cards in total
        updatePage={handlePageChange}
     
      />
      <Footer />
    </div>
  );
};

export default Review;
