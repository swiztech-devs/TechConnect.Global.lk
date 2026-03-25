'use client'

import React, { useState } from 'react'
import { FadeIn } from '@/Components/ui/FadeIn'
import { Button } from '@/Components/ui/Button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formState, setFormState] = useState({ status: 'idle' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ status: 'submitting' })
    setTimeout(() => setFormState({ status: 'success' }), 1500)
  }

  return (
    <main className="w-full pt-24 pb-32 bg-background min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 relative z-10">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-5xl font-bold mb-6 tracking-tight font-heading">
              Contact Sales
            </h1>
            <p className="text-xl text-slate-600">
              Discover how TechConnect Global can help your team build faster and scale infinitely.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Form */}
          <FadeIn delay={0.1} className="md:col-span-3">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-200/60">
              {formState.status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">Request received</h3>
                  <p className="text-slate-600 mb-8">Our team will be in touch within 24 hours.</p>
                  <Button variant="outline" onClick={() => setFormState({ status: 'idle' })}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-900">First Name</label>
                      <input required type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-900">Last Name</label>
                      <input required type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900">Work Email</label>
                    <input required type="email" placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900">Company Size</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none">
                      <option>1-50 employees</option>
                      <option>51-200 employees</option>
                      <option>201-1000 employees</option>
                      <option>1000+ employees</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900">How can we help?</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" />
                  </div>
                  <Button type="submit" variant="primary" className="w-full group"
                    disabled={formState.status === 'submitting'} magnetic>
                    {formState.status === 'submitting' ? 'Sending...' : 'Contact Sales'}
                    {formState.status === 'idle' && (
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Info Side */}
          <FadeIn delay={0.2} className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Technical Support</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Need help with your current implementation? Check our docs or contact support.
              </p>
              <a href="#" className="text-primary font-medium hover:text-primary/80 text-sm flex items-center">
                Go to Support <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="h-px w-full bg-slate-200/60" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Global Offices</h3>
              <div className="space-y-4 mt-4">
                <div>
                  <p className="font-medium text-slate-900 text-sm">San Francisco</p>
                  <p className="text-slate-500 text-sm">100 Innovation Drive, SF 94105</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900 text-sm">London</p>
                  <p className="text-slate-500 text-sm">12 Tech Square, EC1A 1BB</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  )
}