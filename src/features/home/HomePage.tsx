import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/shared/FAQSection";
import ContactForm from "@/components/shared/ContactForm";
import GlobalSupport from "@/components/shared/GlobalSupport";
import TrustedBrands from "@/components/shared/TrustedBrands";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import StatsSection from "./sections/StatsSection";
import AboutSection from "./sections/AboutSection";
import TechStackSection from "./sections/TechStackSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import ProjectsSection from "./sections/ProjectsSection";
import IndustrySection from "./sections/IndustrySection";
import TestimonialsSection from "./sections/TestimonialsSection";
import CTASection from "./sections/CTASection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustedBrands />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <TechStackSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <IndustrySection />
      <TestimonialsSection />
      <CTASection />
      <GlobalSupport />
      <ContactForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;
