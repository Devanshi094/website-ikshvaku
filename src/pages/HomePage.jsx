import Hero from '../components/Hero'
import AICapabilities from '../components/AICapabilities'
import WhatWeDo from '../components/WhatWeDo'
import HowAIWorks from '../components/HowAIWorks'
import AIChatDemo from '../components/AIChatDemo'
import Strategy from '../components/Strategy'
import Impact from '../components/Impact'

const HomePage = () => {
    return (
        <>
            {/* AI-First Hero with Typing Effect & Neural Network Background */}
            <Hero />

            {/* AI Capabilities - Interactive Cards */}
            <AICapabilities />

            {/* What We Do - Enhanced with AI Focus */}
            <WhatWeDo />

            {/* How Our AI Works - Animated Flow Visualization */}
            <HowAIWorks />

            {/* AI Chat Demo - Interactive Frontend Simulation */}
            <AIChatDemo />

            {/* Strategy Section */}
            <Strategy />

            {/* Impact & Stats */}
            <Impact />
        </>
    )
}

export default HomePage
