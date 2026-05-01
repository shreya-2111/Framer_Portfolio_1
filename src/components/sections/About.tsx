import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal, stats } from '../../constants/data'
import AnimatedCounter from '../ui/AnimatedCounter'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-96 h-96 bg-[#6c63ff]/6 top-0 right-0" />
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p custom={0} variants={fadeUp} className="section-label">About Me</motion.p>
            <motion.h2 custom={1} variants={fadeUp} className="text-4xl sm:text-5xl font-black text-[#e2e2f0] mb-6 leading-tight">
              Crafting digital <span className="gradient-text">experiences</span> that matter
            </motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-[#8888aa] leading-relaxed mb-4">{personal.bio}</motion.p>
            <motion.p custom={3} variants={fadeUp} className="text-[#8888aa] leading-relaxed mb-8">
              When I'm not pushing pixels, I'm exploring new technologies, contributing to open source, and obsessing over micro-interactions that make users smile.
            </motion.p>
            <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'GSAP', 'Figma', 'Node.js'].map(tag => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col gap-6">
            <motion.div custom={2} variants={fadeUp} className="glass rounded-3xl p-8 border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6c63ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6c63ff] to-purple-600 flex items-center justify-center text-2xl font-black text-white">AC</div>
                <div>
                  <p className="text-[#e2e2f0] font-bold text-lg">{personal.name}</p>
                  <p className="text-[#8888aa] text-sm">{personal.title}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-[#43e97b] animate-pulse" />
                    <span className="text-[#43e97b] text-xs font-mono">Open to opportunities</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#8888aa] text-sm">
                <svg className="w-4 h-4 text-[#6c63ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {personal.location}
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div key={stat.label} custom={i + 3} variants={fadeUp} className="glass rounded-2xl p-5 border border-white/5 text-center glass-hover">
                  <div className="text-3xl font-black gradient-text-purple mb-1">
                    {inView ? <AnimatedCounter to={stat.value} suffix={stat.suffix} /> : '0'}
                  </div>
                  <p className="text-[#8888aa] text-xs leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
