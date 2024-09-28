// src/components/Slideshow.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import './Slideshow.css'; // Import CSS for animation

const images = [
  {
    src: 'path/to/image1.jpg', // replace with your image paths
    text: 'Unichef: Your food delivery solution!',
  },
  {
    src: 'path/to/image2.jpg',
    text: 'Delicious meals from your favorite restaurants!',
  },
  {
    src: 'path/to/image3.jpg',
    text: 'Fast and reliable delivery for students!',
  },
];

const Slideshow = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.7,
            animation: `slide 30s infinite`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" color="orange" sx={{ textShadow: '1px 1px 2px black' }}>
            {image.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Slideshow;
