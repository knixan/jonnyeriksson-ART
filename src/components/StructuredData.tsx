import { categories } from '../app/lib/mockdata'

export default function StructuredData() {
  const artworks = categories.flatMap(category =>
    category.artworks.map(artwork => ({
      '@type': 'VisualArtwork',
      name: artwork.title,
      creator: {
        '@type': 'Person',
        name: 'Jonny Eriksson'
      },
      artform: artwork.technique.toLowerCase(),
      size: artwork.size,
      material: artwork.technique,
      offers: artwork.sold ? {
        '@type': 'Offer',
        availability: 'https://schema.org/SoldOut',
        price: artwork.price,
        priceCurrency: 'SEK'
      } : artwork.price ? {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        price: artwork.price,
        priceCurrency: 'SEK',
        url: 'https://jonnyeriksson-konst.se'
      } : undefined,
      image: artwork.src,
      category: category.title
    }))
  )

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jonny Eriksson Konst',
    description: 'Svensk konstnär specialiserad på akrylkonst och oljemålningar',
    url: 'https://jonnyeriksson-konst.se',
    logo: 'https://jonnyeriksson-konst.se/logo.png',
    sameAs: [
      'https://www.instagram.com/jonnyeriksson',
      // Lägg till andra sociala medier här
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+46-XXX-XXX-XX', // Uppdatera med rätt telefonnummer
      contactType: 'customer service',
      availableLanguage: 'Swedish'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Konstverk',
      itemListElement: artworks
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
    />
  )
}