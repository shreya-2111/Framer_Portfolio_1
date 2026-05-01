import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../../constants/data'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-80 h-80 bg-[#ff6584]/6 bottom-0 left-0" />
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="section-label justify-center">Skills</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#e2e2f0]">My <span className="gradient-text">Tech Stack</span></h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group glass rounded-2xl p-5 border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}30` }}>
                  {skill.icon}
                </div>
                <p className="text-[#e2e2f0] font-semibold text-sm">{skill.name}</p>
                <div className="w-full h-1 bg-[#1a1a2e] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: skill.color }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: i * 0.06 + 0.3, ease: 'easeOut' }}
                  />
                </div>
                <p className="text-[#8888aa] text-xs font-mono">{skill.level}%</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
