import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { testimonials } from '../../constants/data'

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-96 h-96 bg-[#ff6584]/6 bottom-0 right-0" />
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="section-label justify-center">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#e2e2f0]">What Clients <span className="gradient-text">Say</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-7 border border-white/5 hover:border-[#6c63ff]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="text-4xl text-[#6c63ff]/20 font-serif leading-none mb-2 group-hover:text-[#6c63ff]/40 transition-colors">"</div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#8888aa] text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full border-2 border-[#6c63ff]/20 object-cover" />
                <div>
                  <p className="text-[#e2e2f0] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#8888aa] text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
