'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  Home, Book, Calendar, Newspaper, Users, Lock, ChevronRight
} from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import clsx from 'clsx'
import { Button } from '@/components/ui/button'

export default function Sidebar() {
  const pathname = usePathname()
  const { user } = useUser()
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024)
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

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      {isDesktop ? (
        <div className="fixed top-0 left-0 h-screen w-64 bg-[#263C85] z-40 hidden lg:block">
          <div className="flex flex-col h-full p-8 pt-26 text-white">
            <Link href="/pages/directory" className="mb-12 mt-2">
              <Button className="w-full py-5 bg-gradient-to-b from-[#80F445] to-[#6AB246] text-[#0F0F0F] font-semibold hover:from-[#58C431] hover:to-[#4A9632]">
                Library Directory
              </Button>
            </Link>
            <ul className="space-y-4 flex-1">
              {links.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={clsx(
                      'flex items-center gap-3 px-3 py-2 rounded-md hover:text-[#FCB316] transition text-[13px]',
                      pathname === href && 'bg-white/10'
                    )}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-white/10 text-xs text-white/60 mt-2">
              © 2025 SWLS
            </div>
          </div>
        </div>
      ) : (
        // MOBILE SIDEBAR
        <div
          className="fixed top-[93px] left-0 z-40 h-[calc(100vh-93px)] flex flex-col bg-[#263C85] text-white transition-all duration-300 ease-in-out"
          style={{ width: isCollapsed ? '56px' : '256px' }}
        >
          {/* Toggle Button */}
          <div className="flex justify-end p-2 pt-4">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <ChevronRight
                size={20}
                className={clsx('transition-transform', !isCollapsed && 'rotate-180')}
              />
            </button>
          </div>

          {/* Directory Button on expanded only */}
          {!isCollapsed && (
            <div className="px-2 mt-4 mb-6">
              <Link href="/pages/directory">
                <Button className="w-full py-4 text-[#0F0F0F] font-semibold bg-gradient-to-b from-[#80F445] to-[#6AB246] hover:from-[#58C431] hover:to-[#4A9632]">
                  Library Directory
                </Button>
              </Link>
            </div>
          )}

          {/* Navigation Links */}
          <ul className={clsx('mt-4 flex-1 overflow-auto', isCollapsed ? 'items-center' : 'px-3')}>
            {links.map(({ label, href, icon: Icon }) => (
              <li key={href} className="mb-4">
                <Link
                  href={href}
                  onClick={() => setIsCollapsed(true)}
                  className={clsx(
                    'flex items-center gap-3 p-2 rounded-md hover:text-[#FCB316] transition',
                    pathname === href && 'bg-white/10',
                    isCollapsed && 'justify-center'
                  )}
                >
                  <Icon size={20} />
                  {!isCollapsed && <span className="text-sm">{label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
