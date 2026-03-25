'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { ArrowRight, ShieldCheck, Globe, Mail, Phone } from 'lucide-react'
import { Button } from '@/Components/ui/Button'

export function Footer() {
  return (
    <footer className="relative bg-[#020314] text-white pt-32 pb-12 overflow-hidden border-t border-white/5">
      
      {/* 1. AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#2B2E83]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4A89C8]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. FOOTER CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group p-[1px] rounded-[3rem] bg-gradient-to-r from-[#2B2E83]/40 via-white/10 to-[#4A89C8]/40 mb-32 overflow-hidden"
        >
          <div className="bg-[#020314]/95 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                Ready to build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white">the next decade?</span>
              </h2>
              <p className="text-slate-400 text-lg font-light max-w-md">
                Deploy TechConnect Global infrastructures today and lead the future of enterprise intelligence.
              </p>
            </div>
            <div className="shrink-0 group">
              <Link href="Pages/Contact">
                <Button className="h-20 px-12 bg-white text-[#020314] hover:bg-[#4A89C8] hover:text-white rounded-full text-xl font-black uppercase tracking-tighter transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] group-hover:shadow-[#4A89C8]/40 border-none">
                  Initialize Now <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 3. MAIN NAVIGATION GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-24">
          
          {/* Brand Column with Contact Details */}
          <div className="col-span-2 lg:col-span-2 space-y-8">
            <Link href="/" className="inline-block group">
              <img 
                src="/img/Logo-1.jpeg" 
                alt="TechConnect Global Logo" 
                className="h-12 w-auto object-contain rounded-lg brightness-110 group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-light">
              Architecting high-performance systems for the global enterprise. 
              Engineering excellence from core to edge.
            </p>

            {/* CONTACT DETAILS AREA */}
            <div className="space-y-4 pt-2">
              <a href="mailto:info@techconnectglobal.com" className="flex items-center gap-3 text-slate-400 hover:text-[#4A89C8] transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#4A89C8]/50">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">info@techconnectglobal.com</span>
              </a>
              <a href="tel:+94112345678" className="flex items-center gap-3 text-slate-400 hover:text-[#4A89C8] transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#4A89C8]/50">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">+94 11 234 5678</span>
              </a>
            </div>

            <div className="flex gap-4 pt-2">
              {[FaTwitter, FaLinkedin, FaGithub].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#4A89C8] hover:border-[#4A89C8] transition-all text-slate-400 hover:text-white">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links Columns */}
          {[
            { title: 'Platform', links: ['About', 'Solutions', 'Insights', 'Contact'] },
            { title: 'Core Tech', links: ['ERP Systems', 'Edge IoT', 'Cloud Native', 'AI Workflows'] },
            { title: 'Company', links: ['Careers', 'Philosophy', 'Press', 'Case Studies'] },
            { title: 'Legal', links: ['Security', 'Privacy', 'Compliance', 'Terms'] },
          ].map((col) => (
            <div key={col.title} className="col-span-1">
              <h3 className="text-[10px] font-black text-white mb-8 uppercase tracking-[0.4em]">
                {col.title}
              </h3>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-slate-500 hover:text-[#4A89C8] transition-colors text-xs font-bold tracking-widest uppercase flex items-center gap-2 group">
                      <span className="w-0 h-px bg-[#4A89C8] transition-all duration-300 group-hover:w-4"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 4. SYSTEM STATUS & COPYRIGHT */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} TechConnect Global Pvt Ltd. 
            </p>
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-slate-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              Global Systems: Operational
            </div>
          </div>
          
          <div className="flex items-center gap-10 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" /> SOC2 COMPLIANT
            </div>
            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest">
              <Globe className="w-4 h-4" /> ISO 27001
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}