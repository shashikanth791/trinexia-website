import type { ElementType } from "react"
import { Gamepad2, Bug, Lightbulb, Flame, Zap } from "lucide-react"

export interface Coordinator {
  name: string
  phone: string
  role: "student" | "faculty"
}

export interface Event {
  id: string
  name: string
  scriptName: string
  image: string
  imagePosition?: string
  description: string
  icon: ElementType
  category: "technical" | "gaming"
  details: {
    fullDescription: string
    teamSize: string
    maxTeamMembers: number
    rules: string[]
    dateVenue: string
    entryFee: string
  }
  coordinators: Coordinator[]
}

export const events: Event[] = [
  {
    id: "debugging",
    name: "Debugging",
    scriptName: "Debugging",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&auto=format&fit=crop",
    imagePosition: "center",
    description: "Find and fix bugs in complex code snippets within the time limit.",
    icon: Bug,
    category: "technical",
    details: {
      fullDescription:
        "Participants will debug code snippets in multiple languages within a time limit.",
      teamSize: "Individual",
      maxTeamMembers: 1,
      rules: [
        "Individual event with 3 elimination rounds (Easy, Medium, Hard); participants shortlisted after each round",
        "Only C and Python are allowed; code must compile, run, and produce correct output",
        "Strict no external assistance — no internet, mobile phones, smart devices, notes, or communication",
        "Use only provided systems; external devices (USB, etc.) are not permitted",
        "Scoring: full marks for correct solutions, partial for partial code; tie-breaker = faster submission",
        "Time limits: Easy (25 min), Medium (45 min), Hard (60 min); no extra time",
        "Only coordinators for doubts (no hints); cheating leads to disqualification; judges' decision is final",
      ],
      dateVenue: "Computer Lab 1",
      entryFee: "₹100 per participant",
    },
    coordinators: [],
  },

  {
    id: "ideathon",
    name: "Ideathon",
    scriptName: "Ideathon",
    image: "/ideathon.jpg",
    imagePosition: "center",
    description: "Pitch innovative ideas to solve real-world problems.",
    icon: Lightbulb,
    category: "technical",
    details: {
      fullDescription:
        "Present innovative solutions to real-world problems with impact and feasibility.",
      teamSize: "3 Participants",
      maxTeamMembers: 3,
      rules: [
        "Team size: maximum 3 participants",
        "Each team gets 3 minutes to present their idea",
        "Judges will have 1 minute for questions",
        "Presentation must include: Problem, Solution, and Impact",
        "Teams must complete within the allotted time",
        "Only one laptop is allowed per team",
      ],
      dateVenue: "Day 2 — Innovation Hub",
      entryFee: "₹200 per team",
    },
    coordinators: [],
  },

  {
    id: "tech-rapid-fire",
    name: "TechPulse: Rapid Fire Challenge",
    scriptName: "Tech Rapid Fire",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=1200&q=80&auto=format&fit=crop",
    imagePosition: "center",
    description: "Fast-paced technical quiz where teams answer under pressure.",
    icon: Zap,
    category: "technical",
    details: {
      fullDescription:
        "A high-speed quiz challenge where teams must think fast and respond instantly under pressure.",
      teamSize: "2–3 Participants",
      maxTeamMembers: 3,
      rules: [
        "Team size: 2–3 participants",
        "Each team gets limited time per round (30–60 seconds total)",
        "Questions are asked in rapid succession; answer within 5 seconds",
        "Say 'Pass' to skip; skipped questions will not be repeated",
        "Scoring: +1 for each correct answer, no negative marking",
        "Team with highest score wins",
        "Judges' decision will be final and binding",
      ],
      dateVenue: "Day 1 — Innovation Hub",
      entryFee: "₹100 per team",
    },
    coordinators: [],
  },

  {
    id: "bgmi",
    name: "BGMI Tournament",
    scriptName: "BGMI Tournament",
    image: "/bgmi.jpg",
    imagePosition: "center",
    description: "Battle in BGMI tournament.",
    icon: Gamepad2,
    category: "gaming",
    details: {
      fullDescription:
        "Squad-based BGMI tournament with placement and kill-based scoring.",
      teamSize: "Squad (4 players)",
      maxTeamMembers: 4,
      rules: [
        "Classic Erangel map",
        "Points for kills and placement",
        "No emulators allowed",
        "Bring your own device",
      ],
      dateVenue: "Computer Lab 212",
      entryFee: "₹100 per team",
    },
    coordinators: [],
  },

  {
    id: "free-fire",
    name: "Free Fire MAX",
    scriptName: "Free Fire MAX",
    image: "/freefire.jpg",
    imagePosition: "center",
    description: "Compete in Free Fire MAX.",
    icon: Flame,
    category: "gaming",
    details: {
      fullDescription:
        "Fast-paced Free Fire MAX tournament with squad gameplay.",
      teamSize: "Squad (4 players)",
      maxTeamMembers: 4,
      rules: [
        "Bermuda map",
        "Top teams qualify",
        "No third-party apps",
      ],
      dateVenue: "Computer Lab 212",
      entryFee: "₹100 per team",
    },
    coordinators: [],
  },
]