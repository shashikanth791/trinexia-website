"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2 } from "lucide-react"
import type { Event } from "./event-data"

const SHEETS_SCRIPT_URL = "YOUR_SCRIPT_URL"

interface TeamMember {
  name: string
  regno: string
}

interface FormState {
  name: string
  regno: string
  section: string
  phone: string
  teamMembers: TeamMember[]
  upiRef: string
}

const emptyForm = (): FormState => ({
  name: "",
  regno: "",
  section: "",
  phone: "",
  teamMembers: [],
  upiRef: "",
})

function getTeamConfig(event: Event) {
  switch (event.name) {
    case "Ideathon":
      return { total: 3, required: 3 }
    case "Tech Rapid Fire":
      return { total: 3, required: 2 }
    case "Debugging":
      return { total: 1, required: 1 }
    case "BGMI Tournament":
    case "Free Fire MAX":
      return { total: 4, required: 4 }
    default:
      return { total: 1, required: 1 }
  }
}

function isGamingEvent(event: Event) {
  return event.category === "gaming"
}

// 🔥 NEW INPUT STYLE
const inputStyle =
  "w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 " +
  "focus:border-white focus:ring-2 focus:ring-white/30 focus:outline-none transition-all"

export function RegisterDialog({ event, open, onClose }: any) {
  const [form, setForm] = useState<FormState>(emptyForm())
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  function handleClose() {
    setForm(emptyForm())
    setStatus("idle")
    setErrorMsg("")
    onClose()
  }

  function setField(key: keyof FormState, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function updateMember(index: number, field: keyof TeamMember, value: string) {
    const updated = [...form.teamMembers]
    updated[index] = { ...updated[index], [field]: value }
    setField("teamMembers", updated)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!event) return

    setStatus("loading")

    try {
      const params = new URLSearchParams({
        name: form.name,
        regno: form.regno,
        section: form.section,
        phone: form.phone,
        teamMembers: form.teamMembers
          .filter((m) => m.name.trim() !== "")
          .map((m) => `${m.name} (${m.regno})`)
          .join(", "),
        upiRef: isGamingEvent(event) ? form.upiRef : "",
        eventName: event.name,
      })

      await fetch(`${SHEETS_SCRIPT_URL}?${params.toString()}`)
      setStatus("success")
    } catch {
      setStatus("error")
      setErrorMsg("Submission failed")
    }
  }

  if (!event) return null
  const teamConfig = getTeamConfig(event)

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent className="max-w-md backdrop-blur-xl bg-black/80 border border-white/10">

        {status === "success" ? (
          <div className="text-center py-6 space-y-4">
            <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto" />
            <h3 className="text-lg font-semibold">Registration Submitted</h3>
            <Button onClick={handleClose}>Done</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Register — {event.name}</DialogTitle>
              <DialogDescription>
                {isGamingEvent(event)
                  ? `Entry fee: ${event.details.entryFee}`
                  : "Free Registration"}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                className={inputStyle}
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
              />

              <div className="grid grid-cols-2 gap-2">
                <input
                  className={inputStyle}
                  placeholder="Reg No"
                  required
                  value={form.regno}
                  onChange={(e) => setField("regno", e.target.value)}
                />
                <input
                  className={inputStyle}
                  placeholder="Section"
                  required
                  value={form.section}
                  onChange={(e) => setField("section", e.target.value)}
                />
              </div>

              <input
                className={inputStyle}
                placeholder="Phone"
                required
                value={form.phone}
                onChange={(e) => setField("phone", e.target.value)}
              />

              {/* TEAM */}
              {teamConfig.total > 1 && (
                <div className="space-y-3">
                  <Label>Team Members ({teamConfig.required} required)</Label>

                  {Array.from({ length: teamConfig.total - 1 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <input
                        className={inputStyle}
                        placeholder={`Member ${i + 2} Name`}
                        required={i < teamConfig.required - 1}
                        onChange={(e) => updateMember(i, "name", e.target.value)}
                      />
                      <input
                        className={inputStyle}
                        placeholder={`Member ${i + 2} Reg No`}
                        required={i < teamConfig.required - 1}
                        onChange={(e) => updateMember(i, "regno", e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* UPI ONLY FOR GAMING */}
              {isGamingEvent(event) && (
                <input
                  className={inputStyle}
                  placeholder="UPI Transaction ID"
                  required
                  value={form.upiRef}
                  onChange={(e) => setField("upiRef", e.target.value)}
                />
              )}

              {status === "error" && (
                <p className="text-red-500 text-sm">{errorMsg}</p>
              )}

              <Button type="submit" className="w-full bg-white text-black hover:bg-white/90">
                {status === "loading" ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Submit Registration"
                )}
              </Button>

            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}