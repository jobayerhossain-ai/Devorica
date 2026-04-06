import { useState, useEffect, useMemo } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { testimonials } from "@/features/home/data/testimonials";
import { useIsMobile } from "@/hooks/use-mobile";

const TRANSITION_RESET_DELAY = 40;

const TestimonialsSection = () => {
  const [testimonialPage, setTestimonialPage] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const isMobile = useIsMobile();
  const testimonialsPerPage = isMobile ? 1 : 2;
  const totalPages = testimonials.length;

  const testimonialSlides = useMemo(
    () =>
      Array.from({ length: totalPages }, (_, startIndex) =>
        Array.from({ length: testimonialsPerPage }, (_, offset) =>
          testimonials[(startIndex + offset) % testimonials.length]
        )
      ),
    [testimonialsPerPage, totalPages]
  );

  const infiniteSlides = useMemo(
    () =>
      totalPages > 1
        ? [testimonialSlides[totalPages - 1], ...testimonialSlides, testimonialSlides[0]]
        : testimonialSlides,
    [testimonialSlides, totalPages]
  );

  useEffect(() => {
    setTransitionEnabled(false);
    setTestimonialPage(totalPages > 1 ? 1 : 0);
  }, [isMobile, totalPages]);

  const handleTransitionEnd = () => {
    if (totalPages <= 1) return;

    if (testimonialPage === 0) {
      setTransitionEnabled(false);
      setTestimonialPage(totalPages);
      return;
    }

    if (testimonialPage === totalPages + 1) {
      setTransitionEnabled(false);
      setTestimonialPage(1);
    }
  };

  useEffect(() => {
    if (!transitionEnabled) {
      const timeoutId = window.setTimeout(() => {
        setTransitionEnabled(true);
      }, TRANSITION_RESET_DELAY);

      return () => window.clearTimeout(timeoutId);
    }
  }, [transitionEnabled]);

  const goToPrev = () => {
    if (totalPages <= 1) return;
    setTransitionEnabled(true);
    setTestimonialPage((p) => p - 1);
  };

  const goToNext = () => {
    if (totalPages <= 1) return;
    setTransitionEnabled(true);
    setTestimonialPage((p) => p + 1);
  };

  return (
    <section className="section-padding bg-[#050505]">
      <div className="container-main">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] tracking-tight text-center mb-16">Client Testimonials</h2>
        </AnimatedSection>

        <div className="relative mx-auto max-w-[1100px] overflow-hidden">
          <div
            className="flex ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${testimonialPage * 100}%)`,
              transition: transitionEnabled ? "transform 500ms cubic-bezier(0.25,0.46,0.45,0.94)" : "none",
            }}
          >
            {infiniteSlides.map((slide, pageIdx) => (
              <div key={pageIdx} className={`grid w-full flex-shrink-0 gap-6 px-1 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                {slide.map((t, i) => (
                    <div
                      key={i}
                      className={`flex h-full flex-col bg-[#0A0A0E] ${isMobile ? "rounded-[30px] border border-white/14 px-8 py-9 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.32)]" : "rounded-[28px] border border-white/10 p-8 md:p-10"}`}
                    >
                      <FaQuoteLeft
                        className={`${isMobile ? "mx-auto mb-6 h-10 w-10" : "mb-6 h-8 w-8"}`}
                        style={{ color: t.quoteColor }}
                      />
                      <p className={`${isMobile ? "mb-10 flex-grow text-[16px] leading-[1.5] text-white" : "mb-8 flex-grow text-[15px] leading-relaxed text-[#A0A0A0]"}`}>
                        {t.text}
                        {isMobile ? <span className="text-white"> See More</span> : null}
                      </p>
                      <div className={`mt-auto flex ${isMobile ? "items-center justify-center gap-4" : "items-center gap-4"}`}>
                        <div className={`flex shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_24px_rgba(0,0,0,0.28)] ${isMobile ? "h-16 w-16" : "h-14 w-14"}`}>
                          <div className={`flex items-center justify-center overflow-hidden rounded-full ${isMobile ? "h-11 w-11" : "h-10 w-10"}`}>
                            <img
                              src={`https://flagcdn.com/w80/${t.countryCode}.png`}
                              alt={`${t.countryCode.toUpperCase()} flag — ${t.name} client testimonial`}
                              className="h-full w-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        </div>
                        <div className={`flex flex-col ${isMobile ? "items-start text-left" : ""}`}>
                          <p className={`${isMobile ? "mb-2 text-[18px] font-[700] leading-none text-white" : "text-[16px] font-[600] text-white"}`}>{t.name}</p>
                          <p className={`${isMobile ? "text-[14px] text-[#a7a7a7]" : "text-[14px] text-[#888888]"}`}>{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className={`flex justify-center gap-4 ${isMobile ? "mt-8" : "mt-12"}`}>
          <button
            aria-label="Previous testimonials"
            onClick={goToPrev}
            className={`${isMobile ? "h-14 w-14 bg-white/10" : "h-12 w-12 bg-[#111115]"} group flex items-center justify-center rounded-full border-none text-white transition-colors hover:bg-[#222228]`}
          >
            <ChevronLeft className={`${isMobile ? "h-7 w-7" : "h-5 w-5"} transition-transform group-hover:-translate-x-1`} />
          </button>
          <button
            aria-label="Next testimonials"
            onClick={goToNext}
            className={`${isMobile ? "h-14 w-14 bg-white/10" : "h-12 w-12 bg-[#111115]"} group flex items-center justify-center rounded-full border-none text-white transition-colors hover:bg-[#222228]`}
          >
            <ChevronRight className={`${isMobile ? "h-7 w-7" : "h-5 w-5"} transition-transform group-hover:translate-x-1`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
