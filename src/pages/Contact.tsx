import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/shared/FAQSection";
import ContactForm from "@/components/shared/ContactForm";
import AnimatedSection from "@/components/shared/AnimatedSection";
import TrustedBrands from "@/components/shared/TrustedBrands";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
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
