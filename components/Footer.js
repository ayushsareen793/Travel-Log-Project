"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathname = usePathname()

    // footer ko hide kr deta h login page pe 
    if (pathname === "/Login") return null

    return (
        <footer className="bg-[#2D4B37] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 80px)' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-12">
                <div className="flex flex-col md:flex-row md:justify-between gap-10 pb-10 border-b border-white/10">

                    <div className="md:max-w-sm">
                        <h3 className="text-2xl font-bold text-white mb-3">Travel <span className="italic text-[#a8d5b5]">Log</span></h3>
                        <p className="text-sm text-white/50 leading-relaxed">
                            Curated travel logs from adventurers exploring the world's most extraordinary places.
                        </p>
                    </div>

                    {/*  quick links */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#a8d5b5]/60 mb-4">Explore</p>
                        <div className="flex flex-col gap-2.5">
                            <Link href="/" className="text-white/50 hover:text-white text-sm transition-colors w-fit">Home</Link>
                            <Link href="/about" className="text-white/50 hover:text-white text-sm transition-colors w-fit">About Us</Link>
                            <Link href="/explorelogs" className="text-white/50 hover:text-white text-sm transition-colors w-fit">Explore Logs</Link>
                            <Link href="/newlog" className="text-white/50 hover:text-white text-sm transition-colors w-fit">New Log</Link>
                        </div>
                    </div>

                    {/* connections */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#a8d5b5]/60 mb-4">Connect</p>
                        <div className="flex gap-2.5">
                            <a href="https://github.com/ayushsareen793" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-[#a8d5b5]/15 hover:bg-[#a8d5b5]/25 flex items-center justify-center transition-colors">
                                <img src="https://img.icons8.com/ios-filled/50/a8d5b5/github.png" alt="GitHub" width={16} height={16} />
                            </a>
                            <a href="mailto:ayushsareen793@gmail.com"
                                className="w-8 h-8 rounded-full bg-[#a8d5b5]/15 hover:bg-[#a8d5b5]/25 flex items-center justify-center transition-colors">
                                <img src="https://img.icons8.com/ios-filled/50/a8d5b5/new-post.png" alt="Email" width={16} height={16} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-[#a8d5b5]/15 hover:bg-[#a8d5b5]/25 flex items-center justify-center transition-colors">
                                <img src="https://img.icons8.com/ios-filled/50/a8d5b5/linkedin.png" alt="LinkedIn" width={16} height={16} />
                            </a>
                        </div>
                        <p className="text-white/40 text-xs mt-4 leading-relaxed max-w-45">Questions or feedback? Reach out anytime.</p>
                    </div>

                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-white/40 text-xs">
                        © 2026 <Link href="/" className="text-white/60 hover:text-white transition-colors">Travel Log</Link>. All Rights Reserved.
                    </span>
                    <span className="text-white/30 text-[10px] uppercase tracking-widest">Built with Next.js</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer