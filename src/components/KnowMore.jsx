// import React from 'react'

// function KnowMore() {
//   return (
//        <div className="w-full min-h-screen bg-gray-50 text-gray-800">
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
//   )
// }

// export default KnowMore


import React from "react";
import CountUp from "react-countup";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"; // You can replace these with other icons as needed.
import Team from "./Team";

function AboutUs() {
  const teamMembers = [
    {
      name: "Nitin Kolekar",
      role: "Owner & CEO",
      image: "data:image/png;base64,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", // Replace with actual image URL
      description:
        "Amit Kumar is a seasoned legal expert with over 25 years of experience in various district high courts and the Supreme Court. Currently serving as a Government Judicial Officer, he has a wealth of knowledge in both litigation and legal advisory services.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Sachin Kolekar",
      role: "Senior Advocate",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGb4s_nPeU4tRx1e1NqVyuX6sUyFM-ofhMHw&s", // Replace with actual image URL
      description:
        "Rajeev Singh is a Senior Advocate with more than 20 years of experience in complex legal cases. He has successfully represented numerous clients in criminal, civil, and corporate cases across various courts.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-200 py-16 text-gray-800">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-800">
          About Our Firm
        </h2>

        {/* About the Firm */}
        <div className="text-center mb-16 px-4">
          <p className="text-lg text-gray-600">
            Our law firm has been serving clients with utmost integrity and
            professionalism for over two decades. We specialize in various legal
            areas, from criminal defense to civil litigation, and provide expert
            legal solutions for both individuals and businesses. Our founders are
            highly respected in the legal community, with extensive experience in
            courts nationwide, including the Supreme Court.
          </p>
        </div>

        {/* Team Members Section */}
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Meet Our Founders & Legal Experts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.description}</p>
              <div className="flex justify-center space-x-4">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition duration-300"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition duration-300"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black transition duration-300"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Firm Stats Section */}
        <div className="text-center mb-16 px-4">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Our Track Record
          </h3>
          <div className="flex justify-center space-x-12">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-600">
                Total Cases Handled
              </h4>
              <p className="text-4xl font-bold text-indigo-800">
                <CountUp end={250} duration={2.5} />
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-600">
                Successful Wins
              </h4>
              <p className="text-4xl font-bold text-green-600">
                <CountUp end={200} duration={2.5} />
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-600">
                Years of Experience
              </h4>
              <p className="text-4xl font-bold text-indigo-800">
                <CountUp end={30} duration={2.5} />
              </p>
            </div>
          </div>
        </div>

        <Team />
      </div>
    </div>
  );
}

export default AboutUs;



// import React from "react";
// import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"; // You can replace these with other icons as needed.
// import Team from "./Team";

// function AboutUs() {
//   // Lawyer Profiles
//   const teamMembers = [
//     {
//       name: "Amit Kumar",
//       role: "Owner & CEO",
//       image:
//         "https://via.placeholder.com/150", // Replace with actual image URL
//       description:
//         "Amit Kumar is a seasoned legal expert with over 25 years of experience in various district high courts and the Supreme Court. Currently serving as a Government Judicial Officer, he has a wealth of knowledge in both litigation and legal advisory services.",
//       socials: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         github: "https://github.com",
//       },
//     },
//     {
//       name: "Rajeev Singh",
//       role: "Senior Advocate",
//       image:
//         "https://via.placeholder.com/150", // Replace with actual image URL
//       description:
//         "Rajeev Singh is a Senior Advocate with more than 20 years of experience in complex legal cases. He has successfully represented numerous clients in criminal, civil, and corporate cases across various courts.",
//       socials: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         github: "https://github.com",
//       },
//     },
//   ];

//   // Intern Information
//   const interns = [
//     {
//       name: "Sophia Lee",
//       role: "Legal Intern",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Daniel Brown",
//       role: "Legal Intern",
//       image: "https://via.placeholder.com/150",
//     },
//   ];

//   return (
//     <div className="w-full bg-gradient-to-b from-gray-50 to-gray-200 py-16 text-gray-800">
//       <div className="max-w-7xl mx-auto px-8 md:px-16">
        
//         <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-800">
//           About Our Firm
//         </h2>

//         {/* About the Firm */}
//         <div className="text-center mb-16 px-4">
//           <p className="text-lg text-gray-600">
//             Our law firm has been serving clients with utmost integrity and
//             professionalism for over two decades. We specialize in various legal
//             areas, from criminal defense to civil litigation, and provide expert
//             legal solutions for both individuals and businesses. Our founders are
//             highly respected in the legal community, with extensive experience in
//             courts nationwide, including the Supreme Court.
//           </p>
//         </div>

          
//         {/* Team Members Section */}
//         <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           Meet Our Founders & Legal Experts
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 text-center"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//               />
//               <h3 className="text-2xl font-bold mb-2 text-gray-800">{member.name}</h3>
//               <p className="text-gray-500 mb-4">{member.role}</p>
//               <p className="text-gray-600 mb-4">{member.description}</p>
//               <div className="flex justify-center space-x-4">
//                 {member.socials.linkedin && (
//                   <a
//                     href={member.socials.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:text-blue-800 transition duration-300"
//                   >
//                     <FaLinkedin className="w-6 h-6" />
//                   </a>
//                 )}
//                 {member.socials.twitter && (
//                   <a
//                     href={member.socials.twitter}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 hover:text-blue-600 transition duration-300"
//                   >
//                     <FaTwitter className="w-6 h-6" />
//                   </a>
//                 )}
//                 {member.socials.github && (
//                   <a
//                     href={member.socials.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-800 hover:text-black transition duration-300"
//                   >
//                     <FaGithub className="w-6 h-6" />
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Interns Section */}
//         {/* <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           Our Interns
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">
//           {interns.map((intern, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 text-center"
//             >
//               <img
//                 src={intern.image}
//                 alt={intern.name}
//                 className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//               />
//               <h3 className="text-2xl font-bold mb-2 text-gray-800">{intern.name}</h3>
//               <p className="text-gray-500 mb-4">{intern.role}</p>
//             </div>
//           ))}
//         </div> */}
        
//           {/* Firm Stats Section */}
//           <div className="text-center mb-16 px-4">
//           <h3 className="text-3xl font-bold text-gray-800 mb-4">
//             Our Track Record
//           </h3>
//           <div className="flex justify-center space-x-12">
//             <div className="text-center">
//               <h4 className="text-xl font-semibold text-gray-600">Total Cases Handled</h4>
//               <p className="text-4xl font-bold text-indigo-800">250+</p>
//             </div>
//             <div className="text-center">
//               <h4 className="text-xl font-semibold text-gray-600">Successful Wins</h4>
//               <p className="text-4xl font-bold text-green-600">200+</p>
//             </div>
//             <div className="text-center">
//               <h4 className="text-xl font-semibold text-gray-600">Years of Experience</h4>
//               <p className="text-4xl font-bold text-indigo-800">30+</p>
//             </div>
//           </div>
//         </div>
      
//         <Team/>

        
//       </div>
//     </div>
//   );
// }

// export default AboutUs;
