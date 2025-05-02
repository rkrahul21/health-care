"use client"
// import Card from '@/components/Card'
import Form from '@/components/Form'
import HeroSection from '@/components/HeroSection'
import Specialties from '@/components/Specialities'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

function Page() {
const [formOpen, setFormOpen] = useState(false);
  
  return (
    <div className='w-full m-2 '>
     
      <HeroSection/>
     
        {/* Add Doctors Button */}<div className='w-full flex justify-center items-center'>

                <div className="w-full md:w-1/2 my-8 mb-4 flex justify-evenly items-center gap-4">
                  <button
                    className="text-white p-2 rounded-md bg-blue-900"
                    onClick={() => setFormOpen(!formOpen)}
                  >
                    Add Doctors
                  </button>
                <Link href="/Doctors" className="text-white p-2 rounded-md bg-blue-900">View All Doctors</Link>
                </div>
                {formOpen && <Form setFormOpen={setFormOpen} />}
        </div>
      <Specialties/>
     
    </div>
  )
}

export default Page