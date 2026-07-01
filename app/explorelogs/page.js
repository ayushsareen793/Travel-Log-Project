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
        <div className="relative bg-[#2D4B37] overflow-hidden min-h-100">

          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-linear-to-r from-[#142819]/95 via-[#142819]/50 to-transparent" />
          <div className="absolute inset-0 bg-black/25" />

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
              <div className='bg-white border border-[#e8e4da] rounded-2xl overflow-hidden mb-4'>

                {/* if coverPhoto isnt uploaded then show the icon */}
                {filtered[0].coverPhoto ? (
                  <img className='w-full h-72 object-cover' src={filtered[0].coverPhoto} alt={filtered[0].title} />
                ) : (
                  <div className='w-full h-32 bg-[#eef5f1] flex items-center justify-center'>
                    <img src="https://img.icons8.com/color/48/image.png" className="w-8 h-8 opacity-40" />
                  </div>
                )}

                <div className='p-4'>
                  <p className='font-bold text-sm text-[#1c1c19]'>{filtered[0].title}</p>
                  <p className='text-xs text-gray-500 leading-relaxed line-clamp-2'>{filtered[0].about}</p>
                  <p className='text-xs text-gray-400'>{filtered[0].city},{filtered[0].country}</p>
                  <div className='flex items-center gap-2'>
                    <div className='w-6 h-6 rounded-full bg-[#2D4B37]/20 flex items-center justify-center text-xs font-bold text-[#2D4B37]'>
                      {filtered[0].author.name[0]}
                    </div>
                    <p className='text-xs font-medium text-[#2D4B37]'>{filtered[0].author.name}</p>
                  </div>
                </div>
              </div>
            </div>



            {/* divider */}
            <div className="w-3/4 h-px bg-[#e8e4da] mx-auto" />

            {/* grid cards */}
            <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37]  mb-4 pt-5 max-w-7xl text-start px-6 mx-auto">All Logs</p>
            <div className='pt-5 max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 gap-4'>
              {filtered.slice(1).map((log) => (
                <div className='bg-white border border-[#e8e4da] rounded-2xl overflow-hidden' key={log._id}>
                  {/* if coverPhoto isnt uploaded then show the icon */}
                  {log.coverPhoto ? (
                    <img className='w-full h-42 object-cover' src={log.coverPhoto} alt={log.title} />
                  ) : (
                    <div className='w-full h-32 bg-[#eef5f1] flex items-center justify-center'>
                      <img src="https://img.icons8.com/color/48/image.png" className="w-8 h-8 opacity-40" />
                    </div>
                  )}

                  <div className='p-4'>


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
                </div>
              ))}
            </div>
          </>
        )}


        {/* last section */}
        <div className='max-w-5xl mx-auto px-6 py-1'>
          <div className="rounded-[18px] overflow-hidden relative min-h-80">

            <img src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?q=80&w=1259&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-linear-to-r from-[#0c1c10] via-[#0c1c10]/80 to-transparent" />

            <div className="relative z-10 flex flex-col justify-center h-full px-12 py-16 max-w-lg">
              <h2 className="text-3xl font-bold text-white leading-tight mb-4">
                Add your<br />journey.
              </h2>
              <p className="text-sm text-white/55 leading-relaxed mb-9 max-w-xs">
                Been somewhere worth writing about? Your log could help the next traveller find it.
              </p>

              {/* buttons*/}
              <div className="flex flex-col gap-3 items-start">
                <button onClick={() => { if (!session) { router.push("/Login"); return } router.push("/newlog") }} className="inline-flex items-center gap-2 bg-white text-[#2D4B37] font-bold text-sm px-7 py-3 rounded-full hover:bg-[#eef5f1] active:scale-95 transition-all duration-150 shadow-md">
                  Write a log
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Page






