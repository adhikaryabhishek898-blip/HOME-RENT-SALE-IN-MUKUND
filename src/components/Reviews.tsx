import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Reviews() {
  return (
    <section className="section-padding bg-zinc-50 dark:bg-zinc-900/50">
      <div className="text-center mb-16">
        <div>
          <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-2 italic">Client Voices</h2>
        </div>
        <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest leading-relaxed mt-4">
          Experience Home Rent & Sale in Mukundapur through the eyes of our valued customers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {REVIEWS.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-900 p-10 shadow-sm border border-slate-100 dark:border-slate-800 relative group"
          >
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, star) => (
                <Star 
                  key={star} 
                  className={`w-3 h-3 ${star < review.rating ? 'text-brand-gold fill-brand-gold' : 'text-slate-200 dark:text-slate-700'}`} 
                />
              ))}
            </div>

            <p className="text-slate-600 dark:text-slate-300 italic mb-10 leading-relaxed font-serif text-lg">
              "{review.comment}"
            </p>

            <div className="flex items-center gap-4 pt-10 border-t border-slate-50 dark:border-slate-800">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all ring-1 ring-slate-100 dark:ring-slate-800"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-bold text-sm">{review.name}</h4>
                <p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Verified Resident</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Review Aggregator */}
      <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl">Google</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
          </div>
          <span className="text-sm font-medium">4.9/5</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl">MagicBricks</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
          </div>
          <span className="text-sm font-medium">4.8/5</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl">99Acres</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
          </div>
          <span className="text-sm font-medium">5.0/5</span>
        </div>
      </div>
    </section>
  );
}
