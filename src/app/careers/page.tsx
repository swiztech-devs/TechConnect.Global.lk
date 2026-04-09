'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  MapPin, 
  Briefcase, 
  ArrowUpRight, 
  ArrowRight,
  ChevronLeft, 
  ChevronRight,
  Wifi,
  Zap,
  Terminal,
  Cpu
} from 'lucide-react'
import { Button } from '@/Components/ui/Button'

// 1. DATA DEFINITIONS
const JOB_TYPES = ["All", "Full Time", "Remote", "Freelance", "Internship", "Part Time"]
const DEPARTMENTS = ["All", "Engineering", "Creative", "Product", "Consultancy"]

const OPEN_POSITIONS = [
  { id: 1, title: "Lead Systems Architect", dept: "Engineering", type: "Full Time", location: "Colombo / Hybrid", salary: "Top Tier", speed: "High Velocity" },
  { id: 2, title: "Senior Full Stack Engineer", dept: "Engineering", type: "Remote", location: "Global", salary: "Competitive", speed: "Immediate" },
  { id: 3, title: "UI/UX Experience Designer", dept: "Creative", type: "Full Time", location: "Colombo HQ", salary: "Industry Standard", speed: "Next Batch" },
  { id: 4, title: "IoT Firmware Specialist", dept: "Engineering", type: "Freelance", location: "Remote", salary: "Project Based", speed: "Critical" },
  { id: 5, title: "Cloud Infrastructure Lead", dept: "Engineering", type: "Full Time", location: "Colombo HQ", salary: "Top Tier", speed: "High Velocity" },
  { id: 6, title: "AI/ML Research Intern", dept: "Engineering", type: "Internship", location: "Colombo HQ", salary: "Paid", speed: "Next Batch" },
  { id: 7, title: "Technical Product Manager", dept: "Product", type: "Full Time", location: "Hybrid", salary: "Competitive", speed: "Immediate" },
  { id: 8, title: "ERP Solution Consultant", dept: "Consultancy", type: "Part Time", location: "Remote", salary: "Hourly", speed: "Flexible" },
  { id: 9, title: "QA Automation Engineer", dept: "Engineering", type: "Full Time", location: "Colombo HQ", salary: "Competitive", speed: "Immediate" },
  { id: 10, title: "Cybersecurity Analyst", dept: "Engineering", type: "Remote", location: "Global", salary: "Top Tier", speed: "Critical" },
]

export default function CareersSection() {
  const [filterType, setFilterType] = useState("All")
  const [filterDept, setFilterDept] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const filteredJobs = useMemo(() => {
    return OPEN_POSITIONS.filter((job) => {
      const matchesType = filterType === "All" || job.type === filterType
      const matchesDept = filterDept === "All" || job.dept === filterDept
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesType && matchesDept && matchesSearch
    })
  }, [filterType, filterDept, searchQuery])

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage)
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <section className="relative min-h-screen bg-[#020314] pt-64 pb-32 overflow-hidden text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2B2E83]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4A89C8]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* --- 1. HEADER --- */}
        <div className="max-w-4xl mb-24">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
            <Cpu className="w-3.5 h-3.5 text-[#4A89C8]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200">Expansion Protocol</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-10">
            Build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white italic">Technical Future.</span>
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl border-l border-white/10 pl-8">
            Join a specialized squad of architects and engineers deploying high-velocity ecosystems. 
            No bureaucracy, just pure engineering.
          </p>
        </div>

        {/* --- 2. FILTER & SEARCH --- */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-12 mb-12 backdrop-blur-xl">
          <div className="grid lg:grid-cols-3 gap-10 items-end">
            
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Search Role</label>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-[#4A89C8] transition-colors" />
                <input 
                  type="text" 
                  placeholder="e.g. Architect" 
                  value={searchQuery}
                  onChange={(e) => {setSearchQuery(e.target.value); setCurrentPage(1)}}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-[#4A89C8]/50 focus:bg-white/[0.08] transition-all font-medium text-white"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Department</label>
              <div className="flex flex-wrap gap-2">
                {DEPARTMENTS.map(dept => (
                  <button 
                    key={dept} 
                    onClick={() => {setFilterDept(dept); setCurrentPage(1)}}
                    className={`px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all border ${filterDept === dept ? 'bg-[#4A89C8] border-[#4A89C8] text-white shadow-[0_0_20px_rgba(74,137,200,0.3)]' : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20'}`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Employment Type</label>
              <div className="flex flex-wrap gap-2">
                {JOB_TYPES.map(type => (
                  <button 
                    key={type} 
                    onClick={() => {setFilterType(type); setCurrentPage(1)}}
                    className={`px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all border ${filterType === type ? 'bg-white text-black border-white' : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* --- 3. JOB LISTING GRID --- */}
        <div className="space-y-4 min-h-[500px]">
          <AnimatePresence mode='wait'>
            {paginatedJobs.length > 0 ? (
              paginatedJobs.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#4A89C8]/30 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-8"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-md bg-[#4A89C8]/10 border border-[#4A89C8]/20 text-[#4A89C8] text-[9px] font-black uppercase tracking-widest">{job.dept}</span>
                      <span className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                        {job.type === "Remote" ? <Wifi size={12} className="text-green-500" /> : <Briefcase size={12} />}
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[#4A89C8] transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm font-light">
                      <div className="flex items-center gap-2"><MapPin size={14} className="text-[#4A89C8]" /> {job.location}</div>
                      <div className="flex items-center gap-2"><Zap size={14} className="text-yellow-500" /> Velocity: {job.speed}</div>
                      <div className="flex items-center gap-2"><Terminal size={14} className="text-blue-400" /> {job.salary}</div>
                    </div>
                  </div>

                  <div className="shrink-0">
                    {/* BUTTON UPDATED: Outline default, white on hover, simple name */}
                    <Button className="h-16 px-10 rounded-full bg-transparent border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all font-black text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl group/btn">
                      Apply Now <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-32 text-center border border-dashed border-white/10 rounded-[3rem]">
                <p className="text-slate-500 font-mono text-sm uppercase tracking-[0.3em]">No protocols matching search parameters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- 4. PAGINATION --- */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-6">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white disabled:opacity-20 hover:bg-[#4A89C8] transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-12 h-12 rounded-2xl font-bold transition-all border ${currentPage === i + 1 ? 'bg-white text-black border-white shadow-xl' : 'bg-white/5 border-white/5 text-slate-500 hover:border-white/10'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white disabled:opacity-20 hover:bg-[#4A89C8] transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* --- 5. GLOBAL CTA --- */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-40 p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-[#2B2E83]/20 via-[#020314] to-transparent border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left shadow-2xl">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Can&apos;t find your stack?</h2>
            <p className="text-slate-400 font-light text-lg">We are always scouting for top 1% talent. Send us your profile for a dynamic evaluation.</p>
          </div>
          <button className="h-20 px-12 rounded-full bg-[#2B2E83] text-white border border-[#4A89C8]/30 font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-[0_0_50px_rgba(43,46,131,0.3)] flex items-center gap-4">
            Direct Transmission <ArrowUpRight size={20} />
          </button>
        </motion.div>

      </div>
    </section>
  )
}