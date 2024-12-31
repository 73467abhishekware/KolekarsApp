// import React from 'react';

// function AboutUs() {
//   return (
//     <div className="w-full min-h-screen bg-gray-50 text-gray-800">
//       {/* Header Section */}
//       <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-8 md:px-16">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             About Us
//           </h1>
//           <p className="text-lg md:text-xl">
//             Discover our story, our values, and what drives us to provide excellence.
//           </p>
//         </div>
//       </header>

//       {/* Content Section */}
//       <section className="py-16 px-8 md:px-16 max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* Text Content */}
//           <div>
//             <h2 className="text-3xl font-bold mb-4">
//               Our Mission
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               At [Your Company], we are committed to delivering exceptional solutions that empower our clients. Our mission is to uphold integrity, foster innovation, and achieve remarkable results for every individual or business we serve.
//             </p>
//             <p className="mt-4 text-gray-600 leading-relaxed">
//               With years of experience, a dedicated team, and a passion for excellence, we aim to build lasting relationships based on trust, collaboration, and mutual success.
//             </p>
//           </div>

//           {/* Image */}
//           <div className="rounded-lg overflow-hidden shadow-lg">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1661333820879-517c5e808bfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D"
//               alt="Team collaboration"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="bg-white py-16 px-8 md:px-16">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="p-6 bg-gray-100 rounded-lg shadow">
//               <h3 className="text-xl font-bold mb-2">Integrity</h3>
//               <p className="text-gray-600">
//                 We prioritize honesty and transparency in everything we do, ensuring trust and reliability for our clients.
//               </p>
//             </div>
//             <div className="p-6 bg-gray-100 rounded-lg shadow">
//               <h3 className="text-xl font-bold mb-2">Excellence</h3>
//               <p className="text-gray-600">
//                 Our commitment to delivering top-notch solutions drives our passion for achieving outstanding results.
//               </p>
//             </div>
//             <div className="p-6 bg-gray-100 rounded-lg shadow">
//               <h3 className="text-xl font-bold mb-2">Collaboration</h3>
//               <p className="text-gray-600">
//                 We believe in teamwork and building strong partnerships to create impactful solutions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call-to-Action */}
//       <footer className="bg-blue-600 text-white py-12 text-center">
//         <h3 className="text-2xl font-bold mb-4">
//           Ready to Work Together?
//         </h3>
//         <p className="mb-6">
//           Join us on our journey to make a difference. Let's achieve greatness together.
//         </p>
//         <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-gray-100 transition">
//           Contact Us
//         </button>
//       </footer>
//     </div>
//   );
// }

// export default AboutUs;

import React from "react";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div  className="w-full h-80vh bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800 font-roboto">
      {/* Content Section */}
      <section className="py-16 px-8 md:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              At <span className="text-indigo-600 font-semibold">Kolekar's</span>, we are committed to delivering exceptional solutions that empower our clients. Our mission is to uphold integrity, foster innovation, and achieve remarkable results for every individual or business we serve.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              With years of experience, a dedicated team, and a passion for excellence, we aim to build lasting relationships based on trust, collaboration, and mutual success.
            </p>
            <button
              onClick={() => navigate("/knowmore")}
              className="mt-6 inline-block px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 font-medium text-lg rounded-lg shadow transition duration-300"
            >
              Know More
            </button>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1661333820879-517c5e808bfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Team collaboration"
              className="w-full h-full object-cover hover:scale-105 transform transition duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
