// Källdata för konstkategorier + en platt lista mockCards som passar Card-komponenten.
// Byt img-vägar till faktiska filer i public/images eller externa URL:er.

export type Artwork = {
  title: string;
  size: string;
  technique: string;
  price: number | null;
  sold?: boolean;
  img: string; // bildlänk för varje verk
};

export type Category = {
  slug: string;
  title: string;
  artworks: Artwork[];
};

export const categories: Category[] = [
  {
    slug: "varmare-breddgrader",
    title: "Varmare breddgrader",
    artworks: [
      { title: "Skopelos", size: "60 x 60 cm", technique: "Olja", price: 5900, img: "/images/skopelos.jpg" },
      { title: "Make Lemonade", size: "22 x 27 cm", technique: "Olja", price: null, sold: true, img: "/images/make-lemonade.jpg" },
      { title: "Soup by Freddie", size: "30 x 30 cm", technique: "Olja", price: 1950, img: "/images/soup-by-freddie.jpg" },
      { title: "Citrus Cirkus", size: "50 x 61 cm", technique: "Olja", price: null, img: "/images/citrus-cirkus.jpg" },
      { title: "Solmogna", size: "30 x 30,5 cm", technique: "Olja", price: null, img: "/images/solmogna.jpg" },
      { title: "Lichnos Bay", size: "89 x 116 cm", technique: "Akryl", price: null, img: "/images/lichnos-bay.jpg" },
      { title: "Barcelona", size: "46 x 55 cm", technique: "Akryl", price: 2950, img: "/images/barcelona.jpg" },
      { title: "Slow Time", size: "42 x 60 cm", technique: "Akryl", price: null, img: "/images/slow-time.jpg" },
      { title: "Medelhavet", size: "42 x 60 cm", technique: "Akryl", price: null, img: "/images/medelhavet.jpg" },
      { title: "Party Animal", size: "70 x 90 cm", technique: "Akryl", price: null, sold: true, img: "/images/party-animal.jpg" },
    ],
  },
  {
    slug: "nordisk-miljo",
    title: "Nordisk miljö",
    artworks: [
      { title: "Skogen", size: "60 x 73 cm", technique: "Akryl", price: null, img: "/images/skogen.jpg" },
      { title: "Midnight Key", size: "20 x 20 cm", technique: "Olja", price: null, img: "/images/midnight-key.jpg" },
      { title: "Rödabergsgatan", size: "41 x 33 cm", technique: "Akryl", price: null, img: "/images/rodabergsgatan.jpg" },
      { title: "Röd Flugsvamp", size: "24 x 33 cm", technique: "Olja", price: 1500, img: "/images/rod-flugsvamp.jpg" },
      { title: "Ramsjön", size: "70 x 90 cm", technique: "Akryl", price: null, img: "/images/ramsjon.jpg" },
      { title: "Norr om Gävle", size: "70 x 50 cm", technique: "Blandteknik", price: null, img: "/images/norr-om-gavle.jpg" },
      { title: "Korpen", size: "33 x 41 cm", technique: "Olja", price: null, img: "/images/korpen.jpg" },
      { title: "Kilsbergen", size: "81 x 100 cm", technique: "Akryl", price: null, img: "/images/kilsbergen.jpg" },
      { title: "Vägskälet", size: "150 x 110 cm", technique: "Olja", price: null, img: "/images/vagskalets.jpg" },
      { title: "Koppla av", size: "30 x 30 cm", technique: "Olja", price: 850, sold: true, img: "/images/koppla-av.jpg" },
      { title: "Hemsekoppen", size: "33 x 24 cm", technique: "Olja", price: 650, img: "/images/hemsekoppen.jpg" },
      { title: "Stilla Februari", size: "29,7 x 42 cm", technique: "Olja", price: null, img: "/images/stilla-februari.jpg" },
      { title: "Skyfall", size: "60 x 73 cm", technique: "Akryl", price: null, img: "/images/skyfall.jpg" },
    ],
  },
  {
    slug: "former",
    title: "Former",
    artworks: [
      { title: "Innanför tullarna", size: "135 x 108 cm", technique: "Akryl", price: null, img: "/images/innanfor-tullarna.jpg" },
      { title: "Model 101", size: "53 x 64 cm", technique: "Akryl", price: 1850, img: "/images/model-101.jpg" },
    ],
  },
];

// Hjälp-typ för Card-komponenten
export type CardItem = {
  id: string;
  img: string;
  title: string;
  description?: string;
  price: string;
  sold?: boolean; // ny flagga för sålda verk
};

function formatPrice(value: number) {
  // Formatera med mellanslag som tusentalsavgränsare, t.ex. 5900 -> "5 900"
  return new Intl.NumberFormat("sv-SE").format(value);
}

// Platta ut kategorierna till en lista som Card-komponenten kan använda.
// img: föreslagen sökväg; byt till riktiga bilder eller externa url:er.
// Om price är null används "Kontakta".
export const mockCards: CardItem[] = categories.flatMap((cat) =>
  cat.artworks.map((art, i) => ({
    id: `${cat.slug}-${i + 1}`,
    img: art.img, // använd bildlänken från mockdatan
    title: art.title,
    description: `${art.size} • ${art.technique}`,
    sold: !!art.sold,
    price: art.sold ? "SÅLD" : art.price === null ? "Kontakta" : `${formatPrice(art.price)} kr`,
  })),
);

export default mockCards;
