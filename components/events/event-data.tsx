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
  scriptName: string // 🔥 added for backend mapping
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
    description: "Find and fix bugs in complex code snippets within the time limit.",
    icon: Bug,
    category: "technical",
    details: {
      fullDescription:
        "Participants will debug code snippets in multiple languages within a time limit.",
      teamSize: "Individual or Duo",
      maxTeamMembers: 2,
      rules: [
        "Time limit: 90 minutes",
        "Multiple programming languages involved",
        "Partial marks for identifying bugs",
        "Full marks for fixing bugs correctly",
      ],
      dateVenue: "Computer Lab 1",
      entryFee: "₹100 per team",
    },
    coordinators: [
      { name: "Sk. Seema", phone: "8341831466", role: "student" },
      { name: "Kaduduri Abhiram", phone: "9948496025", role: "student" },
      { name: "Ms. Beulah", phone: "9494490362", role: "faculty" },
    ],
  },

  {
    id: "ideathon",
    name: "Ideathon",
    scriptName: "Ideathon",
    description: "Pitch innovative ideas to solve real-world problems.",
    icon: Lightbulb,
    category: "technical",
    details: {
      fullDescription:
        "Present innovative solutions to real-world problems with impact and feasibility.",
      teamSize: "3 participants",
      maxTeamMembers: 3,
      rules: [
        "3 minutes presentation",
        "1 minute Q&A",
        "Must include problem, solution, and impact",
        "One laptop per team",
      ],
      dateVenue: "Day 2 — Innovation Hub",
      entryFee: "₹200 per team",
    },
    coordinators: [
      { name: "B. Karuna", phone: "8919708414", role: "student" },
      { name: "Mr. Veeraiah", phone: "9848405892", role: "faculty" },
    ],
  },

  {
    id: "tech-rapid-fire",
    name: "Tech Rapid Fire",
    scriptName: "Tech Rapid Fire",
    description: "Answer rapid-fire tech questions.",
    icon: Zap,
    category: "technical",
    details: {
      fullDescription:
        "Fast-paced technical quiz where teams answer quickly under pressure.",
      teamSize: "2–3 Participants",
      maxTeamMembers: 3,
      rules: [
        "Answer within 5 seconds",
        "Say 'Pass' to skip",
        "No negative marking",
        "Each correct answer = 1 point",
        "Highest score wins",
      ],
      dateVenue: "Day 1 — Innovation Hub",
      entryFee: "₹100 per team",
    },
    coordinators: [
      { name: "G. Bhavana", phone: "9705572426", role: "student" },
      { name: "Mr. T. Ashok", phone: "7793958030", role: "faculty" },
    ],
  },

  {
    id: "bgmi",
    name: "BGMI Tournament",
    scriptName: "BGMI Tournament",
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
    coordinators: [
      { name: "P. Sathwik", phone: "9100411088", role: "student" },
      { name: "Ms. Prashanthi", phone: "9346062386", role: "faculty" },
    ],
  },

  {
    id: "free-fire",
    name: "Free Fire MAX",
    scriptName: "Free Fire MAX",
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
        "All players must be present",
      ],
      dateVenue: "Computer Lab 212",
      entryFee: "₹100 per team",
    },
    coordinators: [
      { name: "L. Shashikanth Reddy", phone: "9989646524", role: "student" },
      { name: "Ms. Prashanthi", phone: "9346062386", role: "faculty" },
    ],
  },
]