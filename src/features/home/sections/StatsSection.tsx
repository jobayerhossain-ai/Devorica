import AnimatedSection from "@/components/shared/AnimatedSection";
import CountUpStat from "@/features/home/components/CountUpStat";
import { stats } from "@/features/home/data/stats";

const StatsSection = () => {
  return (
    <section className="section-padding bg-[#050505]">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-lg mb-6 inline-block tracking-wide">
              Performance
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] tracking-tight mb-6">Why Devorica?</h2>
            <p className="text-white/90 max-w-3xl mx-auto text-[15px] leading-relaxed font-normal">
              At Devorica, we engineer long-term competitive advantages through high-performance digital solutions. We integrate deep technical engineering with high-level business strategy to ensure your organization dominates its respective market.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="stat-card group relative overflow-hidden rounded-[28px] p-[1px]">
                <div className="stat-card__glow" />
                <div className="stat-card__panel relative h-full min-h-[220px] rounded-[27px] px-8 py-10 md:px-10 md:py-12 text-center flex flex-col items-center justify-center">
                  <div className="stat-card__shine" />
                  <div className="relative z-10 flex flex-col items-center">
                    <CountUpStat value={stat.value} suffix={stat.suffix} />
                    <p className="text-[15px] text-white/90 font-medium tracking-[-0.01em] transition-colors duration-300 group-hover:text-white">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
