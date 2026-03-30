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
    src: "/medusa-frontend.webm",
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
    src: "/havadurumu.webm",
    siteUrl: "https://havadurumu-fawn.vercel.app/",
  },
  {
    id: "bursa-gunluk-kiralik-daireler.webm",
    title: "Bursa Günlük Kiralık Daireler",
    category: "Nature",
    date: "July 2022",
    src: "/bursa-gunluk-kiralik.webm",
    siteUrl: "https://bursagunlukkiralikdaireler.com/",
  },
  {
    id: "flora-garden-hotel",
    title: "Flora Garden Hotel",
    category: "Hotel",
    date: "March 2026",
    src: "/FloraLanding.jpg",
    siteUrl: "/FloraLanding.jpg",
  },
  {
    id: "uzmantasimaci.webm",
    title: "Uzman Nakliyat",
    category: "Nature",
    date: "March 2026",
    src: "/uzmantasimaci.webm",
    siteUrl: "https://uzmantasimaci.com/",
  },
  {
    id: "benti-textile",
    title: "Benti Textile",
    category: "Nature",
    date: "August 2022",
    src: "/benti-textile.webm",
    siteUrl: "https://bentitextile.com/",
  },
];
