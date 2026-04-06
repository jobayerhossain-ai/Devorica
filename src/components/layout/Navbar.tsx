import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    children: [
      { name: "Web & Software Engineering", path: "/services/web-development" },
      { name: "Mobile App Development", path: "/services/ui-ux" }, // Reusing existing slug for now as agreed in structural integrity rule
      { name: "Website Redesign & Optimization", path: "/services/crm-development" },
      { name: "SEO & Growth Optimization", path: "/services/digital-marketing" },
      { name: "Maintenance & Support", path: "/services/graphic-design" },
    ],
  },
  { name: "Blogs", path: "/blogs" },
  { name: "Career", path: "/career" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent" role="navigation" aria-label="Main navigation">
      <div className="container-main flex items-center justify-between h-16 md:h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Devorica Logo" className="h-[77px] md:h-24 w-auto object-contain" />
        </Link>

        {/* Desktop nav — dark pill */}
        <div className="hidden lg:flex items-center gap-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-2 py-1.5">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name} className="relative group">
                <button aria-haspopup="true" aria-label="Services menu" className={`flex items-center gap-1 px-4 py-2 text-[14px] font-[500] rounded-full transition-colors ${location.pathname.startsWith("/services") ? "text-white" : "text-white/60 hover:text-white"}`}>
                  {link.name}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-[calc(100%+8px)] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 min-w-[220px] shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="flex items-center gap-2 px-4 py-2.5 text-[14px] text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors group/item relative"
                      >
                        <span className="text-[8px] mt-0.5 text-blue-500">•</span>
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-[14px] font-[500] rounded-full transition-colors ${location.pathname === link.path ? "text-white font-bold bg-white/5" : "text-white/60 hover:text-white"}`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Contact us — white button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="btn-secondary"
          >
            Start Your Project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 -mr-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/5 bg-[#050505] backdrop-blur-3xl shadow-2xl"
          >
            <div className="container-main py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 text-sm text-muted-foreground"
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 pt-2">
                        <div className="mobile-nav-panel">
                          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setMobileOpen(false)}
                            className="mobile-nav-item group text-[15px] leading-snug"
                          >
                            <span className="mobile-nav-dot" />
                            <span className="transition-transform duration-300 group-hover:translate-x-1">{child.name}</span>
                          </Link>
                        ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm text-muted-foreground"
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-secondary text-sm w-full justify-center mt-4">
                Start Your Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
