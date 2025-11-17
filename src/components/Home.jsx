import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  'Company Registration', 'Brand Identity', 'Landing Pages', 'E‑commerce', 'App Prototype', 'AI Automation', 'Video Production', '3D Motion', 'Marketing Suite', 'Cloud Deploy', 'Cyber Audit'
]

export default function Home() {
  return (
    <div>
      <section className="relative h-[70vh] md:h-[75vh] overflow-hidden">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl md:text-5xl font-extrabold">
            SVXS — Future Crafted
          </motion.h1>
          <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary backdrop-blur">
            Explore Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Impact-first creative engineering</h2>
            <p className="text-muted-foreground mb-6">We blend brand, product, and AI into a single studio workflow. Smooth. Fast. Futuristic.</p>
            <Link to="/pricing" className="inline-flex items-center gap-2 text-primary">See Pricing <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {services.map((s) => (
              <div key={s} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <p className="mt-2 text-sm">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">What founders say</h3>
            <p className="text-muted-foreground">“SVXS helped us launch with a brand and product that looks 10x bigger than we were.”</p>
          </div>
          <div className="flex items-center md:justify-end">
            <Link to="/services" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary backdrop-blur">Start a project <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
