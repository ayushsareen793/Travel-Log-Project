"use client"
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'


const Page = () => {
    const { id } = useParams()
    const [log, setlog] = useState(null)
    const [loading, setloading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const gettingdata = async () => {
            const res = await fetch('/api/logs/' + id);
            const data = await res.json()
            setlog(data.log)
            console.log(data.log);

            setloading(false)
        }
        gettingdata()
    }, [id])


    if (loading) return <p>Loading...</p>
    if (!log) return <p>Log not found</p>

    return (
        <>
            <div className='w-full min-h-screen bg-[#f7f5f0]'>

                {/* coverphoto section */}
                <div className='relative h-72'>
                    {log.coverPhoto ? (
                        <img src={log.coverPhoto} alt="" className='w-full h-72 object-cover' />
                    ) : (
                        <div className='w-full h-72 bg-[#2D4B37]'></div>
                    )}

                    <button onClick={() => router.back()} className='absolute top-8 left-5 z-10 bg-black/50 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm'>
                        Back
                    </button>

                    <span className='absolute bottom-8 left-5 text-xs font-medium px-3 py-1.5 rounded-full bg-black/30 text-white backdrop-blur-sm'>
                        {log.city}, {log.country}
                    </span>
                </div>

                {/* Content below image */}
                <div className='max-w-2xl mx-auto px-6 pt-8 pb-16'>
                    <h1 className='text-4xl font-bold text-[#1c1c19] mb-3'>{log.title}</h1>
                    <p className='text-xs text-gray-400 mb-6'>{log.city}, {log.country}</p>
                    <p className='text-sm text-gray-600 leading-relaxed'>{log.about}</p>
                </div>


                <div className='h-px bg-[#e8e4da] my-6'></div>



                {/* best time to visit section */}
                {log.bestTimeToVisit && (
                    <div className='max-w-2xl mx-auto px-6 mb-6'>
                        <p className='text-[10px] font-bold uppercase tracking-[3px] text-[#2D4B37] mb-3'>Best Time To Visit</p>
                        <div className='bg-white border border-[#e8e4da] rounded-xl px-4 py-3'>
                            <p className='text-sm text-gray-600 leading-relaxed'>{log.bestTimeToVisit}</p>
                        </div>
                    </div>
                )}

                {/* how to get there section */}
                {log.howToGetThere && (
                    <div className='max-w-2xl mx-auto px-6 mb-6'>
                        <p className='text-[10px] font-bold uppercase tracking-[3px] text-[#2D4B37] mb-3'>How To Get There</p>
                        <div className='bg-white border border-[#e8e4da] rounded-xl px-4 py-3'>
                            <p className='text-sm text-gray-600 leading-relaxed'>{log.howToGetThere}</p>
                        </div>
                    </div>
                )}



                <div className='h-px bg-[#e8e4da] my-6'></div>




                {/* hidden gems, (map is used because the hidden gems is an array, not a single value so you use map to display array)  */}
                {log.hiddenGems && log.hiddenGems.length > 0 && (
                    <div className='max-w-2xl mx-auto px-6 mb-6'>
                        <p className='text-[10px] font-bold uppercase tracking-[3px] text-[#2D4B37] mb-3'>Hidden Gems</p>
                        {log.hiddenGems.map((gem, i) => (
                            <div key={i} className='bg-white border border-[#e8e4da] rounded-xl px-4 py-3 mb-2'>
                                <p className='text-sm text-gray-600 leading-relaxed'>{gem}</p>
                            </div>
                        ))}
                    </div>
                )}




                <div className='h-px bg-[#e8e4da] my-6'></div>



                {/* tips and recommendation section */}
                {log.whereToEat && (
                    <div className='max-w-2xl mx-auto px-6 mb-6'>
                        <p className='text-[10px] font-bold uppercase tracking-[3px] text-[#2D4B37] mb-3'>Where To Eat</p>
                        <div className='bg-white border border-[#e8e4da] rounded-xl px-4 py-3'>
                            <p className='text-sm text-gray-600 leading-relaxed'>{log.whereToEat}</p>
                        </div>
                    </div>
                )}

                {log.whereToStay && (
                    <div className='max-w-2xl mx-auto px-6 mb-6'>
                        <p className='text-[10px] font-bold uppercase tracking-[3px] text-[#2D4B37] mb-3'>Where To Stay</p>
                        <div className='bg-white border border-[#e8e4da] rounded-xl px-4 py-3'>
                            <p className='text-sm text-gray-600 leading-relaxed'>{log.whereToStay}</p>
                        </div>
                    </div>
                )}

                {log.thingsToAvoid && (
                    <div className='max-w-2xl mx-auto px-6 mb-6'>
                        <p className='text-[10px] font-bold uppercase tracking-[3px] text-[#2D4B37] mb-3'>Things To Avoid</p>
                        <div className='bg-white border border-[#e8e4da] rounded-xl px-4 py-3'>
                            <p className='text-sm text-gray-600 leading-relaxed'>{log.thingsToAvoid}</p>
                        </div>
                    </div>
                )}















            </div>




        </>
    )


}

export default Page