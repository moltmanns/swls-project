// components/ImageCard.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface ImageCardProps {
  image: string
  title: string
  subtitle: string
  href: string
}

export default function ImageCard({ image, title, subtitle, href }: ImageCardProps) {
  return (
    <Link href={href} className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative h-28 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 text-sm">
        <p className="font-medium mb-1">{title}</p>
        <div className="text-xs text-gray-500 flex items-center justify-between">
          <span>{subtitle}</span>
          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-black transition" />
        </div>
      </div>
    </Link>
  )
}