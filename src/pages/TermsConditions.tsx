import { useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, AlertCircle, CheckCircle, CreditCard, Scale, Zap } from "lucide-react";
import { SEO } from "@/lib/seo";

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: `By accessing and using this website and service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

These Terms & Conditions ("Agreement") constitute the entire agreement between Devorica ("Company") and you ("User") concerning your use of the website and services provided. The Company reserves the right to make changes to the website, policies, and these Terms & Conditions at any time.`
    },
    {
      title: "Use License",
      icon: Zap,
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Devorica's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

• Modify or copy the materials
• Use the materials for any commercial purpose or for any public display
• Attempt to decompile or reverse engineer any software contained on the website
• Remove any copyright or other proprietary notations from the materials
• Transfer the materials to another person or "mirror" the materials on any other server
• Otherwise violate any applicable laws or regulations

This license shall automatically terminate if you violate any of these restrictions and may be terminated by Devorica at any time, upon which your viewing right will also terminate.`
    },
    {
      title: "Disclaimer of Warranties",
      icon: AlertCircle,
      content: `The materials on Devorica's website are provided "as is". The Company makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

Further, Devorica does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this website.`
    },
    {
      title: "Limitations of Liability",
      icon: Scale,
      content: `In no event shall Devorica or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Devorica's website, even if Devorica or a Company authorized representative has been notified orally or in writing of the possibility of such damage.

Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.`
    },
    {
      title: "Accuracy of Materials",
      icon: FileText,
      content: `The materials appearing on Devorica's website could include technical, typographical, or photographic errors. Devorica does not warrant that any of the materials on its website are accurate, complete, or current. The Company may make changes to the materials contained on its website at any time without notice.

Devorica does not make any commitment to update the materials. While efforts are made to provide accurate information, Devorica assumes no responsibility for errors, omissions, or inaccuracies in the content provided.`
    },
    {
      title: "Links",
      icon: Zap,
      content: `Devorica has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Devorica of the site. Use of any such linked website is at the user's own risk.

If you believe that a link on our website violates intellectual property rights or other applicable laws, please contact us immediately. We reserve the right to remove any links at our sole discretion.`
    },
    {
      title: "Modifications to Terms",
      icon: AlertCircle,
      content: `Devorica may revise these Terms & Conditions for its website at any time without notice. By using this website and our services, you are agreeing to be bound by the then current version of these Terms & Conditions.

Users will be notified of any material changes via email or through a notice on the website. Your continued use of the website following the posting of revised Terms & Conditions means that you accept and agree to the changes.`
    },
    {
      title: "Governing Law",
      icon: Scale,
      content: `These Terms & Conditions and any separate agreements we provide to render services to you are governed by and construed in accordance with the laws of the jurisdiction in which Devorica operates, without regard to its conflict of law provisions.

You agree to submit to the exclusive jurisdiction and venue of the courts located in that jurisdiction for the resolution of any disputes arising out of or relating to these Terms & Conditions or your use of the website.`
    },
    {
      title: "User Responsibilities",
      icon: CheckCircle,
      content: `You agree that you will not use the website or its services for any unlawful purpose or in violation of any applicable law or regulation. You further agree that you will not:

• Use the website in a way that violates any third-party intellectual property, privacy, or other rights
• Attempt to gain unauthorized access to the website or its systems
• Transmit any viruses, malware, or other harmful code
• Harass, abuse, or intimidate other users
• Spam or post repetitive or irrelevant content
• Use automated tools to access the website without permission
• Violate any local, state, national, or international law or regulation`
    },
    {
      title: "Intellectual Property Rights",
      icon: FileText,
      content: `All content on the website, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of Devorica or its content suppliers and is protected by international copyright laws.

You may not reproduce, modify, distribute, transmit, display, perform, publish, or license any content without prior written permission from Devorica. Unauthorized use of any content may violate copyright, trademark, and other laws. We actively protect our intellectual property rights and reserve the right to pursue legal action against infringement.`
    },
    {
      title: "Payment Terms",
      icon: CreditCard,
      content: `If you engage our services on a paid basis, you agree to pay all fees according to the pricing plan you select. Payment terms and methods will be clearly indicated at the time of purchase.

• All fees are non-refundable except as required by law
• We may change pricing with 30 days' notice
• Late payments may result in suspension or termination of services
• You are responsible for all taxes related to your purchase
• Invoices are due upon receipt unless otherwise specified in your service agreement`
    },
    {
      title: "Contact & Dispute Resolution",
      icon: AlertCircle,
      content: `If you have questions about these Terms & Conditions or wish to report a violation, please contact us at:

Email: legal@devorica.com
Address: Devorica, [Your Address]

We will make every reasonable effort to resolve disputes promptly and fairly. In the event of a dispute, you agree to first attempt resolution through good faith negotiation before pursuing any legal action.

For serious violations, we reserve the right to take immediate action to protect our website and other users, including but not limited to account suspension or termination.`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <SEO
        title="Terms & Conditions — Devorica"
        description="Read our Terms & Conditions to understand the rules and regulations governing your use of Devorica's website and services."
        noIndex={false}
      />

      {/* Background gradient orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[150px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(262, 83%, 58%) 0%, transparent 70%)",
          top: "5%",
          left: "5%",
        }}
      />
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(217, 91%, 60%) 0%, transparent 70%)",
          bottom: "10%",
          right: "10%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-purple-500/30">
                <FileText className="w-12 h-12 text-purple-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-400 text-lg">
              Last Updated: April 12, 2026
            </p>
          </motion.div>

          {/* Introduction Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-16"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Welcome to Devorica. These Terms & Conditions ("Terms") govern your use of our website and services. Please read them carefully to understand your rights and responsibilities when using our platform.
            </p>
          </motion.div>

          {/* Sections */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:bg-white/8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30 flex-shrink-0">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white pt-0.5">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {section.content}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Questions About Our Terms?
              </h3>
              <p className="text-gray-400 mb-6">
                If you need clarification about any of our terms or policies, our legal team is ready to assist you.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
