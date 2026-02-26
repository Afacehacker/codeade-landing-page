const services = [
  {
    emoji: '🏦',
    title: 'Loan Website',
    description: 'Automated lending platforms with secure credit checks and payment processing.',
    accent: 'bg-blue-600',
    light: 'bg-blue-50',
  },
  {
    emoji: '⚖️',
    title: 'Attorney/Lawyer',
    description: 'Professional legal portfolios and client management systems for law firms.',
    accent: 'bg-slate-700',
    light: 'bg-slate-50',
  },
  {
    emoji: '🤝',
    title: 'Charity Organization',
    description: 'Donation-focused platforms to showcase impact and manage fundraising.',
    accent: 'bg-green-600',
    light: 'bg-green-50',
  },
  {
    emoji: '💰',
    title: 'Grant Website',
    description: 'Portal for grant applications, tracking, and disbursement management.',
    accent: 'bg-yellow-600',
    light: 'bg-yellow-50',
  },
  {
    emoji: '🏆',
    title: 'Gold Storage',
    description: 'High-security inventory and transaction monitoring for precious metals.',
    accent: 'bg-amber-600',
    light: 'bg-amber-50',
  },
  {
    emoji: '📈',
    title: 'Investment Website',
    description: 'Wealth management portals with real-time tracking and analytics.',
    accent: 'bg-indigo-600',
    light: 'bg-indigo-50',
  },
  {
    emoji: '₿',
    title: 'Cryptocurrency/BTC',
    description: 'Secure exchange and wallet integration for digital asset management.',
    accent: 'bg-orange-500',
    light: 'bg-orange-50',
  },
  {
    emoji: '🎨',
    title: 'Portfolio Website',
    description: 'Stunning visual showcases for creatives and high-end professionals.',
    accent: 'bg-pink-600',
    light: 'bg-pink-50',
  },
  {
    emoji: '🏗️',
    title: 'Construction',
    description: 'Project management and bidding portals for construction companies.',
    accent: 'bg-orange-700',
    light: 'bg-orange-50',
  },
  {
    emoji: '💼',
    title: 'Business/Company',
    description: 'Corporate websites that project authority and handle enterprise workflows.',
    accent: 'bg-blue-900',
    light: 'bg-blue-50',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-[#f8fbff] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="text-center mb-20 scroll-reveal">
          <span className="inline-block px-6 py-2 rounded-full text-blue-600 text-xs font-black bg-white border border-blue-100 mb-8 uppercase tracking-[0.2em] shadow-sm">
            Expert Solutions
          </span>
          <h2 className="section-title text-4xl sm:text-6xl md:text-7xl mb-8">
            Tailored for Your <span className="text-blue-600">Industry</span>
          </h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            We don't do generic. We build industry-specific platforms that solve real problems and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative bg-white rounded-[3rem] p-10 border border-blue-50 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(30,58,138,0.1)] hover:-translate-y-2 scroll-reveal scroll-reveal-delay-${(i % 3) + 1}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.light} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm`}>
                {service.emoji}
              </div>
              <h3 className="font-display font-black text-2xl text-brand-navy mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-base font-medium mb-8">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                Explore More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Decorative accent dot */}
              <div className={`absolute top-10 right-10 w-2 h-2 rounded-full ${service.accent} opacity-20 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
