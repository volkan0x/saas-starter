"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./slider.module.css";
import { videos } from "./videos";

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && sliderRef.current) {
      initializeCards();
    }
  }, [isClient]);

  const initializeCards = () => {
    if (!sliderRef.current) return;

    const cards = Array.from(
      sliderRef.current.querySelectorAll<HTMLElement>(`.${styles.card}`),
    );

    gsap.to(cards, {
      y: (i) => `${20 * i}%`,
      z: (i) => 15 * i,
      duration: 1,
      ease: "power3.out",
      stagger: -0.1,
    });
  };

  const handleClick = () => {
    if (isAnimating || !sliderRef.current) return;
    setIsAnimating(true);

    const slider = sliderRef.current;
    const cards = Array.from(slider.querySelectorAll<HTMLElement>(`.${styles.card}`));
    const lastCard = cards.pop();

    if (!lastCard) {
      setIsAnimating(false);
      return;
    }

    gsap.to(lastCard, {
      y: "+=150%",
      duration: 0.75,
      ease: "power3.inOut",
      onStart: () => {
        setTimeout(() => {
          slider.prepend(lastCard);
          initializeCards();
          setTimeout(() => {
            setIsAnimating(false);
          }, 1000);
        }, 300);
      },
    });
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.slider} ref={sliderRef}>
        {videos.map((video) => (
          <div className={styles.card} key={video.id}>
            <div className={styles.cardInfo}>
              <div className={styles.cardItem}>
                <p>{video.date}</p>
              </div>
              <div className={styles.cardItem}>
                <p>{video.title}</p>
              </div>
              <div className={styles.cardItem}>
                <p>{video.category}</p>
              </div>
            </div>

            <div className={styles.videoPlayer}>
              {isClient && (
                <iframe
                  src={`https://player.vimeo.com/video/${video.id}?background=1&autoplay=1&loop=1&muted=1`}
                  width="100%"
                  height="100%"
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="border-0"
                  title={video.title}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
