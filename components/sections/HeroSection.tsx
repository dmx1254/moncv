"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    const social = socialRef.current;

    if (!section || !image || !text || !social) return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero animation timeline
    const tl = gsap.timeline();

    tl.fromTo(
      image,
      { scale: 0, rotation: -180, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
      }
    )
      .fromTo(
        text,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        social,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );

    // Scroll down indicator animation
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 1.5,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      {/* Unique background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circuit board pattern */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 opacity-10">
          <div className="w-full h-full border border-cyan-400/30 relative">
            <div className="absolute top-2 left-2 w-4 h-4 bg-cyan-400/20"></div>
            <div className="absolute top-2 right-2 w-4 h-4 bg-cyan-400/20"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 bg-cyan-400/20"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-cyan-400/20"></div>
            <div className="absolute top-1/2 left-0 w-2 h-2 bg-cyan-400/30 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-2 h-2 bg-cyan-400/30 transform -translate-y-1/2"></div>
          </div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-cyan-400/20 rounded-full blur-sm animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-purple-500/20 rounded-full blur-sm animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Enhanced Image Section */}
          <div ref={imageRef} className="relative">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-full blur-2xl scale-110"></div>

              <Image
                src="/msy.jpeg"
                alt="Mamadou SY"
                width={300}
                height={300}
                className="relative z-10 object-cover w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-full border-4 border-cyan-400 shadow-2xl"
              />

              {/* Animated border with code effect */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_200%] animate-spin-slow opacity-30"></div>

              {/* Code overlay */}
              <div className="absolute inset-0 rounded-full bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-cyan-400 font-mono text-xs text-center">
                  <div>&lt;dev&gt;</div>
                  <div>Mamadou</div>
                  <div>&lt;/dev&gt;</div>
                </div>
              </div>
            </div>

            {/* Floating elements around image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border border-cyan-400/50 rotate-45 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full animate-float"></div>
          </div>

          {/* Enhanced Text Section */}
          <div ref={textRef} className="text-center lg:text-left max-w-2xl">
            {/* Unique greeting */}
            <div className="mb-4">
              <span className="text-cyan-400 font-mono text-sm">
                console.log(
              </span>
              <span className="text-white font-mono text-sm">
                &quot;Hello World&quot;
              </span>
              <span className="text-cyan-400 font-mono text-sm">);</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Bonjour, je suis{" "}
              <AuroraText
                className="text-4xl lg:text-6xl font-bold"
                colors={["#38bdf8", "#818cf8", "#c084fc", "#f472b6"]}
                speed={2}
              >
                Mamadou SY
              </AuroraText>
            </h1>

            <h2 className="text-xl lg:text-2xl text-gray-300 mb-6 font-medium">
              <span className="text-cyan-400">&lt;</span>
              Développeur Full Stack & Mobile
              <span className="text-cyan-400">/&gt;</span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Je développe des{" "}
              <AuroraText
                className="text-lg font-semibold"
                colors={["#38bdf8", "#818cf8"]}
                speed={1.5}
              >
                applications web et mobiles
              </AuroraText>{" "}
              innovantes avec intégration d&apos;intelligence artificielle, en
              me concentrant sur l&apos;expérience utilisateur et
              l&apos;automatisation.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Link href="#projects" className="relative z-10">
                  Voir mes projets
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </button>
              <button className="group relative px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105">
                <Link href="/cv/cv_mamadousy.pdf" className="relative z-10">
                  Télécharger CV
                </Link>
                {/* <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Social Links */}
        <div
          ref={socialRef}
          className="flex justify-center lg:justify-start gap-6 mt-12"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/dmx1254",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://sn.linkedin.com/in/mamadou-sy-8a02251a6",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:mamadousy1254@gmail.com",
              label: "Email",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="group relative p-3 bg-black/50 backdrop-blur-sm rounded-full border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              aria-label={social.label}
            >
              <div className="absolute inset-0 bg-cyan-400/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
              <social.icon className="relative z-10 w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="scroll-indicator group p-3 text-cyan-400/60 hover:text-cyan-400 transition-colors duration-300 border border-cyan-400/30 rounded-full hover:border-cyan-400"
            aria-label="Scroll to next section"
          >
            <div className="absolute inset-0 bg-cyan-400/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
            <ChevronDown className="relative z-10 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
