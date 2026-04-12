import { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Users, Database, Mail } from "lucide-react";
import { SEO } from "@/lib/seo";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Introduction",
      icon: Shield,
      content: `Devorica ("Company", "we", "our", or "us") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.

We use your data to provide and improve our Service. By using our Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms & Conditions.`
    },
    {
      title: "Information Collection and Use",
      icon: Database,
      content: `We collect several different types of information for various purposes to provide and improve our Service to you.

Types of Data Collected:
• Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:
  - Email address
  - First name and last name
  - Phone number
  - Address, State, Province, ZIP/Postal code, City
  - Cookies and Usage Data

• Usage Data: We may also collect information on how the Service is accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.

• Tracking & Cookies Data: We use cookies and similar tracking technologies to track activity on our Service and hold certain information.`
    },
    {
      title: "Use of Data",
      icon: Eye,
      content: `Devorica uses the collected data for various purposes:

• To provide and maintain our Service
• To notify you about changes to our Service
• To allow you to participate in interactive features of our Service when you choose to do so
• To provide customer support and respond to your inquiries
• To gather analysis or valuable information so that we can improve our Service
• To monitor the usage of our Service
• To detect, prevent and address technical issues and fraudulent activity
• To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information`
    },
    {
      title: "Security of Data",
      icon: Lock,
      content: `The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.

We implement appropriate technical and organizational measures designed to protect Personal Data against accidental or unlawful destruction, accidental loss, alteration, unauthorised or unlawful access or processing, and other unlawful forms of processing.`
    },
    {
      title: "Changes to This Privacy Policy",
      icon: Mail,
      content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`
    },
    {
      title: "Contact Us",
      icon: Users,
      content: `If you have any questions about this Privacy Policy, please contact us by email: privacy@devorica.com

We will respond to your inquiry within 30 business days. Your privacy is paramount to us, and we are committed to maintaining the confidentiality and security of your personal information in accordance with applicable laws and regulations.`
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
        title="Privacy Policy — Devorica"
        description="Our Privacy Policy explains how Devorica collects, uses, and protects your personal information. Read our complete privacy practices and data protection measures."
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
                <Shield className="w-12 h-12 text-purple-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
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
              At Devorica, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
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
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Questions About Our Privacy Policy?
              </h3>
              <p className="text-gray-400 mb-6">
                If you have any concerns or questions regarding our privacy practices, please don't hesitate to reach out to us.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
