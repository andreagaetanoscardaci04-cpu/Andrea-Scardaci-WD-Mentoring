import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Plus, Minus, CheckCircle2, Zap, Globe, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const marqueeItems = [
  'WEB DESIGN', 'MENTORING 1-1', 'SEO OTTIMIZZATO', 'DESIGN PREMIUM',
  'SITI PROFESSIONALI', 'BUSINESS LOCALE', 'AUTONOMIA TOTALE', 'RISULTATI REALI',
];

const features = [
  {
    num: '01',
    icon: <Zap size={26} className="text-violet-600" />,
    title: 'Velocità Estrema',
    desc: 'Tempi di caricamento ottimizzati al millisecondo. I tuoi visitatori non aspetteranno mai.',
  },
  {
    num: '02',
    icon: <Globe size={26} className="text-violet-600" />,
    title: 'Design Su Misura',
    desc: "Nessun template generico. Ogni sito è progettato attorno all'identità della tua attività.",
  },
  {
    num: '03',
    icon: <Search size={26} className="text-violet-600" />,
    title: 'SEO Incluso',
    desc: 'Struttura tecnica ottimizzata per Google fin dal primo giorno, senza costi aggiuntivi.',
  },
];

const steps = [
  {
    title: 'Parliamo Insieme',
    desc: "Capisco i tuoi obiettivi, la tua attività e cosa vuoi comunicare ai tuoi clienti. Una conversazione aperta e chiara.",
  },
  {
    title: 'Sessione Intensiva',
    desc: '2 ore in chiamata 1-1. Vedremo ogni passaggio tecnico e creativo, dal design alla pubblicazione online.',
  },
  {
    title: 'Autonomia Totale',
    desc: 'Ricevi la guida PDF completa con tutti i passaggi. Da quel momento sei completamente indipendente.',
  },
];

const includes = [
  'Sessione 1-1 da 2 ore su Zoom',
  'Guida PDF con tutti i passaggi',
  'Struttura SEO ottimizzata',
  'Design responsive mobile-first',
  'Consulenza su dominio e hosting',
];

