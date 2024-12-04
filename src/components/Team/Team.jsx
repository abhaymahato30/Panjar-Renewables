import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Team.css";
import aditya from "../../assets/team/aditya.jpg";
import manish from "../../assets/team/manish.jpg";
import abhay from "../../assets/team/abhay.jpg";
import anurag from "../../assets/team/anurag.jpg";
import neha from "../../assets/team/neha.jpg";
import shivanand from "../../assets/team/shivanand.jpg";


gsap.registerPlugin(ScrollTrigger);

const Core = () => {
  const cardRefs = useRef([]);

  const data = [
    {
      email: "princy.kumarijha@example.com",
      name: "Aditya kumar",
      batch: "2022-26",
      teams: ["Founder"],
      linkedin:
        "https://www.linkedin.com/in/prinsu-panjar-aditya-8a10b3184/",
      photo: aditya,
    },
    {
      email: "princy.kumarijha@example.com",
      name: "Neha Singh",
      batch: "2022-26",
      teams: ["Finance and Accounting"],
      linkedin: "#",
      photo: neha,
    },
    {
      email: "princy.kumarijha@example.com",
      name: "Anurag Kumar",
      batch: "2022-26",
      teams: ["Operational"],
      linkedin: "#",
      photo: anurag,
    },
    {
      email: "princy.kumarijha@example.com",
      name: "Shivanand Kumar",
      batch: "2022-26",
      teams: ["Technical"],
      linkedin: "#",
      photo: shivanand,
    },
    // {
    //   email: "princy.kumarijha@example.com",
    //   name: "Manish Kumar Mahato",
    //   batch: "2022-26",
    //   teams: ["Design"],
    //   linkedin:
    //     "https://www.linkedin.com/in/manish-kumar-mahato-75946b264/",
    //   photo: manish,
    // },
    // {
    //   email: "princy.kumarijha@example.com",
    //   name: "Abhay Kumar Mahato",
    //   batch: "2022-26",
    //   teams: ["Development"],
    //   linkedin: "https://www.linkedin.com/in/abhay300804/",
    //   photo: abhay,
    // },
  ];

  useEffect(() => {
    cardRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
    

      <section className="bg-white dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-600">Our Team</h2>
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
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src={d.photo}
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
                  {d.name}
                </h1>

                <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
                  {d.teams}
                </p>

                <div className="flex mt-3 -mx-2">
                  <a
                    href={d.linkedin}
                    className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Core;
