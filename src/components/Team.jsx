import team1 from '../assets/images/team1.png'
import team2 from '../assets/images/team2.png'
import team3 from '../assets/images/avatar3.png' // Using previous avatar as well

const team = [
    {
        name: 'Tunde Adedeji',
        role: 'Founder & Lead Engineer',
        image: team1,
        expertise: ['System Architecture', 'Security'],
    },
    {
        name: 'Chinwe Okoro',
        role: 'Senior UI/UX Designer',
        image: team2,
        expertise: ['Product Design', 'Visual Branding'],
    },
    {
        name: 'Kunle Afolayan',
        role: 'Full-Stack Developer',
        image: team3,
        expertise: ['Next.js', 'Fintech APIs'],
    },
]

export default function Team() {
    return (
        <section id="team" className="relative py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20 scroll-reveal">
                    <span className="inline-block px-6 py-2 rounded-full text-blue-600 text-xs font-black bg-blue-50 border border-blue-100 mb-8 uppercase tracking-[0.2em] shadow-sm">
                        Our Experts
                    </span>
                    <h2 className="section-title text-6xl md:text-7xl mb-8">
                        The Minds Behind <br />
                        <span className="text-blue-600">The Excellence</span>
                    </h2>
                    <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        We are a specialized team of industry experts committed to architectural perfection in every build.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {team.map((member, i) => (
                        <div key={member.name} className="group scroll-reveal">
                            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] mb-8 bg-slate-100 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Social badges or expertise floating */}
                                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    {member.expertise.map(skill => (
                                        <span key={skill} className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center md:text-left px-4">
                                <h3 className="text-brand-navy font-display font-black text-2xl mb-2 uppercase tracking-tight group-hover:text-blue-600 transition-colors">{member.name}</h3>
                                <p className="text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-4">{member.role}</p>
                                <div className="flex justify-center md:justify-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
