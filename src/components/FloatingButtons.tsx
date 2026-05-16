import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* Phone Button */}
      <motion.a
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        href="tel:7003340985"
        className="w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center shadow-2xl shadow-brand-blue/30 relative group"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          7003340985
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/917003340985"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 relative group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
        
        {/* Active Ping */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
        </span>
      </motion.a>
    </div>
  );
}
