import { Link } from 'react-router-dom'

const AboutPage = () => {
    const values = [
        {
            icon: '🎯',
            title: 'Innovation First',
            description: 'We constantly push boundaries to deliver cutting-edge solutions that drive real business value.'
        },
        {
            icon: '🤝',
            title: 'Client Partnership',
            description: 'We build lasting relationships based on trust, transparency, and mutual success.'
        },
        {
            icon: '⚡',
            title: 'Agile Delivery',
            description: 'Fast, iterative development ensures we deliver results quickly and adapt to changes.'
        },
        {
            icon: '🔒',
            title: 'Security & Compliance',
            description: 'GDPR and HIPAA compliant solutions with enterprise-grade security standards.'
        }
    ]

    const strategies = [
        { icon: '📊', title: 'Operations', description: 'Streamline your business operations with intelligent automation.' },
        { icon: '💾', title: 'Data Strategy', description: 'Unlock insights from your data with advanced analytics.' },
        { icon: '🏢', title: 'Organizational Design', description: 'Build agile teams and structures for the digital age.' },
        { icon: '💰', title: 'Price Modeling', description: 'Optimize pricing strategies with data-driven approaches.' },
        { icon: '💼', title: 'Business Transformation', description: 'End-to-end digital transformation consulting.' },
    ]

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="section bg-gradient-to-br from-sky-light via-sky-medium to-sky-deep relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="blob w-[500px] h-[500px] bg-mint -top-32 -left-32"></div>
                    <div className="blob w-[400px] h-[400px] bg-accent-cyan -bottom-32 -right-32 animation-delay-2000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-teal mb-6 border border-mint/30">
                                About Us
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
                                We Champion the <span className="gradient-text">Bold</span>
                            </h1>
                            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
                                Ikshvaku Solutions is a technology consulting company that empowers enterprises
                                to achieve extraordinary outcomes. We combine deep technical expertise with
                                strategic thinking to deliver transformative solutions.
                            </p>
                            <div className="flex gap-4">
                                <Link to="/services" className="btn-primary">
                                    Our Services
                                </Link>
                                <Link to="/contact" className="btn-secondary">
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-card p-6 text-center">
                                <div className="font-display text-4xl font-bold gradient-text mb-2">30+</div>
                                <div className="text-charcoal/70">High Impact Projects</div>
                            </div>
                            <div className="glass-card p-6 text-center">
                                <div className="font-display text-4xl font-bold gradient-text mb-2">100K+</div>
                                <div className="text-charcoal/70">Transactions</div>
                            </div>
                            <div className="glass-card p-6 text-center">
                                <div className="font-display text-4xl font-bold gradient-text mb-2">78+</div>
                                <div className="text-charcoal/70">Technologies</div>
                            </div>
                            <div className="glass-card p-6 text-center">
                                <div className="font-display text-4xl font-bold gradient-text mb-2">60+</div>
                                <div className="text-charcoal/70">Expert Engineers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-mint/10 text-mint-deep rounded-full text-sm font-medium mb-4">
                            What Drives Us
                        </span>
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-subtitle">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="service-card text-center group">
                                <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">
                                    {value.icon}
                                </span>
                                <h3 className="font-display text-xl font-bold text-dark mb-3">{value.title}</h3>
                                <p className="text-sm text-charcoal/70">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Strategy */}
            <section className="section bg-gradient-to-br from-sky-light to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-mint/10 text-mint-deep rounded-full text-sm font-medium mb-4">
                            How We Work
                        </span>
                        <h2 className="section-title">Our Strategy</h2>
                        <p className="section-subtitle">
                            Understanding business values & challenges with bespoke solutions at the core
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {strategies.map((strategy, index) => (
                            <div key={index} className="glass-card p-6 flex items-start gap-4 hover:border-mint transition-all hover:-translate-y-2 cursor-pointer group">
                                <span className="text-3xl group-hover:scale-110 transition-transform">{strategy.icon}</span>
                                <div>
                                    <h3 className="font-display text-lg font-bold text-dark mb-2">{strategy.title}</h3>
                                    <p className="text-sm text-charcoal/70">{strategy.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="section bg-gradient-dark text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl font-bold mb-4">Technology Partners</h2>
                        <p className="text-white/70">We partner with leading technology providers</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 items-center opacity-80">
                        {['AWS', 'Azure', 'Google Cloud', 'SAP', 'Oracle'].map((partner, index) => (
                            <div key={index} className="px-8 py-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-mint/50 transition-all">
                                <span className="font-display font-bold text-xl">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="section-title mb-4">Ready to Work Together?</h2>
                    <p className="section-subtitle mb-8">
                        Let's discuss how we can help transform your business.
                    </p>
                    <Link to="/contact" className="btn-primary">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
