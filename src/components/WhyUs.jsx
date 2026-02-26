const features = [
    {
        icon: (
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.769 0-5.536-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
        title: 'Custom Architectures',
        description: 'No templates. Every website is uniquely engineered to reflect your specific business workflows and brand values.',
    },
    {
        icon: (
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 0a3 3 0 10-3 3 3 3 0 003-3zm0 0h3" />
            </svg>
        ),
        title: 'Pixel-Perfect Build',
        description: 'Responsive by nature. We ensure your digital presence is flawless across mobile, tablet, and high-res desktops.',
    },
    {
        icon: (
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        title: 'SEO & Performance',
        description: 'We optimize for speed and visibility, ensuring your site ranks high and converts visitors into loyal customers.',
    },
]

export default function WhyUs() {
    return (
        <section id="why-us" className="relative py-32 bg-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 tech-lines opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">

                    {/* Left: Text block */}
                    <div className="scroll-reveal flex flex-col gap-10">
                        <div>
                            <span className="inline-block px-6 py-2 rounded-full text-blue-600 text-xs font-black bg-blue-50 border border-blue-100 mb-8 uppercase tracking-[0.2em] shadow-sm">
                                Why CodeAde
                            </span>
                            <h2 className="section-title text-4xl sm:text-6xl md:text-7xl mb-8">
                                Engineering <br />
                                <span className="text-blue-600">Digital Excellence</span>
                            </h2>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
                                We combine technical mastery with strategic design to build platforms that don't just look good—they perform.
                            </p>
                        </div>

                        {/* High-end stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { label: 'Faster Delivery', value: '2X', desc: 'Average industry speed' },
                                { label: 'Client Success', value: '100%', desc: 'Satisfaction rate' },
                            ].map((s) => (
                                <div key={s.label} className="bg-[#f8fbff] rounded-[2.5rem] p-8 border border-blue-50 group hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                                    <p className="font-display font-black text-5xl text-blue-600 group-hover:scale-110 transition-transform origin-left">{s.value}</p>
                                    <p className="text-brand-navy font-black text-sm uppercase tracking-widest mt-4">{s.label}</p>
                                    <p className="text-slate-400 text-xs mt-1 font-medium">{s.desc}</p>
                                </div>
                            ))}
                        </div>

                        <a href="#contact" className="group flex items-center gap-4 text-brand-navy font-black text-sm uppercase tracking-[0.2em] hover:text-blue-600 transition-colors">
                            Discover our philosophy
                            <div className="w-8 h-8 rounded-full border-2 border-brand-navy flex items-center justify-center group-hover:border-blue-600 group-hover:translate-x-2 transition-all">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </a>
                    </div>

                    {/* Right: Feature cards */}
                    <div className="grid grid-cols-1 gap-8 relative">
                        {/* Decorative background element behind cards */}
                        <div className="absolute -inset-4 bg-blue-500/5 rounded-[4rem] -z-10 blur-2xl" />

                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_-12px_rgba(30,58,138,0.05)] border border-blue-50 hover:shadow-[0_40px_80px_-15px_rgba(30,58,138,0.1)] transition-all duration-500 scroll-reveal scroll-reveal-delay-1 group"
                            >
                                <div className="flex items-start gap-8">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
                                        <div className="group-hover:text-white transition-colors duration-500">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-display font-black text-2xl text-brand-navy mb-3 uppercase tracking-tight group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                                        <p className="text-slate-500 text-base font-medium leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
