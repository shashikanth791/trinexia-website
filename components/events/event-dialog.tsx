"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Phone, GraduationCap, BookOpen } from "lucide-react"
import type { Event } from "./event-data"

interface EventDialogProps {
  event: Event | null
  open: boolean
  onClose: () => void
  onRegister: () => void
}

export function EventDialog({ event, open, onClose, onRegister }: EventDialogProps) {
  const [showQuery, setShowQuery] = useState(false)

  if (!event) return null

  const Icon = event.icon
  const studentCoords = event.coordinators.filter((c) => c.role === "student")
  const facultyCoords = event.coordinators.filter((c) => c.role === "faculty")

  function handleRegisterClick(e: React.MouseEvent) {
    e.stopPropagation()
    onRegister()
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => { if (!isOpen) { onClose(); setShowQuery(false) } }}>
      <DialogContent className="max-w-lg glass-card backdrop-blur-xl max-h-[90vh] overflow-y-auto">

        {showQuery ? (
          <div className="space-y-5">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Contact Coordinators
            </h3>

            <p className="text-sm text-muted-foreground">
              Have a query about{" "}
              <span className="text-foreground font-medium">{event.name}</span>?
              Reach out to the coordinators below.
            </p>

            {studentCoords.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-accent" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    Student Coordinators
                  </span>
                </div>
                {studentCoords.map((c) => (
                  <div key={c.name} className="glass-card rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <p className="text-foreground font-medium text-sm">{c.name}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{c.phone}</p>
                    </div>
                    <a
                      href={"tel:" + c.phone}
                      className="flex items-center gap-1.5 text-xs bg-foreground/10 hover:bg-foreground/20 text-foreground px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <Phone className="h-3 w-3" />
                      Call
                    </a>
                  </div>
                ))}
              </div>
            )}

            {facultyCoords.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-accent" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    Faculty Coordinators
                  </span>
                </div>
                {facultyCoords.map((c) => (
                  <div key={c.name} className="glass-card rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <p className="text-foreground font-medium text-sm">{c.name}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{c.phone}</p>
                    </div>
                    <a
                      href={"tel:" + c.phone}
                      className="flex items-center gap-1.5 text-xs bg-foreground/10 hover:bg-foreground/20 text-foreground px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <Phone className="h-3 w-3" />
                      Call
                    </a>
                  </div>
                ))}
              </div>
            )}

            <Button
              variant="outline"
              className="w-full border-foreground/20 text-foreground hover:bg-foreground/5"
              onClick={() => setShowQuery(false)}
            >
              Back to Event Details
            </Button>
          </div>

        ) : (
          <>
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

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-lg p-4">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Team Size
                  </span>
                  <p className="text-foreground font-medium mt-1">
                    {event.details.teamSize}
                  </p>
                </div>
                <button
                  onClick={() => setShowQuery(true)}
                  className="glass-card rounded-lg p-4 text-left hover:bg-foreground/5 transition-colors group"
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Have a Query?
                  </span>
                  <p className="text-accent font-medium mt-1 group-hover:underline text-sm">
                    Contact Coordinators {'>'}
                  </p>
                </button>
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

              <div className="glass-card rounded-lg p-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Date & Venue
                </span>
                <p className="text-foreground font-medium mt-1">
                  {event.details.dateVenue}
                </p>
              </div>

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

              <Button
                className="w-full bg-foreground text-background hover:bg-foreground/90"
                onClick={handleRegisterClick}
              >
                Register for this Event
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
