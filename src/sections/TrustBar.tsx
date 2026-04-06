"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PARTNERS = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg' },
  { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_Corporate_logo.svg' },
  { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
  { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' },
];

// Duplicate the array to create a seamless loop
const ALL_LOGOS = [...PARTNERS, ...PARTNERS];

export function TrustBar() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#020314] via-[#05071a] to-[#020314] overflow-hidden">
      
      {/* 1. TOP GLASS DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4A89C8]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-black text-white/30 uppercase tracking-[0.6em]"
        >
          Integrated with Global Tech Stacks
        </motion.p>
      </div>

      {/* 2. INFINITE LOGO MARQUEE */}
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
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
                className="h-8 md:h-10 w-auto object-contain opacity-20 brightness-0 invert hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. CENTER GLOW AMBIENCE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-full bg-[radial-gradient(circle_at_center,rgba(74,137,200,0.03)_0%,transparent_80%)] pointer-events-none" />
      
      {/* BOTTOM GLASS DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4A89C8]/20 to-transparent" />
    </section>
  );
}