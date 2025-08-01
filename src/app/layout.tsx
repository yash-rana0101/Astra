import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingAI from '@/components/FloatingAI'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Astra - AI + IoT Girls Safety System',
  description: 'One Voice Can Save You. Be Heard, Even in Silence. Advanced AI and IoT technology for women\'s safety.',
  keywords: 'women safety, AI, IoT, emergency alert, voice recognition, GPS tracking',
  authors: [{ name: 'Astra Safety Team' }],
  openGraph: {
    title: 'Astra - AI + IoT Girls Safety System',
    description: 'Advanced AI and IoT technology for women\'s safety. Be heard, even in silence.',
    type: 'website',
    url: 'https://astra-safety.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingAI />
      </body>
    </html>
  )
}
