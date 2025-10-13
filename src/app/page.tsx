import Hero from '../components/Hero'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

// Exempelkortdata till Galleri
const galleryCards = [
  {
    img: 'https://cdn.konst.se/konstverk/1600/1607600741119.jpg',
    title: 'Ramsjön, 2021',
    description: 'Akryl på bomullsduk ... 70,0 x 90,0 cm.',
    price: 'SÅLD'
  },
  // ... fler kort
]

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery cards={galleryCards} />
      <Contact />
    </>
  )
}
