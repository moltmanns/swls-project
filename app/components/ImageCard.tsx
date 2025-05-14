'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

interface ImageCardProps {
  image: string
  title: string
  subtitle?: string
  href: string
}

export default function ImageCard({ image, title, subtitle, href }: ImageCardProps) {
  return (
    <Link href={href} className="group block">
      <Card className="overflow-hidden rounded-xl shadow-md transition hover:shadow-lg">
        {/* Top Image */}
        <div className="w-full">
          <Image
            src={image}
            alt={title}
            width={800} // You can adjust based on actual image size
            height={450}
            className="w-full h-auto object-cover px-4"
          />
        </div>

        {/* Bottom content */}
        <CardContent className="p-4 flex items-center justify-between">
          <div className="text-sm leading-snug text-gray-900 font-medium">
            <div>{title}</div>
            {subtitle && <div className="text-gray-600 text-xs">{subtitle}</div>}
          </div>
          <ArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
        </CardContent>
      </Card>
    </Link>
  )
}
