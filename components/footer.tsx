import Link from "next/link"
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#register", label: "Register" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Youtube, label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/30">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="#home" className="inline-block">
              <span className="font-display text-2xl font-bold text-foreground glow-text">
                TriNexia
              </span>
              <span className="text-muted-foreground text-sm ml-2">2026</span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
              The ultimate college tech and gaming festival. Join us for an unforgettable experience of innovation, competition, and celebration.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:info@trinexia.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@trinexia.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-foreground transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="leading-relaxed">
                College Campus<br />
                University Road<br />
                City - 123456
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} TriNexia. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
