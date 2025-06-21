"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

export const LoadingScreen = () => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loading = loadingRef.current;
    const text = textRef.current;
    const progress = progressRef.current;
    
    if (!loading || !text || !progress) return;

    // Timeline de chargement
    const tl = gsap.timeline({
      onComplete: () => {
        // Masquer l'écran de chargement après l'animation
        gsap.to(loading, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => setIsLoading(false)
        });
      }
    });

    // Animation du texte "MAMADOU SY" avec effet typewriter
    tl.fromTo(text, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.8
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)"
      }
    )
    .to(text, {
      duration: 0.5,
      ease: "power2.inOut"
    })
    .to(text, {
      duration: 2,
      ease: "power2.inOut"
    })
    .to(text, {
      y: -50,
      opacity: 0,
      scale: 1.2,
      duration: 0.8,
      ease: "power2.in"
    });

    // Animation de la barre de progression
    gsap.to(progress, {
      width: "100%",
      duration: 2.5,
      ease: "power2.inOut"
    });

    // Animation des particules de chargement
    const particles: HTMLDivElement[] = [];
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute w-1 h-1 bg-cyan-400 rounded-full";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      loading.appendChild(particle);
      particles.push(particle);

      gsap.to(particle, {
        x: Math.random() * 300 - 150,
        y: Math.random() * 300 - 150,
        opacity: 0,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 1.5,
        ease: "power2.out",
        repeat: -1
      });
    }

    // Animation des éléments de bordure
    const borderElements: HTMLDivElement[] = [];
    for (let i = 0; i < 4; i++) {
      const border = document.createElement("div");
      border.className = "absolute bg-gradient-to-r from-cyan-400 to-purple-500";
      
      if (i === 0) { // Top
        border.style.top = "0";
        border.style.left = "0";
        border.style.width = "100%";
        border.style.height = "2px";
        border.style.transform = "scaleX(0)";
        border.style.transformOrigin = "left";
      } else if (i === 1) { // Right
        border.style.top = "0";
        border.style.right = "0";
        border.style.width = "2px";
        border.style.height = "100%";
        border.style.transform = "scaleY(0)";
        border.style.transformOrigin = "top";
      } else if (i === 2) { // Bottom
        border.style.bottom = "0";
        border.style.left = "0";
        border.style.width = "100%";
        border.style.height = "2px";
        border.style.transform = "scaleX(0)";
        border.style.transformOrigin = "right";
      } else { // Left
        border.style.top = "0";
        border.style.left = "0";
        border.style.width = "2px";
        border.style.height = "100%";
        border.style.transform = "scaleY(0)";
        border.style.transformOrigin = "bottom";
      }
      
      loading.appendChild(border);
      borderElements.push(border);

      gsap.to(border, {
        scale: 1,
        duration: 1.5,
        delay: i * 0.2,
        ease: "power2.out"
      });
    }

    return () => {
      particles.forEach(particle => particle.remove());
      borderElements.forEach(border => border.remove());
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-[9999] bg-black dark:bg-black light:bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Fond avec effet de grille */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-cyan-400/10 to-purple-500/10"></div>
      </div>

      {/* Conteneur principal */}
      <div className="relative z-10 text-center">
        {/* Nom principal */}
        <div 
          ref={textRef}
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400"
        >
          MAMADOU SY
        </div>

        {/* Sous-titre */}
        <div className="mt-4 text-lg md:text-xl text-gray-400 dark:text-gray-500 light:text-gray-600 font-mono">
          Développeur Full Stack
        </div>

        {/* Barre de progression */}
        <div className="mt-8 w-full h-1 bg-gray-800 dark:bg-gray-700 light:bg-gray-300 rounded-full overflow-hidden">
          <div 
            ref={progressRef}
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full w-0"
          ></div>
        </div>

        {/* Indicateur de chargement */}
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 light:text-gray-500">
          Chargement...
        </div>
      </div>
    </div>
  );
}; 