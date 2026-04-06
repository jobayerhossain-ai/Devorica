import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/shared/FAQSection";
import ContactForm from "@/components/shared/ContactForm";
import AnimatedSection from "@/components/shared/AnimatedSection";
import OptimizedImage from "@/components/shared/OptimizedImage";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SEO, organizationSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { aboutImages, teamHeadshots, momentImages } from "@/lib/images";

const teamMembers = [
  { name: "Azmain Hossain", role: "CEO & Founder" },
  { name: "Abid Hossain", role: "Co-Founder" },
  { name: "Safayet Ahmad", role: "CMO" },
  { name: "Farzan Alvee", role: "CTO" },
  { name: "Mamun Riyad", role: "COO" },
  { name: "Tanvir Hasan", role: "Lead Web Developer" },
  { name: "Sajid Abdullah", role: "Full Stack Developer" },
  { name: "Mohammad Atiq Ullah", role: "Front-end Developer" },
  { name: "Hasan Ali", role: "Back-end Developer" },
  { name: "Rakib Hossen", role: "Front-end Developer" },
  { name: "Junayed Hossain", role: "Server Specialist" },
  { name: "Sohailul Alam", role: "Digital Marketing Specialist" },
  { name: "Shahriar Hossain", role: "Visualizer" },
  { name: "Siyam Abdullah", role: "UI/UX Designer" },
  { name: "Mojahidul Islam", role: "Visualizer" },
  { name: "Naim Uddin", role: "UI/UX Designer" },
  { name: "Abdur Rahat Tarek", role: "Social Media Manager" },
  { name: "Mohammad AL Amin", role: "Video Artist & Motion Designer" },
];

