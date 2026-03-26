'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/Components/ui/Button'

export function FinalCTA() {
  return (
    <section className="relative py-24 bg-[#020314] overflow-hidden">
      {/* Background Glows specifically for this section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2B2E83]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group p-[1px] rounded-[3rem] bg-gradient-to-r from-[#2B2E83]/40 via-white/10 to-[#4A89C8]/40 overflow-hidden"
        >
          <div className="bg-[#020314]/95 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-white">
                Ready to build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A89C8] to-white">the next decade?</span>
              </h2>
              <p className="text-slate-400 text-lg font-light max-w-md">
                Deploy TechConnect Global infrastructures today and lead the future of enterprise intelligence.
              </p>
            </div>
            <div className="shrink-0 group">
              <Link href="/contact">
                <Button className="h-20 px-12 bg-[#2B2E83] text-white hover:bg-white hover:text-[#020314] rounded-full text-xl font-black uppercase tracking-tighter transition-all shadow-[0_0_50px_rgba(43,46,131,0.3)] group-hover:shadow-white/10 border border-white/10">
                  Initialize Now <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}