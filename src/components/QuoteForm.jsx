import { useState } from 'react'

export default function QuoteForm() {
    const [status, setStatus] = useState('idle') // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('submitting')
        setTimeout(() => setStatus('success'), 1500)
    }

    return (
        <section id="quote" className="relative py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-brand-navy rounded-[4rem] overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(15,23,42,0.4)]">
                    {/* Background assets */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_50%)]" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />

                    <div className="relative z-10 grid lg:grid-cols-2">
                        {/* Left: Text */}
                        <div className="p-12 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                            <span className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-[0.3em] border border-white/10 backdrop-blur-sm mb-10 w-fit">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                Project Inquiry
                            </span>
                            <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-[0.9] tracking-tight mb-8">
                                Start Your <br />
                                <span className="text-blue-400 italic font-serif font-medium">Digital Legacy</span>
                            </h2>
                            <p className="text-blue-100/60 text-xl font-medium leading-relaxed max-w-md mb-12">
                                Provide us with a few details about your project, and our architects will reach out within 24 hours with a custom roadmap.
                            </p>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <span className="text-white font-black uppercase tracking-widest text-sm">hello@codeade.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="p-12 md:p-20 bg-white/5 backdrop-blur-md">
                            {status === 'success' ? (
                                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                                    <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-4xl mb-8 shadow-2xl shadow-blue-500/40">
                                        ✅
                                    </div>
                                    <h3 className="text-4xl font-display font-black text-white mb-4">Message Sent!</h3>
                                    <p className="text-blue-100/60 font-medium">Our team will contact you shortly.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-8 text-blue-400 font-black text-xs uppercase tracking-widest hover:text-white transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest px-2">Your Name</label>
                                            <input required type="text" placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest px-2">Industry</label>
                                            <select className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/50 focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                                                <option className="bg-brand-navy">Fintech / Loan</option>
                                                <option className="bg-brand-navy">Legal / Lawyer</option>
                                                <option className="bg-brand-navy">E-Commerce</option>
                                                <option className="bg-brand-navy">Other Solutions</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest px-2">Work Email</label>
                                        <input required type="email" placeholder="john@company.com" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest px-2">Project Details</label>
                                        <textarea required rows={4} placeholder="Describe your vision..." className="bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                                    </div>
                                    <button
                                        disabled={status === 'submitting'}
                                        className="group relative bg-blue-600 text-white rounded-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:bg-blue-700 hover:scale-[1.02] shadow-2xl shadow-blue-500/20 disabled:opacity-50"
                                    >
                                        {status === 'submitting' ? 'SENDING...' : 'INITIALIZE PROJECT →'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
