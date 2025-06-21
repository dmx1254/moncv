"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

import { FloatingParticles } from "@/components/FloatingParticles";
import { Navigation } from "@/components/Navigation";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useLoading } from "@/hooks/use-loading";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const { isLoading } = useLoading();

  useGSAP(() => {   
    // Initial page load animation
    const tl = gsap.timeline();
    
    tl.fromTo("main", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Smooth scroll behavior
    gsap.set("html, body", { scrollBehavior: "smooth" });

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Afficher l'écran de chargement si l'application est en cours de chargement
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main ref={mainRef} className="min-h-screen bg-white dark:bg-black light:bg-white relative overflow-hidden transition-colors duration-300">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/20 dark:border-cyan-400/20 light:border-cyan-600/30 rotate-45 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-purple-500/20 dark:border-purple-500/20 light:border-purple-600/30 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 dark:from-cyan-400/10 dark:to-purple-500/10 light:from-cyan-600/20 light:to-purple-600/20 rotate-12 animate-spin-slow"></div>
        
        {/* Code matrix effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-5 light:opacity-10">
          <div className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-mono text-xs leading-tight p-4">
            {Array.from({ length: 50 }, (_, i) => (
              <div key={i} className="whitespace-nowrap">
                {Array.from({ length: 100 }, () => 
                  Math.random() > 0.5 ? '1' : '0'
                ).join('')}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <FloatingParticles />
      
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
