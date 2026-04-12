import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, AlertCircle, CheckCircle, CreditCard, Scale, Zap, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SEO, buildBreadcrumbSchema } from "@/lib/seo";

const TermsConditions = () => {
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
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: `By accessing and using this website and service, you accept and agree to be bound by the terms and provision of this agreement.

These Terms & Conditions constitute the entire agreement between Devorica and you concerning your use of the website and services provided.`
    },
    {
      title: "Use License",
      icon: Zap,
      content: `Permission is granted to temporarily download materials for personal, non-commercial viewing only.

Under this license you may not:
• Modify or copy the materials
• Use for commercial purposes or public display
• Attempt to decompile or reverse engineer software
• Remove copyright or proprietary notations
• Transfer materials to another person`
    },
    {
      title: "Disclaimer of Warranties",
      icon: AlertCircle,
      content: `The materials on Devorica's website are provided "as is". The Company makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.

Devorica does not warrant that any materials on its website are accurate, complete, or current.`
    },
    {
      title: "Limitations of Liability",
      icon: Scale,
      content: `In no event shall Devorica or its suppliers be liable for any damages arising out of the use or inability to use the materials on Devorica's website.

Some jurisdictions do not allow limitations on implied warranties, so these limitations may not apply to you.`
    },
    {
      title: "Accuracy of Materials",
      icon: FileText,
      content: `The materials appearing on Devorica's website could include technical, typographical, or photographic errors. Devorica does not warrant that any materials on its website are accurate, complete, or current.

The Company may make changes to materials at any time without notice.`
    },
    {
      title: "External Links",
      icon: Zap,
      content: `Devorica has not reviewed all sites linked to its website and is not responsible for their contents. The inclusion of any link does not imply endorsement by Devorica.

Use of any linked website is at the user's own risk.`
    },
    {
      title: "Modifications to Terms",
      icon: AlertCircle,
      content: `Devorica may revise these Terms & Conditions at any time without notice. By using this website, you are agreeing to be bound by the then current version.

Users will be notified of material changes via email or website notice.`
    },
    {
      title: "Governing Law",
      icon: Scale,
      content: `These Terms & Conditions are governed by and construed in accordance with the laws of the jurisdiction in which Devorica operates.

You agree to submit to the exclusive jurisdiction and venue of courts located in that jurisdiction for dispute resolution.`
    },
    {
      title: "User Responsibilities",
      icon: CheckCircle,
      content: `You agree that you will not use the website for any unlawful purpose or in violation of applicable laws.

You will not:
• Violate intellectual property or privacy rights
• Attempt unauthorized access
• Transmit viruses or malware
• Harass or abuse other users
• Use automated tools to access the website`
    },
    {
      title: "Intellectual Property",
      icon: FileText,
      content: `All content on the website, including text, graphics, logos, images, and software, is the property of Devorica or its suppliers and is protected by international copyright laws.

You may not reproduce, modify, distribute, or display any content without prior written permission.`
    },
    {
      title: "Payment Terms",
      icon: CreditCard,
      content: `If you engage our paid services, you agree to pay all fees according to the pricing plan selected.

• Fees are non-refundable except as required by law
• We may change pricing with 30 days' notice
• Late payments may result in service suspension
• You are responsible for all taxes
• Invoices are due upon receipt`
    },
    {
      title: "Dispute Resolution",
      icon: AlertCircle,
      content: `If you have questions or wish to report violations, please contact us at: legal@devorica.com

We will attempt to resolve disputes promptly and fairly. You agree to attempt resolution through good faith negotiation before legal action.`
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
        title="Terms & Conditions — Devorica"
        description="Read our Terms & Conditions to understand the rules and regulations governing your use of Devorica's website and services."
        noIndex={false}
        jsonLd={[buildBreadcrumbSchema([
          { name: "Home", url: "https://devorica.com" },
          { name: "Terms & Conditions", url: "https://devorica.com/terms-conditions" },
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
                  <FileText className="w-8 h-8 text-blue-400" />
                </div>
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Legal</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[800] leading-[1.1] tracking-tight mb-6">
                Terms & <span className="text-white/40">Conditions</span>
              </h1>

              <p className="text-lg text-white/50 leading-relaxed">
                Last Updated: April 12, 2026. Please read our terms carefully to understand your rights and responsibilities when using our website and services.
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
                Questions About Our Terms?
              </h2>
              <p className="text-white/60 mb-8">
                If you need clarification about any terms or policies, our legal team is ready to assist.
              </p>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Get in Touch
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
