"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#050505]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-extrabold tracking-tighter sm:text-7xl mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          DEVORICA
        </h1>
        <p className="text-gray-400 text-xl font-light mb-12 max-w-2xl mx-auto">
          World-Class Enterprise Ecosystem. Scalable. Secure. Supreme.
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all">
            Enter Platform
          </button>
          <button className="px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-all">
            Documentation
          </button>
        </div>
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />
    </main>
  );
}
