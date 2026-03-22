import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Experience({ education, experience, certifications }: { education: any[], experience: any[], certifications: any[] }) {
  return (
    <section id="experience" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience & Education</h2>
        <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
      </motion.div>

      <div className="space-y-12">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8 text-2xl font-semibold text-white">
            <GraduationCap className="text-emerald-400" /> Education
          </div>
          <div className="space-y-8 border-l border-white/10 ml-3 pl-8">
            {education.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-500"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <span className="text-emerald-400 font-mono text-sm">{item.dates}</span>
                </div>
                <h4 className="text-lg text-zinc-300 mb-4">{item.institution}</h4>
                {item.bullets.length > 0 && (
                  <ul className="space-y-2 text-zinc-400">
                    {item.bullets.map((bullet: string, j: number) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-emerald-500 mt-1.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extracurricular Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8 text-2xl font-semibold text-white mt-16">
            <Briefcase className="text-emerald-400" /> Extracurricular Roles
          </div>
          <div className="space-y-8 border-l border-white/10 ml-3 pl-8">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-500"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <span className="text-emerald-400 font-mono text-sm">{item.dates}</span>
                </div>
                <h4 className="text-lg text-zinc-300 mb-4">{item.company}, {item.location}</h4>
                <ul className="space-y-2 text-zinc-400">
                  {item.bullets.map((bullet: string, j: number) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8 text-2xl font-semibold text-white mt-16">
            <Award className="text-emerald-400" /> Certifications
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-4"
              >
                <Award className="text-emerald-400 shrink-0" />
                <span className="text-zinc-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
