import './globals.css'
import { Inter } from 'next/font/google'
import { Menu } from '@/components'

import Providers from '@/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hiperfocus App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      
      <body className={inter.className}>
      <Providers>
        <Menu />
          {children}
       </Providers>
      </body>
      
    </html>
  )
}
