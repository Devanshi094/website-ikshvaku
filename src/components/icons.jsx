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
/**
 * The filled WhatsApp glyph, for the floating button only. At 28px on a green
 * disc the solid mark is what makes the control instantly recognisable —
 * the monoline version below is for 16px inline use beside a text label.
 */
export const WhatsAppGlyph = (props) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        {...props}
    >
        <path d="M17.47 14.38c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.64.07-.29-.14-1.24-.46-2.37-1.46-.87-.78-1.47-1.74-1.64-2.04-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.18.2-.3.3-.5.1-.19.05-.36-.03-.51-.07-.15-.66-1.6-.9-2.19-.24-.57-.49-.49-.67-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.03 1-1.03 2.46 0 1.45 1.05 2.85 1.2 3.05.15.2 2.08 3.17 5.04 4.45.7.3 1.25.48 1.68.62.7.22 1.35.19 1.85.12.57-.09 1.74-.72 1.99-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.56-.34" />
        <path d="M12.05 21.79h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.24-.37a9.78 9.78 0 0 1-1.5-5.22c0-5.4 4.4-9.8 9.81-9.8a9.74 9.74 0 0 1 6.93 2.88 9.75 9.75 0 0 1 2.87 6.94c0 5.4-4.4 9.8-9.8 9.8m8.34-18.15A11.72 11.72 0 0 0 12.05 0C5.55 0 .26 5.29.26 11.79c0 2.08.54 4.11 1.57 5.9L.16 24l6.26-1.64a11.78 11.78 0 0 0 5.63 1.44h.01c6.5 0 11.79-5.29 11.79-11.79 0-3.15-1.23-6.11-3.46-8.34" />
    </svg>
)

export const WhatsAppIcon = (props) => (
    <svg {...base} {...props}>
        <path d="M21 11.6a8.9 8.9 0 0 1-13.2 7.8L3 20.8l1.5-4.6A8.9 8.9 0 1 1 21 11.6Z" />
        <path d="M9.2 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.5l-.5.6c-.1.2-.3.3-.1.6a7 7 0 0 0 3.2 2.8c.3.1.5 0 .6-.1l.6-.7c.2-.2.3-.2.5-.1l1.8.9c.2.1.4.2.4.4a2 2 0 0 1-1.3 1.7 3.2 3.2 0 0 1-2.7-.2 11 11 0 0 1-5.4-4.8 4 4 0 0 1-.8-2.2c0-.9.4-1.6.6-1.8Z" />
    </svg>
)
