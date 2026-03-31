// Cloudflare R2 Storage URL'leri
// Bandwidth tamamen ücretsiz! 🎉

const BLOB_BASE = "https://pub-d7ec1a8fa14f4570abdeff8e1cb2012e.r2.dev";

export const mediaUrls = {
  // Videos
  burger: `${BLOB_BASE}/Burger.mp4`,
  influencerMp4: `${BLOB_BASE}/influencer_video.mp4`,
  influencerWebm: `${BLOB_BASE}/influencer_video.webm`,
  video1feedbird: `${BLOB_BASE}/video1feedbird_first13sec.mp4`,
  gallerima1: `${BLOB_BASE}/Gallerima_1.mp4`,
  gallerima3: `${BLOB_BASE}/gallerima3.mp4`,
  gallerima3Big: `${BLOB_BASE}/Gallerima_3.mp4`,
  ticaret: `${BLOB_BASE}/video/ticaret.webm`,
  villa: `${BLOB_BASE}/video/villa.webm`,
  konut: `${BLOB_BASE}/video/konut.webm`,
  arsaCompressed: `${BLOB_BASE}/video/arsa_compressed.webm`,
  arsa: `${BLOB_BASE}/video/arsa.webm`,
  houston: `${BLOB_BASE}/video/houston.webm`,
  houstonCompressed: `${BLOB_BASE}/video/houston-compressed.webm`,
  stories: `${BLOB_BASE}/video/stories.webm`,
  storiesMp4: `${BLOB_BASE}/video/stories.mp4`,
  video2: `${BLOB_BASE}/video/video2.webm`,
  video3: `${BLOB_BASE}/video/video3.webm`,
  video4: `${BLOB_BASE}/video/video4.webm`,
  roots: `${BLOB_BASE}/Roots.mp4`,
  mugla: `${BLOB_BASE}/Mugla.mp4`,
  bentiTextile: `${BLOB_BASE}/benti-textile.webm`,
  bursaGunlukKiralik: `${BLOB_BASE}/bursa-gunluk-kiralik.webm`,
  havadurumu: `${BLOB_BASE}/havadurumu.webm`,
  medusaAdmin: `${BLOB_BASE}/medusa-admin.webm`,
  medusaFrontend: `${BLOB_BASE}/medusa-frontend.webm`,
  newVideoMp4: `${BLOB_BASE}/new-video.mp4`,
  newVideoWebm: `${BLOB_BASE}/new-video.webm`,
  uzmantasimaci: `${BLOB_BASE}/uzmantasimaci.webm`,
  yeniVideo: `${BLOB_BASE}/yeni-video.webm`,
  video4NoaudioMp4: `${BLOB_BASE}/video4_noaudio_trimmed.mp4`,
  video4NoaudioWebm: `${BLOB_BASE}/video4_noaudio_trimmed.webm`,
  vimeoOriginal: `${BLOB_BASE}/vimeo-video-original.mp4`,
  downloadedVideo: `${BLOB_BASE}/downloaded_video.mp4`,
  finalVideo: `${BLOB_BASE}/final_video.mp4`,
  bentogridItem: `${BLOB_BASE}/bentogrid-item-492.mp4`,

  // Images
  deb: `${BLOB_BASE}/Deb.jpg`,
  feen5: `${BLOB_BASE}/Feen5.jpg`,
  feen8: `${BLOB_BASE}/Feen8.jpg`,
  feenEng2: `${BLOB_BASE}/FeenENG2.jpg`,
  floraLanding: `${BLOB_BASE}/FloraLanding.jpg`,
  trr: `${BLOB_BASE}/TRr.png`,
  frame: `${BLOB_BASE}/frame.png`,
  tayf: `${BLOB_BASE}/tayf.png`,
  logoAnimation: `${BLOB_BASE}/logo-animation.jpg`,

  // Instagram images
  instagram1: `${BLOB_BASE}/instagram1.jpg`,
  instagram2: `${BLOB_BASE}/instagram2.jpg`,
  instagram3: `${BLOB_BASE}/instagram3.jpg`,
  instagram4: `${BLOB_BASE}/instagram4.jpg`,
  instagram5: `${BLOB_BASE}/instagram5.jpg`,
  instagram6: `${BLOB_BASE}/instagram6.jpg`,
  instagram7: `${BLOB_BASE}/instagram7.jpg`,
  instagram8: `${BLOB_BASE}/instagram8.jpg`,
  instagram9: `${BLOB_BASE}/instagram9.jpg`,
  insta5: `${BLOB_BASE}/insta-5.jpg`,
  insta6: `${BLOB_BASE}/insta-6.jpg`,
  insta7: `${BLOB_BASE}/insta-7.jpg`,
  insta8: `${BLOB_BASE}/insta-8.jpg`,
  insta9: `${BLOB_BASE}/insta-9.jpg`,
} as const;

// Helper function to get instagram image by number
export function getInstagramImage(num: number): string {
  return `${BLOB_BASE}/instagram${num}.jpg`;
}

export default mediaUrls;
