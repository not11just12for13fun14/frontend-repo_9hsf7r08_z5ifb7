import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SVXSLoader(){
  const nav = useNavigate()
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black text-cyan-200">
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,255,255,0.08)_0px,rgba(0,255,255,0.08)_2px,transparent_2px,transparent_6px)]" />
      </div>
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-4xl font-extrabold">SVXS Studios</h1>
        <p className="text-sm opacity-80">Matrix initializing…</p>
        <button onClick={()=>nav('/svxs/dashboard')} className="px-6 py-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-300/40 backdrop-blur">Enter SVXS Dashboard</button>
      </div>
    </div>
  )
}
