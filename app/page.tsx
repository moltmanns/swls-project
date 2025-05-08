import HeroSection from './components/HeroSection'
import CardGrid from './components/CardGrid'
import ContentSection from './components/ContentSection'

const popularItems = [
  {
    image: '/images/card1.jpg',
    title: 'Visit the Online Catalog',
    subtitle: 'One Card, One System',
    href: '/catalog',
  },
  {
    image: '/images/card2.jpg',
    title: 'Shared Resources & Services',
    subtitle: '',
    href: '/resources',
  },
  {
    image: '/images/card3.jpg',
    title: 'Upcoming Events & Programs',
    subtitle: '',
    href: '/events',
  },
  {
    image: '/images/card4.jpg',
    title: 'News & Announcements',
    subtitle: '',
    href: '/news',
  },
]

export default function Home() {
  return (
    <div className="space-y-12 p-8">
      <HeroSection />

      <ContentSection title="Most Popular">
        <CardGrid items={popularItems} />
      </ContentSection>
    </div>
  )
}
