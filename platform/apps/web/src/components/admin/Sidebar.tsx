"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Wallet, 
  Settings,
  ChevronRight,
  Zap
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { name: "Clients", icon: Users, href: "/admin/clients" },
  { name: "Projects", icon: Briefcase, href: "/admin/projects" },
  { name: "Messages", icon: MessageSquare, href: "/admin/messages" },
  { name: "Finance", icon: Wallet, href: "/admin/finance" },
  { name: "Settings", icon: Settings, href: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen fixed left-0 top-0 bg-[#0A0A0A] border-r border-white/5 z-50">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            DEVORICA
          </span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative block"
              >
                <div className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                  ${isActive 
                    ? "bg-white/5 text-white" 
                    : "text-gray-500 hover:text-white hover:bg-white/[0.02]"
                  }
                `}>
                  <item.icon className={`w-5 h-5 ${isActive ? "text-purple-500" : "group-hover:text-purple-400"}`} />
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="active-pill"
                      className="absolute right-4 w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="absolute bottom-8 left-8 right-8">
        <div className="p-4 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-white/5 text-center">
          <p className="text-xs text-gray-400 mb-2">Supreme Plan Active</p>
          <button className="text-sm font-semibold text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-all border border-white/10 w-full mb-2">
            View Analytics
          </button>
        </div>
      </div>
    </aside>
  );
}
