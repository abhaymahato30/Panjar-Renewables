import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Contact Us</h2>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Address Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Address</h3>
            <p className="text-gray-600">97/D, Usha Siddhi Kunj Vardhman Compound Lalpur, Ranchi, Jharkhand-834001</p>
            <p className="text-gray-600">BIT Sindri Dhanbad, Jharkhand JUT Namkum Ranchi, Jharkhand</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Phone</h3>
            <p className="flex justify-center items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l4 4-4 4m8-8l4 4-4 4m5-5h2a2 2 0 012 2v10a2 2 0 01-2 2h-2m-7 0H5a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v6" />
              </svg>
              +91 9430649460
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Email</h3>
            <p className="flex justify-center items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12V8l4-4M4 12v4l-4 4m16-4H4m4 0h8m4 0h-4m0 0l-4-4" />
              </svg>
              Panjarrenewables@gmail.com
            </p>
          </div>

        </div>

        {/* Founder Details */}
        <div className="mt-16 bg-white p-12 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4 text-center">Meet the Founder</h3>
          <div className="flex items-center justify-center space-x-6">
            {/* Founder Image */}
            <img src="https://media.licdn.com/dms/image/v2/C4D03AQG16ZBIT-tMLQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1638356079943?e=1736380800&v=beta&t=UwbAqoP0qB8Ywe0BwrLuRCrsWD6cwh8rFoWFIpvyKBk" alt="Founder" className="rounded-full w-32 h-32 object-cover" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">ADITYA KUMAR</h4>
              <p className="text-gray-600">Founder</p>
              <p className="mt-4 text-gray-600">
              B.E - Electrical Engg.
              M.T - Energy Management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
