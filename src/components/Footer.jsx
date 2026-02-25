export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-blue-50 pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-4xl tracking-tighter text-brand-navy">Code</span>
              <span className="font-serif italic font-medium text-4xl text-blue-600">Ade</span>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm font-medium">
              We engineer high-performance digital solutions that empower businesses to lead in their respective industries.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Connect with us</p>
              <a href="tel:09078083403" className="text-brand-navy font-black text-2xl hover:text-blue-600 transition-colors">
                09078083403
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-8">
            <h4 className="font-display font-black text-brand-navy uppercase tracking-[0.2em] text-xs">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Services', 'Why Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-500 hover:text-blue-600 text-base font-bold transition-all hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="font-display font-black text-brand-navy uppercase tracking-[0.2em] text-xs">Solutions</h4>
            <ul className="flex flex-col gap-4">
              {['Banking', 'E-Commerce', 'Professional', 'Real Estate'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-500 hover:text-blue-600 text-base font-bold transition-all hover:translate-x-1 inline-block">
                    {item} Systems
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-blue-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-400 text-sm font-bold">
              © {year} CodeAde International.
            </p>
            <p className="text-blue-300 text-[10px] uppercase font-black tracking-[0.4em]">
              Excellence by Engineering
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="text-slate-400 hover:text-blue-600 text-xs font-black uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-blue-600 text-xs font-black uppercase tracking-widest transition-colors">Terms</a>
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold cursor-pointer hover:bg-blue-600 hover:text-white transition-all">
              ↑
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
