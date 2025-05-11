'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, MapPin, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#F6F6F6] border-b shadow-sm z-50 px-4 lg:px-6">
      {/* MOBILE: stacked layout */}
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
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm hover:underline">Sign in</button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        <input
          type="text"
          placeholder="Type to search"
          className="w-full px-4 py-2 text-sm border bg-white border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* DESKTOP: horizontal grid layout */}
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

        <div className="w-full text-center">
          <input
            type="text"
            placeholder="Type to search"
            className="w-full max-w-xl mx-auto px-4 py-2 text-sm border bg-white border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="flex items-center justify-end gap-4 text-gray-600">
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
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-sm hover:underline">Sign in</button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}
