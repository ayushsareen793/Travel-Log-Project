"use client"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { ArrowLeft, Check, MapPin } from "lucide-react"
import React from 'react'

const page = () => {

  // figures out where to send the user after they successfully sign in.
  const callbackUrl = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("callbackUrl") || "/"
    : "/"

  return (
    <div className="relative min-h-screen overflow-hidden">


      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=1000&fit=crop&auto=format" alt="" className="absolute inset-0 w-full h-full object-cover object-center origin-[55%_40%] animate-[hero-kenburns_24s_ease-in-out_infinite_alternate] motion-reduce:animate-none" />

      {/* cloudy effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full blur-[32px] mix-blend-screen will-change-transform top-[8%] left-[-20%] w-[45%] h-[30%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.7)_0%,rgba(0,0,0,0)_70%)] animate-[login-cloud-drift_55s_linear_infinite] motion-reduce:animate-none" />
        <div className="absolute rounded-full blur-[32px] mix-blend-screen will-change-transform top-[20%] left-[-35%] w-[38%] h-[22%] bg-[radial-gradient(ellipse_at_center,rgba(168,213,181,0.7)_0%,rgba(0,0,0,0)_70%)] animate-[login-cloud-drift_75s_linear_infinite] [animation-delay:-20s] motion-reduce:animate-none" />
        <div className="absolute rounded-full blur-[32px] mix-blend-screen will-change-transform top-[-4%] left-[-25%] w-[32%] h-[18%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6)_0%,rgba(0,0,0,0)_70%)] animate-[login-cloud-drift_95s_linear_infinite] [animation-delay:-45s] motion-reduce:animate-none" />
      </div>


      
      <div className="absolute inset-0 bg-[#102c16]/45 mix-blend-multiply" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(4,14,8,0.75)_100%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[#040e08]/38" />

      {/* heading */}
      <div className="relative z-20 min-h-screen flex flex-col px-6 sm:px-10 md:px-16 py-10 pb-16">

        {/* top bar */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[4px] text-white/70">TravelLog</span>
          <Link href="/" className="text-[11px] font-medium text-white/40 hover:text-white/80 transition-colors flex items-center gap-1.5">
            <ArrowLeft size={12} /> Back to home
          </Link>
        </div>


        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-80 mt-12 max-w-6xl mx-auto w-full">

          {/* left , headline */}
          <div className="max-w-lg hidden lg:block">
            <p className="text-[9px] font-bold uppercase tracking-[5px] text-[#a8d5b5]/60 mb-6">Welcome back</p>
            <h1 className="text-5xl xl:text-6xl font-bold text-white leading-[1.08] mb-6">
              Your Journeys,<br /><span className="italic text-[#a8d5b5]">Beautifully<br />Logged.</span>
            </h1>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-10">
              Document the places you&apos;ve been, the hidden gems you&apos;ve found, and the moments worth remembering.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/7 backdrop-blur-sm">
              <MapPin size={12} className="text-[#a8d5b5] shrink-0" />
              <span className="text-xs text-white/50">Currently logging</span>
              <span className="text-xs font-semibold text-[#a8d5b5]">Mountains</span>
            </div>
          </div>



          {/* right , glass sign-in card */}
          <div className="w-full max-w-sm shrink-0 rounded-2xl p-8 bg-[#08160c]/55 backdrop-blur-xl border border-white/12 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">




            {/* login */}
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a8d5b5] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a8d5b5]" />
              </span>
              <p className="text-[9px] font-bold uppercase tracking-[5px] text-[#a8d5b5]/60">Sign in</p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-1.5 leading-snug">Good To Have<br />You Back.</h2>
            <p className="text-xs text-white/40 leading-relaxed mb-7">Sign in to access your logs and continue your adventure.</p>





            {/* what you get section */}
            <div className="flex flex-col gap-2 mb-7">
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#a8d5b5]/20 border border-[#a8d5b5]/30 flex items-center justify-center shrink-0">
                  <Check size={9} className="text-[#a8d5b5]" />
                </div>
                <span className="text-xs text-white/50">Access and manage your travel logs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#a8d5b5]/20 border border-[#a8d5b5]/30 flex items-center justify-center shrink-0">
                  <Check size={9} className="text-[#a8d5b5]" />
                </div>
                <span className="text-xs text-white/50">Save hidden gems and travel tips</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#a8d5b5]/20 border border-[#a8d5b5]/30 flex items-center justify-center shrink-0">
                  <Check size={9} className="text-[#a8d5b5]" />
                </div>
                <span className="text-xs text-white/50">Join the community of travellers</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[10px] text-white/30 font-medium">Continue with</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* gitHub */}
            <button type="button" onClick={() => signIn("github", { callbackUrl })} className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white/12 border border-white/18 rounded-xl text-sm font-semibold text-white hover:bg-white/20 focus:ring-4 focus:ring-white/10 focus:outline-none transition-all duration-150 active:scale-[0.98] mb-3">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              Continue with GitHub
            </button>

            {/* google */}
            <button type="button" onClick={() => signIn("google", { callbackUrl })} className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white/7 border border-white/12 rounded-xl text-sm font-semibold text-white hover:bg-white/15 focus:ring-4 focus:ring-white/10 focus:outline-none transition-all duration-150 active:scale-[0.98]">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>


          </div>
        </div>
      </div>
    </div>
  )
}

export default page