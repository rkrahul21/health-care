import React from "react";

function HeroSection() {
  return (
    <div className="bg-blue-700 text-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Find the Best Doctors Near You</h1>
          <p className="text-lg mb-6">
            Book appointments with top doctors and specialists in just a few clicks.
          </p>
          <button className="bg-white text-blue-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
            Book Appointment
          </button>
        </div>

      
      </div>
    </div>
  );
}

export default HeroSection;