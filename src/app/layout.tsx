import type { Metadata } from 'next'

import { spaceGrotesk } from '@/lib/fonts'
import { ThemeProvider } from '@/components/ui/theme-provider'

import '@/styles/globals.scss'

const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: 'asmodeus',
  authors: {
    name: 'Viet Doan',
  },
  description:
    "Based in VietNam, I'm a web developer passionate about building a modern web application that users love.",
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'asmodeus',
    description:
      "Based in VietNam, I'm a web developer passionate about building a modern web application that users love.",
    url: url,
    siteName: 'asmodeus',
    images: '/og.png',
    type: 'website',
  },
  keywords: [
    'asmodeus',
    'gressi-177',
    'viet doan',
    'nextjs',
    'tailwindcss',
    'typescript',
    'react',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
