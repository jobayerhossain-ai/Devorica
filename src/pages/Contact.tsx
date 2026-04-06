import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/shared/FAQSection";
import ContactForm from "@/components/shared/ContactForm";
import AnimatedSection from "@/components/shared/AnimatedSection";
import TrustedBrands from "@/components/shared/TrustedBrands";
import { SEO, buildBreadcrumbSchema } from "@/lib/seo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Devorica — Get a Free Strategy Call & Project Quote"
        description="Ready to build your next digital product? Contact Devorica for a free strategy consultation. We specialize in web development, mobile apps, and SEO. Email: support@devorica.com | Phone: +880 1402 280 145"
        canonical="https://devorica.com/contact"
        jsonLd={buildBreadcrumbSchema([
          { name: "Home", url: "https://devorica.com" },
          { name: "Contact", url: "https://devorica.com/contact" },
        ])}
      />
      <Navbar />

      <div className="pt-24 md:pt-32">
        <ContactForm />
      </div>

      {/* Trusted Brands */}
      <TrustedBrands />

      <FAQSection />

      {/* Map placeholder */}
      <section className="section-padding">
        <div className="container-main">
          <AnimatedSection>
            <div className="glass-card rounded-2xl overflow-hidden h-[300px] md:h-[400px] bg-gradient-to-br from-card to-primary/5 flex items-center justify-center p-6 text-center">
              <p className="text-muted-foreground text-sm md:text-base">📍 North Khulshi, Road No-4, Chottogram, Bangladesh</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
