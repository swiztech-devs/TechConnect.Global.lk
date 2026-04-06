'use client'

import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { ShieldCheck, Globe, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-[#020314] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#2B2E83]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4A89C8]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* MAIN NAVIGATION GRID */}
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
              <a href="mailto:pm@mediconnect.com.lk" className="flex items-center gap-3 text-slate-400 hover:text-[#4A89C8] transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#4A89C8]/50">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">pm@mediconnect.com.lk</span>
              </a>
              <a href="tel:+94707993375" className="flex items-center gap-3 text-slate-400 hover:text-[#4A89C8] transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#4A89C8]/50">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">+94 70 799 3375</span>
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
            { title: 'Platform', links: ['About', 'Our Services', 'Our Projects', 'Our Clients'] },
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

        {/* SYSTEM STATUS & COPYRIGHT */}
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