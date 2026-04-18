'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ShieldCheck, 
  Globe2, 
  Zap, 
  ArrowUpRight,
  Quote,
  Building2,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react'

const CLIENTS = [
  { name: 'Kanrich Finance', logo: '/img/c-logo/Kanrich-logo.png', industry: "Finance" },
  { name: 'Integra Rail Resources (IRR)', logo: '/img/c-logo/Irr.png', industry: "Industrial" },
  { name: 'Luminara Lifestyle Pvt Ltd', logo: '/img/c-logo/Luminara-Lifestyle.png', industry: "Retail" },
  { name: 'Daraz', logo: '/img/c-logo/Daraz.png', industry: "E-commerce" },
  { name: 'A4 Tours', logo: '/img/c-logo/A4Tours.png', industry: "Tourism" },
  { name: 'Luminara Sky Lounge Pvt Ltd', logo: '/img/c-logo/Luminara-Sky.png', industry: "Hospitality" },
  { name: 'Luminara Global Pvt Ltd', logo: '/img/c-logo/Luminara-Global.png', industry: "Supply Chain" },
  { name: 'VMP Agri', logo: '/img/c-logo/VMP.png', industry: "Agriculture" },
  { name: 'Ansi Pol Travel', logo: '/img/c-logo/Ansi-Pol.png', industry: "Tourism" },
  { name: 'Sevenseas Group', logo: '/img/c-logo/Sevenseas.png', industry: "Conglomerate" },
  { name: 'YUSUF BHAI', logo: '/img/c-logo/yusuf-bhai.jpg', industry: "Finance" },
  { name: 'GENIUS Hospital', logo: '/img/c-logo/Genius.png', industry: "Healthcare" },
  { name: 'MEDI SHINE Hospital', logo: '/img/c-logo/medi-shine.png', industry: "Healthcare" },
  { name: 'The Life Pharmacy', logo: '/img/c-logo/Life.png', industry: "Healthcare" },
  { name: 'Medi Safe Medical Center', logo: '/img/c-logo/medisafe.png', industry: "Healthcare" },
  { name: 'FPS Lanka Pvt Ltd', logo: '/img/c-logo/FPS-Lanka.png', industry: "Logistics" },
  { name: 'Travel Investments', logo: '/img/c-logo/Travel-Investments.png', industry: "Tourism" },
  { name: 'Swizt Global Recuritment', logo: '/img/c-logo/Swizt-Global.png', industry: "Human Resources" },
  { name: 'ITNIOTECH', logo: '/img/c-logo/ITNIOTECH.png', industry: "Technology" },
  { name: 'Pacific Cables', logo: '/img/c-logo/pacific-cables.png', industry: "Manufacturing" },
  { name: 'RAASA', logo: '/img/c-logo/raasa.png', industry: "Retail" },
  { name: 'SWIZT ALAMANA TRADING INTERNATIONAL', logo: '/img/c-logo/swizt-alamana-trading-international.png', industry: "Trading" },
  { name: 'The Granton Group', logo: '/img/c-logo/granton.png', industry: "Marketing" },
  { name: 'Dammika', logo: '/img/c-logo/Dammika-s.png', industry: "Personal" },
  { name: 'TUBE MAKERS', logo: '/img/c-logo/tubemakers.png', industry: "Manufacturing" },
  { name: 'MET FRAME', logo: '/img/c-logo/met.png', industry: "Manufacturing" },
  { name: 'Track My Savings', logo: '/img/c-logo/TrackMySavings.png', industry: "Fintech" },
]

const TESTIMONIALS = [
  { name: "Adrian Chen", role: "CTO", company: "Nexus Corp", content: "TechConnect's ERP integration reduced our operational latency by 40% in the first quarter. Exceptional engineering.", rating: 5 },
  { name: "Sarah Jenkins", role: "VP of Operations", company: "MediConnect", content: "The most robust IoT orchestration we've ever deployed. Their edge computing logic is years ahead of the market.", rating: 5 },
  { name: "Marcus Thorne", role: "Senior Architect", company: "Tech Industries", content: "Clean code, resilient architectures, and a team that understands global scalability. Highly recommended.", rating: 5 },
  { name: "Elena Rodriguez", role: "CEO", company: "DataStream", content: "Moving to their Cloud-Native solution was the best strategic move we made this year. Zero downtime migration.", rating: 5 },
  { name: "David Wu", role: "Director of IT", company: "Fintech Lab", content: "Technical support is elite. They don't just fix bugs; they optimize the entire system performance.", rating: 5 }
]

