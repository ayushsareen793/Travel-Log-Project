"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const Page = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [logs, setlogs] = useState([])
  const [loading, setloading] = useState(true)
  const [search, setsearch] = useState('')
  const [activecategory, setactivecategory] = useState("all")

  // filter logs based on search and category
  const filtered = logs.filter((log) => {
    const matchSearch = log.title.toLowerCase().includes(search.toLowerCase())
    const matchCategory = activecategory === 'all' || log.categories.includes(activecategory)
    return matchSearch && matchCategory
  })

  useEffect(() => {
    const getdata = async () => {
      const res = await fetch("/api/logs");
      const data = await res.json()
      setlogs(data.logs)
      setloading(false)
      console.log(data.logs);
    }
    getdata(false)
  }, [])

  if (loading) {
    return <p>Loading..</p>
  }


  return (
    <>
      <div className='w-full min-h-screen'>

        {/* heading section */}
        <div className="relative bg-[#2D4B37] overflow-hidden" style={{ minHeight: '380px' }}>

          
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />

           <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(20,40,25,0.95) 0%, rgba(20,40,25,0.85) 30%, rgba(20,40,25,0.5) 55%, rgba(20,40,25,0.1) 75%, transparent 100%)' }} />

          
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} />

          {/* Content */}
          <div className="relative z-10 px-6 py-16">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#a8d5b5] mb-5">Explore Logs</p>
            <h1 className="text-5xl font-bold text-white leading-tight mb-4 max-w-lg">Real Places Told By,<br /><span className="italic text-[#a8d5b5]">Real Sunseekers.</span></h1>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">Every log here was written by someone who actually showed up. No sponsored content, no SEO fluff.</p>
          </div>

        </div>









        {/* search */}
        <div className='px-6 pt-8 pb-3 bg-[#f7f5f0]'>
          <input type="text" placeholder='Search By Place, City or Country' className='w-full bg-white px-4 py-3 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150' value={search} onChange={(e) => setsearch(e.target.value)} />
        </div>





        {/* buttons section */}
        <div className="px-6 pt-2 pb-6 bg-[#f7f5f0]">
          <div className="flex flex-wrap gap-2">

            <button onClick={() => setactivecategory("all")} type="button" className={`inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-150 ${activecategory === 'all' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#2D4B37] border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
              All
            </button>

            <button onClick={() => setactivecategory("Mountains")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-150 ${activecategory === 'Mountains' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#2D4B37] border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
              <img src="https://img.icons8.com/color/48/mountain.png" alt="Mountains" className="w-4 h-4" />
              Mountains
            </button>

            <button onClick={() => setactivecategory("Beaches")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-150 ${activecategory === 'Beaches' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#2D4B37] border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
              <img src="https://img.icons8.com/color/48/beach.png" alt="Beaches" className="w-4 h-4" />
              Beaches
            </button>

            <button onClick={() => setactivecategory("City Breaks")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-150 ${activecategory === 'City Breaks' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#2D4B37] border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
              <img src="https://img.icons8.com/color/48/city.png" alt="City Breaks" className="w-4 h-4" />
              City Breaks
            </button>

            <button onClick={() => setactivecategory("Food Trails")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-150 ${activecategory === 'Food Trails' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#2D4B37] border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
              <img src="https://img.icons8.com/color/48/food-bar.png" alt="Food Trails" className="w-4 h-4" />
              Food Trails
            </button>

            <button onClick={() => setactivecategory("Off-the-grid")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-150 ${activecategory === 'Off-the-grid' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#2D4B37] border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
              <img src="https://img.icons8.com/color/48/compass.png" alt="Off-the-grid" className="w-4 h-4" />
              Off-the-grid
            </button>

            <button onClick={() => setactivecategory("Camping")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-150 ${activecategory === 'Camping' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#2D4B37] border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
              <img src="https://img.icons8.com/color/48/camping-tent.png" alt="Camping" className="w-4 h-4" />
              Camping
            </button>

            <button onClick={() => setactivecategory("Train Travel")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-150 ${activecategory === 'Train Travel' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#2D4B37] border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
              <img src="https://img.icons8.com/color/48/train.png" alt="Train Travel" className="w-4 h-4" />
              Train Travel
            </button>

            <button onClick={() => setactivecategory("Road Trip")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-150 ${activecategory === 'Road Trip' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#2D4B37] border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
              <img src="https://img.icons8.com/color/48/road.png" alt="Road Trip" className="w-4 h-4" />
              Road Trip
            </button>

          </div>
        </div>



        {/* divider */}
        <div className="w-3/4 h-px bg-[#e8e4da] mx-auto" />



        {/*if its empty state then show no logs and if its not then  cards */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-sm font-medium text-[#1c1c19] mb-1">No logs found</p>
            <p className="text-xs text-gray-400 mb-4">Try a different search or category</p>
            <button onClick={() => { setsearch(''); setactivecategory('all') }} className="text-xs text-[#2D4B37] underline underline-offset-2">
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {/* big card */}
            <div className='pt-5 max-w-7xl mx-auto px-6'>
              <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-4 pt-5">Latest Log</p>
              <div className='bg-white border border-[#e8e4da] rounded-2xl p-4 mb-4'>
                <p className='font-bold text-sm text-[#1c1c19]'>{filtered[0].title}</p>
                <p className='text-xs text-gray-500 leading-relaxed line-clamp-2'>{filtered[0].about}</p>
                <p className='text-xs text-gray-400'>{filtered[0].country}, {filtered[0].city}</p>
                <div className='flex items-center gap-2'>
                  <div className='w-6 h-6 rounded-full bg-[#2D4B37]/20 flex items-center justify-center text-xs font-bold text-[#2D4B37]'>
                    {filtered[0].author.name[0]}
                  </div>
                  <p className='text-xs font-medium text-[#2D4B37]'>{filtered[0].author.name}</p>
                </div>
              </div>
            </div>



            {/* divider */}
            <div className="w-3/4 h-px bg-[#e8e4da] mx-auto" />

            {/* grid cards */}
            <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37]  mb-4 pt-5 max-w-7xl text-start px-6 mx-auto">All Logs</p>
            <div className='pt-5 max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 gap-4'>
              {filtered.slice(1).map((log) => (
                <div className='bg-white border border-[#e8e4da] rounded-2xl p-4 mb-4' key={log._id}>
                  <p className='font-bold text-sm text-[#1c1c19]'>{log.title}</p>
                  <p className='text-xs text-gray-500 leading-relaxed line-clamp-2'>{log.about}</p>
                  <p className='text-xs text-gray-400'>{log.country},{log.city}</p>
                  <div className='flex items-center gap-2'>
                    <div className='w-6 h-6 rounded-full bg-[#2D4B37]/20 flex items-center justify-center text-xs font-bold text-[#2D4B37]'>
                      {log.author.name[0]}
                    </div>
                    <p className='text-xs font-medium text-[#2D4B37]'>{log.author.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}


        {/* last section */}
        <div className='max-w-5xl mx-auto px-6 py-1'>
          <div className="bg-[#2D4B37] rounded-[18px] p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Add your journey.</h2>
            <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-sm mx-auto">
              Been somewhere worth writing about?<br />
              Your log could help the next traveller find it.
            </p>
            <button onClick={() => {
              if (!session) { router.push("/Login"); return }
              router.push("/newlog")
            }}
              className="inline-block bg-white text-[#2D4B37] text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors">
              Write a log
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Page






