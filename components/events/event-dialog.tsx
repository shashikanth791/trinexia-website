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

  const requiresPayment =
    event.name.toLowerCase().includes("debug") ||
    event.name.toLowerCase().includes("bgmi") ||
    event.name.toLowerCase().includes("free")

  const studentCoords = event.coordinators.filter((c) => c.role === "student")

  function handleRegisterClick(e: React.MouseEvent) {
    e.stopPropagation()
    onRegister()
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onClose()
          setShowQuery(false)
        }
      }}
    >
      <DialogContent className="max-w-lg glass-card backdrop-blur-xl max-h-[90vh] overflow-y-auto">

        {showQuery ? (
          <div className="space-y-5">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Contact Coordinators
            </h3>

            {studentCoords.map((c) => (
              <div key={c.name} className="glass-card rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="text-foreground font-medium text-sm">{c.name}</p>
                  <p className="text-muted-foreground text-xs">{c.phone}</p>
                </div>
                <a href={"tel:" + c.phone} className="text-xs px-3 py-1.5 rounded-lg bg-foreground/10">
                  Call
                </a>
              </div>
            ))}

            <Button onClick={() => setShowQuery(false)}>
              Back
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

              {/* TEAM + QUERY */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-lg p-4">
                  <span className="text-xs text-muted-foreground uppercase">
                    Team Size
                  </span>
                  <p className="text-foreground font-medium mt-1">
                    {event.details.teamSize}
                  </p>
                </div>

                <button
                  onClick={() => setShowQuery(true)}
                  className="glass-card rounded-lg p-4 text-left"
                >
                  <span className="text-xs text-muted-foreground uppercase">
                    Have a Query?
                  </span>
                  <p className="text-accent font-medium mt-1 text-sm">
                    Contact Coordinators
                  </p>
                </button>
              </div>

              {/* 🔥 QR BLOCK WITH FEE */}
              {requiresPayment && (
                <div className="flex justify-center">
                  <div className="glass-card rounded-2xl p-6 text-center border border-white/10">

                    <img
                      src="/qr.png"
                      alt="UPI QR"
                      className="w-64 h-64 object-contain mx-auto mb-3"
                    />

                    <p className="text-purple-400 font-medium">
                      Scan & Pay Entry Fee
                    </p>

                    <p className="text-white text-base font-bold mt-1">
                      ₹50 / participant
                    </p>

                    <p className="text-white/50 text-xs mt-1">
                      Enter UTR while registering
                    </p>

                  </div>
                </div>
              )}

              {/* RULES */}
              <div>
                <span className="text-sm font-medium text-foreground">Rules</span>
                <ul className="mt-3 space-y-2">
                  {event.details.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full" onClick={handleRegisterClick}>
                Register for this Event
              </Button>

            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}