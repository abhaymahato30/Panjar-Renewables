import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Team.css";
import dk from "../../assets/advisor/dksingh.png";
import vinod from "../../assets/advisor/vinod.jpg";
import ramesh from "../../assets/advisor/ramesh.jpeg";


import baba from "../../assets/advisor/baba.png";
import abhay from "../../assets/team/abhay.jpg";
import anurag from "../../assets/team/anurag.jpg";
import neha from "../../assets/team/neha.jpg";
import shivanand from "../../assets/team/shivanand.jpg";


// 

const Advisors = () => {
  const cardRefs = useRef([]);

  const data = [
    {
      email: "princy.kumarijha@example.com",
      name: "Sidhnath Singh",
      batch: "2022-26",
      teams: ["Serial entrepreneur and renowned businessman in Jharkhand"],
      
      photo:baba ,
    },
    {
      email: "princy.kumarijha@example.com",
      name: "Dr. D.K. Singh ",
      batch: "2022-26",
      teams: ["Vice Chancellor, Jharkhand University of Technologies"],
      linkedin: "#",
      photo: dk,
    },
    {
      email: "princy.kumarijha@example.com",
      name: "Raj Dubey",
      batch: "2022-26",
      teams: ["Legal Advisor,Over 25 years in business structuring with international and domestic clients"],
      linkedin: "#",
      photo: vinod,
    },
    {
      email: "princy.kumarijha@example.com",
      name: "Shivanand Modi",
      batch: "2022-26",
      teams: ["Serial entrepreneur, charter member of TiE, mentor and professor of entrepreneurship"],
      linkedin: "https://www.linkedin.com/in/shivanandmodi/",
      photo: ramesh,
    },

  ];

 

  return (
    <>
    

      <section className="bg-white dark:bg-gray-900 p-10">
      <div className="text-center mt-16">
        <h2 className="text-4xl font-bold text-blue-600 ">Our Advisors</h2>
      </div>
        <div className="container px-6 py-6 mx-auto mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {data.map((d, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)} // Reference for scroll animation
                className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group bg-slate-100 hover:bg-blue-600"
              >
                <img
                  className="object-cover w-40 h-40 rounded-full ring-4 ring-gray-300"
                  src={d.photo}
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
                  {d.name}
                </h1>

                <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
                  {d.teams}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Advisors;
