"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslation();

  const stats = [
    { label: t.about.stats_projects, value: "100+" },
    { label: t.about.stats_clients, value: "50+" },
    { label: t.about.stats_years, value: "5+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden py-20 md:py-32 bg-[#121212]">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FF6A6A]/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.about.title_1} <span className="gradient-coral-text">{t.about.title_highlight}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-700 delay-200 ${isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
              }`}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
              <Image
                src="/Founder/dul.jpg"
                alt={t.about.founders}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-[#FF6A6A] font-medium mb-1">{t.about.founding_team}</p>
                <h3 className="text-white text-2xl font-bold">{t.about.founders}</h3>
              </div>
            </div>

            {/* Decorative blob behind */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-[#FF6A6A]/10 to-transparent blur-[60px]" />
          </div>

          {/* Content Column */}
          <div
            className={`space-y-8 transition-all duration-700 delay-400 ${isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
              }`}
          >
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-[#FF6A6A]/10 text-[#FF6A6A] text-sm font-medium mb-4">
                {t.about.story_label}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {t.about.company_name}
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  {t.about.p1}
                </p>
                <p>
                  {t.about.p2}
                </p>
                <p>
                  {t.about.p3}
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1 gradient-coral-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
