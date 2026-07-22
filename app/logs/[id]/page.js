"use client"
import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'

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

    if (loading) {
        return (
            <div className="w-full min-h-screen bg-[#f7f5f0] flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-2 border-[#2D4B37] border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm text-gray-400">Loading log...</p>
                </div>
            </div>
        )
    }

    if (!log) {
        return (
            <div className="w-full min-h-screen bg-[#f7f5f0] flex items-center justify-center">
                <div className="text-center max-w-md px-6">
                    <h1 className="text-4xl font-bold text-[#1c1c19] mb-3">Log not found</h1>
                    <p className="text-sm text-gray-500 mb-8 leading-relaxed">This travel log doesn't exist or may have been removed.</p>
                    <Link href="/explorelogs" className="inline-flex items-center gap-2 text-xs font-semibold text-[#2D4B37] border border-[#2D4B37]/30 px-5 py-2.5 rounded-full hover:bg-[#eef5f1] transition-all duration-150">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/back.png" alt="back" className="w-3.5 h-3.5" />
                        Back to explore
                    </Link>
                </div>
            </div>
        )
    }

    const aboutText = log.about || ''

    return (
        <div className="w-full min-h-screen bg-[#f7f5f0]">

            {/* heading section */}
            <div className="relative w-full h-screen">
                {log.coverPhoto ? (
                    <img src={log.coverPhoto} alt={log.title} className="absolute inset-0 w-full h-full object-cover object-center" />
                ) : (
                    <div className="absolute inset-0 bg-linear-to-br from-[#2D4B37] to-[#4a7a5a]" />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-[#0c1c10] via-[#0c1c10]/60 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-[#0c1c10]/80 via-[#0c1c10]/20 to-transparent" />

                {/* back button */}
                <button onClick={() => router.back()} className="fixed top-6 left-6 md:left-10 z-50 flex items-center gap-2 bg-[#2D4B37] text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-[#1e3326] transition-all duration-150 shadow-lg">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back
                </button>


                <div className="absolute inset-0 flex items-end">
                    <div className="w-full px-6 md:px-14 xl:px-20 pb-16 md:pb-20">
                        <div className="grid md:grid-cols-12 gap-8 items-end">

                            {/* title section*/}
                            <div className="md:col-span-7">
                                {log.categories && log.categories.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {log.categories.map((category) => (
                                            <span key={category} className="text-[9px] font-bold uppercase tracking-[2.5px] bg-[#2D4B37] text-[#a8d5b5] px-4 py-1.5 rounded-full">
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-8">{log.title}</h1>

                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-3 rounded-full border border-white/20">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
                                    <span className="text-sm font-medium">{log.city}, {log.country}</span>
                                </div>
                            </div>

                            {/* right section */}
                            <div className="md:col-span-5 space-y-5">
                                {(log.dateOfVisit || log.createdAt) && (
                                    <div className="flex flex-wrap gap-3">
                                        {log.dateOfVisit && (
                                            <div className="bg-white/10 backdrop-blur-sm text-white/80 px-4 py-2 rounded-lg border border-white/10">
                                                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[1.5px] font-semibold mb-0.5 text-white/50">
                                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                                    Visited
                                                </div>
                                                <div className="text-xs font-medium">{new Date(log.dateOfVisit).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
                                            </div>
                                        )}
                                        {log.createdAt && (
                                            <div className="bg-white/10 backdrop-blur-sm text-white/80 px-4 py-2 rounded-lg border border-white/10">
                                                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[1.5px] font-semibold mb-0.5 text-white/50">
                                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" /></svg>
                                                    Posted
                                                </div>
                                                <div className="text-xs font-medium">{new Date(log.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {log.author && (
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                                        <p className="text-[9px] text-white/40 uppercase tracking-[3px] font-bold mb-3">Written by</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-[#a8d5b5] flex items-center justify-center text-lg font-bold text-[#2D4B37]">
                                                {log.author.name[0]}
                                            </div>
                                            <div>
                                                <p className="text-base font-semibold text-white">{log.author.name}</p>
                                                <p className="text-xs text-white/50">Travel writer</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* story section - sidebar + pull quote */}
            <div className="bg-[#f7f5f0]">
                <div className="px-6 md:px-14 xl:px-20 py-20 md:py-28">
                    <div className="grid md:grid-cols-12 gap-12 md:gap-16">

                        <div className="hidden md:block md:col-span-3">
                            <div className="sticky top-32 space-y-8">
                                <div className="space-y-3">
                                    <div className="w-12 h-px bg-[#2D4B37]" />
                                    <p className="text-[9px] font-bold uppercase tracking-[4px] text-[#2D4B37]/50">Chapter 1</p>
                                    <p className="text-sm font-medium text-[#2D4B37]">The Story</p>
                                </div>
                                <div className="pt-8">
                                    <div className="w-16 h-16 rounded-full bg-[#eef5f1] flex items-center justify-center">
                                        <svg className="w-7 h-7 text-[#2D4B37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-9">
                            {aboutText && (
                                <div className="mb-16 md:-ml-8 xl:-ml-16">
                                    <div className="relative">
                                        <blockquote className="relative pl-8 md:pl-16 border-l-4 border-[#2D4B37]">
                                            <p className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#1c1c19] leading-[1.3] mb-4">{aboutText}</p>
                                        </blockquote>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* besttimetovisit & howtogetthere section */}
            {(log.bestTimeToVisit || log.howToGetThere) && (
                <div className="bg-[#2D4B37] text-white">
                    <div className="grid md:grid-cols-2">
                        {log.bestTimeToVisit && (
                            <div className="px-6 md:px-14 py-16 md:py-20 border-b md:border-b-0 md:border-r border-white/10">
                                <div className="flex items-start gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-full bg-[#a8d5b5]/20 flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-[#a8d5b5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold uppercase tracking-[4px] text-[#a8d5b5]/60 mb-2">Timing</p>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">Best Time To Visit</h3>
                                    </div>
                                </div>
                                <p className="text-sm font-bold  md:text-base text-white/70 leading-relaxed">{log.bestTimeToVisit}</p>
                            </div>
                        )}

                        {log.howToGetThere && (
                            <div className="px-6 md:px-14 py-20 md:py-18 bg-[#23391f]">
                                <div className="flex items-start gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-full bg-[#a8d5b5]/20 flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-[#a8d5b5]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold uppercase tracking-[4px] text-[#a8d5b5]/60 mb-2">Route</p>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">How To Get There</h3>
                                    </div>
                                </div>
                                <p className="text-sm font-bold md:text-base text-white/70 leading-relaxed">{log.howToGetThere}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* hidden gems section */}
            {log.hiddenGems && log.hiddenGems.length > 0 && (
                <div className="bg-[#eef5f1]">
                    <div className="px-6 md:px-14 xl:px-20 py-20 md:py-28">

                        <div className="mb-16 md:ml-1">

                            <h2 className="text-4xl md:text-5xl font-bold text-[#1c1c19] leading-tight mb-3">Hidden Gems</h2>
                            <p className="text-sm text-gray-500 italic">The places locals actually go</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {log.hiddenGems.map((gem, i) => (
                                <div key={i} className={`group relative overflow-hidden rounded-2xl bg-white border-2 border-[#e8e4da] hover:border-[#2D4B37]/40 transition-all duration-300 ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                                    <div className={`p-8 ${i === 0 ? 'md:p-12 min-h-100 flex flex-col justify-between' : 'min-h-50'}`}>
                                        <div>
                                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#2D4B37] text-white text-sm font-bold mb-6">
                                                {i + 1}
                                            </div>
                                            <p className={`text-[#1c1c19] font-bold leading-relaxed ${i === 0 ? 'text-xl md:text-2xl' : 'text-base'}`}>{gem}</p>
                                        </div>
                                        {i === 0 && (
                                            <div className="mt-8 pt-6 border-t border-[#e8e4da]">
                                                <p className="text-xs uppercase tracking-[2px] font-semibold text-[#2D4B37]/50">Local favorite</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}





            {/* tips and recommendation section */}
            {(log.whereToEat || log.whereToStay || log.thingsToAvoid) && (
                <div className="bg-[#f7f5f0]">
                    <div className="px-6 md:px-14 xl:px-20 py-20 md:py-28">
                        <div className="mb-16">
                            <p className="text-[9px] font-bold uppercase tracking-[5px] text-[#2D4B37]/50 mb-4">Chapter 2</p>
                            <h2 className="text-4xl md:text-6xl font-bold text-[#1c1c19] leading-tight">Tips & Recommendations</h2>
                        </div>

                        <div className="space-y-8">
                            {log.whereToEat && (
                                <div>
                                    <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-[#e8e4da] shadow-xs hover:shadow-lg transition-shadow duration-300">
                                        <div className="grid md:grid-cols-12 gap-8 items-start">
                                            <div className="md:col-span-3">
                                                <div className="w-12 h-12 rounded-xl bg-[#eef5f1] flex items-center justify-center mb-4">
                                                    <img src="https://img.icons8.com/color/48/restaurant.png" className="w-4 h-4" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#1c1c19] mb-2">Where To Eat</h3>
                                                <p className="text-xs uppercase tracking-[2px] font-semibold text-[#2D4B37]/50">Dining Guide</p>
                                            </div>
                                            <div className="md:col-span-9">
                                                <p className="text-base font-bold text-gray-600 leading-relaxed">{log.whereToEat}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {log.whereToStay && (
                                <div className="md:ml-16">
                                    <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-[#e8e4da] shadow-xs hover:shadow-lg transition-shadow duration-300">
                                        <div className="grid md:grid-cols-12 gap-8 items-start">
                                            <div className="md:col-span-3">
                                                <div className="w-12 h-12 rounded-xl bg-[#eef5f1] flex items-center justify-center mb-4">
                                                    <img src="https://img.icons8.com/color/48/bed.png" className="w-4 h-4" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#1c1c19] mb-2">Where To Stay</h3>
                                                <p className="text-xs uppercase tracking-[2px] font-semibold text-[#2D4B37]/50">Accommodation</p>
                                            </div>
                                            <div className="md:col-span-9">
                                                <p className="text-base font-bold text-gray-600 leading-relaxed">{log.whereToStay}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {log.thingsToAvoid && (
                                <div className="md:ml-32">
                                    <div className="bg-linear-to-br from-red-50 to-white rounded-3xl p-8 md:p-12 border-2 border-red-100 shadow-xs hover:shadow-lg transition-shadow duration-300">
                                        <div className="grid md:grid-cols-12 gap-8 items-start">
                                            <div className="md:col-span-3">
                                                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                                                    <img src="https://img.icons8.com/color/48/error--v1.png" className="w-4 h-4" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#1c1c19] mb-2">Things To Avoid</h3>
                                                <p className="text-xs uppercase tracking-[2px] font-semibold text-red-400">Stay Safe</p>
                                            </div>
                                            <div className="md:col-span-9">
                                                <p className="text-base font-bold text-gray-600 leading-relaxed">{log.thingsToAvoid}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}




            {/* last section */}
            <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1589803151163-b099044bb1fb?w=1600&h=900&fit=crop&auto=format" alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-[#0c1408]/95 via-[#0c1408]/70 to-[#0c1408]/40" />

                <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
                    <div className="inline-flex items-center  gap-2 bg-white/10 backdrop-blur-sm text-white/70 px-4 py-2 rounded-full text-xs uppercase tracking-[3px] font-bold mb-8">
                        Enjoyed this log?
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        Explore More<br /><span className="italic text-[#a8d5b5]">Travel Stories</span>
                    </h2>

                    <p className="text-white/60 font-bold text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
                        Discover more authentic travel experiences from real explorers around the world.
                    </p>

                    <Link href="/explorelogs" className="inline-flex  items-center gap-3 bg-white text-[#2D4B37] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#eef5f1] transition-all duration-200 shadow-xl">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Back to all logs
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Page