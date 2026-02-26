export default function Integrations() {
    const tools = [
        { name: 'Paystack', icon: '💳', color: 'text-blue-500' },
        { name: 'Flutterwave', icon: '🌊', color: 'text-orange-500' },
        { name: 'Monnify', icon: '🏦', color: 'text-blue-700' },
        { name: 'AWS', icon: '☁️', color: 'text-orange-600' },
        { name: 'Cloudflare', icon: '⚡', color: 'text-orange-400' },
        { name: 'Google Workspace', icon: '📧', color: 'text-blue-600' },
    ]

    return (
        <section className="py-24 bg-[#f8fbff] overflow-hidden border-y border-blue-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16 scroll-reveal">
                    <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">World-Class Infrastructure</span>
                    <h2 className="text-3xl md:text-4xl font-display font-black text-brand-navy tracking-tight">
                        Seamlessly Integrated With <br className="hidden md:block" />
                        <span className="text-blue-600">The Tools You Trust</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Infinite scroll-like effect using Flex */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 animate-fade-in">
                        {tools.map((tool) => (
                            <div
                                key={tool.name}
                                className="group flex items-center gap-4 bg-white px-8 py-5 rounded-3xl border border-blue-50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-500"
                            >
                                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110">
                                    {tool.icon}
                                </span>
                                <span className="font-display font-black text-brand-navy group-hover:text-blue-600 transition-colors uppercase tracking-tight text-sm">
                                    {tool.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex justify-center">
                    <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-blue-50 border border-blue-100">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Secure Payment Gateways & Enterprise Hosting</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
