import { useEffect, useRef, useState } from 'react'

/**
 * Fires once when the element scrolls into view. Every section uses this to
 * stage its entrance, so the reveal timing stays identical across the site.
 */
export function useReveal(threshold = 0.15) {
    const ref = useRef(null)
    const [isIn, setIsIn] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIn(true)
                    observer.disconnect()
                }
            },
            { threshold }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold])

    return [ref, isIn]
}

/** Convenience: the class pair used on every revealing element. */
export const reveal = (isIn) => `reveal${isIn ? ' is-in' : ''}`
