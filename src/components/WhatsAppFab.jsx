import { CONTACT } from '../config/contact'
import { WhatsAppGlyph } from './icons'

/**
 * Floating WhatsApp button, fixed bottom-right on every page.
 *
 * Kept in the canonical green rather than the site's ink: this is chrome
 * floating above the layout, not part of it, and the whole job of the control
 * is being recognised at a glance.
 *
 * Sits below the navbar and the mobile menu sheet in the stacking order (see
 * --z-fab in index.css), so it never covers navigation. The sheet also sets
 * `menu-open` on <body>, which hides this — otherwise it would ghost through
 * the sheet's translucent backdrop.
 */
const WhatsAppFab = () => (
    <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-fab"
        aria-label={`Chat with us on WhatsApp at ${CONTACT.whatsapp}`}
    >
        <span className="wa-fab-tip" aria-hidden="true">Chat with us</span>
        <WhatsAppGlyph className="wa-fab-glyph" />
    </a>
)

export default WhatsAppFab
