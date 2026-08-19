import { Link } from 'react-router-dom'
import heroVideo from '../assets/AI_for_Business_A_Demo.mp4'
import { PROFILE, METRICS, CERTIFICATIONS } from '../content/company'
import PageNote from './PageNote'

const Hero = () => {
    return (
        <section id="home" className="relative pt-[112px] pb-16 sm:pt-[150px] sm:pb-20 lg:pt-[190px] lg:pb-28">
            <div className="shell">
                <div className="flex items-baseline justify-between gap-6 animate-fade-up">
                    <div className="eyebrow eyebrow-rule">
                        {PROFILE.discipline} · Est. {PROFILE.founded}
                    </div>
                    <span className="plate-mark hidden sm:block">00</span>
                </div>

                <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-10 sm:gap-12 lg:gap-[64px] items-end mt-8 sm:mt-10">
                    {/* Left — the statement */}
                    <div>
                        <h1 className="display-xl max-w-[13ch] animate-fade-up stagger-1">
                            {PROFILE.statement}
                        </h1>

                        <p className="lede mt-7 max-w-[46ch] animate-fade-up stagger-2">
                            {PROFILE.lede}
                        </p>

                        <div className="flex flex-wrap gap-3 mt-9 animate-fade-up stagger-3">
                            <Link to="/contact" className="btn-ink">
                                Start a conversation
                                <span className="leading-none">→</span>
                            </Link>
                            <Link to="/projects" className="btn-glass">
                                See the work
                            </Link>
                        </div>

                        {/* Registered standards, stated plainly rather than as badges */}
                        <div className="flex flex-wrap gap-x-7 gap-y-2 mt-10 pt-6 border-t animate-fade-up stagger-4"
                            style={{ borderColor: 'var(--rule-strong)' }}>
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

                    {/* Right — the film and the cumulative numbers */}
                    <div className="animate-fade-up stagger-3 w-full max-w-[560px] lg:max-w-none">
                        <div className="glass overflow-hidden p-1.5">
                            <div className="relative rounded-[11px] overflow-hidden bg-ink aspect-[5/4]">
                                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                    <source src={heroVideo} type="video/mp4" />
                                </video>
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{ background: 'linear-gradient(160deg, rgba(47,75,143,.30), rgba(25,26,31,.50))' }}
                                ></div>
                                <div className="absolute inset-0 grid-texture-light opacity-60 pointer-events-none"></div>

                                <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-4">
                                    <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-white/80 max-w-[22ch] leading-[1.5]">
                                        Systems in production, under real load
                                    </span>
                                    <span className="plate-mark text-white/45">2019 — 2026</span>
                                </div>
                            </div>
                        </div>

                        <div className="rule-list mt-7">
                            {METRICS.headline.map((metric) => (
                                <div key={metric.label} className="rule-row">
                                    <span className="rule-label">{metric.label}</span>
                                    <span className="rule-value">{metric.value}</span>
                                </div>
                            ))}
                        </div>

                        <PageNote page="home" className="mt-4" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
