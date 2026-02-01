import { useState, useEffect, useRef } from 'react'

const HowAIWorks = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    // Auto-advance through steps
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 4)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    // Intersection observer for scroll reveal
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const steps = [
        {
            id: 0,
            title: 'Data Intake',
            subtitle: 'Collection & Integration',
            description: 'We securely collect and integrate your data from multiple sources, ensuring clean, structured inputs for AI processing.',
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
            ),
            dataPoints: ['APIs', 'Databases', 'Files', 'Streams']
        },
        {
            id: 1,
            title: 'AI Reasoning',
            subtitle: 'Analysis & Learning',
            description: 'Our AI models analyze patterns, learn from historical data, and apply sophisticated algorithms to understand your unique context.',
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            dataPoints: ['ML Models', 'Neural Networks', 'Deep Learning', 'NLP']
        },
        {
            id: 2,
            title: 'Intelligent Output',
            subtitle: 'Insights & Actions',
            description: 'Receive actionable insights, predictions, and automated decisions that drive real business value and competitive advantage.',
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            dataPoints: ['Predictions', 'Insights', 'Automation', 'Reports']
        },
        {
            id: 3,
            title: 'Continuous Learning',
            subtitle: 'Optimization & Growth',
            description: 'Our AI continuously learns from new data and feedback, improving accuracy and adapting to changing business needs.',
            icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            dataPoints: ['Feedback Loops', 'Model Updates', 'Accuracy++', 'Adaptation']
        }
    ]

    return (
        <section ref={sectionRef} className="section bg-gradient-dark text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-mint/10 rounded-full blur-[100px] animate-neural-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[100px] animate-neural-pulse animation-delay-2000"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(77, 182, 172, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 182, 172, 0.03) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-mint/30 rounded-full animate-float"
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
                        <svg className="w-4 h-4 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        The AI Process
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">How Our AI Works</h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        A seamless journey from raw data to intelligent insights
                    </p>
                </div>

                {/* Flow Visualization */}
                <div className="relative">
                    {/* Desktop Flow Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2">
                        <div
                            className="h-full bg-gradient-to-r from-mint via-teal to-accent-cyan transition-all duration-500"
                            style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
                        ></div>
                    </div>

                    {/* Steps */}
                    <div className="grid lg:grid-cols-4 gap-8 relative">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                                onClick={() => setActiveStep(index)}
                            >
                                {/* Step Card */}
                                <div className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${activeStep === index
                                        ? 'bg-white/15 backdrop-blur-xl border border-mint/50 shadow-lg shadow-mint/20 scale-105'
                                        : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-mint/30'
                                    }`}>
                                    {/* Step Number */}
                                    <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${activeStep === index
                                            ? 'bg-gradient-to-br from-mint to-teal text-white shadow-lg shadow-mint/40'
                                            : 'bg-white/10 text-white/60'
                                        }`}>
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${activeStep === index
                                            ? 'bg-gradient-to-br from-mint to-teal text-white animate-glow-pulse'
                                            : 'bg-white/10 text-white/70'
                                        }`}>
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="font-display text-xl font-bold mb-1">{step.title}</h3>
                                    <p className={`text-sm mb-3 transition-colors duration-300 ${activeStep === index ? 'text-mint' : 'text-white/50'
                                        }`}>{step.subtitle}</p>
                                    <p className="text-white/70 text-sm mb-4">{step.description}</p>

                                    {/* Data Points */}
                                    <div className="flex flex-wrap gap-2">
                                        {step.dataPoints.map((point, i) => (
                                            <span
                                                key={i}
                                                className={`px-2 py-1 text-xs rounded-full transition-all duration-300 ${activeStep === index
                                                        ? 'bg-mint/20 text-mint border border-mint/30'
                                                        : 'bg-white/5 text-white/50'
                                                    }`}
                                            >
                                                {point}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Active Indicator Pulse */}
                                    {activeStep === index && (
                                        <div className="absolute inset-0 rounded-2xl animate-ripple bg-mint/10 pointer-events-none"></div>
                                    )}
                                </div>

                                {/* Connection Arrow (Desktop) */}
                                {index < 3 && (
                                    <div className={`hidden lg:flex absolute top-1/2 -right-4 z-10 w-8 h-8 rounded-full items-center justify-center transition-all duration-500 ${activeStep > index ? 'bg-mint text-white' : 'bg-white/10 text-white/40'
                                        }`}>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}

                                {/* Mobile Connection Line */}
                                {index < 3 && (
                                    <div className={`lg:hidden w-0.5 h-8 mx-auto my-4 transition-all duration-500 ${activeStep > index ? 'bg-gradient-to-b from-mint to-teal' : 'bg-white/10'
                                        }`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {steps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeStep === index
                                    ? 'bg-mint w-8'
                                    : 'bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-white/60 mb-4">Ready to experience intelligent automation?</p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a href="/services" className="btn-primary group">
                            <span>Explore AI Services</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="/contact" className="btn-secondary border-mint/50 text-white hover:bg-mint hover:border-mint">
                            Schedule Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowAIWorks
