'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Fuse from 'fuse.js'
import searchData from '@/searchIndex.json'
import ContactModal from './ContactModal'

const fuse = new Fuse(searchData, {
  keys: ['title', 'category'],
  threshold: 0.3,
})

export default function Navbar() {
  const pathname = usePathname()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<typeof searchData>([])
  const resultsRef = useRef<HTMLDivElement>(null)

  // Update search results
  useEffect(() => {
    if (!query) return setResults([])
    const res = fuse.search(query).map(r => r.item)
    setResults(res)
  }, [query])

  // Reset search on route change
  useEffect(() => {
    setQuery('')
    setResults([])
  }, [pathname])

  // ESC to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setQuery('')
        setResults([])
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Click outside to close
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (resultsRef.current && !resultsRef.current.contains(e.target as Node)) {
        setResults([])
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full bg-[#F6F6F6] border-b shadow-sm z-50 px-4 lg:px-6">
      {/* MOBILE */}
      <div className="block lg:hidden py-2 space-y-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/swls-logo-main.png"
              alt="Library Logo"
              width={177}
              height={31}
              className="h-auto w-auto"
            />
          </Link>
          <div className="flex items-center gap-4 text-gray-600">
            <Link href="#" aria-label="Facebook" className="hover:text-blue-600">
              <Facebook size={18} />
            </Link>
            <Link href="#" aria-label="Location" className="hover:text-blue-600">
              <MapPin size={18} />
            </Link>
            <a href="tel:+15551234" aria-label="Phone" className="hover:text-blue-600">
              <Phone size={18} />
            </a>
            <a href="mailto:info@example.com" aria-label="Email" className="hover:text-blue-600">
              <Mail size={18} />
            </a>
            <SignedIn><UserButton /></SignedIn>
            <SignedOut><SignInButton mode="modal"><button className="text-sm hover:underline">Sign in</button></SignInButton></SignedOut>
          </div>
        </div>

        <div className="relative" ref={resultsRef}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search"
            className="w-full px-4 py-2 text-sm border bg-white border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          {query && results.length >= 0 && (
            <ul className="absolute w-full bg-white shadow border rounded mt-2 z-50">
              {results.length > 0 ? (
                results.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        setQuery('')
                        setResults([])
                      }}
                      className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                    >
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.category}</div>
                      </div>
                      <ArrowRight className="text-blue-500 w-4 h-4" />
                    </Link>
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-sm text-gray-500">No results found</li>
              )}
            </ul>
          )}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:grid grid-cols-[auto_1fr_auto] items-center h-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/swls-logo-main.png"
              alt="Library Logo"
              width={177}
              height={31}
              className="h-auto w-auto"
            />
          </Link>
        </div>

        <div className="relative w-full text-center" ref={resultsRef}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search"
            className="w-full max-w-xl mx-auto px-4 py-2 text-sm border bg-white border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          {query && results.length >= 0 && (
            <ul className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-xl mt-2 bg-white border rounded shadow z-50">
              {results.length > 0 ? (
                results.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        setQuery('')
                        setResults([])
                      }}
                      className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                    >
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        {/* <div className="text-xs text-gray-500">{item.category}</div> */}
                      </div>
                      <ArrowRight className="text-blue-500 w-4 h-4" />
                    </Link>
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-sm text-gray-500">No results found</li>
              )}
            </ul>
          )}
        </div>

        <div className="flex items-center justify-end gap-4 text-gray-600 cursor-pointer">
          <Link href="#" aria-label="Facebook" className="hover:text-blue-600">
            <Facebook size={18} />
          </Link>
          <Link href="#" aria-label="Location" className="hover:text-blue-600">
            <MapPin size={18} />
          </Link>
          <a href="tel:+15551234" aria-label="Phone" className="hover:text-blue-600">
            <Phone size={18} />
          </a>
          <ContactModal />
          <SignedIn><UserButton /></SignedIn>
          <SignedOut><SignInButton mode="modal"><button className="text-sm hover:underline">Sign in</button></SignInButton></SignedOut>
        </div>
      </div>
    </header>
  )
}
