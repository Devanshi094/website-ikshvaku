import { useState, useEffect, useRef } from 'react'

const AIChatDemo = () => {
    const [messages, setMessages] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [demoStarted, setDemoStarted] = useState(false)
    const messagesEndRef = useRef(null)
    const sectionRef = useRef(null)

    // Predefined demo messages
    const demoConversations = [
        {
            user: "What can your AI do for my business?",
            ai: "I can help you with predictive analytics, process automation, customer insights, and intelligent decision-making. Our AI solutions have helped businesses achieve 40% efficiency gains and 99.5% prediction accuracy."
        },
        {
            user: "How long does implementation take?",
            ai: "Typical implementations range from 2-8 weeks depending on complexity. We start with a pilot project to demonstrate value, then scale based on results. Most clients see ROI within the first 3 months."
        },
        {
            user: "Is my data secure with your AI?",
            ai: "Absolutely. We employ enterprise-grade security with end-to-end encryption, SOC 2 compliance, and private cloud deployment options. Your data never leaves your control, and all AI models can be deployed on-premise if required."
        }
    ]

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    // Intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    // Simulated AI response
    const simulateResponse = (userMessage) => {
        setIsTyping(true)

        // Find matching demo response or generate generic one
        const matchedConvo = demoConversations.find(c =>
            c.user.toLowerCase() === userMessage.toLowerCase()
        )

        const response = matchedConvo?.ai || generateResponse(userMessage)

        // Simulate typing delay
        setTimeout(() => {
            setIsTyping(false)
            setMessages(prev => [...prev, { type: 'ai', text: response }])
        }, 1500 + Math.random() * 1000)
    }

    const generateResponse = (input) => {
        const responses = [
            "That's a great question! Our AI solutions are customized to your specific business needs. Would you like to schedule a demo to see how we can help?",
            "I understand your concern. Our team of AI experts would be happy to discuss this in detail. Shall I connect you with a specialist?",
            "Excellent point! Our AI has been trained on diverse enterprise datasets to handle exactly these scenarios. Let me show you some relevant case studies.",
            "Our intelligent systems can definitely address that. We've achieved remarkable results for similar challenges. Would you like to explore our implementation approach?"
        ]
        return responses[Math.floor(Math.random() * responses.length)]
    }

    const handleSend = () => {
        if (!inputValue.trim()) return

        setMessages(prev => [...prev, { type: 'user', text: inputValue }])
        simulateResponse(inputValue)
        setInputValue('')
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend()
        }
    }

    const startDemo = () => {
        setDemoStarted(true)
        setMessages([{
            type: 'ai',
            text: "Hello! I'm your AI assistant from Ikshvaku Solutions. I can help answer questions about our AI capabilities, implementation process, security, and more. Try asking me something!"
        }])
    }

    const handleQuickQuestion = (question) => {
        setMessages(prev => [...prev, { type: 'user', text: question }])
        simulateResponse(question)
    }

    return (
        <section ref={sectionRef} className="section bg-gradient-to-br from-sky-light via-white to-sky-medium relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 neural-bg opacity-50"></div>
            <div className="absolute top-20 right-10 w-64 h-64 bg-mint/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-deep/20 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-mint/10 text-mint-deep rounded-full text-sm font-medium mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
                            </span>
                            Live AI Demo
                        </span>

                        <h2 className="section-title mb-4">Experience AI Intelligence</h2>
                        <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                            Try our interactive AI assistant and see how intelligent automation
                            can transform your business communication and decision-making.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                { icon: '⚡', text: 'Instant, intelligent responses' },
                                { icon: '🔒', text: 'Enterprise-grade security' },
                                { icon: '🎯', text: 'Contextual understanding' },
                                { icon: '📈', text: 'Continuous learning & improvement' }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center gap-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                                        }`}
                                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-charcoal/80">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <a href="/contact" className="btn-primary group inline-flex">
                            <span>Get Full Demo Access</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Right - Chat Interface */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="glass-card-premium p-1 shadow-2xl shadow-mint/10">
                            {/* Chat Header */}
                            <div className="bg-gradient-to-r from-mint to-teal rounded-t-[1.25rem] px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-display font-semibold text-white">Ikshvaku AI Assistant</h4>
                                        <div className="flex items-center gap-2 text-white/80 text-sm">
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                            <span>Online - Ready to help</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Body */}
                            <div className="h-80 bg-white/50 backdrop-blur-sm p-4 overflow-y-auto">
                                {!demoStarted ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center">
                                        <div className="w-20 h-20 bg-gradient-to-br from-mint/20 to-teal/20 rounded-full flex items-center justify-center mb-4">
                                            <svg className="w-10 h-10 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-display font-semibold text-dark mb-2">Start AI Conversation</h4>
                                        <p className="text-charcoal/60 text-sm mb-4">Experience our AI in action</p>
                                        <button
                                            onClick={startDemo}
                                            className="btn-primary text-sm"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Start Demo
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {messages.map((msg, index) => (
                                            <div
                                                key={index}
                                                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div className={`chat-bubble ${msg.type === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}`}>
                                                    {msg.type === 'ai' && (
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-mint to-teal flex items-center justify-center">
                                                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                </svg>
                                                            </div>
                                                            <span className="text-xs text-mint-deep font-medium">AI Assistant</span>
                                                        </div>
                                                    )}
                                                    <p className="text-sm leading-relaxed">{msg.text}</p>
                                                </div>
                                            </div>
                                        ))}

                                        {isTyping && (
                                            <div className="flex justify-start">
                                                <div className="chat-bubble chat-bubble-ai">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-mint to-teal flex items-center justify-center">
                                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                            </svg>
                                                        </div>
                                                        <span className="text-xs text-mint-deep font-medium">AI is thinking...</span>
                                                    </div>
                                                    <div className="flex gap-1 py-2">
                                                        <span className="processing-dot"></span>
                                                        <span className="processing-dot"></span>
                                                        <span className="processing-dot"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div ref={messagesEndRef} />
                                    </div>
                                )}
                            </div>

                            {/* Quick Questions */}
                            {demoStarted && messages.length < 5 && !isTyping && (
                                <div className="px-4 py-2 bg-sky-light/50 border-t border-mint/10">
                                    <p className="text-xs text-charcoal/50 mb-2">Try asking:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {demoConversations.slice(0, 3).map((conv, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleQuickQuestion(conv.user)}
                                                className="text-xs px-3 py-1.5 bg-white rounded-full text-teal border border-mint/30 hover:bg-mint/10 hover:border-mint transition-all truncate max-w-[200px]"
                                            >
                                                {conv.user}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Input Area */}
                            {demoStarted && (
                                <div className="p-4 bg-white rounded-b-[1.25rem] border-t border-mint/10">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Type your question..."
                                            className="flex-1 px-4 py-3 bg-sky-light/50 border border-mint/20 rounded-xl focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 transition-all text-sm"
                                            disabled={isTyping}
                                        />
                                        <button
                                            onClick={handleSend}
                                            disabled={!inputValue.trim() || isTyping}
                                            className={`p-3 rounded-xl transition-all ${inputValue.trim() && !isTyping
                                                    ? 'bg-gradient-to-br from-mint to-teal text-white hover:shadow-lg hover:shadow-mint/30 hover:scale-105'
                                                    : 'bg-charcoal/10 text-charcoal/30 cursor-not-allowed'
                                                }`}
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Trust Badge */}
                        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-charcoal/50">
                            <svg className="w-4 h-4 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>Simulated demo - Full AI available after signup</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AIChatDemo
