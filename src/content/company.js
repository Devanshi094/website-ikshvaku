/**
 * Everything the site says about the practice, taken from the 2026 company
 * portfolio. One module so a figure or a claim can never drift between pages.
 *
 * Nothing here is invented. If a number is not in the portfolio it is not on
 * the site.
 */

export const PROFILE = {
    name: 'Ikshvaku Solutions',
    founded: 2019,
    discipline: 'Enterprise AI / Software Engineering',
    location: 'India, working with clients across India and abroad',

    // The line the whole site hangs off
    statement: 'We do not build features. We architect systems.',

    lede:
        'An engineering team founded in 2019 that companies call when the problem is ' +
        'too risky, too manual, or too big for their in-house team to take on alone.',

    principles: [
        {
            title: 'One architect, end to end',
            body:
                'No handoffs. Every engagement is led by a senior architect — from the first ' +
                'line of code to the system running in production, still owned by the person ' +
                'who designed it.',
        },
        {
            title: 'No junior teams on your budget',
            body:
                'Projects are not staffed with people learning at your expense, and they are ' +
                'not handed off after the demo.',
        },
        {
            title: 'What we build stays built',
            body:
                'It runs in production, under real load, for real customers — not a prototype ' +
                'that looks good in a meeting.',
        },
    ],

    proof:
        'HDFC Life handed us a regulatory process with zero room for error. We automated it ' +
        'end-to-end — it has been running in production ever since.',
}

/** Cumulative across the practice, 2019 – 2026. */
export const METRICS = {
    headline: [
        { value: '7+', label: 'Years of experience' },
        { value: '50+', label: 'Projects delivered' },
        { value: '9+', label: 'Industries served' },
        { value: '78+', label: 'Technologies in use' },
    ],
    full: [
        { value: '7+', label: 'Years of experience' },
        { value: '50+', label: 'Projects delivered' },
        { value: '15', label: 'Systems documented' },
        { value: '9+', label: 'Industries served' },
        { value: '6', label: 'SaaS products built' },
        { value: '30+', label: 'Live WordPress & Shopify sites' },
        { value: '78+', label: 'Technologies in use' },
        { value: '48 hr', label: 'Average team onboarding' },
        { value: '~40%', label: 'Cost saving vs. in-house hire' },
    ],
    glance: [
        {
            title: 'Reach',
            body: 'Nine industries, 30+ live commercial web properties and six SaaS products of our own.',
        },
        {
            title: 'Depth',
            body: 'Seven-plus years of engineering practice, and 78+ technologies in production.',
        },
        {
            title: 'Speed',
            body: 'Dedicated teams onboard in roughly 48 hours at about 40% of the cost of an equivalent in-house hire.',
        },
    ],
}

export const CERTIFICATIONS = ['ISO 9001:2015', 'ISO 27001:2022 certified platform']

