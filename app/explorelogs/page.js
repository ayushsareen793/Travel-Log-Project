
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
    return (
      <div className="w-full min-h-screen bg-[#f7f5f0] flex items-center justify-center">
        <p className="text-sm text-gray-400">Loading logs…</p>
      </div>
    )
  }

  const gotoexplore = () => {
    if (!session) {
      router.push("/Login")
      return;
    }
    router.push("/newlog")
  }

  return (
    <>
      <div className="w-full min-h-screen bg-[#f7f5f0]">

        {/* heading section */}
        <div className="relative min-h-[70vh] flex flex-col overflow-hidden">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&auto=format" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-linear-to-b from-[#142819]/85 via-[#142819]/55 to-[#f7f5f0]" />

          <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 pt-24 pb-20">
            <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#a8d5b5] mb-6">Explore Logs</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] mb-6 max-w-2xl">
              Real Places Told By,<br /><span className="italic text-[#a8d5b5]">Real Sunseekers.</span>
            </h1>
            <p className="text-sm text-white/55 leading-relaxed max-w-sm">Every log here was written by someone who actually showed up. No sponsored content, no SEO fluff.</p>
          </div>
        </div>

        {/* search bar  */}
        <div className="px-6 md:px-16 pt-10 pb-4">
          <input type="text" placeholder="Search by place, city or country" className="w-full bg-white px-4 py-3 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" value={search} onChange={(e) => setsearch(e.target.value)} />
        </div>

        {/* category filter  */}
        <div className="pb-6">
          <div className="overflow-x-auto">
            <div className="flex gap-2 px-6 md:px-16 w-max">

              <button onClick={() => setactivecategory("all")} type="button" className={`inline-flex items-center text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-150 ${activecategory === 'all' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#1c1c19] border-[#e8e4da] hover:border-[#2D4B37]/30'}`}>
                All
              </button>

              <button onClick={() => setactivecategory("Mountains")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-150 ${activecategory === 'Mountains' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#1c1c19] border-[#e8e4da] hover:border-[#2D4B37]/30 hover:bg-[#eef5f1]'}`}>
                <img src="https://img.icons8.com/color/48/mountain.png" alt="Mountains" className="w-4 h-4" />
                Mountains
              </button>

              <button onClick={() => setactivecategory("Beaches")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-150 ${activecategory === 'Beaches' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#1c1c19] border-[#e8e4da] hover:border-[#2D4B37]/30 hover:bg-[#eef5f1]'}`}>
                <img src="https://img.icons8.com/color/48/beach.png" alt="Beaches" className="w-4 h-4" />
                Beaches
              </button>

              <button onClick={() => setactivecategory("City Breaks")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-150 ${activecategory === 'City Breaks' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#1c1c19] border-[#e8e4da] hover:border-[#2D4B37]/30 hover:bg-[#eef5f1]'}`}>
                <img src="https://img.icons8.com/color/48/city.png" alt="City Breaks" className="w-4 h-4" />
                City Breaks
              </button>

              <button onClick={() => setactivecategory("Food Trails")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-150 ${activecategory === 'Food Trails' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#1c1c19] border-[#e8e4da] hover:border-[#2D4B37]/30 hover:bg-[#eef5f1]'}`}>
                <img src="https://img.icons8.com/color/48/food-bar.png" alt="Food Trails" className="w-4 h-4" />
                Food Trails
              </button>

              <button onClick={() => setactivecategory("Off-the-grid")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-150 ${activecategory === 'Off-the-grid' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#1c1c19] border-[#e8e4da] hover:border-[#2D4B37]/30 hover:bg-[#eef5f1]'}`}>
                <img src="https://img.icons8.com/color/48/compass.png" alt="Off-the-grid" className="w-4 h-4" />
                Off-the-grid
              </button>

              <button onClick={() => setactivecategory("Camping")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-150 ${activecategory === 'Camping' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#1c1c19] border-[#e8e4da] hover:border-[#2D4B37]/30 hover:bg-[#eef5f1]'}`}>
                <img src="https://img.icons8.com/color/48/camping-tent.png" alt="Camping" className="w-4 h-4" />
                Camping
              </button>

              <button onClick={() => setactivecategory("Train Travel")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-150 ${activecategory === 'Train Travel' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#1c1c19] border-[#e8e4da] hover:border-[#2D4B37]/30 hover:bg-[#eef5f1]'}`}>
                <img src="https://img.icons8.com/color/48/train.png" alt="Train Travel" className="w-4 h-4" />
                Train Travel
              </button>

              <button onClick={() => setactivecategory("Road Trip")} type="button" className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-150 ${activecategory === 'Road Trip' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-white text-[#1c1c19] border-[#e8e4da] hover:border-[#2D4B37]/30 hover:bg-[#eef5f1]'}`}>
                <img src="https://img.icons8.com/color/48/road.png" alt="Road Trip" className="w-4 h-4" />
                Road Trip
              </button>

            </div>
          </div>
        </div>

        {/* if its empty state then show no logs and if its not then cards */}
        {filtered.length === 0 ? (

          <div className="text-center py-24 px-6">
            <p className="text-sm font-medium text-[#1c1c19] mb-1">No logs found</p>
            <p className="text-xs text-gray-400 mb-4">Try a different search or category</p>
            <button onClick={() => { setsearch(''); setactivecategory('all') }} className="text-xs text-[#2D4B37] underline underline-offset-2">
              Clear filters
            </button>
          </div>
        ) : (
          <>


            {/* latest logs  */}
            <div className="px-6 md:px-16 pt-6 pb-4">
              <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-6">Latest Log</p>

              <Link href={`/logs/${filtered[0]._id}`} className="block">
                {filtered[0].coverPhoto ? (
                  <div className="group cursor-pointer">
                    <div className="relative rounded-3xl overflow-hidden bg-[#1a3020] h-96">
                      <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={filtered[0].coverPhoto} alt={filtered[0].title} />
                      <div className="absolute inset-0 bg-linear-to-t from-[#0c1c10]/90 via-[#0c1c10]/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-center gap-1.5 text-white/50 text-xs mb-2">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
                          {filtered[0].city}, {filtered[0].country}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">{filtered[0].title}</h3>
                        <p className="text-sm text-white/60 leading-relaxed line-clamp-2 max-w-lg mb-4">{filtered[0].about}</p>
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#a8d5b5]/20 flex items-center justify-center text-xs font-bold text-[#a8d5b5]">
                            {filtered[0].author.name[0]}
                          </div>
                          <p className="text-xs font-medium text-[#a8d5b5]">{filtered[0].author.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-[#e8e4da] rounded-3xl overflow-hidden">
                    <div className="w-full h-40 bg-[#eef5f1] flex items-center justify-center">
                      <img src="https://img.icons8.com/color/48/image.png" className="w-8 h-8 opacity-40" />
                    </div>
                    <div className="p-6">
                      <p className="font-bold text-lg text-[#1c1c19] mb-1">{filtered[0].title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-2">{filtered[0].about}</p>
                      <p className="text-xs text-gray-400 mb-3">{filtered[0].city}, {filtered[0].country}</p>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#2D4B37]/20 flex items-center justify-center text-xs font-bold text-[#2D4B37]">
                          {filtered[0].author.name[0]}
                        </div>
                        <p className="text-xs font-medium text-[#2D4B37]">{filtered[0].author.name}</p>
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            </div>



            {/* all grid cards  */}
            <div className="px-6 md:px-16 pt-6 pb-16">
              <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-6">All Logs</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.slice(1).map((log) => (
                  <Link href={`/logs/${log._id}`} key={log._id} className="block">
                    <div className="group cursor-pointer">
                      {log.coverPhoto ? (
                        <div className="relative rounded-3xl overflow-hidden bg-[#1a3020] h-64">
                          <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={log.coverPhoto} alt={log.title} />
                          <div className="absolute inset-0 bg-linear-to-t from-[#0c1c10]/90 via-transparent to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <div className="flex items-center gap-1.5 text-white/50 text-xs mb-1.5">
                              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
                              {log.city}, {log.country}
                            </div>
                            <h3 className="text-xl font-bold text-white leading-snug mb-1">{log.title}</h3>
                            <p className="text-xs text-white/50 line-clamp-1 mb-2">{log.about}</p>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-[#a8d5b5]/20 flex items-center justify-center text-[10px] font-bold text-[#a8d5b5]">
                                {log.author.name[0]}
                              </div>
                              <p className="text-xs font-medium text-[#a8d5b5]">{log.author.name}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white border border-[#e8e4da] rounded-3xl overflow-hidden">
                          <div className="w-full h-32 bg-[#eef5f1] flex items-center justify-center">
                            <img src="https://img.icons8.com/color/48/image.png" className="w-8 h-8 opacity-40" />
                          </div>
                          <div className="p-4">
                            <p className="font-bold text-sm text-[#1c1c19]">{log.title}</p>
                            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{log.about}</p>
                            <p className="text-xs text-gray-400 mb-2">{log.city}, {log.country}</p>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-[#2D4B37]/20 flex items-center justify-center text-xs font-bold text-[#2D4B37]">
                                {log.author.name[0]}
                              </div>
                              <p className="text-xs font-medium text-[#2D4B37]">{log.author.name}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>

        )}



        {/* last section */}
        <div className="px-6 md:px-16 py-16">
          <div className="relative rounded-3xl overflow-hidden min-h-80">
            <img src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?q=80&w=1259&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-linear-to-r from-[#0c1c10]/90 via-[#0c1c10]/60 to-transparent" />

            <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-16 py-16 max-w-lg">
              <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#a8d5b5] mb-5">Contribute</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">Add Your <span className="italic text-[#a8d5b5]">Journey.</span></h2>
              <p className="text-sm text-white/50 leading-relaxed mb-9 max-w-xs">Been somewhere worth writing about? Your log could help the next traveller find it.</p>
              <button onClick={gotoexplore} className='w-fit inline-flex items-center gap-2 bg-white text-[#2D4B37] font-bold text-sm px-5 py-2 rounded-full hover:bg-[#eef5f1] active:scale-95 transition-all duration-150 shadow-md'>
                Write A Log
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Page