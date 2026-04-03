"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[200px]"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[200px]"></div>
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] transition-opacity duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-foreground/5 blur-[100px] transition-opacity duration-1000 delay-300 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground tracking-wide">
              April 8, 2026 — Vignan University Hyderabad Campus
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 glow-text transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            TriNexia
            <span className="block text-muted-foreground text-3xl md:text-5xl lg:text-6xl mt-2 font-light">
              2026
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-4 transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The Ultimate Tech & Gaming Fest
          </p>

          {/* Description */}
          <p
            className={`text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Join TriNexia 2026 and compete in exciting technical challenges and gaming tournaments.
            Show your skills, innovate, and battle it out for glory.
          </p>

          {/* CTA Button */}
          <div
            className={`flex items-center justify-center transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="#events">Explore Events</Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { value: "6", label: "Events" },
              { value: "500+", label: "Participants" },
              { value: "₹20K+", label: "Prizes" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link
          href="#events"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
