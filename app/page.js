"use client"
import React from 'react'

const page = () => {
  return (
    <>
      <div className='w-1/2 mx-auto'>


        {/* topic and buttons section */}
        <div className='topic pt-6'>
          <h1 className='text-shadow-lg text-5xl font-bold'>
            Where will
            <br />
            <span className='font-bold text-[#2D4B37]'>You go next?</span>

          </h1>
          <p className="font-body font-medium pt-3 text-secondary text-base max-w-sm">Curated travel logs from adventurers exploring the world's most extraordinary places.</p>

          <div className='flex gap-3 pt-4'>
            <button type="button" className="bg-transparent text-[#2D4B37] border border-[#2D4B37] hover:bg-[#2D4B37] hover:text-white focus:ring-4 focus:ring-[#2D4B37]/20 focus:outline-none shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 transition-colors duration-150">Start A New Log</button>
            <button type="button" className="bg-transparent text-[#2D4B37] border border-[#2D4B37] hover:bg-[#2D4B37] hover:text-white focus:ring-4 focus:ring-[#2D4B37]/20 focus:outline-none shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 transition-colors duration-150">About Us</button>
          </div>
        </div>




        {/* divider */}
        <div className="w-full border-t border-[#e8e4da] my-5" />




        {/* badges section  */}
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
            <span><img src="https://img.icons8.com/color/48/mountain.png" alt="Mountains" className="w-4 h-4" /></span>
            Mountains
          </span>

          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
            <span><img src="https://img.icons8.com/color/48/beach.png" alt="Beaches" className="w-4 h-4" /></span>
            Beaches
          </span>

          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
            <span><img src="https://img.icons8.com/color/48/city.png" alt="City Breaks" className="w-4 h-4" /></span>
            City Breaks
          </span>

          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
            <span><img src="https://img.icons8.com/color/48/food-bar.png" alt="Food Trails" className="w-4 h-4" /></span>
            Food Trails
          </span>

          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
            <span><img src="https://img.icons8.com/color/48/compass.png" alt="Off-the-grid" className="w-4 h-4" /></span>
            Off-the-grid
          </span>

          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
            <span><img src="https://img.icons8.com/color/48/camping-tent.png" alt="Camping" className="w-4 h-4" /></span>
            Camping
          </span>

          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
            <img src="https://img.icons8.com/color/48/train.png" alt="Train Travel" className="w-4 h-4" />
            Train Travel
          </span>

          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150">
            <img src="https://img.icons8.com/color/48/road.png" alt="Road Trip" className="w-4 h-4" />
            Road Trip
          </span>
        </div>



        {/* divider */}
        <div className="w-full border-t border-[#e8e4da] my-5" />





        <div className='pt-1'>
          <h1 className='text-shadow-lg text-3xl font-bold text-start'>
            Featured Logs
            <br />
          </h1>
          <span className='text-[#2D4B37] text-l'>From Our Community</span>

        </div>




        {/* featured logs-cards  sections-horizontal */}
        <div className='horizontal card pt-3'>

          <div className="bg-neutral-primary-soft block border rounded-2xl border-default  shadow-xs hover:shadow-md transition-shadow duration-200">

            <div className="h-36 w-full rounded-xl bg-linear-to-br from-[#2d5a3d] to-[#7ab87d] flex items-end p-3">
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-black/30 text-white backdrop-blur-sm">
                🇯🇵 Japan
              </span>
            </div>

            <div className="p-4">
              <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-xs font-medium px-1.5 py-0.5 rounded-sm">
                <svg className="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z" />
                </svg>
                Trending
              </span>
              <a href="#">
                <h5 className="mt-2 mb-1 text-sm font-bold tracking-tight text-heading leading-snug">
                  Quiet Temples of Kyoto
                </h5>
              </a>
              <p className="text-xs text-secondary leading-relaxed line-clamp-2">
                Beyond the crowds of Fushimi Inari lies a network of mossy stone paths few tourists ever find.
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs font-medium text-[#2D4B37]">by Priya S.</span>
              </div>

            </div>
          </div>
        </div>


        {/* featured logs vertical cards */}











      </div>
    </>
  )
}

export default page