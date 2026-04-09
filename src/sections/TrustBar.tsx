"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SL_PARTNERS = [
  { name: 'Dialog Axiata', src: '/img/c-logo/Dialog-logo.png' },
  { name: 'John Keells Holdings', src: '/img/c-logo/jkh.png' },
  { name: 'Hemas Holdings', src: '/img/c-logo/hemas.jpg' },
  { name: 'Commercial Bank', src: '/img/c-logo/combank.png' },
  { name: 'Hayleys PLC', src: '/img/c-logo/hayleys.webp' },
  { name: 'MAS Holdings', src: '/img/c-logo/mas.png' },
  { name: 'Brandix', src: '/img/c-logo/brandix.png' },
  { name: 'Sampath Bank', src: '/img/c-logo/sampath.png' },
  { name: 'Hatton National Bank', src: '/img/c-logo/hnb.png' },
  { name: 'SriLankan Airlines', src: '/img/c-logo/SriLankan_Airlines.png' },
  { name: 'Aitken Spence', src: '/img/c-logo/aitken.png' },
  { name: 'Softlogic', src: '/img/c-logo/softlogic.jpg' },
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
        {/* Cinematic Side Masks */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#020314] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#020314] to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex gap-20 md:gap-32 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35, 
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {ALL_LOGOS.map((company, i) => (
            <div key={i} className="flex items-center justify-center shrink-0">
              <div className="relative group">
                <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative h-10 md:h-12 w-32 md:w-40">
                  <Image 
                    src={company.src} 
                    alt={`${company.name} logo`}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-contain transition-all duration-500 hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-full bg-[radial-gradient(circle_at_center,rgba(74,137,200,0.05)_0%,transparent_80%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4A89C8]/20 to-transparent" />
    </section>
  );
}