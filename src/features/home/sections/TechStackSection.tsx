import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { techStackData } from "@/features/home/data/techStack";

const CATEGORIES = ["All", "Development", "Design", "Digital Marketing"] as const;

const TechStackSection = () => {
  const [activeTechCategory, setActiveTechCategory] = useState("All");

  const filteredTech = activeTechCategory === "All" 
    ? techStackData 
    : techStackData.filter(t => t.category === activeTechCategory);

  return (
    <section className="section-padding bg-[#050505]">
      <div className="container-main">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] text-center mb-10 tracking-tight">Technology Infrastructure</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTechCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-sm font-[500] transition-colors ${
                  activeTechCategory === cat 
                    ? "bg-white text-black" 
                    : "bg-[#111111] border border-white/5 text-[#A0A0A0] hover:bg-[#222222] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-300">
          {filteredTech.map((tech, i) => (
            <AnimatedSection key={tech.name} delay={i * 0.05}>
              <div className="tech-card group flex aspect-square flex-col items-center justify-center px-5 py-8 md:px-8 md:py-10">
                 <div className="tech-card__topline" />
                 <div className="tech-card__orb" />
                 <div className="tech-card__icon-wrap">
                   <tech.Icon className="h-12 w-12 md:h-14 md:w-14 transition-transform duration-500 group-hover:scale-110" color={tech.color} />
                 </div>
                 <span className="tech-card__label text-center">{tech.name}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-16">
            <Link to="/contact" className="btn-secondary gap-1.5 sm:gap-2">
              <span>Book a Strategy Call</span>
              <span className="mx-1.5 hidden text-white/40 font-light sm:mx-3 sm:inline">|</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TechStackSection;
