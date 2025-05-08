import { ClerkProvider } from '@clerk/nextjs'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Library Dashboard',
  description: 'Your digital library system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={plusJakartaSans.className}>
          <Navbar />

          <div className="flex">
            <Sidebar />

            <div className="flex-1 min-h-screen bg-gray-50 pt-20 p-6 md:ml-64">
              <main>{children}</main>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
