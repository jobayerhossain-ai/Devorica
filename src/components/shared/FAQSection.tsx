import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SmartHeading from "@/components/shared/SmartHeading";

const faqData = [
  {
    q: "How does Devorica drive business growth?",
    a: "Devorica engineers custom, performance-driven digital solutions that optimize customer acquisition and operational efficiency. We focus on measurable business impact—from increasing user retention to driving exponential revenue growth through scalable technology architectures.",
  },
  { q: "What are Devorica's core capabilities?", a: "We specialize in Scalable Web & Software Engineering, Mobile App Development, Website Redesign & Optimization, SEO & Growth Optimization, and 24/7 Enterprise Maintenance & Support." },
  {
    q: "What is the typical project implementation timeline?",
    a: (
      <div className="space-y-4">
        <p>Implementation timelines are determined by strategic scope and technical complexity. On average:</p>
        <ul className="space-y-3 list-none p-0">
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full border border-white/40 shrink-0" />
            <span className="text-white/90">Scalable Web Engineering: 8-16 weeks</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full border border-white/40 shrink-0" />
            <span className="text-white/90">Mobile App Development: 12-20 weeks</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full border border-white/40 shrink-0" />
            <span className="text-white/90">Growth Optimization: Ongoing strategic partnership</span>
          </li>
        </ul>
        <p>We provide comprehensive milestone tracking and transparent progress reporting throughout the engagement.</p>
      </div>
    ),
  },
  { q: "How is project pricing determined?", a: "Our pricing architecture is value-based, reflecting the technical complexity and strategic impact of the solution. We offer tailored transparent quotes following a comprehensive discovery session." },
  { q: "What industry sectors does Devorica serve?", a: "We provide high-end engineering for Finance & Banking, E-commerce, Enterprise SaaS, Healthcare Technology, and high-growth Startups." },
  { q: "Are solutions optimized for mobile performance?", a: "Yes. Every platform we engineer adheres to a mobile-first philosophy, ensuring seamless performance, accessibility, and high conversion rates across all device ecosystems." },
  { q: "Is post-launch support provided?", a: "We offer comprehensive 24/7 maintenance and support agreements to ensure systemic stability, security, and continuous technological evolution." },
  { q: "How do you manage project transparency?", a: "We utilize industry-leading agile methodologies and real-time project management infrastructure, providing clients with full visibility into the development lifecycle." },
  { q: "Does Devorica offer SEO and visibility engineering?", a: "Our growth optimization team integrates data-driven SEO strategies into the core architecture of every platform to maximize organic visibility and search authority." },
  { q: "How can I initiate a partnership with Devorica?", a: "Initiate the process by requesting a custom solution through our portal. We will schedule a strategy call to align our technical capabilities with your business objectives." },
  { q: "Do you offer enterprise e-commerce solutions?", a: "We engineer robust, high-volume e-commerce architectures designed for global scalability, secure transaction processing, and optimized user journeys." },
  { q: "What distinguishes Devorica from standard agencies?", a: "Our integration of deep technical engineering with high-level business strategy ensures we deliver solutions that don't just function, but dominate their respective markets." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [showAll, setShowAll] = useState(false);

  const displayedFaqs = showAll ? faqData : faqData.slice(0, 6);

  return (
    <section className="section-padding bg-[#02040a]">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SmartHeading as="h2" text="Strategic Inquiries" highlightWord="Inquiries" className="text-4xl md:text-5xl lg:text-6xl font-[800] tracking-tight mb-4" />
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4 relative">
          <AnimatePresence mode="popLayout">
            {displayedFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  layout
                >
                  <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-[#0A0A0E] border-white/10' : 'bg-[#02040a] border-white/5 hover:border-white/10'}`}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                    >
                      <span className={`font-[700] text-[16px] md:text-[18px] transition-colors duration-300 ${isOpen ? "text-[#3b82f6]" : "text-white group-hover:text-white/90"}`}>
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-[#1a1a1a] border-white/20 text-white' : 'bg-transparent border-white/10 text-white/40 group-hover:border-white/20 group-hover:text-white/60'}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-8 md:px-8 md:pb-10 pt-0 text-[15px] text-[#A0A0A0] leading-[1.7] border-l-[3px] border-[#3b82f6] ml-6 md:ml-8">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          <div className="flex justify-end pt-2">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-[600] transition-all duration-300 group"
            >
              {showAll ? 'See less' : 'See more'} 
              <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;