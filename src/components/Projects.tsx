"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent, useTransform, MotionValue } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120; // 000 to 119

/**
 * Remaps raw scrollYProgress so that:
 *  - Frames 0–59  (first half of the video) play during scroll 0 → 0.45  (faster)
 *  - Frames 60–119 (second half / section 3) play during scroll 0.45 → 1.0 (slower — more time)
 *
 * Adjust the pivot values to taste:
 *   INPUT_PIVOT  = where in the scroll range the slowdown begins (0–1)
 *   OUTPUT_PIVOT = which fraction of the video plays before that point (0–1)
 */
const INPUT_PIVOT  = 0.45; // scroll position where pacing shifts
const OUTPUT_PIVOT = 0.55; // video progress at that scroll position

function useRemappedProgress(raw: MotionValue<number>) {
  return useTransform(raw, (v: number) => {
    if (v <= INPUT_PIVOT) {
      // first segment: 0 → INPUT_PIVOT maps to 0 → OUTPUT_PIVOT
      return (v / INPUT_PIVOT) * OUTPUT_PIVOT;
    } else {
      // second segment: INPUT_PIVOT → 1 maps to OUTPUT_PIVOT → 1
      return OUTPUT_PIVOT + ((v - INPUT_PIVOT) / (1 - INPUT_PIVOT)) * (1 - OUTPUT_PIVOT);
    }
  });
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Remapped progress: section 3 gets more scroll range, so more time on screen
  const remappedProgress = useRemappedProgress(scrollYProgress);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded]  = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameIdx = String(i).padStart(3, "0");
      img.decoding = "sync";
      img.loading  = "eager";
      img.src = `/sequence/frame_${frameIdx}_delay-0.066s.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const drawFrame = useCallback((index: number) => {
    if (!canvasRef.current || !images[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img         = images[index];
    const canvasWidth = canvas.width;
    const canvasHeight= canvas.height;

    const imgRatio    = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth, drawHeight = canvasHeight;
    let offsetX = 0, offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvasWidth / imgRatio;
      offsetY    = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgRatio;
      offsetX   = (canvasWidth - drawWidth) / 2;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [images]);

  // Resize + initial draw (uses remapped value for correct frame)
  useEffect(() => {
    if (!loaded || !canvasRef.current || images.length === 0) return;

    const resizeCanvas = () => {
      if (!canvasRef.current) return;
      const parent = canvasRef.current.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        const dpr  = window.devicePixelRatio || 1;
        canvasRef.current.width  = rect.width  * dpr;
        canvasRef.current.height = rect.height * dpr;

        const currentIndex = Math.floor(remappedProgress.get() * (FRAME_COUNT - 1));
        drawFrame(Math.max(0, Math.min(currentIndex, FRAME_COUNT - 1)));
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [loaded, drawFrame, remappedProgress, images.length]);

  // Scrub frames using remapped progress
  useMotionValueEvent(remappedProgress, "change", (latest) => {
    if (!loaded) return;
    const frameIndex = Math.floor(latest * (FRAME_COUNT - 1));
    drawFrame(Math.max(0, Math.min(frameIndex, FRAME_COUNT - 1)));
  });

  return (
    <div
      ref={containerRef}
      style={{ position: "relative" }}
      className="relative h-[700vh] w-full bg-[#121212]"
    >
      {!loaded && (
        <div className="fixed inset-0 flex items-center justify-center text-white/50 z-50">
          <span className="animate-pulse tracking-widest uppercase text-sm">
            Loading Visuals...
          </span>
        </div>
      )}

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full block origin-top-left"
          style={{ transform: "none" }}
        />
        <div className={`transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
          {/* Pass remappedProgress so Overlay text timing matches the video pacing */}
          <Overlay scrollYProgress={remappedProgress} />
        </div>
      </div>
    </div>
  );
}
