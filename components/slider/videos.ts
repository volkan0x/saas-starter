import mediaUrls from "@/lib/media-urls";

export type SliderVideo = {
  id: string;
  title: string;
  category: string;
  date: string;
  src?: string;
  siteUrl?: string;
  openInNewTab?: boolean;
};

export const videos: SliderVideo[] = [
  {
    id: "medusa-frontend.webm",
    title: "E-ticaret Mağaza Sayfası",
    category: "E-commerce",
    date: "March 2026",
    src: mediaUrls.medusaFrontend,
    siteUrl: "https://storefront-production-f35a.up.railway.app/dk/store",
  },
  {
    id: "medusa-admin.webm",
    title: "E-ticaret Admin Paneli",
    category: "E-commerce",
    date: "March 2026",
    src: "/medusa-admin.webm",
    siteUrl: "https://medusajs.com/admin/",
  },
  {
    id: "havadurumu.webm",
    title: "Hava Durumu",
    category: "Weather",
    date: "March 2026",
    src: mediaUrls.havadurumu,
    siteUrl: "https://havadurumu-fawn.vercel.app/",
  },
  {
    id: "bursa-gunluk-kiralik-daireler.webm",
    title: "Bursa Günlük Kiralık Daireler",
    category: "Nature",
    date: "July 2022",
    src: mediaUrls.bursaGunlukKiralik,
    siteUrl: "https://bursagunlukkiralikdaireler.com/",
  },
  {
    id: "flora-garden-hotel",
    title: "Flora Garden Hotel",
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
  },
  {
    id: "benti-textile",
    title: "Benti Textile",
    category: "Nature",
    date: "August 2022",
    src: mediaUrls.bentiTextile,
    siteUrl: "https://bentitextile.com/",
  },
];
