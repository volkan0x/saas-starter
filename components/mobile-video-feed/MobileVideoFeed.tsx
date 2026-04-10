"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";

import type { GalleryPhoto } from "@/components/photos-gallery/PhotosGallerySection";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  description?: string;
  items: GalleryPhoto[];
  className?: string;
};

function toMp4Fallback(src: string) {
  if (src.toLowerCase().endsWith(".webm")) return src.replace(/\.webm$/i, ".mp4");
  return src;
}

function normalizeTag(tag: string) {
  return tag.trim();
}

export default function MobileVideoFeed({
  title = "Video ve Sosyal Medya İçerikleri",
  description = "Aşağı kaydırdıkça videolar otomatik oynar.",
  items,
  className,
}: Props) {
  // Extract unique tags from all items
  const tags = useMemo(() => {
    const set = new Set<string>();
    for (const item of items) {
      for (const tag of item.tags ?? []) set.add(normalizeTag(tag));
    }
    return ["Tümü", ...Array.from(set)];
  }, [items]);

  const [activeTag, setActiveTag] = useState<string>("Tümü");

  // Filter items by tag, then filter to only videos
  const videos = useMemo(() => {
    const tagFiltered = activeTag === "Tümü" 
      ? items 
      : items.filter((item) => (item.tags ?? []).some((t) => normalizeTag(t) === activeTag));
    
    return tagFiltered.filter(
      (item) => item.mediaType === "video" || item.src.endsWith(".mp4") || item.src.endsWith(".webm"),
    );
  }, [items, activeTag]);

  const showFilters = tags.length > 1;

  const [hasInteracted, setHasInteracted] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [unmutedIndex, setUnmutedIndex] = useState<number | null>(null);
  const [pausedVideos, setPausedVideos] = useState<Set<number>>(new Set());

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const toggleMute = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (unmutedIndex === index) {
      // Mute this video
      video.muted = true;
      setUnmutedIndex(null);
    } else {
      // Mute previous video if any
      if (unmutedIndex !== null) {
        const prevVideo = videoRefs.current[unmutedIndex];
        if (prevVideo) prevVideo.muted = true;
      }
      // Unmute this video - iOS requires play() after unmuting
      video.muted = false;
      video.volume = 1;
      
      // iOS Safari fix: need to call play() after unmuting
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {
          // If play fails, video might need user interaction
          console.log('Audio playback requires user interaction');
        });
      }
      
      setUnmutedIndex(index);
    }
  };

  useEffect(() => {
    const markInteracted = () => setHasInteracted(true);

    window.addEventListener("touchstart", markInteracted, { passive: true });
    window.addEventListener("scroll", markInteracted, { passive: true });

    return () => {
      window.removeEventListener("touchstart", markInteracted);
      window.removeEventListener("scroll", markInteracted);
    };
  }, []);

  useEffect(() => {
    if (videos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the highest intersection ratio.
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (!best?.target) return;
        const index = cardRefs.current.findIndex((el) => el === best.target);
        if (index >= 0) setActiveIndex(index);
      },
      {
        root: null,
        threshold: [0.25, 0.4, 0.55, 0.7, 0.85],
        rootMargin: "0px 0px -20% 0px",
      },
    );

    for (const el of cardRefs.current) {
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [videos.length]);

  useEffect(() => {
    if (!hasInteracted) return;

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            // Autoplay may still be blocked; user can tap.
          });
        }
      } else {
        try {
          video.pause();
        } catch {
          // ignore
        }
      }
    });
  }, [activeIndex, hasInteracted])

  return (
    <section className={cn("py-12", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600">{description}</p>

        {/* Filter chips */}
        {showFilters && (
          <div className="mt-4 flex flex-wrap gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {tags.map((tag) => {
              const isActive = activeTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setActiveTag(tag);
                    // Reset video states when filter changes
                    setActiveIndex(null);
                    setUnmutedIndex(null);
                  }}
                  className={cn(
                    "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition",
                    isActive
                      ? "border-orange-500 bg-orange-500 text-white"
                      : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 active:bg-neutral-100",
                  )}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        )}

        {videos.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-neutral-300 bg-white/60 p-8 text-center">
            <div className="text-sm font-semibold text-neutral-900">Bu kategoride video bulunamadı</div>
            <div className="mt-1 text-sm text-neutral-600">
              Farklı bir kategori seçerek videoları görüntüleyebilirsin.
            </div>
          </div>
        ) : (
        <div className="mt-6 grid gap-6 snap-y snap-mandatory">
          {videos.map((item, index) => {
            const mp4Src = toMp4Fallback(item.src);
            const webmSrc = item.src.toLowerCase().endsWith(".webm") ? item.src : null;
            const isActive = index === activeIndex;
            const isOpen = hasInteracted && isActive;

            return (
              <article
                key={`${item.src}-${item.title ?? ""}-${index}`}
                ref={(el: HTMLDivElement | null) => {
                  cardRefs.current[index] = el;
                }}
                className={cn(
                  "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm",
                  "snap-start",
                )}
              >
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-gray-900">{item.title ?? "Video"}</span>
                    {item.country && (
                      <span className="text-lg" title={item.country}>
                        {item.country === "TR" && "🇹🇷"}
                        {item.country === "US" && "🇺🇸"}
                        {item.country === "DE" && "🇩🇪"}
                        {item.country === "GB" && "🇬🇧"}
                        {item.country === "FR" && "🇫🇷"}
                        {item.country === "NL" && "🇳🇱"}
                        {item.country === "ES" && "🇪🇸"}
                        {item.country === "IT" && "🇮🇹"}
                        {item.country === "AE" && "🇦🇪"}
                        {item.country === "SA" && "🇸🇦"}
                      </span>
                    )}
                  </div>
                  {item.description && <div className="mt-1 text-sm text-gray-600">{item.description}</div>}
                </div>

                <div
                  className={cn(
                    "relative w-full bg-black",
                    isOpen ? "" : "",
                  )}
                  style={{ 
                    aspectRatio: item.aspect === "square" 
                      ? "1 / 1" 
                      : item.aspect === "landscape" 
                        ? "16 / 9" 
                        : "9 / 16" 
                  }}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className={cn(
                      "absolute inset-0 h-full w-full object-center",
                      item.src.toLowerCase().includes("blockchain") ? "object-cover" : "object-contain"
                    )}
                    playsInline
                    loop
                    muted
                    preload="metadata"
                    controls={false}
                    onClick={(e) => {
                      const video = e.currentTarget;
                      if (video.paused) {
                        void video.play();
                        setPausedVideos((prev) => {
                          const next = new Set(prev);
                          next.delete(index);
                          return next;
                        });
                      } else {
                        video.pause();
                        setPausedVideos((prev) => new Set(prev).add(index));
                      }
                    }}
                  >
                    {webmSrc && <source src={webmSrc} type="video/webm" />}
                    <source src={mp4Src} type="video/mp4" />
                  </video>

                  {/* Play butonu - video duraklatıldığında veya başlamadığında göster */}
                  {(!isOpen || pausedVideos.has(index)) && (
                    <button
                      type="button"
                      className="absolute inset-0 flex items-center justify-center bg-black/30"
                      aria-label="Videoyu oynat"
                      onClick={() => {
                        setHasInteracted(true);
                        setActiveIndex(index);
                        setPausedVideos((prev) => {
                          const next = new Set(prev);
                          next.delete(index);
                          return next;
                        });
                        const video = videoRefs.current[index];
                        if (video) void video.play();
                      }}
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:scale-110">
                        <Play className="h-8 w-8 text-neutral-900 ml-1" fill="currentColor" />
                      </div>
                    </button>
                  )}

                  {/* Ses açma/kapama butonu - her zaman görünür */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute(index);
                    }}
                    className="absolute bottom-6 right-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg ring-2 ring-white/50 transition-all active:scale-90 hover:bg-gray-100"
                    aria-label={unmutedIndex === index ? "Sesi kapat" : "Sesi aç"}
                  >
                    {unmutedIndex === index ? (
                      <Volume2 className="h-7 w-7" />
                    ) : (
                      <VolumeX className="h-7 w-7" />
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        )}
      </div>
    </section>
  );
}
