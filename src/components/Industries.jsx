import { useReveal, reveal } from '../hooks/useReveal'
import { INDUSTRIES, INDUSTRY_NOTE } from '../content/company'

const Industries = () => {
    const [sectionRef, isIn] = useReveal(0.08)

    return (
        <section ref={sectionRef} id="industries" className="section">
            <div className="shell">
                <div className={`section-head ${reveal(isIn)}`}>
                    <h2 className="display-md max-w-[20ch]">Where the work lands.</h2>
                    <span className="section-index">06 — Industries</span>
                </div>

                <p className={`lede mt-7 max-w-[58ch] ${reveal(isIn)}`} style={{ transitionDelay: '80ms' }}>
                    Nine sectors, each with its own tolerance for error. The architecture changes accordingly.
                </p>

                <div className={`schedule mt-9 ${reveal(isIn)}`} style={{ transitionDelay: '140ms' }}>
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

                <p className={`mt-9 max-w-[64ch] text-[clamp(16px,1.5vw,19px)] leading-[1.6] text-ink/72 ${reveal(isIn)}`}
                    style={{ transitionDelay: '220ms' }}>
                    {INDUSTRY_NOTE}
                </p>
            </div>
        </section>
    )
}

export default Industries
