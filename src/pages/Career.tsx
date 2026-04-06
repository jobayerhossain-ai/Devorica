import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/shared/FAQSection";
import ContactForm from "@/components/shared/ContactForm";
import GlobalSupport from "@/components/shared/GlobalSupport";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SEO, buildBreadcrumbSchema } from "@/lib/seo";

const stats = [
  { value: "30+", label: "Countries Served" },
  { value: "13+", label: "Tech Partners" },
  { value: "250+", label: "Projects" },
  { value: "5M+", label: "Ads Spending" },
];

const perks = [
  "Competitive Compensation",
  "Global Health Coverage",
  "Remote-First Flexibility",
  "High-Performance Culture",
  "Enterprise-Scale Projects",
  "Professional Engineering Growth",
];

const Career = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <SEO
        title="Careers at Devorica — Join Our Elite Engineering Team"
        description="Build your career at Devorica. We're hiring web developers, mobile engineers, UI/UX designers, and digital marketers. Remote-first, competitive pay, enterprise-scale projects. Apply now."
        canonical="https://devorica.com/career"
        jsonLd={buildBreadcrumbSchema([
          { name: "Home", url: "https://devorica.com" },
          { name: "Careers", url: "https://devorica.com/career" },
        ])}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050505]">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        <div className="container-main relative z-10">
          <AnimatedSection className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-[800] leading-[1.1] tracking-tight mb-8 max-w-4xl">
              Join the Engineering Elite
            </h1>
            <p className="text-white/40 text-sm md:text-lg leading-[1.8] font-normal max-w-2xl mb-12">
              Architect your career at the forefront of digital transformation. We at Devorica are seeking technical visionaries to join our global engineering force and build the next generation of scalable enterprise systems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Current Openings */}
      <section className="pb-24 bg-[#050505]">
        <div className="container-main">
          <AnimatedSection className="mb-12 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] tracking-tight">Current Opening</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-[#0A0A0E] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition-all group overflow-hidden relative text-center sm:text-left">
                  <div className="absolute -right-4 -bottom-4 text-white opacity-[0.02] text-6xl font-bold group-hover:scale-110 transition-transform">{stat.value}</div>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-[800] text-white mb-2">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em] font-bold">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Newsletter Subscribe */}
          <AnimatedSection>
            <div className="bg-[#0A0A0E] border border-white/5 rounded-3xl p-8 md:p-12 max-w-2xl relative overflow-hidden group mx-auto lg:mx-0 text-center lg:text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[50px] rounded-full group-hover:bg-blue-600/10 transition-all" />
              <h3 className="font-[800] text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 tracking-tight">Subscribe to Hiring Alerts</h3>
              <p className="text-white/40 text-sm md:text-lg leading-[1.7] font-normal mb-8">Get notified about our future hiring opportunities and community updates directly in your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your professional email" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm outline-none focus:border-blue-500/50 transition-all text-white" 
                />
                <button className="btn-secondary shrink-0">Join Hub</button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Us / Perks */}
      <section className="section-padding bg-[#050505] border-t border-white/5">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge mb-6 uppercase tracking-[0.2em]">Our Culture</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] tracking-tight mb-8">
              <span style={{color: '#FFFFFF'}}>A</span> <span style={{color: '#666666'}}>Culture of</span> <span style={{color: '#FFFFFF'}}>Performance</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-lg leading-[1.8] font-normal">
              Devorica is a high-performance technology firm specializing in mission-critical solutions for global enterprises. We integrate advanced engineering with strategic innovation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-[#0A0A0E] border border-white/5 rounded-2xl p-8 hover:bg-blue-600/5 hover:border-blue-500/20 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <p className="text-[15px] font-[600] text-white uppercase tracking-wide">{perk}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonial */}
      <section className="section-padding bg-[#050505] border-t border-white/5">
        <div className="container-main max-w-4xl">
          <AnimatedSection>
            <div className="bg-[#0A0A0E] border border-white/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-24 h-24 bg-blue-600/5 blur-[50px] rounded-full" />
              <div className="relative z-10 text-center md:text-left">
                <p className="text-white/60 text-base md:text-xl lg:text-2xl leading-[1.7] font-medium mb-10 italic">
                  "Devorica fosters a culture of technical excellence and strategic innovation, providing the infrastructure required to engineer truly impactful digital systems. The focus on high-performance architecture makes every project a significant engineering milestone."
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 pt-8 border-t border-white/5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-xl shadow-lg shadow-blue-900/20 shrink-0">👤</div>
                  <div className="text-center md:text-left">
                    <p className="font-[800] text-lg md:text-xl text-white uppercase tracking-tight">Mojahidul Islam</p>
                    <p className="text-xs text-blue-500 font-[700] uppercase tracking-widest mt-1">Jr. Visualizer • Design Team</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GlobalSupport />
      <FAQSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Career;
