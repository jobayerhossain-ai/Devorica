import AnimatedSection from "@/components/shared/AnimatedSection";
import OptimizedImage from "@/components/shared/OptimizedImage";
import { momentImages } from "@/lib/images";

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-[#050505]">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <div className="flex gap-4 h-[350px] md:h-[600px]">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-4 mt-6 md:mt-8">
                <div className="premium-media-frame rounded-[20px] overflow-hidden bg-[#111111] h-[55%]">
                  <OptimizedImage 
                    src={momentImages.moment1.src} 
                    alt={momentImages.moment1.alt} 
                    className="premium-media w-full h-full object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="premium-media-frame rounded-[20px] overflow-hidden bg-[#111111] h-[45%]">
                  <OptimizedImage 
                    src={momentImages.moment2.src} 
                    alt={momentImages.moment2.alt} 
                    className="premium-media w-full h-full object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              
              {/* Right Column */}
              <div className="flex-1 flex flex-col gap-4 mb-8">
                <div className="rounded-[20px] bg-[#6182f6] h-[35%] w-full flex flex-col justify-center px-6 md:px-8 shadow-lg">
                  <p className="text-4xl md:text-5xl font-[800] text-white mb-2 tracking-tight">30+</p>
                  <p className="text-[15px] font-[500] text-white/90">Countries Served</p>
                </div>
                <div className="premium-media-frame rounded-[20px] overflow-hidden bg-[#111111] h-[65%]">
                  <OptimizedImage 
                    src={momentImages.moment3.src} 
                    alt={momentImages.moment3.alt} 
                    className="premium-media w-full h-full object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:pl-6">
            <div>
              <span className="border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-lg mb-8 inline-block tracking-wide">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-[800] tracking-tight mb-8 leading-[1.1]">Systemic. Scalable. Seamless. The Devorica Standard.</h2>
              <p className="text-[#A0A0A0] text-[15px] leading-[1.8] font-normal mb-10 max-w-lg">
                We are Devorica. We architect, engineer, and optimize mission-critical digital systems for global enterprises. We promise pixel-perfect precision and high-performance outcomes.
              </p>
              <div className="space-y-6">
                <div className="pl-4 border-l-2 border-[#2563eb]">
                  <p className="text-white font-[500] text-[17px]">Integrated Team Collaboration</p>
                </div>
                <div className="pl-4 border-l-2 border-[#2563eb]">
                  <p className="text-white font-[500] text-[17px]">Comprehensive Support</p>
                </div>
                <div className="pl-4 border-l-2 border-[#2563eb]">
                  <p className="text-white font-[500] text-[17px]">AI-driven Design Innovation</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
