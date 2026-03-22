import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const projects: { title: string; category: string; desc: string; image: string; url?: string }[] = [
    {
      title: 'Sito web per Palestra',
      category: 'PALESTRA',
      desc: 'Un design moderno e dinamico per una palestra che vuole mostrare i propri corsi e istruttori.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
      url: 'https://www.palestresalvonicotra.com/',
    },
    {
      title: 'Sito web per Centro Fitness',
      category: 'CENTRO FITNESS',
      desc: 'Completo di tutte le informazioni su abbonamenti, servizi e tour virtuale.',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
      url: 'https://elite-fitness-palermo-black-version.vercel.app/',
    },
    {
      title: 'Sito Web per Studio PT',
      category: 'PERSONAL TRAINING',
      desc: 'Elegante e professionale, focalizzato sulla presentazione dei coach e dei risultati.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
      url: 'https://fitness-life-studio.vercel.app/',
    },
    {
      title: 'Sito web per Studio Yoga',
      category: 'YOGA & PILATES',
      desc: 'Un design zen e pulito per trasmettere calma e professionalità.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
      url: 'https://modo-firenze.vercel.app/',
    },
    {
      title: 'Sito Web per Studio Fiscale',
      category: 'STUDIO FISCALE',
      desc: 'Un sito professionale per uno studio fiscale, con presentazione dei servizi e contatti.',
      image: '/studio fiscale.png',
      url: 'https://www.fisco3.it/',
    },
    {
      title: 'Sito Web per Steakhouse',
      category: 'ATTIVITÀ LOCALE',
      desc: 'Perfetto per negozi o studi professionali che vogliono una presenza online all\'altezza.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
      url: 'https://steakhouse-macello-tv38.vercel.app/',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 pb-12 border-b border-gray-200"
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 mb-6">
              Esempi di Lavoro
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1 className="font-display text-5xl lg:text-6xl font-bold leading-tight text-zinc-900">
                Esempi di<br />Siti Web
              </h1>
              <p className="text-base text-gray-500 max-w-md leading-relaxed">
                Una selezione di progetti realizzati da me che mostrano le possibilità del metodo applicato a diversi settori.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />
                </div>
                <div className="p-8 lg:p-10">
                  <p className="text-violet-600 font-bold text-xs tracking-[0.2em] uppercase mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{project.desc}</p>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold tracking-wide uppercase group-hover:text-violet-600 transition-colors"
                    >
                      Visualizza sito <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 text-xs font-bold tracking-wide uppercase text-gray-300 cursor-default">
                      Prossimamente <ArrowUpRight size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
