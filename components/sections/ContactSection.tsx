"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { toast } from "sonner";

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",    
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  useGSAP(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const form = formRef.current;
    const info = infoRef.current;

    if (!section || !title || !form || !info) return;

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
    .fromTo(info, 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(form, 
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLoading) return;
    
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Votre message a été envoyé avec succès !', {
          style: {
            backgroundColor: '#0f0f23',
            color: '#22c55e',
            border: '1px solid #22c55e',
            boxShadow: '0 10px 30px rgba(34, 197, 94, 0.1)'
          }	
        });
        
        // Reset form
        setFormData({
          fullname: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Une erreur est survenue lors de l\'envoi du message.'
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur de connexion est survenue. Veuillez réessayer.'
      });
      toast.error('Une erreur de connexion est survenue. Veuillez réessayer.', {
        style: {
          backgroundColor: '#0f0f23',
          color: '#ef4444',
          border: '1px solid #ef4444',
          boxShadow: '0 10px 30px rgba(239, 68, 68, 0.1)'
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mamadousy1254@gmail.com",
      href: "mailto:mamadousy1254@gmail.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+221 77 841 75 84",
      href: "tel:+221778417584"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Dakar, Sénégal",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/dmx1254", label: "GitHub" },
    { icon: Linkedin, href: "https://sn.linkedin.com/in/mamadou-sy-8a02251a6", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/mamadousyy", label: "Twitter" }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 relative"
    >
      {/* Unique background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circuit board pattern */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10">
          <div className="w-full h-full border border-cyan-400/30 relative">
            <div className="absolute top-1 left-1 w-2 h-2 bg-cyan-400/50"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-400/50"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-cyan-400/50"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 bg-cyan-400/50"></div>
          </div>
        </div>
        
        {/* Floating contact icons */}
        <div className="absolute top-1/3 right-1/4 text-cyan-400/10 text-3xl animate-float">
          @
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-purple-500/10 text-2xl animate-float" style={{animationDelay: '1s'}}>
          &lt;/&gt;
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Contactez{" "}
            <AuroraText
              className="text-4xl lg:text-5xl font-bold"
              colors={["#38bdf8", "#818cf8", "#c084fc"]}
              speed={1.5}
            >
              moi
            </AuroraText>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Prêt à démarrer votre projet ? N&apos;hésitez pas à me contacter pour discuter de vos idées et voir comment je peux vous aider.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information with unique design */}
          <div ref={infoRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Parlons de votre projet
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Je suis toujours intéressé par de nouveaux défis et opportunités. 
                Que vous ayez une question, une proposition de projet ou simplement envie de dire bonjour, 
                n&apos;hésitez pas à me contacter !
              </p>
            </div>

            {/* Contact Details with unique design */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group relative flex items-center gap-4 p-4 bg-black/50 backdrop-blur-sm rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-5 h-5 text-white" />
                    {/* Glow behind icon */}
                    <div className="absolute inset-0 bg-cyan-400/30 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links with unique design */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                Suivez-moi
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative p-3 bg-black/50 backdrop-blur-sm rounded-full border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 overflow-hidden"
                    aria-label={social.label}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-cyan-400/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                    <social.icon className="relative z-10 w-5 h-5 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form with unique design */}
          <div ref={formRef} className="relative bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/20 overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-400/50"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-cyan-400/50"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-cyan-400/50"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-cyan-400/50"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Status Message */}
              {submitStatus.type && (
                <div className={`p-4 rounded-lg border ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                    : 'bg-red-500/10 border-red-500/30 text-red-400'
                }`}>
                  <div className="flex items-center gap-2">
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullname" className="block text-white font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full cursor-pointer flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="relative z-10">
                  {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
                </span>
                {isLoading ? (
                  <div className="relative z-10 w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <Send className="relative z-10 w-5 h-5" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Footer with unique design */}
        <div className="mt-20 text-center">
          <div className="relative border-t border-cyan-400/20 pt-8">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Mamadou SY. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 