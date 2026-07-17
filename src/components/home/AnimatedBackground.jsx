import { useEffect, useRef } from "react";

/**
 * Canvas-based particle network — small dots drift slowly and draw a thin
 * line to nearby neighbors. Genuinely animates every frame (not a static
 * gradient). Reused across the site as the signature background; pass
 * `variant="dark"` on dark surfaces (e.g. AuthBanner) so the connecting
 * lines stay visible against a navy background.
 */
export default function AnimatedBackground({ variant = "light", fadeTo = "#F7FAFB" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];
    let width = 0;
    let height = 0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const DOT_COLOR = "17, 157, 164"; // #119DA4 (same on both variants)
    const LINE_COLOR = variant === "dark" ? "255, 255, 255" : "22, 34, 58";
    const LINE_ALPHA = variant === "dark" ? 0.1 : 0.14;
    const LINK_DIST = 140;
    const COUNT_DENSITY = 16000; // px^2 per particle

    function resize() {
      const parent = canvas.parentElement;
      width = canvas.width = parent.clientWidth;
      height = canvas.height = parent.clientHeight;
      const count = Math.max(24, Math.min(70, Math.floor((width * height) / COUNT_DENSITY)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 1.2,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(${LINE_COLOR}, ${LINE_ALPHA * (1 - dist / LINK_DIST)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${DOT_COLOR}, 0.7)`;
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      step(); // draw one static frame, no loop
    } else {
      raf = requestAnimationFrame(step);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [variant]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {fadeTo && (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 60%, ${fadeTo} 100%)`,
          }}
        />
      )}
    </div>
  );
}