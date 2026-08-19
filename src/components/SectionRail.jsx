import { useEffect, useRef, useState } from 'react'

/**
 * The fixed right-hand navigator: a stack of rules that expands and labels
 * itself for whichever section currently owns the viewport.
 *
 * Scroll events fire far more often than the screen refreshes, so the work is
 * coalesced into one measurement per animation frame. Without that, every
 * event would measure each section and push a React state update.
 */
const SectionRail = ({ stops }) => {
    const [activeId, setActiveId] = useState(stops[0]?.id)
    const frame = useRef(0)

    useEffect(() => {
        const measure = () => {
            frame.current = 0

            // The section whose top has most recently passed the upper third wins.
            const line = window.innerHeight * 0.35
            let current = stops[0]?.id

            for (const stop of stops) {
                const el = document.getElementById(stop.id)
                if (el && el.getBoundingClientRect().top <= line) {
                    current = stop.id
                }
            }
            // React bails out when the value is unchanged, so this is a no-op
            // for the vast majority of frames.
            setActiveId(current)
        }

        const onScroll = () => {
            if (frame.current) return
            frame.current = requestAnimationFrame(measure)
        }

        measure()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
            if (frame.current) cancelAnimationFrame(frame.current)
        }
    }, [stops])

    const goTo = (id) => {
        // scroll-padding-top on <html> keeps this clear of the fixed navbar.
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <nav className="rail" aria-label="Section navigation">
            {stops.map((stop) => (
                <button
                    key={stop.id}
                    type="button"
                    onClick={() => goTo(stop.id)}
                    className={`rail-stop${activeId === stop.id ? ' is-active' : ''}`}
                    aria-current={activeId === stop.id ? 'true' : undefined}
                >
                    <span className="rail-label">{stop.label}</span>
                    <span className="rail-mark"></span>
                </button>
            ))}
        </nav>
    )
}

export default SectionRail
