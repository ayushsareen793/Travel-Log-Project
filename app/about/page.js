"use client"
import react, { useState } from "react"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ArrowRight, ArrowLeft } from 'lucide-react'

const page = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [destination, setDestination] = useState("")

    //interactive option jo directly redirect new log ko krta h 
    const handleDestinationSubmit = (e) => {
        e.preventDefault()
        if (!destination.trim())
        return
        if (!session) {
            router.push("/Login")
            return
        }
        router.push(`/newlog?destination=${encodeURIComponent(destination.trim())}`)
    }

    return (
        <div className="bg-[#f7f5f0] min-h-screen pb-16 w-full">

            <div className="relative min-h-[75vh] flex flex-col overflow-hidden">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&auto=format" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-linear-to-b from-[#142819]/85 via-[#142819]/55 to-[#f7f5f0]" />

                {/* content */}
                <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 pt-24 pb-16">
                    <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#a8d5b5] mb-6">About Our Story</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] mb-6 max-w-2xl">
                        Built For Travellers<br />Who Go <span className="italic text-[#a8d5b5]">Off Script.</span>
                    </h1>
                    <p className="text-sm text-white/55  leading-relaxed max-w-sm">We didn't build TravelLog for the highlight reel. We built it for the missed trains, the hidden alleys, the meals that changed everything and the people brave enough to write it all down.</p>
                </div>
            </div>

            <div className="px-6 md:px-16">

                {/* manifesto */}
                <div className="py-16 max-w-full">
                    <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#2D4B37]/50 mb-5">Our manifesto</p>
                    <blockquote className="font-serif text-2xl italic text-[#1c1c19] leading-snug border-l-[3px] border-[#2D4B37] pl-5 mb-6">
                        "Travel is wasted if you can't remember it and meaningless if you can't share it."
                    </blockquote>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                        Every great journey deserves more than a camera roll. It deserves context: the people you met, the back streets you stumbled into, the spots only you know about.
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        TravelLog gives you a place to document all of it. Not for the algorithm. Not for likes. Just for you and for the next traveller who needs exactly what you found.
                    </p>
                </div>

                <div className="h-px bg-[#e8e4da]" />




                {/* what you can do */}
                <div className="py-16">
                    <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#2D4B37]/50 mb-8">What you can do</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="bg-white border border-[#e8e4da] rounded-2xl p-6 hover:border-[#2D4B37]/20 hover:shadow-md transition-all duration-150">
                            <div className="w-11 h-11 rounded-xl bg-[#eef5f1] flex items-center justify-center mb-4">
                                <img src="https://img.icons8.com/color/48/edit--v1.png" alt="Write" className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-[#1c1c19] mb-2">Write your log</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Rich writing tools to capture every detail: the food, the people, the moments worth remembering long after you've come home.</p>
                        </div>

                        <div className="bg-white border border-[#e8e4da] rounded-2xl p-6 hover:border-[#2D4B37]/20 hover:shadow-md transition-all duration-150">
                            <div className="w-11 h-11 rounded-xl bg-[#eef5f1] flex items-center justify-center mb-4">
                                <img src="https://img.icons8.com/color/48/camera--v1.png" alt="Photos" className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-[#1c1c19] mb-2">Add your photos</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Upload and organise photos alongside your writing in one beautiful log. Your images, your story — all in one place.</p>
                        </div>

                        <div className="bg-white border border-[#e8e4da] rounded-2xl p-6 hover:border-[#2D4B37]/20 hover:shadow-md transition-all duration-150">
                            <div className="w-11 h-11 rounded-xl bg-[#eef5f1] flex items-center justify-center mb-4">
                                <img src="https://img.icons8.com/color/48/diamond.png" alt="Hidden gems" className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-[#1c1c19] mb-2">Share hidden gems</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Drop in the underrated spots only you know about — the ones the guidebooks always miss and tourists never find.</p>
                        </div>

                        <div className="bg-white border border-[#e8e4da] rounded-2xl p-6 hover:border-[#2D4B37]/20 hover:shadow-md transition-all duration-150">
                            <div className="w-11 h-11 rounded-xl bg-[#eef5f1] flex items-center justify-center mb-4">
                                <img src="https://img.icons8.com/color/48/worldwide-location.png" alt="Discover" className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-[#1c1c19] mb-2">Discover new places</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Browse logs from real travellers. Find your next destination through someone who's actually been there.</p>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-[#e8e4da]" />




                {/* how we think section */}
                <div className="py-16">
                    <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#2D4B37]/50 mb-8">How we think</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white border border-[#e8e4da] rounded-2xl p-6 hover:border-[#2D4B37]/20 transition-all duration-150">
                            <span className="text-4xl font-bold text-[#2D4B37]/15 leading-none block mb-4">01</span>
                            <h3 className="text-sm font-bold text-[#1c1c19] mb-2">Honesty over aesthetics</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">We don't optimise for pretty. We optimise for real. The best logs aren't the most photogenic, they are the most nostalgic.</p>
                        </div>

                        <div className="bg-white border border-[#e8e4da] rounded-2xl p-6 hover:border-[#2D4B37]/20 transition-all duration-150">
                            <span className="text-4xl font-bold text-[#2D4B37]/15 leading-none block mb-4">02</span>
                            <h3 className="text-sm font-bold text-[#1c1c19] mb-2">Community over content</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">TravelLog isn't a media company. It's a community. Every feature we build starts with a real traveller's real need.</p>
                        </div>

                        <div className="bg-white border border-[#e8e4da] rounded-2xl p-6 hover:border-[#2D4B37]/20 transition-all duration-150">
                            <span className="text-4xl font-bold text-[#2D4B37]/15 leading-none block mb-4">03</span>
                            <h3 className="text-sm font-bold text-[#1c1c19] mb-2">Depth over breadth</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">One great log about one small village is worth more than ten generic posts about Paris. We reward depth.</p>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-[#e8e4da]" />



                {/* where did you go section */}
                <div className="py-16">
                    <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#2D4B37]/50 mb-8">Start here</p>

                    <div className="relative rounded-3xl overflow-hidden bg-[#1a3020] px-8 md:px-16 py-16 md:py-24 text-center">
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 60px)' }} />
                        <div className="relative z-10 max-w-xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Where did you go?</h3>
                            <p className="text-sm text-white/50 mb-8">Type a place. We'll start your log there.</p>
                            <form onSubmit={handleDestinationSubmit} className="flex flex-col sm:flex-row gap-3">
                                <input value={destination}  onChange={(e) => setDestination(e.target.value)} type="text" placeholder="e.g. Kyoto, Japan" className="flex-1 px-5 py-3.5 rounded-full text-sm text-white bg-white/10 border border-white/20 focus:border-[#a8d5b5] focus:outline-none placeholder:text-white/30 backdrop-blur-sm"/>
                                <button type="submit" className="bg-white text-[#2D4B37] font-bold text-sm px-7 py-3.5 rounded-full hover:bg-[#eef5f1] active:scale-95 transition-all duration-150">
                                    Start Writing
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-[#e8e4da]" />

                {/* pledge section */}
                <div className="py-16">
                    <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#2D4B37]/50 mb-6">Our pledge to you</p>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        <div className="lg:col-span-7 bg-white border border-[#e8e4da] rounded-2xl p-8">
                            <div className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed mb-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#2D4B37] shrink-0 mt-2" />
                                We will never show ads or sponsored content inside your logs.
                            </div>
                            <div className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed mb-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#2D4B37] shrink-0 mt-2" />
                                We will never sell your data to third parties.
                            </div>
                            <div className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed mb-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#2D4B37] shrink-0 mt-2" />
                                We will never rank your logs by follower count or engagement.
                            </div>
                            <div className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed mb-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#2D4B37] shrink-0 mt-2" />
                                Your logs belong to you; export them anytime, no questions asked.
                            </div>
                            <div className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#2D4B37] shrink-0 mt-2" />
                                We will always prioritise depth and honesty over virality.
                            </div>
                        </div>

                        {/* field-notebook note — fills the space beside the pledge list */}
                        <div className="lg:col-span-5">
                            <div className="relative bg-[#fffdf7] rounded-sm p-8 h-full flex flex-col justify-center rotate-1 border border-[#e8e4da] shadow-[0_10px_30px_rgba(0,0,0,0.08)]" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, #e8e4da 28px, transparent 29px)' }}>
                                
                                <div className="absolute -top-3 left-10 w-16 h-6 bg-[#a8d5b5]/70 -rotate-3 shadow-sm" />

                                <p className="font-serif italic text-lg text-[#1c1c19] leading-relaxed mb-6">
                                    "Every promise on the left, I mean to keep. Not because a policy says so - because it's the app I always wanted to build for the realest sunseekers out there."
                                </p>
                                <p className="text-xs uppercase tracking-[3px] text-[#2D4B37]/60 font-bold"> - Ayush Sareen, one log at a time</p>
                            </div>
                        </div>

                    </div>
                </div> 

                {/* last section */}
                <div className="pb-4">
                    <div className="relative rounded-3xl overflow-hidden min-h-80">
                        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
                        <div className="absolute inset-0 bg-linear-to-r from-[#0c1c10]/90 via-[#0c1c10]/60 to-transparent" />

                        <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-16 py-16 max-w-lg">
                            <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#a8d5b5] mb-5">Join Us</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">Start Your First <span className="italic text-[#a8d5b5]">Log Today.</span></h2>
                            <p className="text-sm text-white/50 leading-relaxed mb-9 max-w-xs">No followers needed. No algorithm to please. Just you, your journey, and a place to write it down.</p>

                            <div className="flex flex-col gap-3 items-start">
                                <button onClick={() => { if (!session) { router.push("/Login"); return } router.push("/newlog") }} className="inline-flex items-center gap-2 bg-white text-[#2D4B37] font-bold text-sm px-7 py-3 rounded-full hover:bg-[#eef5f1] active:scale-95 transition-all duration-150 shadow-md">
                                    Create A Free Log
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                                <Link href="/explorelogs" className="text-white/60 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white/70 transition-all duration-150">
                                    Or Browse Existing Logs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page