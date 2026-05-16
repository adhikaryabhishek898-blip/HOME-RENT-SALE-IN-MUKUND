import { Home, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8">
              <span className="font-serif font-bold text-xl tracking-tighter text-brand-gold">HOME RENT & SALE</span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">Mukundapur, Kolkata</p>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm">
              Your trusted partner for quality property rentals and sales in Mukundapur, Kolkata. Delivering excellence since 2014.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-brand-gold hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8 italic">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Property Listings', 'About Us', 'Features', 'Gallery', 'Customer Reviews'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-slate-400 hover:text-brand-gold transition-colors block text-xs uppercase tracking-widest py-1 font-bold">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8 italic">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-slate-400 text-xs uppercase tracking-widest leading-relaxed">Mukundapur, Kolkata, 700099</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-slate-400 text-xs uppercase tracking-widest leading-relaxed">+91 7003340985</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8 italic">Availability</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-400 text-xs uppercase tracking-widest">Mon - Sun</span>
                <span className="text-white font-bold text-xs uppercase tracking-widest">24 Hours</span>
              </li>
            </ul>
            <div className="mt-8 p-6 bg-white/5 border border-white/10 text-center">
              <span className="text-green-400 text-[10px] uppercase font-bold tracking-widest flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                We are Open Now
              </span>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] uppercase tracking-widest font-medium">
            © {currentYear} HOME RENT & SALE IN MUKUNDAPUR. TRUSTED PROPERTY SERVICES.
          </p>
        </div>
      </div>
    </footer>
  );
}
