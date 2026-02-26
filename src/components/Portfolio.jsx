import port1 from '../assets/images/port1.png'
import port2 from '../assets/images/port2.png'
import port3 from '../assets/images/port3.png'
import port4 from '../assets/images/port4.png'
import port5 from '../assets/images/port5.png'

const projects = [
    {
        title: 'QuickCredit Fintech',
        category: 'Loan & Finance',
        image: port1,
        description: 'Automated loan disbursement platform with real-time credit scoring.',
    },
    {
        title: 'LexLegal Partners',
        category: 'Legal/Attorney',
        image: port2,
        description: 'Premium law firm portal with automated appointment scheduling.',
    },
    {
        title: 'HopeBridge Africa',
        category: 'Charity/NGO',
        image: port3,
        description: 'Complete donation ecosystem with transparent impact tracking.',
    },
    {
        title: 'Titan Structures',
        category: 'Construction',
        image: port4,
        description: 'Enterprise resource portal for multi-million dollar construction projects.',
    },
    {
        title: 'LuxStyle Fashion',
        category: 'E-Commerce',
        image: port5,
        description: 'High-conversion fashion store with global payment integration.',
    },
    {
        title: 'CryptoEdge Exchange',
        category: 'Blockchain/BTC',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop',
        description: 'Real-time crypto tracking and secure wallet integration.',
    },
]

export default function Portfolio() {
    return (
        <section id="portfolio" className="relative py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 scroll-reveal">
                    <div>
                        <span className="inline-block px-6 py-2 rounded-full text-blue-600 text-xs font-black bg-blue-50 border border-blue-100 mb-8 uppercase tracking-[0.2em] shadow-sm">
                            Our Work
                        </span>
                        <h2 className="section-title text-4xl sm:text-6xl md:text-7xl">
                            Proven <span className="text-blue-600">Results</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 text-xl max-w-md font-medium leading-relaxed">
                        We don't just build websites; we build business engines. Explore our latest success stories.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {projects.map((project, i) => (
                        <div key={project.title} className="group relative scroll-reveal">
                            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] mb-8 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                    <span className="text-blue-400 font-black text-xs uppercase tracking-widest mb-2">{project.category}</span>
                                    <h3 className="text-white font-display font-black text-2xl">{project.title}</h3>
                                </div>
                            </div>
                            <div className="px-4">
                                <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-3 block">{project.category}</span>
                                <h3 className="text-brand-navy font-display font-black text-2xl mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{project.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="w-12 h-0.5 bg-blue-100 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
