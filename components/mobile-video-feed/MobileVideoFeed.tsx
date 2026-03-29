"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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

export default function MobileVideoFeed({
  title = "Video ve Sosyal Medya İçerikleri",
  description = "Aşağı kaydırdıkça videolar otomatik oynar.",
  items,
  className,
}: Props) {
  const videos = useMemo(() => {
    return items.filter(
      (item) => item.mediaType === "video" || item.src.endsWith(".mp4") || item.src.endsWith(".webm"),
    );
  }, [items]);

  const [hasInteracted, setHasInteracted] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

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
                  <div className="text-sm font-semibold text-gray-900">{item.title ?? "Video"}</div>
                  {item.description && <div className="mt-1 text-sm text-gray-600">{item.description}</div>}
                </div>

                <div
                  className={cn(
                    "relative w-full bg-black",
                    isOpen ? "" : "",
                  )}
                  style={{ aspectRatio: "9 / 16" }}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className="absolute inset-0 h-full w-full object-contain object-center"
                    playsInline
                    loop
                    muted
                    preload="metadata"
                    controls={false}
                    onClick={(e) => {
                      const video = e.currentTarget;
                      if (video.paused) void video.play();
                      else video.pause();
                    }}
                  >
                    <source src={mp4Src} type="video/mp4" />
                    {webmSrc && <source src={webmSrc} type="video/webm" />}
                  </video>

                  {!isOpen && (
                    <button
                      type="button"
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-black/10 to-transparent"
                      aria-label="Videoyu oynat"
                      onClick={() => {
                        setHasInteracted(true);
                        setActiveIndex(index);
                        const video = videoRefs.current[index];
                        if (video) void video.play();
                      }}
                    >
                      <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black shadow">
                        Oynat
                      </span>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
