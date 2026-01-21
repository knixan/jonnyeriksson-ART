export type Artwork = {
  title: string;
  size: string;
  technique: string;
  price: number | null;
  sold?: boolean;
  src: string; // Renamed from 'src' for HTML consistency
};

export type Category = {
  slug: string;
  title: string;
  artworks: Artwork[];
};

export const categories: Category[] = [
  {
    slug: "stockholm",
    title: "Stockholm",
    artworks: [
      {
        title: "Vasastan",
        size: "42 x 59,4 cm",
        technique: "Akryl",
        price: 5300,
        src: "https://cdn.konst.se/konstverk/1600/3855380596100.jpg",
      },
      {
        title: "Kungsholmen",
        size: "42 x 59,4 cm",
        technique: "Akryl",
        price: 5300,
        src: "https://cdn.konst.se/konstverk/1600/383451.jpg",
      },
      {
        title: "Södermalm",
        size: "42 x 59,4 cm",
        technique: "Akryl",
        price: 5300,
        src: "https://cdn.konst.se/konstverk/1600/382677.jpg",
      },
      {
        title: "Innanför Tullarna",
        size: "135 x 108 cm",
        technique: "Akryl",
        price: null,
        sold: true,
        src: "https://cdn.konst.se/konstverk/1600/378551.jpg",
      },
      {
        title: "Model 101",
        size: "53 x 64 cm",
        technique: "Akryl",
        price: 1850,
        src: "https://cdn.konst.se/konstverk/1600/300236.jpg",
      },
    ],
  },
  {
    slug: "varmare-breddgrader",
    title: "Varmare breddgrader",
    artworks: [
      {
        title: "Skopelos",
        size: "60 x 60 cm",
        technique: "Olja",
        price: 5900,
        src: "https://cdn.konst.se/konstverk/1600/3341510738703.jpg",
      },
      {
        title: "Make Lemonade",
        size: "22 x 27 cm",
        technique: "Olja",
        price: null,
        sold: true,
        src: "https://cdn.konst.se/konstverk/1600/245569.jpg",
      },
      {
        title: "Soup by Freddie",
        size: "30 x 30 cm",
        technique: "Olja",
        price: 1950,
        src: "https://cdn.konst.se/konstverk/1600/3466100886418.jpg",
      },
      {
        title: "Citrus Cirkus",
        size: "50 x 61 cm",
        technique: "Olja",
        price: null,
        sold: true,
        src: "https://cdn.konst.se/konstverk/1600/2647720607698.jpg",
      },
      {
        title: "Solmogna",
        size: "30 x 30,5 cm",
        technique: "Olja",
        price: null,
        sold: true,
        src: "https://cdn.konst.se/konstverk/1600/2543240735136.jpg",
      },
      {
        title: "Lichnos Bay",
        size: "89 x 116 cm",
        technique: "Akryl",
        price: null,
        sold: true,
        src: "https://cdn.konst.se/konstverk/1600/3070510191173.jpg",
      },
      {
        title: "Barcelona",
        size: "46 x 55 cm",
        technique: "Akryl",
        price: 2950,
        src: "https://cdn.konst.se/konstverk/1600/2922080887654.jpg",
      },
      {
        title: "Slow Time",
        size: "42 x 60 cm",
        technique: "Akryl",
        price: null,
        src: "https://cdn.konst.se/konstverk/1600/2489660410342.jpg",
      },
      {
        title: "Medelhavet",
        size: "42 x 60 cm",
        technique: "Akryl",
        price: null,
        src: "https://cdn.konst.se/konstverk/1600/256039.jpg",
      },
      {
        title: "Party Animal",
        size: "70 x 90 cm",
        technique: "Akryl",
        price: null,
        sold: true,
        src: "https://cdn.konst.se/konstverk/1600/256033.jpg",
      },
    ],
  },
  {
    slug: "nordisk-miljo",
    title: "Nordisk miljö",
    artworks: [
      {
        title: "Skogen",
        size: "60 x 73 cm",
        technique: "Akryl",
        price: null,
        src: "https://cdn.konst.se/konstverk/1600/1233520034803.jpg",
      },
      {
        title: "Midnight Key",
        size: "20 x 20 cm",
        technique: "Olja",
        price: null,
        src: "https://cdn.konst.se/konstverk/1600/251914.jpg",
      },
      {
        title: "Rödabergsgatan",
        size: "41 x 33 cm",
        technique: "Akryl",
        price: null,
        src: "https://cdn.konst.se/konstverk/1600/260553.jpg",
      },
      {
        title: "Röd Flugsvamp",
        size: "24 x 33 cm",
        technique: "Olja",
        price: 1500,
        src: "https://cdn.konst.se/konstverk/1600/2529000925645.jpg",
      },
      {
        title: "Ramsjön",
        size: "70 x 90 cm",
        technique: "Akryl",
        price: null,
        src: "https://cdn.konst.se/konstverk/1600/1607600741119.jpg",
      },
      {
        title: "Norr om Gävle",
        size: "70 x 50 cm",
        technique: "Blandteknik",
        price: null,
        src: "https://cdn.konst.se/konstverk/1600/1232450733954.jpg",
      },
      {
        title: "Korpen",
        size: "33 x 41 cm",
        technique: "Olja",
        price: null,
        src: "https://cdn.konst.se/konstverk/1600/2328500382558.jpg",
      },
      {
        title: "Kilsbergen",
        size: "81 x 100 cm",
        technique: "Akryl",
        price: null,
        src: "https://cdn.konst.se/konstverk/1600/1434830694502.jpg",
      },
      {
        title: "Vägskälet",
        size: "150 x 110 cm",
        technique: "Olja",
        price: null,
        src: "https://cdn.konst.se/konstverk/1600/318100.jpg",
      },
      {
        title: "Utan Titel",
        size: "30 x 30 cm",
        technique: "Akryl",
        price: null,
        src: "https://cdn.konst.se/konstverk/1600/3794500575541.jpg",
      },
      {
        title: "Koppla av",
        size: "30 x 30 cm",
        technique: "Olja",
        price: 850,
        sold: true,
        src: "https://cdn.konst.se/konstverk/1600/2448080189220.jpg",
      },
      {
        title: "Hemsekoppen",
        size: "33 x 24 cm",
        technique: "Olja",
        price: 650,
        src: "https://cdn.konst.se/konstverk/1600/245105.jpg",
      },
      {
        title: "Stilla Februari",
        size: "29,7 x 42 cm",
        technique: "Olja",
        price: null,
        src: "https://cdn.konst.se/konstverk/1600/3308440448465.jpg",
      },
      {
        title: "Skyfall",
        size: "60 x 73 cm",
        technique: "Akryl",
        price: null,
        src: "https://cdn.konst.se/konstverk/1600/1603980890025.jpg",
      },
      {
        title: "Utan Titel",
        size: "24 x 33 cm",
        technique: "Akryl",
        price: 650,
        src: "https://cdn.konst.se/konstverk/1600/3794500575541.jpg",
      },
    ],
  },
];

export type CardItem = {
  id: string;
  src: string;
  title: string;
  description?: string;
  price: string | null;
  sold?: boolean;
};

function formatPrice(value: number) {
  return new Intl.NumberFormat("sv-SE").format(value);
}

export const mockCards: CardItem[] = categories.flatMap((cat) =>
  cat.artworks.map((art, i) => ({
    id: `${cat.slug}-${i + 1}`,
    src: art.src,
    title: art.title,
    description: `${art.size} • ${art.technique}`,
    sold: !!art.sold,
    // Returnera null när pris saknas. UI-komponenten visar antingen pris eller "SÅLD".
    price: art.sold
      ? "SÅLD"
      : art.price === null
        ? null
        : `${formatPrice(art.price)} kr`,
  })),
);

export default mockCards;
