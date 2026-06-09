"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const page = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [logs, setlogs] = useState([])
  const [loading, setloading] = useState(true)



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
  if (logs.length===0) {
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

        <div className='pt-5 max-w-5xl mx-auto px-6 py-10'>
          {
            logs.map((log) => {
              return (
                <div className='bg-white border border-[#e8e4da] rounded-2xl p-4 mb-4' key={log._id}>
                  <p className='font-bold text-sm text-[#1c1c19]'>{log.title}</p>
                  <p className='text-xs text-gray-500 leading-relaxed line-clamp-2'>{log.about} </p>
                  <p className='text-xs text-gray-400'>{log.country},{log.city}</p>
                  <p className='text-xs font-medium text-[#2D4B37]'>{log.author.name}</p>

                </div>
              )

            })

          }

        </div>



      </div>



    </>

  )
}

export default page