import { Link } from 'react-router-dom'
import { useReveal, reveal } from '../hooks/useReveal'
import {
    PROFILE,
    METRICS,
    CERTIFICATIONS,
    LIFECYCLE,
    ENGAGEMENT_CONSTANTS,
    INDUSTRIES,
    INDUSTRY_NOTE,
} from '../content/company'

const AboutPage = () => {
    const [numbersRef, numbersIn] = useReveal(0.06)
    const [lifecycleRef, lifecycleIn] = useReveal(0.08)
    const [sectorRef, sectorIn] = useReveal(0.06)

    return (
        <div>
            {/* Page opening */}
            <section className="relative pt-[112px] pb-10 sm:pt-[150px] sm:pb-14 lg:pt-[190px] lg:pb-20">
                <div className="shell">
                    <div className="flex items-baseline justify-between gap-6 animate-fade-up">
                        <div className="eyebrow eyebrow-rule">The practice · Est. {PROFILE.founded}</div>
                        <span className="plate-mark hidden sm:block">01</span>
                    </div>

                    <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-10 lg:gap-[60px] items-end mt-[26px]">
                        <div>
                            <h1 className="display-xl max-w-[13ch] animate-fade-up stagger-1">
                                {PROFILE.statement}
                            </h1>
                            <p className="lede mt-7 max-w-[50ch] animate-fade-up stagger-2">
                                {PROFILE.lede}
                            </p>
                            <div className="flex flex-wrap gap-3 mt-9 animate-fade-up stagger-3">
                                <Link to="/projects" className="btn-ink">
                                    See the work
                                    <span className="leading-none">→</span>
                                </Link>
                                <Link to="/contact" className="btn-glass">
                                    Contact us
                                </Link>
                            </div>
                        </div>

                        <div className="animate-fade-up stagger-4">
                            <div className="schedule">
                                {PROFILE.principles.map((principle, i) => (
                                    <div
                                        key={principle.title}
                                        className="flex items-baseline gap-4 py-[15px] border-b"
                                        style={{ borderColor: 'var(--rule)' }}
                                    >
                                        <span className="grid-ref grid-ref-quiet">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-[14.5px] text-ink/78">{principle.title}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
                                {CERTIFICATIONS.map((cert) => (
                                    <span
                                        key={cert}
                                        className="text-[11.5px] font-semibold tracking-[0.1em] uppercase text-ink/45"
                                    >
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* By the numbers */}
            <section ref={numbersRef} className="section pt-6">
                <div className="shell">
                    <div className={`section-head ${reveal(numbersIn)}`}>
                        <h2 className="display-md max-w-[20ch]">By the numbers</h2>
                        <span className="section-index">01 — Scale</span>
                    </div>

                    <p className={`lede mt-7 max-w-[58ch] ${reveal(numbersIn)}`} style={{ transitionDelay: '80ms' }}>
                        Measured at 2026. Figures are cumulative across the practice since founding.
                    </p>

                    <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 mt-9 ${reveal(numbersIn)}`}
                        style={{ transitionDelay: '140ms' }}>
                        {METRICS.full.map((metric) => (
                            <div
                                key={metric.label}
                                className="flex items-baseline justify-between gap-4 py-[18px] border-b"
                                style={{ borderColor: 'var(--rule)' }}
                            >
                                <span className="text-[13.5px] text-ink/55 max-w-[22ch]">{metric.label}</span>
                                <span className="stat-figure text-[28px] text-marine">{metric.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className={`grid md:grid-cols-3 gap-8 mt-12 ${reveal(numbersIn)}`} style={{ transitionDelay: '220ms' }}>
                        {METRICS.glance.map((item) => (
                            <div key={item.title} className="pt-4" style={{ borderTop: '2px solid rgba(25,26,31,.85)' }}>
                                <div className="font-display text-[16px] font-semibold tracking-[-0.02em]">
                                    {item.title}
                                </div>
                                <p className="text-[13.5px] leading-[1.6] text-ink/62 mt-2">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lifecycle */}
            <section ref={lifecycleRef} className="section pt-6">
                <div className="shell">
                    <div className={`section-head ${reveal(lifecycleIn)}`}>
                        <h2 className="display-md max-w-[22ch]">Complete lifecycle execution</h2>
                        <span className="section-index">02 — How we work</span>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-9">
                        {LIFECYCLE.map((stage, index) => (
                            <div
                                key={stage.num}
                                className={`pt-5 ${reveal(lifecycleIn)}`}
                                style={{
                                    transitionDelay: `${index * 80}ms`,
                                    borderTop: '2px solid rgba(25,26,31,.85)',
                                }}
                            >
                                <span className="grid-ref">{stage.num}</span>
                                <div className="font-display text-[18px] font-semibold tracking-[-0.02em] mt-3">
                                    {stage.title}
                                </div>
                                <p className="text-[13.5px] leading-[1.6] text-ink/62 mt-2.5">{stage.body}</p>
                            </div>
                        ))}
                    </div>

                    <div className={`grid md:grid-cols-3 gap-8 mt-12 ${reveal(lifecycleIn)}`} style={{ transitionDelay: '360ms' }}>
                        {ENGAGEMENT_CONSTANTS.map((item) => (
                            <div key={item.title} className="glass-quiet p-6">
                                <div className="font-display text-[16px] font-semibold tracking-[-0.02em]">
                                    {item.title}
                                </div>
                                <p className="text-[13.5px] leading-[1.6] text-ink/62 mt-2.5">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section ref={sectorRef} className="section pt-6">
                <div className="shell">
                    <div className={`section-head ${reveal(sectorIn)}`}>
                        <h2 className="display-md max-w-[20ch]">Where the work lands.</h2>
                        <span className="section-index">03 — Industries</span>
                    </div>

                    <div className={`schedule mt-9 ${reveal(sectorIn)}`} style={{ transitionDelay: '80ms' }}>
                        {INDUSTRIES.map((industry) => (
                            <div
                                key={industry.num}
                                className="grid grid-cols-1 sm:grid-cols-[52px_minmax(0,240px)_1fr] gap-x-6 gap-y-1 py-[18px] border-b transition-colors duration-300 hover:bg-white/35"
                                style={{ borderColor: 'var(--rule)' }}
                            >
                                <span className="grid-ref grid-ref-quiet">{industry.num}</span>
                                <span className="font-display text-[16px] font-semibold tracking-[-0.02em]">
                                    {industry.name}
                                </span>
                                <span className="text-[14px] leading-[1.55] text-ink/62">{industry.body}</span>
                            </div>
                        ))}
                    </div>

                    <p className={`mt-9 max-w-[64ch] text-[clamp(16px,1.5vw,19px)] leading-[1.6] text-ink/72 ${reveal(sectorIn)}`}
                        style={{ transitionDelay: '160ms' }}>
                        {INDUSTRY_NOTE}
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="section pt-0">
                <div className="shell">
                    <div className="glass px-6 py-8 sm:px-8 sm:py-10 md:px-[30px] md:py-[26px] flex flex-wrap gap-6 items-center justify-between">
                        <div>
                            <h2 className="font-display text-[26px] font-semibold tracking-[-0.03em]">
                                Let's build together.
                            </h2>
                            <p className="text-[15px] leading-[1.6] text-ink/65 mt-2 max-w-[54ch]">
                                Send the problem, not the specification. We will come back with an architecture.
                            </p>
                        </div>
                        <Link to="/contact" className="btn-ink">
                            Get in touch
                            <span className="leading-none">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
