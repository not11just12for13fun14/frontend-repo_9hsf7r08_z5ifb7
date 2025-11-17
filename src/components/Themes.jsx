import React from 'react'
import { useTheme } from './ThemeContext'

export default function Themes(){
  const { theme, setTheme } = useTheme()
  const cards = [
    { key: 'black', name: 'Black Mode', cls: 'theme-black' },
    { key: 'white', name: 'White Mode', cls: 'theme-white' },
    { key: 'neon', name: 'Neon Blue', cls: 'theme-neon' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-8">Themes</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map(c => (
          <button key={c.key} onClick={()=>setTheme(c.key)} className={`p-6 rounded-xl border transition bg-white/5 border-white/10 hover:bg-white/10 ${theme===c.key?'ring-2 ring-primary/60':''}`}>
            <div className={`${c.cls} rounded-lg p-8 h-40 flex items-end justify-between`}> 
              <span className="font-semibold">{c.name}</span>
              <span className="text-xs opacity-70">Click to apply</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
