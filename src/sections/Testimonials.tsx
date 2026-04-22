"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, Terminal } from 'lucide-react';

const TESTIMONIALS = [
  { name: "Adrian Chen", role: "CTO, Nexus Corp", content: "TechConnect's ERP integration reduced our operational latency by 40% in the first quarter. Exceptional engineering.", rating: 5 },
  { name: "Sarah Jenkins", role: "VP of Operations", content: "The most robust IoT orchestration we've ever deployed. Their edge computing logic is years ahead of the market.", rating: 5 },
  { name: "Marcus Thorne", role: "Senior Architect", content: "Clean code, resilient architectures, and a team that understands global scalability. Highly recommended.", rating: 5 },
  { name: "Elena Rodriguez", role: "CEO, DataStream", content: "Moving to their Cloud-Native solution was the best strategic move we made this year. Zero downtime migration.", rating: 5 },
  { name: "David Wu", role: "Director of IT", content: "Technical support is elite. They don't just fix bugs; they optimize the entire system performance.", rating: 5 },
  { name: "Jessica Vane", role: "Product Lead", content: "The BPO automation they built for us saved 2000+ manual hours monthly. The ROI was almost immediate.", rating: 5 },
  { name: "Liam O'Shea", role: "Infrastructure Manager", content: "Total digital sovereignty. We finally have a tech partner that respects our data privacy protocols.", rating: 5 },
  { name: "Aria Sterling", role: "Founder, Fintech Lab", content: "Sophisticated, reliable, and high-velocity. TechConnect is the heartbeat of our technical stack.", rating: 5 },
];

export function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 4;
  const totalPages = Math.ceil(TESTIMONIALS.length / reviewsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const currentReviews = TESTIMONIALS.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  return (
    <section className="relative py-32 bg-[#020314] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4A89C8]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <Terminal className="w-3 h-3 text-[#4A89C8]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Trusted Intelligence</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter text-left">
              Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white">Global Impact.</span>
            </h2>
          </motion.div>

          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <div className="flex flex-col items-start md:items-end">
              <span className="text-2xl font-black text-white leading-none text-left md:text-right">8+</span>
              <span className="text-[9px] font-bold text-[#4A89C8] uppercase tracking-widest text-left md:text-right">Enterprise Reviews</span>
            </div>
            <div className="flex gap-2">
              <button onClick={prevPage} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-[#4A89C8] transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextPage} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-[#4A89C8] transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[450px]">
          <AnimatePresence mode="wait">
            {currentReviews.map((item, idx) => (
              <motion.div
                key={`${currentPage}-${idx}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl hover:border-[#4A89C8]/30 transition-all text-left"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-[#4A89C8]/10 transition-colors" />
                
                <div className="flex gap-1 mb-6 justify-start">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#4A89C8] text-[#4A89C8]" />
                  ))}
                </div>

                <p className="text-slate-300 text-lg font-light leading-relaxed mb-8 italic text-left">
                  &quot;{item.content}&quot;
                </p>

                <div className="flex items-center gap-4 border-t border-white/5 pt-6 justify-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2B2E83] to-[#4A89C8] flex items-center justify-center font-bold text-white shadow-lg shrink-0">
                    {item.name[0]}
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-bold tracking-tight text-left">{item.name}</h4>
                    <p className="text-[#4A89C8] text-[10px] font-black uppercase tracking-widest text-left">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center md:justify-start gap-2 mt-12">
          {[...Array(totalPages)].map((_, i) => (
            <div 
              key={i} 
              className={`h-1 rounded-full transition-all duration-500 ${i === currentPage ? 'w-8 bg-[#4A89C8]' : 'w-2 bg-white/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}