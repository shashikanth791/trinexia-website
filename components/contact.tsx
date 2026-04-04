"use client"

import { Phone, Mail, MapPin, GraduationCap } from "lucide-react"

const organizers = [
  {
    name: "L Shashikanth Reddy",
    role: "Registration & Event Coordinator",
    phone: "+91 9989646524",
    email: "shashikanth1096@gmail.com",
    image: null,
  },
  {
    name: "I Manoj kumar",
    role: "Event Coordinator",
    phone: "+91 9963441830",
    email: "maniitha7@gmail.com",
    image: "/manoj.jpeg",
  },
]

const facultyCoordinators = [
  {
    name: "Faculty Coordinator",
    role: "Faculty Coordinator — Dept. of ACSE",
    phone: "XXXXX",
    image: null,
  },
  {
    name: "Abhinav Adarsh",
    role: "Faculty Coordinator — Dept. of ACSE",
    phone: "9140221382",
    image: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
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

          {/* Student Coordinators */}
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Student Coordinators
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {organizers.map((organizer) => (
              <div key={organizer.email} className="glass-card glass-hover rounded-2xl p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-muted/30 flex items-center justify-center mb-4">
                    {organizer.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={organizer.image}
                        alt={organizer.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <span className={`text-foreground font-display font-semibold ${organizer.name === "L Shashikanth Reddy" ? "text-sm leading-tight text-center" : "text-xl"}`}>
                        {organizer.name === "L Shashikanth Reddy" ? "東京" : organizer.name.trim().charAt(0)}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {organizer.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{organizer.role}</p>
                </div>
                <div className="space-y-4">
                  <a
                    href={`tel:${organizer.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="text-sm">{organizer.phone}</span>
                  </a>
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

          {/* Faculty Coordinators */}
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Faculty Coordinators
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {facultyCoordinators.map((faculty) => (
              <div key={faculty.name} className="glass-card glass-hover rounded-2xl p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-muted/30 flex items-center justify-center mb-4">
                    {faculty.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <GraduationCap className="h-7 w-7 text-foreground/60" />
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {faculty.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{faculty.role}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-foreground/5">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="text-sm">{faculty.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-foreground/5">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="text-sm">{faculty.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm">
              For general inquiries, email us at{" "}
              <a href="mailto:info@trinexia.com" className="text-foreground hover:underline">
                info@trinexia.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
