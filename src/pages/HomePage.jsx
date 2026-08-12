import Hero from '../components/Hero'
import AICapabilities from '../components/AICapabilities'
import WhatWeDo from '../components/WhatWeDo'
import HowAIWorks from '../components/HowAIWorks'
import Strategy from '../components/Strategy'
import Impact from '../components/Impact'
import SectionRail from '../components/SectionRail'

const stops = [
    { id: 'home', label: 'Intro' },
    { id: 'capabilities', label: 'AI Capabilities' },
    { id: 'whatwedo', label: 'What We Do' },
    { id: 'method', label: 'The AI Process' },
    { id: 'strategy', label: 'AI Strategy' },
    { id: 'impact', label: 'AI Impact' },
]

const HomePage = () => {
    return (
        <>
            {/* Fixed section navigator */}
            <SectionRail stops={stops} />

            {/* AI-First Hero with Typing Effect & Demo Film */}
            <Hero />

            {/* AI Capabilities */}
            <AICapabilities />

            {/* What We Do */}
            <WhatWeDo />

            {/* How Our AI Works */}
            <HowAIWorks />

            {/* Strategy Section */}
            <Strategy />

            {/* Impact & Stats */}
            <Impact />
        </>
    )
}

export default HomePage
