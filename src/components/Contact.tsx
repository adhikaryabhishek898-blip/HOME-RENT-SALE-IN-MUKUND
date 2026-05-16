import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-gold"></div>
            <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-8 leading-tight italic">Registry Inquiry</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg leading-relaxed uppercase tracking-wider text-xs">
            Professional consultation for Mukundapur's most prestigious units.
          </p>

          <div className="space-y-12">
            <div className="flex gap-8 group">
              <div className="text-brand-gold pt-1">
                <span className="text-[10px] font-bold uppercase tracking-widest border border-brand-gold px-2 py-1">01</span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl mb-1 italic">Voice</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm tracking-widest font-bold uppercase">+91 7003340985</p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="text-brand-gold pt-1">
                <span className="text-[10px] font-bold uppercase tracking-widest border border-brand-gold px-2 py-1">02</span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl mb-1 italic">Location</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm tracking-widest font-bold uppercase">Mukundapur, Kolkata, WB</p>
              </div>
            </div>

            <div className="flex gap-8 group text-brand-gold">
              <div className="text-brand-gold pt-1">
                <span className="text-[10px] font-bold uppercase tracking-widest border border-brand-gold px-2 py-1">03</span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl mb-1 italic underline">Digital</h4>
                <a href="https://wa.me/917003340985" className="text-sm tracking-widest font-bold uppercase block">WhatsApp Messenger</a>
              </div>
            </div>
          </div>

          <div className="mt-16 grayscale group-hover:grayscale-0 transition-all duration-700 h-64 border border-slate-100 dark:border-slate-800 shadow-sm relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14744.157858485203!2d88.402636!3d22.484218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02714856f6c2f7%3A0xe9602410a8c279c6!2sMukundapur%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1715848834456!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 p-12 shadow-2xl relative"
        >
          <div className="mb-12">
            <h3 className="text-2xl font-serif text-white italic mb-4">Request a Prospectus</h3>
            <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Secure your future in Mukundapur today.</p>
          </div>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block italic">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white text-xs uppercase tracking-widest outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block italic">Telephone</label>
                <input type="tel" className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white text-xs uppercase tracking-widest outline-none focus:border-brand-gold transition-colors" />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block italic">Selection</label>
              <select className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white text-xs uppercase tracking-widest outline-none focus:border-brand-gold transition-colors appearance-none">
                <option className="bg-slate-900">Residential 1 BHK</option>
                <option className="bg-slate-900">Residential 2 BHK</option>
                <option className="bg-slate-900">Commercial / Sale</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block italic">Inquiry Details</label>
              <textarea rows={3} className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white text-xs uppercase tracking-widest outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
            </div>

            <button type="button" className="w-full bg-brand-gold text-white uppercase text-[10px] font-bold tracking-[0.3em] py-6 hover:bg-brand-accent transition-all shadow-xl">
              Dispatch Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
