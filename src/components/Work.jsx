import { Link } from 'react-router-dom'
import { useReveal, reveal } from '../hooks/useReveal'
import { FLAGSHIP, CLIENTS } from '../content/company'

const Work = () => {
    const [sectionRef, isIn] = useReveal(0.08)

    return (
        <section ref={sectionRef} id="work" className="section">
            <div className="shell">
                <div className={`section-head ${reveal(isIn)}`}>
                    <h2 className="display-md max-w-[20ch]">
                        Fifty projects. Nine industries.
                    </h2>
                    <span className="section-index">03 — Selected work</span>
                </div>

                {/* Flagship engagement, given the space it earns */}
                <div className={`glass mt-9 p-6 sm:p-8 md:p-10 ${reveal(isIn)}`}>
                    <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-8 lg:gap-14">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="grid-ref">{FLAGSHIP.ref}</span>
                                <span className="block w-4 h-[1.5px] bg-ink/20"></span>
                                <span className="grid-ref grid-ref-quiet">{FLAGSHIP.grid}</span>
                            </div>

                            <h3 className="font-display text-[clamp(26px,3vw,38px)] font-semibold tracking-[-0.035em] leading-[1.05] mt-5">
                                {FLAGSHIP.title}
                            </h3>

                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4">
                                <span className="text-[11.5px] font-semibold tracking-[0.12em] uppercase text-marine">
                                    {FLAGSHIP.client}
                                </span>
                                <span className="text-[11.5px] font-semibold tracking-[0.12em] uppercase text-ink/40">
                                    {FLAGSHIP.sector}
                                </span>
                            </div>

                            <p className="text-[15px] leading-[1.65] text-ink/68 mt-5 max-w-[58ch]">
                                {FLAGSHIP.body}
                            </p>

                            <p className="text-[14px] leading-[1.6] text-ink/55 mt-5 pt-5 border-t max-w-[54ch]"
                                style={{ borderColor: 'var(--rule)' }}>
                                {FLAGSHIP.note}
                            </p>
                        </div>

                        {/* The pipeline, drawn as a sequence */}
                        <div className="self-start w-full">
                            <div className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-ink/40 pb-3 border-b"
                                style={{ borderColor: 'var(--rule-strong)' }}>
                                The pipeline
                            </div>
                            {FLAGSHIP.pipeline.map((stage) => (
                                <div
                                    key={stage.num}
                                    className="flex items-baseline gap-4 py-[13px] border-b"
                                    style={{ borderColor: 'var(--rule)' }}
                                >
                                    <span className="grid-ref grid-ref-quiet flex-shrink-0">{stage.num}</span>
                                    <div>
                                        <div className="font-display text-[14px] font-semibold tracking-[0.02em] uppercase">
                                            {stage.step}
                                        </div>
                                        <div className="text-[13px] leading-[1.55] text-ink/60 mt-1">
                                            {stage.detail}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Named engagements */}
                <div className={`flex items-baseline justify-between gap-5 mt-14 pb-[18px] border-b ${reveal(isIn)}`}
                    style={{ borderColor: 'var(--rule-strong)', transitionDelay: '80ms' }}>
                    <h3 className="font-display text-[24px] font-semibold tracking-[-0.03em]">Engaged by</h3>
                    <span className="section-index">Named with client agreement</span>
                </div>

                <div className="grid md:grid-cols-3 gap-5 mt-8">
                    {CLIENTS.map((client, index) => (
                        <div
                            key={client.ref}
                            className={`glass glass-hover p-6 sm:p-7 ${reveal(isIn)}`}
                            style={{ transitionDelay: `${Math.min(100 + index * 45, 240)}ms` }}
                        >
                            <div className="flex items-center justify-between">
                                <span className="grid-ref">{client.ref}</span>
                                <span className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-ink/40">
                                    {client.sector}
                                </span>
                            </div>
                            <div className="font-display text-[21px] font-semibold tracking-[-0.025em] mt-5">
                                {client.name}
                            </div>
                            <p className="text-[14px] leading-[1.6] text-ink/62 mt-3">{client.body}</p>
                        </div>
                    ))}
                </div>

                <div className={`flex flex-wrap items-center justify-between gap-5 mt-9 ${reveal(isIn)}`}
                    style={{ transitionDelay: '240ms' }}>
                    <p className="m-0 max-w-[52ch] text-[15px] leading-[1.6] text-ink/65">
                        Fourteen systems are documented in detail, each located back to its capability line.
                    </p>
                    <Link to="/projects" className="btn-ink">
                        Schedule of work
                        <span className="leading-none">→</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Work
