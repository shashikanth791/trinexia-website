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
import { CheckCircle2, Loader2 } from "lucide-react"

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycby2H-ji3EcvctEXoPrWqFGlFX_4qD7IDE69IP_dYgvh46-OuBU7QBArDnRFi6dxFLnmGg/exec"

const events = [
  { id: "debugging",       name: "Debugging",        code: "DBG" },
  { id: "ideathon",        name: "Ideathon",          code: "IDT" },
  { id: "tech-rapid-fire", name: "Tech Rapid Fire",   code: "TRF" },
  { id: "bgmi",            name: "BGMI Tournament",   code: "BGM" },
  { id: "free-fire",       name: "Free Fire MAX",     code: "FFM" },
]

interface FormState {
  name: string
  regno: string
  section: string
  phone: string
  team: string
  upiRef: string
}

const emptyForm = (): FormState => ({
  name: "", regno: "", section: "", phone: "", team: "", upiRef: "",
})

export function Registration() {
  const [form, setForm] = useState<FormState>(emptyForm())
  const [selectedEvent, setSelectedEvent] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [trinexiaId, setTrinexiaId] = useState("")

  function setField<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!selectedEvent) {
      setErrorMsg("Please select an event.")
      setStatus("error")
      return
    }

    setStatus("loading")
    setErrorMsg("")

    try {
      const event = events.find((ev) => ev.id === selectedEvent)!
      const generatedId = `TN-${event.code}-${Date.now()}`

      const params = new URLSearchParams({
        trinexiaId:  generatedId,
        eventName:   event.name,
        eventCode:   event.code,
        name:        form.name,
        regno:       form.regno,
        section:     form.section,
        phone:       form.phone,
        teamMembers: form.team,
        upiRef:      form.upiRef,
        submittedAt: new Date().toISOString(),
      })

      const res = await fetch(`${GOOGLE_SHEETS_URL}?${params.toString()}`)
      const data = await res.json()

      if (!data.success) throw new Error(data.error || "Submission failed")

      setTrinexiaId(generatedId)
      setStatus("success")
    } catch (err: unknown) {
      setStatus("error")
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      )
    }
  }

  if (status === "success") {
    return (
      <section id="register" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center">
            <div className="glass-card rounded-2xl p-12">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-accent" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Registration Confirmed!
              </h2>
              <p className="text-muted-foreground mb-4">
                You're registered for{" "}
                <span className="text-foreground font-medium">
                  {events.find((ev) => ev.id === selectedEvent)?.name}
                </span>
                . We'll reach out with further details soon.
              </p>
              <div className="glass-card rounded-xl px-6 py-4 mb-8 border border-foreground/10">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Your TriNexia ID
                </p>
                <p className="font-mono text-2xl font-bold text-accent">{trinexiaId}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  📋 Save this ID — you'll need it at event check-in
                </p>
              </div>
              <Button
                onClick={() => {
                  setForm(emptyForm())
                  setSelectedEvent("")
                  setStatus("idle")
                  setTrinexiaId("")
                }}
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
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-x-1/2" />
      <div className="container mx-auto px-4 md:px-6 relative">
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

              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name" required placeholder="Enter your full name"
                  value={form.name} onChange={(e) => setField("name", e.target.value)}
                  className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-foreground/30"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="regno" className="text-foreground">
                    Reg. Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="regno" required placeholder="e.g. 22BCS001"
                    value={form.regno} onChange={(e) => setField("regno", e.target.value)}
                    className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-foreground/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section" className="text-foreground">
                    Section <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="section" required placeholder="e.g. CSE-A"
                    value={form.section} onChange={(e) => setField("section", e.target.value)}
                    className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-foreground/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone" type="tel" required placeholder="+91 98765 43210"
                    value={form.phone} onChange={(e) => setField("phone", e.target.value)}
                    className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-foreground/30"
                  />
                </div>
              </div>

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

              <div className="space-y-2">
                <Label htmlFor="team" className="text-foreground">
                  Team Members (if applicable)
                </Label>
                <Textarea
                  id="team" placeholder="Enter team member names (one per line)" rows={3}
                  value={form.team} onChange={(e) => setField("team", e.target.value)}
                  className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-foreground/30 resize-none"
                />
                <p className="text-xs text-muted-foreground">Leave blank for individual events</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="upiRef" className="text-foreground">
                  UPI Transaction ID / Payment Reference <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="upiRef" required placeholder="e.g. UPI/123456789/TXN"
                  value={form.upiRef} onChange={(e) => setField("upiRef", e.target.value)}
                  className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-foreground/30"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
                  {errorMsg}
                </p>
              )}

              <Button
                type="submit" disabled={status === "loading"}
                className="w-full bg-foreground text-background hover:bg-foreground/90 py-6 text-base font-medium"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting…
                  </span>
                ) : "Submit Registration"}
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