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
            <input type="text" placeholder="eg. Quiet Temples of Kalpa" className="w-full bg-white px-4 py-2.5  border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
          </div>

          {/* country and city/region */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Country</label>
              <input type="text" placeholder="e.g. India" className="w-full px-4 py-2.5 bg-white border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">City / Region</label>
              <input type="text" placeholder="e.g. Shimla" className="w-full px-4 py-2.5 bg-white border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
            </div>
          </div>

          {/* date */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Date Of Visit</label>
            <input type="date" placeholder="dd-mm-yyyy" className="w-full px-4 py-2.5 bg-white border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
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
            <img src="https://img.icons8.com/color/96/image.png" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm font-medium text-[#1c1c19] mb-1">Click to upload cover photo</p>
            <p className="text-xs text-secondary  text-gray-400">PNG, JPG or WEBP · Max 5MB</p>
            <input type="file" accept="image/*" className="hidden" />
          </div>


          {/* divider */}
          <div className='h-px bg-[#e8e4da] my-8'></div>



          {/* your log */}
          <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-4">Your Log</p>

          <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">About Place</label>
          <div className="mb-5">
            <textarea placeholder="Describe the place: what made it special, what it felt like, memorable moments, local culture, food, or anything that stood out." maxLength={2000} rows={6} className="border-2  border-[#e8e4da] rounded-2xl px-4 py-3 w-full bg-white resize-none focus:outline-none focus:border-[#2D4B37] text-gray-700 placeholder:text-gray-400" />
          </div>

          <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Best Time To Visit</label>
          <div>
            <input type="text" placeholder="eg. OffSeason or October/september" className="w-full bg-white px-4 py-2.5  border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
          </div>

          <label className="block text-sm font-medium text-[#1c1c19] mb-1.5 pt-5">How To Get There</label>
          <div>
            <textarea placeholder="e.g. Transportation Options, Best Route To Get There" rows={4} className="w-full bg-white px-4 py-3 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150 resize-none" />
          </div>


          {/* divider */}
          <div className='h-px bg-[#e8e4da] my-8'></div>


          {/* hidden gems */}
          <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-4">Hidden Gems</p>
          <label className='block text-sm font-medium mb-1.5 text-gray-800 '>Add The Underrated Spots Only You Know About.</label>
          <div className='pt-3 w-3xl'>
            <input type="text" placeholder="eg. Food Spots" className="w-full bg-white  px-4 py-2.5  border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
          </div>
          <div className='pt-2 w-3xl'>
            <input type="text" placeholder="eg. Secret Waterfall Between The Trek" className="w-full bg-white  px-4 py-2.5  border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
          </div>


          {/* divider */}
          <div className='h-px bg-[#e8e4da] my-8'></div>




          {/* tips and recommendation */}
          <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-4">Tips & Recommendations</p>

          <label className="block text-sm font-medium text-[#1c1c19] mb-1.5 pt-5">Where To Eat</label>
          <div>
            <textarea placeholder="e.g. Your Favourite Spots,Local Dishes. " rows={4} className="w-full bg-white px-4 py-3 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150 resize-none" />
          </div>

          <label className="block text-sm font-medium text-[#1c1c19] mb-1.5 pt-5">Where To Stay</label>
          <div>
            <textarea placeholder="e.g. Budget Hotels,Areas To Stay" rows={4} className="w-full bg-white px-4 py-3 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150 resize-none" />
          </div>

          <label className="block text-sm font-medium text-[#1c1c19] mb-1.5 pt-5">Things To Avoid</label>
          <div>
            <textarea placeholder="e.g. Tourist Traps,What Not To Do.." rows={4} className="w-full bg-white px-4 py-3 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150 resize-none" />
          </div>



          {/* save button */}
          <div className='pt-5 mx-auto flex justify-center'>
            <button type="submit" className="bg-transparent mx-auto w-5xl text-[#2D4B37] border border-[#2D4B37] hover:bg-[#2D4B37] hover:text-white focus:ring-4 focus:ring-[#2D4B37]/20 focus:outline-none shadow-xs font-medium leading-5 rounded-xl text-sm px-4 py-2.5 transition-colors duration-150">Publish Log</button>
          </div>







        </div>











      </div >
    </>
  )
}

export default page