"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Categories based on folder structure
const categories = ["All", "AR", "Music Marketing", "Event Organize", "Website Creation"];

const portfolioItems = [
  // AR Items
  {
    id: "ar-1",
    title: "AR Experience 01",
    category: "AR",
    description: "Immersive AR Brand Activation",
    src: "/AR/video_01.mp4",
    type: "video",
  },
  {
    id: "ar-2",
    title: "AR Experience 02",
    category: "AR",
    description: "Interactive Social Media Filter",
    src: "/AR/video_02.mp4",
    type: "video",
  },
  {
    id: "ar-3",
    title: "AR Experience 03",
    category: "AR",
    description: "Product Visualization",
    src: "/AR/video_03.mp4",
    type: "video",
  },
  {
    id: "ar-4",
    title: "AR Experience 04",
    category: "AR",
    description: "Creative AR Campaign",
    src: "/AR/video_04.mp4",
    type: "video",
  },

  // Music Marketing Items
  {
    id: "music-1",
    title: "Music Campaign 01",
    category: "Music Marketing",
    description: "Viral Music Video Promotion",
    src: "/Music_Marketing/video_01.mp4",
    type: "video",
  },
  {
    id: "music-2",
    title: "Music Campaign 02",
    category: "Music Marketing",
    description: "Artist Branding Strategy",
    src: "/Music_Marketing/video_02.mp4",
    type: "video",
  },
  {
    id: "music-3",
    title: "Music Campaign 03",
    category: "Music Marketing",
    description: "Album Launch Event",
    src: "/Music_Marketing/video_03.mp4",
    type: "video",
  },
  {
    id: "music-4",
    title: "Music Campaign 04",
    category: "Music Marketing",
    description: "Digital Streaming Campaign",
    src: "/Music_Marketing/video_04.mp4",
    type: "video",
  },
  {
    id: "music-5",
    title: "Music Campaign 05",
    category: "Music Marketing",
    description: "Fan Engagement Activity",
    src: "/Music_Marketing/video_05.mp4",
    type: "video",
  },
  {
    id: "music-6",
    title: "Music Campaign 06",
    category: "Music Marketing",
    description: "Cross-platform Promotion",
    src: "/Music_Marketing/video_06.mp4",
    type: "video",
  },
  {
    id: "music-7",
    title: "Music Campaign 07",
    category: "Music Marketing",
    description: "Integrated Marketing Strategy",
    src: "/Music_Marketing/video_07.mp4",
    type: "video",
  },

  // Event Organize Items
  {
    id: "event-1",
    title: "Event Job 01",
    category: "Event Organize",
    description: "Corporate Seminar & Workshop",
    src: "/Event_Organize/Job_01/image_01.jpg",
    type: "image",
  },
  {
    id: "event-2",
    title: "Event Job 02",
    category: "Event Organize",
    description: "Exclusive Product Launch",
    src: "/Event_Organize/Job_02/image_01.jpg",
    type: "image",
  },
];

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  // Video refs to handle hover play
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

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

  const handleMouseEnter = (id: string) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id]?.play().catch(e => console.log("Play failed", e));
    }
  };

  const handleMouseLeave = (id: string) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id]?.pause();
      if (videoRefs.current[id]) videoRefs.current[id]!.currentTime = 0;
    }
  };

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
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
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
              className={`group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onMouseEnter={() => item.type === 'video' && handleMouseEnter(item.id)}
              onMouseLeave={() => item.type === 'video' && handleMouseLeave(item.id)}
            >
              {/* Media Content */}
              <div className="absolute inset-0 bg-[#1a1a1a]">
                {item.type === 'video' ? (
                  <video
                    ref={el => { videoRefs.current[item.id] = el }}
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
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
          className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
