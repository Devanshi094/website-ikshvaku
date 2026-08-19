import { Link } from 'react-router-dom'
import { useReveal, reveal } from '../hooks/useReveal'
import { ENGAGEMENT, ENGAGEMENT_CONSTANTS, AUGMENTATION_TERMS } from '../content/company'

const Engagement = () => {
    const [sectionRef, isIn] = useReveal(0.08)

    return (
        <section ref={sectionRef} id="engagement" className="section">
            <div className="shell">
                <div className={`section-head ${reveal(isIn)}`}>
                    <h2 className="display-md max-w-[20ch]">Three ways in.</h2>
                    <span className="section-index">05 — Engagement</span>
                </div>

                <p className={`lede mt-7 max-w-[58ch] ${reveal(isIn)}`} style={{ transitionDelay: '40ms' }}>
                    All three run through the same lifecycle and the same architectural discipline.
                </p>

                <div className="grid md:grid-cols-3 gap-5 mt-9">
                    {ENGAGEMENT.map((mode, index) => (
                        <div
                            key={mode.ref}
                            className={`glass glass-hover p-6 sm:p-8 flex flex-col ${reveal(isIn)}`}
                            style={{ transitionDelay: `${Math.min(index * 50, 240)}ms` }}
                        >
                            <div className="flex items-center justify-between">
                                <span className="mark-bar"></span>
                                <span className="grid-ref">{mode.ref}</span>
                            </div>

                            <h3 className="display-sm mt-5">{mode.title}</h3>
                            <p className="text-[14.5px] leading-[1.62] text-ink/65 mt-3">{mode.summary}</p>

                            <div className="mt-auto pt-5 mt-6 border-t" style={{ borderColor: 'var(--rule)' }}>
                                {mode.items.map((item) => (
                                    <div key={item} className="flex items-start gap-2.5 py-1.5">
                                        <span className="block w-[5px] h-[5px] bg-marine flex-shrink-0 mt-[7px]"></span>
                                        <span className="text-[13px] leading-[1.5] text-ink/70">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Terms that hold across all three */}
                <div className={`grid sm:grid-cols-3 mt-6 schedule ${reveal(isIn)}`} style={{ transitionDelay: '170ms' }}>
                    {AUGMENTATION_TERMS.map((term) => (
                        <div
                            key={term.label}
                            className="flex items-baseline justify-between gap-4 py-[18px] pr-6 border-b"
                            style={{ borderColor: 'var(--rule)' }}
                        >
                            <span className="text-[12.5px] text-ink/55 max-w-[18ch]">{term.label}</span>
                            <span className="stat-figure text-[26px] text-marine">{term.value}</span>
                        </div>
                    ))}
                </div>

                {/* What is constant regardless of contract */}
                <div className={`grid md:grid-cols-3 gap-8 mt-12 ${reveal(isIn)}`} style={{ transitionDelay: '200ms' }}>
                    {ENGAGEMENT_CONSTANTS.map((item) => (
                        <div key={item.title} className="pt-4" style={{ borderTop: '2px solid rgba(25,26,31,.85)' }}>
                            <div className="font-display text-[16px] font-semibold tracking-[-0.02em]">
                                {item.title}
                            </div>
                            <p className="text-[13.5px] leading-[1.6] text-ink/62 mt-2">{item.body}</p>
                        </div>
                    ))}
                </div>

                <div className={`flex flex-wrap items-center justify-between gap-5 mt-10 ${reveal(isIn)}`}
                    style={{ transitionDelay: '230ms' }}>
                    <p className="m-0 max-w-[52ch] text-[15px] leading-[1.6] text-ink/65">
                        Need engineers inside your own team rather than a project? That is a line of work in itself.
                    </p>
                    <Link to="/services" className="btn-outline">
                        Staff augmentation
                        <span className="leading-none">→</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Engagement