const BackgroundParticles = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
        initial={{ x: Math.random() * 100 + "%", y: "110%", opacity: 0 }}
        animate={{ y: "-10%", opacity: [0, 1, 0] }}
        transition={{ duration: Math.random() * 15 + 10, repeat: Infinity, ease: "linear" }}
      />
    ))}
  </div>
)

export default function OurClients() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-[#020314] pt-64 pb-32 overflow-hidden text-white">
      <BackgroundParticles />

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2B2E83]/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4A89C8]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="max-w-4xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#4A89C8]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200">Local Excellence</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-10"
          >
            Trusted by the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-blue-200 italic">Market Leaders.</span>
          </motion.h2>
          
          <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl bg-[#020314]/40 backdrop-blur-sm p-4 rounded-xl border border-white/5">
            We engineer the digital backbone for Sri Lanka&apos;s most influential enterprises, bridging the gap between high-velocity technology and sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
          {CLIENTS.map((client, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.02 }}
              className="group relative bg-[#05061b] h-48 flex flex-col items-center justify-center p-8 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="relative h-16 w-full flex items-center justify-center">
                <Image 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  width={140}
                  height={60}
                  className="max-h-full object-contain group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#4A89C8] bg-black/50 px-2 py-1 rounded-md border border-white/10 backdrop-blur-md">
                  {client.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-32">
          {[
            { icon: Globe2, title: "Operational Reach", text: "Empowering Sri Lankan enterprises with world-class engineering standards and robust digital architectures." },
            { icon: Zap, title: "Velocity Deployment", text: "Our specialized implementation protocols deliver complex ERP and IoT solutions in record-breaking timeframes." },
            { icon: Building2, title: "Enterprise Reliability", text: "Maintaining critical local infrastructures with strict 99.99% uptime protocols and 24/7 technical monitoring." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, borderColor: 'rgba(74, 137, 200, 0.4)' }}
              className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col gap-4 backdrop-blur-md transition-all shadow-xl"
            >
              <item.icon className="text-[#4A89C8] w-8 h-8" />
              <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 relative p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-[#2B2E83]/30 via-[#020314] to-transparent border border-white/10 overflow-hidden backdrop-blur-md shadow-2xl min-h-[450px] flex items-center">
          <Quote className="absolute top-10 right-10 w-32 h-32 text-white/5" />
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl relative z-10"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#4A89C8] text-[#4A89C8]" />
                ))}
              </div>
              
              <p className="text-2xl md:text-4xl text-slate-100 font-light italic leading-tight mb-10">
                &quot;{TESTIMONIALS[activeTestimonial].content}&quot;
              </p>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#4A89C8]/20 border-2 border-[#4A89C8] flex items-center justify-center text-[#4A89C8] font-bold text-xl uppercase">
                  {TESTIMONIALS[activeTestimonial].name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-tight text-lg">{TESTIMONIALS[activeTestimonial].name}</h4>
                  <p className="text-blue-400 text-xs font-black uppercase tracking-widest">
                    {TESTIMONIALS[activeTestimonial].role} // {TESTIMONIALS[activeTestimonial].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-10 right-10 flex gap-4">
              <button 
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="p-3 rounded-full border border-white/10 hover:bg-[#4A89C8] hover:border-[#4A89C8] transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
                className="p-3 rounded-full border border-white/10 hover:bg-[#4A89C8] hover:border-[#4A89C8] transition-all"
              >
                <ChevronRight size={20} />
              </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 py-20 border-t border-white/10 text-center"
        >
          <h4 className="text-3xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready to join the elite?</h4>
          <Link href="/contact">
            <button className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-white text-black font-black text-[13px] uppercase tracking-[0.3em] hover:bg-[#4A89C8] hover:text-white transition-all duration-500 group shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Start Your Project
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}