import HeroSection from './components/HeroSection'
import CardGrid from './components/CardGrid'
import ContentSection from './components/ContentSection'
import { ArrowRight } from 'lucide-react'

const popularItems = [
  {
    image: '/1-card-img.png',
    title: 'Visit the Online Catalog',
    subtitle: '',
    href: '/catalog',
  },
  {
    image: '/resource-van-img.png',
    title: 'Shared Resources & Services',
    subtitle: '',
    href: '/resources',
  },
  {
    image: '/upcoming-events-img.png',
    title: 'Upcoming Events & Programs',
    subtitle: '',
    href: '/events',
  },
  {
    image: '/news-announcements-img.png',
    title: 'News & Announcements',
    subtitle: '',
    href: '/news',
  },
]

const moreItems = [
  {
    image: '/meet-staff-img.png',
    title: 'Meet the Staff at SWLS',
    subtitle: '',
    href: '/staff',
  },
  {
    image: '/helpful-databases-img2.png',
    title: 'Helpful Databases & Learning Tools',
    subtitle: '',
    href: '/databases',
  },
]

export default function Home() {
  return (
    <div className="space-y-12 pt-8 pb-16 ml-[56px] lg:ml-0">
      <HeroSection />

      <ContentSection title="Most Popular">
        <CardGrid items={popularItems} />
      </ContentSection>

      {/* NEW ROW SECTION */}
      <ContentSection title="">
<section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
  {moreItems.map((item, i) => (
    <a
      key={i}
      href={item.href}
      className="relative h-48 md:h-64 w-full rounded-xl overflow-hidden group"
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
        <div className="flex items-center justify-between w-full">
          <div className="text-lg font-semibold leading-tight">
            {item.title}
          </div>
          <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  ))}
</section>
      </ContentSection>
    </div>
  )
}
