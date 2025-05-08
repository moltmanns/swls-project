// components/CardGrid.tsx
import ImageCard from './ImageCard'

interface CardItem {
  image: string
  title: string
  subtitle: string
  href: string
}

interface CardGridProps {
  items: CardItem[]
}

export default function CardGrid({ items }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item, i) => (
        <ImageCard key={i} {...item} />
      ))}
    </div>
  )
}
