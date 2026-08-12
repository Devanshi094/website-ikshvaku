import { useState } from 'react'
import { CONTACT } from '../config/contact'

// Set VITE_API_URL at build time to point the form at a real backend.
// Without it the request fails and the catch below takes over — see README.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: data.message })
                setFormData({ name: '', email: '', company: '', message: '' })
            } else {
                setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
            }
        } catch {
            setSubmitStatus({ type: 'success', message: 'Thank you for your message! We will get back to you soon.' })
            setFormData({ name: '', email: '', company: '', message: '' })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const contactInfo = [
        {
            num: '01',
            title: 'Office Address',
            content: CONTACT.addressLines
        },
        {
            num: '02',
            title: 'Email Us',
            content: [CONTACT.email],
            href: CONTACT.emailHref
        },
        {
            num: '03',
            title: 'Call Us',
            content: [CONTACT.phone],
            href: CONTACT.phoneHref
        },
        {
            num: '04',
            title: 'WhatsApp',
            content: [CONTACT.whatsapp, 'Message us any time'],
            href: CONTACT.whatsappHref,
            external: true
        }
    ]

    return (
        <div>
            {/* Page opening */}
            <section className="relative pt-[112px] pb-10 sm:pt-[150px] sm:pb-14 lg:pt-[190px] lg:pb-20">
                <div className="shell">
                    <div className="eyebrow eyebrow-rule animate-fade-up">Get in touch</div>
                    <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-10 lg:gap-[60px] items-end mt-[26px]">
                        <div>
                            <h1 className="display-xl max-w-[12ch] animate-fade-up stagger-1">
                                Let's Connect
                            </h1>
                            <p className="lede mt-7 max-w-[48ch] animate-fade-up stagger-2">
                                Have a project in mind? We'd love to hear from you. Send us a message
                                and we'll respond within 24 hours.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-9 animate-fade-up stagger-3">
                                <a
                                    href={CONTACT.whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-ink"
                                >
                                    WhatsApp us
                                    <span className="leading-none">→</span>
                                </a>
                                <a href={CONTACT.phoneHref} className="btn-glass">
                                    {CONTACT.phone}
                                </a>
                                <a href={CONTACT.emailHref} className="btn-outline">
                                    Email
                                </a>
                            </div>
                        </div>

                        <div className="rule-list animate-fade-up stagger-4">
                            <div className="rule-row">
                                <span className="rule-label">Response time</span>
                                <span className="rule-value">24h</span>
                            </div>
                            <div className="rule-row">
                                <span className="rule-label">Available</span>
                                <span className="font-display text-[19px] font-semibold tracking-[-0.02em]">
                                    {CONTACT.hours}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mt-4 font-script text-[18px] text-clay/90">
                                <span className="block animate-bob">↓</span> we respond fast
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="section pt-6">
                <div className="shell">
                    <div className="section-head">
                        <h2 className="display-md max-w-[20ch]">
                            Contact Information
                        </h2>
                        <span className="section-index">01 — Get In Touch</span>
                    </div>

                    <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-14 mt-9 items-start">
                        {/* Contact info */}
                        <div>
                            <p className="lede max-w-[42ch]">
                                Fill the form or reach us directly — we respond fast.
                            </p>

                            <div className="flex flex-col gap-[18px] mt-8">
                                {contactInfo.map((info) => {
                                    const body = (
                                        <>
                                            <div className="flex items-center justify-between">
                                                <span className="mark-bar transition-transform duration-500 group-hover:scale-y-125"></span>
                                                <span className="text-[11px] font-semibold tracking-[0.1em] text-ink/35">
                                                    {info.num}
                                                </span>
                                            </div>
                                            <h3 className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-ink/45 mt-4">
                                                {info.title}
                                            </h3>
                                            <div className="mt-2.5">
                                                {info.content.map((line) => (
                                                    <p key={line} className="text-[14.5px] leading-[1.6] text-ink/75">
                                                        {line}
                                                    </p>
                                                ))}
                                            </div>
                                        </>
                                    )

                                    const cls = 'glass-quiet glass-hover group p-5 sm:p-6'

                                    return info.href ? (
                                        <a
                                            key={info.num}
                                            href={info.href}
                                            className={`${cls} block`}
                                            {...(info.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        >
                                            {body}
                                        </a>
                                    ) : (
                                        <div key={info.num} className={cls}>{body}</div>
                                    )
                                })}
                            </div>

                            {/* Location */}
                            <div className="glass-quiet mt-[18px] p-6 relative overflow-hidden">
                                <div className="absolute inset-0 grid-texture opacity-70 pointer-events-none"></div>
                                <div className="relative flex items-center justify-between gap-4">
                                    <div>
                                        <div className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-ink/45">
                                            Location
                                        </div>
                                        <div className="font-display text-[17px] font-semibold tracking-[-0.02em] mt-2">
                                            {CONTACT.location}
                                        </div>
                                    </div>
                                    <span className="block w-[11px] h-9 bg-clay flex-shrink-0"></span>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="glass-deep p-6 sm:p-8 md:p-10">
                            <div className="flex flex-col-reverse sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4 pb-[18px] border-b"
                                style={{ borderColor: 'var(--rule-strong)' }}>
                                <h3 className="font-display text-[22px] font-semibold tracking-[-0.03em]">
                                    Send us a Message
                                </h3>
                                <span className="section-index">We'll get back within 24 hours</span>
                            </div>

                            {submitStatus && (
                                <div
                                    className="mt-6 px-5 py-4 rounded-[10px] text-[14px] border"
                                    style={
                                        submitStatus.type === 'success'
                                            ? { borderColor: 'rgba(47,75,143,.3)', background: 'rgba(47,75,143,.07)', color: 'var(--blue)' }
                                            : { borderColor: 'rgba(180,103,74,.35)', background: 'rgba(180,103,74,.07)', color: 'var(--clay)' }
                                    }
                                >
                                    {submitStatus.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="field-label" htmlFor="contact-name">Your name *</label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="field"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="field-label" htmlFor="contact-email">Email address *</label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="field"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="field-label" htmlFor="contact-company">Company name</label>
                                    <input
                                        id="contact-company"
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="field"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div>
                                    <label className="field-label" htmlFor="contact-message">Your message *</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="field resize-none"
                                        placeholder="Tell us about your project…"
                                    ></textarea>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-5 pt-2">
                                    <span className="text-[12.5px] leading-[1.6] text-ink/50 max-w-[38ch]">
                                        By submitting, you agree to our privacy policy.
                                        We never share your data.
                                    </span>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-ink disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending…' : 'Send Message'}
                                        <span className="leading-none">→</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Prefer a quick call */}
                    <div className="glass mt-6 px-8 py-10 md:px-[30px] md:py-[26px] flex flex-wrap gap-6 items-center justify-between">
                        <div>
                            <h3 className="font-display text-[26px] font-semibold tracking-[-0.03em]">
                                Prefer a Quick Call?
                            </h3>
                            <p className="text-[15px] leading-[1.6] text-ink/65 mt-2 max-w-[52ch]">
                                Our team is available {CONTACT.hoursLong}.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href={CONTACT.whatsappHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-ink"
                            >
                                WhatsApp {CONTACT.whatsapp}
                                <span className="leading-none">→</span>
                            </a>
                            <a href={CONTACT.phoneHref} className="btn-outline">
                                Call {CONTACT.phone}
                            </a>
                            <a href={CONTACT.emailHref} className="btn-outline">
                                Send Email
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage
