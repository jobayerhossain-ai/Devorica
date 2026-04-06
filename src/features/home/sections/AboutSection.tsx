import AnimatedSection from "@/components/shared/AnimatedSection";

const AboutSection = () => {
  return (
    <section className="section-padding bg-[#050505]">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div>
              <span className="border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-lg mb-8 inline-block tracking-wide">
                About us
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] tracking-tight mb-8">Engineering excellence beyond borders</h2>
              <p className="text-[#A0A0A0] text-[15px] leading-[1.8] font-normal mb-12 max-w-lg">
                Devorica is a premium digital engineering firm dedicated to empowering enterprises through technological innovation. We specialize in architecting scalable SaaS platforms and high-performance digital ecosystems.
              </p>
              <div className="space-y-8">
                <div className="pl-4 border-l-2 border-[#2563eb]">
                  <p className="text-white font-[500] text-[17px]">Success Rate 100%</p>
                </div>
                <div className="pl-4 border-l-2 border-[#2563eb]">
                  <p className="text-white font-[500] text-[17px]">Project Completed 250+</p>
                </div>
                <div className="pl-4 border-l-2 border-[#2563eb]">
                  <p className="text-white font-[500] text-[17px]">Tech Partners 13+</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="premium-media-frame overflow-hidden rounded-2xl h-[400px] md:h-[500px] bg-[#111] flex items-center justify-center border border-white/5 relative">
              <img 
                src="/assets/team/team_hero.png" 
                alt="Devorica Engineering Space" 
                className="premium-media w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
