import Card from './Card'

type GalleryCard = {
  img: string
  title: string
  description?: string
  price: string
}

type GalleryProps = {
  cards: GalleryCard[]
}

export default function Gallery({ cards }: GalleryProps) {
  return (
    <section id="konst" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl font-bold mb-6">Min konst</h2>
          <div className="w-24 h-0.5 bg-black mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card: GalleryCard, i: number) => <Card key={i} {...card} />)}
        </div>
      </div>
    </section>
  )
}
