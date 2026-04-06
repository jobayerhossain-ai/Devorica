import { useMemo } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { projectShowcase } from "@/features/home/data/projects";

const NUM_COLUMNS = 4;

const ProjectsSection = () => {
  const projectColumns = useMemo(
    () =>
      Array.from({ length: NUM_COLUMNS }, (_, columnIndex) =>
        projectShowcase.filter((_, itemIndex) => itemIndex % NUM_COLUMNS === columnIndex)
      ),
    []
  );

  return (
    <section className="section-padding bg-[#050505]">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <span className="border border-white/20 text-white text-[11px] font-medium px-3 py-1 rounded-md mb-4 inline-block tracking-tight">
              Projects View
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-[800] tracking-tight">Explore Our Works</h2>
          </div>
        </AnimatedSection>

        <div className="project-scroll-shell">
          {projectColumns.map((column, columnIndex) => (
            <AnimatedSection key={`column-${columnIndex}`} delay={columnIndex * 0.06} className="project-scroll-column">
              <div
                className={`project-scroll-track ${columnIndex % 2 === 1 ? "project-scroll-track--reverse" : ""}`}
                style={{ ["--project-scroll-duration" as string]: `${26 + columnIndex * 3}s` }}
              >
                {[...column, ...column].map((project, itemIndex) => (
                  <div key={`${project.src}-${itemIndex}`} className="project-scroll-item">
                    <div className="premium-media-frame aspect-square overflow-hidden rounded-[8px] bg-[#0b0b0f] relative group cursor-pointer border border-white/[0.04] shadow-[0_18px_45px_rgba(0,0,0,0.32)]">
                      <img 
                        src={project.src}
                        alt={project.title}
                        className="premium-media block h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/18 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <p className="text-white font-[700] text-sm sm:text-base tracking-tight">{project.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
