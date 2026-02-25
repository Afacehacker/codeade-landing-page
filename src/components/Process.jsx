const steps = [
    {
        number: '01',
        title: 'Strategy & Analysis',
        description: 'We deep-dive into your business model to architect a solution that perfectly aligns with your growth goals.',
    },
    {
        number: '02',
        title: 'Design Philosophy',
        description: 'Our designers craft a unique visual identity that commands attention and reflects premium quality.',
    },
    {
        number: '03',
        title: 'Technical Build',
        description: 'Engineered with cutting-edge stack for maximum speed, security, and world-class responsiveness.',
    },
    {
        number: '04',
        title: 'Launch & Scale',
        description: 'Precision testing followed by a seamless launch and ongoing support to ensure continued excellence.',
    },
]

export default function Process() {
    return (
        <section id="process" className="relative py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-24 scroll-reveal">
                    <span className="inline-block px-6 py-2 rounded-full text-blue-600 text-xs font-black bg-blue-50 border border-blue-100 mb-8 uppercase tracking-[0.2em] shadow-sm">
                        Our Workflow
                    </span>
                    <h2 className="section-title text-6xl md:text-7xl mb-8">
                        The Road to <span className="text-blue-600">Digital Mastery</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="relative group scroll-reveal scroll-reveal-delay-1"
                        >
                            <div className="absolute -top-6 -left-6 text-[10rem] font-display font-black text-slate-50 group-hover:text-blue-50 transition-colors pointer-events-none -z-10">
                                {step.number}
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-[1.5rem] bg-brand-navy flex items-center justify-center text-white font-black text-xl mb-8 shadow-2xl group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
                                    {step.number}
                                </div>
                                <h3 className="font-display font-black text-2xl text-brand-navy mb-4 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 text-base font-medium leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
