'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ShieldCheck, Mail } from 'lucide-react'

const TEAM_MEMBERS = [
  {
    name: "Marcus Sterling",
    role: "Chief Architect",
    credentials: "MSc SE, OCPJP",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    category: "Leadership"
  },
  {
    name: "Elena Rodriguez",
    role: "Systems Lead",
    credentials: "MSc SE, Bsc.SEng",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    category: "Leadership"
  },
  {
    name: "Adrian Chen",
    role: "Consultant",
    credentials: "B.(IT), OCPJP",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    category: "Consultancy"
  },
  {
    name: "Sarah Jenkins",
    role: "Senior Dev",
    credentials: "Bsc.SEng, OCPMAD",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    category: "Engineering"
  },
  {
    name: "Julian Voss",
    role: "Core Infra",
    credentials: "BICT (Hons)",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    category: "Engineering"
  },
  {
    name: "Sophia Kwok",
    role: "UI Designer",
    credentials: "Visual Arts Spec.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    category: "Creative"
  },
  {
    name: "David Park",
    role: "Full Stack",
    credentials: "Bsc.CS, OCPJP",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    category: "Engineering"
  },
  {
    name: "Aisha Khan",
    role: "QA Lead",
    credentials: "Bsc.IT, ISTQB",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400",
    category: "Engineering"
  },
  {
    name: "Leo Rossi",
    role: "Junior Dev",
    credentials: "Bsc.SEng (UG)",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    category: "Engineering"
  },
  {
    name: "Nina Gupta",
    role: "Web Dev",
    credentials: "Bsc.SE, React Spec.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    category: "Engineering"
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export function TeamSection() {
  return (
    <section className="py-32 relative bg-[#020314] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#2B2E83]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4A89C8]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Our Strength</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              Architects of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white italic">Innovation.</span>
            </h2>
          </div>
          <p className="text-slate-400 font-light max-w-sm text-sm leading-relaxed border-l border-white/10 pl-6">
            We help businesses elevate their value through custom software development, product design, and mission-critical consultancy.
          </p>
        </div>

        {/* TEAM GRID - FORCED 5x2 LAYOUT ON DESKTOP */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5"
        >
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative p-[1px] rounded-[1.5rem] bg-gradient-to-b from-white/10 to-transparent overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(43,46,131,0.15)]">
                <div className="relative bg-[#05061b] rounded-[1.5rem] overflow-hidden">
                  
                  {/* Image Container - Slightly reduced height for 5-col balance */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05061b] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-4 right-4 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      {member.category}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight truncate">{member.name}</h3>
                      <p className="text-[#4A89C8] text-[9px] font-black uppercase tracking-widest mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    <div className="h-px w-full bg-white/5" />

                    <p className="text-slate-500 text-[9px] font-mono leading-tight h-6 overflow-hidden">
                      {member.credentials}
                    </p>

                    <div className="flex gap-3 pt-1">
                      <FaLinkedin className="w-3.5 h-3.5 text-slate-600 hover:text-white transition-colors cursor-pointer" />
                      <FaGithub className="w-3.5 h-3.5 text-slate-600 hover:text-white transition-colors cursor-pointer" />
                      <Mail className="w-3.5 h-3.5 text-slate-600 hover:text-white transition-colors cursor-pointer" />
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FOOTER CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left max-w-7xl mx-auto"
        >
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Ready to expand your roadmap?</h4>
            <p className="text-slate-500 text-sm font-light">Join the engineers building the next generation of global software.</p>
          </div>
          <button className="px-8 py-3 rounded-full bg-white text-black font-black text-[10px] uppercase tracking-widest hover:bg-[#4A89C8] hover:text-white transition-all shadow-xl">
            View Open Roles
          </button>
        </motion.div>

      </div>
    </section>
  )
}