"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FF6A6A]/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Who <span className="gradient-coral-text">We Are</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Innovating the digital landscape one project at a time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass">
              <Image
                src="/Founder/dul.jpg"
                alt="VMI Media Founder"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />

              {/* Info badge */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4">
                <h3 className="text-white font-semibold text-lg">VMI Media Team</h3>
                <p className="text-gray-400 text-sm">Founders & Creative Directors</p>
              </div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#FF6A6A]/20 rounded-2xl -z-10" />
          </div>

          {/* About Content */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="glass rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 gradient-coral rounded-full" />
                <span className="text-[#FF6A6A] font-medium">Our Story</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Visualize Media Innovation Co., Ltd.
              </h3>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  VMI Media is a creative digital agency that specializes in bringing
                  innovative ideas to life. We combine cutting-edge technology with
                  creative storytelling to deliver exceptional results for our clients.
                </p>
                <p>
                  From augmented reality experiences that captivate audiences to music
                  marketing campaigns that drive engagement, we handle every aspect of
                  digital media with passion and precision.
                </p>
                <p>
                  Our team of experts is dedicated to pushing boundaries and creating
                  digital experiences that leave lasting impressions.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold gradient-coral-text">50+</div>
                  <div className="text-gray-500 text-sm">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-coral-text">30+</div>
                  <div className="text-gray-500 text-sm">Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-coral-text">3+</div>
                  <div className="text-gray-500 text-sm">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
