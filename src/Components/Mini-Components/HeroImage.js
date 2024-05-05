import React, { useState, useEffect } from 'react';
import heroImage from '../../Assets/hero-picture.jpg';
import heroImage2 from '../../Assets/2.jpg';
import heroImage3 from '../../Assets/3.jpg';
import heroImage4 from '../../Assets/4.jpg';
import Navbar from './Navbar';

const HeroImage = () => {
  const images = [heroImage, heroImage2, heroImage3, heroImage4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ minHeight: '500px' }} className='w-auto relative '>
        <img className='w-full h-full object-cover absolute top-0 left-0 z-10'
          src={images[currentImageIndex]}
          alt={`Hero Image ${currentImageIndex + 1}`} />
        <div className='absolute top-0 left-0 w-full h-full bg-lime-900 opacity-45 z-20'></div>
      </div>
    </div>
  );
}

export default HeroImage;
