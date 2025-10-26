import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Video Agent - Auto Generate & Post Videos',
  description: 'AI-powered video generation and YouTube posting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
