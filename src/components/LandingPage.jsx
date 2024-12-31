

// import React from 'react';

// function LandingPage() {
//   return (
//     <div className="w-full min-h-screen bg-zinc-900 text-gray-100">
//       {/* Hero Section */}
//       <header className="flex flex-col md:flex-row items-center justify-between min-h-screen">
//         {/* Content Section */}
//         <div className="flex-1 flex flex-col justify-center p-8 md:p-16">
//           <h1 className="text-5xl md:text-6xl font-bold tracking-wide uppercase">
//             Justice. Integrity. Results.
//           </h1>
//           <p className="mt-5 text-lg md:text-xl max-w-lg">
//             Providing expert legal solutions with dedication and trust. Let us advocate for your rights.
//           </p>
//           <button className="mt-10 px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full shadow hover:bg-orange-600 transition">
//             Schedule a Consultation
//           </button>
//         </div>

//         {/* Image Section */}
//         <div
//           className="flex-1 bg-cover bg-center min-h-[500px] "
//           style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2015/07/20/12/57/ambassador-852766_640.jpg")' }}
//         ></div>
//       </header>
//     </div>
//   );
// }

// export default LandingPage;




import { motion } from 'framer-motion';
import React from 'react';

function LandingPage() {
  return (
    <div data-scroll  data-scroll-speed="-.3" className="w-full min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-between min-h-screen">
        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16">
        <motion.div  initial={{width: 0}} animate={{width: "15vw"}} transition={{eaase:[0.76, 0, 0.24, 1],duration: 1}}  className=" top-[calc(100%+10px)] left-0  w-20 h-20 flex items-center justify-center text-white font-bold bg-cover ">
            <img src="data:image/jpeg;base64,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" alt="" />
          </motion.div><br/>
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide uppercase">
            Justice. Integrity. Results.
          </h1>
          <p className="mt-5 text-lg md:text-xl max-w-lg text-gray-600">
            Providing expert legal solutions with dedication and trust. Let us advocate for your rights.
          </p>
          <button className="mt-10 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow hover:bg-blue-700 transition">
            Schedule a Consultation
          </button>
        </div>

        {/* Image Section */}
        <div
          className="flex-1 bg-cover bg-center min-h-[300px] shadow-lg rounded-lg"
          style={{
            backgroundImage:
              'url("https://plus.unsplash.com/premium_photo-1695449439526-9cebdbfa1a2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGF3fGVufDB8fDB8fHww")',
          }}
        ></div>
      </header>
    </div>
  );
}

export default LandingPage;
