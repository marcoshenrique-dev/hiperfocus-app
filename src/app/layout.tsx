import './globals.css'
import { Inter } from 'next/font/google'
import { Menu } from '@/components'

import Providers from '@/providers/ThemeProvider'
import { TasksProvider } from '@/hooks/TasksContext'

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
      
      <body className={`${inter.className} overflow-y-auto sm:overflow-hidden`}>
      <Providers>
        <TasksProvider>
          <Menu />
          {children}
        </TasksProvider>
       </Providers>
      </body>
      
    </html>
  )
}
