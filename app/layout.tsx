import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from './auth-provider'
import './globals.css'

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["100", "300", "400", "500", "700", "900"], 
  variable: "--font-roboto" 
});

export const metadata: Metadata = {
  title: 'Hamari Pahchan NGO | Partner for Social Impact',
  description: 'Empowering communities with dignity and self-reliance through education, skill development, healthcare, and social welfare programs.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased bg-[var(--color-background)] text-[var(--color-text)]`}>
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --color-background: #FCFCF9;
            --color-heading: #211600;
            --color-text: #6E675A;
            --color-accent: #F46403;
            --color-white: #FFFFFF;
            --color-dark: #241601;
          }
        `}} />
        <AuthProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </AuthProvider>
      </body>
    </html>
  )
}
