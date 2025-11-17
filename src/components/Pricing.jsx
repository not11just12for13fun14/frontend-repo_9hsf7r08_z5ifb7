import React, { useMemo, useState } from 'react'

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

const subMap = {
  'company-registration': ['name-reservation','tax-setup','banking-assist','compliance-pack','domain-setup'],
  'brand-identity': ['logo-pro','brand-guidelines','stationery-kit','color-system','social-pack'],
}

const addons = Array.from({length: 32}, (_,i)=>`addon-${i+1}`)
const features = Array.from({length: 32}, (_,i)=>`feature-${i+1}`)
const currencies = ['USD','ZAR','NGN','KES','GHS']

export default function Pricing(){
  const [service, setService] = useState(primaryServices[0].slug)
  const [subs, setSubs] = useState([])
  const [adds, setAdds] = useState([])
  const [feats, setFeats] = useState([])
  const [currency, setCurrency] = useState('USD')
  const [region, setRegion] = useState('ZA')
  const [coupon, setCoupon] = useState('AFRICA10')
  const [result, setResult] = useState(null)

  const availableSubs = useMemo(()=> subMap[service] || [], [service])

  const toggle = (setter, list, item) => {
    if (list.includes(item)) setter(list.filter(i=>i!==item))
    else setter([...list, item])
  }

  const calculate = async () => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const res = await fetch(`${baseUrl}/pricing/calculate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ service_slug: service, subservice_slugs: subs, addon_slugs: adds, feature_slugs: feats, currency, region, coupon })
    })
    const data = await res.json()
    setResult(data)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-8">Pricing Calculator</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <label className="text-sm text-muted-foreground">Primary Service</label>
            <select className="mt-1 w-full bg-transparent border border-white/10 rounded-lg p-2" value={service} onChange={e=>setService(e.target.value)}>
              {primaryServices.map(s=> <option key={s.slug} value={s.slug}>{s.name}</option>)}
            </select>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2">Sub-services</h3>
            <div className="flex flex-wrap gap-2">
              {availableSubs.map(s => (
                <button key={s} onClick={()=>toggle(setSubs, subs, s)} className={`px-3 py-1 rounded-full border ${subs.includes(s)?'bg-primary/30 border-primary/50':'bg-white/5 border-white/10'}`}>{s}</button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-semibold mb-2">Add-ons</h3>
              <div className="flex flex-wrap gap-2 max-h-48 overflow-auto">
                {addons.map(a => (
                  <button key={a} onClick={()=>toggle(setAdds, adds, a)} className={`px-3 py-1 rounded-full border ${adds.includes(a)?'bg-primary/30 border-primary/50':'bg-white/5 border-white/10'}`}>{a}</button>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-semibold mb-2">Special Features</h3>
              <div className="flex flex-wrap gap-2 max-h-48 overflow-auto">
                {features.map(f => (
                  <button key={f} onClick={()=>toggle(setFeats, feats, f)} className={`px-3 py-1 rounded-full border ${feats.includes(f)?'bg-primary/30 border-primary/50':'bg-white/5 border-white/10'}`}>{f}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <label className="text-sm text-muted-foreground">Currency</label>
            <select className="mt-1 w-full bg-transparent border border-white/10 rounded-lg p-2" value={currency} onChange={e=>setCurrency(e.target.value)}>
              {currencies.map(c=> <option key={c} value={c}>{c}</option>)}
            </select>
            <label className="mt-4 block text-sm text-muted-foreground">Region</label>
            <select className="mt-1 w-full bg-transparent border border-white/10 rounded-lg p-2" value={region} onChange={e=>setRegion(e.target.value)}>
              {['ZA','NG','KE','GH'].map(r=> <option key={r} value={r}>{r}</option>)}
            </select>
            <label className="mt-4 block text-sm text-muted-foreground">Coupon</label>
            <input className="mt-1 w-full bg-transparent border border-white/10 rounded-lg p-2" value={coupon} onChange={e=>setCoupon(e.target.value)} placeholder="Optional" />
            <button onClick={calculate} className="mt-4 w-full px-4 py-2 rounded-lg bg-primary/30 border border-primary/50">Calculate</button>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10 min-h-[160px]">
            <h3 className="font-semibold mb-2">Summary</h3>
            {!result ? <p className="text-sm text-muted-foreground">Choose options and calculate.</p> : (
              <div className="text-sm space-y-1">
                <p>Subtotal (USD): <span className="font-mono">${'{'}result.subtotal_usd{'}'}</span></p>
                <p>Discount (USD): <span className="font-mono">-${'{'}result.discount_usd{'}'}</span></p>
                <p>Total (USD): <span className="font-mono">${'{'}result.total_usd{'}'}</span></p>
                <p>Total ({'{' }currency{ '}' }): <span className="font-mono">${'{'}result.total_converted{'}'}</span></p>
                {result.credits?.length>0 && (
                  <div className="mt-2">
                    <p className="font-semibold">Credits</p>
                    <ul className="list-disc pl-5">
                      {result.credits.map((c, i)=> <li key={i}>{c.type} — {c.slug} {c.amount?`($${'{' }c.amount{ '}' })`:''}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
