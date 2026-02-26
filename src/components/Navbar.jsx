import { useState, useEffect } from 'react'
import WhatsAppButton from './WhatsAppButton'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Team', href: '#team' },
        { name: 'FAQ', href: '#faq' },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm' : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Logo matching the graphic: Code (Navy) Ade (Blue Script) */}
                <a href="#home" className="flex items-center gap-1 group relative z-50">
                    <span className="font-display font-black text-2xl tracking-tighter text-brand-navy">Code</span>
                    <span className="font-serif italic font-medium text-2xl text-blue-600">Ade</span>
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="text-slate-600 hover:text-blue-600 text-sm font-bold transition-colors"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-4">
                        <WhatsAppButton className="!py-2 !px-4 text-xs" />
                        <a href="#contact" className="btn-contact !px-6 !py-2.5">
                            Contact &gt;
                        </a>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden relative z-50 p-2 text-brand-navy"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
                            <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="pt-24 px-6 flex flex-col gap-8">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-4xl font-display font-black text-brand-navy hover:text-blue-600 transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="pt-8 border-t border-blue-50">
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-4">Chat with us</p>
                        <WhatsAppButton className="w-full justify-center !py-4" />
                    </div>
                    <div className="pt-4">
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-4">Get in touch</p>
                        <a href="tel:09078083403" className="text-2xl font-black text-brand-navy">09078083403</a>
                    </div>
                    <a
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="btn-primary justify-center !py-5"
                    >
                        Start Your Project
                    </a>
                </div>
            </div>
        </header>
    )
}
