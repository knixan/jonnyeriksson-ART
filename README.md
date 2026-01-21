# Jonny Eriksson - ART

En liten Next.js-app som visar konstverk som kort (Card) med mockdata. Byggd med Tailwind CSS och react-icons.

## Funktioner
- Visa konstverk i ett galleri med kort.
- Mockdata för konstverk inklusive titel, storlek, teknik, pris och försäljningsstatus.
- Responsiv design med Tailwind CSS.
- Ikoner från react-icons.
- **SEO-optimerad** för Google, Bing och andra sökmotorer.

## Teknologier
- Next.js
- Tailwind CSS
- React Icons
- TypeScript (om applicerat)

## SEO-optimering

Denna webbplats är optimerad för sökmotorer med följande funktioner:

### Metadata
- **Title & Description**: Optimerade för konstnärsportfölj
- **Open Graph**: För delning på sociala medier
- **Twitter Cards**: För Twitter-delning
- **Structured Data (JSON-LD)**: För bättre förståelse av konstverk för Google

### Tekniska optimeringar
- **Sitemap.xml**: Automatiskt genererad för alla konstverk
- **Robots.txt**: Tillåter alla sökmotorer att indexera sidan
- **Canonical URLs**: Förhindrar duplicerat innehåll
- **Image optimization**: WebP och AVIF format stöd
- **Security headers**: X-Frame-Options, X-Content-Type-Options

### Miljövariabler
Uppdatera `.env.local` med dina riktiga värden:
```env
NEXT_PUBLIC_SITE_URL=https://jonnyeriksson-konst.se
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=din-google-verifieringskod
NEXT_PUBLIC_BING_SITE_VERIFICATION=din-bing-verifieringskod
```

### Google Search Console & Bing Webmaster Tools
1. Verifiera ägandeskap med de koder som finns i `.env.local`
2. Skicka in din sitemap: `https://jonnyeriksson-konst.se/sitemap.xml`
3. Övervaka indexering och sökprestanda

## Snabbstart

Förutsättningar: Node.js (16+)

Installera och starta i utvecklingsläge:
```bash
npm install
npm run dev
```
Besök http://localhost:3000

## Projektstruktur (viktigaste filer)
- src/components/Card.tsx — presentationskomponent för ett konstkort.
- src/components/Gallery.tsx — listar mockCards och renderar Card.
- src/components/Contact.tsx, Footer.tsx — kontakt och sidfot.
- src/app/lib/mockdata.ts — mockdata för konstverken.
- public/images/ — lägg egna bildfiler här (samma sökvägar som i mockdatan).

## Mockdata & bilder
- Uppdatera mockdatan i `src/app/lib/mockdata.ts` för att ändra verk.
- Varje artwork kan ha fält: title, size, technique, price (number|null), sold (boolean), src (väg eller extern URL).
- Bilder: lägg filer i `public/images/` eller använd externa URL:er. För externa bilder, uppdatera `next.config.js` med domains.

Exempel på prisvisning:
- Om `sold: true` visas "SÅLD".
- Om `price: null` visas "Kontakta".

## Ikoner
Projektet använder `react-icons`. Installera om saknas:
```bash
npm install react-icons
```

## Anpassningar
- För att filtrera eller sortera konst i galleriet, uppdatera `Gallery.tsx` där `mockCards` mappas.
- Card-komponenten är presentationslogik — importera data i föräldrakomponent.

## Licens
MIT

---

# Jonny Eriksson - ART (English)

A small Next.js app displaying artworks as cards with mock data. Built with Tailwind CSS and react-icons.

## Features
- Display artworks in a gallery with cards.
- Mock data for artworks including title, size, technique, price, and sales status.
- Responsive design with Tailwind CSS.
- Icons from react-icons.

## Technologies
- Next.js
- Tailwind CSS
- React Icons
- TypeScript (if applied)

## Quick Start

Prerequisites: Node.js (16+)

Install and start in development mode:
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Project Structure (Key Files)
- src/components/Card.tsx — Presentation component for an art card.
- src/components/Gallery.tsx — Lists mockCards and renders Card.
- src/components/Contact.tsx, Footer.tsx — Contact and footer.
- src/app/lib/mockdata.ts — Mock data for artworks.
- public/images/ — Place your image files here (same paths as in mock data).

## Mock Data & Images
- Update mock data in `src/app/lib/mockdata.ts` to change artworks.
- Each artwork can have fields: title, size, technique, price (number|null), sold (boolean), src (path or external URL).
- Images: Place files in `public/images/` or use external URLs. For external images, update `next.config.js` with domains.

Price display examples:
- If `sold: true`, displays "SOLD".
- If `price: null`, displays "Contact".

## Icons
The project uses `react-icons`. Install if missing:
```bash
npm install react-icons
```

## Customizations
- To filter or sort artworks in the gallery, update `Gallery.tsx` where `mockCards` is mapped.
- The Card component is presentation logic — import data in the parent component.

## License
MIT