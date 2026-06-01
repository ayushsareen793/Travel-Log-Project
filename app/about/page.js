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

            {/* heading */}
            <div className="bg-[#2D4B37] px-6 py-16">
                <div className="max-w-2xl mx-auto">
                    <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#a8d5b5] mb-5">
                        About Our Story
                    </p>
                    <h1 className="text-5xl font-bold text-white leading-tight mb-4">
                        Built for travellers<br />
                        who go{" "}
                        <span className="italic text-[#a8d5b5]">off script.</span>
                    </h1>
                    <p className="text-sm text-white/55 leading-relaxed max-w-lg">
                        We didn't build TravelLog for the highlight reel. We built it for the missed trains, the hidden alleys, the meals that changed everything and the people brave enough to write it all down.
                    </p>
                </div>
            </div>






            <div className="max-w-5xl mx-auto px-6">

                {/*manifesto */}
                <div className="py-12">
                    <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#2D4B37] mb-5">Our manifesto</p>
                    <blockquote className="font-serif text-2xl italic text-[#1c1c19] leading-snug border-l-[3px] border-[#2D4B37] pl-5 mb-6">
                        "Travel is wasted if you can't remember it and meaningless if you can't share it."
                    </blockquote>
                    <p className="text-sm text-secondary leading-relaxed mb-3">
                        Every great journey deserves more than a camera roll. It deserves context: the people you met, the back streets you stumbled into, the spots only you know about.
                    </p>
                    <p className="text-sm text-secondary leading-relaxed">
                        TravelLog gives you a place to document all of it. Not for the algorithm. Not for likes. Just for you and for the next traveller who needs exactly what you found.
                    </p>
                </div>




                {/* divider */}
                <div className="h-px bg-[#e8e4da]" />





                {/* (What you can do) section */}

                <div className="py-12">
                    <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#2D4B37] mb-8">What you can do</p>

                    <div className="flex items-start gap-6 pb-8 border-b border-[#e8e4da]">
                        <img src="https://img.icons8.com/color/48/edit--v1.png" alt="Write" className="w-9 h-9 shrink-0 mt-1 mix-blend-multiply" />
                        <div>
                            <h3 className="text-lg font-bold text-[#1c1c19] mb-2">Write your log</h3>
                            <p className="text-sm text-secondary leading-relaxed">Rich writing tools to capture every detail: the food, the people, the moments worth remembering long after you've come home.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 py-8 border-b border-[#e8e4da]">
                        <img src="https://img.icons8.com/color/48/camera--v1.png" alt="Photos" className="w-9 h-9 shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold text-[#1c1c19] mb-2">Add your photos</h3>
                            <p className="text-sm text-secondary leading-relaxed">Upload and organise photos alongside your writing in one beautiful log. Your images, your story — all in one place.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 py-8 border-b border-[#e8e4da]">
                        <img src="https://img.icons8.com/color/48/diamond.png" alt="Hidden gems" className="w-9 h-9 shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold text-[#1c1c19] mb-2">Share hidden gems</h3>
                            <p className="text-sm text-secondary leading-relaxed">Drop in the underrated spots only you know about  the ones the guidebooks always miss and tourists never find.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 pt-8">
                        <img src="https://img.icons8.com/color/48/worldwide-location.png" alt="Discover" className="w-9 h-9 shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold text-[#1c1c19] mb-2">Discover new places</h3>
                            <p className="text-sm text-secondary leading-relaxed">Browse logs from real travellers.Find your next destination through someone who's actually been there.</p>
                        </div>
                    </div>

                </div>








                {/* divider */}
                <div className="h-px bg-[#e8e4da]" />







                {/* (How we think) section */}
                <div className="py-12">
                    <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#2D4B37] mb-6">How we think</p>

                    <div className="bg-white border border-[#e8e4da] rounded-2xl p-5 flex gap-4 items-start hover:border-[#2D4B37]/20 transition-all duration-150 mb-3">
                        <span className="text-3xl font-bold text-[#2D4B37]/20 leading-none shrink-0 w-9">01</span>
                        <div>
                            <h3 className="text-sm font-bold text-[#1c1c19] mb-1.5">Honesty over aesthetics</h3>
                            <p className="text-xs text-secondary leading-relaxed">We don't optimise for pretty. We optimise for real. The best logs aren't the most photogenic, they are the most nostalgic.</p>
                        </div>
                    </div>

                    <div className="bg-white border border-[#e8e4da] rounded-2xl p-5 flex gap-4 items-start hover:border-[#2D4B37]/20 transition-all duration-150 mb-3">
                        <span className="text-3xl font-bold text-[#2D4B37]/20 leading-none shrink-0 w-9">02</span>
                        <div>
                            <h3 className="text-sm font-bold text-[#1c1c19] mb-1.5">Community over content</h3>
                            <p className="text-xs text-secondary leading-relaxed">TravelLog isn't a media company. It's a community. Every feature we build starts with a real traveller's real need.</p>
                        </div>
                    </div>

                    <div className="bg-white border border-[#e8e4da] rounded-2xl p-5 flex gap-4 items-start hover:border-[#2D4B37]/20 transition-all duration-150">
                        <span className="text-3xl font-bold text-[#2D4B37]/20 leading-none shrink-0 w-9">03</span>
                        <div>
                            <h3 className="text-sm font-bold text-[#1c1c19] mb-1.5">Depth over breadth</h3>
                            <p className="text-xs text-secondary leading-relaxed">One great log about one small village is worth more than ten generic posts about Paris. We reward depth.</p>
                        </div>
                    </div>
                </div>




                {/* divider */}
                <div className="h-px bg-[#e8e4da]" />





                {/*  (From the community) section */}
                <div className="py-12">
                    <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#2D4B37] mb-6">From the community</p>

                    {/* Featured logs again */}
                    <div className="pt-3">
                        <div className="bg-white block border border-[#e8e4da] rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-200 overflow-hidden">

                            {/* Image */}
                            <div className="h-48 w-full relative">
                                <img src="https://plus.unsplash.com/premium_photo-1697729628826-ca05ca7f5e8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kalpa landscape" className="w-full h-full object-cover object-center" />
                                <span className="absolute bottom-3 left-3 text-xs font-medium px-2 py-0.5 rounded-full bg-black/30 text-white backdrop-blur-sm">
                                    Kalpa, India
                                </span>
                            </div>

                            {/* Body */}
                            <div className="p-4">
                                <a href="#">
                                    <h5 className="mt-2 mb-1 text-sm font-bold tracking-tight text-heading leading-snug">
                                        Kinner Kailash at Sunrise
                                    </h5>
                                </a>
                                <p className="text-xs text-secondary leading-relaxed line-clamp-2">
                                    A forgotten village in Kinnaur where apple blossoms frame the Kinner Kailash peak turning gold and pink as the first light hits the snow.
                                </p>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-xs font-medium text-[#2D4B37]">-by Priya S.</span>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* Small logs */}
                    <div className="grid grid-cols-2 gap-3 pt-3">



                        {/* card 1 */}
                        <div className="bg-white block border border-[#e8e4da] rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-200 overflow-hidden">


                            <div className="h-36 w-full relative">
                                <img
                                    src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&auto=format&fit=crop"
                                    alt="Landour landscape"
                                    className="w-full h-full object-cover object-center"
                                />
                                <span className="absolute bottom-2 left-2 text-xs font-medium px-2 py-0.5 rounded-full bg-black/30 text-white backdrop-blur-sm">
                                    Landour, India
                                </span>
                            </div>


                            <div className="p-4">
                                <a href="#">
                                    <h5 className="mt-2 mb-1 text-sm font-bold tracking-tight text-heading leading-snug">
                                        The Quiet Hills of Landour
                                    </h5>
                                </a>
                                <p className="text-xs text-secondary leading-relaxed line-clamp-2">
                                    Tucked above Mussoorie, Landour is where Ruskin Bond still lives, cobbled lanes, old bakeries, and pine forests that smell like another century.
                                </p>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-xs font-medium text-[#2D4B37]">by Arjun M.</span>

                                </div>
                            </div>

                        </div>


                        {/* card 2 */}
                        <div className="bg-white block border border-[#e8e4da] rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-200 overflow-hidden">
                            <div className="h-36 w-full relative">
                                <img
                                    src="https://images.unsplash.com/photo-1614591276564-7b3e69347a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
                                    alt="Kashmir landscape"
                                    className="w-full h-full object-cover object-center"
                                />
                                <span className="absolute bottom-2 left-2 text-xs font-medium px-2 py-0.5 rounded-full bg-black/30 text-white backdrop-blur-sm">
                                    Kashmir, India
                                </span>
                            </div>
                            <div className="p-4">
                                <a href="#">
                                    <h5 className="mt-2 mb-1 text-sm font-bold tracking-tight text-heading leading-snug">
                                        Dal Lake at Dawn
                                    </h5>
                                </a>
                                <p className="text-xs text-secondary leading-relaxed line-clamp-2">
                                    Waking up on a houseboat as mist lifts off Dal Lake, shikaras gliding past, the Himalayas appearing slowly through the fog.
                                </p>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-xs font-medium text-[#2D4B37]">by Zara K.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                {/* divider */}
                <div className="h-px bg-[#e8e4da]" />




                {/* promises */}
                <div className="py-12">
                    <div className="bg-white border border-[#e8e4da] rounded-2xl p-6">
                        <h2 className="text-xl font-bold text-[#1c1c19] mb-6">Our pledge to you</h2>

                        <div className="flex items-start gap-3 text-sm text-secondary leading-relaxed mb-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2D4B37] shrink-0 mt-2" />
                            We will never show ads or sponsored content inside your logs.
                        </div>

                        <div className="flex items-start gap-3 text-sm text-secondary leading-relaxed mb-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2D4B37] shrink-0 mt-2" />
                            We will never sell your data to third parties.
                        </div>

                        <div className="flex items-start gap-3 text-sm text-secondary leading-relaxed mb-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2D4B37] shrink-0 mt-2" />
                            We will never rank your logs by follower count or engagement.
                        </div>

                        <div className="flex items-start gap-3 text-sm text-secondary leading-relaxed mb-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2D4B37] shrink-0 mt-2" />
                            Your logs belong to you;export them anytime, no questions asked.
                        </div>

                        <div className="flex items-start gap-3 text-sm text-secondary leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2D4B37] shrink-0 mt-2" />
                            We will always prioritise depth and honesty over virality.
                        </div>

                    </div>
                </div>



                {/*last section */}
                <div className="bg-[#2D4B37] rounded-[18px] p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-3">
                        Start your first log today.
                    </h2>
                    <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-sm mx-auto">
                        No followers needed. No algorithm to please.<br />
                        Just you, your journey, and a place to write it down.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <button onClick={() => {
                            if (!session) {
                                router.push("/Login")
                                return
                            }
                            router.push("/newlog")
                        }}  className="inline-block bg-white text-[#2D4B37] text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors">
                            Create a free log
                        </button>
                        <Link href="/logs" className="inline-block text-white/70 text-sm px-6 py-2.5 rounded-full border border-white/20 hover:border-white/40 transition-colors" >
                            Explore logs
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page