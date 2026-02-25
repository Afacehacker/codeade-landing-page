import WhatsAppButton from './WhatsAppButton'

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-[4rem] overflow-hidden bg-brand-navy p-12 md:p-24 shadow-[0_40px_100px_-15px_rgba(15,23,42,0.3)] text-center scroll-reveal">

          {/* Abstract background patterns */}
          <div className="absolute inset-0 tech-lines opacity-[0.05] pointer-events-none" />
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-10">
            <span className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-[0.3em] border border-white/10 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              Start Your Journey
            </span>

            <h2 className="font-display font-black text-6xl md:text-8xl text-white leading-[0.9] tracking-tight">
              Ready to build <br />
              <span className="text-blue-400 italic font-serif font-medium">your new website?</span>
            </h2>

            <p className="text-blue-100/60 text-xl font-medium leading-relaxed max-w-2xl">
              Contact us today for a custom-built digital experience that transforms your business identity.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-10 mt-6">
              <div className="flex flex-col gap-4">
                <a href="tel:09078083403" className="group flex items-center bg-white text-brand-navy pl-10 pr-6 py-5 rounded-full font-black text-lg transition-all hover:bg-blue-50 hover:scale-105 shadow-2xl">
                  GET STARTED
                  <div className="ml-6 w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
                <WhatsAppButton className="w-full justify-center !py-4 scale-105 !shadow-none" />
              </div>

              <div className="flex flex-col items-start translate-y-1">
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Direct Line</span>
                <span className="text-white font-black text-4xl md:text-5xl tracking-tighter">
                  09078083403
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
