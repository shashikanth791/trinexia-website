"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2, Copy, Check } from "lucide-react"
import type { Event } from "./event-data"

interface Member {
  name: string
  regno: string
}

interface FormState {
  name: string
  regno: string
  section: string
  phone: string
  members: Member[]
  upiRef: string // ✅ ADDED
}

function getTeamConfig(event: Event) {
  switch (event.id) {
    case "ideathon":
      return { total: 3, required: 3 }
    case "tech-rapid-fire":
      return { total: 3, required: 2 }
    case "bgmi":
    case "free-fire":
      return { total: 4, required: 4 }
    default:
      return { total: 1, required: 1 }
  }
}

const inputStyle =
  "w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/50 " +
  "border border-white/15 focus:border-white/40 focus:ring-2 focus:ring-white/20 " +
  "transition-all text-base outline-none"

export function RegisterDialog({ event, open, onClose }: any) {
  const [form, setForm] = useState<FormState>({
    name: "", regno: "", section: "", phone: "", members: [], upiRef: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [regId, setRegId] = useState("")
  const [copied, setCopied] = useState(false)

  const isDebugging = event?.id === "debugging" // ✅ ADDED

  useEffect(() => {
    if (open && event) {
      const config = getTeamConfig(event)
      setForm({
        name: "", regno: "", section: "", phone: "",
        members: Array.from({ length: config.total - 1 }, () => ({ name: "", regno: "" })),
        upiRef: "", // ✅ RESET
      })
      setStatus("idle")
      setErrorMsg("")
      setRegId("")
      setCopied(false)
    }
  }, [open, event])

  function updateMember(index: number, field: keyof Member, value: string) {
    const updated = [...form.members]
    updated[index][field] = value
    setForm({ ...form, members: updated })
  }

  function copyId() {
    navigator.clipboard.writeText(regId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  async function handleSubmit() {
    if (!event) return
    const config = getTeamConfig(event)

    if (!form.name || !form.regno || !form.section || !form.phone) {
      setStatus("error")
      setErrorMsg("Please fill all required fields")
      return
    }

    // ✅ VALIDATION FOR UTR
    if (isDebugging && !form.upiRef.trim()) {
      setStatus("error")
      setErrorMsg("UTR is required for Debugging event")
      return
    }

    for (let i = 0; i < config.required - 1; i++) {
      if (!form.members[i]?.name || !form.members[i]?.regno) {
        setStatus("error")
        setErrorMsg(`Please fill Member ${i + 2} details`)
        return
      }
    }

    setStatus("loading")
    setErrorMsg("")

    try {
      const teamMembers = form.members
        .filter((m) => m.name.trim() !== "")
        .map((m) => `${m.name} (${m.regno})`)
        .join(", ")

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          regno: form.regno,
          section: form.section,
          phone: form.phone,
          teamMembers,
          upiRef: form.upiRef, // ✅ SEND UTR
          eventName: event.scriptName,
        }),
      })

      const data = await res.json()

      if (res.status === 409) {
        setStatus("error")
        setErrorMsg("⚠️ You are already registered for this event!")
      } else if (res.ok) {
        setRegId(data.registrationId)
        setStatus("success")
      } else {
        setStatus("error")
        setErrorMsg(data.error || "Submission failed, please try again")
      }
    } catch {
      setStatus("error")
      setErrorMsg("Network error. Check your connection and try again.")
    }
  }

  if (!event) return null

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-md max-h-[85vh] bg-black/75 border border-white/10 backdrop-blur-xl flex flex-col">

        <DialogHeader>
          <DialogTitle className="text-white text-xl font-semibold">
            Register — {event.name}
          </DialogTitle>
          <DialogDescription className="text-white/60">
            Fill in your details to register for this event.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-4 mt-4 pr-1">

          {status === "success" ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="h-12 w-12 text-green-400 mx-auto" />
              <p className="text-white text-base font-medium">Registration Successful!</p>

              <div className="bg-white/10 border border-white/20 rounded-xl p-4 space-y-2">
                <p className="text-white/60 text-xs uppercase tracking-wider">Your Registration ID</p>
                <span className="text-white text-xl font-mono font-bold tracking-widest">
                  {regId}
                </span>
              </div>
            </div>

          ) : (
            <>
              <input className={inputStyle} placeholder="Your Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} />

              <input className={inputStyle} placeholder="Reg No *"
                value={form.regno}
                onChange={(e) => setForm({ ...form, regno: e.target.value })} />

              <input className={inputStyle} placeholder="Section *"
                value={form.section}
                onChange={(e) => setForm({ ...form, section: e.target.value })} />

              <input className={inputStyle} placeholder="Phone *"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })} />

              {/* 🔥 UTR FIELD ADDED HERE */}
              {isDebugging && (
                <input
                  className={inputStyle}
                  placeholder="UTR Number *"
                  value={form.upiRef}
                  onChange={(e) => setForm({ ...form, upiRef: e.target.value })}
                />
              )}

              {form.members.map((m, i) => (
                <div key={i} className="space-y-2">
                  <input className={inputStyle}
                    placeholder={`Member ${i + 2} Name`}
                    value={m.name}
                    onChange={(e) => updateMember(i, "name", e.target.value)} />
                  <input className={inputStyle}
                    placeholder={`Member ${i + 2} Reg No`}
                    value={m.regno}
                    onChange={(e) => updateMember(i, "regno", e.target.value)} />
                </div>
              ))}

              {status === "error" && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}
            </>
          )}
        </div>

        {status !== "success" && (
          <div className="pt-4">
            <Button onClick={handleSubmit} className="w-full">
              {status === "loading" ? <Loader2 className="animate-spin mx-auto" /> : "Submit"}
            </Button>
          </div>
        )}

      </DialogContent>
    </Dialog>
  )
}