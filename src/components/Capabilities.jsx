import { Link } from 'react-router-dom'
import { useReveal, reveal } from '../hooks/useReveal'
import { CAPABILITIES } from '../content/company'

const Capabilities = () => {
    const [sectionRef, isIn] = useReveal(0.08)

    return (
        <section ref={sectionRef} id="capabilities" className="section">
            <div className="shell">
                <div className={`section-head ${reveal(isIn)}`}>
                    <h2 className="display-md max-w-[20ch]">Six load-bearing lines of work.</h2>
                    <span className="section-index">02 — Capability</span>
                </div>

                <p className={`lede mt-7 max-w-[58ch] ${reveal(isIn)}`} style={{ transitionDelay: '40ms' }}>
                    Every system we build is located on one of these before a line of code is written.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-9">
                    {CAPABILITIES.map((capability, index) => (
                        <div
                            key={capability.ref}
                            className={`glass-quiet glass-hover group p-[26px] flex flex-col ${reveal(isIn)}`}
                            style={{ transitionDelay: `${Math.min(index * 35, 240)}ms` }}
                        >
                            <div className="flex items-center justify-between">
                                <span className="mark-bar transition-transform duration-500 group-hover:scale-y-125"></span>
                                <span className="grid-ref">{capability.ref}</span>
                            </div>

                            <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] mt-[18px]">
                                {capability.title}
                            </h3>
                            <p className="text-[14.5px] leading-[1.6] text-ink/62 mt-2.5">
                                {capability.summary}
                            </p>

                            <div className="mt-5 pt-4 border-t" style={{ borderColor: 'var(--rule)' }}>
                                {capability.items.slice(0, 3).map((item) => (
                                    <div key={item} className="flex items-start gap-2.5 py-1">
                                        <span className="block w-[5px] h-[5px] bg-marine flex-shrink-0 mt-[7px]"></span>
                                        <span className="text-[13px] leading-[1.5] text-ink/70">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* The shared substrate every line runs on */}
                <div className={`mt-6 ${reveal(isIn)}`} style={{ transitionDelay: '220ms' }}>
                    <div className="schedule">
                        {[
                            { label: 'Shared delivery', value: 'Architecture / QA / Handover / Maintenance' },
                            { label: 'Shared data layer', value: 'Postgres / MongoDB / BigQuery / Vector stores' },
                            { label: 'Shared infrastructure', value: 'AWS / Azure / GCP / Docker / CI-CD' },
                        ].map((row) => (
                            <div key={row.label} className="schedule-row flex-col sm:flex-row sm:items-baseline">
                                <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-ink/45 sm:w-[220px] flex-shrink-0">
                                    {row.label}
                                </span>
                                <span className="text-[14px] text-ink/75">{row.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-5 mt-8">
                        <p className="m-0 max-w-[52ch] text-[15px] leading-[1.6] text-ink/65">
                            Each line is documented in full, with the reference systems built on it.
                        </p>
                        <Link to="/services" className="btn-ink">
                            Full capability schedule
                            <span className="leading-none">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Capabilities
