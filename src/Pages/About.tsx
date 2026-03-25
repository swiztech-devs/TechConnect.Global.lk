import React from 'react'
import { FadeIn, TextReveal } from '@/Components/ui/FadeIn'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

export function About() {
  return (
    <main className="w-full pt-24 bg-background min-h-screen">
      {/* Intro */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-heading">
                <TextReveal text="We build the tools" />
                <span className="text-slate-400 block mt-2">
                  we wanted to use.
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                NexusTech was founded by engineers who were tired of fighting
                complex, legacy enterprise software. We believe infrastructure
                should be invisible, reliable, and beautiful.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 tracking-tight">
              Leadership
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'CEO & Founder',
                prev: 'ex-Stripe, Vercel',
              },
              {
                name: 'Marcus Johnson',
                role: 'CTO',
                prev: 'ex-AWS, Cloudflare',
              },
              {
                name: 'Elena Rodriguez',
                role: 'Head of Design',
                prev: 'ex-Linear, Apple',
              },
            ].map((person, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group">
                  <div className="aspect-square bg-slate-100 rounded-3xl mb-6 overflow-hidden relative">
                    {/* Placeholder for sleek portrait */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 mix-blend-multiply" />
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-heading text-4xl font-bold opacity-20">
                      {person.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {person.name}
                  </h3>
                  <p className="text-primary font-medium mb-1">{person.role}</p>
                  <p className="text-sm text-slate-500 mb-4">{person.prev}</p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      <FaTwitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}