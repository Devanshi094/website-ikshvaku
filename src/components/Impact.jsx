import { Link } from 'react-router-dom'
import { useReveal, reveal } from '../hooks/useReveal'

const Impact = () => {
    const [sectionRef, isIn] = useReveal(0.15)

    const stats = [
        { number: '30+', label: 'AI Projects Delivered' },
        { number: '99.5%', label: 'Model Accuracy' },
        { number: '100K+', label: 'AI Predictions / Day' },
    ]

    const consultingItems = [
        'AI Readiness Assessment',
        'ML Model Architecture Review',
        'Data Strategy Consultation',
        'AI Ethics & Governance Audit',
    ]

    const caseStudies = [
        {
            industry: 'Manufacturing',
            title: 'Predictive Maintenance',
            result: '45%',
            resultLabel: 'Downtime Reduction'
        },
        {
            industry: 'Retail',
            title: 'Customer Churn Prediction',
            result: '32%',
            resultLabel: 'Retention Increase'
        },
        {
            industry: 'Finance',
            title: 'Fraud Detection System',
            result: '99.8%',
            resultLabel: 'Detection Rate'
        }
    ]

    const badges = ['SOC 2 Compliant', 'GDPR Ready', 'ISO 27001', '24/7 AI Monitoring']

    return (
        <section ref={sectionRef} id="impact" className="section">
            <div className="shell">
                <div className={`section-head ${reveal(isIn)}`}>
                    <h2 className="display-md max-w-[20ch]">
                        AI Impact
                    </h2>
                    <span className="section-index">05 — Measurable Results</span>
                </div>

                <p className={`lede mt-7 max-w-[62ch] ${reveal(isIn)}`} style={{ transitionDelay: '80ms' }}>
                    Bold steps forward with intelligent automation.
                </p>

                {/* Headline numbers */}
                <div className={`grid sm:grid-cols-3 gap-5 mt-8 ${reveal(isIn)}`}>
                    {stats.map((stat) => (
                        <div key={stat.label} className="glass p-6 sm:p-8">
                            <div className="stat-figure text-[clamp(36px,5vw,58px)] leading-none text-marine">
                                {stat.number}
                            </div>
                            <div className="text-[13px] font-semibold tracking-[0.1em] uppercase text-ink/45 mt-4 pt-4 border-t"
                                style={{ borderColor: 'var(--rule)' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Case studies */}
                <div className={`flex flex-col-reverse md:flex-row md:items-baseline md:justify-between gap-2 md:gap-5 mt-12 sm:mt-14 pb-[18px] border-b ${reveal(isIn)}`}
                    style={{ borderColor: 'var(--rule-strong)', transitionDelay: '120ms' }}>
                    <h3 className="font-display text-[26px] font-semibold tracking-[-0.03em]">
                        Recent AI Success Stories
                    </h3>
                    <span className="section-index">Selected work</span>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
                    {caseStudies.map((study, index) => (
                        <div
                            key={study.title}
                            className={`glass glass-hover p-6 sm:p-7 ${reveal(isIn)}`}
                            style={{ transitionDelay: `${160 + index * 90}ms` }}
                        >
                            <div className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-ink/45">
                                {study.industry}
                            </div>
                            <div className="font-display text-[19px] font-semibold tracking-[-0.02em] mt-4">
                                {study.title}
                            </div>
                            <div className="mt-6 pt-4 border-t flex items-baseline gap-2.5"
                                style={{ borderColor: 'var(--rule)' }}>
                                <span className="stat-figure text-[30px] text-marine">{study.result}</span>
                                <span className="text-[12.5px] text-ink/55">{study.resultLabel}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Two closing offers */}
                <div className="grid lg:grid-cols-2 gap-5 mt-6">
                    <div className={`ink-panel rounded-2xl p-7 sm:p-9 relative overflow-hidden on-dark ${reveal(isIn)}`}
                        style={{ transitionDelay: '260ms' }}>
                        <div className="absolute inset-0 grid-texture-light opacity-70 pointer-events-none"></div>
                        <div className="relative">
                            <span className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-white/45">
                                Measurable results
                            </span>
                            <h3 className="font-display text-[26px] font-semibold tracking-[-0.03em] mt-4">
                                AI Impact Studies
                            </h3>
                            <p className="text-[15px] leading-[1.62] text-white/65 mt-3 max-w-[42ch]">
                                See how our intelligent solutions have helped ambitious clients achieve
                                extraordinary outcomes with measurable ROI.
                            </p>
                            <Link to="/contact" className="btn-ink mt-7">
                                View case studies
                                <span className="leading-none">→</span>
                            </Link>
                        </div>
                    </div>

                    <div className={`glass p-7 sm:p-9 ${reveal(isIn)}`} style={{ transitionDelay: '320ms' }}>
                        <span className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-ink/45">
                            Expert AI guidance
                        </span>
                        <h3 className="font-display text-[26px] font-semibold tracking-[-0.03em] mt-4">
                            AI Strategy &amp; Consulting
                        </h3>
                        <p className="text-[15px] leading-[1.62] text-ink/65 mt-3">
                            Book a free consultation with our AI experts to understand how intelligent
                            automation can transform your business.
                        </p>

                        <div className="rule-list mt-6">
                            {consultingItems.map((item) => (
                                <div key={item} className="flex items-center gap-3 py-3 border-b"
                                    style={{ borderColor: 'var(--rule)' }}>
                                    <span className="block w-[6px] h-[14px] bg-marine flex-shrink-0"></span>
                                    <span className="text-[14px] text-ink/75">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/contact" className="btn-outline mt-7">
                            Book AI consultation
                            <span className="leading-none">→</span>
                        </Link>
                    </div>
                </div>

                {/* Trust badges */}
                <div className={`mt-9 pt-7 border-t ${reveal(isIn)}`}
                    style={{ borderColor: 'var(--rule-strong)', transitionDelay: '400ms' }}>
                    <p className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-ink/40 mb-5">
                        Trusted AI Infrastructure
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {badges.map((badge) => (
                            <div key={badge} className="flex items-center gap-2.5 py-3 pr-4 text-[13.5px] text-ink/62">
                                <span className="block w-[18px] h-[1.5px] bg-clay flex-shrink-0"></span>
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Impact
