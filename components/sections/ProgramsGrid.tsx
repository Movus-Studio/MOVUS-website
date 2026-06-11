"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { programs } from "@/content/programs";
import { ProgramCard as ListingCard } from "@/components/programs/ProgramCard";
import homeContent from "@/content/home/home.json";

const intro = homeContent.programs;

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SpinningBadge = ({ dark }: { dark?: boolean }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    className={`w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center ${
      dark ? "bg-movus-white/10" : "bg-movus-black/30"
    } backdrop-blur-md`}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <path
          id="circlePath"
          d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        />
      </defs>
      <text fill="white" fontSize="10.5" fontWeight="700" letterSpacing="4">
        <textPath href="#circlePath">
          PROGRESS · PERFORM · BUILD · TRAIN ·
        </textPath>
      </text>
      <circle cx="50" cy="50" r="12" fill="white" />
      <path
        d="M48 52L52 48M52 48H48.5M52 48V51.5"
        stroke={dark ? "#0A0A0A" : "#FF6B35"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </motion.div>
);

export function ProgramsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current;
        const pin = pinRef.current;
        if (!track || !pin) return;

        // Track distance to bring last card to the right edge (current behavior),
        // plus an exit travel so cards keep sliding off the left as the user
        // continues scrolling toward the next section.
        const getTrackDistance = () => track.scrollWidth - window.innerWidth + 96;
        const getExitTravel = () => window.innerWidth;
        const getTotalDistance = () => getTrackDistance() + getExitTravel();

        const tween = gsap.to(track, {
          x: () => -getTotalDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${getTotalDistance()}`,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-movus-white text-movus-black"
      id="programs"
    >
      {/* Header — Service header spine, padding 200/0 */}
      <div className="spine spine-flush-bottom !gap-10">
        <p className="overline">{intro.eyebrow}</p>
        <h2 className="heading-section text-movus-black leading-[0.92]">
          <span className="block">{intro.headlineLine1}</span>
          <span className="block text-movus-orange">{intro.headlineLine2}</span>
        </h2>
        <div
          className="max-w-2xl space-y-4 text-medium-gray leading-[1.7]"
          style={{ fontSize: "var(--text-body-m)" }}
        >
          <p className="text-movus-black font-semibold">
            {intro.intro1}
          </p>
          <p>
            {intro.intro2}
          </p>
          <p>
            {intro.intro3}
          </p>
        </div>
      </div>

      {/* Body — mobile horizontal snap-scroll carousel, full bleed */}
      <div className="lg:hidden pt-[var(--spine-gap)] pb-[var(--spine-pad)]">
        <div className="no-scrollbar flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory pl-[6%] pr-[6%] scroll-pl-[6%] [scrollbar-width:none] [overscroll-behavior-x:contain] [-webkit-overflow-scrolling:touch]">
          {programs.map((program) => (
            <div
              key={program.slug}
              className="flex-shrink-0 w-[88%] max-w-[460px] snap-start"
            >
              <ListingCard program={program} />
            </div>
          ))}
        </div>
      </div>

      {/* Body — desktop scroll-pinned horizontal track (full bleed past spine) */}
      <div ref={pinRef} className="hidden lg:block h-screen overflow-hidden mt-[var(--spine-gap)]">
        <div
          ref={trackRef}
          className="h-screen flex items-center gap-8 pl-12 pr-[20vw] will-change-transform"
        >
          {programs.map((program, i) => {
            const dark = i % 2 === 1;
            return (
              <div key={program.slug} className="flex-shrink-0 w-[78vw] max-w-[1000px]">
                <ProgramCard program={program} tags={program.tags ?? []} dark={dark} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  program,
  tags,
  dark,
}: {
  program: (typeof programs)[number];
  tags: string[];
  dark: boolean;
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeX = useMotionValue(0);
  const badgeY = useMotionValue(0);
  const springX = useSpring(badgeX, { damping: 28, stiffness: 220, mass: 0.6 });
  const springY = useSpring(badgeY, { damping: 28, stiffness: 220, mass: 0.6 });

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const resetToCorner = () => {
      const rect = el.getBoundingClientRect();
      badgeX.set(rect.width - 72);
      badgeY.set(rect.height - 72);
    };

    resetToCorner();

    const ro = new ResizeObserver(resetToCorner);
    ro.observe(el);
    return () => ro.disconnect();
  }, [badgeX, badgeY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = imageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    badgeX.set(e.clientX - rect.left);
    badgeY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    const el = imageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    badgeX.set(rect.width - 72);
    badgeY.set(rect.height - 72);
  };

  const bgClass = dark ? "bg-movus-black" : "bg-movus-orange";
  const bodyColor = dark ? "text-movus-white/70" : "text-movus-white/90";
  const labelColor = dark ? "text-movus-white/60" : "text-movus-white/80";
  const tagClass = dark
    ? "border-white/15 bg-white/5 text-movus-white/80"
    : "border-white/25 bg-black/10 text-movus-white";

  return (
    <article
      className={`flex flex-col lg:flex-row overflow-hidden rounded-3xl ${bgClass} shadow-[0_30px_60px_-25px_rgba(0,0,0,0.45)] relative lg:h-[560px]`}
    >
      {/* Text */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-14 flex flex-col justify-between lg:justify-center min-h-[540px] lg:min-h-0 lg:h-full gap-6 lg:gap-0">
        <h3
          className="mb-6 text-movus-white uppercase leading-[0.95] tracking-tight break-words"
          style={{
            fontFamily: "var(--font-display), Impact, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.625rem, 2.4vw + 0.25rem, 2.5rem)",
            letterSpacing: "-0.01em",
          }}
        >
          {program.title}
        </h3>
        <p
          className={`mb-10 max-w-md leading-relaxed ${bodyColor}`}
          style={{ fontSize: "var(--text-body)" }}
        >
          {program.shortDescription}
        </p>

        <div className="space-y-3 mb-10">
          <div className="flex items-center gap-3 text-base md:text-lg">
            <span className={`font-bold ${labelColor}`}>Level :</span>
            <span className="text-movus-white">Όλα τα επίπεδα</span>
          </div>
          {program.duration && (
            <div className="flex items-center gap-3 text-base md:text-lg">
              <span className={`font-bold ${labelColor}`}>Duration :</span>
              <span className="text-movus-white">{program.duration}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2.5 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-3.5 py-1.5 border rounded-full text-xs md:text-sm font-semibold tracking-wide ${tagClass}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image */}
      <div
        ref={imageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full lg:w-1/2 min-h-[320px] lg:min-h-0 lg:h-full overflow-hidden"
      >
        <Image
          src={program.image}
          alt={program.imageAlt}
          fill
          className="object-cover"
          style={program.imagePosition ? { objectPosition: program.imagePosition } : undefined}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute top-0 left-0 pointer-events-none"
        >
          <Link
            href={`/programs/${program.slug}`}
            aria-label={program.title}
            className="pointer-events-auto block -translate-x-1/2 -translate-y-1/2"
          >
            <SpinningBadge dark={dark} />
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
