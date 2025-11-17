import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()
const themes = {
  black: {
    name: 'Black',
    class: 'theme-black',
  },
  white: {
    name: 'White',
    class: 'theme-white',
  },
  neon: {
    name: 'Neon Blue',
    class: 'theme-neon',
  },
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('svxs-theme') || 'neon')

  useEffect(() => {
    document.documentElement.classList.remove('theme-black', 'theme-white', 'theme-neon')
    document.documentElement.classList.add(themes[theme].class)
    localStorage.setItem('svxs-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
