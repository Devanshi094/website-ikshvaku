import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ]

    // Check if we're on home page (has video background)
    const isHomePage = location.pathname === '/'

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3'
                : isHomePage
                    ? 'bg-dark/30 backdrop-blur-md py-5'
                    : 'bg-white/80 backdrop-blur-md py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 animate-float">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="18" stroke="url(#logo-grad)" strokeWidth="3" />
                            <path d="M12 20L18 14L24 20L18 26L12 20Z" fill="url(#logo-grad)" />
                            <path d="M20 12L26 18L20 24L14 18L20 12Z" fill="url(#logo-grad)" fillOpacity="0.6" />
                            <defs>
                                <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40">
                                    <stop offset="0%" stopColor="#4DB6AC" />
                                    <stop offset="100%" stopColor="#00897B" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span className={`font-display text-xl font-bold transition-colors ${isScrolled || !isHomePage ? 'gradient-text' : 'text-white'
                        }`}>Ikshvaku</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.href}
                            className={`relative text-sm font-medium transition-colors group ${location.pathname === link.href
                                    ? 'text-mint'
                                    : isScrolled || !isHomePage
                                        ? 'text-dark hover:text-mint-deep'
                                        : 'text-white/90 hover:text-mint'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-mint transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                        </Link>
                    ))}
                    <Link to="/contact" className="btn-primary text-sm">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen
                            ? 'bg-dark rotate-45 translate-y-2'
                            : isScrolled || !isHomePage ? 'bg-dark' : 'bg-white'
                        }`}></span>
                    <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen
                            ? 'opacity-0'
                            : isScrolled || !isHomePage ? 'bg-dark' : 'bg-white'
                        }`}></span>
                    <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen
                            ? 'bg-dark -rotate-45 -translate-y-2'
                            : isScrolled || !isHomePage ? 'bg-dark' : 'bg-white'
                        }`}></span>
                </button>

                {/* Mobile Menu */}
                <div className={`lg:hidden fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-white/98 backdrop-blur-xl 
          flex flex-col justify-center items-center gap-8 transition-transform duration-300 shadow-2xl
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.href}
                            className={`text-lg font-medium transition-colors ${location.pathname === link.href ? 'text-mint-deep' : 'text-dark hover:text-mint-deep'
                                }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
