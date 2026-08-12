import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, reveal } from '../hooks/useReveal'

const HowAIWorks = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [sectionRef, isIn] = useReveal(0.2)

    // Auto-advance through steps
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 4)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const steps = [
        {
            num: '01',
            title: 'Data Intake',
            subtitle: 'Collection & Integration',
            description: 'We securely collect and integrate your data from multiple sources, ensuring clean, structured inputs for AI processing.',
            dataPoints: ['APIs', 'Databases', 'Files', 'Streams']
        },
        {
            num: '02',
            title: 'AI Reasoning',
            subtitle: 'Analysis & Learning',
            description: 'Our AI models analyze patterns, learn from historical data, and apply sophisticated algorithms to understand your unique context.',
            dataPoints: ['ML Models', 'Neural Networks', 'Deep Learning', 'NLP']
        },
        {
            num: '03',
            title: 'Intelligent Output',
            subtitle: 'Insights & Actions',
            description: 'Receive actionable insights, predictions, and automated decisions that drive real business value and competitive advantage.',
            dataPoints: ['Predictions', 'Insights', 'Automation', 'Reports']
        },
        {
            num: '04',
            title: 'Continuous Learning',
            subtitle: 'Optimization & Growth',
            description: 'Our AI continuously learns from new data and feedback, improving accuracy and adapting to changing business needs.',
            dataPoints: ['Feedback Loops', 'Model Updates', 'Accuracy++', 'Adaptation']
        }
    ]

    return (
        <section ref={sectionRef} id="method" className="section">
            <div className="shell">
                <div className={`section-head ${reveal(isIn)}`}>
                    <h2 className="display-md max-w-[22ch]">
                        How Our AI Works
                    </h2>
                    <span className="section-index">03 — The AI Process</span>
                </div>

                <p className={`lede mt-7 max-w-[62ch] ${reveal(isIn)}`} style={{ transitionDelay: '80ms' }}>
                    A seamless journey from raw data to intelligent insights.
                </p>

                {/* The four stages */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-9">
                    {steps.map((step, index) => {
                        const isActive = activeStep === index
                        return (
                            <button
                                key={step.num}
                                type="button"
                                onClick={() => setActiveStep(index)}
                                aria-pressed={isActive}
                                className={`text-left pt-5 cursor-pointer transition-all duration-500 ${reveal(isIn)}`}
                                style={{
                                    transitionDelay: `${index * 90}ms`,
                                    borderTop: `2px solid ${isActive ? 'var(--blue)' : 'rgba(25,26,31,.85)'}`,
                                    opacity: isActive ? 1 : 0.72,
                                }}
                            >
                                <div className="flex items-baseline justify-between">
                                    <span className="font-display text-[13px] font-semibold tracking-[0.06em] text-clay">
                                        {step.num}
                                    </span>
                                    <span
                                        className="block h-[1.5px] transition-all duration-500"
                                        style={{
                                            width: isActive ? '32px' : '0px',
                                            background: 'var(--blue)',
                                        }}
                                    ></span>
                                </div>

                                <div className="font-display text-[18px] font-semibold tracking-[-0.02em] mt-3">
                                    {step.title}
                                </div>
                                <p className="text-[14px] leading-[1.6] text-ink/62 mt-2.5">
                                    {step.description}
                                </p>

                                <div className="mt-3.5 text-[12px] font-semibold tracking-[0.08em] uppercase text-ink/40">
                                    {step.subtitle}
                                </div>

                                <div className="flex flex-wrap gap-x-3.5 gap-y-1 mt-3 pt-3 border-t"
                                    style={{ borderColor: 'var(--rule)' }}>
                                    {step.dataPoints.map((point) => (
                                        <span
                                            key={point}
                                            className="text-[11.5px] transition-colors duration-500"
                                            style={{ color: isActive ? 'var(--blue)' : 'var(--ink-45)' }}
                                        >
                                            {point}
                                        </span>
                                    ))}
                                </div>
                            </button>
                        )
                    })}
                </div>

                {/* Stage selector */}
                <div className="flex gap-2 mt-9">
                    {steps.map((step, index) => (
                        <button
                            key={step.num}
                            onClick={() => setActiveStep(index)}
                            aria-label={`Show ${step.title}`}
                            className="h-[2px] transition-all duration-500"
                            style={{
                                width: activeStep === index ? '44px' : '22px',
                                background: activeStep === index ? 'var(--blue)' : 'rgba(25,26,31,.2)',
                            }}
                        />
                    ))}
                </div>

                {/* Closing note */}
                <div className={`glass mt-9 px-[30px] py-[26px] flex flex-wrap gap-6 items-center justify-between ${reveal(isIn)}`}
                    style={{ transitionDelay: '420ms' }}>
                    <p className="m-0 max-w-[58ch] text-[15.5px] leading-[1.6] text-ink/72">
                        Ready to experience intelligent automation?
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                        <Link to="/services" className="btn-ink">
                            Explore AI Services
                            <span className="leading-none">→</span>
                        </Link>
                        <Link to="/contact" className="btn-outline">
                            Schedule Demo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowAIWorks
