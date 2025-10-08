import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface VideoBackgroundProps {
  src: string;
  opacity?: number;
  className?: string;
}

export default function VideoBackground({ src, opacity = 0.35, className = "" }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          style={{ objectPosition: "center" }}
        >
          <source src={src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-night-900/60 via-night-900/70 to-night-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(4,8,19,0.8)_70%)]" />
      </motion.div>
    </div>
  );
}
