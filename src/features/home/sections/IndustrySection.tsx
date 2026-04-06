import AnimatedSection from "@/components/shared/AnimatedSection";
import { industries } from "@/features/home/data/industries";

const IndustrySection = () => {
  return (
    <section className="section-padding bg-[#050505]">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] tracking-tight mb-6">Industry Specialization</h2>
            <p className="text-white/80 max-w-3xl mx-auto text-[15px] leading-[1.8] font-normal">
              Our deep technical understanding of diverse industries empowers us to engineer customized technology solutions. Let our engineering expertise be the catalyst for your next digital shift.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 items-stretch">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.name} delay={i * 0.05} className="h-full min-w-0">
              <div
                className="industry-card relative overflow-hidden bg-[#0A0A0E] border border-white/5 rounded-[22px] hover:border-white/10 hover:bg-[#111115] transition-all duration-500 flex flex-col items-center justify-center px-4 py-6 md:p-12 group cursor-pointer h-full min-h-[170px] md:min-h-[220px] w-full"
                style={{ animationDelay: `${i * 0.18}s` }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_42%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-1.5">
                  <div className="industry-card__icon relative mb-4 md:mb-6 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-[20px] md:rounded-[24px] border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.05]">
                    <div className="absolute inset-2 rounded-[18px] border border-white/5 opacity-80" />
                    <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_68%)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                    <ind.icon className="relative z-10 h-7 w-7 md:h-9 md:w-9 text-white transition-transform duration-500 group-hover:scale-110" strokeWidth={1.85} />
                  </div>
                  <p className="font-[600] text-white text-[13px] leading-[1.25] md:text-[16px] text-center tracking-[-0.01em] transition-colors duration-300 group-hover:text-white text-balance">
                    {ind.name}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
