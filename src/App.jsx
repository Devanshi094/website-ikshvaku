import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

// Per-route document titles, matching ikshvakusolutions.com
const PAGE_TITLES = {
  '/': 'Ikshvaku Solutions — Enterprise AI & Software Engineering',
  '/services': 'Capability — Six Lines of Work | Ikshvaku Solutions',
  '/projects': 'Selected Work — Fifty Projects, Nine Industries | Ikshvaku Solutions',
  '/about': 'The Practice — We Architect Systems | Ikshvaku Solutions',
  '/contact': "Contact — Let's Build Together | Ikshvaku Solutions",
}

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Instant, never smooth. A smooth scroll here would animate through a
    // page that React is swapping out underneath it — the old content flies
    // past while the new content mounts. Smooth belongs on in-page anchors,
    // where there is a real position to travel between.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.title = PAGE_TITLES[pathname] ?? PAGE_TITLES['/']
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
      <div className="fixed inset-0 bg-paper flex flex-col items-center justify-center z-50">
        <div className="paper-field"></div>
        <div className="paper-grid"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-end gap-1.5 mb-7 h-6">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="w-[7px] bg-marine animate-bob"
                style={{ height: `${10 + i * 4}px`, animationDelay: `${i * 120}ms` }}
              ></span>
            ))}
          </div>
          <p className="font-display text-base font-semibold tracking-[-0.02em]">
            Ikshvaku<span className="text-ink/45 font-normal"> Solutions</span>
          </p>
          <p className="mt-3 text-[10.5px] font-semibold tracking-[0.16em] uppercase text-ink/40">
            Enterprise AI · Software Engineering
          </p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-paper overflow-x-clip">
        {/* Fixed backdrop: soft washes over a masked 44px grid */}
        <div className="paper-field"></div>
        <div className="paper-grid"></div>

        <div className="relative z-[1]">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Anything unmatched — including the retired /careers — goes home
                  rather than rendering an empty page between nav and footer. */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>

        {/* Fixed chrome — outside <main>, so it is not part of any route */}
        <WhatsAppFab />
      </div>
    </Router>
  )
}

export default App
