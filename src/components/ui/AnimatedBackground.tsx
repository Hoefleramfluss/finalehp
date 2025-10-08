import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

function lerp(current: number, target: number, factor: number) {
  return current + (target - current) * factor;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const prefersReducedMotion = useReducedMotion();
  let devicePixelRatio = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

  const springX = useSpring(pointerX, { stiffness: 40, damping: 12, mass: 0.8 });
  const springY = useSpring(pointerY, { stiffness: 40, damping: 12, mass: 0.8 });

  const parallaxX = useTransform(springX, (v) => `${(v - 0.5) * 12}px`);
  const parallaxY = useTransform(springY, (v) => `${(v - 0.5) * 10}px`);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let raf = 0;
    let t = 0;

    const resize = () => {
      devicePixelRatio = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const scaledWidth = Math.max(1, Math.floor(width * devicePixelRatio));
      const scaledHeight = Math.max(1, Math.floor(height * devicePixelRatio));
      if (canvas.width !== scaledWidth || canvas.height !== scaledHeight) {
        canvas.width = scaledWidth;
        canvas.height = scaledHeight;
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      t += prefersReducedMotion ? 0.002 : 0.005;

      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, `hsl(${(t * 120) % 360}, 80%, 12%)`);
      gradient.addColorStop(1, `hsl(${(t * 120 + 160) % 360}, 70%, 9%)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const particles = prefersReducedMotion ? 12 : 28;

      for (let i = 0; i < particles; i++) {
        const speed = prefersReducedMotion ? 0.5 : 1;
        const x = ((Math.sin(t * speed + i) + 1) / 2) * width;
        const y = ((Math.cos(t * speed * 1.3 + i) + 1) / 2) * height;
        const radius = prefersReducedMotion ? 1 : 1.6;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.22)";
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handlePointer = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      pointerX.set(lerp(pointerX.get(), x, 0.2));
      pointerY.set(lerp(pointerY.get(), y, 0.2));
    };

    const handleLeave = () => {
      pointerX.set(0.5);
      pointerY.set(0.5);
    };

    const node = canvasRef.current?.parentElement;
    if (!node) return;

    node.addEventListener("pointermove", handlePointer);
    node.addEventListener("pointerleave", handleLeave);

    return () => {
      node.removeEventListener("pointermove", handlePointer);
      node.removeEventListener("pointerleave", handleLeave);
    };
  }, [pointerX, pointerY, prefersReducedMotion]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{
          transform: prefersReducedMotion ? undefined : `translate3d(0,0,0)`
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 mix-blend-screen opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(600px 320px at 10% 10%, rgba(0,212,255,0.18), transparent 62%), radial-gradient(900px 480px at 90% 90%, rgba(0,188,212,0.18), transparent 65%)",
          backgroundSize: "200% 200%",
          x: prefersReducedMotion ? undefined : parallaxX,
          y: prefersReducedMotion ? undefined : parallaxY,
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : { backgroundPosition: ["0% 0%", "100% 100%"] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 16, repeat: Infinity, ease: "linear" }
        }
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
    </div>
  );
}
