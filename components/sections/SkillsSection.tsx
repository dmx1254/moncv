"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuroraText } from "@/components/magicui/aurora-text";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { useGSAP } from "@gsap/react";

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cloud = cloudRef.current;

    if (!section || !title || !cloud) return;

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
      cloud,
      { y: 30, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Slugs des technologies que vous maîtrisez
  const slugs = [
    // Développement Web
    "typescript",
    "javascript",
    "react",
    "nextdotjs",
    "nodedotjs",
    "express",
    "html5",
    "css3",
    "sass",
    
    // Développement Mobile
    "flutter",
    "dart",
    "android",
    "react",
    
    // Intelligence Artificielle
    "python",
    "tensorflow",
    "pytorch",
    "opencv",
    "scikit-learn",
    "jupyter",
    "anaconda",
    "keras",
    // IA avancée
    "huggingface",
    "openai",
    "langchain",
    "pandas",
    "numpy",
    "spacy",
    "matplotlib",
    "seaborn",
    "xgboost",
    "lightgbm",
    "fastai",
    "transformers",
    "stablediffusion",
    "llama",
    "gptdot4",
    // IA générative
    "claude",
    "chatgpt",
    "gemini",
    "deepseek",
    // Automatisation
    "n8n",
    "zapier",
    "make",
    
    // Base de données & Cloud
    "mongodb",
    "mysql",
    "postgresql",
    "amazonaws",
    "firebase",
    "docker",
    "vercel",
    "nginx",
    
    // Outils & Méthodes
    "git",
    "github",
    "gitlab",
    "jira",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "jest",
    "cypress",
    "testinglibrary",
    "sonarqube",
    "prisma"
  ];

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      {/* Unique background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circuit board lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        
        {/* Floating tech icons */}
        <div className="absolute top-1/4 right-1/4 text-cyan-400/10 text-4xl font-mono animate-float">
          &lt;/&gt;
        </div>
        <div
          className="absolute bottom-1/4 left-1/4 text-purple-500/10 text-3xl font-mono animate-float"
          style={{ animationDelay: "2s" }}
        >
          {}
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
              compétences
            </AuroraText>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Développeur full stack passionné par l&apos;innovation
            technologique, spécialisé dans le développement web, mobile et
            l&apos;intégration d&apos;intelligence artificielle.
          </p>
        </div>

        {/* Icon Cloud Section */}
        <div
          ref={cloudRef}
          className="relative flex size-full items-center justify-center overflow-hidden mb-16"
        >
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl scale-150"></div>
            <IconCloud images={images} />
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Développement Web",
              skills: [
                "React/Next.js",
                "TypeScript",
                "Node.js/Express",
                "Tailwind CSS",
                "REST/GraphQL APIs",
              ],
              color: "from-cyan-400 to-blue-500",
            },
            {
              title: "Développement Mobile",
              skills: [
                "React Native",
                "Flutter",
                "iOS/Android",
                "Mobile UI/UX",
                "App Store/Play Store",
              ],
              color: "from-blue-400 to-purple-500",
            },
            {
              title: "Intelligence Artificielle",
              skills: [
                "OpenAI API",
                "LangChain",
                "Python/ML",
                "Automatisation IA",
                "Chatbots IA",
              ],
              color: "from-purple-400 to-pink-500",
            },
            {
              title: "Base de Données & Cloud",
              skills: ["MongoDB", "PostgreSQL", "AWS/Cloud", "Docker", "CI/CD"],
              color: "from-green-400 to-cyan-500",
            },
            {
              title: "Outils & Méthodes",
              skills: [
                "Git/GitHub",
                "Figma/Design",
                "Agile/Scrum",
                "Testing",
                "Performance",
              ],
              color: "from-orange-400 to-red-500",
            },
            {
              title: "Spécialisations",
              skills: [
                "Full Stack Dev",
                "Mobile Dev",
                "IA Integration",
                "API Development",
                "Architecture",
              ],
              color: "from-pink-400 to-purple-500",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="group relative bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <h3 className="relative z-10 text-xl font-bold text-white mb-4 text-center">
                {category.title}
              </h3>
              
              <div className="relative z-10 space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                    ></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills with unique design */}
        <div className="text-center">
          <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 overflow-hidden">
            {/* Animated scanning line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6">
              En constante évolution
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
              Je suis constamment en train d&apos;explorer les dernières
              innovations technologiques. Actuellement, je me concentre sur
              l&apos;intelligence artificielle générative, l&apos;automatisation
              avec l&apos;IA, le développement mobile cross-platform et les
              architectures cloud modernes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "OpenAI GPT",
                "Flutter",
                "Automatisation IA",
                "AWS",
                "Microservices",
                "Chatbots IA",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="group relative px-4 py-2 bg-black/50 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium hover:border-cyan-400 transition-all duration-300"
                >
                  <span className="relative z-10">{skill}</span>
                  <div className="absolute inset-0 bg-cyan-400/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
