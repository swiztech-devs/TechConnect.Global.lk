"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PARTNERS = [
  'Microsoft Azure', 'SAP ERP', 'AWS Cloud', 'Oracle', 
  'Google Cloud', 'Cisco IoT', 'Salesforce', 'ServiceNow',
  'Microsoft Azure', 'SAP ERP', 'AWS Cloud', 'Oracle'
];

export function TrustBar() {
  return (
    // CHANGE: Added a gradient from Hero's #020314 to a slightly deeper #01020d
    <section className="relative py-20 bg-gradient-to-b from-[#020314] via-[#05071a] to-[#020314] overflow-hidden">
      
      {/* 1. SECTION DIVIDER (Glass Line)
          This line creates a "cut" between the two sections so they don't look like one big block.
      */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4A89C8]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-black text-white/30 uppercase tracking-[0.6em]"
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>

      {/* 2. INFINITE MARQUEE */}
      <div className="relative flex overflow-hidden">
        {/* Darker side masks to increase the "tunnel" depth effect */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#05071a] via-[#05071a]/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#05071a] via-[#05071a]/80 to-transparent z-10" />

        <motion.div 
          className="flex gap-24 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25, // Slightly faster for more "energy"
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {PARTNERS.map((logo, i) => (
            <div key={i} className="flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-bold text-white/[0.07] hover:text-[#4A89C8] transition-all duration-700 cursor-default uppercase tracking-tighter">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. RADIAL SHADOW BUMP
          This adds a "glow" behind the logos so they feel like they are floating.
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(43,46,131,0.05)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
}