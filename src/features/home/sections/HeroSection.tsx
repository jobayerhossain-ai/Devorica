import { Link } from "react-router-dom";
import { useRef, useState, useCallback } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import OptimizedImage from "@/components/shared/OptimizedImage";
import InteractiveCursor from "@/features/home/components/InteractiveCursor";
import FloatingParticles from "@/features/home/components/FloatingParticles";
import TypewriterText from "@/features/home/components/TypewriterText";
import { heroImages } from "@/lib/images";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
  }, []);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative"
    >
      {/* Interactive Cursor Trail */}
      <InteractiveCursor />
      {/* Floating particles */}
      <FloatingParticles />
      {/* Animated glow orbs that follow mouse */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          top: "10%",
          right: "10%",
          transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)`,
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
          bottom: "0%",
          left: "20%",
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
        }}
      />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center text-center lg:text-left">
          <AnimatedSection>
            <div
              className="transition-transform duration-500 ease-out flex flex-col items-center lg:items-start"
              style={{
                transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
              }}
            >
              {/* Google rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-0.5">
                  <svg width="28" height="28" viewBox="0 0 48 48" className="shrink-0">
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59A14.5 14.5 0 019.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.99 23.99 0 000 24c0 3.77.9 7.35 2.56 10.52l7.97-5.93z"
                    />
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.93C6.51 42.62 14.62 48 24 48z"
                    />
                  </svg>
                  <span className="text-foreground font-bold text-base ml-1">5</span>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(6)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FBBC05">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Badge */}
              <div className="section-badge mb-5 inline-flex items-center gap-2">
                 <span className="text-primary font-medium">Your Vision,</span>{" "}
                <span>Our Mission</span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-[800] leading-[1.1] mb-6 tracking-tight">
                Engineering Scalable Systems for{" "}
                <span style={{ borderColor: '#666666' }} className="block mt-4 lg:mt-2 border-l-[3px] pl-3 whitespace-normal lg:whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[300] tracking-tight">
                  <TypewriterText />
                </span>
              </h1>

              <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg text-sm md:text-base mx-auto lg:mx-0">
                Devorica is an elite technology partner specializing in high-performance web engineering and enterprise SaaS solutions. We engineer robust digital ecosystems that scale with your ambitions.
              </p>

              {/* CTA Button - white bg, black text */}
              <Link to="/contact" className="btn-primary">
                <span>Book a Strategy Call</span>
              </Link>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mt-6 text-[11px] text-white/30 font-medium">
                <span>Trusted by 250+ Businesses</span>
                <span className="hidden sm:inline text-white/10">|</span>
                <span>5-Star Google Rating</span>
                <span className="hidden sm:inline text-white/10">|</span>
                <span>NDA Protected</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="relative flex justify-center mt-12 lg:mt-0 px-4">
              {/* Outer glow follows mouse inversely */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl transition-transform duration-700 ease-out"
                style={{
                  transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px) scale(1.1)`,
                }}
              />
              {/* Astronaut moves with mouse for depth */}
              <OptimizedImage
                src={heroImages.main.src}
                alt={heroImages.main.alt}
                width={heroImages.main.width}
                height={heroImages.main.height}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="relative z-10 w-full max-w-[400px] md:max-w-[500px] lg:max-w-[700px] rounded-2xl opacity-80 lg:opacity-100"
                style={{
                  transform: `scale(1.05) translate(${mousePos.x * 20}px, ${mousePos.y * 15}px) rotateY(${mousePos.x * 5}deg) rotateX(${mousePos.y * -5}deg)`,
                  transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
