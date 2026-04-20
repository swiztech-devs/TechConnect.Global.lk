"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const videoSources = [
  "/Videos/Hero-V-1.mp4", 
  "/Videos/Hero-V-2.mp4", 
  "/Videos/Hero-V-3.mp4",
];

export default function Hero() {
  const containerRef = useRef(null);
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videoSources.length);
    }, 8000); 
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#020314]"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#020314]/80 via-transparent to-[#020314]" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#020314_90%)]" />
        
        <AnimatePresence mode="wait">
          <motion.video
            key={videoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={videoSources[videoIndex]} type="video/mp4" />
          </motion.video>
        </AnimatePresence>
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center pt-64 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl mb-12"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#4A89C8] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-blue-100/60">
            TechConnect Global 2026
          </span>
        </motion.div>

        <div className="space-y-8 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(20px)", y: 40 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9] md:leading-[1.1]"
          >
            Redefining the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] via-white to-[#4A89C8] bg-[length:200%_auto] animate-text-shimmer">
              Digital Core
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed px-4"
          >
            Deploy high-velocity ERP, IoT, and Cloud ecosystems for the 
            enterprises that will lead the next decade.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="mt-32 pt-12 border-t border-white/5 w-full flex flex-wrap justify-center gap-x-12 gap-y-8"
        >
          {['ERP Solutions', 'IoT Architectures', 'Cloud Systems', 'BPO Excellence'].map((item) => (
            <div key={item} className="text-[11px] uppercase tracking-[0.5em] text-white font-black hover:text-[#4A89C8] transition-all cursor-default drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              {item}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}