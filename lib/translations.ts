import { Language } from './hooks/usePreferredLanguage';

export const translations: Record<Language, Record<string, string>> = {
  TR: {
    // Hero Section
    'hero.title.line1': '5+ yıl deneyim ile uzman',
    'hero.title.line2': 'hizmetleri.',
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

    // BentoGrid Items
    'bento.influencer.title': 'Influencer İçerik Üretimi',
    'bento.influencer.description': 'İşletmeniz ve ürünleriniz için influencerlar tarafından oluşturulan özgün UGC içerikler. Hedef kitlenizle güven oluşturan, organik ve etkileşim odaklı video içerikler.',
    'bento.graphicDesigns.title': 'İşinizi Yansıtan Grafik Tasarımları',
    'bento.graphicDesigns.description': 'Markanızın kimliğini yansıtan özgün ve profesyonel grafik tasarımlar.',
    'bento.instagramProfile.title': 'Instagram Profil Yönetimi',
    'bento.instagramProfile.description': 'Profesyonel Instagram profil yönetimi ve içerik stratejisi ile takipçi kitlenizi büyütün.',
    'bento.corporateIdentity.title': 'Kurumsal Kimlik Tasarımı',
    'bento.corporateIdentity.description': 'Logo, kartvizit, antetli kağıt ve tüm kurumsal materyalleriniz için tutarlı ve profesyonel marka kimliği tasarımları.',

    // Website Projects Section
    'websiteProjects.clickToView': 'Kartlara tıklayarak projeleri yeni pencerede veya modalda inceleyebilirsin.',

    // Mobile Video Feed
    'mobileVideoFeed.description': 'İlk açılışta videolar kapalıdır. Aşağı sürükledikçe otomatik oynar.',

    // Services Section
    'services.socialMediaPosts.title': 'Sosyal Medya Paylaşımları',
    'services.socialMediaPosts.description': 'Aylık olarak kanallarınıza oluşturulan ve yayınlanan statik, tek görsel içeren sosyal medya içerikleri.',
    'services.seoManagement.title': 'SEO Yönetimi',
    'services.seoManagement.description': 'Sıralamalarınızı iyileştirmek ve organik trafiğinizi artırmak için yönetilen SEO hizmeti sunuyoruz. Strateji, içerik, geri bağlantılar ve teknik düzeltmeleri biz üstleniyoruz.',
    'services.shortVideos.title': 'Kısa Video İçerikler',
    'services.shortVideos.description': 'Aylık olarak kanallarınıza oluşturulan ve yayınlanan kısa video içerikler.',
    'services.videoAds.title': 'Video Reklamlar',
    'services.videoAds.description': 'Sosyal medya için yüksek performanslı video reklamlar. Araştırma, senaryo yazımı, kurgu, metin yazarlığı. Müşteriye ait görüntüler, stok içerik ve kullanıcı tarafından oluşturulan içerik (UGC) tarzı kullanılıyor.',
    'services.graphicAds.title': 'Grafik Reklamlar',
    'services.graphicAds.description': 'Sosyal medya için yüksek performanslı video reklamlar. Araştırma, senaryo yazımı, kurgu, metin yazarlığı. Müşteriye ait görüntüler, stok içerik ve kullanıcı tarafından oluşturulan içerik (UGC) tarzı kullanılıyor.',
    'services.ugcVideos.title': 'UGC(Influencer) Video İçerikler',
    'services.ugcVideos.description': 'Aylık olarak kanallarınıza oluşturulan ve yayınlanan UGC (User Generated Content) video içerikler.',

    // Profile Names
    'profile.droneStudios': 'Drone Studios',
    'profile.influencerCreators': 'Influencer Creators',
    'profile.designStudio': 'Design Studio',
    'profile.socialMedia': 'Social Media',
    'profile.brandStudio': 'Brand Studio',
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

    // BentoGrid Items
    'bento.influencer.title': 'Influencer Content Creation',
    'bento.influencer.description': 'Authentic UGC content created by influencers for your business and products. Organic and engagement-focused video content that builds trust with your target audience.',
    'bento.graphicDesigns.title': 'Graphic Designs for Your Business',
    'bento.graphicDesigns.description': 'Original and professional graphic designs that reflect your brand identity.',
    'bento.instagramProfile.title': 'Instagram Profile Management',
    'bento.instagramProfile.description': 'Grow your follower base with professional Instagram profile management and content strategy.',
    'bento.corporateIdentity.title': 'Corporate Identity Design',
    'bento.corporateIdentity.description': 'Consistent and professional brand identity designs for your logo, business cards, letterheads and all corporate materials.',

    // Website Projects Section
    'websiteProjects.clickToView': 'Click on cards to view projects in new window or modal.',

    // Mobile Video Feed
    'mobileVideoFeed.description': 'Videos are off on first load. They play automatically as you scroll down.',

    // Services Section
    'services.socialMediaPosts.title': 'Social Media Posts',
    'services.socialMediaPosts.description': 'Static, single-image social media content created and published monthly to your channels.',
    'services.seoManagement.title': 'SEO Management',
    'services.seoManagement.description': 'We provide managed SEO service to improve your rankings and increase your organic traffic. Strategy, content, backlinks and technical fixes are handled by us.',
    'services.shortVideos.title': 'Short Video Content',
    'services.shortVideos.description': 'Short video content created and published monthly to your channels.',
    'services.videoAds.title': 'Video Ads',
    'services.videoAds.description': 'High-performance video ads for social media. Research, scriptwriting, editing, copywriting. Using client footage, stock content and UGC style.',
    'services.graphicAds.title': 'Graphic Ads',
    'services.graphicAds.description': 'High-performance graphic ads for social media. Research, scriptwriting, editing, copywriting. Using client footage, stock content and UGC style.',
    'services.ugcVideos.title': 'UGC (Influencer) Video Content',
    'services.ugcVideos.description': 'UGC (User Generated Content) video content created and published monthly to your channels.',

    // Profile Names
    'profile.droneStudios': 'Drone Studios',
    'profile.influencerCreators': 'Influencer Creators',
    'profile.designStudio': 'Design Studio',
    'profile.socialMedia': 'Social Media',
    'profile.brandStudio': 'Brand Studio',
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
