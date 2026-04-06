import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import { Icon } from "@iconify/react";
import logo from "@/assets/logo.png";

const ThreadsIcon = ({ size = 18, className }: { size?: number; className?: string }) => (
  <Icon icon="simple-icons:threads" width={size} height={size} className={className} />
);

const Footer = () => {
  return (
    <footer className="relative bg-[#02040a] pt-16 pb-8">
      {/* Top Border Glow */}
      <div className="footer-topline absolute top-0 left-1/2 -translate-x-1/2 w-[92%] h-[1px]" />
      
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-start gap-12 lg:gap-8 pb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left lg:-mt-4">
            <div className="flex flex-col gap-1 items-center md:items-start">
              <Link to="/" className="block">
                <img src={logo} alt="Devorica — Full-Service Digital Agency Logo" className="h-16 md:h-24 w-auto object-contain" />
              </Link>
              <p className="text-[10px] text-white/40 uppercase tracking-[3px] font-medium">Architecting Digital Excellence</p>
            </div>
            
          </div>

          {/* Links Column 1 */}
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-[700] text-white/40 tracking-widest">Corporate</h4>
            <div className="space-y-4">
              <Link to="/services" className="footer-link block text-[15px] text-white/60">Services</Link>
              <span className="footer-link block text-[15px] text-white/60 cursor-pointer">Support Center</span>
            </div>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-[700] text-white/40 tracking-widest">Solutions</h4>
            <div className="space-y-4">
              <Link to="/contact" className="footer-link block text-[15px] text-white/60">Contact Us</Link>
              <Link to="/career" className="footer-link block text-[15px] text-white/60">Join Our Team</Link>
            </div>
          </div>

          {/* Links Column 3 */}
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
             <h4 className="text-xs font-[700] text-white/40 tracking-widest">Social Infrastructure</h4>
             <div className="flex flex-wrap gap-2">
               {[
                 { icon: Instagram, href: "https://www.instagram.com/devoricaweb/", hoverColor: "#E4405F", label: "Follow Devorica on Instagram" },
                 { icon: Facebook, href: "https://www.facebook.com/devoricaweb/", hoverColor: "#1877F2", label: "Follow Devorica on Facebook" },
                 { icon: ThreadsIcon, href: "https://www.threads.com/@devorica9", hoverColor: "#FFFFFF", label: "Follow Devorica on Threads" },
               ].map((social, i) => (
                 <a 
                   key={i} 
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label={social.label}
                   className="group w-10 h-10 bg-[#0d0d0d] border border-white/5 rounded-lg flex items-center justify-center text-white/40 hover:border-white/20 hover:bg-[#1a1a1a] transition-all duration-300"
                   style={{ ["--icon-hover" as string]: social.hoverColor }}
                 >
                   <social.icon
                     size={18}
                     className="text-current transition-colors duration-300 group-hover:[color:var(--icon-hover)]"
                   />
                 </a>
               ))}
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-[500] text-white/30 tracking-wide uppercase">
          <div className="flex gap-4">
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <span className="text-white/10">|</span>
            <Link to="/terms" className="footer-link">Terms & Conditions</Link>
          </div>
          
          <div className="text-center">
             © 2026 Devorica. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2">
             <span>Engineered by</span>
             <Link to="/" className="footer-link text-white/50">Devorica</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
