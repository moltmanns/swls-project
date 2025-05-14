// components/ContactModal.tsx
'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function ContactModal() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honey: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.honey) return // bot spam trap
    const mailto = `mailto:info@example.com?subject=Contact%20Form%20Submission&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailto
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button aria-label="Email" className="hover:text-[#263C85] cursor-pointer">
          <Mail size={18} />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot */}
          <input
            type="text"
            name="honey"
            value={formData.honey}
            onChange={handleChange}
            className="hidden"
            autoComplete="off"
          />

          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#263C85] text-white font-semibold py-2 rounded hover:bg-[#4A9632] transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
