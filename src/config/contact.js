/**
 * Single source of truth for how to reach the company.
 * Every page pulls from here so a detail can never go stale in one place.
 */

// Digits only, with country code — the form wa.me and tel: both need.
const PHONE_E164 = '919307116283'

const SALES_EMAIL = 'sales@ikshvakusolutions.com'
const HR_EMAIL = 'hr@ikshvakusolutions.com'

export const CONTACT = {
    // Enquiries — the contact form and every "email us" affordance
    email: SALES_EMAIL,
    emailHref: `mailto:${SALES_EMAIL}`,

    // Applications — the careers page only
    hrEmail: HR_EMAIL,
    hrEmailHref: `mailto:${HR_EMAIL}`,

    // Display form, spaced for readability
    phone: '+91 93071 16283',
    phoneHref: `tel:+${PHONE_E164}`,

    // Same number on WhatsApp, with a prefilled opener
    whatsapp: '+91 93071 16283',
    whatsappHref: `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
        "Hi Ikshvaku Solutions, I'd like to discuss a project."
    )}`,

    addressLines: [
        'D-214, Gopal Bdg, Opp Corporation Bank,',
        'Vasai West 401202, Maharashtra, India',
    ],
    location: 'Vasai West, Maharashtra, India',
    hours: 'Mon–Sat · 9 AM–7 PM IST',
    hoursLong: 'Monday–Saturday, 9 AM–7 PM IST',
}

/**
 * Builds the mailto: link the contact form hands off to. The site is static,
 * so there is no server to accept a POST — submitting opens the visitor's own
 * mail app with everything filled in, and they press send.
 */
export function buildEnquiryMailto({ name, email, company, message }) {
    const subject = company
        ? `Website enquiry — ${name} (${company})`
        : `Website enquiry — ${name}`

    const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        '',
        message,
    ]
        .filter((line) => line !== null)
        .join('\r\n')

    return `${CONTACT.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
