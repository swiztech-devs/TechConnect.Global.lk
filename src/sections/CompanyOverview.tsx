"use client";

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Shield, Zap, Cpu, Globe, Download, FileText } from 'lucide-react';
import { Button } from '@/Components/ui/Button';

// --- RIGHT SIDE: HEARTBEAT ARCHITECTURE ANIMATION ---
const ArchitectureVisual = () => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      
      {/* 1. PULSING RADIANCE (The Heartbeat Glow) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[60%] h-[60%] bg-[#4A89C8] blur-[100px] rounded-full pointer-events-none"
      />

      {/* 2. ROTATING ARTERY RINGS */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full rounded-full border border-dashed border-[#4A89C8]/10" 
      />
      
      <motion.div 
        animate={{ 
          rotate: -360,
          scale: [1, 1.03, 1] 
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute w-[75%] h-[75%] rounded-full border border-[#2B2E83]/20 shadow-[0_0_40px_rgba(43,46,131,0.05)]" 
      />

      {/* 3. FLOATING TECH NODES */}
      <div className="relative z-10 grid grid-cols-2 gap-6">
        {[
          { icon: <Shield className="w-6 h-6" />, label: "Security", color: "bg-[#2B2E83]" },
          { icon: <Zap className="w-6 h-6" />, label: "Velocity", color: "bg-[#4A89C8]" },
          { icon: <Cpu className="w-6 h-6" />, label: "Edge", color: "bg-[#2B2E83]" },
          { icon: <Globe className="w-6 h-6" />, label: "Scale", color: "bg-[#4A89C8]" },
        ].map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              delay: i * 0.2,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`${node.color} p-7 rounded-[2.5rem] border border-white/10 flex flex-col items-center gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md group`}
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              className="text-white"
            >
              {node.icon}
            </motion.div>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* 4. CENTRAL CORE */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_30px_#4A89C8]"
      />
    </div>
  );
};

// --- MAIN COMPONENT ---
export function CompanyOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    // TRIGGER DOWNLOAD: Replace with the actual path to your PDF in the /public folder
    const pdfUrl = "/documents/TechConnect-Global-Overview.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "TechConnect_Global_Overview.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section ref={ref} className="relative py-32 bg-[#020314] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2B2E83]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="text-[#4A89C8] font-black text-xs uppercase tracking-[0.5em] block">
                // Corporate Intelligence
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.05]">
                Pioneering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] via-white to-[#4A89C8] bg-[length:200%_auto] animate-text-shimmer">
                  Digital Sovereignty.
                </span>
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-400 text-xl font-light leading-relaxed max-w-xl">
              TechConnect Global Private Limited is a specialized technology powerhouse, engineering high-velocity ecosystems that integrate ERP precision and IoT intelligence.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-10 pt-10 border-t border-white/10">
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Enterprise-First</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Reliable systems optimized for long-term ROI.</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Global Reach</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Architectures designed to scale across borders.</p>
              </div>
            </motion.div>

            {/* DOWNLOAD BUTTON */}
            <motion.div variants={itemVariants} className="pt-6">
              <Button 
                onClick={handleDownload}
                className="group relative h-14 px-8 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-[#020314] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A89C8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex items-center gap-3">
                  <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-bold uppercase tracking-widest text-[11px]">Download Overview PDF</span>
                  <Download className="w-4 h-4 animate-bounce" />
                </div>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ArchitectureVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}