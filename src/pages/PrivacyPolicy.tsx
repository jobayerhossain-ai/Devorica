import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Database, Eye, Lock, Users, Mail, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SEO, buildBreadcrumbSchema } from "@/lib/seo";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({
    0: true
  });

  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const sections = [
    {
      title: "Introduction",
      icon: Shield,
      content: `Devorica ("Company", "we", "our", or "us") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.

We use your data to provide and improve our Service. By using our Service, you agree to the collection and use of information in accordance with this policy.`
    },
    {
      title: "Information Collection and Use",
      icon: Database,
      content: `We collect several different types of information for various purposes to provide and improve our Service.

Types of Data Collected:
• Personal Data: Email address, name, phone number, address, location information
• Usage Data: IP address, browser type, pages visited, time and date of visit
• Tracking & Cookies: We use cookies and similar tracking technologies to track activity on our Service`
    },
    {
      title: "Use of Data",
      icon: Eye,
      content: `Devorica uses the collected data for various purposes:

• To provide and maintain our Service
• To notify you about changes to our Service
• To provide customer support and respond to inquiries
• To gather analysis or valuable information to improve our Service
• To monitor the usage of our Service
• To detect, prevent and address technical issues and fraudulent activity`
    },
    {
      title: "Security of Data",
      icon: Lock,
      content: `The security of your data is important to us. We implement appropriate technical and organizational measures designed to protect Personal Data against accidental or unlawful destruction, accidental loss, alteration, unauthorised or unlawful access or processing.

No method of transmission over the Internet is 100% secure. While we strive to protect your Personal Data, we cannot guarantee its absolute security.`
    },
    {
      title: "User Rights",
      icon: Users,
      content: `You have the right to:
• Access your personal data
• Correct inaccurate personal data
• Request deletion of your data
• Opt-out of certain data processing
• Withdraw consent at any time

To exercise these rights, please contact us using the information provided below.`
    },
    {
      title: "Contact Us",
      icon: Mail,
      content: `If you have any questions about this Privacy Policy, please contact us:

Email: privacy@devorica.com

We will respond to your inquiry within 30 business days. Your privacy is paramount to us, and we are committed to maintaining the confidentiality and security of your personal information.`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-blue-500/30">
      <SEO
        title="Privacy Policy — Devorica"
        description="Our Privacy Policy explains how Devorica collects, uses, and protects your personal information. Read our complete privacy practices and data protection measures."
        noIndex={false}
        jsonLd={[buildBreadcrumbSchema([
          { name: "Home", url: "https://devorica.com" },
          { name: "Privacy Policy", url: "https://devorica.com/privacy-policy" },
        ])]}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050505]">
        <div className="container-main relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Legal</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[800] leading-[1.1] tracking-tight mb-6">
                Privacy <span className="text-white/40">Policy</span>
              </h1>

              <p className="text-lg text-white/50 leading-relaxed">
                Last Updated: April 12, 2026. We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 md:py-32">
        <div className="container-main">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isExpanded = expandedSections[index];

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full"
                  >
                    <div className="glass-card-hover p-6 text-left group">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 flex-shrink-0 group-hover:border-blue-500/50 transition-colors">
                            <Icon className="w-6 h-6 text-blue-400" />
                          </div>
                          <div className="pt-1">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                              {section.title}
                            </h3>
                            {isExpanded && (
                              <p className="text-sm text-white/40">Click to collapse</p>
                            )}
                          </div>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-white/40 flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-white/5"
                          >
                            <p className="text-white/60 leading-relaxed whitespace-pre-wrap">
                              {section.content}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <AnimatedSection delay={0.6} className="mt-20">
            <div className="glass-card p-8 md:p-12 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Privacy Questions?
              </h2>
              <p className="text-white/60 mb-8">
                If you have concerns or questions regarding our privacy practices, our team is ready to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Contact Our Team
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
