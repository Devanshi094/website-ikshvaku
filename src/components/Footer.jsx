import { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (email) {
            setSubscribed(true)
            setEmail('')
        }
    }

    const footerLinks = {
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Careers', href: '/careers' },
            { name: 'Contact', href: '/contact' },
        ],
        aiServices: [
            { name: 'Machine Learning', href: '/services' },
            { name: 'Predictive Analytics', href: '/services' },
            { name: 'NLP Solutions', href: '/services' },
            { name: 'Computer Vision', href: '/services' },
        ],
        resources: [
            { name: 'AI Case Studies', href: '/about' },
            { name: 'Strategy', href: '/about' },
            { name: 'Careers', href: '/careers' },
            { name: 'AI Blog', href: '/' },
        ]
    }

    const socialLinks = [
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            )
        },
        {
            name: 'GitHub',
            href: 'https://github.com',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            )
        }
    ]

    return (
        <footer className="bg-gradient-dark text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-mint/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl"></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(77, 182, 172, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 182, 172, 0.02) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* AI Newsletter Section */}
                <div className="py-12 border-b border-white/10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="text-center lg:text-left">
                            <h3 className="font-display text-2xl font-bold mb-2">Stay Ahead with AI Insights</h3>
                            <p className="text-white/60">Get the latest AI trends, case studies, and industry insights delivered to your inbox.</p>
                        </div>
                        <form onSubmit={handleSubscribe} className="flex gap-3 w-full max-w-md">
                            {!subscribed ? (
                                <>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-mint text-white placeholder:text-white/40 transition-all"
                                        required
                                    />
                                    <button type="submit" className="btn-primary">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Subscribe
                                    </button>
                                </>
                            ) : (
                                <div className="flex items-center gap-2 text-mint">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-medium">Thanks for subscribing!</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Main Footer */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-10 h-10 group-hover:scale-110 transition-transform">
                                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="18" stroke="url(#footer-logo-grad)" strokeWidth="3" />
                                    <path d="M12 20L18 14L24 20L18 26L12 20Z" fill="url(#footer-logo-grad)" />
                                    <path d="M20 12L26 18L20 24L14 18L20 12Z" fill="url(#footer-logo-grad)" fillOpacity="0.6" />
                                    <defs>
                                        <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="40" y2="40">
                                            <stop offset="0%" stopColor="#4DB6AC" />
                                            <stop offset="100%" stopColor="#00897B" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className="font-display text-xl font-bold">Ikshvaku Solutions</span>
                        </Link>
                        <p className="text-white/60 mb-6 max-w-sm">
                            We champion the bold to achieve the extraordinary.
                            Transforming businesses with cutting-edge AI and intelligent automation.
                        </p>

                        {/* AI Indicator */}
                        <div className="flex items-center gap-2 mb-6 text-sm">
                            <div className="relative">
                                <div className="w-2 h-2 bg-mint rounded-full animate-ping absolute"></div>
                                <div className="w-2 h-2 bg-mint rounded-full relative"></div>
                            </div>
                            <span className="text-mint">AI Systems Active</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-mint hover:scale-110 transition-all"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-display font-bold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.href} className="text-white/60 hover:text-mint hover:translate-x-1 transition-all inline-block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold mb-4">AI Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.aiServices.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.href} className="text-white/60 hover:text-mint hover:translate-x-1 transition-all inline-block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.href} className="text-white/60 hover:text-mint hover:translate-x-1 transition-all inline-block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/50 text-sm">
                        © 2019 - {currentYear} Ikshvaku Solutions. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-white/50">
                        <a href="#" className="hover:text-mint transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-mint transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-mint transition-colors">AI Ethics</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
