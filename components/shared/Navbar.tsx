"use client";

import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-medical-blue">
            DoctorFinder
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-medical-blue transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-medical-blue transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-medical-blue transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-medical-blue transition-colors">
              Contact
            </Link>
          </nav>

          {/* Hamburger Icon */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 border border-medical-blue text-medical-blue rounded-md hover:bg-medical-blue hover:text-white transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-medical-blue text-white rounded-md hover:bg-medical-lightBlue transition-colors">
              Book Appointment
            </button>
            <button
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            <Link
              href="/"
              className="block text-gray-600 hover:text-medical-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-gray-600 hover:text-medical-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 hover:text-medical-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-medical-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;