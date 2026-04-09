'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Cpu, Globe, Zap, ShieldCheck, Terminal } from 'lucide-react'
import Link from 'next/link' 

export default function CaseStudyPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#020314] pt-48 pb-32 overflow-hidden selection:bg-[#4A89C8]/30 text-white">
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#2B2E83]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4A89C8]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="inline-flex items-center text-slate-500 hover:text-[#4A89C8] mb-16 transition-all text-[10px] font-black uppercase tracking-[0.3em] group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Systems
          </Link>
        </motion.div>
        <div className="mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="px-4 py-1 rounded-full bg-[#4A89C8]/10 border border-[#4A89C8]/20 text-[#4A89C8] text-[9px] font-black tracking-widest uppercase">
              FinTech Architecture
            </span>
            <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase italic">Node: GlobalPay-2025</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter leading-[1.05]"
          >
            Scaling Global Payments <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] via-white to-[#4A89C8] bg-[length:200%_auto] animate-text-shimmer">
              to 10,000 TPS.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-400 font-light leading-relaxed max-w-3xl"
          >
            A deep-dive into how we migrated legacy monoliths to a distributed edge 
            architecture, maintaining zero-downtime during peak holiday volume.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32" 
        >
          {[
            { val: '10k', label: 'TPS Peak', icon: <Zap className="w-4 h-4" /> },
            { val: '12ms', label: 'P99 Latency', icon: <Globe className="w-4 h-4" /> },
            { val: '0', label: 'Downtime', icon: <ShieldCheck className="w-4 h-4" /> },
            { val: '60%', label: 'Efficiency', icon: <Cpu className="w-4 h-4" /> },
          ].map((metric, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-3xl group hover:border-[#4A89C8]/40 transition-all duration-500">
              <div className="text-[#4A89C8] mb-4 group-hover:scale-110 transition-transform">
                {metric.icon}
              </div>
              <div className="text-3xl font-black text-white mb-1 tracking-tighter">
                {metric.val}
              </div>
              <div className="text-[9px] text-slate-500 font-black uppercase tracking-widest">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="space-y-32"> 
          
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4A89C8]">01 // Challenge</div>
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-3xl font-bold tracking-tight">System Degradation at Scale</h3>
              <p className="text-slate-400 leading-relaxed font-light text-lg">
                The client&apos;s monolithic database reached critical lock-contention levels during 
                shopping events. Transaction failures were spiking at 12%, resulting in 
                millions of lost revenue and degraded brand trust.
              </p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4A89C8]">02 // Implementation</div>
            <div className="md:col-span-2">
              <div className="rounded-3xl bg-[#05061b] border border-white/10 overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-6 py-4 bg-white/5 border-b border-white/5">
                  <Terminal className="w-4 h-4 text-slate-500" />
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Edge-Router.ts</span>
                </div>
                <pre className="p-8 font-mono text-xs md:text-sm text-slate-300 overflow-x-auto leading-relaxed">
                  <code>
                    {`export default async function middleware(req: Request) {
                    const { region } = req.geo;
                    // Dynamic Edge Sharding Protocol
                    // return TechConnect.route(req, {
                    // target: \`db-\${region}.internal\`,
                    // fallback: 'core-master.internal',
                    // security: 'SOC2-Encrypted'}
                    // );}`}

                  </code>
                </pre>
              </div>
              <p className="mt-8 text-slate-400 font-light leading-relaxed">
                By moving validation logic to the regional edge, we removed 80% of the 
                computation load from the core master database, enabling horizontal scalability.
              </p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4A89C8]">03 // Final Outcome</div>
            <div className="md:col-span-2 bg-gradient-to-br from-[#2B2E83]/10 to-transparent p-10 rounded-[2.5rem] border border-white/5">
              <p className="text-xl text-white font-light leading-relaxed mb-8">
                The system successfully handled $4.2M in peak hourly volume with zero 
                failures. The flat latency profile remained stable at 12ms even under 
                150% over-capacity testing.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-[#4A89C8] font-black text-[10px] uppercase tracking-widest hover:text-white transition-all group"
              >
                Download Architecture Whitepaper
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </motion.section>

        </div>
      </div>
    </main>
  )
}