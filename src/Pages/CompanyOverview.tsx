"use client";

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Shield, Zap, Cpu, Globe } from 'lucide-react';

// --- RIGHT SIDE: SYSTEM ARCHITECTURE ANIMATION ---
const ArchitectureVisual = () => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      {/* Rotating Outer Rings */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full rounded-full border border-dashed border-[#4A89C8]/20" 
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[70%] h-[70%] rounded-full border border-[#2B2E83]/30 shadow-[0_0_30px_rgba(43,46,131,0.1)]" 
      />

      {/* Floating Tech Nodes */}
      <div className="relative z-10 grid grid-cols-2 gap-4">
        {[
          { icon: <Shield className="w-6 h-6" />, label: "Security", color: "bg-[#2B2E83]" },
          { icon: <Zap className="w-6 h-6" />, label: "Velocity", color: "bg-[#4A89C8]" },
          { icon: <Cpu className="w-6 h-6" />, label: "Edge", color: "bg-[#2B2E83]" },
          { icon: <Globe className="w-6 h-6" />, label: "Scale", color: "bg-[#4A89C8]" },
        ].map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className={`${node.color} p-6 rounded-3xl border border-white/10 flex flex-col items-center gap-3 shadow-2xl`}
          >
            <div className="text-white">{node.icon}</div>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/70">{node.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Center Core Glow */}
      <div className="absolute w-24 h-24 bg-[#4A89C8] blur-[80px] opacity-30 animate-pulse" />
    </div>
  );
};

// --- MAIN COMPONENT ---
export function CompanyOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section ref={ref} className="relative py-32 bg-[#020314] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2B2E83]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT CONTENT: OVERVIEW */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="text-[#4A89C8] font-black text-xs uppercase tracking-[0.5em]">
                // Corporate Intelligence
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
                Pioneering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] via-white to-[#4A89C8] bg-[length:200%_auto] animate-text-shimmer">
                  Digital Sovereignty.
                </span>
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-400 text-xl font-light leading-relaxed max-w-xl">
              TechConnect Global Private Limited is a specialized technology powerhouse. 
              We empower ambitious enterprises by engineering high-velocity software 
              ecosystems that integrate ERP precision, Cloud resilience, and IoT intelligence.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Enterprise-First</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Every line of code is optimized for reliability and long-term business ROI.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Global Reach</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Architectures designed to scale across borders and high-density data environments.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT: ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <ArchitectureVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}