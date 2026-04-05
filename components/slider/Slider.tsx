"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./slider.module.css";
import { videos } from "./videos";

// LazyVideo component for viewport-based loading
function LazySliderVideo({ 
  src, 
  title, 
  className,
  sliderVisible = true,
  poster
}: { 
  src: string; 
  title: string; 
  className: string;
  sliderVisible?: boolean;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Video should play only when both in view AND slider is visible
  const shouldPlay = isInView && sliderVisible;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { rootMargin: "100px", threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Load video when in view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView && !isLoaded) {
      video.load();
      setIsLoaded(true);
    }
  }, [isInView, isLoaded]);

  // Play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;

    if (shouldPlay) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [shouldPlay, isLoaded]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          {poster ? (
            <img src={poster} alt={title} className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
          )}
        </div>
      )}
      <video
        ref={videoRef}
        className={className}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
      >
        {isInView && <source src={src} type="video/webm" />}
      </video>
    </div>
  );
}

export default function Slider() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [isSliderVisible, setIsSliderVisible] = useState(true);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Track slider visibility
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSliderVisible(entry.isIntersecting);
        });
      },
      { rootMargin: "50px", threshold: 0 }
    );

    observer.observe(slider);
    return () => observer.disconnect();
  }, []);

  const openInModalIndices = videos
    .map((video, index) => (video.siteUrl ? index : -1))
    .filter((index) => index !== -1);

  const activeVideo = activeVideoIndex !== null ? videos[activeVideoIndex] : null;
  const modalUrl = activeVideo?.siteUrl ?? null;

  const isModalOpen = modalUrl !== null;

  const openSiteModalByIndex = (index: number) => setActiveVideoIndex(index);
  const closeSiteModal = () => setActiveVideoIndex(null);

  const goToAdjacent = (direction: -1 | 1) => {
    if (openInModalIndices.length === 0) return;

    const currentIndex = activeVideoIndex;
    const currentPos = currentIndex === null ? -1 : openInModalIndices.indexOf(currentIndex);
    const basePos = currentPos >= 0 ? currentPos : 0;
    const nextPos = (basePos + direction + openInModalIndices.length) % openInModalIndices.length;
    setActiveVideoIndex(openInModalIndices[nextPos]);
  };

  const openVideo = (index: number) => {
    const video = videos[index];
    if (!video?.siteUrl) return;

    if (video.openInNewTab) {
      // Check if mobile (screen width < 768px)
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        // Mobile: open directly in new tab
        window.open(video.siteUrl, "_blank");
        return;
      }

      // Desktop: Open in a small popup window
      const width = 520;
      const height = 760;
      const left = Math.max(0, Math.round(window.screenX + (window.outerWidth - width) / 2));
      const top = Math.max(0, Math.round(window.screenY + (window.outerHeight - height) / 2));

      const features = [
        "popup=yes",
        `width=${width}`,
        `height=${height}`,
        `left=${left}`,
        `top=${top}`,
      ].join(",");

      const popup = window.open(video.siteUrl, "popupWindow", features);
      if (popup) {
        try {
          popup.focus();
        } catch {
          // ignore
        }
      }
      return;
    }

    openSiteModalByIndex(index);
  };

  const modalHost = (() => {
    if (!modalUrl) return "";
    try {
      return new URL(modalUrl).host;
    } catch {
      return modalUrl;
    }
  })();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSiteModal();
      if (e.key === "ArrowLeft") goToAdjacent(-1);
      if (e.key === "ArrowRight") goToAdjacent(1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  return (
    <div className={styles.container} ref={sliderRef}>
      <div className={styles.grid} ref={gridRef}>
        {videos.map((video, index) => (
          <article className={styles.card} key={video.id}>
            {video.siteUrl && (
              <button
                type="button"
                onClick={() => openVideo(index)}
                className={styles.cardLinkOverlay}
                aria-label={
                  video.openInNewTab
                    ? `Yeni küçük pencerede aç: ${video.siteUrl}`
                    : `Küçük pencerede aç: ${video.siteUrl}`
                }
              />
            )}
            <div className={styles.media}>
              {isClient &&
                (video.src ? (
                  video.src.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                    <div className={styles.mediaImageScrollWrapper}>
                      <img
                        src={video.src}
                        alt={video.title}
                        className={styles.mediaImageScroll}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <LazySliderVideo
                      src={video.src}
                      title={video.title}
                      className={`${styles.mediaEl} ${styles.mediaVideo}`}
                      sliderVisible={isSliderVisible}
                      poster={video.poster}
                    />
                  )
                ) : (
                  <iframe
                    src={`https://player.vimeo.com/video/${video.id}?background=1&autoplay=1&loop=1&muted=1`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    className={styles.mediaEl}
                    title={video.title}
                    loading="lazy"
                  />
                ))}

              <header className={styles.cardInfo}>
                <div className={styles.cardItem}>
                  <p>{video.date}</p>
                </div>
                <div className={styles.cardItem}>
                  <p>{video.title}</p>
                </div>
                <div className={styles.cardItem}>
                  <p>{video.category}</p>
                </div>
              </header>
            </div>
          </article>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={closeSiteModal} role="dialog" aria-modal="true">
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              const touch = e.touches[0];
              if (!touch) return;
              touchStartRef.current = { x: touch.clientX, y: touch.clientY };
            }}
            onTouchEnd={(e) => {
              const start = touchStartRef.current;
              touchStartRef.current = null;

              const touch = e.changedTouches[0];
              if (!start || !touch) return;

              const dx = touch.clientX - start.x;
              const dy = touch.clientY - start.y;
              if (Math.abs(dx) < 60) return;
              if (Math.abs(dx) < Math.abs(dy) * 1.2) return;

              if (dx > 0) goToAdjacent(-1);
              else goToAdjacent(1);
            }}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>{modalHost}</div>
              <div className={styles.modalActions}>
                <a
                  href={modalUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalLink}
                >
                  Yeni sekmede aç
                </a>
                <button type="button" onClick={closeSiteModal} className={styles.modalClose} aria-label="Kapat">
                  ×
                </button>
              </div>
            </div>

            <div className={styles.modalBody}>
              <button
                type="button"
                onClick={() => goToAdjacent(-1)}
                className={`${styles.modalNavSide} ${styles.modalNavLeft}`}
                aria-label="Önceki site"
                disabled={openInModalIndices.length <= 1}
              >
                ‹
              </button>

              <button
                type="button"
                onClick={() => goToAdjacent(1)}
                className={`${styles.modalNavSide} ${styles.modalNavRight}`}
                aria-label="Sonraki site"
                disabled={openInModalIndices.length <= 1}
              >
                ›
              </button>

              {modalUrl?.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                <div className={styles.modalImageContainer}>
                  <img
                    src={modalUrl}
                    alt={activeVideo?.title || "Preview"}
                    className={styles.modalImage}
                  />
                </div>
              ) : (
              <iframe
                src={modalUrl ?? "about:blank"}
                className={styles.modalIframe}
                title={modalHost || "Site"}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