/** The six load-bearing lines of work. Everything else sits on one of these. */
export const CAPABILITIES = [
    {
        ref: 'A.01',
        title: 'AI & Intelligent Automation',
        summary:
            'Systems that read, decide and act on documents and data that were previously handled by people.',
        items: [
            'OCR engines for printed and handwritten source documents',
            'NLP pipelines and custom intent routing',
            'LLM integrations, RAG and vector search architectures',
            'CAPTCHA workflow analysis and automated handling',
            'Regulatory and compliance automation',
            'Multi-agent AI systems with supervisor orchestration',
        ],
        reference:
            'PAN automation and verification for HDFC Life; handwritten and multilingual document parsing; LangGraph multi-agent platform.',
    },
    {
        ref: 'A.02',
        title: 'Data Engineering',
        summary:
            'Pipelines that move millions of records a day and fail loudly rather than quietly.',
        items: [
            'Cloud Composer / Airflow migrations from legacy functions',
            'ETL automation with configurable schema mapping',
            'BigQuery pipelines and dependency chains',
            'Graph-database-driven analytics at scale',
            'Anomaly and threshold-breach detection',
            'Scheduled dumps, archival and cleanup',
        ],
        reference:
            'GCP Cloud Composer migration; configurable HR ingestion ETL; finance data engine over Postgres and OrientDB.',
    },
    {
        ref: 'A.03',
        title: 'Enterprise Backend & SaaS',
        summary: 'Platforms built to be operated for years, not demonstrated once.',
        items: [
            'Laravel, Django and FastAPI platform engineering',
            'Gaming, booking and session-tracking systems',
            'CRM, ERP and billing systems across domains',
            'SaaS ecosystems and multi-tenant products',
            'Secure REST API design and optimised MySQL architecture',
            'Role-based access and audit trails',
        ],
        reference:
            'Gaming cafe platform; recruitment platform; SprintCart channel sales platform; CRM and ERP programme.',
    },
    {
        ref: 'A.04',
        title: 'Cloud & DevOps',
        summary: 'Infrastructure treated as part of the design, not a deployment step.',
        items: [
            'AWS, Azure and GCP infrastructure',
            'Docker containerisation and image pipelines',
            'CI/CD pipelines and release automation',
            'Nginx and Gunicorn production serving',
            'Airflow orchestration and scheduling',
            'Monitoring, logging and cost optimisation',
        ],
        reference:
            'Airflow orchestration on GCP, Dockerised Django and FastAPI services behind Nginx and Gunicorn, CI/CD across AWS, Azure and GCP.',
    },
    {
        ref: 'A.05',
        title: 'E-Commerce Solutions',
        summary: 'Storefronts engineered for conversion and for the catalogue behind them.',
        items: [
            'Custom Shopify theme development and sections',
            'Variant logic and product configuration',
            'Checkout flow optimisation',
            'Product filtering and catalogue architecture',
            'Payment gateway and marketing integrations',
            'Full-stack storefront builds and migrations',
        ],
        reference:
            '30+ live WordPress and Shopify properties, from jewellery and fashion storefronts to finance and news publishing.',
    },
    {
        ref: 'A.06',
        title: 'IT Staff Augmentation',
        summary: "Engineers who join a client's team and are accountable inside it.",
        items: [
            'Dedicated developers, project-based or long-term',
            'Cross-functional remote and hybrid teams',
            '~48 hour average onboarding',
            '~40% typical cost saving against in-house hiring',
            '24/7 scalable team coverage',
            'Technical screening and recruitment support',
        ],
        reference:
            'Dedicated backend, AI, data and commerce engineers embedded in client teams on project-based or long-term engagement.',
    },
]

/** Section through an engagement — the same five stages every time. */
export const LIFECYCLE = [
    {
        num: '01',
        title: 'Architecture',
        caption: 'The load path is decided here',
        body: 'Technical discovery and the architectural decisions everything downstream depends on.',
    },
    {
        num: '02',
        title: 'Development',
        caption: 'Backend, models, interfaces',
        body: 'The full build, with QA running inside the delivery cycle rather than bolted on at the end.',
    },
    {
        num: '03',
        title: 'Deployment',
        caption: 'Cloud, CI/CD, handover',
        body: 'Release automation and a written handover — part of delivery, not a separate purchase.',
    },
    {
        num: '04',
        title: 'Optimisation',
        caption: 'Throughput, cost, accuracy',
        body: 'Post-launch tuning against how the system actually behaves under real load.',
    },
    {
        num: '05',
        title: 'Maintenance',
        caption: 'Monitoring, iteration, ownership',
        body: 'Ongoing ownership of a running system, with monitoring and incident response.',
    },
]

/** Named engagements, disclosed with the client's agreement. */
export const CLIENTS = [
    {
        ref: 'C1',
        name: 'HDFC Life',
        sector: 'Insurance & Finance',
        body:
            "PAN-based automation and verification, plus handwritten form extraction, for one of India's largest life insurers.",
    },
    {
        ref: 'C2',
        name: 'Vervali Systems',
        sector: 'Technology Partner',
        body:
            'Handwritten form extraction and multilingual marksheet parsing delivered as a technology partner.',
    },
    {
        ref: 'C3',
        name: 'Heckyl Technologies',
        sector: 'FinTech',
        body:
            'Domain-specific financial conversational AI over KPI, revenue and year-on-year analytics.',
    },
]

