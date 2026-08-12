import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT } from '../config/contact'

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
            { name: 'Projects', href: '/projects' },
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
            { name: 'AI Case Studies', href: '/projects' },
            { name: 'Our Strategy', href: '/about' },
            { name: 'Careers', href: '/careers' },
            { name: 'Contact Us', href: '/contact' },
        ]
    }

    const socialLinks = [
        { name: 'WhatsApp', href: CONTACT.whatsappHref },
        { name: 'LinkedIn', href: 'https://linkedin.com' },
        { name: 'Twitter', href: 'https://twitter.com' },
        { name: 'GitHub', href: 'https://github.com' },
    ]

    const facts = [
        { label: 'Email', value: CONTACT.email, href: CONTACT.emailHref },
        { label: 'Phone', value: CONTACT.phone, href: CONTACT.phoneHref },
        { label: 'WhatsApp', value: CONTACT.whatsapp, href: CONTACT.whatsappHref, external: true },
        { label: 'Office', value: CONTACT.location },
        { label: 'Hours', value: CONTACT.hours },
    ]

    return (
        <footer className="pb-12 pt-4">
            <div className="shell">
                {/* Closing call — the design's contact panel */}
                <div className="glass-deep px-6 py-10 sm:px-8 sm:py-12 md:px-[52px] md:py-16">
                    <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 lg:gap-14 items-end">
                        <div>
                            <span className="section-index">Get In Touch</span>
                            <h2 className="display-lg mt-4 max-w-[18ch]">
                                Ready to Work Together?
                            </h2>
                            <p className="lede mt-5 max-w-[46ch]">
                                Have a project in mind? We'd love to hear from you. Send us a message
                                and we'll respond within 24 hours.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-8">
                                <Link to="/contact" className="btn-ink">
                                    Get in Touch
                                    <span className="leading-none">→</span>
                                </Link>
                                <Link to="/services" className="btn-outline">
                                    View Services
                                </Link>
                            </div>
                        </div>

                        <div className="rule-list">
                            {facts.map((fact) => (
                                <div key={fact.label} className="flex justify-between items-baseline gap-4 py-[15px] border-b text-[13.5px]"
                                    style={{ borderColor: 'var(--rule)' }}>
                                    <span className="text-ink/55 flex-shrink-0">{fact.label}</span>
                                    {fact.href ? (
                                        <a
                                            href={fact.href}
                                            className="text-right hover:text-marine transition-colors"
                                            {...(fact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        >
                                            {fact.value}
                                        </a>
                                    ) : (
                                        <span className="text-right">{fact.value}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-12 pt-10 border-t" style={{ borderColor: 'var(--rule-strong)' }}>
                    <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
                        <div>
                            <div className="eyebrow eyebrow-rule">AI Insights</div>
                            <h3 className="font-display text-[26px] font-semibold tracking-[-0.03em] mt-4">
                                Stay Ahead with AI Insights
                            </h3>
                            <p className="text-[15px] leading-[1.6] text-ink/62 mt-2 max-w-[52ch]">
                                Get the latest AI trends, case studies, and industry insights delivered to your inbox.
                            </p>
                        </div>

                        <form onSubmit={handleSubscribe} className="w-full lg:w-auto">
                            {!subscribed ? (
                                <div className="flex gap-3 w-full lg:w-[420px]">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="field flex-1"
                                        aria-label="Email address"
                                        required
                                    />
                                    <button type="submit" className="btn-ink btn-sm whitespace-nowrap">
                                        Subscribe
                                        <span className="leading-none">→</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center gap-3 lg:w-[420px]">
                                    <span className="block w-[18px] h-[1.5px] bg-clay"></span>
                                    <span className="font-script text-[20px] text-clay">Thanks for subscribing!</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Directory */}
                <div className="mt-12 pt-10 border-t grid gap-10 md:grid-cols-2 lg:grid-cols-5"
                    style={{ borderColor: 'var(--rule-strong)' }}>
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-2.5 group">
                            <span className="block w-[11px] h-6 bg-marine transition-transform duration-500 group-hover:scale-y-110"></span>
                            <span className="font-display font-semibold text-base tracking-[-0.02em]">
                                Ikshvaku<span className="text-ink/45 font-normal"> Solutions</span>
                            </span>
                        </Link>
                        <p className="text-[14.5px] leading-[1.6] text-ink/62 mt-5 max-w-[38ch]">
                            We champion the bold to achieve the extraordinary. Transforming businesses
                            with cutting-edge AI and intelligent automation.
                        </p>

                        <div className="flex items-center gap-2.5 mt-5 text-[12.5px] text-ink/55">
                            <span className="relative flex h-[6px] w-[6px]">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-marine opacity-70 animate-ping"></span>
                                <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-marine"></span>
                            </span>
                            AI systems active
                        </div>

                        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[13px] font-semibold tracking-[0.06em] uppercase text-ink/55 hover:text-marine transition-colors"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {[
                        { title: 'Company', links: footerLinks.company },
                        { title: 'AI Services', links: footerLinks.aiServices },
                        { title: 'Resources', links: footerLinks.resources },
                    ].map((column) => (
                        <div key={column.title}>
                            <h4 className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-ink/45 pb-3 border-b"
                                style={{ borderColor: 'var(--rule-strong)' }}>
                                {column.title}
                            </h4>
                            <ul className="mt-1">
                                {column.links.map((link, i) => (
                                    <li key={`${link.name}-${i}`}>
                                        <Link
                                            to={link.href}
                                            className="block py-[11px] border-b text-[13.5px] text-ink/70 hover:text-marine transition-colors"
                                            style={{ borderColor: 'var(--rule)' }}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4"
                    style={{ borderColor: 'var(--rule-strong)' }}>
                    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-ink/35 m-0">
                        © 2019 – {currentYear} Ikshvaku Solutions. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-[11px] font-semibold tracking-[0.12em] uppercase text-ink/35">
                        <a href="#" className="hover:text-marine transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-marine transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-marine transition-colors">AI Ethics</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
