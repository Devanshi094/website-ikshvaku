import { useState } from 'react'
import { useReveal, reveal } from '../hooks/useReveal'

const Strategy = () => {
    const [activeStrategy, setActiveStrategy] = useState(null)
    const [sectionRef, isIn] = useReveal(0.1)

    const strategies = [
        {
            num: '01',
            title: 'END-TO-END AI Solution',
            description: 'Integrate intelligent automation across all platforms & products that seamlessly exchange data & learn from interactions.',
            aiFeature: 'Unified AI Platform'
        },
        {
            num: '02',
            title: 'AI-Driven Success Management',
            description: 'Our AI monitors your projects 24/7, predicting issues before they occur and optimizing outcomes automatically.',
            aiFeature: 'Predictive Analytics'
        },
        {
            num: '03',
            title: 'Intelligent Delivery',
            description: 'AI-powered CI/CD pipelines with automated testing, deployment optimization, and intelligent release management.',
            aiFeature: 'Smart Automation'
        }
    ]

    const focusAreas = [
        'AI Operations', 'Data Strategy', 'ML Design',
        'Smart Pricing', 'AI Business', 'Transformation',
    ]

    return (
        <section ref={sectionRef} id="strategy" className="section">
            <div className="shell">
                <div className={`section-head ${reveal(isIn)}`}>
                    <h2 className="display-md max-w-[22ch]">
                        Our AI Strategy
                    </h2>
                    <span className="section-index">04 — AI-Powered Methodology</span>
                </div>

                <p className={`lede mt-7 max-w-[66ch] ${reveal(isIn)}`} style={{ transitionDelay: '80ms' }}>
                    Understanding business values &amp; challenges. Bespoke AI solutions at the core of
                    every business decision.
                </p>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mt-9 items-start">
                    {/* Left — the position */}
                    <div className={reveal(isIn)}>
                        <div className="glass p-6 sm:p-8">
                            <div className="eyebrow eyebrow-rule">AI-Powered Methodology</div>
                            <h3 className="display-sm mt-5">Intelligent Solutions</h3>
                            <p className="text-[15px] leading-[1.62] text-ink/65 mt-3">
                                We deliver AI-powered solutions that ensure business sustainability and high
                                performance, with continuous machine learning to ensure consistent growth
                                and optimization.
                            </p>
                            <div className="flex items-baseline justify-between gap-4 mt-6 pt-5 border-t"
                                style={{ borderColor: 'var(--rule)' }}>
                                <span className="text-[12.5px] text-ink/50">Model Accuracy</span>
                                <span className="stat-figure text-[30px] text-marine">99.5%</span>
                            </div>
                        </div>

                        {/* Focus areas */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 mt-6 border-t"
                            style={{ borderColor: 'var(--rule-strong)' }}>
                            {focusAreas.map((area) => (
                                <div
                                    key={area}
                                    className="py-[15px] pr-4 border-b text-[13.5px] font-medium text-ink/75"
                                    style={{ borderColor: 'var(--rule)' }}
                                >
                                    {area}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — the three pillars */}
                    <div className={`flex flex-col gap-[18px] ${reveal(isIn)}`} style={{ transitionDelay: '140ms' }}>
                        {strategies.map((strategy, index) => (
                            <div
                                key={strategy.num}
                                className="glass-quiet glass-hover p-5 sm:p-6 cursor-pointer"
                                onMouseEnter={() => setActiveStrategy(index)}
                                onMouseLeave={() => setActiveStrategy(null)}
                            >
                                <div className="flex items-center justify-between">
                                    <span
                                        className="mark-bar transition-transform duration-500"
                                        style={{ transform: activeStrategy === index ? 'scaleY(1.25)' : 'none' }}
                                    ></span>
                                    <span
                                        className="text-[10.5px] font-semibold tracking-[0.12em] uppercase transition-all duration-400"
                                        style={{
                                            color: activeStrategy === index ? 'var(--blue)' : 'var(--ink-35)',
                                        }}
                                    >
                                        {activeStrategy === index ? strategy.aiFeature : strategy.num}
                                    </span>
                                </div>

                                <h4 className="font-display text-[17px] font-semibold tracking-[-0.02em] mt-4">
                                    {strategy.title}
                                </h4>
                                <p className="text-[14.5px] leading-[1.6] text-ink/62 mt-2.5">
                                    {strategy.description}
                                </p>
                            </div>
                        ))}

                        <div className="flex items-center gap-3 pt-1">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-marine opacity-70 animate-ping"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-marine"></span>
                            </span>
                            <span className="text-[13.5px] text-ink/62">
                                All strategies powered by <span className="font-semibold text-ink">continuous AI learning</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Strategy
