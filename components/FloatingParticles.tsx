"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "@/hooks/use-theme";

export const FloatingParticles = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useGSAP(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    // Create different types of particles
    const particleCount = 30;
    const particlesArray: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      const particleType = Math.random();
      
      if (particleType < 0.3) {
        // Code symbols
        const textColor = theme === "dark" ? "text-cyan-400/20" : "text-cyan-600/30";
        particle.className = `absolute ${textColor} font-mono text-xs`;
        particle.textContent = ['{', '}', '<', '>', '/', ';', '=', '+', '*', '#'][Math.floor(Math.random() * 10)];
      } else if (particleType < 0.6) {
        // Geometric shapes
        const gradientClass = theme === "dark" 
          ? "bg-gradient-to-r from-cyan-400/30 to-purple-500/30" 
          : "bg-gradient-to-r from-cyan-600/40 to-purple-600/40";
        particle.className = `absolute w-1 h-1 ${gradientClass}`;
        particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
        if (Math.random() > 0.5) {
          particle.style.transform = 'rotate(45deg)';
        }
      } else {
        // Binary digits
        const textColor = theme === "dark" ? "text-cyan-400/15" : "text-cyan-600/25";
        particle.className = `absolute ${textColor} font-mono text-xs`;
        particle.textContent = Math.random() > 0.5 ? '1' : '0';
      }
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      particles.appendChild(particle);
      particlesArray.push(particle);
    }

    // Animate particles with different patterns
    particlesArray.forEach((particle, index) => {
      const duration = 8 + Math.random() * 15;
      const delay = Math.random() * 3;
      
      // Different animation patterns
      const pattern = index % 3;
      
      if (pattern === 0) {
        // Floating up with rotation
        gsap.to(particle, {
          y: -100 - Math.random() * 200,
          rotation: 360,
          opacity: 0,
          duration: duration,
          delay: delay,
          ease: "none",
          repeat: -1,
          yoyo: false
        });
      } else if (pattern === 1) {
        // Zigzag movement
        gsap.to(particle, {
          x: Math.random() * 100 - 50,
          y: -50 - Math.random() * 100,
          opacity: 0,
          duration: duration,
          delay: delay,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: false
        });
      } else {
        // Circular movement
        gsap.to(particle, {
          x: Math.cos(index) * 50,
          y: Math.sin(index) * 50 - 100,
          opacity: 0,
          duration: duration,
          delay: delay,
          ease: "power1.out",
          repeat: -1,
          yoyo: false
        });
      }

      // Fade in/out effect
      gsap.to(particle, {
        opacity: Math.random() * 0.4 + 0.1,
        duration: 2 + Math.random() * 4,
        delay: delay,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });
    });

    return () => {
      particlesArray.forEach(particle => particle.remove());
    };
  }, [theme]);

  return (
    <div 
      ref={particlesRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
}; 