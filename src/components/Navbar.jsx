import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles, Sun, Moon, Star, DollarSign, ChevronDown } from 'lucide-react'
import { useTheme } from './ThemeContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [currency, setCurrency] = useState('USD')
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  const navItem = (to, label) => (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all hover:opacity-90 ${
        location.pathname === to ? 'bg-white/10' : 'hover:bg-white/5'
      }`}
    >
      {label}
    </Link>
  )

  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-primary" />
            <Link to="/home" className="font-semibold tracking-wide">SVXS</Link>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {navItem('/home', 'Home')}
            {navItem('/services', 'Services')}
            {navItem('/pricing', 'Pricing')}
            {navItem('/ai', 'AI')}
            {navItem('/svxs/dashboard', 'Studios')}
            {navItem('/themes', 'Themes')}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative group">
              <button className="inline-flex items-center gap-1 text-sm px-2 py-1 rounded-md hover:bg-white/5">
                <DollarSign className="w-4 h-4" />
                {currency}
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute right-0 mt-2 hidden group-hover:block bg-popover text-popover-foreground rounded-lg border border-white/10 shadow-lg min-w-[8rem]">
                {['USD','ZAR','NGN','KES','GHS'].map(c => (
                  <button key={c} onClick={() => setCurrency(c)} className="w-full text-left px-3 py-2 hover:bg-white/5">
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button className="inline-flex items-center gap-2 text-sm px-2 py-1 rounded-md hover:bg-white/5">
                {theme === 'white' ? <Sun className="w-4 h-4" /> : theme === 'neon' ? <Star className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                Themes
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute right-0 mt-2 hidden group-hover:block bg-popover text-popover-foreground rounded-lg border border-white/10 shadow-lg min-w-[10rem]">
                <button onClick={() => setTheme('black')} className="w-full text-left px-3 py-2 hover:bg-white/5">Black</button>
                <button onClick={() => setTheme('white')} className="w-full text-left px-3 py-2 hover:bg-white/5">White</button>
                <button onClick={() => setTheme('neon')} className="w-full text-left px-3 py-2 hover:bg-white/5">Neon Blue</button>
                <Link to="/themes" className="block px-3 py-2 hover:bg-white/5 text-primary">View All</Link>
              </div>
            </div>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
          <div className="grid grid-cols-2 gap-3">
            <Link to="/home" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-white/5">Home</Link>
            <Link to="/services" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-white/5">Services</Link>
            <Link to="/pricing" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-white/5">Pricing</Link>
            <Link to="/ai" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-white/5">AI</Link>
            <Link to="/svxs/dashboard" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-white/5">Studios</Link>
            <Link to="/themes" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-white/5">Themes</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
