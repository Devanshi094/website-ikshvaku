import { Link } from 'react-router-dom'
import { CONTACT } from '../config/contact'
import { CONTACT_INVITATION, CAPABILITIES, CERTIFICATIONS, PROFILE } from '../content/company'
import { MailIcon, PhoneIcon, WhatsAppIcon } from './icons'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const directory = {
        Practice: [
            { name: 'About', href: '/about' },
            { name: 'Capability', href: '/services' },
            { name: 'Selected work', href: '/projects' },
            { name: 'Contact', href: '/contact' },
        ],
        Capability: CAPABILITIES.map((capability) => ({
            name: capability.title,
            href: '/services',
            ref: capability.ref,
        })),
    }

    const facts = [
        { label: 'Email', value: CONTACT.email, href: CONTACT.emailHref, Icon: MailIcon },
        { label: 'Phone', value: CONTACT.phone, href: CONTACT.phoneHref, Icon: PhoneIcon },
        { label: 'WhatsApp', value: CONTACT.whatsapp, href: CONTACT.whatsappHref, external: true, Icon: WhatsAppIcon },
        { label: 'Office', value: CONTACT.location },
        { label: 'Hours', value: CONTACT.hours },
    ]

    return (
        <footer className="pb-12 pt-4">
            <div className="shell">
                {/* Closing call */}
                <div className="glass-deep px-5 py-10 sm:px-8 sm:py-12 md:px-[52px] md:py-16">
                    <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 lg:gap-14 items-end">
                        <div>
                            <span className="section-index">Next step</span>
                            <h2 className="display-lg mt-4 max-w-[13ch]">Let's build together.</h2>
                            <p className="lede mt-5 max-w-[44ch]">{CONTACT_INVITATION}</p>

                            <div className="flex flex-wrap gap-3 mt-8">
                                <Link to="/contact" className="btn-ink">
                                    Start a conversation
                                    <span className="leading-none">→</span>
                                </Link>
                                <a
                                    href={CONTACT.whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline"
                                >
                                    <WhatsAppIcon width={18} height={18} />
                                    WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="rule-list">
                            {facts.map((fact) => (
                                <div
                                    key={fact.label}
                                    className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 py-[15px] border-b text-[13.5px]"
                                    style={{ borderColor: 'var(--rule)' }}
                                >
                                    <span className="flex items-center gap-2 text-ink/55 flex-shrink-0">
                                        {fact.Icon ? <fact.Icon className="flex-shrink-0 text-ink/40" /> : null}
                                        {fact.label}
                                    </span>
                                    {fact.href ? (
                                        <a
                                            href={fact.href}
                                            className="sm:text-right hover:text-marine transition-colors [overflow-wrap:anywhere]"
                                            {...(fact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        >
                                            {fact.value}
                                        </a>
                                    ) : (
                                        <span className="sm:text-right [overflow-wrap:anywhere]">{fact.value}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Directory */}
                <div
                    className="mt-12 pt-10 border-t grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]"
                    style={{ borderColor: 'var(--rule-strong)' }}
                >
                    <div>
                        <Link to="/" className="flex items-center gap-2.5 group">
                            <span className="block w-[11px] h-6 bg-marine transition-transform duration-500 group-hover:scale-y-110"></span>
                            <span className="font-display font-semibold text-base tracking-[-0.02em]">
                                Ikshvaku<span className="text-ink/45 font-normal"> Solutions</span>
                            </span>
                        </Link>
                        <p className="text-[14.5px] leading-[1.6] text-ink/62 mt-5 max-w-[36ch]">
                            {PROFILE.statement} {PROFILE.discipline}, since {PROFILE.founded}.
                        </p>

                        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
                            {CERTIFICATIONS.map((cert) => (
                                <span
                                    key={cert}
                                    className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ink/40"
                                >
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4
                            className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-ink/45 pb-3 border-b"
                            style={{ borderColor: 'var(--rule-strong)' }}
                        >
                            Practice
                        </h4>
                        <ul className="mt-1">
                            {directory.Practice.map((link) => (
                                <li key={link.name}>
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

                    <div>
                        <h4
                            className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-ink/45 pb-3 border-b"
                            style={{ borderColor: 'var(--rule-strong)' }}
                        >
                            Capability
                        </h4>
                        <ul className="mt-1">
                            {directory.Capability.map((link) => (
                                <li key={link.ref}>
                                    <Link
                                        to={link.href}
                                        className="flex items-baseline justify-between gap-4 py-[11px] border-b text-[13.5px] text-ink/70 hover:text-marine transition-colors"
                                        style={{ borderColor: 'var(--rule)' }}
                                    >
                                        <span>{link.name}</span>
                                        <span className="grid-ref grid-ref-quiet flex-shrink-0">{link.ref}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4"
                    style={{ borderColor: 'var(--rule-strong)' }}
                >
                    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-ink/35 m-0">
                        © {PROFILE.founded} – {currentYear} Ikshvaku Solutions. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-[11px] font-semibold tracking-[0.12em] uppercase text-ink/35">
                        <a href="#" className="hover:text-marine transition-colors">Privacy</a>
                        <a href="#" className="hover:text-marine transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
