import { Link } from 'react-router-dom'

const CareersPage = () => {
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
        { icon: '🏠', title: 'Remote Work', description: 'Work from anywhere with flexible hours' },
        { icon: '📚', title: 'Learning Budget', description: 'Annual budget for courses and conferences' },
        { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive health coverage for you and family' },
        { icon: '🎮', title: 'Fun Culture', description: 'Team events, game nights, and celebrations' },
        { icon: '📈', title: 'Growth Path', description: 'Clear career progression and mentorship' },
        { icon: '💰', title: 'Competitive Pay', description: 'Industry-leading compensation packages' },
    ]

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="section bg-gradient-to-br from-sky-light via-sky-medium to-sky-deep relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="blob w-[500px] h-[500px] bg-mint -top-32 -right-32"></div>
                    <div className="blob w-[400px] h-[400px] bg-accent-cyan -bottom-32 -left-32 animation-delay-2000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-teal mb-6 border border-mint/30">
                        Join Our Team
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
                        We & <span className="gradient-text">You</span>
                    </h1>
                    <p className="text-lg text-charcoal/80 mb-8 max-w-2xl mx-auto">
                        Where will your career take you? Join a team of innovators who are passionate
                        about building the future of technology.
                    </p>
                    <a href="#openings" className="btn-primary">
                        View Open Positions
                    </a>
                </div>
            </section>

            {/* Benefits */}
            <section className="section bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-mint/10 text-mint-deep rounded-full text-sm font-medium mb-4">
                            Why Join Us
                        </span>
                        <h2 className="section-title">Benefits & Perks</h2>
                        <p className="section-subtitle">
                            We take care of our team so they can focus on doing their best work
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="glass-card p-6 flex items-start gap-4 hover:border-mint transition-all group">
                                <span className="text-4xl group-hover:scale-110 transition-transform">{benefit.icon}</span>
                                <div>
                                    <h3 className="font-display text-lg font-bold text-dark mb-1">{benefit.title}</h3>
                                    <p className="text-sm text-charcoal/70">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings */}
            <section id="openings" className="section bg-gradient-to-br from-sky-light to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-mint/10 text-mint-deep rounded-full text-sm font-medium mb-4">
                            Open Positions
                        </span>
                        <h2 className="section-title">Current Openings</h2>
                        <p className="section-subtitle">
                            Find your next opportunity with us
                        </p>
                    </div>

                    <div className="space-y-6">
                        {openings.map((job, index) => (
                            <div key={index} className="glass-card p-6 hover:border-mint transition-all group">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="font-display text-xl font-bold text-dark">{job.title}</h3>
                                            <span className="px-3 py-1 bg-mint/10 text-mint-deep text-xs font-medium rounded-full">
                                                {job.department}
                                            </span>
                                        </div>
                                        <p className="text-charcoal/70 mb-3">{job.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {job.requirements.map((req, i) => (
                                                <span key={i} className="px-3 py-1 bg-gray-100 text-charcoal text-xs rounded-full">
                                                    {req}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-3">
                                        <div className="flex items-center gap-4 text-sm text-charcoal/60">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {job.type}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                </svg>
                                                {job.location}
                                            </span>
                                        </div>
                                        <Link to="/contact" className="btn-primary text-sm">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-dark text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        Don't See Your Role?
                    </h2>
                    <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                        We're always looking for talented people. Send us your resume and we'll reach out
                        when a suitable position opens up.
                    </p>
                    <Link to="/contact" className="btn-primary">
                        Send Your Resume
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default CareersPage
