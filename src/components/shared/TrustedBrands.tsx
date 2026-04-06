import AnimatedSection from "@/components/shared/AnimatedSection";
import SmartHeading from "@/components/shared/SmartHeading";
import { brands } from "@/data/brands";

const TrustedBrands = () => {
  return (
    <section className="relative py-20 border-y border-border/30 bg-[#050505] overflow-hidden">
      {/* Perspective Grid Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
        <div 
          className="w-[200%] h-[200%] absolute"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(37, 99, 235, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(37, 99, 235, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '100px 50px',
            transform: 'perspective(1000px) rotateX(75deg) translateY(-20%) scale(2.5)',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 60%)'
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        <AnimatedSection>
          <SmartHeading as="h3" text="Trusted by brands all over the world" highlightWord="Trusted" className="text-center text-3xl md:text-4xl lg:text-5xl font-[800] mb-16 tracking-[-1px]" />
        </AnimatedSection>
        
        <div className="overflow-hidden space-y-6">
          {/* Row 1 */}
          <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused] w-max">
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <div
                key={`row1-${i}`}
                className="group mx-3 md:mx-4 px-8 py-5 bg-[#111111]/80 backdrop-blur-xl border border-white/5 rounded-2xl flex items-center justify-center min-w-[220px] shrink-0 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo — trusted Devorica technology partner`}
                    className="h-8 w-8 shrink-0 rounded-md object-contain"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xl md:text-2xl text-muted-foreground font-semibold tracking-[-0.5px] transition-colors duration-300 group-hover:text-white">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex animate-marquee-reverse whitespace-nowrap hover:[animation-play-state:paused] w-max">
            {[...brands, ...brands, ...brands, ...brands].reverse().map((brand, i) => (
              <div
                key={`row2-${i}`}
                className="group mx-3 md:mx-4 px-8 py-5 bg-[#111111]/80 backdrop-blur-xl border border-white/5 rounded-2xl flex items-center justify-center min-w-[220px] shrink-0 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo — trusted Devorica technology partner`}
                    className="h-8 w-8 shrink-0 rounded-md object-contain"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xl md:text-2xl text-muted-foreground font-semibold tracking-[-0.5px] transition-colors duration-300 group-hover:text-white">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
