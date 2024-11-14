import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSpring } from '@react-spring/web';

// import images 
import cooker from '../assets/products/cooker.jpg'
import dcsystem from '../assets/products/dcsystem.jpg'
import distilator from '../assets/products/distilator.jpg'
import dryer from '../assets/products/dryer.jpg'
import eycycle from '../assets/products/eycycle.jpg'



import grasscutter from '../assets/products/grasscutter.jpg'
import hat from '../assets/products/hat.jpg'
import lawngrass from '../assets/products/lawngrass.jpg'
import powersource from '../assets/products/powersource.jpg'
import tent from '../assets/products/tent.jpg'
import tree from '../assets/products/tree.jpg'
import spray from '../assets/products/spray.jpg'
import insect from '../assets/products/insect.jpg'
import bench from '../assets/products/bench.jpg'


import powerbank from '../assets/products/powerbank.jpg'

const Product = () => {
      // Create refs for each product card
      const p1 = useRef(null);
      const p2 = useRef(null);
      const p3 = useRef(null);
      const p4 = useRef(null); 
      const p5 = useRef(null);
      const p6 = useRef(null);
      const p7 = useRef(null); 
      const p8 = useRef(null);
      const p9 = useRef(null);
      const p10 = useRef(null);
      const p11 = useRef(null);
      const p12 = useRef(null);
      const p13 = useRef(null);
      const p14 = useRef(null);
      const p15 = useRef(null);
    
 


    const productAnimation = useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(20px)' }, config: { duration: 1000, delay: 200 } });
    useEffect(() => {
        // Animation for the first image
        gsap.fromTo(
        p12.current,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: p12.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
    
        // Animation for the second image
        gsap.fromTo(
          p13.current,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger:   p13.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.fromTo(
            p14.current,
            { scale: 0.9, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger:   p14.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          ); gsap.fromTo(
            p15.current,
            { scale: 0.9, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger:   p15.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        gsap.fromTo(
         p1.current,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger:   p1.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        ); 
        gsap.fromTo(
          p2.current,
           { scale: 0.9, opacity: 0 },
           {
             scale: 1,
             opacity: 1,
             duration: 1,
             scrollTrigger: {
               trigger:   p2.current,
               start: "top 80%",
               toggleActions: "play none none reverse",
             },
           }
         ); 
           gsap.fromTo(
          p3.current,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger:  p3.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );  
          gsap.fromTo(
          p4.current,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: p4.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.fromTo(
            p5.current,
             { scale: 0.9, opacity: 0 },
             {
               scale: 1,
               opacity: 1,
               duration: 1,
               scrollTrigger: {
                 trigger:   p5.current,
                 start: "top 80%",
                 toggleActions: "play none none reverse",
               },
             }
           ); 
           gsap.fromTo(
             p6.current,
              { scale: 0.9, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                  trigger:   p6.current,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              }
            ); 
              gsap.fromTo(
             p7.current,
             { scale: 0.9, opacity: 0 },
             {
               scale: 1,
               opacity: 1,
               duration: 1,
               scrollTrigger: {
                 trigger:  p7.current,
                 start: "top 80%",
                 toggleActions: "play none none reverse",
               },
             }
           );  
             gsap.fromTo(
             p8.current,
             { scale: 0.9, opacity: 0 },
             {
               scale: 1,
               opacity: 1,
               duration: 1,
               scrollTrigger: {
                 trigger: p8.current,
                 start: "top 80%",
                 toggleActions: "play none none reverse",
               },
             }
           );
           gsap.fromTo(
            p9.current,
             { scale: 0.9, opacity: 0 },
             {
               scale: 1,
               opacity: 1,
               duration: 1,
               scrollTrigger: {
                 trigger:   p9.current,
                 start: "top 80%",
                 toggleActions: "play none none reverse",
               },
             }
           ); 
           gsap.fromTo(
             p10.current,
              { scale: 0.9, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                  trigger:   p10.current,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              }
            ); 
              gsap.fromTo(
             p12.current,
             { scale: 0.9, opacity: 0 },
             {
               scale: 1,
               opacity: 1,
               duration: 1,
               scrollTrigger: {
                 trigger:  p12.current,
                 start: "top 80%",
                 toggleActions: "play none none reverse",
               },
             }
           );  
             gsap.fromTo(
             p11.current,
             { scale: 0.9, opacity: 0 },
             {
               scale: 1,
               opacity: 1,
               duration: 1,
               scrollTrigger: {
                 trigger: p11.current,
                 start: "top 80%",
                 toggleActions: "play none none reverse",
               },
             }
           );
      }, []);
 
 
 
 
 
    return (
      <div style={productAnimation} className="text-center">
      <h2 className="text-4xl font-bold text-blue-600">Our Products</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Product Card */}
        <div ref={p1} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={cooker} alt="Product 1" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-green-600">SOLAR COOKER</span>
            </h3>
            <p className="mt-2 text-gray-600">
              A <span className="text-green-600">solar-powered</span> cooker ideal for use in <span className="text-blue-600">rural</span> and off-grid areas to reduce dependency on traditional fuels.
            </p>
          </div>
        </div>
    
        {/* Product Card */}
        <div ref={p2} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={distilator} alt="Product 2" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-blue-600">SOLAR DISTILLATOR</span>
            </h3>
            <p className="mt-2 text-gray-600">
              A <span className="text-blue-600">solar distiller</span> designed to optimize sunlight for <span className="text-green-600">herb</span> and <span className="text-blue-600">distilled water extraction</span>, ideal for small-scale industries.
            </p>
          </div>
        </div>
    
        {/* Product Card */}
        <div ref={p3} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={dryer} alt="Product 3" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-green-600">HYBRID SOLAR DRYER</span>
            </h3>
            <p className="mt-2 text-gray-600">
              A <span className="text-blue-600">solar-powered</span> dryer for efficiently processing <span className="text-green-600">farm produce</span>, reducing spoilage and enhancing quality.
            </p>
          </div>
        </div>
    
        {/* Product Card */}
        <div ref={p4} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={hat} alt="Product 4" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-blue-600">SOLAR CAP</span>
            </h3>
            <p className="mt-2 text-gray-600">
              The <span className="text-blue-600">Solar Cap</span> is a wearable, <span className="text-green-600">solar-powered</span> accessory equipped with small panels that charge <span className="text-blue-600">devices</span> on the go. Perfect for <span className="text-blue-600">outdoor activities</span>, it combines convenience with <span className="text-green-600">sustainable energy</span>.
            </p>
          </div>
        </div>
    
        {/* Product Card */}
        <div ref={p5} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={dcsystem} alt="Product 5" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-green-600">DC SOLAR SYSTEM</span>
            </h3>
            <p className="mt-2 text-gray-600">
              A small <span className="text-blue-600">solar lamp</span>, compact, portable, and ideal for <span className="text-blue-600">indoor</span> or outdoor use. It charges during the day and provides <span className="text-green-600">eco-friendly illumination</span> at night.
            </p>
          </div>
        </div>
    
        {/* Product Card */}
        <div ref={p6} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={eycycle} alt="Product 6" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-blue-600">EV CYCLE</span>
            </h3>
            <p className="mt-2 text-gray-600">
              An <span className="text-blue-600">eco-friendly</span> <span className="text-green-600">electric cycle</span> powered by <span className="text-blue-600">solar energy</span>, designed for efficient and <span className="text-green-600">sustainable transportation</span>.
            </p>
          </div>
        </div>
    
        {/* Product Card */}
        <div ref={p7} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={lawngrass} alt="Product 7" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-green-600">LAWN GRASS CUTTER</span>
            </h3>
            <p className="mt-2 text-gray-600">
              A compact, <span className="text-green-600">solar-powered</span> lawn cutter ideal for small to medium-sized <span className="text-blue-600">lawns</span>. It provides an <span className="text-green-600">eco-friendly solution</span> for lawn maintenance.
            </p>
          </div>
        </div>
    
        {/* Product Card */}
        <div ref={p8} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={powersource} alt="Product 8" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-blue-600">POWER SOURCE</span>
            </h3>
            <p className="mt-2 text-gray-600">
              A <span className="text-blue-600">solar energy source</span> designed to power various <span className="text-green-600">farm</span> and industrial tools like pumps and machinery.
            </p>
          </div>
        </div>
    
        {/* Product Card */}
        <div ref={p9} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={grasscutter} alt="Product 9" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-green-600">HAND HELD GRASS CUTTER</span>
            </h3>
            <p className="mt-2 text-gray-600">
              A robust, <span className="text-green-600">solar-powered</span> tool for larger <span className="text-blue-600">lawns</span> and tougher vegetation. Its ergonomic design ensures easy handling, providing an <span className="text-green-600">eco-friendly landscaping solution</span>.
            </p>
          </div>
        </div>
    
        {/* Product Card */}
        <div ref={p10} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={tree} alt="Product 10" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-green-600">SOLAR TREE</span>
            </h3>
            <p className="mt-2 text-gray-600">
              A <span className="text-blue-600">A solar-powered tree </span> structure that captures sunlight efficiently to power urban utilities like charging stations and lighting <span className="text-green-600">A perfect blend of technology and nature.

</span>
            </p>
          </div>
        </div>
    
        {/* Product Card */}
        <div ref={p11} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={tent} alt="Product 11" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-blue-600">SOLAR TENT</span>
            </h3>
            <p className="mt-2 text-gray-600">
              A <span className="text-blue-600">An eco-friendly shelter</span> equipped with solar panels to generate power for lighting and charging small devices <span className="text-green-600">Perfect for camping </span>  off-grid use.
            </p>
          </div>
        </div>
    
        {/* Product Card */}
        <div ref={p12} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={powerbank} alt="Product 12" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-blue-600">SOLAR POWER BANK</span>
            </h3>
            <p className="mt-2 text-gray-600">
              A <span className="text-blue-600">solar-powered</span> power bank that can charge your <span className="text-green-600">smartphone</span> and other devices while outdoors or in off-grid locations.
            </p>
          </div>
        </div>
    
        {/* Product Card */}
        <div ref={p13} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={spray} alt="Product 13" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-green-600">SOLAR SPRAYER</span>
            </h3>
            <p className="mt-2 text-gray-600">
              A <span className="text-green-600">solar-powered sprayer</span> that efficiently applies <span className="text-blue-600">fertilizers</span> and pesticides, reducing fuel use and emissions.
            </p>
          </div>
        </div>
    
        {/* Product Card */}
        <div ref={p14} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={bench} alt="Product 14" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-blue-600">SMART BENCH</span>
            </h3>
            <p className="mt-2 text-gray-600">
              A <span className="text-blue-600">solar-powered</span> bench with USB charging ports and Wi-Fi, providing a smart, sustainable solution for public spaces.
            </p>
          </div>
        </div>
    
        {/* Product Card */}
        <div ref={p15} className="product-card bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={insect} alt="Product 15" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              <span className="text-green-600">SOLAR INSECT TRAP</span>
            </h3>
            <p className="mt-2 text-gray-600">
              The <span className="text-green-600">solar-powered</span> insect trap attracts and captures <span className="text-blue-600">harmful pests</span>, offering a chemical-free, eco-friendly solution for <span className="text-green-600">sustainable farming</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    
    
  )
}

export default Product