import AnimatedSection from "@/components/shared/AnimatedSection";

const CTASection = () => {
  return (
    <section className="section-padding bg-[#02040a] relative overflow-hidden grid-bg">
      <div className="container-main relative z-10">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] tracking-tight leading-[1.1] mb-8">
                <span style={{color: '#FFFFFF'}}>Engineering</span> <span style={{color: '#666666'}}>the future</span><br className="hidden md:block" />
                <span style={{color: '#FFFFFF'}}>of digital</span> <span style={{color: '#666666'}}>commerce</span>
              </h2>
              <p className="text-[#9ca3af] text-[15px] leading-[1.8] font-normal max-w-md">
                Devorica engineers high-performance architectures, scalable SaaS solutions, and mission-critical enterprise systems.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative h-[300px] md:h-[400px] lg:h-[300px]">
              {/* Floating Tags */}
              <div className="absolute top-[10%] right-[10%] md:right-[20%] bg-white/5 backdrop-blur-md border border-white/10 rounded-[14px] px-[18px] py-[12px] flex items-center gap-2.5 transform hover:scale-105 transition-transform duration-300">
                <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="React" className="w-5 h-5" />
                <span className="text-white text-sm">React Js</span>
              </div>
              <div className="absolute top-[35%] right-[40%] md:right-[50%] bg-white/5 backdrop-blur-md border border-white/10 rounded-[14px] px-[18px] py-[12px] flex items-center gap-2.5 transform hover:scale-105 transition-transform duration-300">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="Redux" className="w-5 h-5" />
                <span className="text-white text-sm">Redux js</span>
              </div>
              <div className="absolute top-[55%] right-[10%] md:right-[20%] bg-white/5 backdrop-blur-md border border-white/10 rounded-[14px] px-[18px] py-[12px] flex items-center gap-2.5 transform hover:scale-105 transition-transform duration-300">
                <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Next.js" className="w-5 h-5" />
                <span className="text-white text-sm">Next Js</span>
              </div>
              <div className="absolute top-[80%] right-[45%] md:right-[55%] bg-white/5 backdrop-blur-md border border-white/10 rounded-[14px] px-[18px] py-[12px] flex items-center gap-2.5 transform hover:scale-105 transition-transform duration-300">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="Tailwind" className="w-5 h-5" />
                <span className="text-white text-sm">Tailwind</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
