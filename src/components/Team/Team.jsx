import React from "react";
import "./Team.css"







const Core = () => {
    return (
      <>
        <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-600">Team</h2>

        </div>
        {/*  */}
        
          
       


<section class="bg-white dark:bg-gray-900">
<div class="container px-6  mx-auto">
    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Executive Team</h1>



    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

    {data.map((d) => (

        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group bg-slate-100 hover:bg-blue-600 ">
            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={d.photo} alt=""/>

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">{d.name}</h1>

            <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300">{d.teams}</p>

            <div class="flex mt-3 -mx-2">
              

                <a href={d.linkedin} class="mx-2 text-gray-600  hover:text-gray-500  group-hover:text-white" aria-label="Github">
                   
                     <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"> <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path> </svg>
                  
                </a>
            </div>
        </div>
        
    ))};

    </div>
</div>
</section> 










       
      </>
    );
  };


const data = [
   

  {
        "email": "princy.kumarijha@example.com",
        "name": "Princy Kumari Jha",
        "batch": "2022-26",
        "teams": [
            "Alumni Relations Team"
        ],
        "linkedin": "#",
        "photo": "#"
    },   {
        "email": "princy.kumarijha@example.com",
        "name": "Princy Kumari Jha",
        "batch": "2022-26",
        "teams": [
            "Alumni Relations Team"
        ],
        "linkedin": "#",
        "photo": "#"
    },   {
        "email": "princy.kumarijha@example.com",
        "name": "Princy Kumari Jha",
        "batch": "2022-26",
        "teams": [
            "Alumni Relations Team"
        ],
        "linkedin": "#",
        "photo": "#"
    },   {
        "email": "princy.kumarijha@example.com",
        "name": "Princy Kumari Jha",
        "batch": "2022-26",
        "teams": [
            "Alumni Relations Team"
        ],
        "linkedin": "#",
        "photo": "#"
    },   {
        "email": "princy.kumarijha@example.com",
        "name": "Princy Kumari Jha",
        "batch": "2022-26",
        "teams": [
            "Alumni Relations Team"
        ],
        "linkedin": "#",
        "photo": "#"
    },   {
        "email": "princy.kumarijha@example.com",
        "name": "Princy Kumari Jha",
        "batch": "2022-26",
        "teams": [
            "Alumni Relations Team"
        ],
        "linkedin": "#",
        "photo": "#"
    }
   
]


  export default Core;