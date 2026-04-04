"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/vig.jpg"
          alt="event background"
          className="w-full h-full object-cover object-[center_top] opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-white/3 rounded-full blur-[200px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated glow */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-[120px] transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`} />
      <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/3 blur-[100px] transition-opacity duration-1000 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-24 md:pt-28">
        <div className="max-w-4xl mx-auto text-center">

          {/* Date */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 transition-all duration-700 border border-white/15 bg-white/5 backdrop-blur-md ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
            <span className="text-sm text-white/60 tracking-wide">
              April 8, 2026 — Vignan University Hyderabad Campus
            </span>
          </div>

          {/* Title */}
          <h1 className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            TriNexia
            <span className="block text-white/40 text-3xl md:text-5xl lg:text-6xl mt-2 font-light">
              2026
            </span>
          </h1>

          {/* Notice */}
          <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 transition-all duration-700 delay-150 border border-white/10 bg-white/5 backdrop-blur-md ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="text-sm md:text-base text-white/70 tracking-wide">
              Each participant can register for only one event
            </span>
          </div>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-white/60 font-light tracking-wide mb-4 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            The Ultimate Tech & Gaming Fest
          </p>

          {/* Description */}
          <p className={`text-base md:text-lg text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Join TriNexia 2026 and compete in exciting technical challenges and gaming tournaments.
            Show your skills, innovate, and battle it out for glory.
          </p>

          {/* 🔥 FIXED BUTTON */}
          <div className={`flex items-center justify-center transition-all duration-700 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a
              href="#events"
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-lg border border-white/30 text-white backdrop-blur-sm hover:border-white/50 transition-all duration-300 hover:scale-105"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              <span>Explore Events</span>
              <ChevronDown className="h-4 w-4 rotate-[-90deg] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {[
              { value: "6", label: "Events" },
              { value: "500+", label: "Participants" },
              { value: "20K+", label: "Prizes" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#events" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}