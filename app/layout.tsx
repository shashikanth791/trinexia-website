import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata = {
  title: 'TriNexia 2026 | The Ultimate Tech & Gaming Fest',
  description:
    'Join TriNexia 2026 - the ultimate college tech and gaming fest with competitions, gaming, and innovation.',

  openGraph: {
    title: 'TriNexia 2026',
    description:
      'The Ultimate Tech & Gaming Fest | April 8, 2026',
    url: 'https://trinexia-website.vercel.app',
    siteName: 'TriNexia',
    images: [
      {
        url: '/og-image.png', // IMPORTANT
        width: 1200,
        height: 630,
        alt: 'TriNexia 2026',
      },
    ],
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
