import React, { useState } from 'react'

function Panel({ side, open, setOpen, children }){
  const isLeft = side === 'left'
  return (
    <div className={`fixed top-16 ${isLeft?'left-0':'right-0'} w-64 md:w-80 h-[calc(100vh-4rem)] bg-white/5 border border-white/10 backdrop-blur z-40 transition-transform ${open? 'translate-x-0' : isLeft? '-translate-x-full':'translate-x-full'}`}>
      <div className="p-3 text-xs opacity-70"><button onClick={()=>setOpen(false)}>Close</button></div>
      <div className="p-4 overflow-y-auto h-full">{children}</div>
    </div>
  )
}

export default function SVXSWorkspace(){
  const [leftOpen, setLeftOpen] = useState(true)
  const [rightOpen, setRightOpen] = useState(false)

  return (
    <div className="min-h-[calc(100vh-4rem)] relative">
      <div className="sticky top-16 z-30 flex items-center gap-3 bg-black/20 backdrop-blur px-4 py-2 border-b border-white/10">
        <button onClick={()=>setLeftOpen(v=>!v)} className="px-3 py-1 rounded bg-white/5 border border-white/10">Toggle Left</button>
        <button onClick={()=>setRightOpen(v=>!v)} className="px-3 py-1 rounded bg-white/5 border border-white/10">Toggle Right</button>
        <div className="text-sm opacity-80">SVXS Workspace</div>
      </div>

      <Panel side="left" open={leftOpen} setOpen={setLeftOpen}>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Files</p>
          <p>Assets</p>
          <p>Templates</p>
        </div>
      </Panel>

      <Panel side="right" open={rightOpen} setOpen={setRightOpen}>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Inspector</p>
          <p>Properties</p>
          <p>Timeline</p>
        </div>
      </Panel>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 min-h-[50vh]">
          <div className="animate-pulse text-muted-foreground">Loading workspace environment…</div>
        </div>
      </main>
    </div>
  )
}
