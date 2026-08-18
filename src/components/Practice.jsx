import { useReveal, reveal } from '../hooks/useReveal'
import { PROFILE, METRICS } from '../content/company'

const Practice = () => {
    const [sectionRef, isIn] = useReveal(0.1)

    return (
        <section ref={sectionRef} id="practice" className="section">
            <div className="shell">
                <div className={`section-head ${reveal(isIn)}`}>
                    <h2 className="display-md max-w-[18ch]">The practice</h2>
                    <span className="section-index">01 — Who we are</span>
                </div>

                <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 mt-10">
                    {/* The three commitments */}
                    <div className={reveal(isIn)}>
                        <div className="schedule">
                            {PROFILE.principles.map((principle, i) => (
                                <div
                                    key={principle.title}
                                    className="py-6 border-b"
                                    style={{ borderColor: 'var(--rule)' }}
                                >
                                    <div className="flex items-baseline gap-4">
                                        <span className="grid-ref">{String(i + 1).padStart(2, '0')}</span>
                                        <div>
                                            <h3 className="font-display text-[18px] font-semibold tracking-[-0.02em]">
                                                {principle.title}
                                            </h3>
                                            <p className="text-[14.5px] leading-[1.62] text-ink/65 mt-2">
                                                {principle.body}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Proof, then the shape of the practice */}
                    <div className={reveal(isIn)} style={{ transitionDelay: '140ms' }}>
                        <div className="ink-panel on-dark rounded-2xl p-7 sm:p-9 relative overflow-hidden">
                            <div className="absolute inset-0 grid-texture-light opacity-70 pointer-events-none"></div>
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: 'radial-gradient(ellipse 60% 70% at 80% 15%, rgba(47,75,143,.45), transparent 65%)' }}
                            ></div>
                            <div className="relative">
                                <span className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-white/45">
                                    Proof, not promises
                                </span>
                                <p className="text-[clamp(17px,1.7vw,20px)] leading-[1.55] text-white/90 mt-5">
                                    {PROFILE.proof}
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6 mt-8">
                            {METRICS.glance.map((item) => (
                                <div key={item.title} className="pt-4" style={{ borderTop: '2px solid rgba(25,26,31,.85)' }}>
                                    <div className="font-display text-[16px] font-semibold tracking-[-0.02em]">
                                        {item.title}
                                    </div>
                                    <p className="text-[13.5px] leading-[1.6] text-ink/62 mt-2">
                                        {item.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Practice
