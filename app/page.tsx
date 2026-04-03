import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Events } from "@/components/events"
import { CulturalTeam } from "@/components/cultural-team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-hidden">

      {/* Navbar overlays the Hero via fixed positioning */}
      <Navbar />
      <Hero />

      {/* Smooth shade from hero bottom edge deepening to near-black */}
      <div
        style={{
          background: `linear-gradient(
            to bottom,
            #1a1e1c 0%,
            #161918 8%,
            #131615 18%,
            #111413 32%,
            #0f1211 50%,
            #0d1010 68%,
            #0b0e0d 82%,
            #090c0b 100%
          )`,
        }}
      >
        <Events />
        <CulturalTeam />
        <Contact />
        <Footer />
      </div>

    </main>
  )
}
