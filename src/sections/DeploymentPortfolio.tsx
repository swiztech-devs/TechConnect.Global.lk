"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Enterprise Finance ERP",
    category: "Core ERP",
    description: "Total ERP solution with all modules deployed across 35 island-wide branches for Kanrich Finance.",
    image: "/img/c-logo/Kanrich-logo.png", 
    tags: ["Oracle", "Java", "FinTech"]
  },
  {
    title: "Heavy Industry Resource ERP",
    category: "Core ERP",
    description: "Full-scale enterprise resource planning system managing 1800+ employees for Integra Rail Resources.",
    image: "/img/c-logo/Irr.png",
    tags: ["Next.js", "PostgreSQL", "Scalable"]
  },
  {
    title: "Logistics Automation Hub",
    category: "Specialized Modules",
    description: "Advanced Warehouse Management and Distribution module architected for high-velocity e-commerce.",
    image: "/img/c-logo/Daraz.png",
    tags: ["Node.js", "Warehouse", "Logistics"]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const projectVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
  }
};

export function DeploymentPortfolio() {
  return (
    <section className="relative py-32 bg-[#020314] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4A89C8]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white">scale.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md font-light leading-relaxed">
              Proven digital infrastructures deployed for industry-leading organizations.
            </p>
          </motion.div>
          
          <Link href="/our-projects">
            <motion.button 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 text-white font-bold tracking-[0.2em] uppercase text-[10px] border-b border-[#4A89C8]/50 pb-2 transition-all group"
            >
              Explore Portfolio <ArrowRight className="w-4 h-4 text-[#4A89C8] group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </Link>
        </header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              variants={projectVariants}
              className="group relative"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white shadow-2xl flex items-center justify-center p-12">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-contain bg-no-repeat bg-center m-12"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>

                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#020314]/60 backdrop-blur-xl border border-white/10 rounded-full text-[9px] text-blue-100 font-black tracking-widest uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-3 px-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#4A89C8] font-bold text-[10px] uppercase tracking-[0.4em]">
                    {project.category}
                  </span>
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#4A89C8]/20 transition-colors">
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-all" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white group-hover:text-[#4A89C8] transition-colors tracking-tight leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 font-light text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-[#2B2E83]/10 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}