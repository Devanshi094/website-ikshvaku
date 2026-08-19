import { useState, useEffect } from 'react'
import { useReveal, reveal } from '../hooks/useReveal'
import { LIFECYCLE } from '../content/company'

const Lifecycle = () => {
    const [active, setActive] = useState(0)
    const [sectionRef, isIn] = useReveal(0.15)

    // Walks the section slowly so the stage captions get read; clicking takes over.
    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % LIFECYCLE.length)
        }, 3600)
        return () => clearInterval(interval)
    }, [])

    return (
        <section ref={sectionRef} id="lifecycle" className="section">
            <div className="shell">
                <div className={`section-head ${reveal(isIn)}`}>
                    <h2 className="display-md max-w-[22ch]">Section through an engagement.</h2>
                    <span className="section-index">04 — Lifecycle</span>
                </div>

                <p className={`lede mt-7 max-w-[58ch] ${reveal(isIn)}`} style={{ transitionDelay: '40ms' }}>
                    Five stages, run the same way whichever commercial shape the engagement takes.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
                    {LIFECYCLE.map((stage, index) => {
                        const isActive = active === index
                        return (
                            <button
                                key={stage.num}
                                type="button"
                                onClick={() => setActive(index)}
                                aria-pressed={isActive}
                                className={`text-left pt-5 cursor-pointer transition-all duration-500 ${reveal(isIn)}`}
                                style={{
                                    transitionDelay: `${Math.min(index * 40, 240)}ms`,
                                    borderTop: `2px solid ${isActive ? 'var(--blue)' : 'rgba(25,26,31,.85)'}`,
                                    opacity: isActive ? 1 : 0.66,
                                }}
                            >
                                <div className="flex items-baseline justify-between">
                                    <span className="grid-ref">{stage.num}</span>
                                    <span
                                        className="block h-[1.5px] transition-all duration-500"
                                        style={{ width: isActive ? '28px' : '0px', background: 'var(--blue)' }}
                                    ></span>
                                </div>

                                <div className="font-display text-[18px] font-semibold tracking-[-0.02em] mt-3">
                                    {stage.title}
                                </div>
                                <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-ink/40 mt-2">
                                    {stage.caption}
                                </div>
                                <p className="text-[13.5px] leading-[1.6] text-ink/62 mt-3">{stage.body}</p>
                            </button>
                        )
                    })}
                </div>

                <div className="flex gap-2 mt-9">
                    {LIFECYCLE.map((stage, index) => (
                        <button
                            key={stage.num}
                            onClick={() => setActive(index)}
                            aria-label={`Show ${stage.title}`}
                            className="h-[2px] transition-all duration-500"
                            style={{
                                width: active === index ? '44px' : '22px',
                                background: active === index ? 'var(--blue)' : 'rgba(25,26,31,.2)',
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Lifecycle
