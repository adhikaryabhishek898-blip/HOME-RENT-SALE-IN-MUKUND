import { useState } from 'react';
import { PROPERTIES } from '../constants';
import { Bed, MapPin, Check, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function PropertyList() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', '1 BHK', '2 BHK', 'Fully Furnished', 'Family Apartment', 'Sale'];

  const filteredProperties = filter === 'All' 
    ? PROPERTIES 
    : filter === 'Sale' 
      ? PROPERTIES.filter(p => p.type === 'Sale')
      : PROPERTIES.filter(p => p.category === filter);

  return (
    <section id="properties" className="section-padding bg-zinc-50 dark:bg-zinc-900/50">
      <div className="flex justify-between items-end mb-10 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Featured Listings</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-2 italic">Luxury Units</h2>
        </div>
        
        {/* Category Filter */}
        <div className="hidden md:flex flex-wrap gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${filter === cat ? 'text-brand-gold border-b border-brand-gold pb-1' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProperties.map((property) => (
            <motion.div
              layout
              key={property.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="premium-card group"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`editorial-tag ${property.type === 'Sale' ? 'bg-brand-gold text-white border-brand-gold' : ''}`}>
                    {property.type}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white dark:bg-slate-900 px-4 py-2 shadow-sm border border-slate-100 dark:border-slate-800">
                  <span className="text-brand-gold font-serif font-bold text-lg">{property.price}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm font-bold line-clamp-1">{property.title}</h3>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">{property.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-slate-500 uppercase">
                      <Bed className="w-3 h-3 text-brand-gold" />
                      <span className="text-[9px] font-bold tracking-widest">{property.bedrooms} Bed</span>
                    </div>
                  </div>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#contact" 
                    className="text-[10px] uppercase font-bold text-brand-gold hover:underline"
                  >
                    Details
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="text-center mt-12">
        <button className="btn-secondary">View All Properties</button>
      </div>
    </section>
  );
}
