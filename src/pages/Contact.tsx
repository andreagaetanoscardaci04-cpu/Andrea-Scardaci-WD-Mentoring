import { motion } from 'motion/react';
import { Mail, Phone, Instagram } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mb-20"
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 mb-6">
              Contatti
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 leading-tight text-zinc-900">
              Contattami
            </h1>
            <p className="text-base text-gray-500 leading-relaxed">
              Hai domande sul percorso o vuoi semplicemente salutarmi? Sono qui per aiutarti.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {[
              {
                icon: <Mail size={22} />,
                title: 'Email',
                value: 'andreascardacibusiness@gmail.com',
                href: 'https://mail.google.com/mail/u/0/?to=andreascardacibusiness@gmail.com&fs=1&tf=cm',
              },
              {
                icon: <Phone size={22} />,
                title: 'Telefono',
                value: '+39 392 296 5248',
                href: 'tel:+393922965248',
              },
              {
                icon: <Instagram size={22} />,
                title: 'Social',
                value: '@andrea.webdesign',
                href: 'https://www.instagram.com/andrea.webdesign',
              },
            ].map((item, i) => (
              <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="bg-white p-10 lg:p-12 block hover:bg-violet-50 transition-colors">
                <div className="bg-violet-50 w-12 h-12 flex items-center justify-center mb-6 text-violet-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
