import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';

export default function Achievements({ data }: { data: any[] }) {
  return (
    <section id="achievements" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Achievements</h2>
        <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy size={64} />
            </div>
            <h3 className="text-xl font-semibold text-emerald-400 mb-3">{item.title}</h3>
            <p className="text-zinc-400 leading-relaxed relative z-10">{item.context}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
