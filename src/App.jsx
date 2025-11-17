import React, { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoaderGate from './components/LoaderGate'
import Home from './components/Home'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Themes from './components/Themes'
import AIDashboard from './components/AIDashboard'
import SVXSLoader from './components/SVXSLoader'
import SVXSDashboard from './components/SVXSDashboard'
import SVXSWorkspace from './components/SVXSWorkspace'
import { ThemeProvider } from './components/ThemeContext'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LoaderGate />} />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <Services />
                <Footer />
              </>
            }
          />
          <Route
            path="/pricing"
            element={
              <>
                <Navbar />
                <Pricing />
                <Footer />
              </>
            }
          />
          <Route
            path="/themes"
            element={
              <>
                <Navbar />
                <Themes />
                <Footer />
              </>
            }
          />
          <Route
            path="/ai"
            element={
              <>
                <Navbar />
                <AIDashboard />
              </>
            }
          />
          <Route path="/svxs" element={<SVXSLoader />} />
          <Route
            path="/svxs/dashboard"
            element={
              <>
                <Navbar />
                <SVXSDashboard />
              </>
            }
          />
          <Route
            path="/svxs/workspace"
            element={
              <>
                <Navbar />
                <SVXSWorkspace />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}
