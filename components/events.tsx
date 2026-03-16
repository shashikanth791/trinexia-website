"use client"

import { useState } from "react"
import { Code, Gamepad2 } from "lucide-react"
import { events, type Event } from "./events/event-data"
import { EventCard } from "./events/event-card"
import { EventDialog } from "./events/event-dialog"
import { RegisterDialog } from "./events/register-dialog"

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [showRegisterDialog, setShowRegisterDialog] = useState(false)

  function handleCardClick(event: Event) {
    setSelectedEvent(event)
    setShowRegisterDialog(false)
  }

  function handleRegisterClick() {
    setShowRegisterDialog(true)
  }

  function handleEventDialogClose() {
    setSelectedEvent(null)
    setShowRegisterDialog(false)
  }

  function handleRegisterDialogClose() {
    setShowRegisterDialog(false)
    // Keep selectedEvent so user can go back to event details if needed
  }

  const technicalEvents = events.filter((e) => e.category === "technical")
  const gamingEvents = events.filter((e) => e.category === "gaming")

  return (
    <section id="events" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-widest">
            What Awaits You
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 glow-text">
            Events
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From intense coding challenges to epic gaming tournaments, we have
            something for everyone.
          </p>
        </div>

        {/* Technical Events */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-5 w-5 text-foreground" />
            <h3 className="font-display text-2xl font-semibold">Technical Events</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => handleCardClick(event)}
              />
            ))}
          </div>
        </div>

        {/* Gaming Events */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Gamepad2 className="h-5 w-5 text-foreground" />
            <h3 className="font-display text-2xl font-semibold">Gaming Events</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gamingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => handleCardClick(event)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Step 1 — Event Details Dialog */}
      {/* Only open when an event is selected AND register dialog is NOT open */}
      <EventDialog
        event={selectedEvent}
        open={!!selectedEvent && !showRegisterDialog}
        onClose={handleEventDialogClose}
        onRegister={handleRegisterClick}
      />

      {/* Step 2 — Registration Dialog */}
      <RegisterDialog
        event={selectedEvent}
        open={showRegisterDialog}
        onClose={handleRegisterDialogClose}
      />
    </section>
  )
}
