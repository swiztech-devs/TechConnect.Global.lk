"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Simulate a loading progress for cinematic effect
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Small delay before closing to show 100%
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2; 
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-[#020314] flex flex-col items-center justify-center"
        >
          {/* Background Ambient Glow */}
          <div className="absolute w-[500px] h-[500px] bg-[#2B2E83]/20 blur-[120px] rounded-full" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Image Placeholder */}
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src="/img/Logo-1.jpeg"
              className="h-16 w-auto object-contain mb-12 rounded-xl"
              alt="Initializing..."
            />

            {/* Technical Progress Bar */}
            <div className="w-64 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#2B2E83] to-[#4A89C8]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Status Text */}
            <div className="mt-6 flex flex-col items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#4A89C8] animate-pulse">
                System Initializing
              </span>
              <span className="text-[10px] font-mono text-white/20 tracking-widest">
                {progress}% COMPLETE
              </span>
            </div>
          </div>

          {/* Bottom Compliance Markers */}
          <div className="absolute bottom-12 flex gap-8 opacity-20">
             <div className="text-[8px] font-bold text-white tracking-widest uppercase">Encryption: Active</div>
             <div className="text-[8px] font-bold text-white tracking-widest uppercase">Protocol: 2026-X</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}