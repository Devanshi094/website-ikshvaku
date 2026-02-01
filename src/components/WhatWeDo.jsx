import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const WhatWeDo = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState(null)
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

    const services = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'AI-Powered Development',
            description: 'We build intelligent software that empowers organizations to effectively integrate their data, decisions, and operations at scale across platforms.',
            link: '/services',
            linkText: 'Explore AI Services',
            stats: { value: '40%', label: 'Efficiency Gain' },
            features: ['Machine Learning', 'Neural Networks', 'Automation']
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'AI Talent Augmentation',
            description: 'Access our pool of AI/ML specialists, data scientists, and engineers. Quick ramp-up for rapid growth with instant access to 60+ senior-level experts.',
            link: '/services',
            linkText: 'Onboard AI Experts',
            stats: { value: '60+', label: 'AI Specialists' },
            features: ['Data Scientists', 'ML Engineers', 'AI Architects']
        }
    ]

    return (
        <section ref={sectionRef} id="whatwedo" className="section bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-light rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint/10 rounded-full blur-3xl"></div>
            <div className="neural-bg opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-mint/10 text-mint-deep rounded-full text-sm font-medium mb-4">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        AI-First Solutions
                    </span>
                    <h2 className="section-title">What We Do?</h2>
                    <p className="section-subtitle">
                        We champion the bold to achieve the extraordinary through intelligent automation and AI innovation.
                    </p>
                </div>

                {/* Services Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`ai-card group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="flex items-start gap-6">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-gradient-to-br from-mint to-teal rounded-2xl flex items-center justify-center text-white flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-mint/30">
                                    {service.icon}
                                </div>

                                {/* Stat Badge */}
                                <div className={`absolute top-6 right-6 text-right transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                                    <div className="font-display text-2xl font-bold gradient-text">{service.stats.value}</div>
                                    <div className="text-xs text-charcoal/50">{service.stats.label}</div>
                                </div>
                            </div>

                            <h3 className="font-display text-2xl font-bold text-dark mb-4 mt-6 group-hover:text-mint-deep transition-colors">{service.title}</h3>
                            <p className="text-charcoal/70 mb-6 leading-relaxed">{service.description}</p>

                            {/* Feature Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {service.features.map((feature, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-sky-light/70 text-teal text-sm font-medium rounded-full border border-mint/20 group-hover:bg-mint/10 group-hover:border-mint/40 transition-all"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            <Link
                                to={service.link}
                                className="inline-flex items-center gap-2 text-mint-deep font-medium group/link"
                            >
                                <span className="group-hover/link:underline">{service.linkText}</span>
                                <svg className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>

                            {/* Animated Border Glow on Hover */}
                            <div className={`absolute inset-0 rounded-[1.5rem] border-2 border-mint/0 group-hover:border-mint/30 transition-all duration-500 pointer-events-none`}></div>
                        </div>
                    ))}
                </div>

                {/* AI Trust Indicators */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-mint/10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {[
                        { icon: '🔒', label: 'Enterprise Security', value: 'SOC 2 Compliant' },
                        { icon: '⚡', label: 'Processing Speed', value: '<100ms Latency' },
                        { icon: '🎯', label: 'AI Accuracy', value: '99.5% Precision' },
                        { icon: '🌐', label: 'Scale', value: '100K+ Requests/day' }
                    ].map((indicator, i) => (
                        <div
                            key={i}
                            className="text-center group cursor-pointer p-4 rounded-xl hover:bg-sky-light/50 transition-all"
                        >
                            <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">{indicator.icon}</span>
                            <div className="font-display font-semibold text-dark text-sm">{indicator.value}</div>
                            <div className="text-xs text-charcoal/50">{indicator.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo
