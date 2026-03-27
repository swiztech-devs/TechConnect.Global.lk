"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { LayoutDashboard, Cpu, Cloud, Code2, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    title: "Core ERP",
    description: "Enterprise resource planning systems built for 2026 global scale.",
    icon: <LayoutDashboard className="w-8 h-8" />,
    bgImage: "/img/Service-1.png" 
  },
  {
    title: "Edge IoT",
    description: "Ultra-low latency industrial monitoring and smart device orchestration.",
    icon: <Cpu className="w-8 h-8" />,
    bgImage: "/img/Service-2.png" 
  },
  {
    title: "Cloud Native",
    description: "Resilient serverless architectures and high-availability infrastructure.",
    icon: <Cloud className="w-8 h-8" />,
    bgImage: "/img/Service-3.png" 
  },
  {
    title: "BPO Solutions",
    description: "Intelligent process outsourcing driven by AI and automated efficiency.",
    icon: <Code2 className="w-8 h-8" />,
    bgImage: "/img/Service-4.png" 
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export function Services() {
  return (
    <section className="relative py-32 bg-[#020314] overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:45px_45px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              The Four <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] via-white to-[#4A89C8] bg-[length:200%_auto] animate-text-shimmer">
                Service Pillars.
              </span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="text-slate-500 font-black tracking-[0.4em] uppercase text-[10px] pb-2 border-b border-white/10"
          >
            // 2026 Systems Architecture
          </motion.div>
        </div>

        {/* SERVICES GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -20 }}
              className="group relative min-h-[450px] rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col p-8 transition-all duration-700"
            >
              {/* --- IMAGE LAYER START --- */}
              <div 
                className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${service.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* GRADIENT OVERLAY: 
                   This ensures text is always readable regardless of the image brightness.
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020314] via-[#020314]/80 to-[#020314]/40" />
              </div>
              {/* --- IMAGE LAYER END --- */}

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Box */}
                <div className="mb-auto">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-xl group-hover:border-[#4A89C8]/50 group-hover:bg-[#4A89C8]/10 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>

                {/* Content Area */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-[#4A89C8] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 font-light leading-relaxed text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </p>

                  <div className="pt-6 flex items-center justify-between border-t border-white/5 mt-6">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#4A89C8] font-black">
                      Operational Specs
                    </span>
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#4A89C8] transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Glow Effect on Hover */}
              <div className="absolute inset-0 bg-[#4A89C8]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}