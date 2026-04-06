'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Globe2, 
  Zap, 
  ArrowUpRight,
  Quote,
  Building2
} from 'lucide-react'

// 1. CLIENT DATA - High-quality real-world placeholder logos
const CLIENTS = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", industry: "Technology" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", industry: "E-commerce" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", industry: "Software" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", industry: "Streaming" },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg", industry: "Automotive" },
  { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg", industry: "Hospitality" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_with_text.svg", industry: "Media" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_Corporate_logo.svg", industry: "Creative" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg", industry: "Collaboration" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg", industry: "CRM" },
  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg", industry: "Hardware" },
  { name: "Nvidia", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg", industry: "AI/GPU" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", industry: "Enterprise" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", industry: "Database" },
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", industry: "FinTech" },
  { name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg", industry: "Payments" },
  { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg", industry: "Finance" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", industry: "Social" },
  { name: "Twitter", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg", industry: "Social" },
  { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg", industry: "Logistics" },
]

export default function OurClients() {
  return (
    <section className="relative min-h-screen bg-[#020314] pt-64 pb-32 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2B2E83]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4A89C8]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* --- 1. HEADER SECTION --- */}
        <div className="max-w-4xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#4A89C8]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Global Partners</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-10"
          >
            Trusted by the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white italic">Industry Leaders.</span>
          </motion.h2>
          
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            We partner with visionary startups and established giants to build the technical infrastructure that defines their market success.
          </p>
        </div>

        {/* --- 2. LOGO GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
          {CLIENTS.map((client, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-[#020314] h-48 flex flex-col items-center justify-center p-8 hover:bg-white/[0.02] transition-colors"
            >
              <div className="relative h-12 w-full flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-[120px] object-contain opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Hover Information */}
              <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#4A89C8]">{client.industry}</span>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-white/[0.03] rounded-bl-3xl scale-0 group-hover:scale-100 transition-transform origin-top-right" />
            </motion.div>
          ))}
        </div>

        {/* --- 3. METRICS SECTION --- */}
        <div className="grid md:grid-cols-3 gap-12 mt-32">
          <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col gap-4">
            <Globe2 className="text-[#4A89C8] w-8 h-8" />
            <h3 className="text-2xl font-bold text-white tracking-tight">Global Footprint</h3>
            <p className="text-slate-500 text-sm font-light leading-relaxed">Providing high-velocity software engineering and BPO solutions across 12 countries and 4 continents.</p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col gap-4">
            <Zap className="text-[#4A89C8] w-8 h-8" />
            <h3 className="text-2xl font-bold text-white tracking-tight">Rapid Deployment</h3>
            <p className="text-slate-500 text-sm font-light leading-relaxed">Our agile implementation protocol allows for MVP delivery in as little as 12 weeks for our startup partners.</p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col gap-4">
            <Building2 className="text-[#4A89C8] w-8 h-8" />
            <h3 className="text-2xl font-bold text-white tracking-tight">Enterprise Stability</h3>
            <p className="text-slate-500 text-sm font-light leading-relaxed">Managing complex Core ERP and Edge IoT systems for industries with 99.99% uptime requirements.</p>
          </div>
        </div>

        {/* --- 4. TESTIMONIAL FEATURE --- */}
        <div className="mt-32 relative p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-[#2B2E83]/20 to-transparent border border-white/5 overflow-hidden">
          <Quote className="absolute top-10 right-10 w-32 h-32 text-white/5" />
          <div className="max-w-3xl relative z-10">
            <p className="text-2xl md:text-4xl text-white font-light italic leading-tight mb-10">
              "TechConnect Global doesn't just build software; they engineer the future. Their Cloud Native approach allowed us to scale from zero to millions of requests without a single infrastructure failure."
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-[#4A89C8]" />
              <div>
                <p className="text-white font-bold tracking-tight">Director of Engineering</p>
                <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Global FinTech Leader</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- 5. CTA --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 py-20 border-t border-white/5 text-center"
        >
          <h4 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tighter">Ready to join our network?</h4>
          <button className="inline-flex items-center gap-3 px-12 py-6 rounded-full bg-white text-black font-black text-[12px] uppercase tracking-[0.3em] hover:bg-[#4A89C8] hover:text-white transition-all group">
            Start Your Journey
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}