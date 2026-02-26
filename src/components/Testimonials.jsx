import avatar1 from '../assets/images/avatar1.png'
import avatar2 from '../assets/images/avatar2.png'
import avatar3 from '../assets/images/avatar3.png'

const testimonials = [
    {
        quote: "CodeAde transformed our online presence. Our investment portal is now much more intuitive and professional.",
        author: "Chidi Okechukwu",
        role: "Director, BuildPlus",
        avatar: avatar1,
    },
    {
        quote: "The team delivered our cryptocurrency platform way faster than expected. Highly recommended!",
        author: "Folashade Balogun",
        role: "CEO, LuxDecor",
        avatar: avatar2,
    },
    {
        quote: "Professionalism at its peak. Our law firm website is beautiful and handles client inquiries seamlessly.",
        author: "Adekunle Johnson",
        role: "Managing Partner, LexLegal",
        avatar: avatar3,
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-32 bg-[#f8fbff] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24 scroll-reveal">
                    <span className="inline-block px-6 py-2 rounded-full text-blue-600 text-xs font-black bg-white border border-blue-100 mb-8 uppercase tracking-[0.2em] shadow-sm">
                        Client Testimonials
                    </span>
                    <h2 className="section-title text-6xl md:text-7xl mb-8">
                        The Voice of <span className="text-blue-600">Trust</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((t) => (
                        <div
                            key={t.author}
                            className="p-10 rounded-[3rem] bg-white border border-blue-50 flex flex-col gap-10 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 scroll-reveal scroll-reveal-delay-1 group"
                        >
                            <div className="flex gap-1.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-slate-500 italic leading-relaxed text-lg font-medium">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-5 mt-auto">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-blue-600 rounded-full scale-110 opacity-0 group-hover:opacity-20 transition-opacity" />
                                    <img
                                        src={t.avatar}
                                        alt={t.author}
                                        className="w-16 h-16 rounded-full object-cover border-4 border-slate-50 shadow-sm relative z-10"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-display font-black text-brand-navy text-xl leading-none mb-1 uppercase tracking-tight">{t.author}</h4>
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
