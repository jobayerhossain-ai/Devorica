import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { services } from "@/features/home/data/services";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-lg mb-4 inline-block tracking-wide">
              Expertise
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] tracking-tight">Core Capabilities</h2>
          </div>
        </AnimatedSection>

        <div className="space-y-0" onMouseLeave={() => setActiveService(null)}>
          {services.map((s, i) => {
            const isActive = activeService === i;
            return (
              <div 
                key={i} 
                className={`border-b border-white/5 py-6 transition-colors ${isActive ? 'border-primary/20' : 'hover:border-primary/50'}`}
                onMouseEnter={() => setActiveService(i)}
                onTouchStart={() => setActiveService(i)}
              >
                <div className="w-full flex items-center justify-between group outline-none cursor-pointer">
                  <div className="flex items-center gap-6">
                    <span className={`text-[15px] font-[600] transition-colors ${isActive ? 'text-[#666666]' : 'text-white'}`}>
                      {s.num}
                    </span>
                    <span className={`text-lg md:text-[22px] font-[500] transition-colors ${isActive ? 'text-white' : 'text-[#A0A0A0] group-hover:text-white'}`}>
                      {s.name}
                    </span>
                  </div>
                  <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-[#666666] text-white' : 'bg-[#151515] text-[#888888]'}`}>
                    {isActive ? <ArrowRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                  </div>
                </div>
                
                {/* Expanded Content */}
                <div className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'}`}>
                  <div className="overflow-hidden">
                    <div className="pl-12 md:pl-16 pr-4 md:pr-12 md:max-w-5xl">
                      <p className="text-[#888888] text-[15px] leading-[1.8] mb-6 font-normal">
                        {s.description}
                      </p>
                      <Link to={s.path} className="inline-flex items-center justify-center bg-[#666666] text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#555555] transition-colors">
                        See How We Can Help
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
