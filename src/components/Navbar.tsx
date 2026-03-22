import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chi Sono', path: '/chi-sono' },
    { name: 'Esempi', path: '/esempi' },
    { name: 'Lavoriamo Insieme', path: '/lavoriamo-insieme' },
    { name: 'Contatti', path: '/contatti' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="text-xs font-bold tracking-[0.22em] uppercase">
            Andrea <span className="text-violet-600">Scardaci</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-medium tracking-wide transition-colors ${
                  pathname === link.path
                    ? 'text-violet-600'
                    : 'text-gray-500 hover:text-zinc-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/lavoriamo-insieme"
              className="bg-zinc-900 text-white px-5 py-2.5 text-xs font-bold tracking-[0.12em] uppercase hover:bg-violet-600 transition-colors flex items-center gap-2 group"
            >
              Inizia Ora
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-violet-600 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-4 text-sm font-medium border-b border-gray-100 transition-colors ${
                  pathname === link.path
                    ? 'text-violet-600'
                    : 'text-gray-700 hover:text-violet-600'
                }`}
              >
                {link.name}
                <ArrowRight size={14} className="text-gray-300" />
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link
                to="/lavoriamo-insieme"
                onClick={() => setIsOpen(false)}
                className="w-full bg-zinc-900 text-white py-3.5 font-bold text-sm flex items-center justify-center gap-2 hover:bg-violet-600 transition-colors tracking-wide"
              >
                Inizia Ora <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