/** The flagship engagement, given its own treatment on the home page. */
export const FLAGSHIP = {
    ref: 'P.01',
    grid: 'A.01',
    title: 'PAN Automation & Regulatory Verification',
    client: 'HDFC Life',
    sector: 'Insurance & Finance',
    body:
        'A fully automated PAN-based verification and regulatory data processing system. The ' +
        'submission cycle that previously occupied a team for days — logging in, defeating the ' +
        'portal challenge, reading and cross-checking documents, assembling returns — now runs ' +
        'as one scheduled pipeline, with structured extraction feeding straight into validation.',
    note:
        'Built for an insurer where an incorrect return is not a bug, it is a regulatory event. ' +
        'Validation is rule-based and auditable by design.',
    pipeline: [
        { num: '01', step: 'Access', detail: 'CAPTCHA workflow analysis and automated handling' },
        { num: '02', step: 'Read', detail: 'OCR-based, schema-mapped parsing of PAN and compliance documents' },
        { num: '03', step: 'Validate', detail: 'Rule-based validation against regulatory logic' },
        { num: '04', step: 'Export', detail: 'Automated structured JSON and Excel returns' },
        { num: '05', step: 'Repeat', detail: 'Recurring scheduled compliance processing' },
    ],
}

/** The fourteen documented systems. */
export const PROJECTS = [
    {
        ref: 'P.01',
        grid: 'A.01',
        title: 'PAN Automation & Regulatory Verification',
        client: 'HDFC Life',
        sector: 'Insurance & Finance',
        flagship: true,
        body:
            'A fully automated PAN-based verification and regulatory data processing system. A ' +
            'submission cycle that previously occupied a team for days now runs as one scheduled ' +
            'pipeline, with structured extraction feeding straight into rule-based validation.',
        highlights: [
            'CAPTCHA workflow analysis and automated handling',
            'OCR-based, schema-mapped document parsing',
            'Rule-based validation against regulatory logic',
            'Automated structured JSON and Excel returns',
        ],
    },
    {
        ref: 'P.02',
        grid: 'A.01',
        title: 'Handwritten & Multilingual Document Extraction',
        client: 'HDFC Life / Vervali Systems',
        sector: 'Document Intelligence',
        body:
            'One extraction architecture run against two very different source types: field-level, ' +
            'layout-aware parsing that converts handwritten physical forms into structured data — and ' +
            'the same architecture reading academic marksheets across English, Hindi and Gujarati.',
        highlights: [
            'Field-level recognition and layout-aware parsing',
            'Supports multiple template formats',
            'High-accuracy parsing across three scripts',
            'Per-field confidence, not one whole-page guess',
        ],
    },
    {
        ref: 'P.03',
        grid: 'A.01',
        title: 'Financial Conversational AI Platform',
        client: 'Heckyl Technologies',
        sector: 'FinTech',
        body:
            'A domain-specific financial assistant answering KPI, revenue and year-on-year analytics ' +
            'questions against live data.',
        highlights: [
            'Embeddings and vector search architecture',
            'LLM-based intent classification via Azure OpenAI',
            'Multi-source ingestion and data-agnostic upload',
            'Audit logs, conversation history and monitoring dashboards',
        ],
    },
    {
        ref: 'P.04',
        grid: 'A.01',
        title: 'Healthcare AI Assistant',
        sector: 'Healthcare / Proof of concept',
        body: 'End-to-end architecture for a patient-facing clinical assistant.',
        highlights: [
            'Symptom-based doctor search and hospital recommendation',
            'Appointment booking and slot management',
            'Custom NLP pipelines for intent routing',
            'HIPAA-aware architecture and secure data handling',
        ],
    },
    {
        ref: 'P.05',
        grid: 'A.01',
        title: 'Multi-Agent System — LangGraph',
        sector: 'Retail Domain',
        body:
            'A supervisor agent orchestrating specialised workers — data, analysis, file upload, graph ' +
            'generation and NoSQL — with conflict resolution between them.',
        highlights: [
            'Supervisor orchestration and conflict resolution',
            'Retry logic, failure isolation and agent sandboxing',
            'Event-based triggers and modular agent architecture',
        ],
    },
    {
        ref: 'P.06',
        grid: 'A.02',
        title: 'GCP Cloud Composer Migration',
        sector: 'University Workflow / GCP Platform',
        body:
            'Migration of large legacy processes from Cloud Functions to Airflow DAGs, with validation, ' +
            'QA and deployment handover.',
        highlights: [
            'Custom DAGs with sensors, BigQuery operations and dependency chains',
            'GCS sensors for automated daily file-dump detection',
            'Complex monthly scheduling rules',
            'Complete validation, QA and deployment handover',
        ],
    },
    {
        ref: 'P.07',
        grid: 'A.02',
        title: 'ETL Automation for HR Data Ingestion',
        sector: 'Enterprise Data Pipeline',
        body:
            'Automated daily ingestion of millions of records arriving in inconsistent formats, driven ' +
            'by configuration rather than bespoke code.',
        highlights: [
            'Configurable transformation mapping input fields to target XML schemas',
            'Auto-generates optimised Python ETL scripts',
            'Validates structure, relationships and hierarchical parent-child nodes',
            'Reduced daily manual effort through rule-based configuration',
        ],
    },
    {
        ref: 'P.08',
        grid: 'A.02',
        title: 'Finance Data Engine — Trading & Fund Analytics',
        sector: 'Financial Services / Data Platform',
        body:
            'Ingestion pipelines for thousands of vendor XML files, with graph-driven fund search across ' +
            'entity traversal that a relational schema alone could not answer at this depth.',
        highlights: [
            'Business rules, validations and derived metrics such as returns and funding ratios',
            'Auto-detects anomalies and threshold breaches',
            'Postgres and OrientDB graph database across millions of data points',
            'Automated scheduled dumps, archival and cleanup',
        ],
    },
    {
        ref: 'P.09',
        grid: 'A.03',
        title: 'Gaming Cafe Management System',
        sector: 'Laravel Platform',
        body:
            'Booking, session tracking and usage-based billing behind an admin dashboard, built on secure ' +
            'REST APIs over an optimised MySQL architecture so peak-hour bookings resolve without contention.',
        highlights: [
            'Booking and session tracking',
            'Usage-based billing',
            'Secure REST API design',
            'Optimised MySQL architecture',
        ],
    },
    {
        ref: 'P.10',
        grid: 'A.03',
        title: 'HR Recruitment Platform',
        client: 'Talent Sync Solutions',
        sector: 'Recruitment & HR',
        body:
            'Job posting, application and resume-submission workflows, run through a backend admin ' +
            'dashboard with recruitment automation built in. Tuned for SEO and performance from launch.',
        highlights: [
            'Job posting and application workflows',
            'Resume submission and candidate forms',
            'Backend admin dashboard',
            'SEO and performance tuned from launch',
        ],
    },
    {
        ref: 'P.11',
        grid: 'A.03',
        title: 'SprintCart — Channel Sales Platform',
        sector: 'BFSI · ISO 27001:2022 certified',
        body:
            'A channel sales engagement platform built for BFSI-scale distribution, running four ' +
            'purpose-built modules for field teams and partner networks. Client identity is withheld ' +
            'at the client’s request.',
        highlights: [
            'Genius Card — NFC digital business card with trackable interactions',
            'DigiSafe — digital asset management with multilingual content',
            'Supply Junction — indent-to-fulfilment with multi-level approvals',
            'Jubilee — automated rewards, incentives and loyalty',
        ],
    },
    {
        ref: 'P.12',
        grid: 'A.03',
        title: 'Enterprise CRM & ERP Programme',
        sector: 'Six sectors',
        body:
            'A multi-domain CRM and ERP programme delivered across six sectors, from on-premise Django ' +
            'deployments to PySpark segmentation modelling.',
        highlights: [
            'Real estate CRM — interest and payment modules',
            'Automobile CRM — survey automation with Salesforce integration',
            'Education ERP — examinations, attendance, library and CRM',
            'Churn and segmentation analytics in PySpark with D3.js reporting',
        ],
    },
    {
        ref: 'P.13',
        grid: 'A.05',
        title: 'WordPress Corporate Estate',
        sector: 'Nine of 30+ live properties',
        body:
            'Corporate and industry sites across infrastructure, consultancy, travel, gaming, consumer ' +
            'brands, finance and news, manufacturing and recruitment — layout, content architecture and ' +
            'forms built into the theme rather than assembled from third-party add-ons.',
        highlights: [
            'Themes, not plugin stacks',
            'Admin content control ships with every property',
            'SEO schema and category structure built in',
            'Performance optimisation as part of the build',
        ],
    },
    {
        ref: 'P.14',
        grid: 'A.05',
        title: 'Shopify Commerce Estate',
        sector: 'Jewellery, electronics, fashion, wellness, music',
        body:
            'Storefront engineering at theme level rather than app configuration — across Just Love Fine ' +
            'Jewellery, ITT USA, Dance Design, Yoga Clermont, Asli Music and Wmark India.',
        highlights: [
            'Variant logic modelled for metal, stone, size and finish',
            'Checkout optimised as a flow, not a page',
            'Multi-language stores set up from the theme up',
            'Payment gateway and marketing integrations',
        ],
    },
]

