import React from 'react'
import { motion } from 'framer-motion'
import {
  Settings,
  Shield,
  Zap,
  ArrowRight,
  Layers,
  Database,
  Cpu,
} from 'lucide-react'
import { Button } from '@/Components/ui/Button'
import { FadeIn, TextReveal } from '@/Components/ui/FadeIn'
export function ServiceDetail() {
  return (
    <main className="w-full pt-24 bg-background min-h-screen">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary mb-8">
              Platform Architecture
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight max-w-4xl font-heading">
              <TextReveal text="Unified infrastructure" />
              <span className="text-slate-400 block mt-2">
                for modern enterprise.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
              A composable architecture that scales from startup to enterprise.
              Deploy globally, manage centrally, and scale infinitely.
            </p>
            <Button variant="primary" size="lg" magnetic>
              View Documentation
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn className="md:col-span-2">
              <div className="bg-surface text-white rounded-3xl p-10 h-[400px] relative overflow-hidden group">
                <div className="absolute inset-0 mesh-gradient-dark opacity-60" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <Database className="w-12 h-12 text-accent" />
                  <div>
                    <h3 className="text-3xl font-bold mb-4">
                      Global Data Edge
                    </h3>
                    <p className="text-slate-400 max-w-md text-lg">
                      Replicate your data globally in milliseconds. Read from
                      the edge, write to the core, with automatic conflict
                      resolution.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white border border-slate-200/60 rounded-3xl p-10 h-[400px] relative overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-full flex flex-col justify-between">
                  <Shield className="w-12 h-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Zero Trust Security
                    </h3>
                    <p className="text-slate-600">
                      Identity-aware proxies, end-to-end encryption, and
                      automated compliance reporting built into the fabric.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white border border-slate-200/60 rounded-3xl p-10 h-[400px] relative overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-full flex flex-col justify-between">
                  <Zap className="w-12 h-12 text-secondary" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Serverless Compute
                    </h3>
                    <p className="text-slate-600">
                      Deploy functions globally. Scale to millions of requests
                      instantly without managing infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="md:col-span-2">
              <div className="bg-primary text-white rounded-3xl p-10 h-[400px] relative overflow-hidden glow-border">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <Layers className="w-12 h-12 text-white/80" />
                  <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">
                        Composable APIs
                      </h3>
                      <p className="text-white/80 max-w-md text-lg">
                        Connect any service with our GraphQL and REST endpoints.
                        Type-safe SDKs generated automatically.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white hover:text-primary shrink-0"
                    >
                      Explore API <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}

