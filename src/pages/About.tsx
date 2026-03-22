import { motion } from 'motion/react';
import { Lightbulb, Heart, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 mb-8">
                Chi Sono
              </p>
              <h1 className="font-display text-5xl lg:text-6xl font-bold mb-10 leading-tight text-zinc-900">
                Chi è Andrea<br />Scardaci
              </h1>
              <div className="space-y-5 text-sm text-gray-500 leading-relaxed">
                <p>
                  Mi chiamo <span className="font-bold text-zinc-900">Andrea Scardaci</span> e sono un web designer freelance con una missione chiara: portare le attività locali italiane ad avere una presenza online moderna, elegante e professionale.
                </p>
                <p>
                  Non mi limito a "fare siti". Creo vetrine digitali che riflettono l'anima della tua attività, che sia una palestra storica, un moderno studio di personal training o un centro yoga.
                </p>
                <p>
                  Oggi ho deciso di mettere la mia esperienza a tua disposizione, insegnandoti il processo esatto che utilizzo per creare siti web di successo.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 left-8 bottom-8 border border-violet-200 z-0" />
              <div className="relative z-10 overflow-hidden">
                <img
                  src="/me.png"
                  alt="Andrea Scardaci"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 px-7 py-5 z-20 hidden md:block shadow-xl">
                <div className="w-8 h-[2px] bg-violet-600 mb-4" />
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-900 mb-1.5">Web Designer</p>
                <p className="text-xs text-gray-400 tracking-[0.12em] uppercase">Freelance</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 pb-12 border-b border-gray-200">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 mb-4">
              Il Metodo
            </p>
            <h2 className="font-display text-5xl font-bold text-zinc-900 leading-tight">
              Il Mio Approccio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200">
            {[
              {
                icon: <Lightbulb className="text-violet-600" size={24} />,
                title: 'Innovazione',
                desc: 'Utilizzo gli strumenti più moderni per abbattere i tempi di produzione mantenendo una qualità altissima.',
              },
              {
                icon: <Heart className="text-violet-600" size={24} />,
                title: 'Semplicità',
                desc: 'I miei metodi sono facili da imparare per te e per i tuoi clienti. Niente complicazioni tecniche inutili.',
              },
              {
                icon: <Target className="text-violet-600" size={24} />,
                title: 'Risultati',
                desc: 'Ogni sito è progettato con un obiettivo: far crescere la tua attività e attirare nuovi clienti.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-10 lg:p-12 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''}`}
              >
                <div className="bg-violet-50 w-12 h-12 flex items-center justify-center mb-8">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