const stats = [
  { value: "30+", label: "Countries Served" },
  { value: "13+", label: "Tech Partners" },
  { value: "250+", label: "Projects" },
  { value: "5M+", label: "Ads Spending" },
  { value: "20+", label: "Team Members" },
  { value: "8+", label: "Industries" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-blue-500/30">
      <SEO
        title="About Devorica — Our Team, Mission & Engineering Excellence"
        description="Meet the elite engineering team behind Devorica. 20+ specialists across web development, mobile apps, UI/UX design, and digital marketing. Serving 30+ countries with 250+ successful projects."
        canonical="https://devorica.com/about"
        jsonLd={[
          organizationSchema,
          buildBreadcrumbSchema([
            { name: "Home", url: "https://devorica.com" },
            { name: "About", url: "https://devorica.com/about" },
          ]),
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050505]">
        <div className="container-main relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-[800] leading-[1.1] tracking-tight mb-8">
              Architecting The <br className="hidden md:block" />
              <span className="text-white/40">— Digital Frontier..</span>
            </h1>
          </AnimatedSection>

          {/* Background Text Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-[-1] opacity-5">
            <h2 className="text-[80px] md:text-[140px] lg:text-[200px] font-[900] tracking-[-5px] whitespace-nowrap">
              Elite Force
            </h2>
          </div>

          <AnimatedSection delay={0.4} className="mt-16 max-w-5xl mx-auto">
             <div className="premium-media-frame rounded-3xl overflow-hidden border border-white/5 bg-[#0a0a0a]">
                 <OptimizedImage 
                  src={aboutImages.teamHero.src} 
                  alt={aboutImages.teamHero.alt}
                  width={aboutImages.teamHero.width}
                  height={aboutImages.teamHero.height}
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="premium-media w-full h-auto"
                />
             </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto mt-20 text-left px-4">
             <AnimatedSection delay={0.6}>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-[700] leading-[1.1] mb-8">
                  Devorica <span style={{color: '#666666'}}>Engineering</span> Driving Excellence with <span className="text-white/40 italic">Precision</span> and <span className="text-white/40 italic">Innovation</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:items-end">
                   <p className="text-white/50 text-sm md:text-lg leading-[1.6]">
                     We are Devorica. We architect, engineer, and optimize mission-critical digital systems for global enterprises. We promise pixel-perfect precision and high-performance outcomes. At Devorica, we integrate deep technical engineering with high-level business strategy to ensure your organization dominates its respective market.
                   </p>
                   <div className="flex justify-start">
                      <Link to="/contact" className="btn-secondary w-full sm:w-auto gap-1.5 sm:gap-2">
                        <span>Book a Strategy Call</span>
                        <span className="mx-1.5 hidden text-white/40 font-light sm:mx-3 sm:inline">|</span>
                        <ArrowRight className="h-4 w-4 shrink-0" />
                      </Link>
                   </div>
                </div>
             </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-[#050505]">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] tracking-tight mb-6">Elite Engineering Force</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-lg leading-[1.6]">
              Meet the architects of the digital future. Our team of senior engineers, growth strategists, and specialized designers at Devorica is dedicated to engineering high-performance solutions that drive real business impact.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.05} className="group cursor-pointer">
                <div className="relative rounded-2xl bg-[#080808] border border-white/5 p-4 transition-all duration-300 group-hover:bg-[#0c0c0c] group-hover:border-white/10 group-hover:-translate-y-2">
                  <div className="premium-media-frame relative aspect-square rounded-xl bg-gradient-to-t from-black to-white/5 mb-6 overflow-hidden">
                    {/* Blue Halo Light Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-blue-600/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-4/5 bg-gradient-to-t from-blue-500/10 to-transparent blur-2xl opacity-50" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <OptimizedImage 
                        src={teamHeadshots[(i % 8)].src} 
                        alt={`${member.name} — ${member.role} at Devorica digital agency`}
                        className="premium-media w-full h-full object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-[700] text-[16px] text-white mb-1">{member.name}</h4>
                    <p className="text-[12px] font-[500] text-white/40 uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work / Stats */}
      <section className="section-padding bg-[#050505]">
        <div className="container-main">
           <AnimatedSection className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8 text-center md:text-left">
              <div className="max-w-xl mx-auto md:mx-0">
                 <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] tracking-tight mb-6">The Devorica Methodology</h2>
                 <p className="text-white/40 text-sm md:text-lg leading-[1.6]">
                   We engineer long-term competitive advantages through high-performance digital solutions. Our commitment to systemic stability and technical excellence ensures your digital products remain ahead of the curve.
                 </p>
              </div>
              <div className="text-center md:text-right">
                 <p className="text-6xl md:text-7xl font-[800] text-white mb-2">10+</p>
                 <p className="text-[12px] font-[600] text-white/30 uppercase tracking-[2px]">Years of Engineering Excellence</p>
              </div>
           </AnimatedSection>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border border-white/5">
              {stats.map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="p-8 md:p-12 border-r border-b border-white/5 last:border-r-0 group hover:bg-white/[0.02] transition-colors duration-300 text-center">
                    <p className="text-4xl md:text-5xl lg:text-6xl font-[800] text-white group-hover:text-blue-500 transition-colors duration-300 mb-2">{stat.value}</p>
                    <p className="text-[12px] font-[600] text-white/30 uppercase tracking-[2px]">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
           </div>
        </div>
      </section>

      {/* Another Space Section */}
      <section className="section-padding bg-[#050505] overflow-hidden">
        <div className="container-main">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <AnimatedSection delay={0.2} className="relative">
                 {/* Glowing circle behind astronaut */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full" />
                  <motion.img 
                    src={aboutImages.astronaut.src} 
                    alt={aboutImages.astronaut.alt}
                    className="relative w-full h-auto"
                    animate={{ 
                       y: [0, -20, 0],
                       rotate: [0, 2, 0]
                    }}
                    transition={{ 
                       duration: 6,
                       repeat: Infinity,
                       ease: "easeInOut"
                    }}
                    loading="lazy"
                    decoding="async"
                 />
              </AnimatedSection>

              <div className="space-y-12 text-center lg:text-left">
                 <AnimatedSection>
                    <div className="flex justify-center lg:justify-start">
                      <span className="section-badge mb-8">About Devorica</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] leading-[1.1] text-white tracking-tighter mb-8">
                       Advancing the <br className="hidden md:block" />
                       <span className="text-[#888888]">— Digital Frontier..</span>
                    </h2>
                    <p className="text-white/40 text-sm md:text-lg leading-[1.7] max-w-xl mx-auto lg:mx-0">
                       At Devorica, we enforce a collaborative strategy built on technical transparency and strategic oversight. We work closely with our enterprise partners to architect solutions that drive customer acquisition, operational efficiency, and long-term brand authority.
                    </p>
                 </AnimatedSection>

                 <div className="flex flex-col sm:flex-row gap-12">
                    <AnimatedSection delay={0.3} className="blue-left-border">
                       <p className="text-4xl font-[800] text-white mb-2 tracking-tight">250+</p>
                       <p className="text-[14px] font-[600] text-white/40 uppercase tracking-widest">Project Completed</p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4} className="blue-left-border">
                       <p className="text-4xl font-[800] text-white mb-2 tracking-tight">100%</p>
                       <p className="text-[14px] font-[600] text-white/40 uppercase tracking-widest">Client Satisfaction</p>
                    </AnimatedSection>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Moments / Gallery Section */}
      <section className="section-padding bg-[#050505]">
        <div className="container-main">
           <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] tracking-tight mb-6">Our Engineering Culture</h2>
              <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-lg leading-[1.6]">
                 Elite Engineering at <span className="text-white">Devorica</span>
              </p>
           </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
              const moment = momentImages[`moment${i}` as keyof typeof momentImages];
              return (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="premium-media-frame relative aspect-video lg:aspect-square rounded-2xl overflow-hidden group">
                     <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                     <OptimizedImage 
                      src={moment.src} 
                      alt={moment.alt}
                      className="premium-media w-full h-full object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                     />
                  </div>
                </AnimatedSection>
              );
            })}
            </div>
        </div>
      </section>

      <ContactForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default About;