/** Nine sectors, each with its own tolerance for error. */
export const INDUSTRIES = [
    { num: '01', name: 'Insurance & Finance', body: 'Regulatory automation, compliance reporting, fund and trading analytics' },
    { num: '02', name: 'Healthcare', body: 'Clinical assistants, HIPAA-aware architecture, appointment systems' },
    { num: '03', name: 'Recruitment & HR', body: 'Recruitment platforms, HR data ingestion at scale, staffing' },
    { num: '04', name: 'Retail & E-Commerce', body: 'Multi-agent retail systems, storefronts, churn and segmentation' },
    { num: '05', name: 'Infrastructure & Real Estate', body: 'Property CRM, interest and payment modules, society accounting' },
    { num: '06', name: 'Manufacturing', body: 'Business listing platforms, industrial web estates, inquiry workflows' },
    { num: '07', name: 'Education', body: 'ERP for examinations, attendance and library; multilingual marksheet extraction' },
    { num: '08', name: 'Media & News', body: 'Content architecture, SEO schema, advertisement modules' },
    { num: '09', name: 'Consumer Brands', body: 'Commerce storefronts, product showcases, brand platforms' },
]

export const INDUSTRY_NOTE =
    'The same extraction engine that reads an insurance form reads a marksheet. What changes ' +
    'between sectors is the tolerance for being wrong — and that is an architectural decision.'

