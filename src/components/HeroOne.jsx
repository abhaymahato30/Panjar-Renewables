<<<<<<< HEAD
import Carousel from 'react-bootstrap/Carousel';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function CarouselFadeExample() {


  useGSAP(
    () => {
        // gsap code here...
        gsap.from("p", { 

        opacity:0,
        y:-30,
        delay:1,
        duration:1



         }); 
         
         
       
    }
);

  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="h-screen w-screen" src="https://images.unsplash.com/photo-1491677533189-49af044391ed?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Carousel.Caption className="top-32 md:top-1/2">
        <p className="text-3xl md:text-4xl font-extrabold">The sun's energy is endless—let’s harness it to power a sustainable future for generations to come</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="h-screen w-screen" src="https://plus.unsplash.com/premium_photo-1678743133487-d501f3b0696b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Carousel.Caption className="top-32 md:top-1/2">
          
          <p className="text-3xl md:text-4xl font-extrabold">When the sun shines, the world thrives. Let’s make the most of it with solar energy</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="h-screen w-screen" src="https://images.unsplash.com/photo-1463173904305-ba479d2123b7?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" text="Third slide" />
        <Carousel.Caption className="top-32 md:top-1/2">
                    <p className="text-3xl md:text-4xl font-extrabold">
                    Every ray of sunlight is an opportunity for a cleaner, greener world. Let’s seize that opportunity
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
=======
import React, { useState, useEffect } from 'react';
import home1 from '../assets/general/home1.jpg'
import home2 from '../assets/general/home2.jpg'
import home3 from '../assets/general/home3.jpg'






const HeroOne = () => {
  // Array of images
  const images = [
    home1,
    home2,
    home3
  ];

  // State to track the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Handle clicking on an indicator
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide effect (optional)
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative min-h-screen overflow-hidden rounded-lg md:h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={image}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-500"
            }`}
            aria-current={index === currentIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

     
    </div>
  );
};

export default HeroOne;
>>>>>>> 5b1c0c8 (Add existing project files prior to the push to GitHub.)
