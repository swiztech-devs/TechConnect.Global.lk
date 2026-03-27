'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Button } from '@/Components/ui/Button'
import { ArrowRight, CheckCircle2, Phone, MapPin, ShieldCheck, Mail, Headset, AlertTriangle } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({ 
    status: 'idle', 
    error: '' 
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: 'submitting', error: '' });

    if (!formRef.current) return;
    
    const formData = new FormData(formRef.current);
    const firstName = formData.get('first_name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!firstName || !email || !message) {
      setFormState({ status: 'idle', error: 'Missing Required Parameters. Please fill all fields.' });
      return;
    }

    const SERVICE_ID = "service_2v40e99";
    const TEMPLATE_ID = "template_5ajm206";
    const PUBLIC_KEY = "0QJwOVpS2S-qHZYdO";

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setFormState({ status: 'success', error: '' });
    } catch (error: any) {
      console.error('Transmission Failed:', error);
      const errorMsg = error?.status === 404 
        ? "Protocol Error: EmailJS Service Unreachable." 
        : "Handshake failed. Encryption or Network error detected.";
      
      setFormState({ status: 'idle', error: errorMsg });
    }
  }

  // FIXED: Forces a hard refresh of the browser to wipe everything clean
  const handleReset = () => {
    window.location.reload();
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
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2B2E83]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4A89C8]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <Phone className="w-3.5 h-3.5 text-[#4A89C8] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Initialize Connection</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[1] mb-8">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white">Sales.</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:col-span-7">
            <div className="relative group p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent overflow-hidden shadow-2xl">
              <div className="relative bg-[#05061b] p-8 md:p-14 rounded-[2.5rem] backdrop-blur-3xl border border-white/5">
                
                <AnimatePresence mode="wait">
                  {formState.status === 'success' ? (
                    <motion.div 
                      key="success-message" 
                      initial={{ opacity: 0, scale: 0.9 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-20"
                    >
                      <div className="w-20 h-20 bg-[#4A89C8]/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-[#4A89C8]/20">
                        <CheckCircle2 className="w-10 h-10 text-[#4A89C8]" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Transmission Sent</h3>
                      <p className="text-slate-400 mb-10">Our lead architect will respond within 24 hours.</p>
                      
                      <Button 
                        onClick={handleReset} 
                        className="rounded-full px-10 py-6 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all text-xs font-bold tracking-widest uppercase"
                      >
                        New Submission
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      ref={formRef} 
                      key="active-form" 
                      onSubmit={handleSubmit} 
                      className="space-y-10"
                    >
                      {formState.error && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }} 
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 text-xs font-bold uppercase tracking-wider"
                        >
                          <AlertTriangle className="w-4 h-4" />
                          {formState.error}
                        </motion.div>
                      )}

                      <div className="grid md:grid-cols-2 gap-8">
                        <motion.div variants={itemVariants} className="space-y-3">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Identifier: First Name</label>
                          <input name="first_name" type="text" placeholder="First Name" required
                            className={`w-full px-6 py-4 rounded-2xl border transition-all bg-white/5 text-white focus:bg-white/10 outline-none ${formState.error ? 'border-red-500/30' : 'border-white/5 focus:border-[#4A89C8]/50'}`}
                          />
                        </motion.div>
                        <motion.div variants={itemVariants} className="space-y-3">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Identifier: Last Name</label>
                          <input name="last_name" type="text" placeholder="Last Name" required
                            className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-white/5 text-white focus:bg-white/10 focus:border-[#4A89C8]/50 outline-none transition-all"
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants} className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Verification: Business Email</label>
                        <input name="email" type="email" placeholder="name@company.com" required
                          className={`w-full px-6 py-4 rounded-2xl border transition-all bg-white/5 text-white focus:bg-white/10 outline-none ${formState.error ? 'border-red-500/30' : 'border-white/5 focus:border-[#4A89C8]/50'}`}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Logic: Project Requirements</label>
                        <textarea name="message" rows={5} placeholder="How can we assist your technical roadmap?" required
                          className={`w-full px-6 py-4 rounded-2xl border transition-all bg-white/5 text-white focus:bg-white/10 outline-none resize-none ${formState.error ? 'border-red-500/30' : 'border-white/5 focus:border-[#4A89C8]/50'}`}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Button
                          type="submit"
                          disabled={formState.status === 'submitting'}
                          className="w-full h-20 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest hover:bg-[#2B2E83] hover:border-[#4A89C8] transition-all flex items-center justify-center gap-4 disabled:opacity-40 group"
                        >
                          {formState.status === 'submitting' ? (
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Executing...
                            </div>
                          ) : (
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

          {/* SIDEBAR INFO */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-5 space-y-16 text-white">
            <div className="space-y-12">
              <div className="group flex items-start gap-8">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#4A89C8]/50 transition-colors">
                  <Headset className="w-6 h-6 text-[#4A89C8]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 uppercase tracking-tight">Technical Support</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 font-light">Existing deployments: Access your instance or trigger a priority ticket.</p>
                  <a href="/console" className="text-[#4A89C8] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 hover:gap-4 transition-all group/link">
                    Console Access <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="h-px w-full bg-white/5" />

              <div className="group flex items-start gap-8">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#4A89C8]/50 transition-colors">
                  <MapPin className="w-6 h-6 text-[#4A89C8]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 uppercase tracking-tight">Global Headquarters</h3>
                  <div className="mt-6 space-y-6">
                    <div>
                      <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-2">Primary Location</p>
                      <p className="text-white text-sm font-light leading-relaxed">No 93, Kynsey Road,<br />Colombo 08, Sri Lanka.</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-2">Direct Terminal</p>
                      <a href="tel:+94707993375" className="text-white text-sm font-light hover:text-[#4A89C8] transition-colors flex items-center gap-2">
                        <Phone className="w-3 h-3" /> +94 70 799 3375
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}