/** 78+ technologies, scheduled by layer rather than listed as a cloud of logos. */
export const TECH_LAYERS = [
    { layer: 'Languages', items: ['PHP', 'Python', 'JavaScript', 'Shell'] },
    { layer: 'Frameworks', items: ['Laravel', 'Django', 'FastAPI', 'CodeIgniter', 'Flask', 'React', 'SQLAlchemy'] },
    { layer: 'AI & Machine Learning', items: ['OCR', 'NLP', 'LLM Integrations', 'LangChain', 'LangGraph', 'RAG', 'Vector Databases', 'Structured Extraction'] },
    { layer: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'OrientDB', 'Qdrant', 'Chroma', 'BigQuery'] },
    { layer: 'CMS & Commerce', items: ['WordPress', 'Shopify'] },
    { layer: 'Cloud & DevOps', items: ['AWS', 'Azure', 'GCP', 'Docker', 'Nginx', 'Gunicorn', 'CI/CD', 'Airflow'] },
    { layer: 'Big Data & Messaging', items: ['Apache PySpark', 'RabbitMQ', 'Celery', 'ETL Pipelines'] },
    { layer: 'Architecture', items: ['Microservices', 'Event-Driven', 'Distributed Systems', 'Multi-Agent'] },
]

export const TECH_PRINCIPLE =
    'Nothing on this schedule is here because it is fashionable. Each layer is chosen for the load ' +
    'it has to carry: OrientDB because fund relationships are a graph problem, PySpark because ' +
    'segmentation runs over millions of rows, FastAPI because extraction endpoints are called far ' +
    'more often than they are changed.'

