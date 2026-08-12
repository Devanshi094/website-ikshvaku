import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import heroVideo from '../assets/AI_for_Business_A_Demo.mp4'

// Module scope: a stable reference, so the typing effect below needs no
// dependency on it and never re-runs just because the component re-rendered.
const phrases = [
    'AI-Powered Innovation',
    'Intelligent Automation',
    'Predictive Analytics',
    'Smart Enterprise Solutions',
    'Machine Learning Excellence'
]

const Hero = () => {
    // Typing effect state
    const [displayText, setDisplayText] = useState('')
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    // Typing effect
    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentPhrase.length) {
                    setDisplayText(currentPhrase.slice(0, displayText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1))
                } else {
                    setIsDeleting(false)
                    setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentPhraseIndex])

    const stats = [
        { label: 'AI projects delivered', value: '30+' },
        { label: 'AI predictions per day', value: '100K+' },
        { label: 'Accuracy rate', value: '99.5%' },
    ]

    const disciplines = ['Machine Learning', 'Neural Networks', 'Deep Learning', 'Analytics']

    return (
        <section id="home" className="relative pt-[112px] pb-16 sm:pt-[150px] sm:pb-20 lg:pt-[190px] lg:pb-28">
            <div className="shell">
                <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-10 sm:gap-12 lg:gap-[60px] items-end">
                    {/* Left — the statement */}
                    <div>
                        <div className="eyebrow eyebrow-rule animate-fade-up">
                            Powered by Artificial Intelligence
                        </div>

                        <h1 className="display-xl mt-[26px] max-w-[15ch] animate-fade-up stagger-1">
                            We champion the bold to achieve the extraordinary.
                        </h1>

                        {/* Dynamic typing line */}
                        <div className="h-7 sm:h-8 mt-5 sm:mt-6 animate-fade-up stagger-2">
                            <p className="font-script text-[21px] sm:text-[24px] leading-none text-clay/95">
                                {displayText}
                                <span className="typing-cursor"></span>
                            </p>
                        </div>

                        <p className="lede mt-6 max-w-[48ch] animate-fade-up stagger-3">
                            Ikshvaku Solutions empowers enterprises with cutting-edge AI, cloud computing,
                            and digital transformation strategies.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-9 animate-fade-up stagger-4">
                            <Link to="/services" className="btn-ink">
                                Explore AI Solutions
                                <span className="leading-none">→</span>
                            </Link>
                            <Link to="/contact" className="btn-glass">
                                Talk to an AI expert
                            </Link>
                        </div>

                        {/* Disciplines — hairline row, replaces the floating chips */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 border-t animate-fade-up stagger-5"
                            style={{ borderColor: 'var(--rule-strong)' }}>
                            {disciplines.map((item) => (
                                <div
                                    key={item}
                                    className="py-[15px] pr-4 border-b text-[13.5px] font-medium text-ink/75"
                                    style={{ borderColor: 'var(--rule)' }}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — the demo film and the numbers.
                        Capped below lg so a tablet does not get a 700px-wide film. */}
                    <div className="animate-fade-up stagger-3 w-full max-w-[560px] lg:max-w-none">
                        <div className="glass overflow-hidden p-1.5">
                            <div className="relative rounded-[11px] overflow-hidden bg-ink aspect-[4/3]">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src={heroVideo} type="video/mp4" />
                                </video>
                                {/* Keeps the ink/marine cast consistent with the palette */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{ background: 'linear-gradient(160deg, rgba(47,75,143,.28), rgba(25,26,31,.45))' }}
                                ></div>
                                <div className="absolute inset-0 grid-texture-light opacity-60 pointer-events-none"></div>

                                <div className="absolute left-4 bottom-4 flex items-center gap-2.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-70 animate-ping"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                    </span>
                                    <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-white/85">
                                        AI for business — live demo
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="rule-list mt-7">
                            {stats.map((stat) => (
                                <div key={stat.label} className="rule-row">
                                    <span className="rule-label">{stat.label}</span>
                                    <span className="rule-value">{stat.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 mt-4 font-script text-[18px] text-clay/90">
                            <span className="block animate-bob">↓</span> 30+ projects delivered across India and beyond
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
