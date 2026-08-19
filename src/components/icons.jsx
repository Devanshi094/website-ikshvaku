/**
 * The only icons on the site. Drawn in currentColor at a 24px grid so they
 * inherit ink, marine or white from whatever they sit in — a coloured brand
 * badge would be the one saturated object on a paper/ink page.
 *
 * All are decorative: every icon here sits beside a text label that already
 * says what it is, so they carry aria-hidden and no title.
 */

const base = {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
    focusable: 'false',
    className: 'flex-shrink-0',
}

export const MailIcon = (props) => (
    <svg {...base} {...props}>
        <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
        <path d="M3 7l8.4 5.6a1 1 0 0 0 1.2 0L21 7" />
    </svg>
)

export const PhoneIcon = (props) => (
    <svg {...base} {...props}>
        <path d="M21 16.9v2.6a2 2 0 0 1-2.2 2 19.6 19.6 0 0 1-8.5-3 19.3 19.3 0 0 1-6-6 19.6 19.6 0 0 1-3-8.6A2 2 0 0 1 3.3 2h2.6a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7 9.8a16 16 0 0 0 6 6l1.2-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
)

/**
 * WhatsApp, drawn monoline to match the pair above rather than dropped in as
 * the filled green badge — the speech bubble with its tail plus the handset
 * stays recognisable at 16px without introducing a second visual language.
 */
export const WhatsAppIcon = (props) => (
    <svg {...base} {...props}>
        <path d="M21 11.6a8.9 8.9 0 0 1-13.2 7.8L3 20.8l1.5-4.6A8.9 8.9 0 1 1 21 11.6Z" />
        <path d="M9.2 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.5l-.5.6c-.1.2-.3.3-.1.6a7 7 0 0 0 3.2 2.8c.3.1.5 0 .6-.1l.6-.7c.2-.2.3-.2.5-.1l1.8.9c.2.1.4.2.4.4a2 2 0 0 1-1.3 1.7 3.2 3.2 0 0 1-2.7-.2 11 11 0 0 1-5.4-4.8 4 4 0 0 1-.8-2.2c0-.9.4-1.6.6-1.8Z" />
    </svg>
)
