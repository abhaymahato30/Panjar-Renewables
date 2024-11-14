import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper's CSS
import 'swiper/css/autoplay'; // Import Swiper's Autoplay module
import { animated } from 'react-spring'; // Assuming you're using react-spring for animations

import g1 from '../assets/gallery/1.jpg';
import g2 from '../assets/gallery/2.jpg';
import g3 from '../assets/gallery/3.jpg';
import g4 from '../assets/gallery/4.jpg';
import g5 from '../assets/gallery/5.jpg';
import g7 from '../assets/gallery/7.jpg';
import g8 from '../assets/gallery/8.jpg';
import g9 from '../assets/gallery/9.jpg';
import g10 from '../assets/gallery/10.jpg';
import g11 from '../assets/gallery/11.jpg';
import g12 from '../assets/gallery/12.jpg';
import g13 from '../assets/gallery/13.jpg';
import g14 from '../assets/gallery/14.jpg';
import g15 from '../assets/gallery/15.jpg';
import g16 from '../assets/gallery/16.jpg';

const GalleryComponent = ({ galleryAnimation }) => {
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null); // State to store Swiper instance

  // Example array of image URLs
  const images = [
    g1, g2, g3, g4, g5, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16
  ];

  // This function will be triggered when the Swiper instance is initialized
  const onSwiperInit = (swiper) => {
    setSwiperInstance(swiper); // Save the Swiper instance
  };

  // Functions to navigate Swiper
  const goToPrevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev(); // Navigate to the previous slide
    }
  };

  const goToNextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext(); // Navigate to the next slide
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <animated.div style={galleryAnimation} className="text-center">
        <h2 className="text-4xl font-bold text-blue-600">Our Gallery</h2>

        {/* Swiper Carousel */}
        <div className="relative mt-8">
          <Swiper
            ref={swiperRef} // Ref to access Swiper instance
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={false} // Disable default navigation buttons (we're using custom ones)
            pagination={{ clickable: true }}
            loop={true} // Makes the carousel loop
            autoplay={{
              delay: 1000, // 1 seconds for each slide
              disableOnInteraction: false, // Keeps autoplay active after user interaction
            }}
            onSwiper={onSwiperInit} // Get the Swiper instance when it's initialized
            className="my-swiper"
          >
            {/* Map through the images array */}
            {images.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imageUrl}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-80 object-cover rounded-lg" // Increased height
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Controls */}
          <div className="absolute top-1/2 z-10 left-0 transform -translate-y-1/2 pl-4">
            <button
              onClick={goToPrevSlide}
              className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 z-10 right-0 transform -translate-y-1/2 pr-4">
            <button
              onClick={goToNextSlide}
              className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default GalleryComponent;
