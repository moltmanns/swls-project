// components/LibraryCard.tsx
import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  name: string
  website: string
  code?: string
  county: string
  phone: string
  hours: string
}

export default function LibraryCard({
  name,
  website,
  code,
  county,
  phone,
  hours,
}: Props) {
  return (
    <Link
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      <div className="relative w-full h-36 bg-gray-200">
        <Image
          src="/library-placeholder.jpg"
          alt="Library"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 space-y-1">
        <h3 className="font-semibold text-sm text-gray-900 leading-tight">
          {name} {code ? `(${code})` : ''}
        </h3>
        <div className="text-sm text-gray-700">{county}</div>
        <div className="text-sm text-gray-700">📞 {phone}</div>
        <div className="text-sm text-gray-600 whitespace-normal">
          {hours}
        </div>
        <div className="flex justify-end pt-2">
          <ArrowRight className="h-4 w-4 text-blue-500" />
        </div>
      </div>
    </Link>
  )
}
