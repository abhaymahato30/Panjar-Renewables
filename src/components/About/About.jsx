import React from 'react';
import AboutSlider from '../AboutSlider';

const About = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-16 px-6 bg-gray-100">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2">
        <AboutSlider/>
      </div>

      {/* Right side: Paragraphs */}
      <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 mb-4">
          We are a passionate team of developers dedicated to creating high-quality, user-centered experiences. Our mission is to develop innovative solutions that make a real impact.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          With years of experience in web development, we specialize in building scalable applications that prioritize both performance and user experience. We believe in continuous learning and staying at the cutting edge of technology.
        </p>
        <p className="text-lg text-gray-600">
          Our approach is collaborative, and we work closely with our clients to understand their needs and bring their vision to life. Every project is an opportunity to make something amazing.
        </p>
      </div>
    </section>
  );
};

export default About;
