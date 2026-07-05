"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const page = () => {
  const { data: session } = useSession()
  const Router = useRouter()

  const goToNewLog = () => {
    if (!session) {
      Router.push("/Login");
      return;
    }
    Router.push("/newlog");
  };


  const goToExplore = () => {
    if (!session) {
      Router.push("/Login");
      return;
    }
    Router.push("/explorelogs");
  };

  return (
    <div className="w-full min-h-screen bg-[#f7f5f0]">

      {/* heading section */}
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&auto=format" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-b from-[#142819]/85 via-[#142819]/55 to-[#f7f5f0]" />

        <div className="relative z-10 flex-1 flex flex-col justify-center  px-6 md:px-16 pt-32 pb-32">
          <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#a8d5b5] mb-6">Community Travel Logs</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            Where will<br /><span className="italic text-[#a8d5b5]">you go next?</span>
          </h1>
          <p className="text-sm text-white/55 leading-relaxed max-w-sm mb-9">Curated travel logs from adventurers exploring the world's most extraordinary places.</p>
          <div className="flex flex-wrap gap-3">
            <button onClick={goToNewLog} type="button" className="inline-flex items-center gap-2 bg-white text-[#2D4B37] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#eef5f1] transition-all duration-150 shadow-lg">
              Start a New Log
              <img src="https://img.icons8.com/ios-filled/50/2D4B37/forward-arrow.png" className="w-3.5 h-3.5" />
            </button>
            <Link href="/about">
              <button type="button" className="text-white/60 hover:text-white text-sm font-medium border border-white/20 px-6 py-3 rounded-full hover:border-white/40 transition-all duration-150">About Us</button>
            </Link>
          </div>
        </div>
      </div>




      {/* featured logs*/}
      <div className="px-6 md:px-16 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#2D4B37]/50 mb-2">From our community</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c1c19]">Featured Logs</h2>
          </div>
          <button type="button" onClick={goToExplore} className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D4B37] hover:gap-3 transition-all duration-200">
            View all
            <img src="https://img.icons8.com/ios-filled/50/2D4B37/forward-arrow.png" className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* feature card */}
          <div className="md:col-span-8 group cursor-pointer">
            <div className="relative rounded-3xl overflow-hidden bg-[#1a3020] h-80">
              <img src="https://plus.unsplash.com/premium_photo-1697729628826-ca05ca7f5e8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kalpa landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0c1c10]/90 via-[#0c1c10]/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[9px] font-bold uppercase tracking-[3px] bg-[#a8d5b5]/20 backdrop-blur-sm text-[#a8d5b5] px-3 py-1 rounded-full">Mountains</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex items-center gap-1.5 text-white/50 text-xs mb-2">
                  <img src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png" className="w-3 h-3" /> Kalpa, India
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">Kinner Kailash at Sunrise</h3>
                <p className="text-sm text-white/60 leading-relaxed line-clamp-2 max-w-lg mb-4">A forgotten village in Kinnaur where apple blossoms frame the Kinner Kailash peak turning gold and pink as the first light hits the snow.</p>
                <span className="text-xs text-[#a8d5b5] font-medium">— Priya S.</span>
              </div>
            </div>
          </div>

          {/* square card */}
          <div className="md:col-span-4 group cursor-pointer">
            <div className="relative rounded-3xl overflow-hidden bg-[#1a3020] h-80">
              <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&auto=format&fit=crop" alt="Landour landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0c1c10]/90 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[9px] font-bold uppercase tracking-[3px] bg-white/15 backdrop-blur-sm text-white px-3 py-1 rounded-full">Off-the-grid</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-1.5 text-white/50 text-xs mb-1.5">
                  <img src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png" className="w-3 h-3" /> Landour, India
                </div>
                <h3 className="text-xl font-bold text-white leading-snug mb-3">The Quiet Hills of Landour</h3>
                <span className="text-xs text-[#a8d5b5] font-medium">— Arjun M.</span>
              </div>
            </div>
          </div>

          {/* medium card : Darjeeling */}
          <div className="md:col-span-6 group cursor-pointer">
            <div className="relative rounded-3xl overflow-hidden bg-[#1a3020] h-56">
              <img src="https://plus.unsplash.com/premium_photo-1697730484307-a05ad3449015?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Darjeeling landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0c1c10]/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-1.5 text-white/50 text-xs mb-1.5">
                  <img src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png" className="w-3 h-3" /> Darjeeling, India
                </div>
                <h3 className="text-xl font-bold text-white leading-snug mb-1">Tea Gardens & Toy Trains</h3>
                <p className="text-xs text-white/50 line-clamp-1 mb-2">Rolling green tea estates, the smell of first flush in the air, and a tiny steam train winding through the clouds toward Kanchenjunga.</p>
                <span className="text-xs text-[#a8d5b5] font-medium">— Riya B.</span>
              </div>
            </div>
          </div>

          {/* medium card:Kashmir */}
          <div className="md:col-span-6 group cursor-pointer">
            <div className="relative rounded-3xl overflow-hidden bg-[#1a3020] h-56">
              <img src="https://images.unsplash.com/photo-1614591276564-7b3e69347a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D" alt="Kashmir landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0c1c10]/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-1.5 text-white/50 text-xs mb-1.5">
                  <img src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png" className="w-3 h-3" /> Kashmir, India
                </div>
                <h3 className="text-xl font-bold text-white leading-snug mb-1">Dal Lake at Dawn</h3>
                <p className="text-xs text-white/50 line-clamp-1 mb-2">Waking up on a houseboat as mist lifts off Dal Lake, shikaras gliding past, the Himalayas appearing slowly through the fog.</p>
                <span className="text-xs text-[#a8d5b5] font-medium">— Zara K.</span>
              </div>
            </div>
          </div>

          {/* full-width text card */}
          <div className="md:col-span-12 group cursor-pointer">
            <div className="bg-white rounded-3xl border border-[#e8e4da] hover:border-[#2D4B37]/30 hover:shadow-lg transition-all duration-200 p-7 flex flex-col md:flex-row md:items-center gap-6">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#eef5f1] flex items-center justify-center">
                <img src="https://img.icons8.com/color/48/mountain.png" className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-1.5">
                  <img src="https://img.icons8.com/ios-filled/50/6b7268/marker.png" className="w-3 h-3" /> Manali, India
                </div>
                <h3 className="text-xl font-bold text-[#1c1c19] mb-1">Snow Peaks & Apple Orchards</h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">The Beas river roaring below, apple trees lining every road, and Rohtang Pass disappearing into snowstorms above the clouds.</p>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="text-xs text-[#2D4B37] font-semibold">-Kabir S.</span>
                <span className="text-[9px] uppercase tracking-wider text-gray-400">Mountains</span>
              </div>
              <img src="https://img.icons8.com/ios-filled/50/2D4B37/forward-arrow.png" className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 shrink-0" />
            </div>
          </div>

        </div>
      </div>




      {/* how it works section*/}
      <div className="bg-[#2D4B37] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 80px)' }} />
        <div className="relative z-10 px-6 md:px-16 py-20">
          <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#a8d5b5]/60 mb-3">Get started</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-14">Three steps to your <span className="italic text-[#a8d5b5]">travel log.</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
            <div className="bg-[#2D4B37] hover:bg-[#1e3326] transition-colors duration-200 p-10">
              <div className="flex items-start justify-between mb-8">
                <span className="text-6xl font-bold text-white leading-none">01</span>
                <div className="w-10 h-10 rounded-full bg-[#a8d5b5]/15 flex items-center justify-center">
                  <img src="https://img.icons8.com/ios-filled/50/a8d5b5/marker.png" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Go Somewhere</h3>
              <p className="text-sm text-white/50 leading-relaxed">Visit a city, a mountain, a beach - anywhere worth remembering. The world is full of stories waiting to be told.</p>
            </div>


            <div className="bg-[#2D4B37] hover:bg-[#1e3326] transition-colors duration-200 p-10">
              <div className="flex items-start justify-between mb-8">
                <span className="text-6xl font-bold text-white leading-none">02</span>
                <div className="w-10 h-10 rounded-full bg-[#a8d5b5]/15 flex items-center justify-center">
                  <img src="https://img.icons8.com/ios-filled/50/a8d5b5/pencil.png" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Create Your Log</h3>
              <p className="text-sm text-white/50 leading-relaxed">Add photos, write about the place, drop in hidden gems and tips that only you know about.</p>
            </div>


            <div className="bg-[#2D4B37] hover:bg-[#1e3326] transition-colors duration-200 p-10">
              <div className="flex items-start justify-between mb-8">
                <span className="text-6xl font-bold text-white leading-none">03</span>
                <div className="w-10 h-10 rounded-full bg-[#a8d5b5]/15 flex items-center justify-center">
                  <img src="https://img.icons8.com/?size=50&id=11735&format=png&color=a8d5b5" alt="People" className="w-5 h-5 object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Inspire Others</h3>
              <p className="text-sm text-white/50 leading-relaxed">Your story helps the next traveller find something real. Share the underrated spots guidebooks always miss.</p>
            </div>
          </div>
        </div>
      </div>




      {/* last section */}
      <div className="px-6 md:px-16 py-16">
        <div className="relative rounded-3xl overflow-hidden min-h-96">
          <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&auto=format&fit=crop&q=70" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-linear-to-r from-[#0c1c10]/90 via-[#0c1c10]/60 to-transparent" />

          <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-16 py-20 max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#a8d5b5] mb-5">Start today</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">Ready to document your <span className="italic text-[#a8d5b5]">next adventure?</span></h2>
            <p className="text-sm text-white/50 leading-relaxed mb-10 max-w-sm">Join thousands of travellers sharing honest stories, hidden gems and unforgettable moments from all around the world.</p>
            <div className="flex flex-col items-start gap-4">
              <button type="button" onClick={goToNewLog} className="inline-flex items-center gap-2.5 bg-white text-[#2D4B37] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-[#eef5f1] active:scale-95 transition-all duration-150 shadow-xl">
                Create Your First Log
                <img src="https://img.icons8.com/ios-filled/50/2D4B37/forward-arrow.png" className="w-3.5 h-3.5" />
              </button>
              <button type="button" onClick={goToExplore} className="text-white/50 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/50 transition-all duration-150">
                Or browse existing logs
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page

