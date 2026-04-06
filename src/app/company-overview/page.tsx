'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award,
  Users,
  Briefcase,
  Mail
} from 'lucide-react'

// 1. DATA DEFINITIONS
const STATS = [
  { label: "Active Clients", value: "40+", icon: Users },
  { label: "Projects Done", value: "70+", icon: Briefcase },
  { label: "Team Advisors", value: "10+", icon: ShieldCheck },
  { label: "Glorious Years", value: "8+", icon: Award },
]

const TECH_STACK = [
  "Java", "Android", "iOS", "PHP", "Angular", "React", "Vue", "WordPress", 
  "WooCommerce", "JavaScript", "HTML5", "CSS3", "Flutter", "NodeJS", "NextJS"
]

const CORE_PILLARS = [
  {
    title: "Our Vision",
    icon: Eye,
    text: "To be the leading software powerhouse in the Global market while empowering the local ecosystem with disruptive concepts and high-velocity engineering.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Our Mission",
    icon: Target,
    text: "To deliver elite-tier service to our partners, solving complex challenges through novel technologies while cultivating long-term strategic partnerships.",
    color: "from-[#2B2E83]/40 to-transparent"
  }
]

const TEAM_MEMBERS = [
  { name: "Marcus Sterling", role: "Chief Architect", credentials: "MSc SE, OCPJP", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400", category: "Leadership" },
  { name: "Elena Rodriguez", role: "Systems Lead", credentials: "MSc SE, Bsc.SEng", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400", category: "Leadership" },
  { name: "Adrian Chen", role: "Consultant", credentials: "B.(IT), OCPJP", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400", category: "Consultancy" },
  { name: "Sarah Jenkins", role: "Senior Dev", credentials: "Bsc.SEng, OCPMAD", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400", category: "Engineering" },
  { name: "Julian Voss", role: "Core Infra", credentials: "BICT (Hons)", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400", category: "Engineering" },
  { name: "Sophia Kwok", role: "UI Designer", credentials: "Visual Arts Spec.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400", category: "Creative" },
  { name: "David Park", role: "Full Stack", credentials: "Bsc.CS, OCPJP", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400", category: "Engineering" },
  { name: "Aisha Khan", role: "QA Lead", credentials: "Bsc.IT, ISTQB", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400", category: "Engineering" },
  { name: "Leo Rossi", role: "Junior Dev", credentials: "Bsc.SEng (UG)", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400", category: "Engineering" },
  { name: "Nina Gupta", role: "Web Dev", credentials: "Bsc.SE, React Spec.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400", category: "Engineering" }
]

// 2. ANIMATION VARIANTS
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function CompanyOverview() {
  return (
    <section className="relative w-full bg-[#020314] pt-64 pb-32 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2B2E83]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4A89C8]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        {/* --- 1. HERO HEADER --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A89C8] animate-[ping_3s_linear_infinite]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">TechConnect Global Pvt Ltd</span>
            </div>
            
            {/* FIXED: Added 'pb-2' and changed 'tracking-tighter' to 'tracking-tight' to prevent character cropping */}
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 text-balance pb-2">
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white italic inline-block px-1">Future of Software.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 pt-4"
          >
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              TechConnect Global is a high-performance software engineering collective. We blend disruptive innovation with refined aesthetics to build scalable digital ecosystems.
            </p>
            <p className="text-slate-500 font-light leading-relaxed">
              Driven by our core objective, <span className="text-white font-medium">“Humanity With Technology”</span>, we empower organizations through precision engineering while fostering a culture of excellence in Sri Lanka and beyond.
            </p>
          </motion.div>
        </div>

        {/* --- 2. STATS ENGINE --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32 max-w-7xl mx-auto"
        >
          {STATS.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center group hover:bg-white/[0.04] transition-colors"
            >
              <stat.icon className="w-5 h-5 text-[#4A89C8] mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-bold text-white mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- 3. VISION & MISSION --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-32 max-w-7xl mx-auto">
          {CORE_PILLARS.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative p-12 rounded-[2.5rem] border border-white/5 bg-gradient-to-br ${pillar.color} overflow-hidden group shadow-2xl`}
            >
              <pillar.icon className="w-10 h-10 text-white mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{pillar.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">{pillar.text}</p>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            </motion.div>
          ))}
        </div>

        {/* --- 4. TEAM GRID --- */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h3 className="text-sm font-black uppercase tracking-[0.5em] text-[#4A89C8] mb-4">Our Strength</h3>
            <p className="text-4xl md:text-5xl font-bold text-white tracking-tighter">The Architects Behind the Code</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5"
          >
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div key={index} variants={cardVariants} className="group relative">
                <div className="relative p-[1px] rounded-[1.5rem] bg-gradient-to-b from-white/10 to-transparent overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(43,46,131,0.15)]">
                  <div className="relative bg-[#05061b] rounded-[1.5rem] overflow-hidden">
                    <div className="relative h-60 w-full overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05061b] via-transparent to-transparent opacity-80" />
                      <div className="absolute top-4 right-4 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity">{member.category}</div>
                    </div>
                    <div className="p-5 space-y-3">
                      <div>
                        <h3 className="text-base font-bold text-white tracking-tight truncate">{member.name}</h3>
                        <p className="text-[#4A89C8] text-[9px] font-black uppercase tracking-widest mt-0.5">{member.role}</p>
                      </div>
                      <div className="h-px w-full bg-white/5" />
                      <p className="text-slate-500 text-[9px] font-mono leading-tight h-6 overflow-hidden">{member.credentials}</p>
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
        </div>

        {/* --- 5. TECHNOLOGY STACK --- */}
        <div className="relative p-12 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 overflow-hidden max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.4em] text-[#4A89C8] mb-2">Our Capabilities</h3>
              <p className="text-3xl font-bold text-white tracking-tight">Enterprise Technology Stack</p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-2 rounded-full bg-[#2B2E83]/20 border border-[#2B2E83]/30 text-[9px] font-bold text-white uppercase tracking-widest">Experience</span>
              <span className="px-4 py-2 rounded-full bg-[#4A89C8]/10 border border-[#4A89C8]/20 text-[9px] font-bold text-white uppercase tracking-widest">Execution</span>
            </div>
          </div>

          <motion.div 
            className="flex flex-wrap gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {TECH_STACK.map((tech, i) => (
              <motion.span 
                key={i}
                variants={itemVariants}
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-[11px] font-medium hover:bg-[#4A89C8] hover:text-white hover:border-[#4A89C8] transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A89C8]/5 blur-[100px] rounded-full pointer-events-none" />
        </div>

        {/* --- 6. CONCLUSION --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-20 border-t border-white/5 text-center max-w-7xl mx-auto"
        >
          <p className="text-slate-500 font-light max-w-3xl mx-auto leading-relaxed italic text-balance">
            "At TechConnect Global Pvt Ltd, our commitment remains unwavering: to empower the international market with elite engineering, while protecting Sri Lankan heritage and creating advanced career pathways for the next generation of architects."
          </p>
        </motion.div>

      </div>
    </section>
  )
}