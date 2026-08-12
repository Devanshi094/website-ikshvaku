import { Link } from 'react-router-dom'
import { useReveal, reveal } from '../hooks/useReveal'

const AboutPage = () => {
    const [valuesRef, valuesIn] = useReveal(0.1)
    const [strategyRef, strategyIn] = useReveal(0.1)
    const [partnersRef, partnersIn] = useReveal(0.15)

    const values = [
        {
            num: '01',
            title: 'Innovation First',
            description: 'We constantly push boundaries to deliver cutting-edge solutions that drive real business value.'
        },
        {
            num: '02',
            title: 'Client Partnership',
            description: 'We build lasting relationships based on trust, transparency, and mutual success.'
        },
        {
            num: '03',
            title: 'Agile Delivery',
            description: 'Fast, iterative development ensures we deliver results quickly and adapt to changes.'
        },
        {
            num: '04',
            title: 'Security & Compliance',
            description: 'GDPR and HIPAA compliant solutions with enterprise-grade security standards.'
        }
    ]

    const strategies = [
        { num: '01', title: 'Operations', description: 'Streamline your business operations with intelligent automation.' },
        { num: '02', title: 'Data Strategy', description: 'Unlock insights from your data with advanced analytics.' },
        { num: '03', title: 'Organizational Design', description: 'Build agile teams and structures for the digital age.' },
        { num: '04', title: 'Price Modeling', description: 'Optimize pricing strategies with data-driven approaches.' },
        { num: '05', title: 'Business Transformation', description: 'End-to-end digital transformation consulting.' },
    ]

    const stats = [
        { label: 'High impact projects', value: '30+' },
        { label: 'Transactions', value: '100K+' },
        { label: 'Technologies', value: '78+' },
        { label: 'Expert engineers', value: '60+' },
    ]

    const partners = ['AWS', 'Azure', 'Google Cloud', 'SAP', 'Oracle']

    return (
        <div>
            {/* Page opening */}
            <section className="relative pt-[112px] pb-10 sm:pt-[150px] sm:pb-14 lg:pt-[190px] lg:pb-20">
                <div className="shell">
                    <div className="eyebrow eyebrow-rule animate-fade-up">About Us</div>
                    <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-10 lg:gap-[60px] items-end mt-[26px]">
                        <div>
                            <h1 className="display-xl max-w-[13ch] animate-fade-up stagger-1">
                                We Champion the Bold
                            </h1>
                            <p className="lede mt-7 max-w-[50ch] animate-fade-up stagger-2">
                                Ikshvaku Solutions is a technology consulting company that empowers enterprises
                                to achieve extraordinary outcomes. We combine deep technical expertise with
                                strategic thinking to deliver transformative solutions.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-9 animate-fade-up stagger-3">
                                <Link to="/services" className="btn-ink">
                                    Our Services
                                    <span className="leading-none">→</span>
                                </Link>
                                <Link to="/contact" className="btn-glass">
                                    Contact Us
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

            {/* Values */}
            <section ref={valuesRef} className="section pt-6">
                <div className="shell">
                    <div className={`section-head ${reveal(valuesIn)}`}>
                        <h2 className="display-md max-w-[20ch]">
                            Our Core Values
                        </h2>
                        <span className="section-index">01 — What Drives Us</span>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-9">
                        {values.map((value, index) => (
                            <div
                                key={value.num}
                                className={`pt-5 ${reveal(valuesIn)}`}
                                style={{
                                    transitionDelay: `${index * 90}ms`,
                                    borderTop: '2px solid rgba(25,26,31,.85)',
                                }}
                            >
                                <div className="font-display text-[13px] font-semibold tracking-[0.06em] text-clay">
                                    {value.num}
                                </div>
                                <div className="font-display text-[18px] font-semibold tracking-[-0.02em] mt-3">
                                    {value.title}
                                </div>
                                <p className="text-[14px] leading-[1.6] text-ink/62 mt-2.5">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategy */}
            <section ref={strategyRef} className="section pt-6">
                <div className="shell">
                    <div className={`section-head ${reveal(strategyIn)}`}>
                        <h2 className="display-md max-w-[24ch]">
                            Our Strategy
                        </h2>
                        <span className="section-index">02 — How We Work</span>
                    </div>

                    <p className={`lede mt-7 max-w-[62ch] ${reveal(strategyIn)}`} style={{ transitionDelay: '80ms' }}>
                        Understanding business values &amp; challenges with bespoke solutions at the core.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-8">
                        {strategies.map((strategy, index) => (
                            <div
                                key={strategy.num}
                                className={`glass-quiet glass-hover group p-[26px] ${reveal(strategyIn)}`}
                                style={{ transitionDelay: `${120 + index * 80}ms` }}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="mark-bar transition-transform duration-500 group-hover:scale-y-125"></span>
                                    <span className="text-[11px] font-semibold tracking-[0.1em] text-ink/35">
                                        {strategy.num}
                                    </span>
                                </div>
                                <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] mt-[18px]">
                                    {strategy.title}
                                </h3>
                                <p className="text-[14.5px] leading-[1.6] text-ink/62 mt-2.5">
                                    {strategy.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section ref={partnersRef} className="section pt-6">
                <div className="shell">
                    <div className={`ink-panel on-dark rounded-[20px] px-8 py-12 md:px-14 md:py-14 relative overflow-hidden ${reveal(partnersIn)}`}>
                        <div className="absolute inset-0 grid-texture-light opacity-70 pointer-events-none"></div>
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse 55% 60% at 15% 15%, rgba(47,75,143,.4), transparent 65%)' }}
                        ></div>

                        <div className="relative">
                            <div className="flex flex-wrap items-baseline justify-between gap-5 pb-[18px] border-b"
                                style={{ borderColor: 'rgba(255,255,255,.22)' }}>
                                <h2 className="display-md max-w-[18ch]">Technology Partners</h2>
                                <span className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-white/45">
                                    03 — Partners
                                </span>
                            </div>
                            <p className="text-[16px] leading-[1.65] text-white/65 mt-6 max-w-[46ch]">
                                We partner with leading technology providers.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-5 mt-8 border-t"
                                style={{ borderColor: 'rgba(255,255,255,.22)' }}>
                                {partners.map((partner) => (
                                    <div
                                        key={partner}
                                        className="py-[18px] pr-4 border-b font-display text-[19px] font-semibold tracking-[-0.02em] text-white/85"
                                        style={{ borderColor: 'rgba(255,255,255,.12)' }}
                                    >
                                        {partner}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section pt-0">
                <div className="shell">
                    <div className="glass px-8 py-10 md:px-[30px] md:py-[26px] flex flex-wrap gap-6 items-center justify-between">
                        <div>
                            <h2 className="font-display text-[26px] font-semibold tracking-[-0.03em]">
                                Ready to Work Together?
                            </h2>
                            <p className="text-[15px] leading-[1.6] text-ink/65 mt-2 max-w-[52ch]">
                                Let's discuss how we can help transform your business.
                            </p>
                        </div>
                        <Link to="/contact" className="btn-ink">
                            Get in Touch
                            <span className="leading-none">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
