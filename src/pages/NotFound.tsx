import { useLocation, Link } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, ArrowLeft, Search, Sparkles, Compass } from "lucide-react";
import { SEO } from "@/lib/seo";
import FloatingParticles from "@/features/home/components/FloatingParticles";
import InteractiveCursor from "@/features/home/components/InteractiveCursor";

const NotFound = () => {
  const location = useLocation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState("");
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

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

  const quickLinks = [
    { name: "Home", path: "/", icon: Home, description: "Return to homepage" },
    { name: "Services", path: "/services/web-development", icon: Sparkles, description: "Explore our services" },
    { name: "About", path: "/about", icon: Compass, description: "Learn about us" },
    { name: "Contact", path: "/contact", icon: Search, description: "Get in touch" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <SEO
        title="Page Not Found — Devorica"
        description="The page you're looking for doesn't exist. Return to Devorica's homepage to explore our web development, mobile app, and digital growth services."
        noIndex={true}
      />

      {/* Interactive Cursor Trail */}
      <InteractiveCursor />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Animated background orbs */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-[150px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle, hsl(262, 83%, 58%) 0%, transparent 70%)",
          top: "20%",
          left: "10%",
          transform: `translate(${mousePos.x * -60}px, ${mousePos.y * -60}px)`,
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-[120px] pointer-events-none transition-transform duration-1200 ease-out"
        style={{
          background: "radial-gradient(circle, hsl(217, 91%, 60%) 0%, transparent 70%)",
          bottom: "10%",
          right: "15%",
          transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
        }}
      />

      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 flex items-center justify-center min-h-screen px-4"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* 404 Number */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off into the digital void.
              Don't worry, it happens to the best of us. Let's get you back on track!
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for something..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Quick Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    to={link.path}
                    className="group block p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <link.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 mb-2 transition-colors" />
                      <span className="text-sm font-medium text-white group-hover:text-purple-200 transition-colors">
                        {link.name}
                      </span>
                      <span className="text-xs text-gray-400 group-hover:text-gray-300 mt-1 transition-colors">
                        {link.description}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </motion.div>
          </motion.div>

          {/* Fun Element */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Lost in space? We're here to help!</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default NotFound;
