import { useState, useEffect } from 'react';
import { Menu, X, Home, Phone, Info, LayoutGrid, Star, Image, MessageSquare, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Properties', icon: LayoutGrid, href: '#properties' },
    { name: 'About', icon: Info, href: '#about' },
    { name: 'Features', icon: Star, href: '#features' },
    { name: 'Gallery', icon: Image, href: '#gallery' },
    { name: 'Contact', icon: Phone, href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900 shadow-xl py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl tracking-tighter text-brand-gold">HOME RENT & SALE</span>
            <div className="flex items-center gap-2">
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">Mukundapur</span>
            </div>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-widest font-bold text-white/70 hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition-colors bg-white/5 text-white/70 hover:text-white"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a href="#contact" className="btn-primary py-2 px-6">Enquire</a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${scrolled ? 'bg-zinc-100 dark:bg-zinc-800 text-brand-black dark:text-white' : 'bg-white/20 text-white'}`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`${scrolled ? 'text-brand-black dark:text-white' : 'text-white'}`}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-brand-black border-b border-zinc-100 dark:border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 py-3 text-brand-black dark:text-white font-medium border-b border-zinc-100 dark:border-zinc-800 last:border-0"
                >
                  <link.icon className="w-5 h-5 text-brand-blue" />
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary text-center mt-4">Contact Agent</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
