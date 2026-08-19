import { Link } from 'react-router-dom'
import { useReveal, reveal } from '../hooks/useReveal'
import { PROJECTS, CAPABILITIES, METRICS } from '../content/company'
import PageNote from '../components/PageNote'

// Grid line → capability title, so each system can name the column it sits on
const GRID_TITLES = Object.fromEntries(CAPABILITIES.map((c) => [c.ref, c.title]))

const ProjectsPage = () => {
    const [scheduleRef, scheduleIn] = useReveal(0.03)
    const [plateRef, plateIn] = useReveal(0.02)

    const openingStats = METRICS.full.filter((m) =>
        ['Projects delivered', 'Systems documented', 'Industries served', 'SaaS products built'].includes(m.label)
    )

    return (
        <div>
            {/* Page opening */}
            <section className="relative pt-[112px] pb-10 sm:pt-[150px] sm:pb-14 lg:pt-[190px] lg:pb-20">
                <div className="shell">
                    <div className="flex items-baseline justify-between gap-6 animate-fade-up">
                        <div className="eyebrow eyebrow-rule">Selected work</div>
                        <span className="plate-mark hidden sm:block">P</span>
                    </div>

                    <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-10 lg:gap-[60px] items-end mt-[26px]">
                        <div>
                            <h1 className="display-xl max-w-[12ch] animate-fade-up stagger-1">
                                Fifty projects. Nine industries.
                            </h1>
                            <p className="lede mt-7 max-w-[52ch] animate-fade-up stagger-2">
                                Fourteen representative systems, each located back to its capability line.
                                Client names are given where the engagement is disclosable.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-9 animate-fade-up stagger-3">
                                <Link to="/contact" className="btn-ink">
                                    Start a conversation
                                    <span className="leading-none">→</span>
                                </Link>
                                <Link to="/services" className="btn-glass">
                                    Capability lines
                                </Link>
                            </div>
                        </div>

                        <div className="rule-list animate-fade-up stagger-4">
                            {openingStats.map((stat) => (
                                <div key={stat.label} className="rule-row">
                                    <span className="rule-label">{stat.label}</span>
                                    <span className="rule-value">{stat.value}</span>
                                </div>
                            ))}
                            <PageNote page="projects" className="mt-4" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Schedule of work — the index */}
            <section ref={scheduleRef} className="section pt-6 pb-0">
                <div className="shell">
                    <div className={`section-head ${reveal(scheduleIn)}`}>
                        <h2 className="display-md max-w-[20ch]">Schedule of work</h2>
                        <span className="section-index">01 — Index</span>
                    </div>

                    <div className={`schedule mt-8 ${reveal(scheduleIn)}`} style={{ transitionDelay: '40ms' }}>
                        {PROJECTS.map((project) => (
                            <a
                                key={project.ref}
                                href={`#${project.ref.replace('.', '-')}`}
                                className="grid grid-cols-[46px_1fr_auto] items-baseline gap-x-4 sm:gap-x-6 py-[15px] border-b transition-colors duration-300 hover:bg-white/35"
                                style={{ borderColor: 'var(--rule)' }}
                            >
                                <span className="grid-ref grid-ref-quiet">{project.ref}</span>
                                <span className="text-[14px] sm:text-[15px] font-medium text-ink/80">
                                    {project.title}
                                </span>
                                <span className="grid-ref">{project.grid}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* The plates */}
            <section ref={plateRef} className="section">
                <div className="shell">
                    <div className="flex flex-col gap-[18px]">
                        {PROJECTS.map((project, index) => (
                            <div
                                key={project.ref}
                                id={project.ref.replace('.', '-')}
                                className={`glass glass-hover p-6 sm:p-8 md:p-10 ${reveal(plateIn)}`}
                                style={{ transitionDelay: `${Math.min(index * 30, 240)}ms` }}
                            >
                                <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-8 lg:gap-14">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="grid-ref">{project.ref}</span>
                                            <span className="block w-4 h-[1.5px] bg-ink/20"></span>
                                            <span className="grid-ref grid-ref-quiet">
                                                {project.grid} · {GRID_TITLES[project.grid]}
                                            </span>
                                            {project.flagship && (
                                                <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-marine border border-current/30 rounded px-2 py-0.5">
                                                    Flagship
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="font-display text-[clamp(22px,2.5vw,31px)] font-semibold tracking-[-0.03em] leading-[1.08] mt-5">
                                            {project.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4">
                                            {project.client && (
                                                <span className="text-[11.5px] font-semibold tracking-[0.12em] uppercase text-marine">
                                                    {project.client}
                                                </span>
                                            )}
                                            <span className="text-[11.5px] font-semibold tracking-[0.12em] uppercase text-ink/40">
                                                {project.sector}
                                            </span>
                                        </div>

                                        <p className="text-[15px] leading-[1.65] text-ink/68 mt-5 max-w-[60ch]">
                                            {project.body}
                                        </p>
                                    </div>

                                    <div className="self-start w-full schedule">
                                        {project.highlights.map((highlight) => (
                                            <div
                                                key={highlight}
                                                className="flex items-start gap-3 py-[13px] border-b"
                                                style={{ borderColor: 'var(--rule)' }}
                                            >
                                                <span className="block w-[6px] h-[14px] bg-marine flex-shrink-0 mt-[3px]"></span>
                                                <span className="text-[13.5px] leading-[1.55] text-ink/75">
                                                    {highlight}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section pt-0">
                <div className="shell">
                    <div className="glass px-6 py-8 sm:px-8 sm:py-10 md:px-[30px] md:py-[26px] flex flex-wrap gap-6 items-center justify-between">
                        <div>
                            <h2 className="font-display text-[26px] font-semibold tracking-[-0.03em]">
                                Your system could be the next plate.
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

export default ProjectsPage
