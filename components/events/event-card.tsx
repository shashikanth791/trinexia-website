"use client"

import { Button } from "@/components/ui/button"
import type { Event } from "./event-data"

interface EventCardProps {
  event: Event
  onClick: () => void
}

export function EventCard({ event, onClick }: EventCardProps) {
  const Icon = event.icon

  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden rounded-2xl cursor-pointer group border border-white/10 bg-black hover:border-white/30 transition"
      style={{
        minHeight: "180px",
        boxShadow:
          "0 10px 35px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Background Image */}
      <img
        src={event.image}
        alt={event.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Strong Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col p-6 h-full">
        <div className="flex items-start gap-3">
          
          {/* Icon */}
          <div className="p-2.5 rounded-lg bg-black/60 border border-white/10">
            <Icon className="h-6 w-6 text-white" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-lg md:text-xl leading-tight">
              {event.name}
            </h3>

            <p className="text-white/90 text-sm md:text-base mt-1 leading-snug">
              {event.description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-sm md:text-base text-white/80 uppercase tracking-wide font-medium">
            {event.details.teamSize}
          </span>

          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-white hover:bg-white/15 text-sm px-4 py-1.5"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  )
}