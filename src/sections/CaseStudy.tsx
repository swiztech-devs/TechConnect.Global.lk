import React from 'react'
import { FadeIn } from '@/Components/ui/FadeIn'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Link from 'next/link' 

export function CaseStudy() {
  return (
    <main className="w-full pt-24 pb-32 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <FadeIn>
          <Link href="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-12 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold tracking-wide uppercase">
                FinTech
              </span>
              <span className="text-slate-400 text-sm">2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight font-heading">
              Scaling global payments to 10,000 TPS with zero downtime.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-12">
              How GlobalPay migrated from legacy monoliths to NexusTech's edge
              architecture to handle Black Friday volume.
            </p>
          </div>

          {/* Sleek Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200/60 rounded-3xl overflow-hidden mb-20 border border-slate-200/60">
            {[
              {
                val: '10k',
                label: 'Transactions / sec',
              },
              {
                val: '12ms',
                label: 'P99 Latency',
              },
              {
                val: '0',
                label: 'Downtime incidents',
              },
              {
                val: '60%',
                label: 'Cost reduction',
              },
            ].map((metric, i) => (
              <div key={i} className="bg-white p-8">
                <div className="text-3xl font-bold text-slate-900 mb-2 font-heading tracking-tight">
                  {metric.val}
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Clean reading experience */}
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
              The Challenge
            </h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              GlobalPay's legacy infrastructure was buckling under the weight of
              their rapid growth. During peak shopping events, their monolithic
              database would lock, causing transaction failures and unacceptable
              latency spikes. They needed a solution that could scale
              horizontally without rewriting their entire application logic.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
              The Architecture
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              We implemented a distributed edge architecture using NexusTech
              Core. By moving the validation and routing logic to the edge, we
              reduced the load on the central database by 80%.
            </p>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-12 font-mono text-sm text-slate-600">
              // Edge routing configuration
              <br />
              export default function middleware(req) {'{'}
              <br />
              &nbsp;&nbsp;const region = req.geo.region;
              <br />
              &nbsp;&nbsp;return Nexus.route(req, {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;target: `db-${'{'}region{'}'}.internal`,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;fallback: 'db-global.internal'
              <br />
              &nbsp;&nbsp;{'}'});
              <br />
              {'}'}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
              The Outcome
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The migration was completed in 6 weeks with zero downtime. During
              the subsequent Black Friday event, GlobalPay processed record
              volume with a flat latency profile, saving an estimated $4.2M in
              potential lost revenue.
            </p>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-200/50">
            <a
              href="#"
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
            >
              Read the technical whitepaper{' '}
              <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}