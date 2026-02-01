import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import heroVideo from '../assets/AI_for_Business_A_Demo.mp4'

const Hero = () => {
    // Typing effect state
    const [displayText, setDisplayText] = useState('')
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const phrases = [
        'AI-Powered Innovation',
        'Intelligent Automation',
        'Predictive Analytics',
        'Smart Enterprise Solutions',
        'Machine Learning Excellence'
    ]

    // Typing effect
    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentPhrase.length) {
                    setDisplayText(currentPhrase.slice(0, displayText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1))
                } else {
                    setIsDeleting(false)
                    setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentPhraseIndex])

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-24">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark/80 via-dark-medium/70 to-dark/80"></div>
                {/* Mint/Teal color overlay for brand consistency */}
                <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-transparent to-teal/10"></div>
            </div>

            {/* Animated Particles Overlay */}
            <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-mint/40 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${4 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-[1]" style={{
                backgroundImage: 'linear-gradient(rgba(77, 182, 172, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 182, 172, 0.03) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }}></div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content - Left Side */}
                    <div className="order-2 lg:order-1 text-white">
                        {/* AI Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-mint mb-6 border border-mint/30 animate-fade-in-up">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-mint"></span>
                            </span>
                            <span>Powered by Artificial Intelligence</span>
                        </div>

                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-200">
                            <span className="block text-white">We champion</span>
                            <span className="block text-white">the <span className="gradient-text">bold</span> to achieve</span>
                            <span className="block gradient-text">the extraordinary.</span>
                        </h1>

                        {/* Dynamic Typing Text */}
                        <div className="h-10 mb-6 animate-fade-in-up animation-delay-400">
                            <p className="text-xl font-medium text-mint">
                                {displayText}
                                <span className="typing-cursor"></span>
                            </p>
                        </div>

                        <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg animate-fade-in-up animation-delay-600">
                            Ikshvaku Solutions empowers enterprises with cutting-edge AI,
                            cloud computing, and digital transformation strategies.
                            We turn complex challenges into innovative opportunities.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up animation-delay-800">
                            <Link to="/services" className="btn-primary group">
                                <span>Explore AI Solutions</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link to="/contact" className="btn-secondary border-white/30 text-white hover:bg-mint hover:border-mint">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Talk to AI Expert
                            </Link>
                        </div>

                        {/* Stats with glass effect */}
                        <div className="flex flex-wrap items-center gap-6 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 animate-fade-in-up animation-delay-1000">
                            <div className="text-center group cursor-pointer">
                                <div className="font-display text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">30+</div>
                                <div className="text-sm text-white/60">AI Projects</div>
                            </div>
                            <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
                            <div className="text-center group cursor-pointer">
                                <div className="font-display text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">100K+</div>
                                <div className="text-sm text-white/60">AI Predictions</div>
                            </div>
                            <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
                            <div className="text-center group cursor-pointer">
                                <div className="font-display text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">99.5%</div>
                                <div className="text-sm text-white/60">Accuracy Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual - Right Side - AI Brain Visualization */}
                    <div className="order-1 lg:order-2 relative flex items-center justify-center">
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Glowing Background Circle */}
                            <div className="absolute inset-0 bg-gradient-to-br from-mint/20 to-teal/10 rounded-full blur-3xl animate-pulse-glow"></div>

                            {/* AI Brain/Neural Network Visualization */}
                            <div className="relative z-10 flex items-center justify-center">
                                <svg viewBox="0 0 400 400" className="w-full h-auto max-w-sm animate-float">
                                    {/* Outer Rings with Orbit Animation */}
                                    <circle cx="200" cy="200" r="180" fill="none" stroke="url(#ring-grad)" strokeWidth="2" strokeDasharray="10 5" className="animate-spin-slow" style={{ transformOrigin: 'center' }} />
                                    <circle cx="200" cy="200" r="150" fill="none" stroke="url(#ring-grad)" strokeWidth="1.5" opacity="0.5" />
                                    <circle cx="200" cy="200" r="120" fill="none" stroke="url(#ring-grad)" strokeWidth="1" strokeDasharray="5 3" opacity="0.3" />

                                    {/* Core Brain/AI with Glow */}
                                    <circle cx="200" cy="200" r="80" fill="url(#core-grad)" opacity="0.9" className="animate-neural-pulse" />
                                    <circle cx="200" cy="200" r="60" fill="url(#inner-grad)" opacity="0.8" />

                                    {/* AI Circuit Lines - Neural Connections */}
                                    <path d="M200 120 L200 80 M200 280 L200 320" stroke="url(#ring-grad)" strokeWidth="2" />
                                    <path d="M120 200 L80 200 M280 200 L320 200" stroke="url(#ring-grad)" strokeWidth="2" />
                                    <path d="M145 145 L115 115 M255 255 L285 285" stroke="url(#ring-grad)" strokeWidth="2" />
                                    <path d="M255 145 L285 115 M145 255 L115 285" stroke="url(#ring-grad)" strokeWidth="2" />

                                    {/* Data Flow Paths */}
                                    <path d="M200 80 Q250 120 280 200" fill="none" stroke="#4DB6AC" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" className="data-flow-line" />
                                    <path d="M320 200 Q280 250 200 280" fill="none" stroke="#4DB6AC" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" className="data-flow-line" style={{ animationDelay: '0.5s' }} />

                                    {/* Node Points with Pulse */}
                                    <circle cx="200" cy="80" r="10" fill="#4DB6AC" className="animate-glow-pulse" />
                                    <circle cx="200" cy="320" r="10" fill="#4DB6AC" className="animate-glow-pulse animation-delay-400" />
                                    <circle cx="80" cy="200" r="10" fill="#4DB6AC" className="animate-glow-pulse animation-delay-800" />
                                    <circle cx="320" cy="200" r="10" fill="#4DB6AC" className="animate-glow-pulse animation-delay-1000" />
                                    <circle cx="115" cy="115" r="7" fill="#26A69A" className="animate-glow-pulse animation-delay-200" />
                                    <circle cx="285" cy="115" r="7" fill="#26A69A" className="animate-glow-pulse animation-delay-600" />
                                    <circle cx="115" cy="285" r="7" fill="#26A69A" className="animate-glow-pulse animation-delay-1000" />
                                    <circle cx="285" cy="285" r="7" fill="#26A69A" className="animate-glow-pulse animation-delay-400" />

                                    {/* Center AI Core Eye */}
                                    <circle cx="200" cy="200" r="30" fill="#fff" opacity="0.95" />
                                    <circle cx="200" cy="200" r="20" fill="url(#eye-grad)" />
                                    <circle cx="195" cy="195" r="6" fill="#fff" opacity="0.9" />

                                    {/* Orbiting Data Points */}
                                    <g style={{ transformOrigin: '200px 200px' }} className="animate-spin-slow">
                                        <circle cx="200" cy="50" r="4" fill="#06B6D4" />
                                    </g>
                                    <g style={{ transformOrigin: '200px 200px', animationDirection: 'reverse' }} className="animate-spin-slow">
                                        <circle cx="350" cy="200" r="3" fill="#4DB6AC" />
                                    </g>

                                    {/* Gradients */}
                                    <defs>
                                        <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#4DB6AC" />
                                            <stop offset="100%" stopColor="#00897B" />
                                        </linearGradient>
                                        <radialGradient id="core-grad" cx="50%" cy="50%" r="50%">
                                            <stop offset="0%" stopColor="#4DB6AC" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="#00897B" stopOpacity="0.4" />
                                        </radialGradient>
                                        <radialGradient id="inner-grad" cx="50%" cy="50%" r="50%">
                                            <stop offset="0%" stopColor="#80DEEA" />
                                            <stop offset="100%" stopColor="#4DB6AC" />
                                        </radialGradient>
                                        <radialGradient id="eye-grad" cx="50%" cy="50%" r="50%">
                                            <stop offset="0%" stopColor="#00897B" />
                                            <stop offset="100%" stopColor="#1A1A2E" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Floating Tech Cards with Enhanced Animation */}
                            <div className="absolute top-5 left-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-2 animate-float shadow-lg hover-lift cursor-pointer">
                                <div className="w-8 h-8 bg-gradient-mint rounded-lg flex items-center justify-center text-white icon-container">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-semibold text-white">Machine Learning</span>
                            </div>

                            <div className="absolute bottom-16 right-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-2 animate-float animation-delay-1000 shadow-lg hover-lift cursor-pointer">
                                <div className="w-8 h-8 bg-gradient-mint rounded-lg flex items-center justify-center text-white icon-container">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-semibold text-white">Neural Networks</span>
                            </div>

                            <div className="absolute bottom-0 left-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-2 animate-float animation-delay-2000 shadow-lg hover-lift cursor-pointer">
                                <div className="w-8 h-8 bg-gradient-mint rounded-lg flex items-center justify-center text-white icon-container">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-semibold text-white">Deep Learning</span>
                            </div>

                            <div className="absolute top-1/2 right-0 translate-x-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-2 animate-float animation-delay-3000 shadow-lg hover-lift cursor-pointer">
                                <div className="w-8 h-8 bg-gradient-mint rounded-lg flex items-center justify-center text-white icon-container">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-semibold text-white">Analytics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animation-delay-1500 z-10">
                <div className="w-6 h-10 border-2 border-mint rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-mint rounded-full animate-bounce"></div>
                </div>
                <span className="text-xs text-white/60 uppercase tracking-widest">Discover AI</span>
            </div>
        </section>
    )
}

export default Hero
