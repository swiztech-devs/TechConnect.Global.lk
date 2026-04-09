"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, Variants, animate } from 'framer-motion';
import { CheckCircle2, Briefcase, BarChart3, Users, HeartHandshake, ShieldCheck } from "lucide-react";

const STATS_CARDS = [
  { value: 100, suffix: "+", label: "Projects Delivered", icon: <Briefcase className="w-4 h-4" /> },
  { value: 10, suffix: "+", label: "Industries Served", icon: <BarChart3 className="w-4 h-4" /> },
  { value: 50, suffix: "+", label: "Tech Experts", icon: <Users className="w-4 h-4" /> },
  { value: 98, suffix: "%", label: "Client Retention", icon: <HeartHandshake className="w-4 h-4" /> },
];

const BENEFITS = [
  "Agile precision for rapid deployment",
  "Enterprise-grade security protocols",
  "Dedicated 24/7 technical support",
  "Hyper-scalable architecture design",
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export function ValueProposition() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#020314] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: STRATEGIC CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-[#4A89C8]">
                <ShieldCheck className="w-6 h-6 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Verified Protocol</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter !leading-[1.1]">
                Why partner with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white">
                  TechConnect Global?
                </span>
              </h2>
              <p className="text-slate-400 text-xl font-light leading-relaxed max-w-xl">
                We don&apos;t just architect systems; we solve high-stakes business challenges. 
                Our team blends technical mastery with strategic foresight.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-6">
              {BENEFITS.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-2 rounded-full bg-[#4A89C8]/10 border border-[#4A89C8]/20 group-hover:bg-[#4A89C8]/30 transition-all duration-500">
                    <CheckCircle2 className="w-5 h-5 text-[#4A89C8]" />
                  </div>
                  <span className="text-slate-200 font-medium tracking-tight">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: DATA CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {STATS_CARDS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl group hover:border-[#4A89C8]/40 transition-all duration-700 overflow-hidden"
              >
                <div className="mb-6 p-3 w-fit rounded-2xl bg-[#020314] border border-white/10 group-hover:border-[#4A89C8]/30 transition-all duration-500">
                  {stat.icon}
                </div>
                
                <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-3">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-black group-hover:text-blue-100 transition-colors">
                  {stat.label}
                </p>

                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#4A89C8]/10 blur-[60px] group-hover:bg-[#4A89C8]/20 transition-all" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}