/** Three ways in. All three run through the same lifecycle. */
export const ENGAGEMENT = [
    {
        ref: 'D.01',
        title: 'Project delivery',
        summary:
            'A defined system, architected, built, deployed and handed over with documentation and QA. Fixed scope, fixed accountability.',
        items: [
            'Architecture and technical discovery',
            'Full build and QA',
            'Deployment and handover',
            'Post-launch optimisation',
        ],
    },
    {
        ref: 'D.02',
        title: 'Dedicated teams',
        summary:
            "Engineers embedded in the client's own structure, reporting into their process. Roughly 48 hour average onboarding.",
        items: [
            'Cross-functional remote teams',
            'Project-based or long-term engagement',
            '24/7 scalable coverage',
            '~40% cost saving vs. in-house hiring',
        ],
    },
    {
        ref: 'D.03',
        title: 'Managed platforms',
        summary:
            'Ongoing ownership of a running system — pipelines, storefronts or SaaS products the client depends on daily.',
        items: [
            'Monitoring and incident response',
            'Iterative feature delivery',
            'Cost and performance optimisation',
            'Long-term maintenance',
        ],
    },
]

export const ENGAGEMENT_CONSTANTS = [
    {
        title: 'One architect',
        body:
            'Whatever the commercial shape, a senior architect owns the load path and stays with the engagement to the end of it.',
    },
    {
        title: 'Written handover',
        body: 'Validation, QA and deployment handover are part of delivery, not a separate purchase.',
    },
    {
        title: 'Production first',
        body: 'Systems are designed for the day they are operated, not the day they are demonstrated.',
    },
]

/** Roles available for embedded engagement. */
export const AUGMENTATION_ROLES = [
    { num: '01', title: 'Backend Engineers', stack: 'Laravel, Django, FastAPI', body: "Platform and API work, embedded directly in a client's own codebase and release process." },
    { num: '02', title: 'AI & LLM Specialists', stack: 'OCR, NLP, RAG, Agents', body: "Extraction pipelines, LLM integrations and multi-agent systems, built to the client's data and compliance constraints." },
    { num: '03', title: 'Data Engineers', stack: 'ETL, Airflow, BigQuery', body: 'Pipeline and migration work at production volume, not proof-of-concept scale.' },
    { num: '04', title: 'Cloud & DevOps Engineers', stack: 'AWS, Azure, GCP, CI/CD', body: "Infrastructure, deployment and release automation, run to the client's own operating standards." },
    { num: '05', title: 'QA Engineers', stack: 'Manual & automated testing', body: 'Validation built into the delivery cycle rather than bolted on at the end of it.' },
    { num: '06', title: 'WordPress & Shopify Specialists', stack: 'Theme & storefront builds', body: 'Commerce and content platform work, from theme architecture to checkout optimisation.' },
]

export const AUGMENTATION_PROCESS = [
    { num: '01', title: 'Share requirements', body: 'Tell us the role, the stack and the shape of the team you need to extend.' },
    { num: '02', title: 'Shortlist & interview', body: 'We shortlist vetted engineers against the brief; you interview and choose.' },
    { num: '03', title: 'Integrate', body: 'The engineer joins your repositories, tools and stand-ups — inside your process, not beside it.' },
    { num: '04', title: 'Scale as needed', body: 'Add or release capacity as the workload changes, without renegotiating from scratch.' },
]

export const AUGMENTATION_TERMS = [
    { value: '48 hr', label: 'Average onboarding' },
    { value: '~40%', label: 'Cost saving vs. in-house hire' },
    { value: '24/7', label: 'Scalable team coverage' },
]

/** What a first conversation should contain. */
export const WHAT_TO_SEND = [
    {
        num: '01',
        title: 'A workload',
        body:
            'A process someone is doing by hand that should not be done by hand. We will tell you whether it is an extraction problem or a pipeline problem.',
    },
    {
        num: '02',
        title: 'A platform',
        body:
            'An existing system that has outgrown its architecture, and the constraints it has to keep meeting while it is replaced.',
    },
    {
        num: '03',
        title: 'A gap',
        body: 'A role or a whole function you need engineered now. Dedicated engineers onboard in roughly 48 hours.',
    },
]

export const CONTACT_INVITATION =
    'Send the problem, not the specification. We will come back with an architecture.'
