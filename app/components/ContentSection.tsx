// components/ContentSection.tsx
import { ReactNode } from 'react'

interface ContentSectionProps {
  title: string
  children: ReactNode
}

export default function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section className="mt-12 px-2">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div>{children}</div>
    </section>
  )
}
