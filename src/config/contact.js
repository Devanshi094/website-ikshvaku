/**
 * Single source of truth for how to reach the company.
 * Every page pulls from here so a number can never go stale in one place.
 */

// Digits only, with country code — the form wa.me and tel: both need.
const PHONE_E164 = '919307116283'

export const CONTACT = {
    email: 'hr@ikshvakusolutions.com',
    emailHref: 'mailto:hr@ikshvakusolutions.com',

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
