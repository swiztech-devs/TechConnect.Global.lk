'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Button } from '@/Components/ui/Button'
import { ArrowRight, CheckCircle2, Phone, Globe, ShieldCheck, Mail, Headset } from 'lucide-react'

export default function ContactPage() {
  const [formState, setFormState] = useState({ status: 'idle' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ status: 'submitting' })
    // Simulated Transmission
    setTimeout(() => setFormState({ status: 'success' }), 2000)
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.3 } 
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <main className="relative w-full min-h-screen bg-[#020314] pt-44 pb-32 overflow-hidden selection:bg-[#4A89C8]/30">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2B2E83]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4A89C8]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-3xl mb-24"
        >
          {/* UPDATED BADGE: Replaced Terminal with Phone Icon */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <Phone className="w-3.5 h-3.5 text-[#4A89C8] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Initialize Connection</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[1] mb-8">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white">Sales.</span>
          </h1>
          <p className="text-xl text-slate-400 font-light max-w-xl leading-relaxed">
            Integrate our expert engineering into your roadmap. Discover how TechConnect Global scales complexity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">

          {/* LEFT: THE INTERFACE (FORM) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <div className="relative group p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
              <div className="relative bg-[#05061b] p-8 md:p-14 rounded-[2.5rem] backdrop-blur-3xl border border-white/5">
                
                <AnimatePresence mode="wait">
                  {formState.status === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <div className="w-20 h-20 bg-[#4A89C8]/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-[#4A89C8]/20">
                        <CheckCircle2 className="w-10 h-10 text-[#4A89C8]" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Transmission Sent</h3>
                      <p className="text-slate-400 mb-10">System logs updated. Our lead architect will respond within 24 hours.</p>
                      <Button
                        onClick={() => setFormState({ status: 'idle' })}
                        className="rounded-full px-10 py-6 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all text-xs font-bold tracking-widest"
                      >
                        New Submission
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-10">
                      <div className="grid md:grid-cols-2 gap-8">
                        <motion.div variants={itemVariants} className="space-y-3">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Identifier: First Name</label>
                          <input required type="text" placeholder="First Name"
                            className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-white/5 text-white focus:bg-white/10 focus:border-[#4A89C8]/50 focus:ring-4 focus:ring-[#4A89C8]/5 outline-none transition-all placeholder:text-white/10"
                          />
                        </motion.div>
                        <motion.div variants={itemVariants} className="space-y-3">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Identifier: Last Name</label>
                          <input required type="text" placeholder="Last Name"
                            className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-white/5 text-white focus:bg-white/10 focus:border-[#4A89C8]/50 focus:ring-4 focus:ring-[#4A89C8]/5 outline-none transition-all placeholder:text-white/10"
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants} className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Verification: Business Email</label>
                        <input required type="email" placeholder="name@company.com"
                          className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-white/5 text-white focus:bg-white/10 focus:border-[#4A89C8]/50 outline-none transition-all placeholder:text-white/10"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Logic: Project Requirements</label>
                        <textarea required rows={5} placeholder="How can we assist your technical roadmap?"
                          className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-white/5 text-white focus:bg-white/10 focus:border-[#4A89C8]/50 outline-none transition-all resize-none placeholder:text-white/10"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Button
                          type="submit"
                          disabled={formState.status === 'submitting'}
                          className="w-full h-20 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest hover:bg-[#2B2E83] hover:border-[#4A89C8] hover:shadow-[0_0_40px_rgba(43,46,131,0.4)] transition-all flex items-center justify-center gap-4 disabled:opacity-40"
                        >
                          {formState.status === 'submitting' ? 'Executing...' : (
                            <>Initialize Protocol <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                          )}
                        </Button>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: TECHNICAL INFO */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-16"
          >
            <div className="space-y-12">
              <div className="group flex items-start gap-8">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#4A89C8]/50 transition-colors">
                  <Headset className="w-6 h-6 text-[#4A89C8]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-3 uppercase tracking-tight">Technical Support</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 font-light">Existing deployments: Access your instance or trigger a priority ticket.</p>
                  <a href="#" className="text-[#4A89C8] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 hover:gap-4 transition-all">
                    Console Access <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="h-px w-full bg-white/5" />

              <div className="group flex items-start gap-8">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#4A89C8]/50 transition-colors">
                  <Globe className="w-6 h-6 text-[#4A89C8]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-3 uppercase tracking-tight">Regional Hubs</h3>
                  <div className="grid grid-cols-2 gap-8 mt-6">
                    <div>
                      <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-2">North America</p>
                      <p className="text-white text-sm font-light">San Francisco</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-2">Asia Pacific</p>
                      <p className="text-white text-sm font-light">Colombo</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-px w-full bg-white/5" />

              <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[#2B2E83]/10 to-transparent border border-white/5 relative overflow-hidden">
                <ShieldCheck className="w-8 h-8 text-[#4A89C8] mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">ISO 27001 Protocol</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  All transmissions are encrypted. Strictly compliant storage and high-velocity data protocols active.
                </p>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#4A89C8]/5 blur-3xl rounded-full" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  )
}