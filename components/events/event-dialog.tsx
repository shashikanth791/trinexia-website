"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { Event } from "./event-data"

interface EventDialogProps {
  event: Event | null
  open: boolean
  onClose: () => void
  onRegister: () => void
}

export function EventDialog({ event, open, onClose, onRegister }: EventDialogProps) {
  if (!event) return null

  const Icon = event.icon

  function handleRegisterClick(e: React.MouseEvent) {
    e.stopPropagation()
    onRegister()
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => { if (!isOpen) onClose() }}>
      <DialogContent className="max-w-lg glass-card backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl flex items-center gap-3">
            <Icon className="h-6 w-6" />
            {event.name}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground pt-2">
            {event.details.fullDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Team Size + Entry Fee (esports only) */}
          <div className={`grid gap-4 ${event.category === "gaming" ? "grid-cols-2" : "grid-cols-1"}`}>
            <div className="glass-card rounded-lg p-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Team Size
              </span>
              <p className="text-foreground font-medium mt-1">
                {event.details.teamSize}
              </p>
            </div>
            {event.category === "gaming" && (
              <div className="glass-card rounded-lg p-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Entry Fee
                </span>
                <p className="text-foreground font-medium mt-1">
                  {event.details.entryFee}
                </p>
              </div>
            )}
          </div>

          {/* Date & Venue */}
          <div className="glass-card rounded-lg p-4">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Date & Venue
            </span>
            <p className="text-foreground font-medium mt-1">
              {event.details.dateVenue}
            </p>
          </div>

          {/* Rules */}
          <div>
            <span className="text-sm font-medium text-foreground">Rules</span>
            <ul className="mt-3 space-y-2">
              {event.details.rules.map((rule, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* Register CTA */}
          <Button
            className="w-full bg-foreground text-background hover:bg-foreground/90"
            onClick={handleRegisterClick}
          >
            Register for this Event
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
