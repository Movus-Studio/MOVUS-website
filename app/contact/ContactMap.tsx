"use client";

import { useState } from "react";

const MAPS_URL =
  "https://www.google.com/maps?q=%CE%99%CE%B5%CF%81%CE%BF%CF%8D+%CE%9B%CF%8C%CF%87%CE%BF%CF%85+1,+%CE%A0%CE%AC%CF%84%CF%81%CE%B1+26331";

const EMBED_URL = MAPS_URL + "&output=embed";

export function ContactMap() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="rounded-xl overflow-hidden border border-light-gray h-[320px] bg-light-gray">
        <iframe
          title="MOVUS location on Google Maps"
          src={EMBED_URL}
          width="100%"
          height="100%"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden border border-light-gray h-[320px] bg-cream relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 24%, rgba(0,0,0,0.06) 25%, rgba(0,0,0,0.06) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.06) 75%, rgba(0,0,0,0.06) 76%, transparent 77%), linear-gradient(45deg, transparent 24%, rgba(0,0,0,0.06) 25%, rgba(0,0,0,0.06) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.06) 75%, rgba(0,0,0,0.06) 76%, transparent 77%)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative h-full flex flex-col items-center justify-center gap-4 px-6 text-center">
        <svg
          className="w-10 h-10 text-movus-orange"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p className="font-semibold text-movus-navy">Ιερού Λόχου 1, Πάτρα 26331</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="inline-flex items-center justify-center bg-movus-orange hover:bg-movus-orange-dark text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-5 py-2.5 rounded-lg transition-colors"
          >
            Φόρτωσε χάρτη
          </button>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-light-gray hover:border-movus-orange hover:text-movus-orange-text text-movus-navy text-sm font-semibold uppercase tracking-[0.05em] px-5 py-2.5 rounded-lg transition-colors"
          >
            Άνοιγμα στο Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
