"use client"
import React, { useState } from 'react'

function Form( {  setFormOpen }: {  setFormOpen: (value: boolean) => void } ) {

   const [name,setName] = useState("");
    const [city,setCity] = useState("");
    const [state,setState] = useState("");
    const [specialization,setSpecialization] = useState("");
    const [experience,setExperience] = useState(0);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(name,city,state,specialization,experience)
       
       try {
        const response = await fetch("http://localhost:3000/api/add-doctors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                city,
                state,
                specialization,
                experience,
            }),
        });
       const data = await response.json();
         console.log("Doctor added successfully:", data);
         if(data.message === "Doctor Addes Sucessfully"){
            // alert("Doctor added successfully")
            setFormOpen(false)
         }
       
       } catch (error) {
        console.log("Error adding doctor:", error);
       }
            
       
        
    }


  return (
    <div className='w-full h-screen fixed z-10 top-0 bottom-0 right-0 left-0 flex justify-center items-center mt-4 bg-black/30'>
        <div className='w-[80%] md:w-[50%]  bg-gray-200 flex flex-col justify-center items-center rounded-lg gap-4 p-4'>
            <div className='relative w-full flex justify-end'>
        <button className='text-red-600 absolute top-4 right-2' onClick={()=>setFormOpen(false)}> X</button>

            </div>
            <h1> Fill the Form to add new doctors information</h1>

            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center m-4'>
                <div className='flex gap-2 items-center  justify-center p-2'>
                    <label htmlFor="name">Name*</label>
                    <input type="text" id='name' 
                    required className='border-2 border-gray-400 rounded-md p-2 m-2' placeholder='Enter your name' 
                    onChange={(e)=> setName(e.target.value)} />
                </div>
              
                <div className='flex gap-2 items-center  justify-center p-2'>
                    <label htmlFor="city">City*</label>
                    <input type="text" id='city' 
                    required className='border-2 border-gray-400 rounded-md p-2 m-2' placeholder='Enter your city'
                    onChange={(e)=> setCity(e.target.value)} />
                </div>

                <div className='flex gap-2 items-center  justify-center p-2'>
                    <label htmlFor="state">State*</label>
                    <input type="text" id='state' 
                    required className='border-2 border-gray-400 rounded-md p-2 m-2' placeholder='Enter your state' 
                    onChange={(e)=> setState(e.target.value)} />
                </div>
                <div className='flex gap-2 items-center  justify-center p-2'>
                    <label htmlFor="specialization">Specialization*</label>
                    <input type="text" id='specialization' 
                    required className='border-2 border-gray-400 rounded-md p-2 m-2' placeholder='Enter your specialization' 
                    onChange={(e)=> setSpecialization(e.target.value)} />
                </div>

                <div className='flex gap-2 items-center  justify-center p-2'>
                    <label htmlFor="experience">Experience*</label>
                    <input type="number" id='experience' 
                    required className='border-2 border-gray-400 rounded-md p-2 m-2' placeholder='Enter your experience in years' 
                    onChange={(e)=> setExperience(Number(e.target.value))} />
                </div>

                <button type='submit' className='bg-blue-700 p-2 rounded-md' >Submit</button>
            </form>
        </div>

    </div>
  )
}

export default Form