"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Database, Shield, Workflow, Zap, Box, Layers, Cpu, Cloud } from "lucide-react";

const WorkflowAnimation = () => (
  <div className="mt-8 w-full h-32 bg-white rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl">
    <div className="flex items-center gap-3 md:gap-4 relative z-10">
      <div className="w-10 h-10 rounded-xl bg-[#2B2E83] border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(43,46,131,0.3)]">
        <Database className="w-5 h-5 text-white" />
      </div>

      <div className="w-12 md:w-16 h-[2px] bg-slate-100 relative overflow-hidden">
        <motion.div
          animate={{ x: [-40, 80] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-transparent via-[#4A89C8] to-transparent"
        />
      </div>

      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-12 h-12 rounded-xl bg-[#4A89C8] flex items-center justify-center shadow-[0_0_20px_rgba(74,137,200,0.3)]"
      >
        <Cpu className="w-6 h-6 text-white" />
      </motion.div>

      <div className="w-12 md:w-16 h-[2px] bg-slate-100 relative overflow-hidden">
        <motion.div
          animate={{ x: [-40, 80] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-transparent via-[#4A89C8] to-transparent"
        />
      </div>

      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
        <Cloud className="w-5 h-5 text-[#4A89C8]" />
      </div>
    </div>
    
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,137,200,0.05)_0%,transparent_70%)]" />
  </div>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

export function BentoGrid() {
  return (
    <section className="py-32 relative bg-[#020314] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2B2E83]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4A89C8]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter text-left">
            Complexity is the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white">enemy of execution.</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants} className="md:col-span-1 group relative p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-[#4A89C8]/30 transition-all duration-500 text-left">
            <Database className="w-10 h-10 text-[#4A89C8] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3 text-left">Unified Data Layer</h3>
            <p className="text-slate-400 font-light text-left">Centralize your ERP intelligence into a high-velocity source of truth.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1 group relative p-8 rounded-[2.5rem] border border-[#2B2E83]/40 bg-[#2B2E83]/10 backdrop-blur-xl hover:border-[#4A89C8]/50 transition-all duration-500 shadow-[0_0_40px_rgba(43,46,131,0.1)] text-left">
            <Zap className="w-10 h-10 text-amber-400 mb-6 animate-pulse" />
            <h3 className="text-2xl font-bold text-white mb-3 text-left">Zero Latency IoT</h3>
            <p className="text-slate-300 font-light text-left">Edge-computing architectures for mission-critical industrial scale.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1 group relative p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-[#4A89C8]/30 transition-all duration-500 text-left">
            <Shield className="w-10 h-10 text-[#4A89C8] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3 text-left">Enterprise Security</h3>
            <p className="text-slate-400 font-light text-left">Military-grade protection for global cloud infrastructures.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 group relative p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.03] backdrop-blur-xl hover:border-[#4A89C8]/30 transition-all duration-500 overflow-hidden text-left">
             <div className="flex flex-col lg:flex-row gap-8 items-start">
               <div className="flex-1 text-left">
                  <Workflow className="w-10 h-10 text-[#4A89C8] mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-3 text-left">Automated Workflows</h3>
                  <p className="text-slate-400 font-light max-w-md text-left">
                    Eliminate operational friction with AI-driven logic and seamless cross-platform orchestration.
                  </p>
               </div>
               <div className="w-full lg:w-1/2">
                  <WorkflowAnimation />
               </div>
             </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1 group relative p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-[#4A89C8]/30 transition-all duration-500 text-left">
            <Layers className="w-10 h-10 text-[#4A89C8] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3 text-left">Scalable Cloud</h3>
            <p className="text-slate-400 font-light text-left">Future-proof infrastructure that grows with your global ambition.</p>
            <Box className="absolute bottom-6 right-6 w-5 h-5 text-white/10 group-hover:text-[#4A89C8]/40 transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}