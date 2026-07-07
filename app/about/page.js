"use client"
import react from "react"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

const page = () => {
    const { data: session } = useSession()
    const router = useRouter()

    return (
        <div className="bg-[#f7f5f0] min-h-screen pb-16 w-full">

            <div className="relative min-h-[75vh] flex flex-col overflow-hidden">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-linear-to-b from-[#142819]/85 via-[#142819]/55 to-[#f7f5f0]" />
            
              {/* content */}
                <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 pt-24 pb-16">
                    <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#a8d5b5] mb-6">About Our Story</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] mb-6 max-w-2xl">
                        Built for travellers<br />who go <span className="italic text-[#a8d5b5]">off script.</span>
                    </h1>
                    <p className="text-sm text-white/55 leading-relaxed max-w-sm">We didn't build TravelLog for the highlight reel. We built it for the missed trains, the hidden alleys, the meals that changed everything and the people brave enough to write it all down.</p>
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



                {/* from the community  */}
                <div className="py-16">
                    <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#2D4B37]/50 mb-8">From the community</p>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                        {/* feature card  */}
                        <div className="md:col-span-8 group cursor-pointer">
                            <div className="relative rounded-3xl overflow-hidden bg-[#1a3020] h-72">
                                <img src="https://plus.unsplash.com/premium_photo-1697729628826-ca05ca7f5e8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kalpa landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0c1c10]/90 via-[#0c1c10]/30 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <div className="flex items-center gap-1.5 text-white/50 text-xs mb-2">
                                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
                                        Kalpa, India
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 leading-snug">Kinner Kailash at Sunrise</h3>
                                    <p className="text-sm text-white/60 leading-relaxed line-clamp-2 max-w-lg mb-3">A forgotten village in Kinnaur where apple blossoms frame the Kinner Kailash peak turning gold and pink as the first light hits the snow.</p>
                                    <span className="text-xs text-[#a8d5b5] font-medium">— Priya S.</span>
                                </div>
                            </div>
                        </div>

                        {/* 2nd card */}
                        <div className="md:col-span-4 group cursor-pointer">
                            <div className="relative rounded-3xl overflow-hidden bg-[#1a3020] h-72">
                                <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&auto=format&fit=crop" alt="Landour landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0c1c10]/90 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <div className="flex items-center gap-1.5 text-white/50 text-xs mb-1.5">
                                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
                                        Landour, India
                                    </div>
                                    <h3 className="text-lg font-bold text-white leading-snug mb-1">The Quiet Hills of Landour</h3>
                                    <p className="text-xs text-white/50 line-clamp-2 mb-2">Tucked above Mussoorie, cobbled lanes and pine forests that smell like another century.</p>
                                    <span className="text-xs text-[#a8d5b5] font-medium">— Arjun M.</span>
                                </div>
                            </div>
                        </div>

                        {/* horizontal featur card */}
                        <div className="md:col-span-12 group cursor-pointer">
                            <div className="bg-white rounded-3xl border border-[#e8e4da] hover:border-[#2D4B37]/30 hover:shadow-lg transition-all duration-200 p-6 flex flex-col md:flex-row md:items-center gap-5">
                                <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                                    <img src="https://images.unsplash.com/photo-1614591276564-7b3e69347a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D" alt="Kashmir landscape" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-1.5">
                                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
                                        Kashmir, India
                                    </div>
                                    <h3 className="text-lg font-bold text-[#1c1c19] mb-1">Dal Lake at Dawn</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">Waking up on a houseboat as mist lifts off Dal Lake, shikaras gliding past, the Himalayas appearing slowly through the fog.</p>
                                </div>
                                <span className="text-xs text-[#2D4B37] font-semibold shrink-0">— Zara K.</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="h-px bg-[#e8e4da]" />

                {/* pledge */}
                <div className="py-16 max-w-3xl">
                    <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#2D4B37]/50 mb-6">Our pledge to you</p>
                    <div className="bg-white border border-[#e8e4da] rounded-2xl p-8">
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
                </div>

                {/* last section */}
                <div className="pb-4">
                    <div className="relative rounded-3xl overflow-hidden min-h-80">
                        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
                        <div className="absolute inset-0 bg-linear-to-r from-[#0c1c10]/90 via-[#0c1c10]/60 to-transparent" />

                        <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-16 py-16 max-w-lg">
                            <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#a8d5b5] mb-5">Join us</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">Start your first <span className="italic text-[#a8d5b5]">log today.</span></h2>
                            <p className="text-sm text-white/50 leading-relaxed mb-9 max-w-xs">No followers needed. No algorithm to please. Just you, your journey, and a place to write it down.</p>

                            <div className="flex flex-col gap-3 items-start">
                                <button onClick={() => { if (!session) { router.push("/Login"); return } router.push("/newlog") }} className="inline-flex items-center gap-2 bg-white text-[#2D4B37] font-bold text-sm px-7 py-3 rounded-full hover:bg-[#eef5f1] active:scale-95 transition-all duration-150 shadow-md">
                                    Create a free log
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                </button>
                                <Link href="/logs" className="text-white/60 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white/70 transition-all duration-150">
                                    Or browse existing logs
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