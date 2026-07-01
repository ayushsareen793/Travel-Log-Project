
"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const page = () => {
  const { data: session } = useSession()
  const Router = useRouter()

  return (
    <>
      <div className='max-w-full'>
        {/* heading section  */}
        <div className="relative bg-[#2D4B37] overflow-hidden min-h-105">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-linear-to-r from-[#142819]/95 via-[#142819]/50 to-transparent" />
          <div className="absolute inset-0 bg-black/25" />

          {/* Content */}
          <div className="relative z-10 px-6 py-16">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#a8d5b5] mb-5">Home</p>
            <h1 className="text-5xl font-bold text-white leading-tight mb-4">
              Where will<br /><span className="italic text-[#a8d5b5]">You go next?</span>
            </h1>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-8">Curated travel logs from adventurers exploring the world's most extraordinary places.</p>
            <div className="flex gap-3">
              <button onClick={() => { if (!session) { Router.push("/Login"); return } Router.push("/newlog") }} type="button" className="bg-white text-[#2D4B37] font-semibold leading-5 rounded-full text-sm px-5 py-2.5 hover:bg-gray-100 transition-colors duration-150">Start A New Log</button>
              <Link href="/about">
                <button type="button" className="bg-transparent text-white border border-white/30 hover:bg-white/10 font-medium leading-5 rounded-full text-sm px-5 py-2.5 transition-colors duration-150">About Us</button>
              </Link>
            </div>
          </div>

        </div>

      </div>
      <div className='w-6xl mx-auto min-h-screen'>

        {/* badges section */}
        <div className="flex flex-wrap gap-3 pt-6">
          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150"><img src="https://img.icons8.com/color/48/mountain.png" alt="Mountains" className="w-4 h-4" />Mountains</span>
          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150"><img src="https://img.icons8.com/color/48/beach.png" alt="Beaches" className="w-4 h-4" />Beaches</span>
          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150"><img src="https://img.icons8.com/color/48/city.png" alt="City Breaks" className="w-4 h-4" />City Breaks</span>
          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150"><img src="https://img.icons8.com/color/48/food-bar.png" alt="Food Trails" className="w-4 h-4" />Food Trails</span>
          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150"><img src="https://img.icons8.com/color/48/compass.png" alt="Off-the-grid" className="w-4 h-4" />Off-the-grid</span>
          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150"><img src="https://img.icons8.com/color/48/camping-tent.png" alt="Camping" className="w-4 h-4" />Camping</span>
          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150"><img src="https://img.icons8.com/color/48/train.png" alt="Train Travel" className="w-4 h-4" />Train Travel</span>
          <span className="inline-flex items-center bg-[#eef5f1] border border-[#2D4B37]/20 text-[#2D4B37] text-sm font-medium px-4 py-1.5 rounded gap-2 cursor-pointer hover:bg-[#2D4B37] hover:text-white hover:border-[#2D4B37] transition-all duration-150"><img src="https://img.icons8.com/color/48/road.png" alt="Road Trip" className="w-4 h-4" />Road Trip</span>
        </div>





        {/* divider */}
        <div className="w-full border-t border-[#e8e4da] my-5" />




        <div className='pt-1'>
          <h1 className='text-shadow-lg text-3xl font-bold text-start'>Featured Logs</h1>
          <span className='text-[#2D4B37] text-l'>From Our Community</span>
        </div>



        {/* featured logs - big card */}
        <div className="pt-3">
          <div className="bg-white block border border-[#e8e4da] rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-200 overflow-hidden">
            <div className="h-48 w-full relative">
              <img src="https://plus.unsplash.com/premium_photo-1697729628826-ca05ca7f5e8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kalpa landscape" className="w-full h-full object-cover object-center" />
              <span className="absolute bottom-3 left-3 text-xs font-medium px-2 py-0.5 rounded-full bg-black/30 text-white backdrop-blur-sm">Kalpa, India</span>
            </div>
            <div className="p-4">
              <a href="#"><h5 className="mt-2 mb-1 text-sm font-bold tracking-tight text-heading leading-snug">Kinner Kailash at Sunrise</h5></a>
              <p className="text-xs text-secondary leading-relaxed line-clamp-2">A forgotten village in Kinnaur where apple blossoms frame the Kinner Kailash peak turning gold and pink as the first light hits the snow.</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs font-medium text-[#2D4B37]">-by Priya S.</span>
              </div>
            </div>
          </div>
        </div>





        {/* featured logs vertical cards 1st row */}
        <div className='pt-3 flex flex-row gap-5 w-full'>
          <div className='w-1/2'>
            <div className="bg-white block border border-[#e8e4da] rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-200 overflow-hidden">
              <div className="h-36 w-full relative">
                <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&auto=format&fit=crop" alt="Landour landscape" className="w-full h-full object-cover object-center" />
                <span className="absolute bottom-2 left-2 text-xs font-medium px-2 py-0.5 rounded-full bg-black/30 text-white backdrop-blur-sm">Landour, India</span>
              </div>
              <div className="p-4">
                <a href="#"><h5 className="mt-2 mb-1 text-sm font-bold tracking-tight text-heading leading-snug">The Quiet Hills of Landour</h5></a>
                <p className="text-xs text-secondary leading-relaxed line-clamp-2">Tucked above Mussoorie, Landour is where Ruskin Bond still lives, cobbled lanes, old bakeries, and pine forests that smell like another century.</p>
                <div className="flex items-center justify-between mt-3"><span className="text-xs font-medium text-[#2D4B37]">by Arjun M.</span></div>
              </div>
            </div>
          </div>

          <div className='w-1/2'>
            <div className="bg-white block border border-[#e8e4da] rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-200 overflow-hidden">
              <div className="h-36 w-full relative">
                <img src="https://plus.unsplash.com/premium_photo-1697730484307-a05ad3449015?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Darjeeling landscape" className="w-full h-full object-cover object-center" />
                <span className="absolute bottom-2 left-2 text-xs font-medium px-2 py-0.5 rounded-full bg-black/30 text-white backdrop-blur-sm">Darjeeling, India</span>
              </div>
              <div className="p-4">
                <a href="#"><h5 className="mt-2 mb-1 text-sm font-bold tracking-tight text-heading leading-snug">Tea Gardens & Toy Trains</h5></a>
                <p className="text-xs text-secondary leading-relaxed line-clamp-2">Rolling green tea estates, the smell of first flush in the air, and a tiny steam train winding through the clouds toward Kanchenjunga.</p>
                <div className="flex items-center justify-between mt-3"><span className="text-xs font-medium text-[#2D4B37]">by Riya B.</span></div>
              </div>
            </div>
          </div>
        </div>





        {/* featured logs vertical cards 2nd row */}
        <div className='pt-3 flex flex-row gap-5 w-full'>
          <div className='w-1/2'>
            <div className="bg-white block border border-[#e8e4da] rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-200 overflow-hidden">
              <div className="h-36 w-full relative">
                <img src="https://images.unsplash.com/photo-1614591276564-7b3e69347a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D" alt="Kashmir landscape" className="w-full h-full object-cover object-center" />
                <span className="absolute bottom-2 left-2 text-xs font-medium px-2 py-0.5 rounded-full bg-black/30 text-white backdrop-blur-sm">Kashmir, India</span>
              </div>
              <div className="p-4">
                <a href="#"><h5 className="mt-2 mb-1 text-sm font-bold tracking-tight text-heading leading-snug">Dal Lake at Dawn</h5></a>
                <p className="text-xs text-secondary leading-relaxed line-clamp-2">Waking up on a houseboat as mist lifts off Dal Lake, shikaras gliding past, the Himalayas appearing slowly through the fog.</p>
                <div className="flex items-center justify-between mt-3"><span className="text-xs font-medium text-[#2D4B37]">by Zara K.</span></div>
              </div>
            </div>
          </div>

          <div className='w-1/2'>
            <div className="bg-white block border border-[#e8e4da] rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-200 overflow-hidden">
              <div className="h-36 w-full relative">
                <img src="https://images.unsplash.com/photo-1516406742981-2b7d67ec4ae8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D" alt="Manali landscape" className="w-full h-full object-cover object-center" />
                <span className="absolute bottom-2 left-2 text-xs font-medium px-2 py-0.5 rounded-full bg-black/30 text-white backdrop-blur-sm">Manali, India</span>
              </div>
              <div className="p-4">
                <a href="#"><h5 className="mt-2 mb-1 text-sm font-bold tracking-tight text-heading leading-snug">Snow Peaks & Apple Orchards</h5></a>
                <p className="text-xs text-secondary leading-relaxed line-clamp-2">The Beas river roaring below, apple trees lining every road, and Rohtang Pass disappearing into snowstorms above the clouds.</p>
                <div className="flex items-center justify-between mt-3"><span className="text-xs font-medium text-[#2D4B37]">by Kabir S.</span></div>
              </div>
            </div>
          </div>
        </div>



        {/* divider */}
        <div className="w-full border-t border-[#e8e4da] my-5" />




        {/* how it works */}
        <div className="max-w-4xl mx-auto px-5 py-5">
          <p className="text-center text-[11px] font-bold uppercase tracking-[2px] text-[#2D4B37] mb-3">How it works</p>
          <h2 className="text-center text-[30px] font-extrabold tracking-tight text-heading mb-12">Three steps to start <span className="text-[#2D4B37]">your travel log</span></h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-neutral-primary-soft border border-default hover:border-[#2D4B37]/20 hover:bg-[#eef5f1] hover:-translate-y-1 rounded-[18px] p-7 transition-all duration-250">
              <div className="text-[#2D4B37]/30 font-extrabold text-[28px] tracking-tight mb-4">01</div>
              <h3 className="font-bold text-[15px] text-heading mb-2">Go Somewhere</h3>
              <p className="text-[13px] text-secondary leading-relaxed">Visit a city, a mountain, a beach anywhere worth remembering. The world is full of stories waiting to be told.</p>
            </div>
            <div className="bg-neutral-primary-soft border border-default hover:border-[#2D4B37]/20 hover:bg-[#eef5f1] hover:-translate-y-1 rounded-[18px] p-7 transition-all duration-250">
              <div className="text-[#2D4B37]/30 font-extrabold text-[28px] tracking-tight mb-4">02</div>
              <h3 className="font-bold text-[15px] text-heading mb-2">Create Your Log</h3>
              <p className="text-[13px] text-secondary leading-relaxed">Add photos, write about the place, drop in your hidden gems and tips that only you know about.</p>
            </div>
            <div className="bg-neutral-primary-soft border border-default hover:border-[#2D4B37]/20 hover:bg-[#eef5f1] hover:-translate-y-1 rounded-[18px] p-7 transition-all duration-250">
              <div className="text-[#2D4B37]/30 font-extrabold text-[28px] tracking-tight mb-4">03</div>
              <h3 className="font-bold text-[15px] text-heading mb-2">Inspire Others</h3>
              <p className="text-[13px] text-secondary leading-relaxed">Your story helps the next traveller discover something real. Share underrated spots the guidebooks always miss.</p>
            </div>
          </div>
        </div>




        {/* last section */}
        <div className="w-full mx-auto px-8 py-16">
          <div className="rounded-[18px] overflow-hidden relative min-h-80">
            <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&auto=format&fit=crop&q=70" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-linear-to-r from-[#0c1c10] via-[#0c1c10]/80 to-transparent" />

            <div className="relative z-10 flex flex-col justify-center h-full px-12 py-16 max-w-lg">
              <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#a8d5b5] mb-4">Start Today</p>
              <h2 className="text-[30px] font-extrabold tracking-tight text-white leading-tight mb-4">
                Ready To Document Your <span className="text-[#a8d5b5]">next adventure?</span>
              </h2>
              <p className="text-sm text-white/55 leading-relaxed mb-9 max-w-xs">
                Join thousands of travellers sharing honest stories, hidden gems and unforgettable moments all around the world.
              </p>

              {/* buttons */}
              <div className="flex flex-col gap-3 items-start">
                <button onClick={() => { if (!session) { Router.push("/Login"); return } Router.push("/newlog") }} className="inline-flex items-center gap-2 bg-white text-[#2D4B37] font-bold text-sm px-7 py-3 rounded-full hover:bg-[#eef5f1] active:scale-95 transition-all duration-150 shadow-md">
                  Create Your First Log
                </button>
                <button onClick={() => { if (!session) { Router.push("/Login"); return } Router.push("/explorelogs") }} className="text-white/60 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white/70 transition-all duration-150">
                  Or browse existing logs-
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default page


















