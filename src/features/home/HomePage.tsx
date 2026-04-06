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
import {
  SEO,
  organizationSchema,
  websiteSchema,
  buildFAQSchema,
} from "@/lib/seo";

const homeFaqs = [
  { q: "How does Devorica drive business growth?", a: "Devorica engineers custom, performance-driven digital solutions that optimize customer acquisition and operational efficiency. We focus on measurable business impact—from increasing user retention to driving exponential revenue growth through scalable technology architectures." },
  { q: "What are Devorica's core capabilities?", a: "We specialize in Scalable Web & Software Engineering, Mobile App Development, Website Redesign & Optimization, SEO & Growth Optimization, and 24/7 Enterprise Maintenance & Support." },
  { q: "What is the typical project implementation timeline?", a: "Scalable Web Engineering: 8-16 weeks. Mobile App Development: 12-20 weeks. Growth Optimization: Ongoing strategic partnership. We provide comprehensive milestone tracking throughout." },
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

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Devorica — Web Development, Mobile Apps & Digital Growth Agency"
        description="Devorica is a full-service digital agency delivering web development, mobile app development, UI/UX design, SEO, and enterprise software engineering. 250+ projects delivered across 30+ countries."
        canonical="https://devorica.com"
        jsonLd={[organizationSchema, websiteSchema, buildFAQSchema(homeFaqs)]}
      />
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
