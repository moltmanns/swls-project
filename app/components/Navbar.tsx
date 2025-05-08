'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import { Facebook, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-[#F6F6F6] border-b shadow-sm z-50 flex items-center justify-between px-4 md:px-6">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-3 shrink-0 w-64">
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

      {/* Center: Search */}
      <div className="flex-grow max-w-2xl px-6">
        <input
          type="text"
          placeholder="Type to search"
          className="w-full px-4 py-2 text-sm border bg-white border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Right: Icons + Auth */}
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
          <SignUpButton mode="modal">
            <button className="text-sm hover:underline">Sign up</button>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  )
}
