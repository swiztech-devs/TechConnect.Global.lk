"use client";

import React from 'react';
import Hero from "@/Pages/Hero"; 
import { TrustBar } from "@/Pages/TrustBar";
import { CompanyOverview } from "@/Pages/CompanyOverview";
import { BentoGrid } from "@/Pages/BentoGrid";
import { Services } from "@/Pages/Services";
import { CaseStudies } from "@/Pages/CaseStudies";
import { Stats } from "@/Pages/Stats";

export default function Page() {
  return (
    <main className="relative w-full overflow-hidden bg-[#020314] selection:bg-[#4A89C8]/30">
      
      {/* 1. HERO */}
      <Hero />

      <div className="relative z-10 bg-gradient-to-b from-[#020314] via-[#05071a] to-[#020314]">
        
        {/* SECTION BREAK 1: The Glass Border */}
        <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm relative">
          <TrustBar />
          {/* Bottom Glow Line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4A89C8]/20 to-transparent" />
        </section>

        {/* 2. OVERVIEW */}
        <CompanyOverview />

        {/* SECTION BREAK 2: Radial Spotlight Transition
            Creates a 'depth' effect before the Bento Grid
        */}
        <div className="relative h-24 w-full overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,137,200,0.08)_0%,transparent_70%)]" />
        </div>

        {/* 3. BENTO GRID */}
        <BentoGrid />

        {/* SECTION BREAK 3: The "Beam" Divider
            A sharp technical line that separates logic from services
        */}
        <div className="relative py-10 flex justify-center">
          <div className="w-[80%] h-px bg-gradient-to-r from-transparent via-[#4A89C8]/40 to-transparent shadow-[0_0_20px_rgba(74,137,200,0.3)]" />
        </div>

        {/* 4. SERVICES */}
        <section className="relative bg-[#2B2E83]/5">
          <Services />
        </section>

        {/* SECTION BREAK 4: Angled Mesh Blend
            Moves the eye into the case studies
        */}
        <div className="relative h-40 w-full">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#020314]" />
        </div>

        {/* 5. CASE STUDIES */}
        <CaseStudies />

        {/* SECTION BREAK 5: The "Digital Horizon"
            Prepares the user for the final data/stats section
        */}
        <div className="relative pt-20 pb-10 flex flex-col items-center">
          <div className="w-24 h-[1px] bg-[#4A89C8]/40 mb-4" />
          <div className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold">End Protocol</div>
        </div>

        {/* 6. STATS */}
        <Stats />
        
      </div>
      
      {/* GLOBAL BACKGROUND LIGHTING (The 'Heartbeat') */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#2B2E83]/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#4A89C8]/5 blur-[120px]" />
      </div>

    </main>
  );
}