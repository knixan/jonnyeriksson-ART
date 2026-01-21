import Card from './Card'
import { mockCards } from '@/app/lib/mockdata'

export default function Gallery() {
  return (
    <section id="konst" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-black text-4xl lg:text-5xl font-bold mb-6">
            Konst
          </h2>
          <div className="w-24 h-0.5 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCards.map((card) => (
            <Card
              key={card.id}
              img={card.img}
              title={card.title}
              description={card.description}
              price={card.price}
              sold={card.sold}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
