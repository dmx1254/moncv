"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const projects = projectsRef.current;

    if (!section || !title || !projects) return;

    gsap.registerPlugin(ScrollTrigger);

    // Scroll-triggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      title,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    ).fromTo(
      projects.children,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.2,
      },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const projects = [
    {
      title: "Platforme de marketing par SMS",
      description:
        "Une plateforme de marketing par SMS complète avec gestion des campagnes, segmentation des contacts et analyses détaillées. Intégration de paiements sécurisés et interface utilisateur intuitive.",
      image: "/projects/axiompro.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "NodeJS",
        "Tailwind CSS",
        "MongoDB",
        "ThreeJS",
        "Tremor",
        "Redis",
        "AWS",
        "OpenAI",
      ],
      liveUrl: "https://axiomtext.com",
      githubUrl: "https://axiomtext.com",
      featured: true,
    },
    {
      title: "Application mobile Suñuy Artisan",
      description:
        "Application mobile sénégalaise permettant de trouver facilement des artisans locaux à proximité grâce à la géolocalisation. Recherche et mise en relation avec des professionnels qualifiés dans votre zone.",
      image: "/projects/mobpro.png",
      technologies: [
        "React Native",
        "Expo",
        "Node.js",
        "supabase",
        "PostgreSQL",
        "Tailwind CSS",
        "AWS",
        "OpenAI",
      ],
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.sunuyartisan.app",
      githubUrl:
        "https://play.google.com/store/apps/details?id=com.sunuyartisan.app",
      featured: true,
    },
    {
      title: "Api d'envoi d'SMS et code OTP",
      description:
        "Api d'envoi d'SMS et code OTP avec gestion des utilisateurs et des messages. Intégration de paiements sécurisés et interface utilisateur intuitive.",
      image: "/projects/apiaxiompro.png",
      technologies: [
        "Next.js",
        "NodeJS",
        "MongoDB",
        "OrangeSMS",
        "Redis",
        "AWS",
      ],
      liveUrl: "https://api.axiomtext.com/",
      githubUrl: "https://api.axiomtext.com/",
      featured: false,
    },
    {
      title: "Application web de Suñuy Artisan",
      description:
        "Application web de Suñuy Artisan avec gestion des artisans, des produits et des commandes. Intégration de paiements sécurisés et interface utilisateur intuitive.",
      image: "/projects/pmnpro.png",
      technologies: ["React", "NodeJS", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://sunuyartisan.pmn.sn/",
      githubUrl: "https://sunuyartisan.pmn.sn/",
      featured: false,
    },
    {
      title: "Senthales site E-Commerce",
      description:
        "Site E-Commerce de vente de produits alimentaires incluant légumes, fruits, riz, huile et produits pour bébé. Gestion complète des produits, commandes et utilisateurs avec paiements sécurisés et interface intuitive.",
      image: "/projects/senthpro.png",
      technologies: [
        "NextJS",
        "NodeJS",
        "MongoDB",
        "Tailwind CSS",
        "AWS",
        "Redis",
        "OrangeSMS",
      ],
      liveUrl: "https://www.senthales.com/",
      githubUrl: "https://www.senthales.com/",
      featured: false,
    },
    {
      title: "Site web de la société PMN",
      description:
        "Site web de la société PMN avec gestion des produits, des commandes et des utilisateurs avec paiements sécurisés et interface intuitive.",
      image: "/projects/pmnrepro.png",
      technologies: [
        "Reactjs",
        "NodeJS",
        "MongoDB",
        "Tailwind CSS",
        "AWS",
        "Redis",
        "OrangeSMS",
      ],
      liveUrl: "https://pmn.sn/",
      githubUrl: "https://pmn.sn/",
      featured: false,
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      {/* Unique background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating project icons */}
        <div className="absolute top-1/4 left-1/4 text-cyan-400/10 text-2xl animate-float">
          &lt;project&gt;
        </div>
        <div
          className="absolute bottom-1/4 right-1/4 text-purple-500/10 text-2xl animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          &lt;/project&gt;
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Mes{" "}
            <AuroraText
              className="text-4xl lg:text-5xl font-bold"
              colors={["#38bdf8", "#818cf8", "#c084fc"]}
              speed={1.5}
            >
              projets
            </AuroraText>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets récents, alliant créativité,
            innovation et expertise technique.
          </p>
        </div>

        {/* Featured Projects with unique design */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Projets en vedette
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

                    <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50"></div>
                    <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-cyan-400/50"></div>
                  </div>

                  <div className="relative z-10 p-6">
                    <h4 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-black/50 border border-cyan-400/30 text-cyan-400 text-xs rounded-full hover:border-cyan-400 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg overflow-hidden transition-all duration-300 text-sm font-medium"
                      >
                        <span className="relative z-10">Voir le projet</span>
                        <Eye className="relative z-10 w-4 h-4" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="group relative flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg overflow-hidden transition-all duration-300 text-sm font-medium hover:text-white"
                      >
                        <span className="relative z-10">Code source</span>
                        <Github className="relative z-10 w-4 h-4" />
                        {/* <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Projects Grid with unique design */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Tous mes projets
          </h3>
          <div
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative h-40 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                </div>

                <div className="relative z-10 p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-3 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-black/50 border border-cyan-400/30 text-cyan-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-black/50 border border-gray-500/30 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded text-xs font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 px-3 py-1.5 border border-cyan-400 text-cyan-400 rounded text-xs font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA with unique design */}
        <div className="mt-16 text-center">
          <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl border border-cyan-400/20">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Intéressé par une collaboration ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Je suis toujours ouvert à de nouveaux projets passionnants.
              N&apos;hésitez pas à me contacter pour discuter de vos idées !
            </p>
            <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105">
              <Link href="#contact" className="relative z-10">
                Discutons de votre projet
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
