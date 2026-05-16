import { FEATURES } from '../constants';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="flex justify-between items-end mb-16 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div>
          <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-2 italic">Professional Pillars</h2>
        </div>
        <p className="max-w-md text-right text-slate-500 text-xs leading-relaxed hidden lg:block uppercase tracking-wider">
          Market expertise and modern technology for a seamless experience.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {FEATURES.map((feature, i) => {
          const IconComponent = (Icons as any)[feature.iconName];
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white shadow-lg">
                <IconComponent className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed uppercase tracking-wide">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Trust Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-20 p-12 bg-slate-900 overflow-hidden relative group"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-3 font-bold">Quick Inquiry</h3>
            <p className="text-3xl font-serif text-white mb-2 leading-tight">Our agents are available <span className="italic">24/7</span> for your dream home.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input type="text" placeholder="Phone Number" className="bg-white/10 border-white/20 border px-6 py-4 text-xs text-white uppercase tracking-widest flex-1 min-w-[200px]" />
            <button className="bg-brand-gold px-10 py-4 text-xs uppercase tracking-widest font-bold text-white hover:bg-brand-accent transition-colors">Go</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
