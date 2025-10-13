import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface VideoBackgroundProps {
  src: string;
  opacity?: number;
  className?: string;
}

export default function VideoBackground({ src, opacity = 0.35, className = "" }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    // Nur auf Desktop-Geräten laden
    const isDesktop = window.innerWidth >= 768 && !('ontouchstart' in window);
    setShouldLoadVideo(isDesktop);
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) return;
    
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.8;

    // Explizit Video starten für Mobile-Browser
    const playVideo = () => {
      video.play().catch(() => {
        // Fallback: Bei Autoplay-Blockierung
        console.log('Autoplay blocked, waiting for user interaction');
      });
    };

    // Intersection Observer für bessere Mobile-Unterstützung
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVideo();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    playVideo(); // Sofort versuchen

    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {shouldLoadVideo && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center" }}
          >
            <source src={src} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-night-900/60 via-night-900/70 to-night-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(4,8,19,0.8)_70%)]" />
      </motion.div>
    </div>
  );
}
