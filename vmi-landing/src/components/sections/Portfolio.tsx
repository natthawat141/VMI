"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const categories = ["All", "AR", "Music", "Events", "Web"];

const portfolioItems = [
  {
    id: 1,
    title: "AR Filter Campaign",
    category: "AR",
    description: "Interactive AR filter for social media engagement",
    image: "/images/portfolio/ar-1.jpg",
    type: "video",
  },
  {
    id: 2,
    title: "AR Brand Experience",
    category: "AR",
    description: "Immersive brand activation using augmented reality",
    image: "/images/portfolio/ar-2.jpg",
    type: "video",
  },
  {
    id: 3,
    title: "Music Video Promotion",
    category: "Music",
    description: "Viral marketing campaign for independent artist",
    image: "/images/portfolio/music-1.jpg",
    type: "video",
  },
  {
    id: 4,
    title: "Album Launch Campaign",
    category: "Music",
    description: "Strategic release campaign for new album",
    image: "/images/portfolio/music-2.jpg",
    type: "video",
  },
  {
    id: 5,
    title: "Corporate Event",
    category: "Events",
    description: "Full-scale corporate event management",
    image: "/images/portfolio/event-1.jpg",
    type: "image",
  },
  {
    id: 6,
    title: "Product Launch Event",
    category: "Events",
    description: "Exclusive product launch experience",
    image: "/images/portfolio/event-2.jpg",
    type: "image",
  },
  {
    id: 7,
    title: "E-commerce Website",
    category: "Web",
    description: "Modern e-commerce platform development",
    image: "/images/portfolio/web-1.jpg",
    type: "image",
  },
  {
    id: 8,
    title: "Corporate Website",
    category: "Web",
    description: "Professional corporate web presence",
    image: "/images/portfolio/web-2.jpg",
    type: "image",
  },
];

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-[#0f0f0f]"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#FF6A6A]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#E84B54]/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-coral-text">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects and creative works
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "gradient-coral text-white shadow-lg shadow-[#FF6A6A]/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              {/* Placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#222]">
                {/* Icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  {item.type === "video" ? (
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[#FF6A6A] text-sm font-medium mb-2">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {item.description}
                </p>

                {/* View button */}
                <button className="mt-4 inline-flex items-center text-white text-sm font-medium group/btn">
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform"
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
                </button>
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#FF6A6A]/30 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="inline-flex items-center px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-300">
            View All Projects
            <svg
              className="w-5 h-5 ml-2"
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
          </button>
        </div>
      </div>
    </section>
  );
}
