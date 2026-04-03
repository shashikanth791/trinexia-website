"use client"

export function Footer() {
  return (
    <footer className="border-t border-border/30">
      <div className="container mx-auto px-4 md:px-6 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} TriNexia — Vignan University Hyderabad
        </p>
      </div>
    </footer>
  )
}