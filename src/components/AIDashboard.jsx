import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, Settings2, PanelLeftOpen, PanelRightOpen, Home, Calculator, Wrench } from 'lucide-react'

function Panel({ side, open, setOpen, children }){
  const isLeft = side === 'left'
  return (
    <motion.aside
      initial={false}
      animate={{ x: open ? 0 : isLeft ? '-100%' : '100%' }}
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      className={`fixed top-16 ${isLeft ? 'left-0' : 'right-0'} h-[calc(100vh-4rem)] w-72 md:w-80 bg-white/5 border border-white/10 backdrop-blur z-40 p-4 overflow-y-auto`}
    >
      <button onClick={()=>setOpen(false)} className="text-xs opacity-70">Close</button>
      {children}
    </motion.aside>
  )
}

export default function AIDashboard(){
  const [leftOpen, setLeftOpen] = useState(true)
  const [rightOpen, setRightOpen] = useState(true)

  useEffect(()=>{
    const handler = (e) => {
      // swipe right to open left panel; swipe left to open right panel
      let touchstartX = 0
      let touchendX = 0
      const start = (t)=>touchstartX=t.changedTouches[0].screenX
      const end = (t)=>{
        touchendX=t.changedTouches[0].screenX
        const dx = touchendX - touchstartX
        if (dx > 80) setLeftOpen(true)
        if (dx < -80) setRightOpen(true)
      }
      window.addEventListener('touchstart', start, { passive:true })
      window.addEventListener('touchend', end, { passive:true })
      return () => {
        window.removeEventListener('touchstart', start)
        window.removeEventListener('touchend', end)
      }
    }
    handler()
  }, [])

  return (
    <div className="min-h-[calc(100vh-4rem)] relative">
      <div className="sticky top-16 z-30 flex items-center gap-3 bg-black/20 backdrop-blur px-4 py-2 border-b border-white/10">
        <button onClick={()=>setLeftOpen(v=>!v)} className="px-3 py-1 rounded bg-white/5 border border-white/10"><PanelLeftOpen className="w-4 h-4" /></button>
        <button onClick={()=>setRightOpen(v=>!v)} className="px-3 py-1 rounded bg-white/5 border border-white/10"><PanelRightOpen className="w-4 h-4" /></button>
        <div className="text-sm opacity-80">AI Dashboard</div>
      </div>

      <Panel side="left" open={leftOpen} setOpen={setLeftOpen}>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">AI Home</h4>
            <p className="text-xs text-muted-foreground">Overview of models and status.</p>
          </div>
          <div>
            <h4 className="font-semibold">AI Tools – SVXS Studios</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>Design Synth</li>
              <li>Code Forge</li>
              <li>Text Wizard</li>
              <li>Calculator</li>
              <li>Data Shaper</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">AI Bots</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>DonAI (personal assistant)</li>
              <li>Designor</li>
              <li>CodeFlux</li>
              <li>VidSynth</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">AI Projects</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>NeoBank Onboarding</li>
              <li>HoloWear Launch</li>
              <li>AgriSense Portal</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">AI About</h4>
            <p className="text-xs text-muted-foreground">Multi-agent orchestration, vector memory, and tools.</p>
          </div>
        </div>
      </Panel>

      <Panel side="right" open={rightOpen} setOpen={setRightOpen}>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">AI Updates</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>SVXS 1.0 online</li>
              <li>New AI tools added</li>
              <li>Improved inference speed</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">AI Settings</h4>
            <p className="text-xs text-muted-foreground">Temperature, system prompts, memory size.</p>
          </div>
          <div>
            <h4 className="font-semibold">Time & Date</h4>
            <p className="text-xs text-muted-foreground">{new Date().toLocaleString()}</p>
          </div>
          <div>
            <h4 className="font-semibold">More AI FAQs</h4>
            <p className="text-xs text-muted-foreground">How do tools chain? How do we fine-tune?</p>
          </div>
        </div>
      </Panel>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 min-h-[50vh]">
          <h2 className="text-xl font-semibold mb-2">Workspace</h2>
          <p className="text-muted-foreground">Panels are collapsible. On mobile, swipe right to open the left panel and swipe left to open the right panel.</p>
        </div>
      </main>
    </div>
  )
}
