import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          <div className="lg:pt-4">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 mb-6">
              Scrivi un Messaggio
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight text-zinc-900">
              Raccontami il<br />Tuo Progetto
            </h2>
            <p className="text-gray-500 mb-12 text-sm leading-relaxed">
              Compila il modulo con i tuoi dati. Ti ricontatterò entro 24 ore per chiarire ogni tuo dubbio prima di iniziare il percorso insieme.
            </p>
            <ul className="space-y-5">
              {[
                'Consulenza iniziale gratuita',
                'Percorso chiaro e senza sorprese',
                'Supporto continuo post-chiamata',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 text-sm font-medium">
                  <span className="w-5 h-5 bg-violet-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={12} className="text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 p-8 lg:p-12"
          >
            <form action="https://formspree.io/f/xlgpkkpd" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-2.5">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Il tuo nome"
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 text-sm focus:outline-none focus:border-violet-400 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-2.5">
                    Attività
                  </label>
                  <input
                    type="text"
                    name="attività"
                    placeholder="Nome della tua attività"
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 text-sm focus:outline-none focus:border-violet-400 focus:bg-white transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-2.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="la-tua@email.com"
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 text-sm focus:outline-none focus:border-violet-400 focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-2.5">
                  Messaggio
                </label>
                <textarea
                  rows={5}
                  name="messaggio"
                  placeholder="Raccontami brevemente di cosa hai bisogno..."
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 text-sm focus:outline-none focus:border-violet-400 focus:bg-white transition-all resize-none"
                />
              </div>
              <button className="w-full bg-zinc-900 text-white py-4 font-bold text-sm tracking-wide hover:bg-violet-600 transition-colors flex items-center justify-center gap-3 group">
                Richiedi Informazioni
                <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
