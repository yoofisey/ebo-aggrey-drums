"use client";

import { useEffect, useRef } from "react";

export function HeroStage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const update = () => {
      const shift = Math.min(window.scrollY, window.innerHeight) * 0.16;
      video.style.transform = `translate3d(0, ${shift}px, 0) scale(1.06)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(60%_65%_at_62%_45%,#55555e_0%,#2c2c34_42%,#17171c_78%)]" />

      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover object-[50%_35%] opacity-90 will-change-transform"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-reel-poster.jpg"
      >
        <source src="/videos/ebo-hero-reel.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-canvas/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-canvas to-transparent" />
    </div>
  );
}
