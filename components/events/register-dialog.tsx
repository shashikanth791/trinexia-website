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
import { CheckCircle2, Loader2, UserPlus, X } from "lucide-react"
import type { Event } from "./event-data"

// ─────────────────────────────────────────────────────────────
// 🔌 Replace with your deployed Google Apps Script Web App URL
// ─────────────────────────────────────────────────────────────
const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"

interface RegisterDialogProps {
  event: Event | null
  open: boolean
  onClose: () => void
}

interface FormState {
  name: string
  Section: string
  phone: string
  teamMembers: string[]
  upiRef: string
}

const emptyForm = (): FormState => ({
  name: "",
  Section: "",
  phone: "",
  teamMembers: [],
  upiRef: "",
})

function maxExtraMembers(event: Event) {
  return Math.max(0, event.details.maxTeamMembers - 1)
}

export function RegisterDialog({ event, open, onClose }: RegisterDialogProps) {
  const [form, setForm] = useState<FormState>(emptyForm())
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  function handleClose() {
    setForm(emptyForm())
    setStatus("idle")
    setErrorMsg("")
    onClose()
  }

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function addMember() {
    if (!event) return
    if (form.teamMembers.length < maxExtraMembers(event)) {
      setField("teamMembers", [...form.teamMembers, ""])
    }
  }

  function removeMember(index: number) {
    setField("teamMembers", form.teamMembers.filter((_, i) => i !== index))
  }

  function updateMember(index: number, value: string) {
    const updated = [...form.teamMembers]
    updated[index] = value
    setField("teamMembers", updated)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!event) return

    setStatus("loading")
    setErrorMsg("")

    const payload = {
      eventName: event.name,
      name: form.name,
      Section: form.Section,
      phone: form.phone,
      teamMembers: form.teamMembers.filter((m) => m.trim() !== "").join(", "),
      upiRef: form.upiRef,
      submittedAt: new Date().toISOString(),
    }

    try {
      const body = new URLSearchParams(
        Object.entries(payload).map(([k, v]) => [k, String(v)])
      )

      const res = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      })

      if (!res.ok) throw new Error(`Server error: ${res.status}`)

      setStatus("success")
    } catch (err: unknown) {
      setStatus("error")
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      )
    }
  }

  if (!event) return null

  const extraMax = maxExtraMembers(event)

  return (
    <Dialog open={open} onOpenChange={(isOpen) => { if (!isOpen) handleClose() }}>
      <DialogContent className="max-w-md glass-card backdrop-blur-xl">
        {status === "success" ? (
          <SuccessScreen eventName={event.name} onClose={handleClose} />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl">
                Register — {event.name}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm">
                Fill in your details to secure your spot. Entry fee:{" "}
                <span className="text-foreground font-medium">
                  {event.details.entryFee}
                </span>
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="reg-name" className="text-sm text-foreground/80">
                  Your Name <Required />
                </Label>
                <Input
                  id="reg-name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  required
                  className="glass-card border-foreground/10 bg-transparent focus:border-foreground/30"
                />
              </div>

              {/* Section */}
              <div className="space-y-1.5">
                <Label htmlFor="reg-section" className="text-sm text-foreground/80">
                  Section <Required />
                </Label>
                <Input
                  id="reg-section"
                  placeholder="Your section"
                  value={form.Section}
                  onChange={(e) => setField("Section", e.target.value)}
                  required
                  className="glass-card border-foreground/10 bg-transparent focus:border-foreground/30"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="reg-phone" className="text-sm text-foreground/80">
                  Phone Number <Required />
                </Label>
                <Input
                  id="reg-phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  required
                  className="glass-card border-foreground/10 bg-transparent focus:border-foreground/30"
                />
              </div>

              {/* Dynamic team members — only shown for team events */}
              {extraMax > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm text-foreground/80">
                      Team Members
                      <span className="text-muted-foreground font-normal ml-1">
                        (up to {extraMax} additional)
                      </span>
                    </Label>
                    {form.teamMembers.length < extraMax && (
                      <button
                        type="button"
                        onClick={addMember}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <UserPlus className="h-3.5 w-3.5" />
                        Add member
                      </button>
                    )}
                  </div>

                  {form.teamMembers.length === 0 && (
                    <p className="text-xs text-muted-foreground/60 italic">
                      No team members added yet.
                    </p>
                  )}

                  <div className="space-y-2">
                    {form.teamMembers.map((member, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Input
                          placeholder={`Member ${i + 2} name`}
                          value={member}
                          onChange={(e) => updateMember(i, e.target.value)}
                          className="glass-card border-foreground/10 bg-transparent focus:border-foreground/30 flex-1"
                        />
                        <button
                          type="button"
                          onClick={() => removeMember(i)}
                          className="text-muted-foreground hover:text-destructive transition-colors p-1 rounded"
                          aria-label="Remove member"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* UPI Reference */}
              <div className="space-y-1.5">
                <Label htmlFor="reg-upi" className="text-sm text-foreground/80">
                  UPI Transaction ID / Payment Reference <Required />
                </Label>
                <Input
                  id="reg-upi"
                  placeholder="e.g. UPI/123456789/TXN"
                  value={form.upiRef}
                  onChange={(e) => setField("upiRef", e.target.value)}
                  required
                  className="glass-card border-foreground/10 bg-transparent focus:border-foreground/30"
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-foreground text-background hover:bg-foreground/90 mt-2"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting…
                  </span>
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

function Required() {
  return <span className="text-destructive ml-0.5">*</span>
}

function SuccessScreen({
  eventName,
  onClose,
}: {
  eventName: string
  onClose: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-8 text-center">
      <div className="p-4 rounded-full bg-accent/10">
        <CheckCircle2 className="h-10 w-10 text-accent" />
      </div>
      <div className="space-y-2">
        <h3 className="font-display text-xl font-bold text-foreground">
          Registration Confirmed!
        </h3>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
          You&apos;re registered for{" "}
          <span className="text-foreground font-medium">{eventName}</span>.
          We&apos;ll reach out with further details soon.
        </p>
      </div>
      <Button
        onClick={onClose}
        variant="outline"
        className="mt-2 border-foreground/20 text-foreground hover:bg-foreground/5"
      >
        Done
      </Button>
    </div>
  )
}
