"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { AuroraText } from "@/components/magicui/aurora-text";
import { useGSAP } from "@gsap/react";
import { Code } from "lucide-react";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { useTheme } from "@/hooks/use-theme";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useGSAP(() => {
    const nav = navRef.current;
    const logo = logoRef.current;
    if (!nav || !logo) return;

    // Initial animation
    gsap.fromTo(nav, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Logo animation
    gsap.fromTo(logo, 
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1.2, ease: "back.out(1.7)", delay: 0.3 }
    );

    // Scroll effect
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      if (scrolled) {
        const bgColor = theme === "dark" ? "rgba(0, 0, 0, 0.95)" : "rgba(255, 255, 255, 0.95)";
        gsap.to(nav, {
          backgroundColor: bgColor,
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
          duration: 0.3
        });
      } else {
        gsap.to(nav, {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          borderBottom: "1px solid transparent",
          duration: 0.3
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Fermer le menu mobile après avoir cliqué sur un lien
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { id: "hero", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "skills", label: "Compétences" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-cyan-400/20" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div 
            ref={logoRef}
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => scrollToSection("hero")}
          >
            {/* Code icon with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative p-2 bg-white dark:bg-black border-2 border-cyan-400 rounded-lg group-hover:border-cyan-300 transition-colors duration-300">
                <Code className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            
            {/* Enhanced M logo */}
            <div className="relative">
              <div className="text-gray-900 dark:text-white relative">
                <span className="text-3xl text-cyan-400 font-bold">&#123;</span>
                <span className="text-2xl font-mono px-2 text-gray-900 dark:text-white relative z-10 bg-white dark:bg-black">M</span>
                <span className="text-3xl text-cyan-400 font-bold">&#125;</span>
              </div>
              {/* Glow effect behind M */}
              <div className="absolute inset-0 text-3xl text-cyan-400/30 blur-sm font-bold">
                <span>&#123;</span>
                <span className="px-2">M</span>
                <span>&#125;</span>
              </div>
            </div>
            
            <AuroraText
              className="text-xl font-bold"
              colors={["#38bdf8", "#818cf8", "#c084fc"]}
              speed={1.5}
            >
              SY
            </AuroraText>
          </div>

          {/* Navigation Links with unique design */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium group"
              >
                <span className="relative z-10">{item.label}</span>
                {/* Animated underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                {/* Glow effect */}
                <div className="absolute -bottom-1 left-0 w-0 h-1 bg-cyan-400/20 blur-sm transition-all duration-300 group-hover:w-full"></div>
              </button>
            ))}
          </div>

          {/* Theme Switcher and Mobile menu */}
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            
            {/* Mobile menu with Sheet */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="relative p-2 border border-cyan-400/30 rounded-lg hover:border-cyan-400 transition-colors duration-300">
                    <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                      <span className="w-4 h-0.5 bg-cyan-400 transition-all duration-300"></span>
                      <span className="w-4 h-0.5 bg-cyan-400 transition-all duration-300"></span>
                      <span className="w-4 h-0.5 bg-cyan-400 transition-all duration-300"></span>
                    </div>
                  </button>
                </SheetTrigger>
                
                <SheetContent 
                  side="right" 
                  className="w-[85vw] max-w-[300px] bg-black/95 backdrop-blur-xl border-l border-cyan-400/20 p-0"
                >
                  <div className="flex flex-col h-full p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-md opacity-50"></div>
                          <div className="relative p-2 bg-black border-2 border-cyan-400 rounded-lg">
                            <Code className="w-5 h-5 text-cyan-400" />
                          </div>
                        </div>
                        <AuroraText
                          className="text-lg font-bold"
                          colors={["#38bdf8", "#818cf8", "#c084fc"]}
                          speed={1.5}
                        >
                          Menu
                        </AuroraText>
                      </div>
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex-1 overflow-y-auto">
                      <div className="space-y-2">
                        {navigationItems.map((item, index) => (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="w-full p-4 text-left border border-cyan-400/20 rounded-lg hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300 group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                                {item.label}
                              </span>
                              <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            {/* Animated underline */}
                            <div className="mt-2 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 w-0 group-hover:w-full transition-all duration-300"></div>
                          </button>
                        ))}
                      </div>
                    </nav>

                    {/* Footer */}
                    <div className="mt-6 pt-6 border-t border-cyan-400/20">
                      <div className="text-center">
                        <p className="text-gray-400 text-sm">
                          Développeur Full-Stack & Mobile
                        </p>
                        <p className="text-cyan-400 text-xs mt-1">
                          Spécialisé en React, Next.js, Node.js
                        </p>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}; 