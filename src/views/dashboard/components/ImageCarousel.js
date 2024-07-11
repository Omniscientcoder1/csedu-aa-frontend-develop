// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css'; // Optional: For custom styles

const ImageCarousel = () => {
  const images = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
    '/path/to/image4.jpg',
    '/path/to/image5.jpg',
    '/path/to/image6.jpg',
  ];

  return (
    <div className="carousel-wrapper">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carousel slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
