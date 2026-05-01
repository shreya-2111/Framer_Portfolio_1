import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../../constants/data'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-80 h-80 bg-[#43e97b]/5 top-0 left-1/2 -translate-x-1/2" />
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="section-label justify-center">Career</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#e2e2f0]">Work <span className="gradient-text">Experience</span></h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#6c63ff] via-[#6c63ff]/30 to-transparent hidden sm:block" />
          <div className="flex flex-col gap-8">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative sm:pl-20"
              >
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-[#6c63ff] bg-[#050508] hidden sm:flex items-center justify-center -translate-x-1/2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6c63ff]" />
                </div>
                <div className="glass rounded-3xl p-7 border border-white/5 hover:border-[#6c63ff]/20 transition-all duration-300 group glass-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-[#e2e2f0] font-bold text-xl group-hover:text-[#6c63ff] transition-colors duration-300">{item.role}</h3>
                      <p className="text-[#6c63ff] font-semibold text-sm mt-0.5">{item.company}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full glass border border-white/10 text-[#8888aa] text-xs font-mono whitespace-nowrap">{item.period}</span>
                  </div>
                  <p className="text-[#8888aa] text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
