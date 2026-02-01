import { useEffect, useRef, useState } from 'react'

const AICapabilities = () => {
    const [hoveredCard, setHoveredCard] = useState(null)
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

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

    const capabilities = [
        {
            id: 1,
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Machine Learning',
            description: 'Custom ML models trained on your data to automate decisions, predict outcomes, and uncover hidden patterns.',
            features: ['Predictive Models', 'Pattern Recognition', 'Auto-Scaling'],
            gradient: 'from-mint to-teal'
        },
        {
            id: 2,
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Natural Language Processing',
            description: 'Transform how you interact with data through intelligent text analysis, chatbots, and sentiment detection.',
            features: ['Text Analytics', 'Chatbot AI', 'Sentiment Analysis'],
            gradient: 'from-sky-deep to-mint'
        },
        {
            id: 3,
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            title: 'Computer Vision',
            description: 'Enable machines to see and understand visual data for quality control, security, and automation.',
            features: ['Image Recognition', 'Object Detection', 'Visual QA'],
            gradient: 'from-teal to-mint-deep'
        },
        {
            id: 4,
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Predictive Analytics',
            description: 'Forecast trends, anticipate customer behavior, and make data-driven decisions with confidence.',
            features: ['Trend Forecasting', 'Risk Assessment', 'Demand Prediction'],
            gradient: 'from-mint-deep to-accent-cyan'
        },
        {
            id: 5,
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            title: 'Process Automation',
            description: 'Intelligent automation that learns and adapts, reducing manual work and increasing efficiency.',
            features: ['Workflow AI', 'Smart Routing', 'Self-Optimization'],
            gradient: 'from-accent-cyan to-sky-deep'
        },
        {
            id: 6,
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'AI Security',
            description: 'Protect your systems with AI-powered threat detection, anomaly recognition, and proactive defense.',
            features: ['Threat Detection', 'Anomaly Alerts', 'Auto-Response'],
            gradient: 'from-sky-deep to-teal'
        }
    ]

    return (
        <section ref={sectionRef} className="section bg-white relative overflow-hidden">
            {/* Neural Background Pattern */}
            <div className="neural-bg"></div>

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-mint/5 to-sky-light/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-medium/20 to-mint/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-mint/10 text-mint-deep rounded-full text-sm font-medium mb-4">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        AI Capabilities
                    </span>
                    <h2 className="section-title">Intelligent Solutions for Every Challenge</h2>
                    <p className="section-subtitle">
                        Harness the power of artificial intelligence to transform your business operations,
                        enhance decision-making, and unlock new opportunities.
                    </p>
                </div>

                {/* Capability Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((capability, index) => (
                        <div
                            key={capability.id}
                            className={`ai-card group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredCard(capability.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Icon Container */}
                            <div className={`w-16 h-16 bg-gradient-to-br ${capability.gradient} rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-mint/30`}>
                                {capability.icon}
                            </div>

                            {/* Content */}
                            <h3 className="font-display text-xl font-bold text-dark mb-3 group-hover:text-mint-deep transition-colors">
                                {capability.title}
                            </h3>
                            <p className="text-charcoal/70 mb-4 leading-relaxed text-sm">
                                {capability.description}
                            </p>

                            {/* Feature Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {capability.features.map((feature, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-sky-light/50 text-teal text-xs font-medium rounded-full border border-mint/20 group-hover:bg-mint/10 group-hover:border-mint/40 transition-all"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Learn More Link */}
                            <div className="flex items-center gap-2 text-mint-deep font-medium text-sm opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                <span>Learn more</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 rounded-[1.5rem] bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-charcoal/60 mb-4">Need a custom AI solution?</p>
                    <a href="/contact" className="btn-primary inline-flex group">
                        <span>Discuss Your Project</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AICapabilities
