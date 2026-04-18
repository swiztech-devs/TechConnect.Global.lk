"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SL_PARTNERS = [
  { name: 'Kanrich Finance', src: '/img/c-logo/Kanrich-logo.png' },
  { name: 'Integra Rail Resources (IRR)', src: '/img/c-logo/Irr.png' },
  { name: 'Luminara Lifestyle Pvt Ltd', src: '/img/c-logo/Luminara-Lifestyle.png' },
  { name: 'Daraz', src: '/img/c-logo/Daraz.png' },
  { name: 'A4 Tours', src: '/img/c-logo/A4Tours.png' },
  { name: 'Luminara Sky Lounge Pvt Ltd', src: '/img/c-logo/Luminara-Sky.png' },
  { name: 'Luminara Global Pvt Ltd', src: '/img/c-logo/Luminara-Global.png' },
  { name: 'VMP Agri', src: '/img/c-logo/VMP.png' },
  { name: 'Ansi Pol Travel', src: '/img/c-logo/Ansi-Pol.png' },
  { name: 'Sevenseas Group', src: '/img/c-logo/Sevenseas.png' },
  { name: 'YUSUF BHAI', src: '/img/c-logo/yusuf-bhai.jpg' },
  { name: 'GENIUS Hospital', src: '/img/c-logo/Genius.png' },
  { name: 'MEDI SHINE Hospital', src: '/img/c-logo/medi-shine.png' },
  { name: 'The Life Pharmacy', src: '/img/c-logo/Life.png' },
  { name: 'Medi Safe Medical Center', src: '/img/c-logo/medisafe.png' },
  { name: 'FPS Lanka Pvt Ltd', src: '/img/c-logo/FPS-Lanka.png' },
  { name: 'Travel Investments', src: '/img/c-logo/Travel-Investments.png' },
  { name: 'Swizt Global Recuritment', src: '/img/c-logo/Swizt-Global.png' },
  { name: 'ITNIOTECH', src: '/img/c-logo/ITNIOTECH.png' },
  { name: 'Pacific Cables', src: '/img/c-logo/pacific-cables.png' },
  { name: 'RAASA', src: '/img/c-logo/raasa.png' },
  { name: 'SWIZT ALAMANA TRADING INTERNATIONAL', src: '/img/c-logo/swizt-alamana-trading-international.png' },
  { name: 'The Granton Group', src: '/img/c-logo/granton.png' },
  { name: 'Dammika', src: '/img/c-logo/Dammika-s.png' },
  { name: 'TUBE MAKERS', src: '/img/c-logo/tubemakers.png' },
  { name: 'MET FRAME', src: '/img/c-logo/met.png' },
  { name: 'Track My Savings', src: '/img/c-logo/TrackMySavings.png' },
];

const ALL_LOGOS = [...SL_PARTNERS, ...SL_PARTNERS];

export function TrustBar() {
  return (
    <section className="relative py-24 bg-[#020314] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4A89C8]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 mb-16 relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-black text-slate-200 uppercase tracking-[0.6em]"
        >
          Powering the Next-Gen Infrastructure for Local Leaders
        </motion.p>
      </div>

      <div className="relative flex items-center overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#020314] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#020314] to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex gap-8 md:gap-12 whitespace-nowrap px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40, 
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {ALL_LOGOS.map((company, i) => (
            <div key={i} className="flex items-center justify-center shrink-0">
              <div className="relative group">
                <div className="absolute -inset-2 bg-white/5 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative h-16 md:h-20 w-36 md:w-44 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center p-4 transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:border-white/30 shadow-2xl">
                  <div className="relative h-full w-full">
                    <Image 
                      src={company.src} 
                      alt={`${company.name} logo`}
                      fill
                      sizes="(max-width: 768px) 144px, 176px"
                      className="object-contain transition-all duration-500 group-hover:brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-full bg-[radial-gradient(circle_at_center,rgba(74,137,200,0.08)_0%,transparent_80%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4A89C8]/20 to-transparent" />
    </section>
  );
}