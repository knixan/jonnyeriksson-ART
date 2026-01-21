import Image from 'next/image'


type CardProps = {
  img: string
  title: string
  description?: string
  price?: string | null
  sold?: boolean
}

export default function Card({ img, title, description, price, sold }: CardProps) {
  return (
    <div className="group">
      <div className="aspect-square text-black bg-gray-100 mb-4 overflow-hidden relative">
        <Image src={img} alt={title} fill className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <h3 className="font-playfair text-black text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3 font-light">{description}</p>
      <div className="mt-3 text-sm">
        {sold ? (
          <span className="font-semibold">SÅLD</span>
        ) : price === null || price === undefined ? (
          <span className="font-medium">Kontakta</span>
        ) : (
          <span className="font-medium">{price}</span>
        )}
      </div>
    </div>
  )
}
