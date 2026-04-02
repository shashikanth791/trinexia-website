import type { ElementType } from "react"
import { Gamepad2, Bug, MessageSquare, Lightbulb, Target, Flame } from "lucide-react"

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
}

export const events: Event[] = [
  {
    id: "rapid-fire",
    name: "Technical Rapid Fire",
    description: "Test your quick thinking with rapid-fire technical questions across multiple domains.",
    icon: Target,
    category: "technical",
    details: {
      fullDescription:
        "A fast-paced quiz competition where participants answer technical questions across various domains including programming, algorithms, web development, and more. Quick thinking and broad knowledge are key to victory!",
      teamSize: "Individual",
      maxTeamMembers: 1,
      rules: [
        "Each round has 60 seconds of rapid-fire questions",
        "Points are awarded for correct answers",
        "Wrong answers don't carry negative marks",
        "Top scorers advance to the final round",
      ],
      dateVenue: "Day 1 — Main Auditorium",
      entryFee: "₹50 per person",
    },
  },
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
      dateVenue: "Day 1 — Computer Lab 1",
      entryFee: "₹100 per team",
    },
  },
  {
    id: "debate",
    name: "Tech Debate",
    description: "Engage in thought-provoking debates on cutting-edge technology topics.",
    icon: MessageSquare,
    category: "technical",
    details: {
      fullDescription:
        "A platform for tech enthusiasts to debate on contemporary technology topics. Topics range from AI ethics to open source vs proprietary software. Sharpen your argumentation skills!",
      teamSize: "Team of 2",
      maxTeamMembers: 2,
      rules: [
        "Topics will be revealed 30 minutes before the debate",
        "Each team gets 5 minutes for opening statements",
        "Rebuttal rounds of 3 minutes each",
        "Judged on content, delivery, and rebuttal strength",
      ],
      dateVenue: "Day 2 — Seminar Hall",
      entryFee: "₹150 per team",
    },
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
      teamSize: "1 Team Lead + 2 Participants",
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
      dateVenue: "Day 1 & 2 — Gaming Arena",
      entryFee: "₹100 per team",
    },
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
      dateVenue: "Day 1 & 2 — Gaming Arena",
      entryFee: "₹100 per team",
    },
  },
]
