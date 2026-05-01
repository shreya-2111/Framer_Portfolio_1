import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal, socials } from '../../constants/data'
import SocialIcon from '../ui/SocialIcon'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-96 h-96 bg-[#6c63ff]/8 top-0 left-1/2 -translate-x-1/2" />
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="section-label justify-center">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#e2e2f0] mb-4">Let's <span className="gradient-text">Work Together</span></h2>
          <p className="text-[#8888aa] max-w-lg mx-auto">Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-col gap-6">
            <div className="glass rounded-3xl p-8 border border-white/5">
              <h3 className="text-[#e2e2f0] font-bold text-xl mb-6">Get in touch</h3>
              <div className="flex flex-col gap-5">
                <a href={`mailto:${personal.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#6c63ff]/10 border border-[#6c63ff]/20 flex items-center justify-center group-hover:bg-[#6c63ff]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#6c63ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#8888aa] text-xs mb-0.5">Email</p>
                    <p className="text-[#e2e2f0] font-medium group-hover:text-[#6c63ff] transition-colors">{personal.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#43e97b]/10 border border-[#43e97b]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#43e97b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#8888aa] text-xs mb-0.5">Location</p>
                    <p className="text-[#e2e2f0] font-medium">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border border-white/5">
              <h3 className="text-[#e2e2f0] font-bold text-lg mb-5">Find me on</h3>
              <div className="flex gap-3">
                {socials.map(s => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center hover:border-[#6c63ff]/40 hover:bg-[#6c63ff]/10 transition-all duration-300 hover:-translate-y-1"
                    aria-label={s.name}>
                    <SocialIcon name={s.icon} className="w-5 h-5 text-[#8888aa]" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-white/5 flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[#8888aa] text-xs font-mono uppercase tracking-wider">Name</label>
                  <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="John Doe"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#e2e2f0] text-sm placeholder:text-[#8888aa]/50 focus:outline-none focus:border-[#6c63ff]/50 focus:bg-[#6c63ff]/5 transition-all duration-300" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#8888aa] text-xs font-mono uppercase tracking-wider">Email</label>
                  <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="john@example.com"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#e2e2f0] text-sm placeholder:text-[#8888aa]/50 focus:outline-none focus:border-[#6c63ff]/50 focus:bg-[#6c63ff]/5 transition-all duration-300" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#8888aa] text-xs font-mono uppercase tracking-wider">Message</label>
                <textarea required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Tell me about your project..."
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#e2e2f0] text-sm placeholder:text-[#8888aa]/50 focus:outline-none focus:border-[#6c63ff]/50 focus:bg-[#6c63ff]/5 transition-all duration-300 resize-none" />
              </div>
              <motion.button type="submit" className="relative w-full py-4 rounded-xl bg-[#6c63ff] text-white font-semibold text-sm overflow-hidden group" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {sent ? (
                    <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Message Sent!</>
                  ) : (
                    <>Send Message<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#6c63ff] to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
