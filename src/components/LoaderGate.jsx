import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function MatrixRain() {
  const [chars, setChars] = useState(Array.from({ length: 60 }, () => Math.random()))
  useEffect(() => {
    const i = setInterval(() => setChars(Array.from({ length: 60 }, () => Math.random())), 150)
    return () => clearInterval(i)
  }, [])
  return (
    <div className="absolute inset-0 overflow-hidden opacity-60">
      <div className="grid grid-cols-12 h-full">
        {chars.map((c, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -top-20 h-[140%] w-px bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent animate-[matrix_2.5s_linear_infinite]" style={{ animationDelay: `${(idx%12)*0.15}s` }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function LoaderGate() {
  const nav = useNavigate()
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {}, 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <MatrixRain />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,200,255,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,128,255,0.15),transparent_40%)]" />
      </div>
      <AnimatePresence>
        {show && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Sithebe VisionX Studios
            </h1>
            <p className="text-cyan-300/80">Cyber-futuristic creative engineering</p>
            <button
              onClick={() => nav('/home')}
              className="px-8 py-3 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-300/40 backdrop-blur text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all"
            >
              Explore
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <style>
        {`@keyframes matrix { 0% { transform: translateY(-100%);} 100% { transform: translateY(100%);} }`}
      </style>
    </div>
  )
}
