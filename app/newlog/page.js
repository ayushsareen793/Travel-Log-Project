"use client"
import React from 'react'

const page = () => {
  return (
    <>
      <div className='w-full min-h-screen'>
        {/* heading */}
        < div className="bg-[#2D4B37]  px-6 py-16" >
          <div className="w-8xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#a8d5b5] mb-5">
              New Log Entry
            </p>
            <h1 className="text-5xl font-bold text-white leading-tight mb-4">
              Tell Us About<br />
              <button className="italic text-[#a8d5b5]">Your Journey.</button>
            </h1>
            <p className="text-sm text-white/55 leading-relaxed max-w-lg">
              Document your journey- where you went, what you found, and the hidden gems only you know about.
            </p>
          </div>
        </div>

        <div className='max-w-6xl mx-auto pt-10'>


          {/* basic info */}
          <p className="text-l font-bold uppercase tracking-[3px] text-[#2D4B37] mb-4">Basic info</p>

          <div className="mb-5">
            <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Log title</label>
            <input type="text" placeholder="eg. Quiet Temples of Kalpa" className="w-full bg-[#f7f5f0] px-4 py-2.5  border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
          </div>

          {/* country and city/region */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Country</label>
              <input type="text" placeholder="e.g. India" className="w-full px-4 py-2.5 bg-[#f7f5f0] border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">City / Region</label>
              <input type="text" placeholder="e.g. Shimla" className="w-full px-4 py-2.5 bg-[#f7f5f0] border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
            </div>
          </div>

          {/* date */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Date Of Visit</label>
            <input type="date" placeholder="dd-mm-yyyy" className="w-full px-4 py-2.5 bg-[#f7f5f0] border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
          </div>


          {/* <div className="h-px bg-[#e8e4da] my-8" /> divider */}



          {/* category buttons */}
          <p className="text-l font-bold uppercase tracking-[3px] text-[#2D4B37] mb-4 pt-5">Category</p>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
              <img src="https://img.icons8.com/color/48/mountain.png" alt="Mountains" className="w-4 h-4" />
              Mountains
            </button>

            <button className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
              <img src="https://img.icons8.com/color/48/beach.png" alt="Beaches" className="w-4 h-4" />
              Beaches
            </button>

            <button className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
              <img src="https://img.icons8.com/color/48/city.png" alt="City Breaks" className="w-4 h-4" />
              City Breaks
            </button>

            <button className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
              <img src="https://img.icons8.com/color/48/food-bar.png" alt="Food Trails" className="w-4 h-4" />
              Food Trails
            </button>

            <button className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
              <img src="https://img.icons8.com/color/48/compass.png" alt="Off-the-grid" className="w-4 h-4" />
              Off-the-grid
            </button>

            <button className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
              <img src="https://img.icons8.com/color/48/camping-tent.png" alt="Camping" className="w-4 h-4" />
              Camping
            </button>

            <button className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
              <img src="https://img.icons8.com/color/48/train.png" alt="Train Travel" className="w-4 h-4" />
              Train Travel
            </button>

            <button className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
              <img src="https://img.icons8.com/color/48/road.png" alt="Road Trip" className="w-4 h-4" />
              Road Trip
            </button>
          </div>


          {/* divider */}
          <div className='h-px bg-[#e8e4da] my-8'></div>




          {/* cover photo */}
          <p className="text-l font-bold uppercase tracking-[3px] text-[#2D4B37] mb-4">Cover Photo</p>
          <div className="border-2 border-dashed border-[#e8e4da] rounded-2xl p-10 text-center bg-white hover:border-[#2D4B37] hover:bg-[#f4f9f6] transition-all duration-150 cursor-pointer mb-8">
            <img src="https://img.icons8.com/color/96/image.png" className="w-12 h-12 mx-auto mb-3"/>
            <p className="text-sm font-medium text-[#1c1c19] mb-1">Click to upload cover photo</p>
            <p className="text-xs text-secondary">PNG, JPG or WEBP · Max 5MB</p>
            <input type="file" accept="image/*" className="hidden"/>
          </div>















        </div>











      </div >
    </>
  )
}

export default page