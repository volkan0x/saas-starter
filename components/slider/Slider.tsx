"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./slider.module.css";
import { videos } from "./videos";

export default function Slider() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const openInModalIndices = videos
    .map((video, index) => (video.siteUrl ? index : -1))
    .filter((index) => index !== -1);

  const activeVideo = activeVideoIndex !== null ? videos[activeVideoIndex] : null;
  const modalUrl = activeVideo?.siteUrl ?? null;

  const isModalOpen = activeVideo !== null;

  const openSiteModalByIndex = (index: number) => setActiveVideoIndex(index);
  const closeSiteModal = () => setActiveVideoIndex(null);

  const tryOpenPopup = (url: string, name: string) => {
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
      "scrollbars=yes",
      "resizable=yes",
      "noopener=yes",
      "noreferrer=yes",
    ].join(",");

    const popup = window.open(url, name, features);
    if (!popup) return false;

    try {
      popup.opener = null;
      popup.focus();
    } catch {
      // ignore
    }

    return true;
  };

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
      // Prefer a small popup window; if blocked, open a small modal with a direct link.
      const opened = tryOpenPopup(video.siteUrl, `ajans99:${video.id}`);
      if (opened) return;
      openSiteModalByIndex(index);
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
    <div className={styles.container}>
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
                    ? `Küçük pencerede aç: ${video.siteUrl}`
                    : `Modalda aç: ${video.siteUrl}`
                }
              />
            )}
            <div className={styles.media}>
              {isClient &&
                (video.src ? (
                  <video
                    src={video.src}
                    className={`${styles.mediaEl} ${styles.mediaVideo}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <iframe
                    src={`https://player.vimeo.com/video/${video.id}?background=1&autoplay=1&loop=1&muted=1`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    className={styles.mediaEl}
                    title={video.title}
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

      {isModalOpen && modalUrl && (
        <div className={styles.modalBackdrop} onClick={closeSiteModal} role="dialog" aria-modal="true">
          <div
            className={`${styles.modal} ${activeVideo?.openInNewTab ? styles.modalSmall : ""}`}
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

            {activeVideo?.openInNewTab ? (
              <div className={styles.modalBodyLink}>
                <p className={styles.modalDescription}>
                  Bu sayfa bazı tarayıcılarda iframe içinde görüntülenmeyebilir. Pop-up engellendiyse aşağıdaki butonla küçük
                  pencereyi tekrar açabilir veya yeni sekmede devam edebilirsin.
                </p>

                <div className={styles.modalLinkRow}>
                  <button
                    type="button"
                    onClick={() => {
                      if (!modalUrl) return;
                      const opened = tryOpenPopup(modalUrl, `ajans99:${activeVideo.id}`);
                      if (opened) closeSiteModal();
                    }}
                    className={styles.modalButton}
                  >
                    Küçük pencere aç
                  </button>
                  <a
                    href={modalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalButtonSecondary}
                  >
                    Yeni sekmede aç
                  </a>
                </div>
              </div>
            ) : (
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

                <iframe
                  src={modalUrl ?? "about:blank"}
                  className={styles.modalIframe}
                  title={modalHost || "Site"}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
