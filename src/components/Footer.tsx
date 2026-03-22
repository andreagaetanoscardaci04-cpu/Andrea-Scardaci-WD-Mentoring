import { Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'Chi Sono', path: '/chi-sono' },
    { label: 'Esempi', path: '/esempi' },
    { label: 'Lavoriamo Insieme', path: '/lavoriamo-insieme' },
    { label: 'Contatti', path: '/contatti' },
  ];

  return (
    <footer className="bg-[#08080F] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="pt-20 pb-16 border-b border-white/10 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] uppercase mb-8">
              Andrea <span className="text-violet-400">Scardaci</span>
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-10">
              Ti insegno a creare siti web professionali per la tua attività. Alta qualità, design moderno, autonomia garantita.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/andrea.webdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:border-violet-400 hover:text-violet-400 transition-colors cursor-pointer"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?to=andreascardacibusiness@gmail.com&fs=1&tf=cm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:border-violet-400 hover:text-violet-400 transition-colors cursor-pointer"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-600 mb-8">
              Navigazione
            </p>
            <ul className="space-y-4 text-sm text-gray-500">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-violet-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-600 mb-8">
              Contatti
            </p>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a href="https://mail.google.com/mail/u/0/?to=andreascardacibusiness@gmail.com&fs=1&tf=cm" className="flex items-start gap-3 hover:text-violet-400 transition-colors cursor-pointer">
                  <Mail size={15} className="text-violet-400 mt-0.5 flex-shrink-0" />
                  <span>andreascardacibusiness@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+393922965248" className="flex items-center gap-3 hover:text-violet-400 transition-colors cursor-pointer">
                  <Phone size={15} className="text-violet-400 flex-shrink-0" />
                  <span>+39 392 296 5248</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-700 gap-4">
          <p>© 2026 Andrea Scardaci. Tutti i diritti riservati.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
