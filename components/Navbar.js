"use client"
import Link from "next/link"
import React, { useState, useEffect, useRef } from "react"
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
    const [showDropdown, setShowDropdown] = useState(false)
    const dropdownRef = useRef(null)

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
        <nav className="bg-[#f7f5f0] fixed w-full z-20 top-0 inset-x-0 h-16">
            <div className="w-full flex items-center justify-between mx-auto px-4 h-full">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <span className="text-2xl text-black font-bold tracking-tighter">TravelLog</span>
                    <img src="/globe.gif" alt="globe" height={10} width={43} />
                </Link>

                {/* Auth controls */}
                <div className="flex items-center">
                    {session ? (
                        // Wrap button + dropdown together so dropdown is relative to the button
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="inline-flex items-center justify-center text-black border border-gray-300 hover:bg-gray-100 font-medium rounded text-sm px-4 py-2.5 focus:outline-none"
                                type="button"
                            >
                                Welcome, {session.user.name ?? session.user.email}
                                <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown */}
                            {showDropdown && (
                                <div className="absolute right-0 top-full mt-1 z-10 bg-white border border-gray-200 rounded shadow-lg w-44">
                                    <ul className="p-2 text-sm font-medium text-gray-700">
                                        <li>
                                            <Link href="/" onClick={() => setShowDropdown(false)}
                                                className="inline-flex items-center w-full p-2 hover:bg-gray-100 rounded">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/newlog" onClick={() => setShowDropdown(false)}
                                                className="inline-flex items-center w-full p-2 hover:bg-gray-100 rounded">
                                                New Log
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/explore" onClick={() => setShowDropdown(false)}
                                                className="inline-flex items-center w-full p-2 hover:bg-gray-100 rounded">
                                                Explore Logs
                                            </Link>
                                        </li>
                                        <li>
                                            {/* Fix: actually call signOut */}
                                            <button
                                                onClick={() => { setShowDropdown(false); signOut() }}
                                                className="inline-flex items-center w-full p-2 hover:bg-gray-100 rounded text-red-500"
                                            >
                                                Sign out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link href="/Login">
                            <button className="text-l font-bold text-black hover:underline" type="button">
                                Login
                            </button>
                        </Link>
                    )}
                </div>

            </div>
        </nav>
    )
}

export default Navbar