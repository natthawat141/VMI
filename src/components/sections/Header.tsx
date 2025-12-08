"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslation();

  const navItems = [
    { label: t.nav.solutions, href: "#services" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="VMI Media"
                  width={44}
                  height={44}
                  className="w-9 h-9 md:w-11 md:h-11 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-[#FF6A6A]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-bold text-lg md:text-xl text-white tracking-tight">
                VMI <span className="bg-gradient-to-r from-[#FF6A6A] to-[#FF8E8E] bg-clip-text text-transparent">Media</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-1.5 border border-white/10">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium rounded-full hover:bg-white/10"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              {/* Language Switcher */}
              <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
                <button
                  onClick={() => language !== "th" && toggleLanguage()}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${language === "th"
                      ? "bg-gradient-to-r from-[#FF6A6A] to-[#E84B54] text-white shadow-md"
                      : "text-gray-400 hover:text-white"
                    }`}
                >
                  TH
                </button>
                <button
                  onClick={() => language !== "en" && toggleLanguage()}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${language === "en"
                      ? "bg-gradient-to-r from-[#FF6A6A] to-[#E84B54] text-white shadow-md"
                      : "text-gray-400 hover:text-white"
                    }`}
                >
                  EN
                </button>
              </div>

              {/* CTA Button */}
              <Link
                href="#contact"
                className="relative overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF6A6A] to-[#E84B54] text-white font-semibold text-sm shadow-lg shadow-[#FF6A6A]/30 hover:shadow-[#FF6A6A]/50 transition-all duration-300 hover:scale-105 group"
              >
                <span className="relative z-10">{t.nav.touch}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E84B54] to-[#FF6A6A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transform transition-all duration-300 origin-left ${isMobileMenuOpen ? "rotate-45 translate-x-px" : ""
                    }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 translate-x-2" : ""
                    }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transform transition-all duration-300 origin-left ${isMobileMenuOpen ? "-rotate-45 translate-x-px" : ""
                    }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-white/10 transform transition-transform duration-500 ease-out lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-10">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="VMI Media"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="font-bold text-lg text-white">
                VMI <span className="bg-gradient-to-r from-[#FF6A6A] to-[#FF8E8E] bg-clip-text text-transparent">Media</span>
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li
                  key={item.href}
                  className={`transform transition-all duration-500 ${isMobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                    }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${index * 75 + 100}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-4 px-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <svg
                      className="w-5 h-5 text-gray-600 group-hover:text-[#FF6A6A] transform group-hover:translate-x-1 transition-all duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div
            className={`space-y-4 pt-6 border-t border-white/10 transform transition-all duration-500 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            style={{ transitionDelay: isMobileMenuOpen ? "400ms" : "0ms" }}
          >
            {/* Language Switcher */}
            <div className="flex items-center justify-center gap-2 bg-white/5 rounded-full p-1.5 border border-white/10">
              <button
                onClick={() => { language !== "th" && toggleLanguage(); }}
                className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${language === "th"
                    ? "bg-gradient-to-r from-[#FF6A6A] to-[#E84B54] text-white shadow-md"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                ไทย
              </button>
              <button
                onClick={() => { language !== "en" && toggleLanguage(); }}
                className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${language === "en"
                    ? "bg-gradient-to-r from-[#FF6A6A] to-[#E84B54] text-white shadow-md"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                English
              </button>
            </div>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="block w-full text-center py-4 rounded-full bg-gradient-to-r from-[#FF6A6A] to-[#E84B54] text-white font-semibold text-base shadow-lg shadow-[#FF6A6A]/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.touch}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
