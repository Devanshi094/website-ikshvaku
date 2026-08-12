import { useEffect, useState } from 'react'

/**
 * The fixed right-hand navigator from the design: a stack of rules that
 * expands and labels itself for whichever section currently owns the viewport.
 */
const SectionRail = ({ stops }) => {
    const [activeId, setActiveId] = useState(stops[0]?.id)

    useEffect(() => {
        const onScroll = () => {
            // The section whose top has most recently passed the upper third wins.
            const line = window.innerHeight * 0.35
            let current = stops[0]?.id

            for (const stop of stops) {
                const el = document.getElementById(stop.id)
                if (el && el.getBoundingClientRect().top <= line) {
                    current = stop.id
                }
            }
            setActiveId(current)
        }

        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [stops])

    const goTo = (id) => {
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
