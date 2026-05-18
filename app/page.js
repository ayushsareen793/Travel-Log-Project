"use client"
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
      <div className='w-1/2 mx-auto pt-6'>
        <h1 className='text-shadow-lg text-5xl font-bold'>
          The Morning
          <br />
          <span className='font-bold text-[#2D4B37]'>Dispatch</span>

        </h1>
        <p className="font-body font-medium pt-3 text-secondary text-base max-w-sm">Curated travel logs from adventurers exploring the world's most extraordinary places.</p>




        <div className='flex gap-3 pt-4'>
          <button type="button" className="bg-transparent text-[#2D4B37] border border-[#2D4B37] hover:bg-[#2D4B37] hover:text-white focus:ring-4 focus:ring-[#2D4B37]/20 focus:outline-none shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 transition-colors duration-150">Start A New Log</button>
          <button type="button" className="bg-transparent text-[#2D4B37] border border-[#2D4B37] hover:bg-[#2D4B37] hover:text-white focus:ring-4 focus:ring-[#2D4B37]/20 focus:outline-none shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 transition-colors duration-150">About Us</button>



        </div>
      </div>







    </div>
  )
}

export default page