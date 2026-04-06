import { useParams, Link } from "react-router-dom";
import { ArrowRight, Shield, Code, Layout, Database, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/shared/FAQSection";
import ContactForm from "@/components/shared/ContactForm";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SEO, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/seo";

const serviceData: Record<string, { title: string; subtitle: string; description: string; seoDescription: string; features: string[]; works: { title: string; tag: string; img?: string }[] }> = {
  "web-development": {
    title: "Scalable Web & Software Engineering",
    subtitle: "Architecting high-performance digital platforms for global scale",
    description: "Devorica specializes in engineering resilient, high-availability web architectures and complex software ecosystems. We leverage cutting-edge technology stacks to ensure your digital infrastructure is secure, scalable, and optimized for enterprise-level user engagement.",
    seoDescription: "Custom web development and enterprise software engineering by Devorica. We build scalable, high-performance web applications using React, Node.js, and cloud architecture. Get a free consultation.",
    features: ["Enterprise Cloud Architecture", "Custom Software Engineering", "High-Availability Systems", "API Ecosystem Design"],
    works: [
      { title: "Enterprise FinTech Platform", tag: "Engineering", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
      { title: "Scalable E-commerce Engine", tag: "Engineering", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
      { title: "LMS Architecture", tag: "Engineering", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800" },
      { title: "Blockchain Infrastructure", tag: "Engineering", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800" },
      { title: "Logistics SaaS", tag: "Engineering", img: "https://images.unsplash.com/photo-1526367764999-5f518a2f3cae?auto=format&fit=crop&q=80&w=800" },
      { title: "Retail System", tag: "Engineering", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" },
    ],
  },
  "ui-ux": {
    title: "Mobile App Development",
    subtitle: "Engineering mission-critical mobile experiences",
    description: "Our mobile engineering team develops high-performance native and cross-platform applications that deliver seamless user journeys. We focus on technical efficiency, security, and superior interface design to drive user retention and mobile business growth.",
    seoDescription: "Professional mobile app development for iOS and Android by Devorica. We build native and cross-platform apps with React Native and Flutter for startups and enterprises worldwide.",
    features: ["iOS & Android Engineering", "Cross-Platform Optimization", "Mobile Security Protocols", "Strategic UI Flow"],
    works: [
      { title: "Enterprise Mobile Portal", tag: "Mobile Engineering", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800" },
      { title: "Digital Banking Utility", tag: "Mobile Engineering", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800" },
      { title: "Healthcare Mobile Suite", tag: "Mobile Engineering", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" },
      { title: "Mobile Retail Solution", tag: "Mobile Engineering", img: "https://images.unsplash.com/photo-1523206489230-c012c6e9a996?auto=format&fit=crop&q=80&w=800" },
    ],
  },
  "crm-development": {
    title: "Website Redesign & Optimization",
    subtitle: "Transforming digital assets into high-performance revenue engines",
    description: "Devorica revitalizes legacy digital systems through strategic redesign and data-driven performance optimization. We focus on enhancing technical metrics, user accessibility, and conversion architecture to ensure your web presence drives measurable business results.",
    seoDescription: "Website redesign and performance optimization services by Devorica. We transform slow, outdated websites into fast, high-converting digital platforms with modern UI/UX and CRO.",
    features: ["Performance Refactoring", "Conversion Rate Optimization", "Institutional Branding", "Legacy System Migration"],
    works: [
      { title: "SaaS Platform Re-engineering", tag: "Transformation", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
      { title: "Corporate Portal Redesign", tag: "Transformation", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
      { title: "FinTech UI Optimization", tag: "Transformation", img: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=800" },
      { title: "Global Web Expansion", tag: "Transformation", img: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800" },
    ],
  },
  "digital-marketing": {
    title: "SEO & Growth Optimization",
    subtitle: "Data-driven strategies for global market leadership",
    description: "We implement technical SEO and outcome-focused growth methodologies to maximize your organic reach and search authority. Our growth team leverages data analytics and performance marketing to optimize acquisition costs and drive sustainable business expansion.",
    seoDescription: "Expert SEO and digital growth services by Devorica. We deliver technical SEO, performance marketing, and data-driven strategies to increase organic traffic, rankings, and conversions.",
    features: ["Technical SEO Infrastructure", "Growth Engineering", "Performance Analytics", "Market Dominance Strategy"],
    works: [
      { title: "Organic Growth Initiative", tag: "Optimization", img: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c205?auto=format&fit=crop&q=80&w=800" },
      { title: "Search Authority Campaign", tag: "Optimization", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" },
      { title: "E-commerce Growth Hack", tag: "Optimization", img: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=800" },
      { title: "Institutional Branding", tag: "Optimization", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" },
    ],
  },
  "graphic-design": {
    title: "Maintenance & Support",
    subtitle: "24/7 reliability for mission-critical infrastructure",
    description: "Devorica provides comprehensive technical oversight and proactive system maintenance to ensure 100% operational uptime. Our engineering support team manages security infrastructure, performance tuning, and continuous technical evolution to protect your digital assets.",
    seoDescription: "24/7 website maintenance and technical support from Devorica. We handle security patches, performance monitoring, uptime management, and continuous optimization for your digital infrastructure.",
    features: ["Institutional Support", "Systemic Stability", "Security Infrastructure", "Performance Tuning"],
    works: [
      { title: "Enterprise Support Hub", tag: "Sustaining", img: "https://images.unsplash.com/photo-1561070791-200115364ee2?auto=format&fit=crop&q=80&w=800" },
      { title: "Security Oversight", tag: "Sustaining", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" },
      { title: "Infrastructure Monitoring", tag: "Sustaining", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800" },
      { title: "Cloud Optimization", tag: "Sustaining", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" },
    ],
  },
};

const ServiceHeroShapes = ({ slug }: { slug: string }) => {
  const commonTransition = { duration: 10, repeat: Infinity, ease: "easeInOut" as const };

  switch (slug) {
    case "web-development": // Scalable Web & Software Engineering
      return (
        <div className="absolute inset-0 perspective-1000 overflow-hidden pointer-events-none">
          {/* Voxel 1 - Main */}
          <motion.div
            animate={{ 
              rotateY: [0, 360], 
              rotateX: [15, 30, 15], 
              y: [0, -30, 0] 
            }}
            transition={commonTransition}
            className="absolute top-[15%] left-[20%] w-40 h-40 md:w-64 md:h-64"
          >
            <div className="w-full h-full relative group">
              <div className="absolute inset-0 bg-blue-500/20 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-[0_0_80px_rgba(59,130,246,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-transparent" />
                <div className="w-full h-full flex items-center justify-center">
                  <Code className="w-1/3 h-1/3 text-white/50" />
                </div>
              </div>
              {/* Wireframe edges */}
              <div className="absolute -inset-2 border border-white/5 rounded-2xl transition-all duration-700" />
            </div>
          </motion.div>
          {/* Floating Bit particles */}
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -100, 0],
                x: [0, i % 2 === 0 ? 50 : -50, 0],
                opacity: [0, 0.4, 0]
              }}
              transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.5 }}
              className={`absolute w-4 h-4 bg-blue-400/30 blur-sm rounded-sm`}
              style={{ top: `${20 + i * 15}%`, left: `${10 + i * 20}%` }}
            />
          ))}
        </div>
      );
    case "ui-ux": // Mobile App Development
      return (
        <div className="absolute inset-0 perspective-1000 overflow-hidden pointer-events-none">
          {/* Glass Pane Stack */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                z: [i * 50, i * 50 + 20, i * 50],
                rotateX: [10, 15, 10],
                rotateY: [-10, -5, -10],
                x: [0, i * 10, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, delay: i * 0.5 }}
              className="absolute top-1/2 left-[15%] -translate-y-1/2 w-48 h-80 md:w-64 md:h-[400px]"
              style={{ opacity: 0.7 - i * 0.2 }}
            >
              <div className="w-full h-full rounded-[40px] border border-white/20 backdrop-blur-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 shadow-2xl shadow-purple-900/20 overflow-hidden">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full" />
                {i === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layout className="w-12 h-12 text-white/30" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          {/* Floating Blobs */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], y: [0, -100, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-20 right-[20%] w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"
          />
        </div>
      );
    case "crm-development": // Website Redesign & Optimization
      return (
        <div className="absolute inset-0 perspective-1000 overflow-hidden pointer-events-none">
          {/* Optimization Mesh Sphere */}
          <motion.div
            animate={{ 
              rotateY: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
            className="absolute top-[20%] left-1/2 -translate-x-1/2 w-64 h-64 md:w-[450px] md:h-[450px]"
          >
            <div className="w-full h-full rounded-full border-[1px] border-emerald-500/20 relative">
              <div className="absolute inset-0 border-[1px] border-emerald-500/10 rotate-45 rounded-full" />
              <div className="absolute inset-0 border-[1px] border-emerald-500/10 -rotate-45 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-1/2 h-1/2 bg-emerald-500/10 blur-[60px] rounded-full" 
                />
                <Database className="w-16 h-16 text-emerald-400/40" />
              </div>
            </div>
          </motion.div>
          {/* Scanning Line */}
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }}
            className="absolute left-1/2 -translate-x-1/2 w-[500px] h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent blur-sm"
          />
        </div>
      );
    case "digital-marketing": // SEO & Growth Optimization
      return (
        <div className="absolute inset-0 perspective-1000 overflow-hidden pointer-events-none">
          {/* Growth Rings */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                rotate: 360,
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" as const }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-[2px] border-orange-500/20 rounded-full"
              style={{ width: `${300 + i * 150}px`, height: `${300 + i * 150}px` }}
            />
          ))}
          {/* Central Pulse */}
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-500/20 blur-[80px] rounded-full"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <TrendingUp className="w-24 h-24 text-orange-400/50" />
          </div>
        </div>
      );
    case "graphic-design": // Maintenance & Support
      return (
        <div className="absolute inset-0 perspective-2000 overflow-hidden pointer-events-none">
          {/* Shield Core */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotateY: [0, 360]
            }}
            transition={commonTransition}
            className="absolute top-1/4 left-[15%] w-56 h-56 md:w-80 md:h-80"
          >
            <div className="w-full h-full relative">
              {/* Inner Pulsing Core */}
              <div className="absolute inset-[20%] bg-blue-600/30 blur-2xl rounded-full animate-pulse" />
              {/* Orbiting Hexagons */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div 
                  key={deg}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `rotate(${deg}deg) translateX(120px)` }}
                >
                  <div className="w-8 h-8 rounded-lg border border-white/20 bg-white/5 backdrop-blur-md transform rotate-x-45" />
                </div>
              ))}
              <div className="w-full h-full border border-white/10 rounded-full backdrop-blur-3xl bg-white/[0.02] flex items-center justify-center">
                <Shield className="w-1/4 h-1/4 text-white/50" />
              </div>
            </div>
          </motion.div>
          {/* Particle stream */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" as const }}
            className="absolute top-1/2 left-[15%] w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-full h-full border-[1px] border-white/5 rounded-full border-dashed" />
          </motion.div>
        </div>
      );
    default:
      return null;
  }
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceData[slug || ""] || serviceData["web-development"];
  const currentSlug = slug || "web-development";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${service.title} — Devorica`}
        description={service.seoDescription}
        canonical={`https://devorica.com/services/${currentSlug}`}
        jsonLd={[
          buildServiceSchema({
            name: service.title,
            description: service.seoDescription,
            url: `https://devorica.com/services/${currentSlug}`,
          }),
          buildBreadcrumbSchema([
            { name: "Home", url: "https://devorica.com" },
            { name: "Services", url: "https://devorica.com/services" },
            { name: service.title, url: `https://devorica.com/services/${currentSlug}` },
          ]),
        ]}
      />
      <Navbar />
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050505] min-h-[70vh] flex items-center">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        
        <div className="container-main relative z-10 w-full">
          <ServiceHeroShapes slug={slug || ""} />
          
          <AnimatedSection className="flex flex-col items-center relative z-20 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-[800] leading-[1.1] tracking-tight text-white mb-8 max-w-4xl">
              {service.title}
            </h1>
            <p className="text-[#A0A0A0] text-sm md:text-lg leading-[1.8] font-normal max-w-2xl mb-10 mx-auto">
              {service.description}
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="btn-secondary group gap-1.5 sm:gap-2">
                <span>Book a Strategy Call</span>
                <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Robust Back-end Section */}
      <section className="section-padding bg-[#050505] border-t border-white/5">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-[800] leading-[1.1] text-white tracking-tight mb-8">
                {service.subtitle}
              </h2>
              <p className="text-white/40 text-sm md:text-lg leading-[1.7] mb-10 max-w-xl mx-auto lg:mx-0">
                We build websites on easy-to-use CMS platforms like WordPress, Shopify, and others, enabling you to manage your content with ease and flexibility.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link to="/contact" className="btn-secondary inline-flex group mb-8 gap-1.5 sm:gap-2">
                  <span>Start Your Engagement</span>
                  <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="premium-media-frame rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-2xl">
                <img 
                  src="/assets/moments/moment4.png" 
                  alt="Team working" 
                  className="premium-media w-full h-auto"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-[#050505]">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] tracking-tight">Project Case Studies</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.works.map((work, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group cursor-pointer">
                  <div className="premium-media-frame relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 mb-6">
                    <img 
                      src={work.img} 
                      alt={work.title} 
                      className="premium-media w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div>
                    <h4 className="font-[700] text-[18px] text-white mb-1 group-hover:text-[#666666] transition-colors">{work.title}</h4>
                    <p className="text-[12px] font-[600] text-white/40 uppercase tracking-widest">{work.tag}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Experience & Feature Cards */}
      <section className="section-padding bg-[#050505] border-t border-white/5">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Large Card */}
            <AnimatedSection className="h-full">
              <div className="bg-[#0A0A0E] border border-white/5 rounded-[24px] p-8 md:p-12 h-full flex flex-col justify-between text-center lg:text-left items-center lg:items-start">
                <div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-[800] leading-[1.1] tracking-tight mb-8">Strategic UX & <br className="hidden md:block" />Conversion Engineering</h2>
                  <p className="text-white/60 text-sm md:text-lg leading-[1.7] max-w-xl mb-12">
                    We are Devorica. We architect, engineer, and optimize mission-critical digital systems for global enterprises. We promise pixel-perfect precision and high-performance outcomes.
                  </p>
                </div>
                <Link to="/contact" className="btn-secondary w-fit gap-1.5 sm:gap-2">
                  <span>Book Consultation</span>
                  <span className="mx-1.5 hidden opacity-30 sm:mx-3 sm:inline">|</span>
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Right Side Grid */}
            <div className="flex flex-col gap-6">
              {/* Global Business Support Card (Wide) */}
              <AnimatedSection delay={0.1}>
                <div className="card-big rounded-[24px] p-8 h-full flex flex-col md:flex-row items-center justify-between text-center md:text-left transition-all duration-300 hover:translate-y-[-4px]">
                  <div className="max-w-full md:max-w-[65%] mb-8 md:mb-0">
                    <div className="w-[3px] h-12 bg-white/20 mb-4 mx-auto md:mx-0 hidden md:block" />
                    <h3 className="text-xl md:text-2xl font-[700] mb-4 md:mb-2 leading-tight">Global Enterprise Infrastructure</h3>
                    <p className="text-[13px] text-white/80 leading-relaxed font-normal">
                      At Devorica, we empower legacy institutions and global enterprises with tailored technology solutions, innovative digital scaling, and expert engineering oversight.
                    </p>
                  </div>
                  <div className="relative shrink-0 flex items-center justify-center p-2 bg-white/5 rounded-full">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/4149/4149678.png" 
                      alt="Global Support" 
                      className="w-24 h-24 md:w-32 md:h-32 object-contain"
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* Bottom Row: Best IT Solutions & 24/7 Support */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatedSection delay={0.2} className="h-full">
                  <div className="card-blue rounded-[24px] p-8 h-full flex flex-col text-center items-center justify-center transition-all duration-300 hover:translate-y-[-4px]">
                    <h3 className="text-xl font-[700] mb-4">Performance Engineering</h3>
                    <div className="w-10 h-[1.5px] bg-white/40 mb-4" />
                    <p className="text-[13px] text-white/90 leading-relaxed font-normal">
                      Devorica delivers high-performance, resilient technology solutions tailored for enterprise scalability. From backend engineering to global support, we ensure seamless technology integration.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3} className="h-full">
                  <div className="bg-[#0A0A0E] border border-white/5 rounded-[24px] p-8 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:translate-y-[-4px]">
                    <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-8 h-8 text-[#666666]" />
                    </div>
                    <p className="text-3xl font-[800] text-white tracking-tight leading-none">24/7</p>
                    <p className="text-white/60 font-[600] text-[12px] mt-2 uppercase tracking-[0.2em]">Strategic Support</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServicePage;
