"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Code, Palette, Zap, Users } from "lucide-react";
import { useGSAP } from "@gsap/react";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    const cards = cardsRef.current;

    if (!section || !title || !content || !cards) return;

    gsap.registerPlugin(ScrollTrigger);

    // Scroll-triggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(title, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(content, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(cards.children, 
      { y: 50, opacity: 0, scale: 0.8 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        ease: "back.out(1.7)",
        stagger: 0.2
      },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: Code,
      title: "Développement Full Stack",
      description: "Expert en React, Next.js, Node.js et architectures modernes"
    },
    {
      icon: Palette,
      title: "Développement Mobile",
      description: "React Native, Flutter et applications cross-platform"
    },
    {
      icon: Zap,
      title: "Intelligence Artificielle",
      description: "Intégration OpenAI, LangChain et automatisation IA"
    },
    {
      icon: Users,
      title: "Innovation & IA",
      description: "Chatbots IA, automatisation et solutions intelligentes"
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 relative"
    >
      {/* Unique background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Hexagonal grid pattern */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 clip-path-hexagon"></div>
        </div>
        
        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            À propos de{" "}
            <AuroraText
              className="text-4xl lg:text-5xl font-bold"
              colors={["#38bdf8", "#818cf8", "#c084fc"]}
              speed={1.5}
            >
              moi
            </AuroraText>
          </h2>
          
          <div ref={contentRef} className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
              
              <p className="text-lg text-gray-300 leading-relaxed p-6 bg-black/30 backdrop-blur-sm border border-cyan-400/20">
                Développeur passionné par l&apos;innovation technologique, je combine expertise full stack, 
                développement mobile et intelligence artificielle pour créer des solutions numériques avancées. 
                J&apos;intègre l&apos;IA et l&apos;automatisation dans mes projets pour transformer les idées 
                en applications intelligentes et performantes.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid with unique design */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-cyan-400/50"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-cyan-400/50"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-cyan-400/50"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-cyan-400/50"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                  {/* Glow behind icon */}
                  <div className="absolute inset-0 bg-cyan-400/30 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info with unique design */}
        <div className="mt-16 text-center">
          <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl border border-cyan-400/20">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Mon approche
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Je crois en la puissance de l&apos;intelligence artificielle pour révolutionner l&apos;expérience utilisateur. 
              Chaque projet est une opportunité d&apos;intégrer des technologies de pointe et de créer des solutions 
              intelligentes qui anticipent les besoins. Mon objectif est de développer des applications qui 
              allient performance technique, innovation IA et expérience utilisateur exceptionnelle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 