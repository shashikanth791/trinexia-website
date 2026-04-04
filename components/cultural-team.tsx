"use client"

import { useState } from "react"
import { Music, Mic, Gamepad2, Sparkles, Users, X, Phone } from "lucide-react"

const mainCoordinators = [
  { name: "K. Mythili Reddy", role: "Main Student Coordinator", phone: "9392389134" },
  { name: "M. Charitha", role: "Main Student Coordinator", phone: "XXXX-XXX-XXX" },
]

const eventTeams = [
  {
    event: "Singing",
    icon: Mic,
    description: "Showcase your vocal talent in solo or group performances. From classical to contemporary, all genres welcome.",
    members: [
      { name: "Anumula Niharika", phone: "8008801865" },
    ],
  },
  {
    event: "Dance",
    icon: Music,
    description: "Express yourself through movement. Compete in solo or group dance across classical, folk, and freestyle categories.",
    members: [
      { name: "G. Sahasra Reddy", phone: "9154271223" },
      { name: "P. Sai Yasasri", phone: "XXXX-XXX-XXX" },
    ],
  },
  {
    event: "Games",
    icon: Gamepad2,
    description: "Battle it out in exciting gaming tournaments. Test your reflexes, strategy, and teamwork across multiple titles.",
    members: [
      
      { name: "K. Abhiram", phone: "(7660046998)" },
    ],
  },
  {
    event: "Decor",
    icon: Sparkles,
    description: "The creative minds behind the visual magic of TriNexia 2026 — transforming spaces into stunning experiences.",
    members: [
      { name: "Aishwarya", phone: "XXXX-XXX-XXX" },
      { name: "Deepika", phone: "8639031179" },
    ],
  },
]

type MainCoordinator = typeof mainCoordinators[0]
type EventTeam = typeof eventTeams[0]

export function CulturalTeam() {
  const [selectedCoordinator, setSelectedCoordinator] = useState<MainCoordinator | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<EventTeam | null>(null)

  return (
    <section id="cultural-team" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 relative">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-white/40 uppercase tracking-widest">
            Behind the Scenes
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mt-4 text-white"
            style={{ textShadow: "0 0 60px rgba(255,255,255,0.15)" }}
          >
            Cultural Team
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Meet the dedicated team making TriNexia 2026 an unforgettable experience.
          </p>
        </div>

        {/* Main Coordinators */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-5 w-5 text-white/60" />
            <h3 className="font-display text-sm font-semibold text-white/80 uppercase tracking-widest">
              Main Coordinators
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            {mainCoordinators.map((person) => (
              <button
                key={person.name}
                onClick={() => setSelectedCoordinator(person)}
                className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-4 text-left hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)" }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-white font-display font-semibold text-lg">
                    {person.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold font-display text-base">{person.name}</p>
                  <p className="text-white/45 text-sm mt-0.5">{person.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 mb-14" />

        {/* Event Teams */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm text-white/40 uppercase tracking-widest font-medium">
              Event Coordinators
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {eventTeams.map((team) => {
              const Icon = team.icon
              return (
                <button
                  key={team.event}
                  onClick={() => setSelectedEvent(team)}
                  className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md text-left hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 2px 20px rgba(0,0,0,0.3)" }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-white/8">
                      <Icon className="h-4 w-4 text-white/70" />
                    </div>
                    <h4 className="font-display font-bold text-white text-lg">{team.event}</h4>
                  </div>
                  <div className="flex flex-col gap-3">
                    {team.members.slice(0, 3).map((member) => (
                      <div key={member.name} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                          <span className="text-white/70 text-xs font-medium">{member.name.charAt(0)}</span>
                        </div>
                        <span className="text-white/65 text-sm">{member.name}</span>
                      </div>
                    ))}
                    {team.members.length > 3 && (
                      <p className="text-white/35 text-xs mt-1">+{team.members.length - 3} more — tap to see all</p>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Main Coordinator Popup ── */}
      {selectedCoordinator && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelectedCoordinator(null)}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl p-8 border border-white/15 bg-white/8 backdrop-blur-xl"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 24px 64px rgba(0,0,0,0.6)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCoordinator(null)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-5">
              <span className="text-white font-display font-bold text-2xl">
                {selectedCoordinator.name.charAt(0)}
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-white mb-1">
              {selectedCoordinator.name}
            </h3>
            <p className="text-white/45 text-sm mb-6">{selectedCoordinator.role}</p>

            <div className="border-t border-white/10 pt-5">
              <a
                href={`tel:${selectedCoordinator.phone}`}
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/8 group-hover:bg-white/15 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">{selectedCoordinator.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Event Team Popup ── */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl p-8 border border-white/15 bg-white/8 backdrop-blur-xl max-h-[85vh] overflow-y-auto"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 24px 64px rgba(0,0,0,0.6)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-white/10">
                <selectedEvent.icon className="h-5 w-5 text-white/80" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">{selectedEvent.event}</h3>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-6">
              {selectedEvent.description}
            </p>

            {/* Coordinators */}
            <div className="border-t border-white/10 pt-5">
              <p className="text-xs text-white/35 uppercase tracking-widest mb-4">
                Coordinators ({selectedEvent.members.length})
              </p>
              <div className="flex flex-col gap-3">
                {selectedEvent.members.map((member) => (
                  <div key={member.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <span className="text-white/70 text-sm font-medium">{member.name.charAt(0)}</span>
                      </div>
                      <span className="text-white/80 text-sm font-medium">{member.name}</span>
                    </div>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
