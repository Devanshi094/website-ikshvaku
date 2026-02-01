const Careers = () => {
    const openings = [
        {
            title: 'Full Stack Python Dev',
            description: 'Knowledge of multiple back-end languages like C#, Java, Python and JavaScript frameworks (e.g. Angular, React, Node.js).',
            type: 'Full Time',
            location: 'Remote / Hybrid'
        },
        {
            title: 'Sr .Net Developer',
            description: 'Experience with .NET framework, C#, ASP.NET MVC, and SQL Server. Strong understanding of OOP concepts.',
            type: 'Full Time',
            location: 'Remote / Hybrid'
        },
        {
            title: 'HR Manager',
            description: 'Looking for an experienced HR professional to manage recruitment, employee relations, and organizational development.',
            type: 'Full Time',
            location: 'On-site'
        }
    ]

    return (
        <section id="careers" className="section bg-gradient-to-br from-sky-light via-white to-sky-medium relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-mint/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-mint/10 text-mint-deep rounded-full text-sm font-medium mb-4">
                        Join Our Team
                    </span>
                    <h2 className="section-title">Careers</h2>
                    <p className="section-subtitle">We & You. Where will your career take you?</p>
                </div>

                {/* Job Openings */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {openings.map((job, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 hover:border-mint transition-all hover:-translate-y-2 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 bg-gradient-mint rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="px-3 py-1 bg-mint/10 text-mint-deep text-xs font-medium rounded-full">
                                    {job.type}
                                </span>
                            </div>

                            <h3 className="font-display text-xl font-bold text-dark mb-2">{job.title}</h3>
                            <p className="text-sm text-charcoal/70 mb-4">{job.description}</p>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-charcoal/60 flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {job.location}
                                </span>
                                <a
                                    href="#contact"
                                    className="text-mint-deep font-medium text-sm hover:underline flex items-center gap-1"
                                >
                                    Apply Now
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="bg-gradient-dark rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-1/4 w-64 h-64 bg-mint rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent-cyan rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            What can we help you achieve?
                        </h3>
                        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                            Join our team of innovators and help shape the future of technology.
                            We're always looking for talented individuals who share our passion.
                        </p>
                        <a href="#contact" className="btn-primary inline-flex">
                            Send Your Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Careers
