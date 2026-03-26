"use client";

import React from 'react';
import Hero from "@/sections/Hero"; 
import { TrustBar } from "@/sections/TrustBar";
import { CompanyOverview } from "@/sections/CompanyOverview";
import { BentoGrid } from "@/sections/BentoGrid";
import { Services } from "@/sections/Services";
import { CaseStudies } from "@/sections/CaseStudies";
import { Stats } from "@/sections/Stats";
import { FinalCTA } from "@/sections/CTA"; 

export default function Page() {
  return (
    <main className="relative w-full overflow-hidden bg-[#020314] selection:bg-[#4A89C8]/30">
      
      {/* 1. HERO - INITIAL PROTOCOL */}
      <Hero />

      <div className="relative z-10 bg-gradient-to-b from-[#020314] via-[#05071a] to-[#020314]">
        
        {/* SECTION BREAK 1: The Glass Border */}
        <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm relative">
          <TrustBar />
          {/* Bottom Glow Line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4A89C8]/20 to-transparent" />
        </section>

        {/* 2. OVERVIEW - BRAND IDENTITY */}
        <CompanyOverview />

        {/* SECTION BREAK 2: Radial Spotlight Transition */}
        <div className="relative h-24 w-full overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,137,200,0.08)_0%,transparent_70%)]" />
        </div>

        {/* 3. BENTO GRID - STRATEGIC LOGIC */}
        <BentoGrid />

        {/* SECTION BREAK 3: The "Beam" Divider */}
        <div className="relative py-10 flex justify-center">
          <div className="w-[80%] h-px bg-gradient-to-r from-transparent via-[#4A89C8]/40 to-transparent shadow-[0_0_20px_rgba(74,137,200,0.3)]" />
        </div>

        {/* 4. SERVICES - CORE PILLARS */}
        <section className="relative bg-[#2B2E83]/5">
          <Services />
        </section>

        {/* SECTION BREAK 4: Angled Mesh Blend */}
        <div className="relative h-40 w-full">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#020314]" />
        </div>

        {/* 5. CASE STUDIES - PROOF OF CONCEPT */}
        <CaseStudies />

        {/* SECTION BREAK 5: The "Digital Horizon" */}
        <div className="relative pt-20 pb-10 flex flex-col items-center">
          <div className="w-24 h-[1px] bg-[#4A89C8]/40 mb-4" />
          <div className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold">Performance Metrics</div>
        </div>

        {/* 6. STATS - IMPACT DATA */}
        <Stats />

        {/* SECTION BREAK 6: The "Conversion Bridge" 
            A subtle glow transition to focus the eye on the CTA
        */}
        <div className="relative h-32 w-full overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[#4A89C8]/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,46,131,0.05)_0%,transparent_100%)]" />
        </div>

        {/* 7. FINAL CALL TO ACTION - CONVERSION POINT */}
        <FinalCTA />
        
      </div>
      
      {/* GLOBAL BACKGROUND LIGHTING (The 'Heartbeat') */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#2B2E83]/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#4A89C8]/5 blur-[120px]" />
      </div>

    </main>
  );
}