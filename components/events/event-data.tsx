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
    description: "Find and fix bugs in complex code snippets within the time limit.",
    icon: Bug,
    category: "technical",
    details: {
      fullDescription:
        "Put your debugging skills to the test! Participants will be given code snippets with hidden bugs and must identify and fix them within the allotted time. Languages include Python, JavaScript, and C++.",
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
      { name: "Sk. Seema",        phone: "8341831466", role: "student" },
      { name: "Kaduduri Abhiram", phone: "9948496025", role: "student" },
      { name: "Ms. Beulah",       phone: "9494490362", role: "faculty" },
    ],
  },
  {
    id: "ideathon",
    name: "Ideathon",
    description: "Pitch innovative ideas to solve real-world problems using technology.",
    icon: Lightbulb,
    category: "technical",
    details: {
      fullDescription:
        "Got a groundbreaking idea? Present your innovative solutions to real-world problems. The best ideas win prizes and potential incubation support. Focus areas include sustainability, healthcare, and education.",
      teamSize: " 3 participants",
      maxTeamMembers: 3,
      rules: [
        "Each team gets 3 minutes to present their idea.",
        "Judges get 1 minute to ask questions.",
        "Each team must have 1 Team Lead and up to 2 participants.",
        "Presentation should include: Problem, Solution, and Impact.",
        "Teams must finish within time.",
        "There should be one laptop per team.",
      ],
      dateVenue: "Day 2 — Innovation Hub",
      entryFee: "₹200 per team",
    },
    coordinators: [
      { name: "B. Karuna",    phone: "8919708414", role: "student" },
      { name: "Mr. Veeraiah", phone: "9848405892", role: "faculty" },
    ],
  },
  {
    id: "tech-rapid-fire",
    name: "Tech Rapid Fire",
    description: "Answer rapid-fire tech questions in quick succession — speed, accuracy, and teamwork decide the winner.",
    icon: Zap,
    category: "technical",
    details: {
      fullDescription:
        "TechPulse: Rapid Fire Challenge tests your team's technical knowledge under pressure! Questions are fired in rapid succession — answer within 5 seconds or pass. No negative marking means every attempt counts. The team with the highest score at the end takes the crown.",
      teamSize: "2–3 Participants",
      maxTeamMembers: 3,
      rules: [
        "Team size: 2–3 participants maximum.",
        "Each team gets 30–60 seconds per round.",
        "Questions are asked in rapid succession, one after another.",
        "Participants must answer immediately within 5 seconds.",
        "If unsure, say 'Pass' and move to the next question.",
        "No repetition of passed questions.",
        "Each correct answer = 1 point.",
        "No negative marking.",
        "Team with the highest score wins.",
        "Judges' decision will be final and binding.",
      ],
      dateVenue: "Day 1 — Innovation Hub",
      entryFee: "₹100 per team",
    },
    coordinators: [
      { name: "G. Bhavana",   phone: "9705572426",   role: "student" },
      { name: "Mr. T. Ashok", phone: "7793958030",    role: "faculty" },
    ],
  },
  {
    id: "bgmi",
    name: "BGMI Tournament",
    description: "Battle it out in the ultimate Battlegrounds Mobile India showdown.",
    icon: Gamepad2,
    category: "gaming",
    details: {
      fullDescription:
        "The ultimate mobile battle royale tournament! Squad up and compete against the best BGMI players in an intense tournament format. Show your skills and dominate the battleground.",
      teamSize: "Squad (4 players)",
      maxTeamMembers: 4,
      rules: [
        "Classic Erangel map for all matches",
        "Points based on placement and kills",
        "Emulators are strictly prohibited",
        "Players must bring their own devices",
      ],
      dateVenue: "Computer Lab 212",
      entryFee: "₹100 per team",
    },
    coordinators: [
      { name: "P. Sathwik",      phone: "9100411088", role: "student" },
      { name: "Ms. Prashanthi",  phone: "9346062386", role: "faculty" },
    ],
  },
  {
    id: "free-fire",
    name: "Free Fire MAX",
    description: "Compete in the Free Fire MAX championship and claim victory.",
    icon: Flame,
    category: "gaming",
    details: {
      fullDescription:
        "Free Fire MAX tournament with enhanced graphics and gameplay. Form your squad and compete in this fast-paced battle royale. Strategy and teamwork are your keys to victory!",
      teamSize: "Squad (4 players)",
      maxTeamMembers: 4,
      rules: [
        "Bermuda map for qualifiers",
        "Top teams advance to finals",
        "No third-party apps allowed",
        "All squad members must be present",
      ],
      dateVenue: "Computer Lab 212",
      entryFee: "₹100 per team",
    },
    coordinators: [
      { name: "L. Shashikanth Reddy", phone: "9989646524", role: "student" },
      { name: "Ms. Prashanthi",       phone: "9346062386", role: "faculty" },
    ],
  },
]