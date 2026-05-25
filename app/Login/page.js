"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'

const page = () => {
  return (


    <div className="min-h-screen bg-[#f7f5f0] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid grid-cols-2 gap-16 items-start">

        {/* leftpart */}
        <div className="bg-white border border-[#e8e4da] rounded-2xl p-10 shadow-xs">
          <h1 className="text-3xl font-bold text-[#1c1c19] mb-2">Sign in</h1>
          <p className="text-sm text-secondary leading-relaxed mb-8">
            Sign in to your account to access your logs and document your next adventure.
          </p>

          {/* gitHub */}
          <button
            type="button"
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white border border-[#e8e4da] rounded-xl text-sm font-medium text-[#1c1c19] hover:border-[#2D4B37] hover:bg-[#f4f9f6] focus:ring-4 focus:ring-[#2D4B37]/10 focus:outline-none transition-all duration-150 shadow-xs mb-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Continue with GitHub
          </button>

          {/* google */}
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white border border-[#e8e4da] rounded-xl text-sm font-medium text-[#1c1c19] hover:border-[#2D4B37] hover:bg-[#f4f9f6] focus:ring-4 focus:ring-[#2D4B37]/10 focus:outline-none transition-all duration-150 shadow-xs mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-[#e8e4da]" />
            <span className="text-xs text-secondary">or sign in with email</span>
            <div className="flex-1 h-px bg-[#e8e4da]" />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Email</label>
            <input type="email" placeholder="john@travellog.com" className="w-full px-4 py-2.5 bg-white border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-1" />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Password</label>
            <input type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-white border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150"
            />
          </div>


          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-[#e8e4da] accent-[#2D4B37] cursor-pointer" />
              <span className="text-sm text-secondary">Remember me</span>
            </label>
            <a href="#" className="text-sm text-[#2D4B37] font-medium hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Signin button */}
          <button type="submit" className="w-full py-2.5 bg-[#2D4B37] text-white text-sm font-semibold rounded-xl hover:bg-[#1e3426] focus:ring-4 focus:ring-[#2D4B37]/20 focus:outline-none transition-all duration-150">
            Sign in
          </button>

          <p className="text-xs text-secondary text-center mt-5">
            Don't have an account?{" "}
            <a href="/register" className="text-[#2D4B37] font-medium hover:underline">
              Create one free
            </a>
          </p>
        </div>





        {/* rigth part */}
        <div className="flex flex-col gap-5">
          <p className="text-xs font-bold  tracking-[2px] text-[#2D4B37]">
            TravelLog
          </p>
          <h2 className="text-3xl font-bold text-[#1c1c19] leading-tight">
            Your journeys,<br />
            <span className="text-[#2D4B37]">beautifully logged.</span>
          </h2>
          <p className="text-sm text-secondary leading-relaxed max-w-sm">
            Document the places you've been, the hidden gems you've found, and the moments worth remembering — then share them with the world.
          </p>

          <img src="/travel.png" alt="Travel illustration" className="w-full object-contain mix-blend-multiply" />
        </div>

      </div>
    </div>




  )
}

export default page