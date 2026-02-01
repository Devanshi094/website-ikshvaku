import { useState } from 'react'
import { Link } from 'react-router-dom'

const ServicesPage = () => {
    const [activeTab, setActiveTab] = useState('it')

    const itServices = [
        { icon: '☁️', name: 'Cloud Infrastructure', description: 'Scalable cloud solutions with AWS, Azure & GCP' },
        { icon: '🤖', name: 'Machine Learning', description: 'AI/ML models for intelligent automation' },
        { icon: '🏢', name: 'Enterprise Technology', description: 'Enterprise-grade software solutions' },
        { icon: '💳', name: 'Payments', description: 'Secure payment gateway integrations' },
        { icon: '🔒', name: 'Security', description: 'Cybersecurity & compliance solutions' },
        { icon: '⛓️', name: 'Blockchain', description: 'Decentralized application development' },
        { icon: '💻', name: 'Application Development', description: 'Custom web & mobile applications' },
        { icon: '🎨', name: 'UX & UI', description: 'User-centric design experiences' },
    ]

    const resourceAugmentation = [
        'Dot Net Developer', 'Full Stack Developer', 'Web Developer', 'AngularJS Developer',
        'iOS Developer', 'Android Developer', 'Java Developer', 'Flutter Developer',
        'NodeJS Developer', 'JavaScript Developer', 'App Developer', 'Machine Learning Developer',
        'Back End Developer', 'Front End Developer', 'Quality Assurance Developer', 'Security Engineers',
    ]

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="section bg-gradient-to-br from-sky-light via-sky-medium to-sky-deep relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="blob w-[500px] h-[500px] bg-mint -top-32 -right-32"></div>
                    <div className="blob w-[400px] h-[400px] bg-accent-cyan -bottom-32 -left-32 animation-delay-2000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-teal mb-6 border border-mint/30">
                            Our Expertise
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
                            Comprehensive <span className="gradient-text">IT Services</span>
                        </h1>
                        <p className="text-lg text-charcoal/80 mb-8">
                            From cloud infrastructure to AI/ML solutions, we provide end-to-end technology services
                            that drive innovation and accelerate your digital transformation journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Tab Buttons */}
                    <div className="flex justify-center gap-4 mb-16">
                        <button
                            onClick={() => setActiveTab('it')}
                            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${activeTab === 'it'
                                ? 'bg-gradient-mint text-white shadow-lg shadow-mint/30'
                                : 'bg-white border-2 border-mint/30 text-dark hover:border-mint'
                                }`}
                        >
                            🛠️ IT Services
                        </button>
                        <button
                            onClick={() => setActiveTab('resource')}
                            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${activeTab === 'resource'
                                ? 'bg-gradient-mint text-white shadow-lg shadow-mint/30'
                                : 'bg-white border-2 border-mint/30 text-dark hover:border-mint'
                                }`}
                        >
                            👥 Resource Augmentation
                        </button>
                    </div>

                    {/* IT Services Grid */}
                    {activeTab === 'it' && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {itServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="service-card text-center group cursor-pointer"
                                >
                                    <span className="text-5xl mb-6 block group-hover:scale-125 transition-transform duration-300">
                                        {service.icon}
                                    </span>
                                    <h3 className="font-display text-xl font-bold text-dark mb-3">{service.name}</h3>
                                    <p className="text-sm text-charcoal/70">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Resource Augmentation Grid */}
                    {activeTab === 'resource' && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                </div>
            </section>

            {/* AI Section */}
            <section className="section bg-gradient-dark text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-mint/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 bg-white/10 text-mint rounded-full text-sm font-medium mb-6">
                                🤖 AI Focus
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                                Artificial Intelligence at the Core
                            </h2>
                            <p className="text-white/70 mb-8 leading-relaxed">
                                We are now focusing on AI-driven solutions that transform how businesses operate.
                                From predictive analytics to intelligent automation, our AI services help you
                                stay ahead of the competition.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-mint rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" className="btn-primary">
                                Discuss AI Solutions
                            </Link>
                        </div>

                        <div className="flex justify-center relative">
                            {/* AI Robot SVG Illustration */}
                            <div className="w-80 h-80 relative animate-float">
                                <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                                    {/* Glow Effect */}
                                    <defs>
                                        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                                            <stop offset="0%" stopColor="#4DB6AC" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#4DB6AC" stopOpacity="0" />
                                        </radialGradient>
                                        <linearGradient id="robotBody" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#4DB6AC" />
                                            <stop offset="50%" stopColor="#26A69A" />
                                            <stop offset="100%" stopColor="#00897B" />
                                        </linearGradient>
                                        <linearGradient id="robotHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#80DEEA" />
                                            <stop offset="100%" stopColor="#4DB6AC" />
                                        </linearGradient>
                                        <filter id="robotGlow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur stdDeviation="3" result="blur" />
                                            <feMerge>
                                                <feMergeNode in="blur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    {/* Background Glow */}
                                    <circle cx="150" cy="150" r="120" fill="url(#glow)" />

                                    {/* Robot Head Base */}
                                    <ellipse cx="150" cy="140" rx="85" ry="90" fill="url(#robotBody)" />

                                    {/* Head Highlight */}
                                    <ellipse cx="135" cy="105" rx="55" ry="45" fill="url(#robotHighlight)" opacity="0.4" />

                                    {/* Face Plate */}
                                    <path d="M90 120 Q85 160 100 190 Q150 210 200 190 Q215 160 210 120 Q190 95 150 95 Q110 95 90 120Z" fill="#1A1A2E" opacity="0.85" />

                                    {/* Eyes */}
                                    <circle cx="120" cy="145" r="20" fill="#06B6D4" filter="url(#robotGlow)" />
                                    <circle cx="180" cy="145" r="20" fill="#06B6D4" filter="url(#robotGlow)" />
                                    <circle cx="120" cy="145" r="12" fill="#80DEEA" />
                                    <circle cx="180" cy="145" r="12" fill="#80DEEA" />
                                    <circle cx="115" cy="140" r="5" fill="#FFFFFF" />
                                    <circle cx="175" cy="140" r="5" fill="#FFFFFF" />

                                    {/* Side Ear/Sensor */}
                                    <ellipse cx="55" cy="140" rx="20" ry="35" fill="url(#robotBody)" />
                                    <circle cx="55" cy="140" r="12" fill="#1A1A2E" opacity="0.8" />
                                    <circle cx="55" cy="140" r="7" fill="#06B6D4" filter="url(#robotGlow)" />

                                    <ellipse cx="245" cy="140" rx="20" ry="35" fill="url(#robotBody)" />
                                    <circle cx="245" cy="140" r="12" fill="#1A1A2E" opacity="0.8" />
                                    <circle cx="245" cy="140" r="7" fill="#06B6D4" filter="url(#robotGlow)" />

                                    {/* Circuit Lines */}
                                    <path d="M100 80 L80 60 L80 40" stroke="#06B6D4" strokeWidth="2" opacity="0.7" />
                                    <path d="M200 80 L220 60 L220 40" stroke="#06B6D4" strokeWidth="2" opacity="0.7" />
                                    <path d="M75 120 L60 120 L60 100" stroke="#06B6D4" strokeWidth="2" opacity="0.7" />
                                    <path d="M225 120 L240 120 L240 100" stroke="#06B6D4" strokeWidth="2" opacity="0.7" />

                                    {/* Antenna */}
                                    <rect x="145" y="45" width="10" height="30" rx="5" fill="url(#robotBody)" />
                                    <circle cx="150" cy="40" r="8" fill="#06B6D4" filter="url(#robotGlow)">
                                        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                                    </circle>

                                    {/* Neck */}
                                    <rect x="125" y="225" width="50" height="25" rx="5" fill="url(#robotBody)" />
                                    <path d="M130 235 L170 235" stroke="#1A1A2E" strokeWidth="2" opacity="0.5" />
                                    <path d="M130 245 L170 245" stroke="#1A1A2E" strokeWidth="2" opacity="0.5" />

                                    {/* Floating Data Elements */}
                                    <g opacity="0.6">
                                        <rect x="50" y="60" width="20" height="3" rx="1.5" fill="#06B6D4" />
                                        <rect x="50" y="67" width="15" height="3" rx="1.5" fill="#06B6D4" />
                                        <rect x="230" y="60" width="20" height="3" rx="1.5" fill="#06B6D4" />
                                        <rect x="235" y="67" width="15" height="3" rx="1.5" fill="#06B6D4" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="section-title mb-4">Ready to Transform Your Business?</h2>
                    <p className="section-subtitle mb-8">
                        Let's discuss how our services can help you achieve your goals.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/contact" className="btn-primary">
                            Get Started
                        </Link>
                        <Link to="/about" className="btn-secondary">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesPage
