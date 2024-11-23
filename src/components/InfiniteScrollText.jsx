import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const InfiniteScrollWords = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const containerWidth = container.scrollWidth / 2;

    // Start from the right side and animate to the left
    gsap.fromTo(
      container,
      { x: 0 },
      {
        x: -containerWidth,
        duration: 10,
        ease: 'none',
        repeat: -1,
        onRepeat: () => gsap.set(container, { x: 0 }),
      }
    );
  }, []);

  return (
    <div
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        background: 'linear-gradient(to bottom, #8e8e8e, #e5e7eb)', // Lighter dark at top and brighter white at bottom
        padding: '40px 0',  // Increased padding
        fontFamily: '"Montserrat", sans-serif',  // Applied Montserrat font family
        position: 'relative',
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: 'inline-flex',
          whiteSpace: 'nowrap',
          
        }}
      >
        {/* Simple words without any shiny effect */}
        <span style={simpleTextStyle}>Innovation</span>
        <span style={simpleTextStyle}>Sustainability</span>
        <span style={simpleTextStyle}>Energy</span>
        <span style={simpleTextStyle}>Future</span>

        {/* Duplicate the words for seamless scroll */}
        <span style={simpleTextStyle}>Innovation</span>
        <span style={simpleTextStyle}>Sustainability</span>
        <span style={simpleTextStyle}>Energy</span>
        <span style={simpleTextStyle}>Future</span>

        
        {/* Duplicate the words for seamless scroll */}
        <span style={simpleTextStyle}>Innovation</span>
        <span style={simpleTextStyle}>Sustainability</span>
        <span style={simpleTextStyle}>Energy</span>
        <span style={simpleTextStyle}>Future</span>
        {/* Duplicate the words for seamless scroll */}
        <span style={simpleTextStyle}>Innovation</span>
        <span style={simpleTextStyle}>Sustainability</span>
        <span style={simpleTextStyle}>Energy</span>
        <span style={simpleTextStyle}>Future</span>
        {/* Duplicate the words for seamless scroll */}
        <span style={simpleTextStyle}>Innovation</span>
        <span style={simpleTextStyle}>Sustainability</span>
        <span style={simpleTextStyle}>Energy</span>
        <span style={simpleTextStyle}>Future</span>
        {/* Duplicate the words for seamless scroll */}
        <span style={simpleTextStyle}>Innovation</span>
        <span style={simpleTextStyle}>Sustainability</span>
        <span style={simpleTextStyle}>Energy</span>
        <span style={simpleTextStyle}>Future</span>
      </div>
    </div>
  );
};

const simpleTextStyle = {
  marginRight: '3rem',  // Increased spacing between words
  fontSize: '2rem',     // Larger font size
  fontWeight: 'bold',
  color: '#ffffff',     // White text color
  display: 'inline-block',
};

export default InfiniteScrollWords;
