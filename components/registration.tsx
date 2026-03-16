"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Upload } from "lucide-react"

const events = [
  { id: "rapid-fire", name: "Technical Rapid Fire" },
  { id: "debugging", name: "Debugging" },
  { id: "debate", name: "Tech Debate" },
  { id: "ideathon", name: "Ideathon" },
  { id: "bgmi", name: "BGMI Tournament" },
  { id: "free-fire", name: "Free Fire MAX" },
  { id: "smash-karts", name: "Smash Karts" },
]

export function Registration() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState("")
  const [fileName, setFileName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to a backend
    setIsSubmitted(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  if (isSubmitted) {
    return (
      <section id="register" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center">
            <div className="glass-card rounded-2xl p-12">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-accent" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Registration Successful!
              </h2>
              <p className="text-muted-foreground mb-8">
                Thank you for registering for TriNexia 2026. We have received your submission and will contact you shortly with further details.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="glass-card glass-hover text-foreground"
              >
                Register for Another Event
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-widest">
            Join the Fest
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 glow-text">
            Register Now
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Secure your spot at TriNexia 2026. Fill out the form below to register.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10">
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  required
                  placeholder="Enter your full name"
                  className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-foreground/30"
                />
              </div>

              {/* Registration Info */}
<div className="grid md:grid-cols-3 gap-6">

  {/* Registration Number */}
  <div className="space-y-2">
    <Label htmlFor="regno" className="text-foreground">
      Registration Number <span className="text-destructive">*</span>
    </Label>
    <Input
      id="regno"
      required
      placeholder="Enter your registration number"
      className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-foreground/30"
    />
  </div>

  {/* Section */}
<div className="space-y-2">
  <Label htmlFor="section" className="text-foreground">
    Section <span className="text-destructive">*</span>
  </Label>
  <Input
    id="section"
    required
    placeholder="Example: CSE-A"
    className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-foreground/30"
  />
</div>

  {/* Phone */}
  <div className="space-y-2">
    <Label htmlFor="phone" className="text-foreground">
      Phone Number <span className="text-destructive">*</span>
    </Label>
    <Input
      id="phone"
      type="tel"
      required
      placeholder="+91 98765 43210"
      className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-foreground/30"
    />
  </div>

</div>

              {/* Event Selection */}
              <div className="space-y-2">
                <Label htmlFor="event" className="text-foreground">
                  Select Event <span className="text-destructive">*</span>
                </Label>
                <Select required value={selectedEvent} onValueChange={setSelectedEvent}>
                  <SelectTrigger className="bg-input border-border/50 text-foreground">
                    <SelectValue placeholder="Choose an event" />
                  </SelectTrigger>
                  <SelectContent className="glass border-border/30">
                    {events.map((event) => (
                      <SelectItem key={event.id} value={event.id}>
                        {event.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Team Members */}
              <div className="space-y-2">
                <Label htmlFor="team" className="text-foreground">
                  Team Members (if applicable)
                </Label>
                <Textarea
                  id="team"
                  placeholder="Enter team member names (one per line)"
                  rows={3}
                  className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-foreground/30 resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  Leave blank for individual events
                </p>
              </div>

              {/* Payment Screenshot */}
              <div className="space-y-2">
                <Label htmlFor="payment" className="text-foreground">
                  Payment Screenshot
                </Label>
                <div className="relative">
                  <input
                    type="file"
                    id="payment"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="glass-card border-dashed border-2 border-border/50 rounded-lg p-6 text-center hover:border-foreground/30 transition-colors">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-3" />
                    {fileName ? (
                      <p className="text-foreground text-sm">{fileName}</p>
                    ) : (
                      <>
                        <p className="text-muted-foreground text-sm">
                          Click or drag to upload payment screenshot
                        </p>
                        <p className="text-muted-foreground/60 text-xs mt-1">
                          PNG, JPG up to 5MB
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Payment details will be shared after initial registration
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-foreground/90 py-6 text-base font-medium"
              >
                Submit Registration
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By registering, you agree to our terms and conditions.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}