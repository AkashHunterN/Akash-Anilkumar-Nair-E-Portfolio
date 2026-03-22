import { motion } from 'motion/react';

export default function Skills({ data }: { data: any[] }) {
  return (
    <section id="skills" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
        <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill: string, j: number) => (
                <span
                  key={j}
                  className="px-3 py-1.5 bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-300 border border-white/5 hover:border-emerald-500/30 text-zinc-300 text-sm rounded-lg transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
