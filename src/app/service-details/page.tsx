'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Database, 
  Cpu, 
  Cloud, 
  Users2, 
  ChevronRight, 
  ShieldCheck, 
  ArrowUpRight,
  CheckCircle2,
  Activity,
  Layers,
  BarChart3
} from 'lucide-react'

const SERVICES = [
  {
    id: 'erp',
    title: "Core ERP",
    icon: Database,
    tagline: "Enterprise Resource Protocol",
    description: "Centralize your entire business intelligence ecosystem. Our Core ERP solutions integrate finance, logistics, and human capital into a singular, real-time source of truth.",
    detailedContent: "In an era of fragmented data, our ERP protocols eliminate silos. We specialize in bespoke implementations that synchronize global supply chains with local financial compliance.",
    features: ["Real-Time Consolidation", "AI Forecasting", "Automated Compliance", "Inventory Sync"],
    roadmap: [
      { step: "01", task: "Architecture Audit", desc: "Mapping current data silos." },
      { step: "02", task: "Logic Integration", desc: "Configuring the central core." },
      { step: "03", task: "Global Deployment", desc: "Phased rollout across units." }
    ],
    stats: { efficiency: "+45%", accuracy: "99.9%" },
    gradient: "from-blue-600/20 to-indigo-600/20"
  },
  {
    id: 'iot',
    title: "Edge IoT",
    icon: Cpu,
    tagline: "Real-time Edge Computing",
    description: "Bridge the gap between physical assets and digital insights. TechConnect deploys intelligent sensor networks that process data at the edge.",
    detailedContent: "Our IoT frameworks are designed for mission-critical environments, turning raw sensor telemetry into actionable industrial intelligence.",
    features: ["Low-Latency Edge", "Predictive Maintenance", "Mesh Networking", "Secure OTA Updates"],
    roadmap: [
      { step: "01", task: "Sensor Topology", desc: "Physical-to-digital mapping." },
      { step: "02", task: "Edge Node Setup", desc: "Deploying localized compute." },
      { step: "03", task: "Data Visualization", desc: "Real-time fleet monitoring." }
    ],
    stats: { response: "<10ms", uptime: "99.99%" },
    gradient: "from-cyan-600/20 to-blue-600/20"
  },
  {
    id: 'cloud',
    title: "Cloud Native",
    icon: Cloud,
    tagline: "High-Velocity Infrastructure",
    description: "Built for the scale of tomorrow. We architect resilient, secure, and infinitely scalable cloud environments using microservices.",
    detailedContent: "Transition from legacy servers to a fluid, cloud-native state with serverless compute and auto-scaling clusters.",
    features: ["Kubernetes Setup", "Serverless Lambda", "Multi-Region Failover", "DevSecOps"],
    roadmap: [
      { step: "01", task: "Cloud Readiness", desc: "Assessing application gaps." },
      { step: "02", task: "Cluster Provisioning", desc: "Building the environment." },
      { step: "03", task: "Traffic Migration", desc: "Zero downtime cutover." }
    ],
    stats: { scaling: "Instant", savings: "30%" },
    gradient: "from-[#2B2E83]/40 to-blue-900/20"
  },
  {
    id: 'bpo',
    title: "BPO Solutions",
    icon: Users2,
    tagline: "Strategic Process Outsourcing",
    description: "Optimize operational velocity without compromising on quality. Our BPO division serves as an extension of your core team.",
    detailedContent: "We redefine outsourcing by focusing on Value Shifting, offloading high-volume technical processes to specialized centers.",
    features: ["Global Tech Support", "Data Cleansing", "Ledger Reconciliation", "CX Design"],
    roadmap: [
      { step: "01", task: "Process Mapping", desc: "Deep dive into workflow." },
      { step: "02", task: "Quality Benchmarking", desc: "Establishing SLA KPIs." },
      { step: "03", task: "Handover", desc: "Full process management." }
    ],
    stats: { coverage: "24/7", efficiency: "+50%" },
    gradient: "from-slate-800/40 to-blue-950/20"
  }
]

export default function ServiceDetails() {
  const [activeTab, setActiveTab] = useState(SERVICES[0])

  return (
    <section className="relative min-h-screen bg-[#020314] pt-64 pb-32 overflow-hidden">
      
      <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-[#2B2E83]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#4A89C8]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#4A89C8]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Precision Engineering</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none"
          >
            Mission Critical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white italic">Capabilities.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-12 items-start">
          
          <div className="flex flex-col gap-4">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service)}
                className={`group relative flex items-center justify-between p-7 rounded-[2rem] border transition-all duration-500 text-left ${
                  activeTab.id === service.id 
                  ? 'bg-white/10 border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)]' 
                  : 'bg-transparent border-white/5 hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className={`p-4 rounded-2xl transition-all duration-500 ${
                    activeTab.id === service.id ? 'bg-[#4A89C8] text-white scale-110' : 'bg-white/5 text-slate-500 group-hover:text-white'
                  }`}>
                    <service.icon size={24} />
                  </div>
                  <div>
                    <h3 className={`font-black uppercase tracking-[0.2em] text-xs transition-colors ${
                      activeTab.id === service.id ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest mt-1 group-hover:text-[#4A89C8] transition-colors">
                      View Details
                    </p>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 transition-all duration-500 ${
                  activeTab.id === service.id ? 'translate-x-0 opacity-100 text-[#4A89C8]' : '-translate-x-4 opacity-0'
                }`} />
              </button>
            ))}
            
            <div className="mt-8 p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hidden lg:block">
               <Activity className="w-5 h-5 text-[#4A89C8] mb-4" />
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                 All services are delivered under strict ISO 27001 data security protocols and managed by our regional deployment centers.
               </p>
            </div>
          </div>

          <div className="relative min-h-[700px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`p-10 md:p-16 rounded-[3rem] border border-white/10 bg-gradient-to-br ${activeTab.gradient} backdrop-blur-3xl h-full shadow-2xl flex flex-col`}
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                  <div className="max-w-xl">
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#4A89C8] mb-4 block">
                      {activeTab.tagline}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                      {activeTab.title}
                    </h3>
                    <p className="text-xl text-slate-300 font-light leading-relaxed">
                      {activeTab.description}
                    </p>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                    <activeTab.icon className="w-16 h-16 text-white" strokeWidth={1} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/40 flex items-center gap-2">
                       <Layers className="w-4 h-4" /> Technical Scope
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {activeTab.features?.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#4A89C8]" />
                          <span className="text-[11px] font-bold text-slate-200 uppercase tracking-widest">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/40 flex items-center gap-2">
                       <BarChart3 className="w-4 h-4" /> Deployment Roadmap
                    </h4>
                    <div className="space-y-4">
                      {activeTab.roadmap?.map((item, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-black/20 border border-white/5">
                          <div className="flex items-center gap-4">
                            <span className="text-lg font-mono text-[#4A89C8] font-bold">{item.step}</span>
                            <div>
                              <p className="text-xs font-black text-white uppercase tracking-wider">{item.task}</p>
                              <p className="text-[10px] text-slate-500 mt-1">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Data */}
                <div className="mt-auto pt-10 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10">
                  <div className="flex flex-wrap justify-center lg:justify-start gap-12">
                    {Object.entries(activeTab.stats || {}).map(([key, val], i) => (
                      <div key={i} className="text-center lg:text-left">
                        <div className="text-3xl font-bold text-white mb-1">{val as string}</div>
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] hover:bg-[#4A89C8] hover:text-white transition-all group shadow-2xl"
                  >
                    Initiate Discussion
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}