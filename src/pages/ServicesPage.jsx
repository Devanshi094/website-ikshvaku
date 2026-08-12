import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, reveal } from '../hooks/useReveal'

const ServicesPage = () => {
    const [activeTab, setActiveTab] = useState('it')
    const [servicesRef, servicesIn] = useReveal(0.1)
    const [aiRef, aiIn] = useReveal(0.15)

    const itServices = [
        { num: '01', name: 'Cloud Infrastructure', description: 'Scalable cloud solutions with AWS, Azure & GCP' },
        { num: '02', name: 'Machine Learning', description: 'AI/ML models for intelligent automation' },
        { num: '03', name: 'Enterprise Technology', description: 'Enterprise-grade software solutions' },
        { num: '04', name: 'Payments', description: 'Secure payment gateway integrations' },
        { num: '05', name: 'Security', description: 'Cybersecurity & compliance solutions' },
        { num: '06', name: 'Blockchain', description: 'Decentralized application development' },
        { num: '07', name: 'Application Development', description: 'Custom web & mobile applications' },
        { num: '08', name: 'UX & UI', description: 'User-centric design experiences' },
    ]

    const resourceAugmentation = [
        'Dot Net Developer', 'Full Stack Developer', 'Web Developer', 'AngularJS Developer',
        'iOS Developer', 'Android Developer', 'Java Developer', 'Flutter Developer',
        'NodeJS Developer', 'JavaScript Developer', 'App Developer', 'Machine Learning Developer',
        'Back End Developer', 'Front End Developer', 'Quality Assurance Developer', 'Security Engineers',
    ]

    const aiPillars = [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
    ]

    // The full capability taxonomy, as published on ikshvakusolutions.com
    const capabilityGroups = [
        {
            num: '01',
            group: 'Cloud & AI',
            items: [
                { name: 'Cloud Infrastructure', note: 'AWS · Azure · GCP' },
                { name: 'Machine Learning', note: 'AI/ML models & pipelines' },
                { name: 'Predictive Analytics', note: 'Data-driven insights' },
                { name: 'NLP Solutions', note: 'Language AI integrations' },
            ],
        },
        {
            num: '02',
            group: 'Development',
            items: [
                { name: 'Application Development', note: 'Web & mobile apps' },
                { name: 'Full Stack Engineering', note: 'End-to-end solutions' },
                { name: 'API & Microservices', note: 'Scalable back-ends' },
                { name: 'UX & UI Design', note: 'User-centric interfaces' },
            ],
        },
        {
            num: '03',
            group: 'Enterprise',
            items: [
                { name: 'Enterprise Technology', note: 'SAP · Oracle · ERP' },
                { name: 'Digital Transformation', note: 'End-to-end consulting' },
                { name: 'Resource Augmentation', note: '60+ expert engineers' },
                { name: 'Data Strategy', note: 'BI & analytics consulting' },
            ],
        },
        {
            num: '04',
            group: 'Security & FinTech',
            items: [
                { name: 'Cybersecurity', note: 'GDPR & HIPAA compliant' },
                { name: 'Blockchain', note: 'Decentralised apps' },
                { name: 'Payments', note: 'Secure gateway integration' },
                { name: 'Compliance Auditing', note: 'Regulatory readiness' },
            ],
        },
    ]

    return (
        <div>
            {/* Page opening */}
            <section className="relative pt-[112px] pb-10 sm:pt-[150px] sm:pb-14 lg:pt-[190px] lg:pb-20">
                <div className="shell">
                    <div className="eyebrow eyebrow-rule animate-fade-up">Our expertise</div>
                    <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-10 lg:gap-[60px] items-end mt-[26px]">
                        <div>
                            <h1 className="display-xl max-w-[14ch] animate-fade-up stagger-1">
                                Comprehensive IT Services
                            </h1>
                            <p className="lede mt-7 max-w-[52ch] animate-fade-up stagger-2">
                                From cloud infrastructure to AI/ML solutions, we provide end-to-end technology
                                services that drive innovation and accelerate your digital transformation journey.
                            </p>
                        </div>
                        <div className="rule-list animate-fade-up stagger-3">
                            <div className="rule-row">
                                <span className="rule-label">Service lines</span>
                                <span className="rule-value">8</span>
                            </div>
                            <div className="rule-row">
                                <span className="rule-label">Specialist roles</span>
                                <span className="rule-value">16</span>
                            </div>
                            <div className="rule-row">
                                <span className="rule-label">Senior specialists</span>
                                <span className="rule-value">60+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section ref={servicesRef} className="section pt-6">
                <div className="shell">
                    <div className={`section-head ${reveal(servicesIn)}`}>
                        <h2 className="display-md max-w-[20ch]">
                            What We Offer
                        </h2>
                        <span className="section-index">01 — Services</span>
                    </div>

                    {/* Tabs */}
                    <div className={`flex flex-wrap gap-3 mt-8 ${reveal(servicesIn)}`}>
                        {[
                            { id: 'it', label: 'IT Services' },
                            { id: 'resource', label: 'Resource Augmentation' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                aria-pressed={activeTab === tab.id}
                                className={activeTab === tab.id ? 'btn-ink btn-sm' : 'btn-glass btn-sm'}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* IT Services */}
                    {activeTab === 'it' && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-8">
                            {itServices.map((service, index) => (
                                <div
                                    key={service.name}
                                    className="glass-quiet glass-hover group p-[26px] animate-fade-up"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="mark-bar transition-transform duration-500 group-hover:scale-y-125"></span>
                                        <span className="text-[11px] font-semibold tracking-[0.1em] text-ink/35">
                                            {service.num}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] mt-[18px]">
                                        {service.name}
                                    </h3>
                                    <p className="text-[14px] leading-[1.6] text-ink/62 mt-2.5">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Resource Augmentation */}
                    {activeTab === 'resource' && (
                        <div className="grid grid-cols-2 md:grid-cols-4 mt-8 border-t animate-fade-up"
                            style={{ borderColor: 'var(--rule-strong)' }}>
                            {resourceAugmentation.map((role) => (
                                <div
                                    key={role}
                                    className="flex items-center gap-3 py-[15px] pr-4 border-b text-[13.5px] font-medium text-ink/75 transition-colors duration-300 hover:text-marine"
                                    style={{ borderColor: 'var(--rule)' }}
                                >
                                    <span className="block w-[6px] h-[14px] bg-marine flex-shrink-0"></span>
                                    {role}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Full capability list */}
            <section className="section pt-0">
                <div className="shell">
                    <div className="section-head">
                        <h2 className="display-md max-w-[22ch]">
                            Every capability, in one place.
                        </h2>
                        <span className="section-index">02 — Full capability list</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-9">
                        {capabilityGroups.map((group) => (
                            <div key={group.num} className="glass-quiet p-[26px]">
                                <div className="flex items-center justify-between">
                                    <span className="mark-bar"></span>
                                    <span className="text-[11px] font-semibold tracking-[0.1em] text-ink/35">
                                        {group.num}
                                    </span>
                                </div>
                                <h3 className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-ink/45 mt-[18px] pb-3 border-b"
                                    style={{ borderColor: 'var(--rule-strong)' }}>
                                    {group.group}
                                </h3>
                                <div>
                                    {group.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="py-3.5 border-b"
                                            style={{ borderColor: 'var(--rule)' }}
                                        >
                                            <div className="font-display text-[14.5px] font-semibold tracking-[-0.01em]">
                                                {item.name}
                                            </div>
                                            <div className="text-[12.5px] text-ink/55 mt-1">
                                                {item.note}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI focus */}
            <section ref={aiRef} className="section pt-0">
                <div className="shell">
                    <div className={`ink-panel on-dark rounded-[20px] px-8 py-12 md:px-14 md:py-16 relative overflow-hidden ${reveal(aiIn)}`}>
                        <div className="absolute inset-0 grid-texture-light opacity-70 pointer-events-none"></div>
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse 50% 60% at 85% 20%, rgba(47,75,143,.45), transparent 65%)' }}
                        ></div>

                        <div className="relative grid lg:grid-cols-[1.1fr_.9fr] gap-12 lg:gap-16 items-end">
                            <div>
                                <span className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-white/45">
                                    03 — AI Focus
                                </span>
                                <h2 className="display-md mt-5 max-w-[16ch]">
                                    Artificial Intelligence at the Core
                                </h2>
                                <p className="text-[16.5px] leading-[1.65] text-white/65 mt-6 max-w-[46ch]">
                                    We are now focusing on AI-driven solutions that transform how businesses
                                    operate. From predictive analytics to intelligent automation, our AI
                                    services help you stay ahead of the competition.
                                </p>
                                <Link to="/contact" className="btn-ink mt-8">
                                    Discuss AI Solutions
                                    <span className="leading-none">→</span>
                                </Link>
                            </div>

                            <div className="border-t" style={{ borderColor: 'rgba(255,255,255,.22)' }}>
                                {aiPillars.map((item, i) => (
                                    <div
                                        key={item}
                                        className="flex items-baseline justify-between gap-4 py-[15px] border-b"
                                        style={{ borderColor: 'rgba(255,255,255,.12)' }}
                                    >
                                        <span className="text-[14.5px] text-white/85">{item}</span>
                                        <span className="text-[11px] font-semibold tracking-[0.1em] text-white/35">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
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
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-[15px] leading-[1.6] text-ink/65 mt-2 max-w-[52ch]">
                                Let's discuss how our services can help you achieve your goals.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link to="/contact" className="btn-ink">
                                Get Started
                                <span className="leading-none">→</span>
                            </Link>
                            <Link to="/about" className="btn-outline">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesPage
