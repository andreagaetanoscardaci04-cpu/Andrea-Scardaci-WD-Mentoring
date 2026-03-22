import { motion } from 'motion/react';
import { CheckCircle2, Clock, FileText, User, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function WorkWithMe() {
  return (
    <div className="pt-20">
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-24"
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 mb-6">
              Lavoriamo Insieme
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-8 leading-tight text-zinc-900">
              Iniziamo a<br />Lavorare Insieme
            </h1>
            <p className="text-base text-gray-500 leading-relaxed">
              Il processo è semplice e trasparente. Ti insegno tutto quello che so per renderti completamente indipendente nella creazione del tuo sito web.
            </p>
          </motion.div>

          {/* Animated divider */}
          <div className="flex items-center gap-6 mb-16">
            <motion.div
              whileInView={{ scaleX: 1 }}
              initial={{ scaleX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="flex-1 h-px bg-gray-200 origin-left"
            />
            <motion.span
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 whitespace-nowrap"
            >
              Il Percorso
            </motion.span>
            <motion.div
              whileInView={{ scaleX: 1 }}
              initial={{ scaleX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="flex-1 h-px bg-gray-200 origin-right"
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 mb-24">
            {[
              {
                icon: <User className="text-violet-600" size={22} />,
                num: '01',
                title: 'Parliamo della Tua Attività',
                desc: 'Capisco i tuoi obiettivi, il tuo stile e cosa vuoi comunicare ai tuoi clienti fisici.',
              },
              {
                icon: <Clock className="text-violet-600" size={22} />,
                num: '02',
                title: 'Sessione 1:1 Intensiva',
                desc: '2 ore dedicate esclusivamente a te. Vedremo ogni singolo passaggio tecnico e creativo.',
              },
              {
                icon: <FileText className="text-violet-600" size={22} />,
                num: '03',
                title: 'Guida PDF Completa',
                desc: 'Al termine riceverai le istruzioni scritte per non dimenticare nulla del processo.',
              },
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 lg:p-12">
                <span className="font-display text-7xl font-bold text-zinc-900 block mb-4 leading-none select-none">
                  {step.num}
                </span>
                <div className="bg-violet-50 w-11 h-11 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* What you learn + Pricing */}
          <div className="border border-gray-200 grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-200">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-10 leading-tight text-zinc-900">
                Cosa Imparerai<br />a Fare
              </h2>
              <ul className="space-y-5">
                {[
                  'Scegliere e registrare il dominio perfetto',
                  'Strutturare le pagine per convertire i visitatori',
                  'Design moderno e responsive (mobile-first)',
                  'Ottimizzazione SEO per le ricerche locali',
                  'Gestione autonoma di testi e immagini',
                  'Pubblicazione e manutenzione del sito',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-700">
                    <span className="w-5 h-5 bg-violet-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={12} className="text-white" />
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 lg:p-16 bg-[#08080F] text-white flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-400 mb-8">
                  Offerta Mentoring
                </p>
                <h3 className="font-display text-4xl font-bold mb-10 leading-tight">
                  Pacchetto<br />Completo
                </h3>
                <div className="space-y-0 mb-10">
                  {[
                    'Consulenza 1:1 (2 Ore)',
                    'Guida PDF Istruzioni',
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/10">
                      <span className="text-gray-400 text-sm">{item}</span>
                      <span className="font-bold text-violet-400 text-sm">Incluso</span>
                    </div>
                  ))}
                </div>
                <div className="mb-8 relative flex flex-col items-start">
                  <div className="relative inline-block -mb-[1.3rem]">
                    <span className="text-red-400/70"><span className="font-display text-[2.2rem] font-bold">500 </span><span className="font-sans text-xl">EUR</span></span>
                    <div className="absolute inset-0 flex items-center pointer-events-none">
                      <div
                        className="w-full h-[1.5px]"
                        style={{
                          transform: 'rotate(-10deg)',
                          background: 'linear-gradient(to right, transparent, #f87171cc, transparent)',
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <span className="font-display text-7xl font-bold text-white">300</span>
                    <span className="text-2xl text-gray-500 ml-1.5">EUR</span>
                  </div>
                </div>
              </div>
              <a
                href="https://buy.stripe.com/eVqeVd7m64OF1iK3M05Ne02"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-violet-600 text-white py-4 font-bold text-sm tracking-wide hover:bg-violet-500 transition-colors flex items-center justify-center gap-3 group"
              >
                Prenota la Tua Sessione
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
