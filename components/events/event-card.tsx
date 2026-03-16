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
      className="glass-card glass-hover rounded-xl p-6 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
          <Icon className="h-6 w-6 text-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">
            {event.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-muted-foreground/70 uppercase tracking-wider">
          {event.details.teamSize}
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="text-foreground/70 hover:text-foreground hover:bg-foreground/5"
        >
          View Details
        </Button>
      </div>
    </div>
  )
}
