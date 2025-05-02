"use client"
import Card from '@/components/Card'
import HeroSection from '@/components/HeroSection'
import Specialties from '@/components/Specialities'
import React from 'react'

function Page() {

  
  return (
    <div className='w-full m-2'>
     
      <HeroSection/>
      <div>
        <Card/>
      </div>
      <Specialties/>
     
    </div>
  )
}

export default Page