const faqs = [
  {
    q: 'Quanto dura la sessione di mentoring?',
    a: 'La sessione è di 2 ore intensive via Zoom, durante le quali copriremo tutto il processo di creazione del tuo sito web, dalla struttura al design fino alla pubblicazione.',
  },
  {
    q: 'Ho bisogno di esperienza tecnica?',
    a: 'Assolutamente no. Il percorso è progettato per chi parte da zero. Ti guiderò attraverso ogni singolo passaggio in modo chiaro e comprensibile.',
  },
  {
    q: 'Cosa ricevo dopo la sessione?',
    a: 'Riceverai una guida PDF completa con tutti i passaggi dettagliati, più 7 giorni di supporto email per qualsiasi domanda post-sessione.',
  },
  {
    q: 'Come avviene il pagamento?',
    a: 'Il pagamento avviene in modo sicuro online prima della sessione. Accettiamo bonifico bancario e tutte le principali carte di credito/debito.',
  },
  {
    q: 'Posso richiedere un rimborso?',
    a: 'Sì, offriamo una garanzia soddisfazione. Se per qualsiasi motivo non sei soddisfatto, contattami entro 48 ore dalla sessione e troveremo una soluzione.',
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-20">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[calc(100vh-80px)] bg-white flex flex-col border-b border-gray-200">
        {/* Subtle violet glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 55% 70% at 80% 30%, #f5f3ff, #ffffff 70%)' }}
        />

        {/* Main grid */}
        <div className="relative flex-1 max-w-7xl mx-auto w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px] items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="pt-6 pb-20 lg:py-16 lg:pr-20 xl:pr-28"
          >
            <div className="inline-flex items-center gap-3 mb-4 lg:mb-10 border border-gray-200 px-4 py-2.5">
              <span className="w-1.5 h-1.5 bg-violet-600 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">
                Percorso Web Design · 2026
              </span>
            </div>

            <h1 className="font-display font-bold leading-[0.92] mb-8 text-zinc-900"
              style={{ fontSize: 'clamp(56px, 7vw, 96px)' }}>
              Crea il Sito<br />
              Web <em className="text-violet-600">Perfetto</em><br />
              per la Tua<br />
              Attività.
            </h1>

            {/* Mobile-only photo */}
            <div className="relative lg:hidden mb-10 overflow-hidden">
              <img
                src="/me.png"
                alt="Andrea Scardaci"
                className="w-full max-h-[260px] object-cover"
                style={{ objectPosition: 'center 14.2%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 border border-white/30 bg-black/20 backdrop-blur-sm px-2 py-1 flex items-center">
                <span className="text-[8px] text-white/70 font-bold tracking-[0.15em] uppercase leading-none">
                  Web Designer Freelance
                </span>
              </div>
            </div>

            <p className="text-base lg:text-lg text-gray-500 mb-12 max-w-md leading-relaxed">
              Ti insegno passo dopo passo come sviluppare un sito professionale per la tua attività. Autonomia totale, risultati concreti.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/lavoriamo-insieme"
                className="bg-zinc-900 text-white px-8 py-4 font-semibold text-sm tracking-wide hover:bg-violet-600 transition-colors flex items-center gap-3 group"
              >
                Inizia il Percorso
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/esempi"
                className="border border-gray-300 text-zinc-700 px-8 py-4 font-semibold text-sm tracking-wide hover:border-zinc-900 hover:text-zinc-900 transition-all"
              >
                Guarda i Lavori
              </Link>
            </div>
          </motion.div>

          {/* Right — Photo (desktop only) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:flex flex-col h-full justify-center py-12"
          >
            {/* Offset decorative frame */}
            <div className="absolute top-8 left-5 right-[-8px] bottom-8 border border-violet-200 z-0" />
            <div className="relative z-10 overflow-hidden ml-10">
              <img
                src="/me.png"
                alt="Andrea Scardaci"
                className="w-full aspect-[3/4] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 border border-white/30 bg-black/20 backdrop-blur-sm px-3 py-1.5">
                <span className="text-[10px] text-white font-bold tracking-[0.18em] uppercase">
                  Web Designer Freelance
                </span>
              </div>
            </div>
            {/* Availability badge */}
            <div className="absolute -bottom-4 left-6 bg-white border border-gray-200 px-6 py-4 z-20 shadow-xl">
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-gray-400 mb-1.5">
                Disponibilità
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-zinc-900">Posti Disponibili</span>
              </div>
            </div>
          </motion.div>
        </div>

      </section>

      {/* ─── MARQUEE ─── */}
      <section className="overflow-hidden py-4 bg-violet-600">
        <div className="animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex flex-shrink-0 items-center">
              {marqueeItems.map((item, i) => (
                <span key={i} className="inline-flex items-center mx-8 whitespace-nowrap">
                  <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">{item}</span>
                  <span className="text-violet-300 ml-8 text-lg">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-12 border-b border-gray-200 gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 mb-4">
                01 — Il Metodo
              </p>
              <h2 className="font-display text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight">
                Cosa Include<br />il Percorso
              </h2>
            </div>
            <Link
              to="/lavoriamo-insieme"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-violet-600 transition-colors border-b border-gray-300 hover:border-violet-600 pb-0.5"
            >
              Scopri tutto <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 lg:p-12 group hover:bg-violet-50 transition-colors cursor-default ${
                  i < 2 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''
                }`}
              >
                <span className="font-display text-8xl font-bold text-gray-400 group-hover:text-violet-600 transition-colors block mb-4 leading-none select-none">
                  {f.num}
                </span>
                <div className="mb-6">{f.icon}</div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-32 bg-[#08080F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-400 mb-6">
            02 — Come Funziona
          </p>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-white mb-20 leading-tight">
            Il Processo in<br />3 Semplici Passi
          </h2>
          <div>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr_1.6fr] items-start md:items-center gap-6 md:gap-12 py-10 border-t border-white/10 hover:bg-white/[0.025] transition-colors -mx-6 px-6 lg:-mx-8 lg:px-8 cursor-default"
              >
                <span className="font-display text-5xl md:text-6xl font-bold text-white/15 leading-none pt-1 select-none">
                  0{i + 1}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm col-span-2 md:col-span-1">
                  {step.desc}
                </p>
              </motion.div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>

      {/* ─── PRODUCT ─── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 mb-16 text-center">
            03 — Il Prodotto
          </p>
          <div className="border border-gray-200 grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-200">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-10 leading-tight text-zinc-900">
                Pacchetto Mentoring<br />Completo
              </h2>
              <ul className="space-y-5 mb-12">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-700">
                    <span className="w-5 h-5 bg-violet-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={12} className="text-white" />
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 tracking-[0.12em] uppercase">
                Accesso immediato dopo il pagamento
              </p>
            </div>

            {/* Right — Pricing */}
            <div className="p-10 lg:p-16 bg-[#08080F] text-white flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-400 mb-10">
                  Investimento
                </p>
                <div className="flex flex-col items-start">
                  <div className="relative inline-block -mb-6 lg:-mb-12">
                    <span className="font-display text-5xl font-bold text-red-400/70">500 EUR</span>
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
                  <span
                    className="font-display font-bold text-white leading-none"
                    style={{ fontSize: 'clamp(88px, 12vw, 140px)' }}
                  >
                    300
                  </span>
                </div>
                <p className="font-display text-3xl text-white font-light mb-16 mt-4">EUR</p>
              </div>
              <div>
                <a
                  href="https://buy.stripe.com/eVqeVd7m64OF1iK3M05Ne02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-violet-600 text-white py-5 font-bold text-sm tracking-wide hover:bg-violet-500 transition-colors flex items-center justify-center gap-3 group mb-3"
                >
                  Acquista Ora
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-xs text-gray-600 text-center">
                  Pagamento sicuro · Posti limitati
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <section className="pt-32 pb-16 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -top-4 -left-4 right-8 bottom-8 border border-violet-200 z-0" />
              <div className="relative z-10 overflow-hidden">
                <img
                  src="/imageme1.png.png"
                  alt="Andrea Scardaci"
                  className="w-full aspect-square lg:aspect-[4/5] object-cover"
                  style={{ objectPosition: 'center 20%', transform: 'scale(1.1)', transformOrigin: 'center 20%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 mb-8">
                04 — Chi Sono
              </p>
              <h2 className="font-display text-5xl lg:text-6xl font-bold mb-8 leading-tight text-zinc-900">
                Andrea<br />Scardaci
              </h2>
              <div className="space-y-5 text-gray-500 leading-relaxed mb-12 text-sm">
                <p>
                  Web designer freelance con una missione chiara: portare le attività locali italiane ad avere una presenza online moderna, elegante e professionale.
                </p>
                <p>
                  Non mi limito a "fare siti". Creo vetrine digitali che riflettono l'anima della tua attività. Oggi metto la mia esperienza a tua disposizione.
                </p>
              </div>
              <Link
                to="/chi-sono"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-violet-600 transition-colors border-b border-zinc-900 hover:border-violet-600 pb-0.5"
              >
                Scopri di più <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="pt-16 pb-32 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 mb-6">
            05 — FAQ
          </p>
          <h2 className="font-display text-5xl font-bold mb-16 leading-tight text-zinc-900">
            Domande<br />Frequenti
          </h2>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-7 flex items-start justify-between text-left group"
                >
                  <span className="text-base font-semibold text-zinc-900 group-hover:text-violet-600 transition-colors pr-8 leading-snug">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 mt-0.5 text-gray-400 group-hover:text-violet-600 transition-colors">
                    {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pb-7 text-gray-500 text-sm leading-relaxed overflow-hidden"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-32 bg-[#08080F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            className="border border-white/10 p-12 lg:p-24"
          >
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-500 mb-10">
                Inizia Ora
              </p>
              <h2
                className="font-display font-bold text-white leading-[0.9] mb-12"
                style={{ fontSize: 'clamp(52px, 8vw, 96px)' }}
              >
                Pronti a<br />
                <em className="italic text-violet-500">Iniziare?</em>
              </h2>
              <p className="text-gray-400 text-lg mb-14 max-w-xl leading-relaxed">
                Raccontami la tua attività. Ti mostrerò come costruire la tua presenza online nel modo giusto, con il metodo che funziona davvero.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://buy.stripe.com/eVqeVd7m64OF1iK3M05Ne02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-violet-600 text-white px-10 py-5 font-bold text-sm tracking-wide hover:bg-violet-500 transition-colors flex items-center gap-3 group"
                >
                  Acquista il Percorso
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/contatti"
                  className="border border-white/20 text-white px-10 py-5 font-bold text-sm tracking-wide hover:bg-white/5 transition-colors"
                >
                  Contattami
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
