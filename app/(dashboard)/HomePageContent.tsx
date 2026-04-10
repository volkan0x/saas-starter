"use client";

import { CreditCard, Database, Zap, Shield, Code2, Gauge, Sparkles, Users, Heart, MessageCircle, Send, Bookmark, Facebook, Instagram, Linkedin, Youtube, Video, Palette, Camera, Star, Rocket, Briefcase, Trophy, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import mediaUrls, { getInstagramImage } from '@/lib/media-urls';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';
import NavbarDemo from '@/components/navbar-menu-demo';
import PhotosGallerySection from "@/components/photos-gallery/PhotosGallerySection";
import { websiteProjectsGalleryPhotos } from "@/lib/website-projects-gallery";
import Slider from "@/components/slider/Slider";
import MobileVideoFeed from "@/components/mobile-video-feed/MobileVideoFeed";
import GraphicDesignCarousel from "@/components/graphic-design-carousel/GraphicDesignCarousel";
import TallyForm from "@/components/tally-form/TallyForm";
import { usePreferredLanguage } from '@/lib/hooks/usePreferredLanguage';
import { t, getFlipWords } from '@/lib/translations';

export default function HomePageContent() {
  const language = usePreferredLanguage();

  return (
    <main className="bg-gray-100">
      <NavbarDemo />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="text-left md:max-w-2xl lg:col-span-6">
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold max-w-7xl text-left mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        {t('hero.title.line1', language)}<br />
        <ContainerTextFlip words={getFlipWords(language)} interval={3000} />
        <br />
        {t('hero.title.line2', language)}
      </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                {t('hero.feature1', language)}<br />
                {t('hero.feature2', language)}<br />
                {t('hero.feature3', language)}
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-wrap items-center gap-3">
                </div>
                <p className="mt-3 text-xs text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-m">
                  {t('hero.platforms', language)}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center hover:scale-110 transition-transform">
                    <Facebook className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-pink-500 flex items-center justify-center hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-red-600 flex items-center justify-center hover:scale-110 transition-transform">
                    <Youtube className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <BentoGrid className="mx-auto">
                <BentoGridItem
                  title={t('bento.drone.title', language)}
                  description={t('bento.drone.description', language)}
                  profileName={t('profile.droneStudios', language)}
                  profileIcon={<Video className="w-5 h-5" />}
                  whiteProfileIcon={true}
                  header={
                    <div
                      className="relative w-full overflow-hidden rounded-lg bg-black"
                      style={{ aspectRatio: "16 / 9" }}
                    >
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        preload="metadata"
                        poster={mediaUrls.posters.influencer}
                        className="absolute inset-0 h-full w-full object-cover"
                      >
                        <source src={mediaUrls.influencerMp4} type="video/mp4" />
                        <source src={mediaUrls.influencerWebm} type="video/webm" />
                      </video>
                      {/* Action buttons */}
                      <div className="absolute bottom-0 right-0 left-0 flex gap-3 items-center justify-end p-4 bg-gradient-to-t from-black/30 to-transparent">
                        <button className="text-white hover:scale-110 transition-transform drop-shadow-lg">
                          <Heart className="w-6 h-6" />
                        </button>
                        <button className="text-white hover:scale-110 transition-transform drop-shadow-lg">
                          <MessageCircle className="w-6 h-6" />
                        </button>
                        <button className="text-white hover:scale-110 transition-transform drop-shadow-lg">
                          <Bookmark className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  }
                  className="md:col-span-2"
                />
                <BentoGridItem
                  title={t('bento.influencer.title', language)}
                  description={t('bento.influencer.description', language)}
                  profileName={t('profile.influencerCreators', language)}
                  profileIcon={<Sparkles className="w-5 h-5" />}
                  whiteProfileIcon={true}
                  header={
                    <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden">
                      <div className="relative w-[180px] h-[320px] overflow-hidden rounded-lg bg-black">
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          preload="metadata"
                          poster={mediaUrls.posters.video1feedbird}
                          className="h-full w-full object-cover"
                        >
                            <source src={mediaUrls.video1feedbird} type="video/mp4" />
                        </video>
                        
                        {/* Action buttons */}
                        <div className="absolute bottom-0 right-0 left-0 flex gap-3 items-center justify-end p-4 bg-gradient-to-t from-black/30 to-transparent">
                          <button className="text-white hover:scale-110 transition-transform drop-shadow-lg">
                            <Heart className="w-6 h-6" />
                          </button>
                          <button className="text-white hover:scale-110 transition-transform drop-shadow-lg">
                            <MessageCircle className="w-6 h-6" />
                          </button>
                          <button className="text-white hover:scale-110 transition-transform drop-shadow-lg">
                            <Bookmark className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  }
                  className="md:col-span-1 md:row-span-2"
                />
                <BentoGridItem
                  title={t('bento.graphicDesigns.title', language)}
                  description={t('bento.graphicDesigns.description', language)}
                  profileName={t('profile.designStudio', language)}
                  profileIcon={<Palette className="w-5 h-5" />}
                  whiteProfileIcon={true}
                  header={
                    <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <GraphicDesignCarousel />
                    </div>
                  }
                  className="md:col-span-2 md:row-span-2"
                />
              </BentoGrid>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl sm:text-3xl font-semibold text-white">{t('websiteProjects.title', language)}</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-300">
            {t('websiteProjects.clickToView', language)}
          </p>
        </div>
        <Slider />
      </section>

      {/* Mobile: Instagram-like vertical feed */}
      <div className="md:hidden">
        <MobileVideoFeed
          items={websiteProjectsGalleryPhotos}
          description={t('mobileVideoFeed.description', language)}
        />
      </div>

      {/* Desktop/Tablet: keep the interactive gallery */}
      <div className="hidden md:block">
        <PhotosGallerySection
          className="py-12"
          title={t('gallery.title', language)}
          description={t('gallery.description', language)}
          photos={websiteProjectsGalleryPhotos}
          layout="instagram"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="border-t-2 border-gray-300"></div>
      </div>

      <div className="w-full flex justify-center my-20 px-4">
        <BentoGrid className="max-w-6xl w-full md:grid-cols-4 place-items-center">
        <BentoGridItem
          title={t('bento.instagramProfile.title', language)}
          description={t('bento.instagramProfile.description', language)}
          profileName={t('profile.socialMedia', language)}
          profileIcon={<Trophy className="w-5 h-5" />}
          whiteProfileIcon={true}
          header={
            <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 p-4">
              <div className="w-full max-w-[320px] rounded-lg bg-white shadow-sm">
                {/* Profile Header */}
                <div className="space-y-3 p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                      <div className="h-full w-full rounded-full bg-white p-[2px]">
                        <img
                          src={mediaUrls.instagram5}
                          alt="Profile"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid flex-1 grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-sm font-semibold">1.2K</div>
                        <div className="text-xs text-gray-500">Posts</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold">45.8K</div>
                        <div className="text-xs text-gray-500">Followers</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold">892</div>
                        <div className="text-xs text-gray-500">Following</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Antalya Hotel</div>
                    <div className="mt-1 text-xs text-gray-600">Professional Account</div>
                  </div>
                </div>

                {/* Grid Posts */}
                <div className="grid grid-cols-3 gap-[2px] bg-gray-100">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <div key={i} className="aspect-square overflow-hidden">
                      <img
                        src={getInstagramImage(i)}
                        alt={`Instagram post ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
          className="md:col-span-2 md:row-span-2"
        />
        <BentoGridItem
          title={t('bento.corporateIdentity.title', language)}
          description={t('bento.corporateIdentity.description', language)}
          profileName={t('profile.socialMedia', language)}
          profileIcon={<Trophy className="w-5 h-5" />}
          whiteProfileIcon={true}
          header={
            <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 p-2">
              <div className="w-full max-w-[480px] rounded-lg bg-white shadow-sm overflow-hidden">
                <img
                  src={mediaUrls.deb}
                  alt="Instagram Profile"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          }
          className="md:col-span-2 md:row-span-2"
        />
        <BentoGridItem
          title={t('bento.corporateIdentity.title', language)}
          description={t('bento.corporateIdentity.description', language)}
          profileName={t('profile.brandStudio', language)}
          profileIcon={<Palette className="w-5 h-5" />}
          whiteProfileIcon={true}
          header={
            <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 p-2">
              <div className="w-full max-w-[480px] rounded-lg bg-white shadow-sm overflow-hidden">
                <img
                  src={mediaUrls.debBranding}
                  alt={t('bento.corporateIdentity.title', language)}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          }
          className="md:col-span-2 md:row-span-2"
        />
      </BentoGrid>
      </div>
      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-transparent border-2 border-gray-300 text-3xl">
                📱
              </div>
              <div className="mt-5 flex flex-col flex-grow">
                <h2 className="text-lg font-medium text-gray-900">
                  {t('services.socialMediaPosts.title', language)}
                </h2>
                <p className="mt-2 py-1 text-base text-gray-500">
                  {t('services.socialMediaPosts.description', language)}
                </p>
                <div className="py-4" />
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-transparent border-2 border-gray-300 text-3xl">
                💻
              </div>
              <div className="mt-5 flex flex-col flex-grow">
                <h2 className="text-lg font-medium text-gray-900">
                  {t('services.seoManagement.title', language)}
                </h2>
                <p className="mt-2 py-1 text-base text-gray-500">
                  {t('services.seoManagement.description', language)}
                </p>
                <div className="py-4" />
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-transparent border-2 border-gray-300 text-3xl">
                🎥
              </div>
              <div className="mt-5 flex flex-col flex-grow">
                <h2 className="text-lg font-medium text-gray-900">
                  {t('services.shortVideos.title', language)}
                </h2>
                <p className="mt-2 py-1 text-base text-gray-500">
                  {t('services.shortVideos.description', language)}
                </p>
                <div className="py-4" />
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-transparent border-2 border-gray-300 text-3xl">
                🎥
              </div>
              <div className="mt-5 flex flex-col flex-grow">
                <h2 className="text-lg font-medium text-gray-900">
                  {t('services.videoAds.title', language)}
                </h2>
                <p className="mt-2 py-1 text-base text-gray-500">
                  {t('services.videoAds.description', language)}
                </p>
                <div className="py-4" />
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-transparent border-2 border-gray-300 text-3xl">
                🖼️
              </div>
              <div className="mt-5 flex flex-col flex-grow">
                <h2 className="text-lg font-medium text-gray-900">
                  {t('services.graphicAds.title', language)}
                </h2>
                <p className="mt-2 py-1 text-base text-gray-500">
                  {t('services.graphicAds.description', language)}
                </p>
                <div className="py-4" />
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-transparent border-2 border-gray-300 text-3xl">
                👤
              </div>
              <div className="mt-5 flex flex-col flex-grow">
                <h2 className="text-lg font-medium text-gray-900">
                  {t('services.ugcVideos.title', language)}
                </h2>
                <p className="mt-2 py-1 text-base text-gray-500">
                  {t('services.ugcVideos.description', language)}
                </p>
                <div className="py-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center">
                <DottedGlowBackground
                  className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
                  opacity={1}
                  gap={10}
                  radius={1.6}
                  colorLightVar="--color-neutral-500"
                  glowColorLightVar="--color-neutral-600"
                  colorDarkVar="--color-neutral-500"
                  glowColorDarkVar="--color-sky-800"
                  backgroundOpacity={0}
                  speedMin={0.3}
                  speedMax={1.6}
                  speedScale={1}
                />
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-col items-center text-center h-full mt-8 lg:mt-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-transparent border-2 border-gray-300 text-3xl">
                    📞
                  </div>
                  <div className="mt-5 flex flex-col flex-grow items-center">
                    <h2 className="text-lg font-medium text-gray-900">
                      {t('contact.schedule', language)}
                    </h2>
                    <p className="mt-2 py-1 text-base text-gray-500">
                      {t('contact.scheduleDesc', language)}
                    </p>
                  </div>
                </div>
              </div>
            
              </div>
        </div>
      </section>

      {/* Tally Contact Form */}
      <TallyForm 
        formId="9qvYLE"
        title={t('contact.title', language)}
        description={t('contact.description', language)}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Feedbird Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Ajans 99</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.aboutUs', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.pricing', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.ourWork', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.reviews', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.scheduleDemo', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.watchDemo', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.blog', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.glossary', language)}</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">{t('footer.services', language)}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.socialMediaManagement', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.shortVideoContent', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.emailDesign', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.seoBlogPosts', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.seoBacklinks', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.instagramGrowth', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.becomeReseller', language)}</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">{t('footer.resources', language)}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.signUp', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.signIn', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.referralProgram', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.compare', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.helpCenter', language)}</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">{t('footer.legal', language)}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.terms', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.refundPolicy', language)}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.privacyPolicy', language)}</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>{t('footer.copyright', language)}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
