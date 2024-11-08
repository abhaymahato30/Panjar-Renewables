import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

function HeroTwo() {
  const ref = useRef(null); // Ref for canvas
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Scroll progress tracked
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'end start'], // Adjust offset as needed
  });

  // Memoize image loading
  const images = useMemo(() => {
    const loadedImages = [];
    const promises = [];

    for (let i = 1; i <= 42; i++) {
      const img = new Image();
      img.src = `/images/${i}.webp`;

      // Wait for images to load
      promises.push(
        new Promise((resolve) => {
          img.onload = () => resolve(img);
          img.onerror = (err) => resolve(null); // Handle image loading errors
        })
      );

      loadedImages.push(img);
    }

    // Wait for all images to load
    Promise.all(promises).then(() => {
      console.log('All images loaded');
    });

    return loadedImages;
  }, []);

  // Resize window listener
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Scroll to current image index transformation
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, 41]); // Maps to 42 images

  // Rendering function for image
  const render = useCallback(
    (index) => {
      if (images[index]) {
        const context = ref.current?.getContext('2d');
        if (context) {
          // Clear canvas before rendering new image
          context.clearRect(0, 0, size.width, size.height);
          context.drawImage(images[index], 0, 0, size.width, size.height); // Draw image stretched to canvas size
        }
      }
    },
    [images, size] // Dependencies include size to resize images accordingly
  );

  // On scroll change, trigger image render
  useMotionValueEvent(currentIndex, 'change', (latest) => {
    render(Math.floor(latest)); // Round index to the nearest integer
  });

  // Initial render when component mounts
  useEffect(() => {
    render(0); // Draw first image when component mounts
  }, [render]);

  return (
    <>
    <canvas
      width={size.width}  // Dynamically update width
      height={size.height} // Dynamically update height
      ref={ref}
      style={{ display: 'block', width: '100%', height: '100%' }} // Ensure the canvas fills the screen
    />
    <div className="z-10 md:w-1/2 md:h-2/5 p-10 -mt-96 absolute  md:right-0">
    <p className="text-xl md:text-4xl font-extrabold text-pink-100">When the sun shines, the world thrives. Let’s make the most of it with solar energy</p>
    </div>
    
    
    </>
    
  );
}

export default HeroTwo;

