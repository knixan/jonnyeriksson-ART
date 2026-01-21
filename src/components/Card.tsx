import Image from 'next/image'


type CardProps = {
  img: string
  title: string
  description?: string
  price: string
  sold?: boolean
}

export default function Card({ img, title, description, price, sold }: CardProps) {
  return (
    <div className="group">
      <div className="aspect-square bg-gray-100 mb-4 overflow-hidden relative">
        <Image src={img} alt={title} fill className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <h3 className="font-playfair text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3 font-light">{description}</p>
      <p className={`${sold ? "text-red-600" : "text-black"} font-medium`}>{sold ? "SÅLD" : price}</p>
    </div>
  )
}
