import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../../constants/data'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group glass rounded-3xl border border-white/5 overflow-hidden hover:border-[#6c63ff]/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6c63ff]/10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <a href={project.live} className="px-4 py-2 rounded-xl bg-[#6c63ff] text-white text-xs font-semibold hover:bg-[#6c63ff]/80 transition-colors">Live Demo ↗</a>
          <a href={project.github} className="px-4 py-2 rounded-xl glass border border-white/20 text-white text-xs font-semibold hover:border-white/40 transition-colors">GitHub ↗</a>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-[#e2e2f0] font-bold text-lg mb-2 group-hover:text-[#6c63ff] transition-colors duration-300">{project.title}</h3>
        <p className="text-[#8888aa] text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-96 h-96 bg-[#6c63ff]/6 top-1/2 right-0 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="section-label justify-center">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#e2e2f0] mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-[#8888aa] max-w-xl mx-auto">A selection of projects I've built — from SaaS dashboards to immersive landing pages.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
        </div>
      </div>
    </section>
  )
}
