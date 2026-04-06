import { Icon } from "@iconify/react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const cards = [
  {
    badge: "PERFORMANCE",
    title: "Performance Engineering",
    desc: "High-performance, resilient technology solutions tailored for enterprise scalability.",
    icon: "lucide:bar-chart-3",
    actions: ["Scalable Systems"],
  },
  {
    badge: "MISSION CRITICAL",
    eyebrow: "24/7",
    title: "Strategic Support",
    desc: "Senior oversight, rapid response, and executive-grade continuity.",
    icon: "lucide:zap",
    actions: ["Live Monitoring", "Rapid Escalation"],
  },
  {
    badge: "GLOBAL DELIVERY",
    title: "Global Digital Engineering",
    desc: "Empowering enterprises with mission-critical engineering and high-level technical oversight.",
    icon: "lucide:globe",
    actions: ["Enterprise Reach"],
  },
];

const GlobalSupport = () => {
  return (
    <section className="section-padding bg-[radial-gradient(circle_at_top,#0a0f1f,#05070d)] pt-0">
      <div className="container-main max-w-[1200px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <AnimatedSection key={card.badge} delay={index * 0.1} className="h-full">
              <article className="group relative h-full rounded-[20px] border border-white/10 bg-[linear-gradient(145deg,#0b0f19,#070a12)] p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[rgba(79,124,255,0.4)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] md:p-8">
                <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(79,124,255,0.2),transparent)] backdrop-blur-[6px] transition-all duration-300 group-hover:scale-[1.08] group-hover:border-[rgba(79,124,255,0.5)] group-hover:shadow-[0_0_20px_rgba(79,124,255,0.3)]">
                  <Icon icon={card.icon} className="h-[22px] w-[22px] text-[#4f7cff]" />
                </div>

                <div className="mb-5 inline-block rounded-full border border-white/10 px-3 py-1.5 text-[12px] tracking-[1px] text-[#9aa4b2]">
                  {card.badge}
                </div>

                {card.eyebrow ? (
                  <p className="mb-2 text-[36px] font-[700] leading-none text-[#e6e8ec]">{card.eyebrow}</p>
                ) : null}

                <h3 className="mb-2 max-w-[260px] text-[22px] font-[600] text-[#e6e8ec]">{card.title}</h3>

                <p className="mb-6 max-w-[360px] leading-[1.6] text-[#9aa4b2]">{card.desc}</p>

                <div className="flex flex-wrap gap-2.5">
                  {card.actions.map((action) => (
                    <button
                      key={action}
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-transparent px-4 py-2.5 text-[13px] text-[#e6e8ec] transition-all duration-200 hover:border-[#4f7cff] hover:bg-[rgba(79,124,255,0.1)] hover:text-white"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalSupport;
