"use client";

import { useEffect, useRef, useState, VideoHTMLAttributes } from "react";

interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  type?: string;
  /** Alternative sources for different formats */
  sources?: { src: string; type: string }[];
  /** Poster image URL - shown before video loads */
  poster?: string;
  /** Root margin for intersection observer (default: "100px") */
  rootMargin?: string;
  /** Threshold for intersection observer (default: 0.1) */
  threshold?: number;
  /** Whether to pause when out of viewport (default: true) */
  pauseWhenHidden?: boolean;
  /** Wrapper className */
  wrapperClassName?: string;
}

/**
 * LazyVideo - Video component with lazy loading and viewport-based playback
 * 
 * Features:
 * - Only loads video when it enters viewport (with rootMargin buffer)
 * - Pauses video when it leaves viewport
 * - Shows poster/placeholder before loading
 * - Supports multiple source formats
 */
export function LazyVideo({
  src,
  type = "video/mp4",
  sources,
  poster,
  rootMargin = "200px",
  threshold = 0.1,
  pauseWhenHidden = true,
  wrapperClassName,
  className,
  autoPlay,
  muted = true,
  loop = true,
  playsInline = true,
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  // Handle video loading when in view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView && !isLoaded) {
      // Load the video
      video.load();
      setIsLoaded(true);
    }
  }, [isInView, isLoaded]);

  // Handle play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;

    if (isInView) {
      // Play when in view
      video.play().catch(() => {
        // Autoplay may be blocked, ignore error
      });
      setHasStartedPlaying(true);
    } else if (pauseWhenHidden && hasStartedPlaying) {
      // Pause when out of view
      video.pause();
    }
  }, [isInView, isLoaded, pauseWhenHidden, hasStartedPlaying]);

  // Build sources array
  const videoSources = sources || [{ src, type }];

  return (
    <div ref={containerRef} className={wrapperClassName}>
      {/* Show poster before video loads */}
      {!isLoaded && poster && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}
      
      {/* Loading placeholder when no poster */}
      {!isLoaded && !poster && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
        </div>
      )}

      <video
        ref={videoRef}
        className={className}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        poster={poster}
        preload="none"
        {...props}
      >
        {/* Only add sources when in view to prevent early network requests */}
        {isInView && videoSources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
      </video>
    </div>
  );
}

export default LazyVideo;
