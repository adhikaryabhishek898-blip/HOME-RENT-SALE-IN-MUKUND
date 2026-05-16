import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Gauge } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Award, title: 'Local Expertise', text: 'Deep knowledge of Mukundapur real estate.' },
    { icon: Users, title: 'Customer First', text: 'Professional and friendly behavior at all steps.' },
    { icon: Gauge, title: 'Fast Handover', text: 'Smooth and efficient property transition process.' },
    { icon: CheckCircle2, title: 'Verified Deals', text: 'Transparent documentation and authentic listings.' },
  ];

  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 overflow-hidden shadow-2xl border-8 border-slate-50 dark:border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop" 
              alt="About Our Team"
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -left-6 bg-slate-900 p-8 shadow-2xl z-20"
          >
            <div className="text-4xl font-serif font-bold text-brand-gold mb-1">10+</div>
            <div className="text-[10px] font-bold text-white uppercase tracking-widest">Years of Trust</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-gold"></div>
              <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Our Heritage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-6 leading-tight">
              A Legacy of <span className="italic font-light">Trust</span> <br/> in Mukundapur
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 uppercase tracking-wide">
              HOME RENT & SALE IN MUKUNDAPUR has been the preferred choice for property seekers in Kolkata for over a decade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {highlights.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center text-brand-gold font-bold">
                  <span className="text-[10px]">0{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-widest leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <motion.div 
            className="mt-12 p-8 bg-slate-50 dark:bg-slate-900 border-l-4 border-brand-gold relative"
          >
            <span className="absolute top-4 right-6 text-6xl text-slate-200 dark:text-slate-800 font-serif opacity-50">"</span>
            <p className="italic text-slate-700 dark:text-zinc-300 font-serif text-lg leading-relaxed relative z-10">
              Our mission is to help every individual find a place they can truly call home, with zero stress and complete honesty.
            </p>
            <p className="font-bold mt-4 text-brand-gold text-[10px] uppercase tracking-widest relative z-10">— Abhishek Roy, CEO</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
