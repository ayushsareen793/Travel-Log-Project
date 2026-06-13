"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const page = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [logs, setlogs] = useState([])
  const [loading, setloading] = useState(true)
  const [search, setsearch] = useState('')
  const [activecategory, setactivecategory] = useState("all")



  // const CATEGORIES = ['all', 'Mountains', 'Beaches', 'City Breaks', 'Food Trails', 'Off-the-grid', 'Camping', 'Train Travel', 'Road Trip']

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
  if (filtered.length === 0) {
    return <p>No Logs Yet</p>

  }

  return (
    <>
      <div className='w-full min-h-screen'>

        {/* heading */}
        <div className="bg-[#2D4B37] px-6 py-16">
          <div className="w-full mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#a8d5b5] mb-5">Explore Logs</p>
            <h1 className="text-5xl font-bold text-white leading-tight mb-4">Real Places Told By,<br /><span className="italic text-[#a8d5b5]">Real Sunseekers.</span></h1>
            <p className="text-sm text-white/55 leading-relaxed max-w-lg">Every log here was written by someone who actually showed up. No sponsored content, no SEO fluff.</p>
          </div>
        </div>




        {/* search */}
        <div className='max-w-7xl mx-auto px-4 pt-5'>
          <input type="text" className='w-full bg-white px-4 py-2.5 border border-[#e8e4da] rounded-xl text-sm m-5' value={search} onChange={(e) => setsearch(e.target.value)} />
        </div>




        {/* buttons section */}
        <div className="flex flex-wrap gap-3 w-full items-center justify-center mx-auto">
          <button onClick={() => { setactivecategory("Mountains") }} type="button" className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${activecategory === 'Mountains' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20'}`} >
            <img src="https://img.icons8.com/color/48/mountain.png" alt="Mountains" className="w-4 h-4" />
            Mountains
          </button>

          <button onClick={() => { setactivecategory("Beaches") }} type="button" className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${activecategory === 'Beaches' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20'}`} >
            <img src="https://img.icons8.com/color/48/beach.png" alt="Beaches" className="w-4 h-4" />
            Beaches
          </button>

          <button onClick={() => { setactivecategory("City Breaks") }} type="button" className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${activecategory === 'City Breaks' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20'}`} >
            <img src="https://img.icons8.com/color/48/city.png" alt="City Breaks" className="w-4 h-4" />
            City Breaks
          </button>

          <button onClick={() => { setactivecategory("Food Trails") }} type="button" className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${activecategory === 'Food Trails' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20'}`} >
            <img src="https://img.icons8.com/color/48/food-bar.png" alt="Food Trails" className="w-4 h-4" />
            Food Trails
          </button>

          <button onClick={() => { setactivecategory("Off-the-grid") }} type="button" className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${activecategory === 'Off-the-grid' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20'}`} >
            <img src="https://img.icons8.com/color/48/compass.png" alt="Off-the-grid" className="w-4 h-4" />
            Off-the-grid
          </button>

          <button onClick={() => { setactivecategory("Camping") }} type="button" className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${activecategory === 'Camping' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20'}`} >
            <img src="https://img.icons8.com/color/48/camping-tent.png" alt="Camping" className="w-4 h-4" />
            Camping
          </button>

          <button onClick={() => { setactivecategory("Train Travel") }} type="button" className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${activecategory === 'Train Travel' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20'}`} >
            <img src="https://img.icons8.com/color/48/train.png" alt="Train Travel" className="w-4 h-4" />
            Train Travel
          </button>

          <button onClick={() => { setactivecategory("Road Trip") }} type="button" className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${activecategory === 'Road Trip' ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20'}`} >
            <img src="https://img.icons8.com/color/48/road.png" alt="Road Trip" className="w-4 h-4" />
            Road Trip
          </button>
        </div>



        {/* big card */}
        < div className='pt-5 max-w-5xl mx-auto px-6' >
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
        </div >











        {/* grid cards */}
        < div className='pt-5 max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 gap-4' >
          {
            filtered.slice(1).map((log) => {
              return (
                <div className='bg-white border border-[#e8e4da] rounded-2xl p-4 mb-4' key={log._id}>
                  <p className='font-bold text-sm text-[#1c1c19]'>{log.title}</p>
                  <p className='text-xs text-gray-500 leading-relaxed line-clamp-2'>{log.about} </p>
                  <p className='text-xs text-gray-400'>{log.country},{log.city}</p>
                  <div className='flex items-center gap-2'>
                    <div className='w-6 h-6 rounded-full bg-[#2D4B37]/20 flex items-center justify-center text-xs font-bold text-[#2D4B37]'>
                      <p>{log.author.name[0]}</p>
                    </div>
                    <p className='text-xs font-medium text-[#2D4B37]'>{log.author.name}</p>
                  </div>


                </div>
              )
            })

          }

        </div >






        
        {/* last section */}
        <div className='max-w-5xl mx-auto px-6 py-10'>
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
              className="inline-block bg-white text-[#2D4B37] text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors" >
              Write a log
            </button>
          </div>
        </div>



      </div >









    </>

  )
}

export default page