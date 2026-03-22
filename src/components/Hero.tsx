import { motion } from 'motion/react';
import { ArrowDown, Download, Mail, Phone, Linkedin } from 'lucide-react';

export default function Hero({ data }: { data: any }) {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-emerald-400 font-mono text-sm md:text-base mb-4 tracking-wider uppercase">
          {data.location}
        </h2>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 mb-6">
          <motion.div 
            className="relative w-24 h-24 md:w-32 md:h-32 shrink-0"
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            {/* Glowing background blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            
            {/* Image container */}
            <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-emerald-500/50 to-cyan-500/50 backdrop-blur-sm border border-white/10">
              <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/akash/400/400' }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
            {data.name.split(' ')[0]} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              {data.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>
        </div>

        <h3 className="text-xl md:text-2xl text-zinc-400 font-medium mb-8 max-w-2xl leading-relaxed">
          {data.title}
        </h3>
        <p className="text-zinc-500 md:text-lg max-w-3xl mb-12 leading-relaxed">
          {data.summary}
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a href="#experience" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] flex items-center gap-2">
            View Experience <ArrowDown size={18} />
          </a>
          <a href="/Akash_Anilkumar_Nair_Resume.pdf" download="Akash_Nair_Resume.pdf" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center gap-2 backdrop-blur-sm">
            Download Resume <Download size={18} />
          </a>
        </div>

        <div className="flex gap-6 text-zinc-400">
          <a href={`mailto:${data.email}`} className="hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
            <Mail size={20} /> <span className="hidden sm:inline">{data.email}</span>
          </a>
          <a href={`tel:${data.phone}`} className="hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
            <Phone size={20} /> <span className="hidden sm:inline">{data.phone}</span>
          </a>
          <a href={`https://${data.links.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
            <Linkedin size={20} /> <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
