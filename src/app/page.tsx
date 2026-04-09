"use client";

import React from 'react';
import Hero from "@/sections/Hero"; 
import { TrustBar } from "@/sections/TrustBar";
import { CompanyOverview } from "@/sections/CompanyOverview";
import { BentoGrid } from "@/sections/BentoGrid";
import { Services } from "@/sections/Services";
import { DeploymentPortfolio } from "@/sections/DeploymentPortfolio"; 
import { TeamSection } from "@/sections/TeamSection";
import { Testimonials } from "@/sections/Testimonials";
import { ValueProposition } from "@/sections/ValueProposition"; 
import { FinalCTA } from "@/sections/CTA"; 

export default function Page() {
  return (
    <main className="relative w-full overflow-hidden bg-[#020314] selection:bg-[#4A89C8]/30">
      <Hero />

      <div className="relative z-10 bg-gradient-to-b from-[#020314] via-[#05071a] to-[#020314]">
        <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm relative">
          <TrustBar />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4A89C8]/20 to-transparent" />
        </section>
        <CompanyOverview />

        <div className="relative pt-20 pb-10 flex flex-col items-center">
          <div className="w-24 h-[1px] bg-[#4A89C8]/40 mb-4" />
          <div className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-black">Verified Protocol Data</div>
        </div>
        <ValueProposition />

        <div className="relative h-24 w-full overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,137,200,0.08)_0%,transparent_70%)]" />
        </div>
        <BentoGrid />

        <div className="relative py-10 flex justify-center">
          <div className="w-[80%] h-px bg-gradient-to-r from-transparent via-[#4A89C8]/40 to-transparent shadow-[0_0_20px_rgba(74,137,200,0.3)]" />
        </div>

        <section className="relative bg-[#2B2E83]/5">
          <Services />
        </section>

        <div className="relative h-40 w-full">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#020314]" />
        </div>
        <DeploymentPortfolio />

        <div className="relative py-24 flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute w-px h-32 bg-gradient-to-b from-[#4A89C8] to-transparent opacity-50" />
          <div className="mt-32 text-[9px] font-black uppercase tracking-[0.8em] text-[#4A89C8] animate-pulse">Human Intelligence Layer</div>
        </div>
        <TeamSection />

        <div className="relative h-32 w-full flex items-center justify-center overflow-hidden">
          <div className="w-[50%] h-[1px] bg-gradient-to-r from-transparent via-[#4A89C8]/30 to-transparent" />
          <div className="absolute w-[300px] h-[300px] bg-[#4A89C8]/5 blur-[80px] rounded-full" />
        </div>
        <Testimonials />
        <div className="relative h-32 w-full overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[#4A89C8]/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,46,131,0.05)_0%,transparent_100%)]" />
        </div>
        <FinalCTA />
        
      </div>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#2B2E83]/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#4A89C8]/5 blur-[120px]" />
      </div>

    </main>
  );
}