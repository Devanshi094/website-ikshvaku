import Hero from '../components/Hero'
import Practice from '../components/Practice'
import Capabilities from '../components/Capabilities'
import Work from '../components/Work'
import Lifecycle from '../components/Lifecycle'
import Engagement from '../components/Engagement'
import Industries from '../components/Industries'
import SectionRail from '../components/SectionRail'

const stops = [
    { id: 'home', label: 'Opening' },
    { id: 'practice', label: 'The Practice' },
    { id: 'capabilities', label: 'Capability' },
    { id: 'work', label: 'Selected Work' },
    { id: 'lifecycle', label: 'Lifecycle' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'industries', label: 'Industries' },
]

const HomePage = () => {
    return (
        <>
            <SectionRail stops={stops} />

            <Hero />
            <Practice />
            <Capabilities />
            <Work />
            <Lifecycle />
            <Engagement />
            <Industries />
        </>
    )
}

export default HomePage
