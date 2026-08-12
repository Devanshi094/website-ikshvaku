import { Link } from 'react-router-dom'
import { useReveal, reveal } from '../hooks/useReveal'

const AICapabilities = () => {
    const [sectionRef, isIn] = useReveal(0.1)

    const capabilities = [
        {
            num: '01',
            title: 'Machine Learning',
            description: 'Custom ML models trained on your data to automate decisions, predict outcomes, and uncover hidden patterns.',
            features: ['Predictive Models', 'Pattern Recognition', 'Auto-Scaling'],
        },
        {
            num: '02',
            title: 'Natural Language Processing',
            description: 'Transform how you interact with data through intelligent text analysis, chatbots, and sentiment detection.',
            features: ['Text Analytics', 'Chatbot AI', 'Sentiment Analysis'],
        },
        {
            num: '03',
            title: 'Computer Vision',
            description: 'Enable machines to see and understand visual data for quality control, security, and automation.',
            features: ['Image Recognition', 'Object Detection', 'Visual QA'],
        },
        {
            num: '04',
            title: 'Predictive Analytics',
            description: 'Forecast trends, anticipate customer behavior, and make data-driven decisions with confidence.',
            features: ['Trend Forecasting', 'Risk Assessment', 'Demand Prediction'],
        },
        {
            num: '05',
            title: 'Process Automation',
            description: 'Intelligent automation that learns and adapts, reducing manual work and increasing efficiency.',
            features: ['Workflow AI', 'Smart Routing', 'Self-Optimization'],
        },
        {
            num: '06',
            title: 'AI Security',
            description: 'Protect your systems with AI-powered threat detection, anomaly recognition, and proactive defense.',
            features: ['Threat Detection', 'Anomaly Alerts', 'Auto-Response'],
        }
    ]

    return (
        <section ref={sectionRef} id="capabilities" className="section">
            <div className="shell">
                <div className={`section-head ${reveal(isIn)}`}>
                    <h2 className="display-md max-w-[20ch]">
                        Intelligent Solutions for Every Challenge
                    </h2>
                    <span className="section-index">01 — AI Capabilities</span>
                </div>

                <p className={`lede mt-7 max-w-[62ch] ${reveal(isIn)}`} style={{ transitionDelay: '80ms' }}>
                    Harness the power of artificial intelligence to transform your business operations,
                    enhance decision-making, and unlock new opportunities.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-9">
                    {capabilities.map((capability, index) => (
                        <div
                            key={capability.num}
                            className={`glass-quiet glass-hover group p-[26px] flex flex-col ${reveal(isIn)}`}
                            style={{ transitionDelay: `${120 + index * 70}ms` }}
                        >
                            <div className="flex items-center justify-between">
                                <span className="mark-bar transition-transform duration-500 group-hover:scale-y-125"></span>
                                <span className="text-[11px] font-semibold tracking-[0.1em] text-ink/35">
                                    {capability.num}
                                </span>
                            </div>

                            <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] mt-[18px]">
                                {capability.title}
                            </h3>
                            <p className="text-[14.5px] leading-[1.6] text-ink/62 mt-2.5">
                                {capability.description}
                            </p>

                            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-5 pt-4 border-t"
                                style={{ borderColor: 'var(--rule)' }}>
                                {capability.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="text-[11.5px] font-semibold tracking-[0.06em] uppercase text-ink/45"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            <Link
                                to="/services"
                                className="link-arrow mt-5 opacity-0 -translate-x-1 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-0"
                            >
                                Learn more <span className="leading-none">→</span>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`glass mt-9 px-[30px] py-[26px] flex flex-wrap gap-6 items-center justify-between ${reveal(isIn)}`}
                    style={{ transitionDelay: '540ms' }}>
                    <p className="m-0 max-w-[60ch] text-[15.5px] leading-[1.6] text-ink/72">
                        Need a custom AI solution?
                    </p>
                    <Link to="/contact" className="btn-ink">
                        Discuss Your Project
                        <span className="leading-none">→</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AICapabilities
