import mediaUrls from "@/lib/media-urls";

export type SliderVideo = {
  id: string;
  title: string;
  category: string;
  date: string;
  src?: string;
  siteUrl?: string;
  openInNewTab?: boolean;
  poster?: string;
};

export const videos: SliderVideo[] = [
  {
    id: "medusa-frontend.webm",
    title: "E-ticaret Mağaza Sayfası",
    category: "E-commerce",
    date: "March 2026",
    src: mediaUrls.medusaFrontend,
    siteUrl: "https://storefront-production-f35a.up.railway.app/dk/store",
    poster: mediaUrls.posters.medusaFrontend,
  },
  {
    id: "medusa-admin.webm",
    title: "E-ticaret Admin Paneli",
    category: "E-commerce",
    date: "March 2026",
    src: mediaUrls.medusaAdmin,
    siteUrl: "https://medusajs.com/admin/",
    poster: mediaUrls.posters.medusaAdmin,
  },
  {
    id: "havadurumu.webm",
    title: "Hava Durumu",
    category: "Weather",
    date: "March 2026",
    src: mediaUrls.havadurumu,
    siteUrl: "https://havadurumu-fawn.vercel.app/",
    poster: mediaUrls.posters.havadurumu,
  },
  // {
  //   id: "bursa-gunluk-kiralik-daireler.webm",
  //   title: "Bursa Günlük Kiralık Daireler",
  //   category: "Nature",
  //   date: "July 2022",
  //   src: mediaUrls.bursaGunlukKiralik,
  //   siteUrl: "https://bursagunlukkiralikdaireler.com/",
  //   poster: mediaUrls.posters.bursaGunlukKiralik,
  // },
  {
    id: "flora-garden-hotel",
    title: "Flora Garden Hotel (Antalya)",
    category: "Hotel",
    date: "March 2026",
    src: mediaUrls.floraLanding,
    siteUrl: mediaUrls.floraLanding,
  },
  {
    id: "uzmantasimaci.webm",
    title: "Uzman Nakliyat",
    category: "Nature",
    date: "March 2026",
    src: mediaUrls.uzmantasimaci,
    siteUrl: "https://uzmantasimaci.com/",
    poster: mediaUrls.posters.uzmantasimaci,
  },
  // {
  //   id: "benti-textile",
  //   title: "Benti Textile",
  //   category: "Nature",
  //   date: "August 2022",
  //   src: mediaUrls.bentiTextile,
  //   siteUrl: "https://bentitextile.com/",
  //   poster: mediaUrls.posters.bentiTextile,
  // },
];
