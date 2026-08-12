import { Link } from 'react-router-dom'
import { useReveal, reveal } from '../hooks/useReveal'

const ProjectsPage = () => {
    const [projectsRef, projectsIn] = useReveal(0.05)

    const stats = [
        { label: 'Projects Delivered', value: '30+' },
        { label: 'Records Processed Daily', value: '100K+' },
        { label: 'Avg. Time Saved', value: '85%' },
        { label: 'Client Satisfaction', value: '100%' },
    ]

    const projects = [
        {
            num: '01',
            sector: 'Data Automation · FinTech',
            title: 'PAN Lookup Intelligence System',
            description: 'A real-time PAN (Permanent Account Number) verification and lookup platform built for a leading Indian financial client. The system automates identity validation, reducing manual processing time by 85% and ensuring 100% compliance with regulatory requirements.',
            highlights: [
                '85% reduction in manual processing time',
                'Real-time PAN verification API',
                'Integrated with government databases',
                'Fully compliant with Indian FinTech regulations',
            ],
            stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'AWS'],
        },
        {
            num: '02',
            sector: 'AI · Enterprise Automation',
            title: 'Smart Data Automation Platform',
            description: 'An end-to-end intelligent data automation platform delivered to an Indian enterprise client. Powered by AI/ML pipelines, it automatically ingests, transforms, and routes business data — eliminating repetitive manual workflows and enabling real-time decision-making at scale.',
            highlights: [
                'AI-driven ETL pipeline with zero manual intervention',
                'Processes 100K+ records per hour',
                'Self-healing error correction logic',
                'Real-time dashboards & reporting',
            ],
            stack: ['Python', 'TensorFlow', 'Apache Spark', 'React', 'Azure'],
        },
    ]

    return (
        <div>
            {/* Page opening */}
            <section className="relative pt-[112px] pb-10 sm:pt-[150px] sm:pb-14 lg:pt-[190px] lg:pb-20">
                <div className="shell">
                    <div className="eyebrow eyebrow-rule animate-fade-up">Our Work</div>
                    <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-10 lg:gap-[60px] items-end mt-[26px]">
                        <div>
                            <h1 className="display-xl max-w-[14ch] animate-fade-up stagger-1">
                                Real Solutions, Real Impact
                            </h1>
                            <p className="lede mt-7 max-w-[52ch] animate-fade-up stagger-2">
                                From intelligent data pipelines to FinTech compliance platforms — explore
                                the projects we've delivered for our clients across India and beyond.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-9 animate-fade-up stagger-3">
                                <Link to="/contact" className="btn-ink">
                                    Start a Project
                                    <span className="leading-none">→</span>
                                </Link>
                                <Link to="/services" className="btn-glass">
                                    View Services
                                </Link>
                            </div>
                        </div>

                        <div className="rule-list animate-fade-up stagger-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="rule-row">
                                    <span className="rule-label">{stat.label}</span>
                                    <span className="rule-value">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section ref={projectsRef} className="section pt-6">
                <div className="shell">
                    <div className={`section-head ${reveal(projectsIn)}`}>
                        <h2 className="display-md max-w-[20ch]">
                            Selected work.
                        </h2>
                        <span className="section-index">01 — Projects</span>
                    </div>

                    <div className="flex flex-col gap-[18px] mt-9">
                        {projects.map((project, index) => (
                            <div
                                key={project.num}
                                className={`glass glass-hover p-6 sm:p-8 md:p-10 ${reveal(projectsIn)}`}
                                style={{ transitionDelay: `${index * 120}ms` }}
                            >
                                <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-8 lg:gap-14">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-ink/45">
                                                {project.sector}
                                            </span>
                                            <span className="text-[11px] font-semibold tracking-[0.1em] text-ink/35">
                                                {project.num}
                                            </span>
                                        </div>

                                        <h3 className="font-display text-[clamp(24px,2.6vw,32px)] font-semibold tracking-[-0.03em] leading-[1.08] mt-5">
                                            {project.title}
                                        </h3>
                                        <p className="text-[15px] leading-[1.62] text-ink/65 mt-4 max-w-[62ch]">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-7 pt-5 border-t"
                                            style={{ borderColor: 'var(--rule)' }}>
                                            {project.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-[11.5px] font-semibold tracking-[0.06em] uppercase text-ink/45"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="rule-list self-start">
                                        {project.highlights.map((highlight) => (
                                            <div
                                                key={highlight}
                                                className="flex items-start gap-3 py-[15px] border-b"
                                                style={{ borderColor: 'var(--rule)' }}
                                            >
                                                <span className="block w-[6px] h-[14px] bg-marine flex-shrink-0 mt-1"></span>
                                                <span className="text-[14px] leading-[1.55] text-ink/75">
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
                    <div className="glass px-8 py-10 md:px-[30px] md:py-[26px] flex flex-wrap gap-6 items-center justify-between">
                        <div>
                            <h2 className="font-display text-[26px] font-semibold tracking-[-0.03em]">
                                Ready to Build Your Next Success Story?
                            </h2>
                            <p className="text-[15px] leading-[1.6] text-ink/65 mt-2 max-w-[58ch]">
                                Let's discuss how we can craft an intelligent solution tailored to your
                                business needs.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link to="/contact" className="btn-ink">
                                Start a Project
                                <span className="leading-none">→</span>
                            </Link>
                            <Link to="/services" className="btn-outline">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectsPage
