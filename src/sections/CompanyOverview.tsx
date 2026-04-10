"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/Components/ui/Button';

const NetworkBackground = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      opacity: Math.random() * 0.5,
      duration: Math.random() * 10 + 10,
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `linear-gradient(to right, #4A89C81a 1px, transparent 1px), linear-gradient(to bottom, #4A89C81a 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#4A89C8] rounded-full"
          initial={{ 
            x: `${p.x}%`, 
            y: `${p.y}%`,
            opacity: p.opacity
          }}
          animate={{
            x: [`${p.x}%`, `${p.x2}%`],
            y: [`${p.y}%`, `${p.y2}%`],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export function CompanyOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
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

  const imageContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const imageItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const OVERVIEW_GALLERY = [
    {
      title: "Precision Engineering",
      src: "/img/team/engineering.jpg", 
      span: "col-span-1 row-span-1"
    },
    {
      title: "Cloud Infrastructure",
      src: "/img/team/cloud.jpg", 
      span: "col-span-1 row-span-2"
    },
    {
      title: "IoT Intelligence",
      src: "/img/team/iot.jpg", 
      span: "col-span-1 row-span-2"
    },
    {
      title: "Secure Scaling",
      src: "/img/team/secure.jpeg", 
      span: "col-span-1 row-span-1"
    }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-[#020314] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2B2E83]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4A89C8]/5 blur-[120px] rounded-full pointer-events-none" />

      <NetworkBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="relative z-10 space-y-10"
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

          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 grid-rows-3 gap-4 h-[600px] relative z-10"
          >
            {OVERVIEW_GALLERY.map((item, index) => (
              <motion.div
                key={index}
                variants={imageItemVariants}
                className={`${item.span} relative group rounded-3xl overflow-hidden border border-white/5 bg-[#05061b]`}
              >
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#020314] via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                <motion.div 
                   animate={{ y: ["-100%", "200%"] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#4A89C8]/50 to-transparent z-10 pointer-events-none"
                />

                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h4>
                </div>
                <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none group-hover:border-[#4A89C8]/50 transition-colors duration-500" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}