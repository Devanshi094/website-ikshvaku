import { Link } from 'react-router-dom'
import { useReveal, reveal } from '../hooks/useReveal'

const CareersPage = () => {
    const [benefitsRef, benefitsIn] = useReveal(0.1)
    const [openingsRef, openingsIn] = useReveal(0.05)

    const openings = [
        {
            title: 'Full Stack Python Developer',
            department: 'Engineering',
            type: 'Full Time',
            location: 'Remote / Hybrid',
            description: 'Knowledge of multiple back-end languages like C#, Java, Python and JavaScript frameworks (e.g. Angular, React, Node.js).',
            requirements: ['3+ years experience', 'Python, Django/Flask', 'React/Angular', 'SQL databases']
        },
        {
            title: 'Senior .NET Developer',
            department: 'Engineering',
            type: 'Full Time',
            location: 'Remote / Hybrid',
            description: 'Experience with .NET framework, C#, ASP.NET MVC, and SQL Server. Strong understanding of OOP concepts.',
            requirements: ['5+ years experience', '.NET Core/Framework', 'Azure', 'Microservices']
        },
        {
            title: 'Machine Learning Engineer',
            department: 'AI/ML',
            type: 'Full Time',
            location: 'Remote',
            description: 'Design and implement ML models for production. Experience with deep learning frameworks.',
            requirements: ['3+ years ML experience', 'TensorFlow/PyTorch', 'Python', 'AWS SageMaker']
        },
        {
            title: 'DevOps Engineer',
            department: 'Infrastructure',
            type: 'Full Time',
            location: 'Hybrid',
            description: 'Manage cloud infrastructure and CI/CD pipelines. Experience with containerization.',
            requirements: ['Docker/Kubernetes', 'AWS/Azure/GCP', 'Terraform', 'CI/CD tools']
        },
        {
            title: 'HR Manager',
            department: 'Human Resources',
            type: 'Full Time',
            location: 'On-site',
            description: 'Looking for an experienced HR professional to manage recruitment, employee relations, and organizational development.',
            requirements: ['5+ years HR experience', 'Tech industry background', 'Strong communication', 'Leadership skills']
        },
        {
            title: 'UI/UX Designer',
            department: 'Design',
            type: 'Full Time',
            location: 'Remote',
            description: 'Create beautiful and intuitive user experiences for web and mobile applications.',
            requirements: ['Figma/Sketch', 'User research', 'Prototyping', 'Design systems']
        }
    ]

    const benefits = [
        { num: '01', title: 'Remote Work', description: 'Work from anywhere with flexible hours' },
        { num: '02', title: 'Learning Budget', description: 'Annual budget for courses and conferences' },
        { num: '03', title: 'Health Insurance', description: 'Comprehensive health coverage for you and family' },
        { num: '04', title: 'Fun Culture', description: 'Team events, game nights, and celebrations' },
        { num: '05', title: 'Growth Path', description: 'Clear career progression and mentorship' },
        { num: '06', title: 'Competitive Pay', description: 'Industry-leading compensation packages' },
    ]

    return (
        <div>
            {/* Page opening */}
            <section className="relative pt-[112px] pb-10 sm:pt-[150px] sm:pb-14 lg:pt-[190px] lg:pb-20">
                <div className="shell">
                    <div className="eyebrow eyebrow-rule animate-fade-up">Join Our Team</div>
                    <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-10 lg:gap-[60px] items-end mt-[26px]">
                        <div>
                            <h1 className="display-xl max-w-[12ch] animate-fade-up stagger-1">
                                We &amp; You.
                            </h1>
                            <p className="lede mt-7 max-w-[48ch] animate-fade-up stagger-2">
                                Where will your career take you? Join a team of innovators who are passionate
                                about building the future of technology.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-9 animate-fade-up stagger-3">
                                <a href="#openings" className="btn-ink">
                                    View Open Positions
                                    <span className="leading-none">→</span>
                                </a>
                                <Link to="/contact" className="btn-glass">
                                    Send Your Resume
                                </Link>
                            </div>
                        </div>

                        <div className="rule-list animate-fade-up stagger-4">
                            <div className="rule-row">
                                <span className="rule-label">Open roles</span>
                                <span className="rule-value">{openings.length}</span>
                            </div>
                            <div className="rule-row">
                                <span className="rule-label">Team size</span>
                                <span className="rule-value">60+</span>
                            </div>
                            <div className="rule-row">
                                <span className="rule-label">Working model</span>
                                <span className="rule-value">Hybrid</span>
                            </div>
                            <div className="flex items-center gap-2 mt-4 font-script text-[18px] text-clay/90">
                                <span className="block animate-bob">↓</span> we respond within 24 hours
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section ref={benefitsRef} className="section pt-6">
                <div className="shell">
                    <div className={`section-head ${reveal(benefitsIn)}`}>
                        <h2 className="display-md max-w-[22ch]">
                            Benefits &amp; Perks
                        </h2>
                        <span className="section-index">01 — Why Join Us</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-9">
                        {benefits.map((benefit, index) => (
                            <div
                                key={benefit.num}
                                className={`glass-quiet glass-hover group p-[26px] ${reveal(benefitsIn)}`}
                                style={{ transitionDelay: `${index * 80}ms` }}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="mark-bar transition-transform duration-500 group-hover:scale-y-125"></span>
                                    <span className="text-[11px] font-semibold tracking-[0.1em] text-ink/35">
                                        {benefit.num}
                                    </span>
                                </div>
                                <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] mt-[18px]">
                                    {benefit.title}
                                </h3>
                                <p className="text-[14.5px] leading-[1.6] text-ink/62 mt-2.5">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Openings */}
            <section ref={openingsRef} id="openings" className="section pt-6">
                <div className="shell">
                    <div className={`section-head ${reveal(openingsIn)}`}>
                        <h2 className="display-md max-w-[20ch]">
                            Current Openings
                        </h2>
                        <span className="section-index">02 — Open Positions</span>
                    </div>

                    <div className="flex flex-col gap-[18px] mt-9">
                        {openings.map((job, index) => (
                            <div
                                key={job.title}
                                className={`glass glass-hover p-6 sm:p-7 ${reveal(openingsIn)}`}
                                style={{ transitionDelay: `${index * 70}ms` }}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-baseline gap-4">
                                            <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-ink/45">
                                                {job.department}
                                            </span>
                                            <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-ink/35">
                                                {job.type} · {job.location}
                                            </span>
                                        </div>

                                        <h3 className="display-sm mt-3.5">{job.title}</h3>
                                        <p className="text-[15px] leading-[1.62] text-ink/65 mt-2.5 max-w-[68ch]">
                                            {job.description}
                                        </p>

                                        <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-5 pt-4 border-t"
                                            style={{ borderColor: 'var(--rule)' }}>
                                            {job.requirements.map((req) => (
                                                <span
                                                    key={req}
                                                    className="text-[11.5px] font-semibold tracking-[0.06em] uppercase text-ink/45"
                                                >
                                                    {req}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex lg:flex-col items-start lg:items-end gap-4 lg:pl-8 lg:border-l"
                                        style={{ borderColor: 'var(--rule)' }}>
                                        <span className="stat-figure text-[26px] text-marine">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <Link to="/contact" className="btn-ink btn-sm whitespace-nowrap">
                                            Apply Now
                                            <span className="leading-none">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section pt-0">
                <div className="shell">
                    <div className="glass px-8 py-10 md:px-[30px] md:py-[26px] flex flex-wrap gap-6 items-center justify-between">
                        <div>
                            <h2 className="font-display text-[26px] font-semibold tracking-[-0.03em]">
                                Don't See Your Role?
                            </h2>
                            <p className="text-[15px] leading-[1.6] text-ink/65 mt-2 max-w-[56ch]">
                                We're always looking for talented people. Send us your resume and we'll
                                reach out when a suitable position opens up.
                            </p>
                        </div>
                        <Link to="/contact" className="btn-ink">
                            Send Your Resume
                            <span className="leading-none">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CareersPage
