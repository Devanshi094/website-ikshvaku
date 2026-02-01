import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import CareersPage from './pages/CareersPage'
import ContactPage from './pages/ContactPage'

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  return null
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-sky-light via-sky-medium to-mint flex flex-col items-center justify-center z-50">
        <div className="flex gap-3 mb-6">
          <div className="w-5 h-5 rounded-full bg-gradient-mint animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-5 h-5 rounded-full bg-gradient-mint animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-5 h-5 rounded-full bg-gradient-mint animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        <p className="font-display text-xl font-semibold text-dark tracking-widest animate-pulse">
          Ikshvaku Solutions
        </p>
      </div>
    )
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-sky-light overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
