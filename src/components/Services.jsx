// import React from "react";

// function Services() {
//   const services = [
//     {
//       title: "Corporate Law",
//       description:
//         "Expert guidance on corporate structure, compliance, and business contracts to ensure your business operates seamlessly.",
//       icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png", // Replace with your own icon or image URL
//     },
//     {
//       title: "Family Law",
//       description:
//         "Compassionate support for family matters, including divorce, custody, and adoption, ensuring your interests are protected.",
//       icon: "https://cdn-icons-png.flaticon.com/512/2977/2977322.png", // Replace with your own icon or image URL
//     },
//     {
//       title: "Criminal Defense",
//       description:
//         "Strong representation in criminal cases, protecting your rights with strategic and assertive advocacy.",
//       icon: "https://cdn-icons-png.flaticon.com/512/3456/3456452.png", // Replace with your own icon or image URL
//     },
//     {
//       title: "Real Estate Law",
//       description:
//         "Comprehensive services for property transactions, leases, and disputes to protect your real estate interests.",
//       icon: "https://cdn-icons-png.flaticon.com/512/2495/2495484.png", // Replace with your own icon or image URL
//     },
//   ];

//   return (
//     <div className="w-full bg-gradient-to-b from-gray-50 to-gray-200 py-16 text-gray-800">
//       <div className="max-w-7xl mx-auto px-8 md:px-16">
//         <h2 className="text-4xl font-extrabold text-center mb-12">
//           Our Services
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 text-center"
//             >
//               <img
//                 src={service.icon}
//                 alt={service.title}
//                 className="w-16 h-16 mx-auto mb-6"
//               />
//               <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//               {/* <button
//                 className="mt-6 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
//                 onClick={() => alert(`Learn more about ${service.title}`)}
//               >
//                 Learn More
//               </button> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;

import React from "react";
import {
  MdOutlineCorporateFare,
  MdFamilyRestroom,
  MdGavel,
  MdRealEstateAgent,
} from "react-icons/md";

function Services() {
  const services = [
    {
      title: "Corporate Law",
      description:
        "Expert guidance on corporate structure, compliance, and business contracts to ensure your business operates seamlessly.",
      icon: (
        <MdOutlineCorporateFare className="w-16 h-16 text-blue-500 mx-auto mb-6" />
      ),
    },
    {
      title: "Family Law",
      description:
        "Compassionate support for family matters, including divorce, custody, and adoption, ensuring your interests are protected.",
      icon: (
        <MdFamilyRestroom className="w-16 h-16 text-purple-500 mx-auto mb-6" />
      ),
    },
    {
      title: "Criminal Defense",
      description:
        "Strong representation in criminal cases, protecting your rights with strategic and assertive advocacy.",
      icon: <MdGavel className="w-16 h-16 text-red-500 mx-auto mb-6" />,
    },
    {
      title: "Real Estate Law",
      description:
        "Comprehensive services for property transactions, leases, and disputes to protect your real estate interests.",
      icon: (
        <MdRealEstateAgent className="w-16 h-16 text-green-500 mx-auto mb-6" />
      ),
    },
  ];

  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.2" className="w-full bg-gradient-to-b from-gray-50 to-gray-200 py-16 text-gray-800">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 text-center"
            >
              {service.icon}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              {/* <button
                className="mt-6 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={() => alert(`Learn more about ${service.title}`)}
              >
                Learn More
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
