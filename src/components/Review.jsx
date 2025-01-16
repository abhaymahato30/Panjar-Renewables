import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Review = () => {
  const reviewRef = useRef([]);

  const reviewData = [
    {
      quote: "I recently started using Panjar's solar dryer, and it’s been a game-changer for my farm. I can now dry produce quickly without depending on electricity, which is often unreliable in my area. It's cost-effective and easy to use, and it’s saving me so much money. Highly recommend it to other small farmers!",
      author: "Rohit Kumar",
      position: "Small Farmer, Bihar",
      highlight: "solar dryer, cost-effective"
    },
    {
      quote: "Panjar Renewables has created a wonderful range of solar-powered solutions. Their EV charging stations and streetlights are not only eco-friendly but also very efficient. We had their solar lights installed in our local market, and the difference in energy costs is remarkable!",
      author: "Aditi Sharma",
      position: "Municipal Coordinator, Jharkhand",
      highlight: "solar-powered solutions, eco-friendly"
    },
    {
      quote: "From initial consultation to post-installation support, Panjar's team has been fantastic. I purchased their solar distiller for essential oils, and it’s both functional and sustainable. I love that they tailored it to meet my needs perfectly. Can’t wait to try their new products!",
      author: "Anjali Mehta",
      position: "Essential Oil Producer, Odisha",
      highlight: "solar distiller, functional, sustainable"
    },
    {
      quote: "We use Panjar's solar-powered water pumps on our farm, and they have been incredibly effective. Not only do they reduce our reliance on diesel, but they’ve also cut down costs. It’s great to have a reliable product that’s designed for our needs in the local climate.",
      author: "Suresh Patel",
      position: "Farmer, Uttar Pradesh",
      highlight: "solar-powered water pumps, reduce reliance on diesel"
    },
    {
      quote: "Running a small manufacturing unit, energy costs are a big concern for us. Panjar’s solar power sources have helped us cut down our electricity bills significantly. Their team is knowledgeable, and the installation was seamless. I’d recommend Panjar to anyone looking to adopt green energy.",
      author: "Vikas Jain",
      position: "Small Business Owner, Jharkhand",
      highlight: "solar power sources, cut down electricity bills"
    },
    {
      quote: "As an advocate for green energy, I’m thrilled to see companies like Panjar stepping up with real solutions. Their products are affordable, well-designed, and come with excellent customer service. I installed one of their smart benches, and it’s become a highlight in our community park.",
      author: "Priya Singh",
      position: "Environmental Consultant, Ranchi",
      highlight: "smart benches, green energy"
    },
 
  ];

 

  return (
    <section id="reviews" className="py-16 mt-40 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewData.map((review, index) => (
            <div
              key={index}
              ref={(el) => (reviewRef.current[index] = el)}
              className="review-card bg-white shadow-lg rounded-lg p-6 space-y-4"
            >
              <p className="text-lg text-gray-600">
                <span className="italic">"{review.quote}"</span>
              </p>
              <p className="font-semibold text-gray-900">{review.author}</p>
              <p className="text-gray-700">{review.position}</p>
              <div className="space-x-2">
                {review.highlight.split(',').map((word, idx) => (
                  <span key={idx} className="text-green-600 font-bold">{word.trim()}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
