import { CLIENT_LOGOS } from '../content/clientLogos'

/**
 * A client's logo, with the name set in the display face as the fallback.
 *
 * The logo is resolved from the build-time asset map, so a client with no file
 * in src/assets/logos renders the wordmark and issues no network request at
 * all. Nothing 404s, and nothing renders an empty slot.
 *
 * Logos render monochrome and lift to full colour on hover, which keeps three
 * unrelated brand palettes from fighting the paper/ink page.
 */
const ClientMark = ({ name, logoKey }) => {
    const src = logoKey ? CLIENT_LOGOS[logoKey] : undefined

    if (!src) {
        return (
            <div className="font-display text-[21px] font-semibold tracking-[-0.025em] leading-[1.15]">
                {name}
            </div>
        )
    }

    return (
        <div className="h-[34px] flex items-center">
            <img
                src={src}
                alt={name}
                loading="lazy"
                decoding="async"
                className="client-logo max-h-[34px] w-auto max-w-[190px] object-contain object-left"
            />
        </div>
    )
}

export default ClientMark
