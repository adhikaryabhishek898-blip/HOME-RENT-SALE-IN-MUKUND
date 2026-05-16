import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop', title: 'Living Room', category: 'Interior' },
    { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop', title: 'Bathroom', category: 'Bath' },
    { url: 'https://images.unsplash.com/photo-1556912177-c54831154701?q=80&w=2070&auto=format&fit=crop', title: 'Modular Kitchen', category: 'Kitchen' },
    { url: 'https://images.unsplash.com/photo-1505691938895-1758d7dde511?q=80&w=2070&auto=format&fit=crop', title: 'Master Bedroom', category: 'Bedroom' },
    { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop', title: 'Study Corner', category: 'Workspace' },
    { url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop', title: 'Entrance Hall', category: 'Lobby' },
  ];

  return (
    <section id="gallery" className="section-padding">
      <div className="flex justify-between items-end mb-16 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div>
          <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Visual Exploration</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-2 italic">Refined Living</h2>
        </div>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden bg-slate-900 cursor-pointer"
          >
            <img 
              src={image.url} 
              alt={image.title}
              className="w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-brand-gold text-[8px] font-bold uppercase tracking-[0.3em] mb-2">{image.category}</span>
              <h4 className="text-white font-serif font-bold text-xl">{image.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
