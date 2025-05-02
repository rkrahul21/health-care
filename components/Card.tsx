"use client";
import React, { useEffect, useState } from "react";
import { Idoctor } from "@/models/doctor";
import Image from "next/image";
import Form from "@/components/Form";

function Card() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchDoctors = async (query = "") => {
    setLoading(true);
    try {
      console.log("card",searchQuery);
      const response = await fetch(`/api/getDoctors?search=${query}`);
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchDoctors(searchQuery);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      
      {formOpen && <Form setFormOpen={setFormOpen} />}

    

      {/* Doctors List */}
      <div className="flex flex-col items-center justify-center mb-8">
        {loading && <p className="text-gray-500">Loading...</p>}
        {!loading && doctors.length === 0 && (
          <p className="text-gray-500">No doctors found</p>
        )}
      </div>
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-8 flex ">
        <input
          type="text"
          placeholder="Search by name, state, or specialization"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full md:w-1/2"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
      {!loading && doctors.length > 0 && (
        <div className="w-full m-2">
          <h1 className="text-[50px] font-bold text-center mb-8 underline text-blue-900">
            Our Doctors
          </h1>
          {/* Add Doctors Button */}
      <div className="mb-4">
        <button
          className="text-white p-2 rounded-md bg-blue-900"
          onClick={() => setFormOpen(!formOpen)}
        >
          Add Doctors
        </button>
      </div>

      
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
            {doctors.map((doctor: Idoctor) => (
              <div
                key={doctor.name}
                className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
              >
                {/* Profile Image */}
                <div className="flex justify-center mt-4">
                  <Image
                    src="/image.png"
                    alt="Doctor Avatar"
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full border-2 border-blue-500"
                  />
                </div>
                {/* Doctor Details */}
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {doctor.name}
                  </h2>
                  <p className="text-gray-600">{doctor.specialization}</p>
                  <p className="text-gray-500">
                    {doctor.city}, {doctor.state}
                  </p>
                  <p className="text-gray-500">
                    {doctor.experience} years of experience
                  </p>
                </div>
                {/* Action Buttons */}
                <div className="flex justify-center gap-4 p-4 border-t border-gray-200">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                    View Profile
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;

































// "use client"
// import React, { useEffect, useState } from 'react';
// import { Idoctor } from '@/models/doctor';
// import  Image from 'next/image';
// import Form from '@/components/Form'


// function Card() {
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [formOpen, setFormOpen] = useState(false);

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const response = await fetch("/api/getDoctors");
//         const data = await response.json();
//         setDoctors(data);
//       } catch (error) {
//         console.error("Error fetching doctors:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDoctors();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//        <div className=''>
//         <button className=' text-white p-2 rounded-md bg-blue-900 ' onClick={() => setFormOpen(!formOpen)}>Add Doctors</button>
//       </div>
//       {formOpen && (
//         <Form  setFormOpen={setFormOpen}/>)}
//       <div className="flex flex-col items-center justify-center mb-8">
//         {loading && <p className="text-gray-500">Loading...</p>}
//         {!loading && doctors.length === 0 && <p className="text-gray-500">No doctors found</p>}
//       </div>
//       {!loading && doctors.length > 0 && (
//         <div  className='w-full m-2 '>
//           <h1 className="text-[50px] font-bold text-center mb-8 underline text-blue-900">Our Doctors</h1>
//           <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
//             {doctors.map((doctor: Idoctor) => (
//               <div
//                 key={doctor.name}
//                 className="bg-white  shadow-md rounded-lg overflow-hidden border border-gray-200"
//               >

//                 <div className='flex px-2 items-center justify-center'>

//                 {/* Profile Image */}
//                 <div className="flex justify-center mt-4">

//                   <Image
//                     src="/image.png" 
//                     alt="Doctor Avatar"
//                     width={96} 
//                     height={96} 
//                     className="w-24 h-24 rounded-full border-2 border-blue-500"
//                   />
//                 </div>
//                 {/* Doctor Details */}
//                 <div className="p-6 text-center">
//                   <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
//                   <p className="text-gray-600">{doctor.specialization}</p>
//                   <p className="text-gray-500">{doctor.city}, {doctor.state}</p>
//                   <p className="text-gray-500">{doctor.experience} years of experience</p>
//                 </div>
//                 </div>
//                 {/* Action Buttons */}
//                 <div className="flex justify-center gap-4 p-4 border-t border-gray-200">
//                   <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
//                     View Profile
//                   </button>
//                   <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
//                     Contact
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Card;