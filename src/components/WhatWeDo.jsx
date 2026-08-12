import { Link } from 'react-router-dom'
import { useReveal, reveal } from '../hooks/useReveal'

const WhatWeDo = () => {
    const [sectionRef, isIn] = useReveal(0.1)

    const services = [
        {
            kicker: 'Service Mix',
            stat: '80%',
            title: 'AI-Powered Development',
            description: 'We build intelligent software that empowers organizations to effectively integrate their data, decisions, and operations at scale across platforms.',
            link: '/services',
            linkText: 'Explore AI Services',
            features: ['Machine Learning', 'Neural Networks', 'Automation']
        },
        {
            kicker: 'Service Mix',
            stat: '20%',
            title: 'AI Talent Augmentation',
            description: 'Access our pool of AI/ML specialists, data scientists, and engineers. Quick ramp-up for rapid growth with instant access to 60+ senior-level experts.',
            link: '/services',
            linkText: 'Onboard AI Experts',
            features: ['Data Scientists', 'ML Engineers', 'AI Architects']
        }
    ]

    const disciplines = [
        'Application development', 'Cloud infrastructure', 'Machine learning', 'Enterprise technology',
        'Security', 'Payments', 'Blockchain', 'UX & UI'
    ]

    const indicators = [
        { value: 'SOC 2 Compliant', label: 'Enterprise security' },
        { value: '<100ms Latency', label: 'Processing speed' },
        { value: '99.5% Precision', label: 'AI accuracy' },
        { value: '100K+ Requests/day', label: 'Scale' }
    ]

    return (
        <section ref={sectionRef} id="whatwedo" className="section">
            <div className="shell">
                <div className={`section-head ${reveal(isIn)}`}>
                    <h2 className="display-md max-w-[20ch]">
                        What We Do?
                    </h2>
                    <span className="section-index">02 — AI-First Solutions</span>
                </div>

                <p className={`lede mt-7 max-w-[62ch] ${reveal(isIn)}`} style={{ transitionDelay: '80ms' }}>
                    We champion the bold to achieve the extraordinary through intelligent automation
                    and AI innovation.
                </p>

                {/* The two routes */}
                <div className="grid md:grid-cols-2 gap-5 mt-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`glass glass-hover group p-6 sm:p-8 flex flex-col ${reveal(isIn)}`}
                            style={{ transitionDelay: `${index * 120}ms` }}
                        >
                            <div className="flex items-baseline justify-between gap-4">
                                <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-ink/45">
                                    {service.kicker}
                                </span>
                                <span className="stat-figure text-[28px] sm:text-[32px] text-marine">{service.stat}</span>
                            </div>

                            <h3 className="display-sm mt-5">{service.title}</h3>
                            <p className="text-[15px] leading-[1.62] text-ink/65 mt-3">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-5">
                                {service.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="text-[11.5px] font-semibold tracking-[0.06em] uppercase text-ink/45"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto pt-5 mt-5 border-t flex flex-wrap items-center justify-end gap-4"
                                style={{ borderColor: 'var(--rule)' }}>
                                <Link to={service.link} className="link-arrow">
                                    {service.linkText} <span className="leading-none">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* The full discipline list */}
                <div className={`grid grid-cols-2 md:grid-cols-4 mt-6 border-t ${reveal(isIn)}`}
                    style={{ borderColor: 'var(--rule-strong)', transitionDelay: '260ms' }}>
                    {disciplines.map((item) => (
                        <div
                            key={item}
                            className="py-[15px] pr-4 border-b text-[13.5px] font-medium text-ink/75"
                            style={{ borderColor: 'var(--rule)' }}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* Trust indicators */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-9 ${reveal(isIn)}`}
                    style={{ transitionDelay: '340ms' }}>
                    {indicators.map((indicator) => (
                        <div key={indicator.value} className="glass-quiet p-5">
                            <div className="font-display text-[15px] font-semibold tracking-[-0.02em]">
                                {indicator.value}
                            </div>
                            <div className="text-[12px] font-semibold tracking-[0.1em] uppercase text-ink/40 mt-2">
                                {indicator.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo
