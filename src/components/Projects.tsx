import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function Projects({ data }: { data: any[] }) {
  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Academic Projects</h2>
        <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        {data.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-colors"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech: string, j: number) => (
                    <span key={j} className="px-3 py-1 bg-white/10 text-zinc-300 text-xs font-mono rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <ul className="space-y-3 text-zinc-400 ml-2">
              {project.bullets.map((bullet: string, j: number) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1.5 text-sm">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
