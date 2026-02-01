import { useEffect, useRef, useState } from 'react'

const Strategy = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [activeStrategy, setActiveStrategy] = useState(null)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const strategies = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'END-TO-END AI Solution',
            description: 'Integrate intelligent automation across all platforms & products that seamlessly exchange data & learn from interactions.',
            aiFeature: 'Unified AI Platform'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'AI-Driven Success Management',
            description: 'Our AI monitors your projects 24/7, predicting issues before they occur and optimizing outcomes automatically.',
            aiFeature: 'Predictive Analytics'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Intelligent Delivery',
            description: 'AI-powered CI/CD pipelines with automated testing, deployment optimization, and intelligent release management.',
            aiFeature: 'Smart Automation'
        }
    ]

    const focusAreas = [
        { icon: '📊', title: 'AI Operations' },
        { icon: '💾', title: 'Data Strategy' },
        { icon: '🧠', title: 'ML Design' },
        { icon: '💰', title: 'Smart Pricing' },
        { icon: '💼', title: 'AI Business' },
        { icon: '🔄', title: 'Transformation' },
    ]

    return (
        <section ref={sectionRef} id="strategy" className="section bg-gradient-to-br from-sky-light to-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(77, 182, 172, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)'
            }}></div>
            <div className="neural-bg opacity-20"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-mint/10 text-mint-deep rounded-full text-sm font-medium mb-4">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        AI-Powered Methodology
                    </span>
                    <h2 className="section-title">Our AI Strategy</h2>
                    <p className="section-subtitle">
                        Understanding business values & challenges. Bespoke AI solutions at the core of every business decision.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left - Description */}
                    <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="glass-card-premium p-8 group hover:border-mint/40 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-mint to-teal rounded-lg flex items-center justify-center text-white">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="font-display text-2xl font-bold text-dark">Intelligent Solutions</h3>
                            </div>
                            <p className="text-charcoal/70 leading-relaxed mb-4">
                                We deliver AI-powered solutions that ensure business sustainability and high performance,
                                with continuous machine learning to ensure consistent growth and optimization.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-mint-deep">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                <span>99.5% Model Accuracy</span>
                            </div>
                        </div>

                        {/* Focus Areas */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {focusAreas.map((area, index) => (
                                <div
                                    key={index}
                                    className={`glass-card p-4 text-center hover:border-mint hover-lift cursor-pointer group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                                        }`}
                                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                                >
                                    <span className="text-2xl mb-2 block group-hover:scale-125 transition-transform duration-300">{area.icon}</span>
                                    <span className="text-sm font-medium text-dark">{area.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Strategy Cards */}
                    <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        {strategies.map((strategy, index) => (
                            <div
                                key={index}
                                className={`glass-card-premium p-6 flex gap-4 cursor-pointer group transition-all duration-500 ${activeStrategy === index ? 'border-mint shadow-lg shadow-mint/10 -translate-x-4' : 'hover:border-mint/50 hover:-translate-x-2'
                                    } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                                style={{ transitionDelay: `${400 + index * 150}ms` }}
                                onMouseEnter={() => setActiveStrategy(index)}
                                onMouseLeave={() => setActiveStrategy(null)}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-all duration-300 ${activeStrategy === index
                                        ? 'bg-gradient-to-br from-mint to-teal scale-110 shadow-lg shadow-mint/30'
                                        : 'bg-gradient-to-br from-mint to-teal group-hover:scale-105'
                                    }`}>
                                    {strategy.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-display text-lg font-bold text-dark group-hover:text-mint-deep transition-colors">{strategy.title}</h4>
                                        <span className={`px-2 py-0.5 text-xs rounded-full transition-all duration-300 ${activeStrategy === index
                                                ? 'bg-mint/20 text-mint-deep'
                                                : 'bg-transparent text-transparent'
                                            }`}>
                                            {strategy.aiFeature}
                                        </span>
                                    </div>
                                    <p className="text-sm text-charcoal/70">{strategy.description}</p>
                                </div>
                            </div>
                        ))}

                        {/* AI Indicator */}
                        <div className={`flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-mint/5 to-teal/5 rounded-2xl border border-mint/20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
                            <div className="relative">
                                <div className="w-3 h-3 bg-mint rounded-full animate-ping absolute"></div>
                                <div className="w-3 h-3 bg-mint rounded-full relative"></div>
                            </div>
                            <span className="text-sm text-charcoal/70">
                                All strategies powered by <span className="font-semibold text-mint-deep">continuous AI learning</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Strategy
