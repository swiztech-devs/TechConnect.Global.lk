'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ExternalLink, 
  Layers, 
  Calendar, 
  LineChart, 
  ShieldCheck, 
  Search,
  ArrowUpRight 
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

// 1. DATA DEFINITIONS - Startup Focused
const CATEGORIES = ["All", "Core ERP", "Edge IoT", "Cloud Native", "BPO Solutions"]

const PROJECTS = [
  {
    id: 1,
    title: "AgroStream ERP MVP",
    category: "Core ERP",
    image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2070",
    client: "Lanka Agri-Tech",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    outcome: "Streamlined 15+ farm sites",
    time: "3 Months",
    description: "A lightweight, modular ERP built for a local agricultural startup to manage fertilizer distribution and harvest tracking via mobile."
  },
  {
    id: 2,
    title: "Smart Warehouse Beacon",
    category: "Edge IoT",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
    client: "Swift-Logistics",
    stack: ["ESP32", "Node.js", "Firebase"],
    outcome: "Reduced manual audit time by 70%",
    time: "4 Months",
    description: "Low-cost IoT sensor deployment using Bluetooth beacons to track high-value asset movement within small-scale distribution centers."
  },
  {
    id: 3,
    title: "EcoDrive Serverless SaaS",
    category: "Cloud Native",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
    client: "EcoDrive Global",
    stack: ["AWS Lambda", "React", "Tailwind"],
    outcome: "Zero infra costs during dev",
    time: "5 Months",
    description: "A cloud-native carbon footprint calculator for logistics fleets, scaling from zero to 5,000 requests per second instantly."
  },
  {
    id: 4,
    title: "Tech-Ops Outsourcing",
    category: "BPO Solutions",
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071",
    client: "HealthSync UK",
    stack: ["Freshdesk", "Zapier", "Slack"],
    outcome: "100% SLA compliance maintained",
    time: "Continuous",
    description: "Providing 24/7 level 1 technical support and database management for a UK-based healthcare startup."
  },
  {
    id: 5,
    title: "RetailCore Mini-ERP",
    category: "Core ERP",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    client: "Urban Fashion Hub",
    stack: ["React Native", "Node.js", "MongoDB"],
    outcome: "Integrated 5 boutique outlets",
    time: "4 Months",
    description: "A boutique-specific ERP focused on inventory alerts and cross-store stock transfers for small retail chains."
  },
  {
    id: 6,
    title: "Aura Home Automation",
    category: "Edge IoT",
    // FIXED: Using a more robust, guaranteed Unsplash image for IoT Smart Home
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070",
    client: "Aura Smart Homes",
    stack: ["Arduino", "WebSocket", "Flutter"],
    outcome: "Launch ready in 16 weeks",
    time: "4 Months",
    description: "Rapid prototyping and software bridge for an IoT home lighting startup, enabling mobile control via secure real-time tunnels."
  }
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  // Search and Filter Logic
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = filter === "All" || project.category === filter;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <section className="relative min-h-screen bg-[#020314] pt-64 pb-32 overflow-hidden">
      
      {/* Cinematic Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2B2E83]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4A89C8]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* --- 1. HEADER --- */}
        <div className="max-w-3xl mb-20">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4A89C8]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Startup Agility</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-8">
            Disruptive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white italic inline-block pb-2">Digital Builds.</span>
          </motion.h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            TechConnect Global specializes in building high-impact MVPs and scalable software for the next generation of startups.
          </p>
        </div>

        {/* --- 2. FILTER & SEARCH BAR --- */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 border-b border-white/5 pb-10">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-[#4A89C8] text-white shadow-[0_0_20px_rgba(74,137,200,0.3)]' 
                  : 'bg-white/5 text-slate-500 hover:bg-white/10 hover:text-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative group min-w-[300px]">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-[#4A89C8] transition-colors">
              <Search size={16} />
            </div>
            <input 
              type="text"
              placeholder="SEARCH PROJECT PROTOCOL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-[10px] font-bold uppercase tracking-widest text-white placeholder:text-slate-600 outline-none focus:border-[#4A89C8]/50 focus:bg-white/[0.08] transition-all"
            />
          </div>
        </div>

        {/* --- 3. PROJECTS GRID --- */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative"
                >
                  <div className="relative h-full bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#4A89C8]/30 transition-all duration-500 shadow-2xl">
                    <div className="relative h-64 w-full overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        onError={(e) => {
                          // Fallback to tech image if specific project image fails
                          e.currentTarget.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020314] via-transparent to-transparent" />
                      <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest text-[#4A89C8]">{project.category}</div>
                    </div>

                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div className="max-w-[75%]">
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{project.client}</p>
                          <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#4A89C8] transition-colors">{project.title}</h3>
                        </div>
                        <div className="flex gap-2">
                          <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#4A89C8] transition-all"><FaGithub size={16} /></a>
                          <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#4A89C8] transition-all"><ExternalLink size={16} /></a>
                        </div>
                      </div>

                      <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 line-clamp-2">{project.description}</p>

                      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5 mb-8">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-slate-500"><Layers size={12} /><span className="text-[9px] font-black uppercase tracking-widest">Stack</span></div>
                          <p className="text-[10px] text-white font-mono truncate">{project.stack.join(', ')}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-slate-500"><Calendar size={12} /><span className="text-[9px] font-black uppercase tracking-widest">Build Speed</span></div>
                          <p className="text-[10px] text-white font-mono">{project.time}</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#4A89C8]/5 border border-[#4A89C8]/10 flex items-center gap-3">
                        <LineChart className="text-[#4A89C8]" size={16} /><span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{project.outcome}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full py-20 text-center">
                <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">No matching project protocols found.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* --- 4. CTA FOOTER --- */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-32 p-12 rounded-[3rem] bg-gradient-to-r from-white/[0.02] to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">Need an MVP in record time?</h4>
            <p className="text-slate-500 text-sm font-light">Join other founders building with TechConnect Global in 2026.</p>
          </div>
          <button className="flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] hover:bg-[#4A89C8] hover:text-white transition-all group">
            Start Your Build
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}