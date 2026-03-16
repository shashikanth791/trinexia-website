import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Events } from "@/components/events"
import { Gallery } from "@/components/gallery"
import { Registration } from "@/components/registration"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <Navbar />
      <Hero />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
