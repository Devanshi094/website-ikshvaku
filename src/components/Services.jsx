import { useState } from 'react'

const Services = () => {
    const [activeTab, setActiveTab] = useState('it')

    const itServices = [
        { icon: '☁️', name: 'Cloud Infrastructure' },
        { icon: '🤖', name: 'Machine Learning' },
        { icon: '🏢', name: 'Enterprise Technology' },
        { icon: '💳', name: 'Payments' },
        { icon: '🔒', name: 'Security' },
        { icon: '⛓️', name: 'Blockchain' },
        { icon: '💻', name: 'Application Development' },
        { icon: '🎨', name: 'UX & UI' },
    ]

    const resourceAugmentation = [
        'Dot Net Developer',
        'Full Stack Developer',
        'Web Developer',
        'AngularJS Developer',
        'iOS Developer',
        'Android Developer',
        'Java Developer',
        'Flutter Developer',
        'NodeJS Developer',
        'JavaScript Developer',
        'App Developer',
        'Machine Learning Developer',
        'Back End Developer',
        'Front End Developer',
        'Quality Assurance Developer',
        'Security Engineers',
    ]

    return (
        <section id="services" className="section bg-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-20 right-20 w-72 h-72 bg-sky-light rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-mint/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-mint/10 text-mint-deep rounded-full text-sm font-medium mb-4">
                        What We Offer
                    </span>
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive IT solutions and top-tier talent for your business needs.
                    </p>
                </div>

                {/* Tab Buttons */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('it')}
                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'it'
                                ? 'bg-gradient-mint text-white shadow-lg shadow-mint/30'
                                : 'bg-white border-2 border-mint/30 text-dark hover:border-mint'
                            }`}
                    >
                        IT Services
                    </button>
                    <button
                        onClick={() => setActiveTab('resource')}
                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'resource'
                                ? 'bg-gradient-mint text-white shadow-lg shadow-mint/30'
                                : 'bg-white border-2 border-mint/30 text-dark hover:border-mint'
                            }`}
                    >
                        Resource Augmentation
                    </button>
                </div>

                {/* IT Services Grid */}
                {activeTab === 'it' && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-[fadeIn_0.5s_ease]">
                        {itServices.map((service, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 text-center hover:border-mint transition-all hover:-translate-y-2 cursor-pointer group"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <span className="text-4xl mb-4 block group-hover:scale-125 transition-transform duration-300">
                                    {service.icon}
                                </span>
                                <h4 className="font-display font-bold text-dark">{service.name}</h4>
                            </div>
                        ))}
                    </div>
                )}

                {/* Resource Augmentation Grid */}
                {activeTab === 'resource' && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-[fadeIn_0.5s_ease]">
                        {resourceAugmentation.map((role, index) => (
                            <div
                                key={index}
                                className="glass-card p-4 flex items-center gap-3 hover:border-mint transition-all hover:-translate-y-1 cursor-pointer group"
                            >
                                <div className="w-10 h-10 bg-gradient-mint rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <span className="font-medium text-dark text-sm">{role}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* CTA */}
                <div className="text-center mt-12">
                    <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                        <span>Discuss Your Project</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Services
