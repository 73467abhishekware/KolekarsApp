import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Team() {
  const teamMembers = [
    {
      name: "Nitin kolekar",
      role: "CEO & Founder",
      image:
        "data:image/jpeg;base64,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", // Replace with actual image URL
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Sachin Kolekar",
      role: "Senior Advocate",
      image:
      "data:image/jpeg;base64,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",
     // Replace with actual image URL
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Emily Davis",
      role: "Junior advocate",
       image:
        "data:image/jpeg;base64,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",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
  ];

  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.8" className="w-full bg-gradient-to-b from-gray-50 to-gray-200 py-16 text-gray-800">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
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
      </div>
    </div>
  );
}

export default Team;
