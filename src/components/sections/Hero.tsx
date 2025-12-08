"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[#121212]">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212]" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6A6A]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E84B54]/10 rounded-full blur-[100px] animate-pulse delay-1000" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }`}
        >
          {/* Badge */}


          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            We Create{" "}
            <span className="gradient-coral-text">Captivating</span>
            <br />
            Digital Experiences.
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            From immersive AR experiences to impactful music marketing campaigns,
            we bring your vision to life with innovative digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-full gradient-coral text-white font-semibold text-lg hover:opacity-90 transition-all duration-200 shadow-xl shadow-[#FF6A6A]/30 hover:shadow-[#FF6A6A]/40 hover:scale-105"
            >
              Get in Touch
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>


      </div>
    </section>
  );
}
