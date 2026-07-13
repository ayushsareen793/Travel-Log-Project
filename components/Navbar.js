"use client"
import Link from "next/link"
import React, { useState, useEffect, useRef } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const { data: session } = useSession()
    const [showDropdown, setShowDropdown] = useState(false)
    const dropdownRef = useRef(null)
    const pathname=usePathname()

    // Close dropdown when clicking outside:useEffect()
    //     Think of it like a Security Guard
    // Imagine you hired a security guard to watch the entire page and close the dropdown whenever someone clicks outside it.
    // useEffect = hiring the guard when the component loads
    // addEventListener = guard starts watching
    // removeEventListener = guard goes home when component closes
    // handleClickOutside = the guard's instructions


    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <nav className="absolute top-0 left-0 right-0 z-20">
            <div className="w-full flex items-center justify-between px-6 md:px-16 py-6">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <span className="text-2xl text-white font-bold tracking-tighter">TravelLog</span>
                    <img src="/globe.gif" alt="globe" height={10} width={43} />
                </Link>

                <div className="flex items-center">
                    {session ? (
                        <div className="relative" ref={dropdownRef}>
                            <button onClick={() => setShowDropdown(!showDropdown)} className="inline-flex items-center justify-center text-white hover:text-[#a8d5b5] font-medium rounded-full text-sm px-4 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-150 focus:outline-none" type="button">
                                Welcome, {session.user.name ?? session.user.email}
                                <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown  */}
                            {showDropdown && (
                                <div className="absolute right-0 top-full mt-1 z-10 bg-[#142819]/70 backdrop-blur-md border border-white/20 rounded shadow-lg w-44">
                                    <ul className="p-2 text-sm font-medium text-white">
                                        <li>
                                            <Link href="/" onClick={() => setShowDropdown(false)}
                                                className="inline-flex items-center w-full p-2 hover:bg-white/10 rounded">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/newlog" onClick={() => setShowDropdown(false)}
                                                className="inline-flex items-center w-full p-2 hover:bg-white/10 rounded">
                                                New Log
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/explorelogs" onClick={() => setShowDropdown(false)}
                                                className="inline-flex items-center w-full p-2 hover:bg-white/10 rounded">
                                                Explore Logs
                                            </Link>
                                        </li>

                                        <li>
                                            {/*  signOut */}
                                            <button onClick={() => { setShowDropdown(false); signOut() }} className="inline-flex items-center w-full p-2 hover:bg-white/10 rounded text-red-300" >
                                                Sign out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        // ── Hide login button on /Login page ──
                        pathname !== "/Login" && (
                            <Link href="/Login">
                                <button className="text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 transition-all duration-150" type="button">
                                    Login
                                </button>
                            </Link>
                        )
                    )}
                </div>

            </div>
        </nav>
    )
}

export default Navbar