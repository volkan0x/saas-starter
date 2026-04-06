import { Language } from './hooks/usePreferredLanguage';

export const translations: Record<Language, Record<string, string>> = {
  TR: {
    // Hero Section
    'hero.title.line1': '5+ yıl deneyim ile uzman',
    'hero.title.line2': 'hizmeti, markanıza özel paketlerle.',
    'hero.feature1': '✨ Markanızla uyumlu birinci sınıf içerik.',
    'hero.feature2': '💰 Alternatiflere göre %80 daha ucuz.',
    'hero.feature3': '👥 İnsanlar tarafından yapıldı, yapay zeka değil',
    'hero.platforms': 'Desteklenen sosyal medya platformları',

    // Flip Words
    'flip.socialMedia': 'sosyal medya',
    'flip.videoAds': 'video reklamları',
    'flip.graphicDesign': 'grafik tasarım',
    'flip.digitalMarketing': 'dijital pazarlama',

    // Bento Grid
    'bento.drone.title': 'Drone Tanıtım Videoları',
    'bento.drone.description': 'İşletmenizi ve mekanlarınızı kuş bakışı görüntülerle tanıtın. Profesyonel drone çekimleri ile markanızı farklı bir perspektiften yansıtın.',
    'bento.socialmedia.title': 'Sosyal Medya Videoları',
    'bento.socialmedia.description': 'Instagram, TikTok ve YouTube için viral içerikler. Markanızı sosyal medyada öne çıkarın.',
    'bento.graphic.title': 'Grafik Tasarım',
    'bento.graphic.description': 'Logo, broşür, sosyal medya görselleri ve daha fazlası. Markanızın görsel kimliğini oluşturun.',

    // Gallery Section
    'gallery.title': 'Video ve Sosyal Medya İçerikleri',
    'gallery.description': 'Aşağı kaydırdıkça videolar otomatik oynar.',
    'gallery.noVideos': 'Bu kategoride video bulunamadı',
    'gallery.noVideosHint': 'Farklı bir kategori seçerek videoları görüntüleyebilirsin.',

    // Graphic Design
    'graphicDesign.title': 'Grafik Tasarım Çalışmaları',
    'graphicDesign.description': 'Logo, kurumsal kimlik ve sosyal medya tasarımları',

    // Website Projects
    'websiteProjects.title': 'Website Projeleri',
    'websiteProjects.description': 'Tamamladığımız web projeleri',

    // Contact Section
    'contact.title': 'Bize Ulaşın',
    'contact.description': 'Sorularınız veya teklif almak için formu doldurun, en kısa sürede size dönüş yapalım.',
    'contact.schedule': 'Görüşme planlayın',
    'contact.scheduleDesc': 'Ekibimizden biriyle 20 dakikalık bir görüşme ayarlayın ve tüm sorularınıza yanıt alın.',

    // Footer
    'footer.aboutUs': 'Hakkımızda',
    'footer.pricing': 'Fiyatlandırma',
    'footer.ourWork': 'Çalışmalarımız',
    'footer.reviews': 'Yorumlar',
    'footer.scheduleDemo': 'Demo Ayarla',
    'footer.watchDemo': 'Demo Videosu İzle',
    'footer.blog': 'Blog',
    'footer.glossary': 'Sözlük',
    'footer.services': 'Hizmetler',
    'footer.socialMediaManagement': 'Sosyal Medya Yönetimi',
    'footer.shortVideoContent': 'Kısa Video İçerikler',
    'footer.emailDesign': 'E-posta Tasarımı',
    'footer.seoBlogPosts': 'SEO Blog Yazıları',
    'footer.seoBacklinks': 'SEO Geri Bağlantılar',
    'footer.instagramGrowth': 'Instagram Büyütme',
    'footer.becomeReseller': 'Bayi Ol',
    'footer.resources': 'Kaynaklar',
    'footer.signUp': 'Kayıt Ol',
    'footer.signIn': 'Giriş Yap',
    'footer.referralProgram': 'Yönlendirme Programı',
    'footer.compare': 'Karşılaştır',
    'footer.helpCenter': 'Yardım Merkezi',
    'footer.legal': 'Yasal',
    'footer.terms': 'Şartlar ve Koşullar',
    'footer.refundPolicy': 'İade Politikası',
    'footer.privacyPolicy': 'Gizlilik Politikası',
    'footer.copyright': '© 2026 Volkan Bozkurt. Tüm hakları saklıdır.',

    // Navbar
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetler',
    'nav.portfolio': 'Portfolyo',
    'nav.contact': 'İletişim',

    // Filter Tags
    'filter.all': 'Tümü',
    'filter.video': 'Video',
    'filter.graphic': 'Grafik',
    'filter.drone': 'Drone',
  },
  EN: {
    // Hero Section
    'hero.title.line1': '5+ years of expert',
    'hero.title.line2': 'service with custom packages for your brand.',
    'hero.feature1': '✨ Premium content aligned with your brand.',
    'hero.feature2': '💰 80% cheaper than alternatives.',
    'hero.feature3': '👥 Made by humans, not AI',
    'hero.platforms': 'Supported social media platforms',

    // Flip Words
    'flip.socialMedia': 'social media',
    'flip.videoAds': 'video ads',
    'flip.graphicDesign': 'graphic design',
    'flip.digitalMarketing': 'digital marketing',

    // Bento Grid
    'bento.drone.title': 'Drone Promotion Videos',
    'bento.drone.description': 'Showcase your business and venues with aerial views. Reflect your brand from a different perspective with professional drone footage.',
    'bento.socialmedia.title': 'Social Media Videos',
    'bento.socialmedia.description': 'Viral content for Instagram, TikTok and YouTube. Make your brand stand out on social media.',
    'bento.graphic.title': 'Graphic Design',
    'bento.graphic.description': 'Logo, brochure, social media graphics and more. Create your brand\'s visual identity.',

    // Gallery Section
    'gallery.title': 'Video & Social Media Content',
    'gallery.description': 'Videos play automatically as you scroll down.',
    'gallery.noVideos': 'No videos found in this category',
    'gallery.noVideosHint': 'You can view videos by selecting a different category.',

    // Graphic Design
    'graphicDesign.title': 'Graphic Design Works',
    'graphicDesign.description': 'Logo, corporate identity and social media designs',

    // Website Projects
    'websiteProjects.title': 'Website Projects',
    'websiteProjects.description': 'Web projects we have completed',

    // Contact Section
    'contact.title': 'Contact Us',
    'contact.description': 'Fill out the form for inquiries or quotes, and we\'ll get back to you as soon as possible.',
    'contact.schedule': 'Schedule a Call',
    'contact.scheduleDesc': 'Schedule a 20-minute call with our team and get all your questions answered.',

    // Footer
    'footer.aboutUs': 'About Us',
    'footer.pricing': 'Pricing',
    'footer.ourWork': 'Our Work',
    'footer.reviews': 'Reviews',
    'footer.scheduleDemo': 'Schedule Demo',
    'footer.watchDemo': 'Watch Demo Video',
    'footer.blog': 'Blog',
    'footer.glossary': 'Glossary',
    'footer.services': 'Services',
    'footer.socialMediaManagement': 'Social Media Management',
    'footer.shortVideoContent': 'Short Video Content',
    'footer.emailDesign': 'Email Design',
    'footer.seoBlogPosts': 'SEO Blog Posts',
    'footer.seoBacklinks': 'SEO Backlinks',
    'footer.instagramGrowth': 'Instagram Growth',
    'footer.becomeReseller': 'Become a Reseller',
    'footer.resources': 'Resources',
    'footer.signUp': 'Sign Up',
    'footer.signIn': 'Sign In',
    'footer.referralProgram': 'Referral Program',
    'footer.compare': 'Compare',
    'footer.helpCenter': 'Help Center',
    'footer.legal': 'Legal',
    'footer.terms': 'Terms and Conditions',
    'footer.refundPolicy': 'Refund Policy',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.copyright': '© 2026 Volkan Bozkurt. All rights reserved.',

    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',

    // Filter Tags
    'filter.all': 'All',
    'filter.video': 'Video',
    'filter.graphic': 'Graphic',
    'filter.drone': 'Drone',
  },
};

export const t = (key: string, language: Language): string => {
  return translations[language][key] || translations['TR'][key] || key;
};

export const getFlipWords = (language: Language): string[] => {
  return [
    t('flip.socialMedia', language),
    t('flip.videoAds', language),
    t('flip.graphicDesign', language),
    t('flip.digitalMarketing', language),
  ];
};
