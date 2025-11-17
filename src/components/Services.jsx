import React from 'react'
import { motion } from 'framer-motion'

const primaryServices = [
  { slug: 'company-registration', name: 'Company Registration' },
  { slug: 'brand-identity', name: 'Brand Identity' },
  { slug: 'landing-page', name: 'Landing Page' },
  { slug: 'ecommerce', name: 'E‑commerce' },
  { slug: 'app-prototype', name: 'App Prototype' },
  { slug: 'ai-automation', name: 'AI Automation' },
  { slug: 'video-production', name: 'Video Production' },
  { slug: '3d-motion', name: '3D Motion' },
  { slug: 'marketing-suite', name: 'Marketing Suite' },
  { slug: 'cloud-deploy', name: 'Cloud Deploy' },
  { slug: 'cyber-audit', name: 'Cyber Audit' },
]

const subServicesPer = (serviceSlug) => {
  const map = {
    'company-registration': ['Name Reservation','Tax Setup','Banking Assist','Compliance Pack','Domain Setup'],
    'brand-identity': ['Logo Pro','Brand Guidelines','Stationery Kit','Color System','Social Pack'],
    'landing-page': ['Copywriting','Wireframe','CMS Setup','SEO Basics','Analytics'],
    'ecommerce': ['Catalog Setup','Payment Gateway','Shipping Rules','Tax Zones','CRM'],
    'app-prototype': ['User Flows','Design System','Clickable Prototype','Micro-interactions','User Testing'],
    'ai-automation': ['Lead Scoring','Email Agent','Chatbot','CRM Sync','Report Builder'],
    'video-production': ['Script','Storyboard','Shoot','Edit','Sound Design'],
    '3d-motion': ['Modeling','Texturing','Rigging','Animation','Render'],
    'marketing-suite': ['Content Plan','Ads Setup','Retargeting','Landing Opt','Insights'],
    'cloud-deploy': ['Infra Setup','CI/CD','Monitoring','Backups','CDN'],
    'cyber-audit': ['Pen Test','SOC Review','Policy Pack','Access Audit','Report'],
  }
  return map[serviceSlug] || []
}

const addons = Array.from({length: 32}, (_,i)=>`Addon ${i+1}`)
const features = Array.from({length: 32}, (_,i)=>`Feature ${i+1}`)

export default function Services(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-8">Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {primaryServices.map((svc, idx) => (
          <motion.div key={svc.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx*0.03 }} className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{svc.name}</h2>
              <span className="text-xs text-muted-foreground">{subServicesPer(svc.slug).length} sub-services</span>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {subServicesPer(svc.slug).map(ss => (
                <li key={ss} className="px-2 py-1 rounded-md bg-white/5 border border-white/10">{ss}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-semibold mb-3">Add-ons</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
            {addons.map(a => <span key={a} className="px-2 py-1 rounded-md bg-white/5 border border-white/10">{a}</span>)}
          </div>
        </div>
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-semibold mb-3">Special Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
            {features.map(f => <span key={f} className="px-2 py-1 rounded-md bg-white/5 border border-white/10">{f}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}
