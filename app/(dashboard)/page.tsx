import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Database, Zap, Shield, Code2, Gauge, Sparkles, Users, Heart, MessageCircle, Send, Bookmark, Facebook, Instagram, Linkedin, Youtube, Video, Palette, Camera, Star, Rocket, Briefcase, Trophy, Lightbulb } from 'lucide-react';
import { Terminal } from './terminal';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Cover } from "@/components/ui/cover";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';
import { DropdownButton } from "@/components/ui/dropdown";


export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="text-left md:max-w-2xl lg:col-span-6">
                <h1 className="text-2xl md:text-2xl lg:text-4xl font-semibold max-w-7xl text-left mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        5+ yıl deneyim ile uzman<br />
        <ContainerTextFlip words={["sosyal medya", "video reklamları", "grafik tasarım", "dijital pazarlama"]} interval={3000} />
        <br />
        hizmeti, ayda sadece <span className="relative inline-block"><Cover>999₺</Cover><span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500"></span></span>'den başlayan fiyatlarla.
      </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                ✨ Markanızla uyumlu birinci sınıf içerik.<br />
                💰 Alternatiflere göre %80 daha ucuz.<br />
                👥 İnsanlar tarafından yapıldı, yapay zeka değil
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="/bir-gorusme-planla"
                >
                  <Button
                    size="lg"
                    className="text-lg rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
                  >
                    Ücretsiz demo görüşmesi ayarla
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <p className="mt-3 text-xs text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-m">
                  Desteklenen sosyal medya platformları
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 transition-colors">
                    <Facebook className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-pink-500 transition-colors">
                    <Instagram className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-black transition-colors">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-red-600 transition-colors">
                    <Youtube className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 transition-colors">
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
                  title="Drone Tanıtım Videoları"
                  description="İşletmenizi ve mekanlarınızı kuş bakışı görüntülerle tanıtın. Profesyonel drone çekimleri ile markanızı farklı bir perspektiften yansıtın."
                  profileName="Drone Studios"
                  profileIcon={<Video className="w-5 h-5 text-white" />}
                  header={
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                      >
                        <source src="/influencer_video.webm" type="video/webm" />
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
                  title="Influencer İçerik Üretimi"
                  description="İşletmeniz ve ürünleriniz için influencerlar tarafından oluşturulan özgün UGC içerikler. Hedef kitlenizle güven oluşturan, organik ve etkileşim odaklı video içerikler."
                  profileName="Influencer Creators"
                  profileIcon={<Sparkles className="w-5 h-5 text-white" />}
                  header={
                    <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden">
                      <div className="relative w-[180px] h-[320px] overflow-hidden rounded-lg bg-black">
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="h-full w-full object-cover"
                        >
                          <source src="/video1feedbird_first13sec.webm" type="video/webm" />
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
                  title="İşinizi Yansıtan Grafik Tasarımları"
                  description="Markanızın kimliğini yansıtan özgün ve profesyonel grafik tasarımlar."
                  profileName="Design Studio"
                  profileIcon={<Palette className="w-5 h-5 text-white" />}
                  header={
                    <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden">
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src="/TRr.png" 
                          alt="Beautiful UI Components" 
                          className="h-full w-full object-contain"
                        />
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
                  className="md:col-span-2 md:row-span-2"
                />
                
                
                
              </BentoGrid>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="border-t-2 border-gray-300"></div>
      </div>

      <BentoGrid className="mx-auto my-20">
        <BentoGridItem
                  title="Profesyonel Sosyal Medya Yönetimi"
                  description="Markanızın sosyal medya varlığını güçlendiren, stratejik içerik planlama ve topluluk yönetimi hizmetleri."
                  profileImage="/instagram4.jpg"
                  profileName="Social Media Pro"
                  header={
                    <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden">
                      <div className="relative w-[550px] h-[480px] overflow-hidden rounded-lg bg-black">
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="h-full w-full object-cover"
                        >
                          <source src="/sosyal-medya-video.webm" type="video/webm" />
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
                            <Send className="w-6 h-6" />
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
                  title="Viral Video İçerikleri"
                  description="Ürün ve hizmetlerinizi görsel olarak anlatan, profesyonel video animasyonlar."
                  profileImage="/instagram5.jpg"
                  profileName="Content Creator"
                  header={

                    <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden">
                      <div className="relative w-[550px] h-[480px] overflow-hidden rounded-lg bg-black">
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="h-full w-full object-cover"
                        >
                          <source src="/video4_noaudio_trimmed.webm" type="video/webm" />
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
                            <Send className="w-6 h-6" />
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
                  title="Viral Video İçerikleri"
                  description="Ürün ve hizmetlerinizi görsel olarak anlatan, profesyonel video animasyonlar."
                  profileImage="/instagram6.jpg"
                  profileName="Viral Studio"
                  header={

                    <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden">
                      <div className="relative w-[550px] h-[480px] overflow-hidden rounded-lg bg-black">
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="h-full w-full object-cover"
                        >
                          <source src="/yeni-video.webm" type="video/webm" />
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
                            <Send className="w-6 h-6" />
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
                  title="Viral Video İçerikleri"
                  description="Ürün ve hizmetlerinizi görsel olarak anlatan, profesyonel video animasyonlar."
                  profileImage="/instagram7.jpg"
                  profileName="Graphic Designer"
                  header={

                    <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden">
                      <div className="relative w-[550px] h-[480px] overflow-hidden rounded-lg bg-black">
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="h-full w-full object-cover"
                        >
                          <source src="/new-video.webm" type="video/webm" />
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
                            <Send className="w-6 h-6" />
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
                  title="Özel Grafik Tasarımlar"
                  description="Markanıza özel, dikkat çekici ve profesyonel grafik tasarım çözümleri."
                  profileImage="/instagram8.jpg"
                  profileName="Animation Pro"
                  header={
                    <div className="flex h-full w-full max-w-[1000px] items-center justify-center rounded-lg overflow-hidden">
                      <div className="relative aspect-square w-full  overflow-hidden rounded-lg">
                        <img 
                          src="/frame.png" 
                          alt="Frame Design" 
                          className="absolute inset-0 h-full w-full object-contain"
                        />
                        
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
                  title="Profesyonel Logo Animasyonları"
                  description="İşletmeniz için profesyonel video çekimleri ve kurguları."
                  profileImage="/instagram9.jpg"
                  profileName="3D Studio"
                  header={
                    <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden">
                      <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <source src="/final_video.mp4" type="video/mp4" />
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
                  className="md:col-span-1 md:row-span-1"
                />
                <BentoGridItem
                  title="Profesyonel 3D Animasyon ve VR Efektleri"
                  description="İşletmeniz için profesyonel video çekimleri ve kurguları."
                  profileImage="/instagram1.jpg"
                  profileName="Brand Hotel"
                  header={
                    <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden">
                      <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <source src="/bentogrid-item-492.mp4" type="video/mp4" />
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
                  className="md:col-span-1 md:row-span-1"
                />
                <BentoGridItem
                  title="Instagram Profil Yönetimi"
                  description="Profesyonel Instagram profil yönetimi ve içerik stratejisi ile takipçi kitlenizi büyütün."
                  profileImage="/instagram4.jpg"
                  profileName="Social Media"
                  header={
                    <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 p-4">
                      <div className="w-full max-w-[320px] bg-white rounded-lg shadow-sm">
                        {/* Profile Header */}
                        <div className="p-4 space-y-3">
                          <div className="flex items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                              <div className="w-full h-full rounded-full bg-white p-[2px]">
                                <img 
                                  src="/instagram5.jpg" 
                                  alt="Profile"
                                  className="w-full h-full rounded-full object-cover"
                                />
                              </div>
                            </div>
                            <div className="flex-1 grid grid-cols-3 gap-2 text-center">
                              <div>
                                <div className="font-semibold text-sm">1.2K</div>
                                <div className="text-xs text-gray-500">Posts</div>
                              </div>
                              <div>
                                <div className="font-semibold text-sm">45.8K</div>
                                <div className="text-xs text-gray-500">Followers</div>
                              </div>
                              <div>
                                <div className="font-semibold text-sm">892</div>
                                <div className="text-xs text-gray-500">Following</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-sm">Brand Hotel</div>
                            <div className="text-xs text-gray-600 mt-1">Professional Account</div>
                          </div>
                        </div>
                        
                        {/* Grid Posts */}
                        <div className="grid grid-cols-3 gap-[2px] bg-gray-100">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                            <div key={i} className="aspect-square overflow-hidden">
                              <img 
                                src={`/instagram${i}.jpg`} 
                                alt={`Instagram post ${i}`}
                                className="w-full h-full object-cover"
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
                  title="Özel Grafik Tasarımlar"
                  description="Markanıza özel, dikkat çekici ve profesyonel grafik tasarım çözümleri."
                  profileImage="/instagram2.jpg"
                  profileName="Design Expert"
                  header={
                    <div className="h-full w-full max-w-[1000px] items-center justify-center rounded-lg overflow-hidden">
                      <div className="relative aspect-square w-full  overflow-hidden rounded-lg">
                        <img 
                          src="tayf.png"
                          alt="Logo Animation" 
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        
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
                  title="Profesyonel Video İçerikler"
                  description="İşletmeniz için profesyonel video çekimleri ve kurguları."
                  profileImage="/instagram3.jpg"
                  profileName="Pro Video Team"
                  header={
                    <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden">
                      <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
                        <video
                          autoPlay 
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <source src="/downloaded_video.mp4" type="video/mp4" />
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
                  className="md:col-span-1 md:row-span-1"
                />
                <BentoGridItem
                  title="Profesyonel Video İçerikler"
                  description="İşletmeniz için profesyonel video çekimleri ve kurguları."
                  profileImage="/instagram6.jpg"
                  profileName="Video Studio"
                  header={
                    <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden">
                      <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
                        <video
                          autoPlay 
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <source src="/vimeo-video-original.mp4" type="video/mp4" />
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
                  className="md:col-span-1 md:row-span-1"
                />
      </BentoGrid>
      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-transparent border-2 border-gray-300 text-3xl">
                📱
              </div>
              <div className="mt-5 flex flex-col flex-grow">
                <h2 className="text-lg font-medium text-gray-900">
                  Sosyal Medya Paylaşımları 
                </h2>
                <p className="mt-2 py-1 text-base text-gray-500">
                  Aylık olarak kanallarınıza oluşturulan ve yayınlanan statik, tek görsel içeren sosyal medya içerikleri.
                </p>
                <h2 className="text-2xl py-4 font-bold text-gray-900">
                  999₺/ay
                </h2>
                <div className="w-full mt-auto">
                  <DropdownButton items={[
                    { id: '10', label: '10 post / 999₺/ay' },
                    { id: '15', label: '15 post / 1.499₺/ay' },
                    { id: '20', label: '20 post / 1.999₺/ay' },
                  ]} />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-transparent border-2 border-gray-300 text-3xl">
                💻
              </div>
              <div className="mt-5 flex flex-col flex-grow">
                <h2 className="text-lg font-medium text-gray-900">
                  SEO Yönetimi
                </h2>
                <p className="mt-2 py-1 text-base text-gray-500">
                  Sıralamalarınızı iyileştirmek ve organik trafiğinizi artırmak için yönetilen SEO hizmeti sunuyoruz. Strateji, içerik, geri bağlantılar ve teknik düzeltmeleri biz üstleniyoruz.
                </p>
                <h2 className="text-2xl py-4 font-bold text-gray-900">
                  1.499₺/ay
                </h2>
                <div className="w-full mt-auto">
                  <DropdownButton items={[
                    { id: 'basic', label: 'Temel SEO / 1.499₺/ay' },
                    { id: 'standard', label: 'Standart SEO / 2.499₺/ay' },
                    { id: 'premium', label: 'Premium SEO / 3.999₺/ay' }
                  ]} />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-transparent border-2 border-gray-300 text-3xl">
                🎥
              </div>
              <div className="mt-5 flex flex-col flex-grow">
                <h2 className="text-lg font-medium text-gray-900">
                  Kısa Video İçerikler
                </h2>
                <p className="mt-2 py-1 text-base text-gray-500">
                  Aylık olarak kanallarınıza oluşturulan ve yayınlanan kısa video içerikler.
                </p>
                <h2 className="text-2xl py-4 font-bold text-gray-900">
                  1.999₺/ay
                </h2>
                <div className="w-full mt-auto">
                  <DropdownButton items={[
                    { id: '5', label: '5 video / 1.999₺/ay' },
                    { id: '10', label: '10 video / 3.499₺/ay' },
                    { id: '15', label: '15 video / 4.999₺/ay' },
                    { id: '20', label: '20 video / 6.499₺/ay' }
                  ]} />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-transparent border-2 border-gray-300 text-3xl">
                🎥
              </div>
              <div className="mt-5 flex flex-col flex-grow">
                <h2 className="text-lg font-medium text-gray-900">
                  Video Reklamlar
                </h2>
                <p className="mt-2 py-1 text-base text-gray-500">
                  Sosyal medya için yüksek performanslı video reklamlar.
                  Araştırma, senaryo yazımı, kurgu, metin yazarlığı. Müşteriye ait görüntüler, stok içerik ve kullanıcı tarafından oluşturulan içerik (UGC) tarzı kullanılıyor.
                </p>
                <h2 className="text-2xl py-4 font-bold text-gray-900">
                  999₺/ay
                </h2>
                <div className="w-full mt-auto">
                  <DropdownButton items={[
                    { id: '5', label: '2 video reklam / 999₺/ay' },
                    { id: '10', label: '4 video reklam / 3.499₺/ay' },
                    { id: '15', label: '6 video reklam / 4.999₺/ay' },
                  ]} />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-transparent border-2 border-gray-300 text-3xl">
                🖼️
              </div>
              <div className="mt-5 flex flex-col flex-grow">
                <h2 className="text-lg font-medium text-gray-900">
                  Grafik Reklamlar
                </h2>
                <p className="mt-2 py-1 text-base text-gray-500">
                  Sosyal medya için yüksek performanslı video reklamlar.
                  Araştırma, senaryo yazımı, kurgu, metin yazarlığı. Müşteriye ait görüntüler, stok içerik ve kullanıcı tarafından oluşturulan içerik (UGC) tarzı kullanılıyor.
                </p>
                <h2 className="text-2xl py-4 font-bold text-gray-900">
                  999₺/ay
                </h2>
                <div className="w-full mt-auto">
                  <DropdownButton items={[
                    { id: '5', label: '5 grafik reklam / 999₺/ay' },
                    { id: '10', label: '4 grafik reklam / 3.499₺/ay' },
                    { id: '15', label: '6 grafik reklam / 4.999₺/ay' },
                  ]} />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-transparent border-2 border-gray-300 text-3xl">
                👤
              </div>
              <div className="mt-5 flex flex-col flex-grow">
                <h2 className="text-lg font-medium text-gray-900">
                  UGC(Influencer) Video İçerikler
                </h2>
                <p className="mt-2 py-1 text-base text-gray-500">
                  Aylık olarak kanallarınıza oluşturulan ve yayınlanan UGC (User Generated Content) video içerikler.
                </p>
                <h2 className="text-2xl py-4 font-bold text-gray-900">
                  2.499₺/ay
                </h2>
                <div className="w-full mt-auto">
                  <DropdownButton items={[
                    { id: '3', label: '3 UGC video / 2.499₺/ay' },
                    { id: '5', label: '6 UGC video / 3.999₺/ay' },
                    { id: '8', label: '9 UGC video / 5.999₺/ay' },
                  ]} />
                </div>
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
                      Görüşme planlayın
                    </h2>
                    <p className="mt-2 py-1 text-base text-gray-500">
                      Ekibimizden biriyle 20 dakikalık bir görüşme ayarlayın ve tüm sorularınıza yanıt alın.
                    </p>
                    <div className="w-full mt-4">
                      <a href="/bir-gorusme-planla">
                        <Button
                          size="lg"
                          className="text-lg rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
                        >
                          Bir görüşme planlayın
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            
              </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Feedbird Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Ajans 99</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fiyatlandırma</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Çalışmalarımız</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Yorumlar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo Ayarla</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo Videosu İzle</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sözlük</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Hizmetler</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Sosyal Medya Yönetimi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kısa Video İçerikler</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-posta Tasarımı</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO Blog Yazıları</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO Geri Bağlantılar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram Büyütme</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bayi Ol</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Kaynaklar</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Kayıt Ol</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Giriş Yap</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Yönlendirme Programı</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karşılaştır</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Yardım Merkezi</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Yasal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Şartlar ve Koşullar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">İade Politikası</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2026 Ajans99. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
