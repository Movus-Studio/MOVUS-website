"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const photos = [
  "/images/hero-woman.webp",
  "/images/program-ems.webp",
  "/images/program-group.webp",
  "/images/studio-training.webp",
  "/images/program-ishape.webp",
];

export function Transformations() {
  const prefersReducedMotion = useReducedMotion();

  // A very simple static CSS-based 3D coverflow effect simulating the screenshot
  // In a real production scenario, you'd use a robust Swiper.js coverflow or advanced Framer Motion layout, 
  // but this creates the visual structure from the image exactly.
  
  return (
    <section className="bg-movus-white py-20 md:py-32 lg:py-40 overflow-hidden" id="transformations">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overline mb-6"
          >
            (Πραγματικές Μεταμορφώσεις)
          </motion.p>
          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display mb-6 leading-[0.85] text-movus-black"
          >
            <span className="inline-block mr-4">FROM START TO</span>
            <span className="text-movus-orange">STRONG</span>
          </motion.h2>
        </div>

        {/* 3D Carousel Concept View */}
        <div 
          className="relative flex justify-center items-center h-[500px]" 
          style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
        >
          {photos.map((src, i) => {
            const offset = i - 2;
            const absoluteOffset = Math.abs(offset);
            const zIndex = 5 - absoluteOffset;
            
            // Tighter overlapping
            const translateX = offset * 180; 
            // Aggressive 3D tilt like the reference
            const rotateY = offset * -35;
            // Push side items back
            const translateZ = -absoluteOffset * 280;
            // Native scaling logic (do not use Framer's scale here to prevent collision with transform matrix)
            const scale = absoluteOffset === 0 ? 1 : 0.85;

            const isCenter = offset === 0;

            return (
              <motion.div
                key={i}
                // Only animate the entrance properties (x sliding and opacity)
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: offset * 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="absolute"
                style={{ zIndex }}
              >
                {/* The inner element locks in the static CSS 3D structure so framer doesn't overwrite it */}
                <div 
                  className={`relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden`}
                  style={{
                    width: 320,
                    height: 480,
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    filter: isCenter ? 'none' : 'grayscale(100%) brightness(0.4)',
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  <Image src={src} alt="Transformation" fill className="object-cover" sizes="320px" />
                  {isCenter && (
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[120%] pointer-events-none">
                      {/* Integrated subtle blue scanner glow */}
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[110%] w-[180%] -left-[40%] rounded-[100%] border-l border-r border-[#3b82f6]/40 mix-blend-screen shadow-[0_0_80px_rgba(59,130,246,0.3)] opacity-70 blur-[8px]"></div>
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full w-[120%] -left-[10%] backdrop-blur-[1px] bg-blue-500/5 mix-blend-overlay"></div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
