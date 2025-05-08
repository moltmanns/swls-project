// components/HeroSection.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[320px] md:h-[340px] bg-gray-100 overflow-hidden rounded-lg">
      <Image
        src="/library-book-shelves.jpg"
        alt="Library shelves"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex items-center px-6 md:px-12">
        <div className="text-white max-w-xxl">
            <h1 className="text-3xl md:text-5xl font-bold leading-[1.1em]">
              <span className="text-2xl block font-medium mb-3">Welcome!</span>
              Get Started with your<br /> Local Library
            </h1>
          <Link href="/directory">
            <button className="mt-12 px-6 py-3 rounded-md bg-gradient-to-b from-[#80F445] to-[#6AB246] text-[#0F0F0F] cursor-pointer transition-all duration-200 hover:from-[#58C431] hover:to-[#4A9632] text-sm font-medium">
              Find My Library →
            </button>
          </Link>

        </div>
      </div>
    </section>
  )
}