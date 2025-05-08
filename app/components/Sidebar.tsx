'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  Home,
  Book,
  Calendar,
  Newspaper,
  Users,
  Lock,
  Menu,
  X,
} from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import clsx from 'clsx'
import { Button } from '@/components/ui/button'

export default function Sidebar() {
  const pathname = usePathname()
  const { user } = useUser()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'About SWLS', href: '/about', icon: Home },
    { label: 'Databases & More', href: '/databases', icon: Home },
    { label: 'Library Catalog', href: '/catalog', icon: Book },
    { label: 'Events & Programs', href: '/events', icon: Calendar },
    { label: 'News & Articles', href: '/news', icon: Newspaper },
  ]

  const staffLinks = [
    { label: 'Staff Portal', href: '/staff', icon: Users },
    { label: 'Admin Tools', href: '/admin', icon: Lock },
  ]

  const links = user ? [...navLinks, ...staffLinks] : navLinks

  const Nav = () => (
    <div className="flex flex-col h-full bg-[#263C85] text-white w-64 p-8 pt-20 md:pt-20">
      {/* Sidebar brand header */}
      <div className="flex justify-between items-center mb-6">

        {!isDesktop && (
          <button onClick={() => setIsMobileOpen(false)}>
            <X className="text-white" />
          </button>
        )}
      </div>

        <Link href="/directory" className="mb-12 mt-2">
        <Button
            className="w-full py-5 bg-gradient-to-b from-[#80F445] to-[#6AB246] text-[#0F0F0F] font-semibold cursor-pointer transition-all duration-200 hover:from-[#58C431] hover:to-[#4A9632]"
        >
            Library Directory
        </Button>
        </Link>


      {/* Nav Links */}
      <ul className="space-y-4 flex-1">
        {links.map(({ label, href, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className={clsx(
                'flex items-center gap-3 px-3 py-2 rounded-md hover:text-[#FCB316] transition text-[13px]',
                pathname === href && 'bg-white/10'
              )}
              onClick={() => !isDesktop && setIsMobileOpen(false)}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="pt-4 border-t border-white/10">
        <p className="text-xs text-white/60 mt-2">© 2025 SWLS</p>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar - fixed so Navbar overlays it */}
      <div className="fixed top-0 left-0 h-screen w-64 hidden md:block bg-[#263C85] z-40">
        {Nav()}
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="absolute top-4 left-4 z-50 p-2 md:hidden bg-white border rounded shadow"
      >
        <Menu />
      </button>

      {/* Mobile Sidebar Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
          <div className="absolute left-0 top-0 h-full">{Nav()}</div>
        </div>
      )}
    </>
  )
}
