import { useState } from 'react'

const faqs = [
    {
        question: "How long does it take to build a website?",
        answer: "Our standard turnaround time is 7-14 business days, depending on the complexity and features required. We prioritize both speed and precision."
    },
    {
        question: "Do you handle hosting and domain registration?",
        answer: "Yes, we provide end-to-end solutions. This includes premium high-speed hosting, domain registration, and professional business emails."
    },
    {
        question: "What payment gateways can I use?",
        answer: "We specialize in local and international integrations including Paystack, Flutterwave, and Stripe, ensuring your business is ready to collect payments globally."
    },
    {
        question: "Is my website mobile-friendly?",
        answer: "Absolutely. Every single site we build is 'Mobile-First' and fully responsive, ensuring a flawless experience on smartphones, tablets, and desktops."
    },
    {
        question: "Can I manage the website myself?",
        answer: "Yes! We build user-friendly dashboards that allow you to update content, images, and products without needing any technical knowledge."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section id="faq" className="relative py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-24">
                    <div className="scroll-reveal">
                        <span className="inline-block px-6 py-2 rounded-full text-blue-600 text-xs font-black bg-blue-50 border border-blue-100 mb-8 uppercase tracking-[0.2em] shadow-sm">
                            Got Questions?
                        </span>
                        <h2 className="section-title text-4xl sm:text-6xl md:text-7xl mb-8">
                            Everything You <br />
                            <span className="text-blue-600">Need to Know</span>
                        </h2>
                        <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-md mb-12">
                            We believe in transparency. If you have a question that isn't answered here, feel free to reach out to us directly.
                        </p>

                        <div className="bg-brand-navy rounded-[3rem] p-10 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                            <h4 className="font-display font-black text-2xl mb-4 relative z-10">Still Unsure?</h4>
                            <p className="text-blue-100/60 font-medium mb-8 relative z-10">Get a free technical consultation today and discover how we can transform your business.</p>
                            <a href="#contact" className="inline-flex items-center gap-4 text-white font-black text-xs uppercase tracking-[0.2em] group-hover:text-blue-400 transition-colors relative z-10">
                                Contact Support
                                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-400 group-hover:translate-x-2 transition-all">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`group rounded-[2rem] border transition-all duration-500 ${openIndex === i ? 'bg-[#f8fbff] border-blue-100 shadow-xl shadow-blue-500/5' : 'bg-white border-slate-100 hover:border-blue-50'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                    className="w-full px-8 py-8 flex items-center justify-between text-left"
                                >
                                    <span className={`font-display font-black text-lg md:text-xl uppercase tracking-tight transition-colors ${openIndex === i ? 'text-blue-600' : 'text-brand-navy'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50'}`}>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                                    <div className="px-8 pb-8 pt-0 text-slate-500 font-medium leading-relaxed text-base">
                                        {faq.answer}
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
