"use client"

import { Phone, Mail, MapPin } from "lucide-react"

const organizers = [
  {
    name: "Rahul Sharma",
    role: "Event Coordinator",
    phone: "+91 98765 43210",
    email: "rahul@trinexia.com",
  },
  {
    name: "Priya Patel",
    role: "Technical Coordinator",
    phone: "+91 87654 32109",
    email: "priya@trinexia.com",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 glow-text">
            Contact Us
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have questions? Reach out to our organizing team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Venue Card */}
          <div className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-foreground/5">
                <MapPin className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Event Venue
                </h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  Vignan University Hyderabad Campus<br />
                  Central Auditorium & Computer Labs<br />
                  Address: Deshmukhi Village, Yadadri Bhuvanagairi District, Telangana 508284
                </p>
              </div>
            </div>
          </div>

          {/* Organizers Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {organizers.map((organizer, index) => (
              <div
                key={organizer.email}
                className="glass-card glass-hover rounded-2xl p-8"
              >
                <div className="mb-6">
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
                    <span className="text-foreground font-display text-xl font-semibold">
                      {organizer.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {organizer.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {organizer.role}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href={`tel:${organizer.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="text-sm">{organizer.phone}</span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${organizer.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="text-sm">{organizer.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm">
              For general inquiries, email us at{" "}
              <a
                href="mailto:info@trinexia.com"
                className="text-foreground hover:underline"
              >
                info@trinexia.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
