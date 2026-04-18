'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
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

const CATEGORIES = ["All", "Core ERP", "Specialized Modules", "Healthcare", "FinTech"]

const PROJECTS = [
  {
    id: 1,
    title: "Enterprise Finance ERP",
    category: "Core ERP",
    image: "/img/c-logo/Kanrich-logo.png",
    client: "Kanrich Finance Limited",
    stack: ["Oracle", "Java", "High Availability"],
    outcome: "350+ Staff, 35 Branches Managed",
    time: "Long-term Deployment",
    live: "#",
    description: "Total ERP solution with all modules deployed across 35 island-wide branches, handling high-concurrency financial operations."
  },
  {
    id: 2,
    title: "Heavy Industry Resource ERP",
    category: "Core ERP",
    image: "/img/c-logo/Irr.png",
    client: "Integra Rail Resources (IRR)",
    stack: ["Next.js", "PostgreSQL", "Scalable Microservices"],
    outcome: "Managed 1800+ Employees",
    time: "Ongoing",
    live: "#",
    description: "Full-scale enterprise resource planning system with specialized modules for large-scale rail resource logistics and labor tracking."
  },
  {
    id: 3,
    title: "Logistics Automation Hub",
    category: "Specialized Modules",
    image: "/img/c-logo/Daraz.png",
    client: "Daraz",
    stack: ["Node.js", "Warehouse Logic", "API Integration"],
    outcome: "Optimized Warehouse & Distribution",
    time: "Module Specific",
    live: "#",
    description: "Advanced Production Distribution and Warehouse Management module designed for high-velocity e-commerce fulfillment."
  },
  {
    id: 4,
    title: "Digital Healthcare Suite",
    category: "Healthcare",
    image: "/img/c-logo/medisafe.png",
    client: "Medi Safe Medical Center",
    stack: ["React", "Accounting Core", "Drug DB"],
    outcome: "Full Channeling & Drug Management",
    time: "Custom Build",
    live: "#",
    description: "A comprehensive medical center solution featuring Channeling Management, Drug Management, and an integrated Accounting Module."
  },
  {
    id: 5,
    title: "Global Finance Transmission",
    category: "FinTech",
    image: "/img/c-logo/Ansi-Pol.png",
    client: "Ansi Pol Travel",
    stack: ["Payment Gateways", "Fin-Logic"],
    outcome: "Online Payment Gateway - Israel",
    time: "Strategic Build",
    live: "#",
    description: "Specialized Finance Module and Online Payment Gateway integration specifically architected for cross-border transactions (Israel)."
  },
  {
    id: 6,
    title: "Track My Savings",
    category: "FinTech",
    image: "/img/c-logo/TrackMySavings.png",
    client: "Personal Project",
    stack: ["Mobile Tech", "Local Auth", "Analytics"],
    outcome: "Personal Money Management",
    time: "MVP",
    live: "#",
    description: "A high-precision personal money management application designed for individual financial tracking and savings growth."
  },
  {
    id: 7,
    title: "Retail HRIS System",
    category: "Core ERP",
    image: "/img/c-logo/Luminara-Lifestyle.png",
    client: "Luminara Lifestyle Pvt Ltd",
    stack: ["HR-Logic", "Accounts Module"],
    outcome: "75+ Employee Management",
    time: "Operational",
    live: "#",
    description: "Integrated HRIS and Accounts modules focused on lifestyle retail management and employee lifecycle tracking."
  },
  {
    id: 8,
    title: "Hospitality MS Solution",
    category: "Specialized Modules",
    image: "/img/c-logo/Luminara-Sky.png",
    client: "Luminara Sky Lounge Pvt Ltd",
    stack: ["POS Integration", "HRIS"],
    outcome: "30+ Employee Workflow",
    time: "Operational",
    live: "#",
    description: "Management software solution with HRIS and Accounts modules tailored for premium hospitality and lounge operations."
  },
  {
    id: 9,
    title: "Agri-Production Logic",
    category: "Specialized Modules",
    image: "/img/c-logo/VMP.png",
    client: "VMP Company",
    stack: ["Production Control", "Agri-Tech"],
    outcome: "Streamlined Agri-Business Logic",
    time: "Long-term",
    live: "#",
    description: "Specialized Agri-Business Production Management module developed to track crop lifecycles and yield outputs."
  },
  {
    id: 10,
    title: "Pharma Warehouse Control",
    category: "Healthcare",
    image: "/img/c-logo/Life.png",
    client: "The Life Pharmacy, Dubai",
    stack: ["Inventory Logic", "International Compliance"],
    outcome: "Dubai-based Warehouse Ops",
    time: "Strategic build",
    live: "#",
    description: "Warehouse management module specifically designed for pharmaceutical inventory standards in the UAE market."
  },
  {
    id: 11,
    title: "Enterprise Scale ERP",
    category: "Core ERP",
    image: "/img/c-logo/Sevenseas.png",
    client: "Sevenseas Group",
    stack: ["Java", "Cloud DB"],
    outcome: "150+ Employee Scale",
    time: "Operational",
    live: "#",
    description: "Robust HRIS and Accounts modules deployed to manage complex administrative workflows for a large corporate group."
  },
  {
    id: 12,
    title: "Global Supply ERP",
    category: "Core ERP",
    image: "/img/c-logo/Luminara-Global.png",
    client: "Luminara Global Pvt Ltd",
    stack: ["Total ERP Suite"],
    outcome: "57+ Staff Operations",
    time: "Deployed",
    live: "#",
    description: "Total ERP deployment covering end-to-end global supply chain and administrative functions."
  },
  {
    id: 13,
    title: "Gulf Finance Module",
    category: "FinTech",
    image: "/img/c-logo/yusuf-bhai.jpg",
    client: "Yusuf Bhai, Dubai",
    stack: ["Accounting Core"],
    outcome: "Dubai Finance Management",
    time: "Module Deploy",
    live: "#",
    description: "Financial management module tailored for middle-eastern trade and accounting standards."
  },
  {
    id: 14,
    title: "A4 Tours HRIS",
    category: "Specialized Modules",
    image: "/img/c-logo/A4Tours.png",
    client: "A4 Tours",
    stack: ["HRM Core"],
    outcome: "30+ Staff Management",
    time: "Deployed",
    live: "#",
    description: "HRIS and Accounts modules designed for tourism sector personnel management."
  },
  {
    id: 15,
    title: "Genius Appointment Hub",
    category: "Healthcare",
    image: "/img/c-logo/Genius.png",
    client: "Genius Hospitals",
    stack: ["Booking Logic"],
    outcome: "Managed Patient Flow",
    time: "Custom module",
    live: "#",
    description: "Specialized Appointment Management module optimized for healthcare facilities and specialist consultations."
  },
  {
    id: 16,
    title: "Medi Shine Access",
    category: "Healthcare",
    image: "/img/c-logo/medi-shine.png",
    client: "Medi Shine Hospital",
    stack: ["User Access Control"],
    outcome: "Streamlined Appointments",
    time: "Deployed",
    live: "#",
    description: "Patient Appointment Management module designed to reduce wait times and optimize clinical resources."
  }
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = filter === "All" || project.category === filter
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchesCategory && matchesSearch
    })
  }, [filter, searchQuery])

  return (
    <section className="relative min-h-screen bg-[#020314] pt-64 pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2B2E83]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4A89C8]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl mb-20">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4A89C8]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Enterprise Track Record</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-8">
            Deployed <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white italic inline-block pb-2">Technical Assets.</span>
          </motion.h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            TechConnect Global has a history of deploying mission-critical systems across Finance, Logistics, Healthcare, and Agriculture.
          </p>
        </div>

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
              placeholder="SEARCH PROTOCOLS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-[10px] font-bold uppercase tracking-widest text-white placeholder:text-slate-600 outline-none focus:border-[#4A89C8]/50 focus:bg-white/[0.08] transition-all"
            />
          </div>
        </div>

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
                    
                    <div className="relative h-64 w-full overflow-hidden bg-white flex items-center justify-center p-12">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="max-h-full max-w-full object-contain transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020314] via-transparent to-transparent opacity-40" />
                      <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest text-[#4A89C8]">{project.category}</div>
                    </div>

                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div className="max-w-[75%]">
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{project.client}</p>
                          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#4A89C8] transition-colors">{project.title}</h3>
                        </div>
                        <div className="flex gap-2">
                          <a href={project.live} target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#4A89C8] transition-all">
                            <ExternalLink size={16} />
                          </a>
                        </div>
                      </div>

                      <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 line-clamp-2">{project.description}</p>

                      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5 mb-8">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-slate-500"><Layers size={12} /><span className="text-[9px] font-black uppercase tracking-widest">Stack</span></div>
                          <p className="text-[10px] text-white font-mono truncate">{project.stack.join(', ')}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-slate-500"><Calendar size={12} /><span className="text-[9px] font-black uppercase tracking-widest">Status</span></div>
                          <p className="text-[10px] text-white font-mono">{project.time}</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#4A89C8]/5 border border-[#4A89C8]/10 flex items-center gap-3">
                        <LineChart className="text-[#4A89C8]" size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{project.outcome}</span>
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

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-32 p-12 rounded-[3rem] bg-gradient-to-r from-white/[0.02] to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">Ready to modernize your operations?</h4>
            <p className="text-slate-500 text-sm font-light">Join the leading enterprises building with TechConnect Global in 2026.</p>
          </div>
          <Link href="/contact">
            <button className="flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] hover:bg-[#4A89C8] hover:text-white transition-all group">
              Start Your Project
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}