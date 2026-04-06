'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Button } from '@/Components/ui/Button'
import { 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Mail, 
  AlertTriangle, 
  Navigation, 
  Globe,
  Terminal
} from 'lucide-react'
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
      setFormState({ status: 'idle', error: "Handshake failed. Encryption or Network error detected." });
    }
  }

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
    <main className="relative w-full min-h-screen bg-[#020314] pt-64 selection:bg-[#4A89C8]/30 text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2B2E83]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 pb-20">
        
        {/* --- PAGE HEADER --- */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <Terminal className="w-3.5 h-3.5 text-[#4A89C8]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Initialize Connection</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1] mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white italic">Sales.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Give us a call or drop by anytime; we endeavour to answer all enquiries within <span className="text-white font-medium">24 hours</span> on business days. Our architects are ready to assist with your technical roadmap.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* --- LEFT: CONTACT FORM --- */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:col-span-7">
            <div className="relative group p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent overflow-hidden shadow-2xl">
              <div className="relative bg-[#05061b] p-8 md:p-14 rounded-[2.5rem] backdrop-blur-3xl border border-white/5">
                <AnimatePresence mode="wait">
                  {formState.status === 'success' ? (
                    <motion.div key="success-message" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="text-center py-20">
                      <div className="w-20 h-20 bg-[#4A89C8]/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-[#4A89C8]/20">
                        <CheckCircle2 className="w-10 h-10 text-[#4A89C8]" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">Transmission Sent</h3>
                      <p className="text-slate-400 mb-10">Our lead architect will respond within 24 hours.</p>
                      <Button onClick={handleReset} className="rounded-full px-10 py-6 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all text-xs font-bold tracking-widest uppercase">New Submission</Button>
                    </motion.div>
                  ) : (
                    <motion.form ref={formRef} key="active-form" onSubmit={handleSubmit} className="space-y-10">
                      {formState.error && (
                        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 text-xs font-bold uppercase tracking-wider">
                          <AlertTriangle className="w-4 h-4" /> {formState.error}
                        </div>
                      )}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Identifier: First Name</label>
                          <input name="first_name" type="text" placeholder="First Name" required className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-white/5 text-white focus:bg-white/10 focus:border-[#4A89C8]/50 outline-none transition-all" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Identifier: Last Name</label>
                          <input name="last_name" type="text" placeholder="Last Name" required className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-white/5 text-white focus:bg-white/10 focus:border-[#4A89C8]/50 outline-none transition-all" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Verification: Business Email</label>
                        <input name="email" type="email" placeholder="name@company.com" required className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-white/5 text-white focus:bg-white/10 focus:border-[#4A89C8]/50 outline-none transition-all" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Logic: Project Requirements</label>
                        <textarea name="message" rows={5} placeholder="How can we assist your technical roadmap?" required className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-white/5 text-white focus:bg-white/10 focus:border-[#4A89C8]/50 outline-none resize-none transition-all" />
                      </div>
                      <Button type="submit" disabled={formState.status === 'submitting'} className="w-full h-20 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest hover:bg-[#2B2E83] hover:border-[#4A89C8] transition-all flex items-center justify-center gap-4 disabled:opacity-40 group">
                        {formState.status === 'submitting' ? <div className="flex items-center gap-3"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Executing...</div> : <>Initialize Protocol <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: SIDEBAR --- */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-5 space-y-10">
            
            <div className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#4A89C8]/30 transition-all duration-500 shadow-xl backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-[#4A89C8]/10 text-[#4A89C8]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 uppercase tracking-tight text-white">Global Headquarters</h3>
                  <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Primary Location</p>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    No 93, Kynsey Road,<br />
                    Colombo 08, Sri Lanka.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#4A89C8]/30 transition-all duration-500 shadow-xl backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-[#4A89C8]/10 text-[#4A89C8]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 uppercase tracking-tight text-white">Direct Terminal</h3>
                  <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Voice Protocol</p>
                  <a href="tel:+94707993375" className="text-slate-200 text-sm font-medium hover:text-[#4A89C8] transition-colors">
                    +94 70 799 3375
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#4A89C8]/30 transition-all duration-500 shadow-xl backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-[#4A89C8]/10 text-[#4A89C8]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 uppercase tracking-tight text-white">Correspondence</h3>
                  <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Electronic Mail</p>
                  <a href="mailto:info@techconnect.global" className="text-slate-200 text-sm font-medium hover:text-[#4A89C8] transition-colors">
                    info@techconnect.global
                  </a>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* --- FULL-WIDTH MAP SECTION --- */}
      <section className="relative w-full h-[600px] mt-12 bg-[#05061b] border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_150px_rgba(2,3,20,1)]" />
        
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 w-full max-w-7xl px-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#020314]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
            <Globe className="w-4 h-4 text-[#4A89C8]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Live Hub: No 93, Kynsey Road</span>
          </div>
        </div>

        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7836881774215!2d79.86877077539265!3d6.916462918431006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2590924976721%3A0xc3b44b986a43926c!2s93%20Kynsey%20Rd%2C%20Colombo%2000800!5e0!3m2!1sen!2slk!4v1712434567890!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="opacity-90 contrast-[1.1] brightness-[0.9]"
        />

        <div className="absolute bottom-12 right-12 z-20">
          <a 
            href="https://maps.app.goo.gl/rYh3X6wR2iYfX3zW9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#4A89C8] text-white font-black text-[10px] uppercase tracking-widest shadow-[0_0_40px_rgba(74,137,200,0.4)] hover:bg-white hover:text-black transition-all group"
          >
            <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            Launch Navigation Protocol
          </a>
        </div>
      </section>
    </main>
  )
}