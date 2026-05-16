import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/B2GVbDZM/unnamed-13.jpg" 
          alt="Modern Apartment Banner"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-gold/20 text-brand-gold rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-brand-gold/30">
              Mukundapur's Most Trusted Agency
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6">
              Find Your Perfect Home <br/>
              <span className="italic font-light text-brand-gold">in Mukundapur</span>
            </h1>
            <p className="text-sm text-white/80 font-light tracking-wide max-w-sm mb-10 uppercase">
              Trusted Property Rent & Sale Services with Professional Guidance and Affordable Luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#properties" 
                className="btn-primary flex items-center justify-center gap-2"
              >
                View Properties <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="btn-secondary flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Contact Now <Phone className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
      >
        {[
          { label: 'Successful Deals', value: '500+' },
          { label: 'Happy Families', value: '350+' },
          { label: 'Properties Listed', value: '100+' },
          { label: 'Customer Rating', value: '4.9/5' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-3xl font-display font-bold text-brand-gold">{stat.value}</span>
            <span className="text-xs text-zinc-400 uppercase tracking-widest">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
