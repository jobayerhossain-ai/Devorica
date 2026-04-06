"use client";

import { Bell, Search, User, LogOut } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="h-20 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40 px-8 flex items-center justify-between">
      <div className="flex items-center w-96 relative">
        <Search className="w-5 h-5 absolute left-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search ecosystem..." 
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-gray-500"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-all" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-500 rounded-full border-2 border-[#0A0A0A]" />
        </div>

        <div className="flex items-center gap-4 border-l border-white/10 pl-6 cursor-pointer group">
          <div className="text-right">
            <p className="text-sm font-semibold text-white group-hover:text-purple-400 transition-all">John Doe</p>
            <p className="text-xs text-gray-500">Master Admin</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 flex items-center justify-center">
            <User className="w-5 h-5 text-purple-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
