import React, { useState } from 'react';
import a1 from '../assets/gallary/1.jpeg'
import a2 from '../assets/gallary/2.jpeg'
import a3 from '../assets/gallary/3.jpg'
import a4 from '../assets/gallary/4.jpg'
import a5 from '../assets/gallary/5.jpeg'
import a6 from '../assets/gallary/6.jpeg'
import a7 from '../assets/gallary/7.jpeg'
import a8 from '../assets/gallary/8.jpg'
import a9 from '../assets/gallary/9.jpg'




// Example image sources (replace these with your actual image URLs)
const images = [
  { id: 1, src:a1 , alt: 'Newspaper 1' },
  { id: 2, src:a2, alt: 'Certificate 1' },
  { id: 3, src:a3, alt: 'Newspaper 2' },
  { id: 4, src:a4, alt: 'Certificate 2' },
  { id: 5, src:a5, alt: 'Newspaper 3' },
  { id: 6, src:a6, alt: 'Certificate 3' },
  { id: 7, src:a7, alt: 'Certificate 3' },
  { id: 8, src:a8, alt: 'Certificate 3' },
  { id: 9, src:a9, alt: 'Certificate 3' },



  // Add more imas necessary
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Open the modal with the clicked image
  const openModal = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <section id="gallery" className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading for Newspaper Appearance */}
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Recognition</h2>

        {/* Grid Layout for 3 Images Per Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => openModal(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-80 h-60 object-cover transition-transform duration-500 group-hover:scale-105" // Medium size with fixed width and height
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Modal for Enlarged View */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div className="relative max-w-3xl p-4 bg-white rounded-lg shadow-lg">
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 p-2 text-white bg-red-600 rounded-full hover:bg-red-700"
              >
                ×
              </button>
              <img
                src={currentImage}
                alt="Enlarged View"
                className="max-w-full max-h-screen object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;