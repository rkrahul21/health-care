import React from "react";
import Image from "next/image";

const specialties = [
    { name: "General Physician", icon: "/icons/doctor-icon.png" },
    { name: "Cardiologist", icon: "/icons/doctor-icon.png" },
    { name: "Dermatologist", icon: "/icons/doctor-icon.png" },
    { name: "Pediatrician", icon: "/icons/doctor-icon.png" },
    { name: "Orthopedic", icon: "/icons/doctor-icon.png" },
    { name: "Gynecologist", icon: "/icons/doctor-icon.png" },
];

function Specialties() {
    return (
        <div className="py-16 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Our Specialties</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {specialties.map((specialty) => (
                        <div
                            key={specialty.name}
                            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
                        >
                            {/* <img
                src={specialty.icon}
                alt={specialty.name}
                className="w-16 h-16 mb-4"
              /> */}
                            <Image
                                src={specialty.icon}
                                alt={specialty.name}
                                width={96}
                                height={96}
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <p className="text-gray-700 font-semibold">{specialty.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Specialties;