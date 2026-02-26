import { useEffect, useRef } from 'react'
import WhatsAppButton from './WhatsAppButton'
import heroImage from '../assets/images/hero.png'

const services = [
  'Loan website',
  'Attorney/Lawyer website',
  'Charity Organization',
  'Grant website',
  'Gold Storage website',
  'Investment website',
  'Cryptocurrency/BTC website',
  'Portfolio website',
  'Construction website',
  'Business/Company website',
]

export default function Hero() {
  const headingRef = useRef(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    setTimeout(() => {
      el.style.transition = 'all 1s cubic-bezier(0.22, 1, 0.36, 1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50/60 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content Column */}
          <div ref={headingRef} className="flex flex-col gap-10 order-2 lg:order-1">

            {/* Logo in Hero */}
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-5xl tracking-tighter text-brand-navy">Code</span>
              <span className="font-serif italic font-medium text-5xl text-blue-600">Ade</span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-6">
              <h1 className="font-display font-black text-5xl sm:text-7xl md:text-9xl leading-[0.85] tracking-tight text-brand-navy">
                Need A<br />
                <span className="text-blue-600">Website?</span>
              </h1>
              <p className="text-slate-600 text-lg md:text-2xl font-medium max-w-lg">
                We craft professional, high-performance websites tailored for your specific industry.
              </p>
            </div>

            {/* Services Box */}
            <div className="relative max-w-lg">
              <div className="absolute -top-4 left-10 z-10 flex gap-2">
                <span className="bg-blue-600 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/30">
                  Our Expertise
                </span>
                <span className="bg-white text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-sm border border-blue-100">
                  10+ Services
                </span>
              </div>
              <div className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 pt-12 sm:pt-14 border border-blue-50/50 shadow-2xl shadow-blue-500/5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {services.slice(0, 10).map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-blue-500">
                      <svg className="w-3 h-3 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-bold text-sm md:text-base tracking-tight group-hover:text-blue-600 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
                <div className="sm:col-span-2 mt-2 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">And many more custom solutions</span>
                </div>
              </div>
            </div>

            {/* Bottom Contact Bar */}
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex flex-col gap-4">
                <a href="tel:09078083403" className="group flex items-center bg-brand-navy text-white pl-10 pr-6 py-4 rounded-full font-black transition-all hover:bg-blue-700 hover:scale-105 shadow-2xl shadow-blue-900/10">
                  LET'S TALK
                  <div className="ml-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:rotate-[360deg] transition-all duration-500">
                    <svg className="w-6 h-6 text-white group-hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
                <WhatsAppButton className="w-full justify-center !py-4 scale-105" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Call Us Directly</span>
                <span className="text-brand-navy font-black text-3xl md:text-4xl tracking-tighter">
                  09078083403
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            {/* Visual enhancements behind image */}
            <div className="absolute inset-0 bg-blue-500/5 rounded-full scale-125 -z-10 blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-500/5 rounded-full -z-10" />

            {/* Floating code bits */}
            <div className="absolute -top-10 left-10 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 text-blue-600 font-mono text-xs animate-float z-20">
              {"<Developer />"}
            </div>
            <div className="absolute top-1/2 -right-10 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 text-blue-600 font-mono text-xs animate-bounce z-20">
              {"const success = true;"}
            </div>

            <div className="relative w-full max-w-[600px] z-10">
              <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,58,138,0.3)] border-b-8 border-r-8 border-blue-600/10 bg-slate-100 aspect-[4/5] group">
                <img
                  src={heroImage}
                  alt="CodeAde Expert Developer"
                  className="w-full h-full object-cover relative z-0 transition-transform duration-1000 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none z-10" />

                {/* Floating Thumbs Up Icon Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-600/90 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl z-20">
                  <span className="text-4xl pointer-events-none">👍</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-10 -right-10 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-blue-50 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/40">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Status</p>
                  <p className="text-brand-navy font-black text-lg leading-none">Verified Dev</p>
                </div>
              </div>

              <div className="absolute bottom-10 -left-10 bg-brand-navy p-6 rounded-[2.5rem] shadow-2xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3.5s' }}>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest leading-none mb-1">Efficiency</p>
                  <p className="text-white font-black text-lg leading-none">Fast Delivery</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
