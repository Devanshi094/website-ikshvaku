import { useState } from 'react'
import { CONTACT, buildEnquiryMailto } from '../config/contact'
import { WHAT_TO_SEND, CONTACT_INVITATION } from '../content/company'
import PageNote from '../components/PageNote'
import { MailIcon, PhoneIcon } from '../components/icons'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    })
    const [handedOff, setHandedOff] = useState(false)

    // The site is static — there is no server to POST to. Submitting opens the
    // visitor's own mail app with the enquiry filled in, addressed to sales@.
    // The form is deliberately NOT cleared: if no mail app opens, the visitor
    // still has their text to copy.
    const handleSubmit = (e) => {
        e.preventDefault()
        window.location.href = buildEnquiryMailto(formData)
        setHandedOff(true)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setHandedOff(false)
    }

    return (
        <div>
            {/* Page opening */}
            <section className="relative pt-[112px] pb-10 sm:pt-[150px] sm:pb-14 lg:pt-[190px] lg:pb-20">
                <div className="shell">
                    <div className="flex items-baseline justify-between gap-6 animate-fade-up">
                        <div className="eyebrow eyebrow-rule">Contact</div>
                        <span className="plate-mark hidden sm:block">09</span>
                    </div>
                    <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-10 lg:gap-[60px] items-end mt-[26px]">
                        <div>
                            <h1 className="display-xl max-w-[11ch] animate-fade-up stagger-1">
                                Let's build together.
                            </h1>
                            <p className="lede mt-7 max-w-[46ch] animate-fade-up stagger-2">
                                {CONTACT_INVITATION}
                            </p>
                            <div className="flex flex-wrap gap-3 mt-9 animate-fade-up stagger-3">
                                <a href={CONTACT.phoneHref} className="btn-ink">
                                    <PhoneIcon width={17} height={17} />
                                    {CONTACT.phone}
                                </a>
                                <a href={CONTACT.emailHref} className="btn-glass">
                                    <MailIcon width={17} height={17} />
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
                            <PageNote page="contact" className="mt-4" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="section pt-6">
                <div className="shell">
                    <div className="section-head">
                        <h2 className="display-md max-w-[20ch]">
                            What to send us
                        </h2>
                        <span className="section-index">01 — First conversation</span>
                    </div>

                    <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-14 mt-9 items-start">
                        {/* Contact info */}
                        <div>
                            <div className="schedule">
                                {WHAT_TO_SEND.map((item) => (
                                    <div
                                        key={item.num}
                                        className="py-5 border-b"
                                        style={{ borderColor: 'var(--rule)' }}
                                    >
                                        <div className="flex items-baseline gap-4">
                                            <span className="grid-ref">{item.num}</span>
                                            <div>
                                                <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em]">
                                                    {item.title}
                                                </h3>
                                                <p className="text-[14px] leading-[1.6] text-ink/62 mt-2">
                                                    {item.body}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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

                            {handedOff && (
                                <div
                                    className="mt-6 px-5 py-4 rounded-[10px] text-[14px] leading-[1.6] border"
                                    style={{ borderColor: 'rgba(47,75,143,.3)', background: 'rgba(47,75,143,.07)', color: 'var(--blue)' }}
                                    role="status"
                                >
                                    Your email app should have opened with the message ready —
                                    press send there to deliver it.
                                    <br />
                                    If nothing opened, email{' '}
                                    <a href={CONTACT.emailHref} className="underline font-semibold">
                                        {CONTACT.email}
                                    </a>{' '}
                                    directly, or{' '}
                                    <a
                                        href={CONTACT.whatsappHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline font-semibold"
                                    >
                                        message us on WhatsApp
                                    </a>
                                    . Your text is still in the form below.
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
                                        Opens in your email app, addressed to {CONTACT.email}.
                                        We never share your data.
                                    </span>
                                    <button type="submit" className="btn-ink">
                                        Send Message
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
                            <a href={CONTACT.phoneHref} className="btn-ink">
                                <PhoneIcon width={17} height={17} />
                                Call {CONTACT.phone}
                                <span className="leading-none">→</span>
                            </a>
                            <a href={CONTACT.emailHref} className="btn-outline">
                                <MailIcon width={17} height={17} />
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
