import React from 'react'
import { Link } from 'react-router-dom'

export default function SVXSDashboard(){
  const projects = [
    { name: 'Nova Commerce', status: 'In Progress' },
    { name: 'PulseCare', status: 'Draft' },
    { name: 'MetaDrive', status: 'Completed' },
  ]
  const templates = ['Brand Kit', 'Landing Launch', 'E‑com Seed', 'Pitch Deck']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-4xl font-extrabold">SVXS Studios</h1>
        <Link to="/svxs/workspace" className="px-4 py-2 rounded-lg bg-primary/30 border border-primary/50">New Project</Link>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-semibold mb-3">Recent Projects</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {projects.map(p => <li key={p.name} className="flex items-center justify-between"><span>{p.name}</span><span className="text-xs opacity-70">{p.status}</span></li>)}
          </ul>
        </div>
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-semibold mb-3">Template Library</h3>
          <div className="flex flex-wrap gap-2">
            {templates.map(t => <span key={t} className="px-3 py-1 rounded-full border bg-white/5 border-white/10">{t}</span>)}
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
        <h3 className="font-semibold mb-3">Quick Shortcuts</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          {['Upload Assets','Generate Logo','Create Landing','Spin Up Repo','Deploy'].map(s => (
            <button key={s} className="px-3 py-1 rounded-full border bg-white/5 border-white/10 hover:bg-white/10">{s}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
