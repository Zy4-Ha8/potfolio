import React, { useState, useEffect } from "react";

import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-menu-container") &&
        !event.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      // Use mousedown instead of click to avoid conflicts
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="text-center z-10 px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl mb-8 transform hover:scale-105 transition-all duration-500">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#288f7e] to-cyan-400 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Frontend Developer mastering Full Stack with Supabase. Building
            complete applications from React interfaces to backend APIs with
            Express.js and Nest.js.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={"/soon"}
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-[#288f7e] hover:bg-[#2a9f8a] rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Link>
            <a
              href="https://wa.me/message/WI3JQHRNQCM7A1"
              target="_blank"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full font-semibold border border-white/30 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce"
        >
          <ChevronDown size={32} className="text-[#288f7e]" />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
