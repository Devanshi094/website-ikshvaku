import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Impact = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [countersStarted, setCountersStarted] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    setTimeout(() => setCountersStarted(true), 500)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const stats = [
        { number: '30+', label: 'AI Projects Delivered', icon: '🚀' },
        { number: '99.5%', label: 'Model Accuracy', icon: '🎯' },
        { number: '100K+', label: 'AI Predictions/Day', icon: '⚡' },
    ]

    const consultingItems = [
        { text: 'AI Readiness Assessment', icon: '🔍' },
        { text: 'ML Model Architecture Review', icon: '🏗️' },
        { text: 'Data Strategy Consultation', icon: '📊' },
        { text: 'AI Ethics & Governance Audit', icon: '✅' },
    ]

    const caseStudies = [
        {
            title: 'Predictive Maintenance',
            result: '45% Downtime Reduction',
            industry: 'Manufacturing'
        },
        {
            title: 'Customer Churn Prediction',
            result: '32% Retention Increase',
            industry: 'Retail'
        },
        {
            title: 'Fraud Detection System',
            result: '99.8% Detection Rate',
            industry: 'Finance'
        }
    ]

    return (
        <section ref={sectionRef} id="impact" className="section bg-gradient-dark text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-mint/10 rounded-full blur-[100px] animate-neural-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[100px] animate-neural-pulse animation-delay-2000"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}></div>

                {/* Floating AI Particles */}
                {[...Array(15)].map((_, i) => (
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

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-mint rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Measurable Results
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">AI Impact</h2>
                    <p className="text-xl text-white/70">Bold steps forward with intelligent automation.</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-mint/50 transition-all duration-500 hover:-translate-y-3 group cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <span className="text-4xl block mb-4 group-hover:scale-125 transition-transform duration-300">{stat.icon}</span>
                            <div className={`font-display text-5xl md:text-6xl font-bold gradient-text mb-2 transition-all duration-500 ${countersStarted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                }`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                                {stat.number}
                            </div>
                            <div className="text-white/70">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* AI Case Studies Preview */}
                <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="font-display text-2xl font-bold text-center mb-8">Recent AI Success Stories</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {caseStudies.map((study, index) => (
                            <div
                                key={index}
                                className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-mint/50 transition-all duration-300 hover:-translate-y-2 group cursor-pointer overflow-hidden"
                            >
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-mint/10 to-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10">
                                    <span className="text-xs text-mint/70 uppercase tracking-wider">{study.industry}</span>
                                    <h4 className="font-display font-bold text-lg mt-1 mb-3 group-hover:text-mint transition-colors">{study.title}</h4>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-1 bg-gradient-to-r from-mint to-teal rounded-full"></div>
                                        <span className="text-mint font-semibold">{study.result}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact Studies & Consulting */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Impact Studies */}
                    <div className={`bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-mint/30 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                        }`} style={{ transitionDelay: '400ms' }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-mint to-teal rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="font-display text-2xl font-bold">AI Impact Studies</h3>
                        </div>
                        <p className="text-white/70 mb-6">
                            See how our intelligent solutions have helped ambitious clients achieve extraordinary outcomes with measurable ROI.
                        </p>
                        <Link to="/contact" className="btn-primary inline-flex group/btn">
                            <span>View Case Studies</span>
                            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Strategy & Consulting */}
                    <div className={`bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-mint/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                        }`} style={{ transitionDelay: '500ms' }}>
                        <span className="text-mint text-sm font-medium">Expert AI Guidance</span>
                        <h3 className="font-display text-2xl font-bold mb-4 mt-2">AI Strategy & Consulting</h3>
                        <p className="text-white/70 mb-6">
                            Book a free consultation with our AI experts to understand how intelligent automation can transform your business.
                        </p>
                        <ul className="space-y-3 mb-6">
                            {consultingItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`flex items-center gap-3 text-white/80 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                                        }`}
                                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact" className="btn-secondary border-mint/50 text-white hover:bg-mint hover:border-mint inline-flex group/btn">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Book AI Consultation</span>
                        </Link>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className={`mt-16 pt-12 border-t border-white/10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-center text-white/50 text-sm mb-6">Trusted AI Infrastructure</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {['SOC 2 Compliant', 'GDPR Ready', 'ISO 27001', '24/7 AI Monitoring'].map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 text-white/60 hover:text-mint transition-colors cursor-pointer">
                                <svg className="w-4 h-4 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span className="text-sm">{badge}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Impact
