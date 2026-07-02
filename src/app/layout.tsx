import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// The "pgplex" wordmark ships as outlined paths inside public/logo-full.svg
// and public/wordmark.svg (Space Grotesk 600), so no wordmark webfont is
// loaded here.

// Secondary/workhorse mono — body text and everything with font-mono.
const modernEraMono = localFont({
  src: [
    { path: './fonts/ModernEraMono-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ModernEraMono-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-modern-era-mono',
  display: 'swap',
})

// Primary display face — used for headings via font-display.
// Family: Regular/Medium/Semi-Bold, so weighted headings render real cuts.
const protocol = localFont({
  src: [
    { path: './fonts/APK-Protocol-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/APK-Protocol-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/APK-Protocol-Semi-Bold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-protocol',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'pgplex — The Postgres Toolchain for Humans and Agents',
  description:
    "We're building the Postgres toolchain for humans and agents — SQL editing, declarative schema migration, a terminal client, and a native Go parser.",
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${modernEraMono.variable} ${protocol.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
