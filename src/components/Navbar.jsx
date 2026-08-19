import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    const frame = useRef(0)

    // Coalesced to one read per frame — scroll fires far more often than the
    // screen refreshes, and reading scrollY in the handler forces layout.
    useEffect(() => {
        const measure = () => {
            frame.current = 0
            setIsScrolled(window.scrollY > 50)
        }
        const onScroll = () => {
            if (frame.current) return
            frame.current = requestAnimationFrame(measure)
        }

        measure()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', onScroll)
            if (frame.current) cancelAnimationFrame(frame.current)
        }
    }, [])

    // Lock the page while the mobile sheet is open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isMobileMenuOpen])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className="fixed top-3 sm:top-[18px] left-0 right-0 z-[140] flex justify-center px-4 sm:px-6 lg:px-10 pointer-events-none">
            <nav
                className="pointer-events-auto w-full max-w-[1200px] flex items-center gap-4 lg:gap-7 rounded-[14px] pl-[14px] sm:pl-[18px] pr-2 sm:pr-3 py-2.5 sm:py-[11px] transition-all duration-500"
                style={{
                    background: isScrolled ? 'rgba(255,255,255,.78)' : 'rgba(255,255,255,.62)',
                    backdropFilter: 'blur(22px) saturate(150%)',
                    WebkitBackdropFilter: 'blur(22px) saturate(150%)',
                    border: '1px solid rgba(255,255,255,.8)',
                    boxShadow: isScrolled
                        ? '0 1px 0 rgba(255,255,255,.9) inset, 0 14px 40px -26px rgba(25,26,31,.6)'
                        : '0 1px 0 rgba(255,255,255,.9) inset, 0 10px 30px -22px rgba(25,26,31,.5)',
                }}
            >
                {/* Logo — blue bar + wordmark */}
                <Link to="/" className="flex items-center gap-2.5 mr-auto group min-w-0">
                    <span className="block w-[9px] sm:w-[11px] h-5 sm:h-6 bg-marine flex-shrink-0 transition-transform duration-500 group-hover:scale-y-110"></span>
                    <span className="font-display font-semibold text-[15px] sm:text-base tracking-[-0.02em] truncate">
                        Ikshvaku<span className="text-ink/45 font-normal"> Solutions</span>
                    </span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden lg:flex gap-[26px] text-[13.5px] font-medium">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`relative py-1 transition-colors duration-300 ${isActive ? 'text-ink' : 'text-ink/70 hover:text-marine'
                                    }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-marine transition-all duration-500 ${isActive ? 'w-full' : 'w-0'
                                        }`}
                                ></span>
                            </Link>
                        )
                    })}
                </div>

                <Link to="/contact" className="hidden lg:inline-flex btn-ink btn-sm">
                    Talk to an Expert
                    <span className="leading-none">→</span>
                </Link>

                {/* Mobile toggle */}
                <button
                    className="lg:hidden flex flex-col gap-[5px] p-2 z-[160] ml-auto"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className={`w-[22px] h-[1.5px] bg-ink transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}></span>
                    <span className={`w-[22px] h-[1.5px] bg-ink transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-[22px] h-[1.5px] bg-ink transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}></span>
                </button>
            </nav>

            {/* Mobile sheet */}
            <div
                className={`lg:hidden fixed inset-0 z-[150] transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                style={{
                    background: 'rgba(242,240,235,.92)',
                    backdropFilter: 'blur(24px) saturate(150%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(150%)',
                }}
            >
                <div className="h-full overflow-y-auto overscroll-contain flex flex-col justify-center w-full max-w-[520px] mx-auto px-6 py-24">
                    <div className="eyebrow eyebrow-rule mb-6 sm:mb-8">Menu</div>
                    <div className="rule-list">
                        {navLinks.map((link, i) => {
                            const isActive = location.pathname === link.href
                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-baseline justify-between py-4 sm:py-5 border-b"
                                    style={{ borderColor: 'var(--rule)' }}
                                >
                                    <span className={`font-display text-[24px] sm:text-[28px] font-semibold tracking-[-0.03em] ${isActive ? 'text-marine' : ''}`}>
                                        {link.name}
                                    </span>
                                    <span className="text-[10.5px] font-semibold tracking-[0.14em] text-ink/35">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                    <Link
                        to="/contact"
                        className="btn-ink mt-7 sm:mt-9 justify-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Talk to an Expert
                        <span className="leading-none">→</span>
                    </Link>
                    <p className="mt-5 font-script text-[19px] text-clay/95">
                        we respond within 24 hours
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Navbar
