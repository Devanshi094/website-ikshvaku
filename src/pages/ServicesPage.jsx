import { Link } from 'react-router-dom'
import { useReveal, reveal } from '../hooks/useReveal'
import {
    CAPABILITIES,
    AUGMENTATION_ROLES,
    AUGMENTATION_PROCESS,
    AUGMENTATION_TERMS,
    TECH_LAYERS,
    TECH_PRINCIPLE,
} from '../content/company'
import PageNote from '../components/PageNote'

const ServicesPage = () => {
    const [capRef, capIn] = useReveal(0.04)
    const [augRef, augIn] = useReveal(0.06)
    const [techRef, techIn] = useReveal(0.06)

    return (
        <div>
            {/* Page opening */}
            <section className="relative pt-[112px] pb-10 sm:pt-[150px] sm:pb-14 lg:pt-[190px] lg:pb-20">
                <div className="shell">
                    <div className="flex items-baseline justify-between gap-6 animate-fade-up">
                        <div className="eyebrow eyebrow-rule">Capability</div>
                        <span className="plate-mark hidden sm:block">A</span>
                    </div>

                    <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-10 lg:gap-[60px] items-end mt-[26px]">
                        <div>
                            <h1 className="display-xl max-w-[13ch] animate-fade-up stagger-1">
                                The column grid
                            </h1>
                            <p className="lede mt-7 max-w-[52ch] animate-fade-up stagger-2">
                                Six load-bearing lines of work, drawn as a floor plan is drawn. Everything
                                we build sits on one of these columns.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-9 animate-fade-up stagger-3">
                                <Link to="/contact" className="btn-ink">
                                    Start a conversation
                                    <span className="leading-none">→</span>
                                </Link>
                                <Link to="/projects" className="btn-glass">
                                    Reference systems
                                </Link>
                            </div>
                        </div>

                        <div className="rule-list animate-fade-up stagger-4">
                            {CAPABILITIES.map((capability) => (
                                <div key={capability.ref} className="rule-row">
                                    <span className="rule-label">{capability.title}</span>
                                    <span className="grid-ref">{capability.ref}</span>
                                </div>
                            ))}
                            <PageNote page="services" className="mt-4" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Capability lines in full */}
            <section ref={capRef} className="section pt-6">
                <div className="shell">
                    <div className={`section-head ${reveal(capIn)}`}>
                        <h2 className="display-md max-w-[22ch]">Every line, in full.</h2>
                        <span className="section-index">01 — Capability schedule</span>
                    </div>

                    <div className="flex flex-col gap-[18px] mt-9">
                        {CAPABILITIES.map((capability, index) => (
                            <div
                                key={capability.ref}
                                className={`glass glass-hover p-6 sm:p-8 md:p-10 ${reveal(capIn)}`}
                                style={{ transitionDelay: `${Math.min(index * 30, 240)}ms` }}
                            >
                                <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <span className="mark-bar"></span>
                                            <span className="grid-ref">{capability.ref}</span>
                                        </div>

                                        <h3 className="font-display text-[clamp(22px,2.4vw,30px)] font-semibold tracking-[-0.03em] leading-[1.1] mt-5">
                                            {capability.title}
                                        </h3>
                                        <p className="text-[15px] leading-[1.62] text-ink/68 mt-4 max-w-[46ch]">
                                            {capability.summary}
                                        </p>

                                        <div className="mt-6 pt-5 border-t" style={{ borderColor: 'var(--rule)' }}>
                                            <div className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-ink/40">
                                                Reference systems
                                            </div>
                                            <p className="text-[13.5px] leading-[1.6] text-ink/60 mt-2 max-w-[46ch]">
                                                {capability.reference}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="self-start w-full schedule">
                                        {capability.items.map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-start gap-3 py-[13px] border-b"
                                                style={{ borderColor: 'var(--rule)' }}
                                            >
                                                <span className="block w-[6px] h-[14px] bg-marine flex-shrink-0 mt-[3px]"></span>
                                                <span className="text-[14px] leading-[1.55] text-ink/75">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Staff augmentation */}
            <section ref={augRef} className="section pt-6">
                <div className="shell">
                    <div className={`section-head ${reveal(augIn)}`}>
                        <h2 className="display-md max-w-[20ch]">Engineers on your team.</h2>
                        <span className="section-index">02 — Staff augmentation</span>
                    </div>

                    <p className={`lede mt-7 max-w-[60ch] ${reveal(augIn)}`} style={{ transitionDelay: '40ms' }}>
                        Dedicated engineers who join your own team and tools, on project-based or long-term
                        engagement — not a separate vendor working at arm's length.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-9">
                        {AUGMENTATION_ROLES.map((role, index) => (
                            <div
                                key={role.num}
                                className={`glass-quiet glass-hover group p-[26px] ${reveal(augIn)}`}
                                style={{ transitionDelay: `${Math.min(index * 35, 240)}ms` }}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="mark-bar transition-transform duration-500 group-hover:scale-y-125"></span>
                                    <span className="grid-ref grid-ref-quiet">{role.num}</span>
                                </div>
                                <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] mt-[18px]">
                                    {role.title}
                                </h3>
                                <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-marine mt-2">
                                    {role.stack}
                                </div>
                                <p className="text-[14px] leading-[1.6] text-ink/62 mt-3">{role.body}</p>
                            </div>
                        ))}
                    </div>

                    {/* How engagement runs */}
                    <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 ${reveal(augIn)}`}
                        style={{ transitionDelay: '150ms' }}>
                        {AUGMENTATION_PROCESS.map((step) => (
                            <div key={step.num} className="pt-5" style={{ borderTop: '2px solid rgba(25,26,31,.85)' }}>
                                <span className="grid-ref">{step.num}</span>
                                <div className="font-display text-[18px] font-semibold tracking-[-0.02em] mt-3">
                                    {step.title}
                                </div>
                                <p className="text-[13.5px] leading-[1.6] text-ink/62 mt-2.5">{step.body}</p>
                            </div>
                        ))}
                    </div>

                    <div className={`grid sm:grid-cols-3 mt-9 schedule ${reveal(augIn)}`} style={{ transitionDelay: '190ms' }}>
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
                </div>
            </section>

            {/* Technology */}
            <section ref={techRef} className="section pt-6">
                <div className="shell">
                    <div className={`ink-panel on-dark rounded-[20px] px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16 relative overflow-hidden ${reveal(techIn)}`}>
                        <div className="absolute inset-0 grid-texture-light opacity-70 pointer-events-none"></div>
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse 55% 65% at 85% 12%, rgba(47,75,143,.45), transparent 65%)' }}
                        ></div>

                        <div className="relative">
                            <div className="flex flex-col-reverse md:flex-row md:items-baseline md:justify-between gap-3 md:gap-5 pb-[18px] border-b"
                                style={{ borderColor: 'rgba(255,255,255,.22)' }}>
                                <h2 className="display-md max-w-[16ch]">Materials schedule</h2>
                                <span className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-white/45 whitespace-nowrap">
                                    03 — Technology
                                </span>
                            </div>

                            <p className="text-[16px] leading-[1.65] text-white/65 mt-6 max-w-[52ch]">
                                78+ technologies in production use, scheduled by layer rather than listed as a
                                cloud of logos.
                            </p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8 mt-10">
                                {TECH_LAYERS.map((layer) => (
                                    <div key={layer.layer}>
                                        <div className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-white/45 pb-3 border-b"
                                            style={{ borderColor: 'rgba(255,255,255,.22)' }}>
                                            {layer.layer}
                                        </div>
                                        <div className="mt-1">
                                            {layer.items.map((item) => (
                                                <div
                                                    key={item}
                                                    className="py-2 border-b text-[13.5px] text-white/80"
                                                    style={{ borderColor: 'rgba(255,255,255,.1)' }}
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-[14.5px] leading-[1.65] text-white/60 mt-12 pt-6 border-t max-w-[76ch]"
                                style={{ borderColor: 'rgba(255,255,255,.22)' }}>
                                {TECH_PRINCIPLE}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section pt-0">
                <div className="shell">
                    <div className="glass px-6 py-8 sm:px-8 sm:py-10 md:px-[30px] md:py-[26px] flex flex-wrap gap-6 items-center justify-between">
                        <div>
                            <h2 className="font-display text-[26px] font-semibold tracking-[-0.03em]">
                                Which column is your problem on?
                            </h2>
                            <p className="text-[15px] leading-[1.6] text-ink/65 mt-2 max-w-[54ch]">
                                Send the problem, not the specification. We will come back with an architecture.
                            </p>
                        </div>
                        <Link to="/contact" className="btn-ink">
                            Start a conversation
                            <span className="leading-none">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesPage
