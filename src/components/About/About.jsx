import React from 'react';
<<<<<<< HEAD
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
=======
import light from '../../assets/About/light.jpg'
import site from '../../assets/About/site.jpg'
import train from '../../assets/About/train.jpg'
import train2 from '../../assets/About/train2.jpg'
import install from '../../assets/About/install.jpg'
const CompanyInfo = () => {
  return (
    <section id="company-info" className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Column (Images stacked vertically) */}
        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          {/* Image 1 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={light}
              alt="Project 1" 
              className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300" 
            />
          </div>

          {/* Image 2 */}
          {/* <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={site}
              alt="Project 2" 
              className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300" 
            />
          </div> */}

          {/* Image 3 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={train}
              alt="Project 3" 
              className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300" 
            />
          </div>
          
        </div>
        
        {/* Right Column (Company Info) */}
        <div className="w-full md:w-1/2 h-full md:pl-12 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center md:text-left">About Panjar Renewable</h2>

          {/* Company Overview */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Company Overview</h3>
            <p className="text-lg text-gray-700">
              <span className="font-bold text-blue-600">Founded at the BIT Sindri Incubation Center</span>, 
              <span className="font-medium text-gray-800"> Panjar Renewable is a dynamic startup</span> dedicated to advancing 
              <span className="font-bold text-green-600"> green energy</span> through innovative 
              <span className="font-medium text-gray-800"> solar technology</span>. The company's mission is to develop, design, and commercialize 
              <span className="font-bold text-blue-600"> solar appliances tailored for agricultural</span> and 
              <span className="font-bold text-blue-600"> small-scale industrial applications</span>, addressing specific needs in regions like 
              <span className="font-medium text-gray-800"> Jharkhand and Bihar.</span>
            </p>
          </div>

          {/* Mission */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              <span className="font-bold text-blue-600">To drive sustainable development</span> by designing and commercializing 
              <span className="font-bold text-green-600"> innovative solar appliances</span> that enhance 
              <span className="font-bold text-blue-600"> agricultural productivity</span> and support 
              <span className="font-bold text-blue-600"> small-scale industries</span>, while reducing reliance on 
              <span className="font-bold text-gray-800"> fossil fuels</span> and minimizing 
              <span className="font-bold text-green-600"> environmental impact</span>.
            </p>
          </div>

          {/* Vision */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700">
              <span className="font-bold text-blue-600">To be a leading provider of green energy solutions</span> in India, transforming 
              the <span className="font-bold text-blue-600">agricultural</span> and 
              <span className="font-bold text-blue-600"> small-scale industrial sectors</span> with cutting-edge 
              <span className="font-medium text-gray-800"> solar technology</span>, and contributing to a 
              <span className="font-bold text-green-600"> cleaner, more sustainable future</span>.
            </p>
          </div>

          {/* Core Objectives */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Objectives</h3>
            <ul className="text-lg text-gray-700 space-y-4 list-inside list-disc">
              <li><span className="font-bold text-blue-600">Enhance agricultural productivity</span> by developing solar-powered appliances specifically designed for farmers in rural areas.</li>
              <li><span className="font-bold text-blue-600">Support small-scale industries</span> through affordable, solar-based energy solutions, reducing costs and increasing efficiency.</li>
              <li><span className="font-bold text-green-600">Reduce reliance on fossil fuels</span> and help communities transition to renewable energy sources.</li>
              <li><span className="font-bold text-gray-800">Minimize environmental impact</span> through the design and implementation of energy-efficient solar technologies.</li>
              <li><span className="font-bold text-blue-600">Promote sustainable development</span> and economic growth in underserved regions like Jharkhand and Bihar.</li>
            </ul>
          </div>
        </div>
>>>>>>> 5b1c0c8 (Add existing project files prior to the push to GitHub.)
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default About;
=======
export default CompanyInfo;
>>>>>>> 5b1c0c8 (Add existing project files prior to the push to GitHub.)
