import { motion } from 'framer-motion'
import { personal, socials } from '../constants/data'
import SocialIcon from './ui/SocialIcon'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl border border-[#6c63ff]/40 flex items-center justify-center">
            <span className="text-xs font-black gradient-text-purple font-mono">AC</span>
          </div>
          <span className="text-[#8888aa] text-sm">© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(s => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-[#6c63ff]/40 hover:bg-[#6c63ff]/10 transition-all duration-300"
              aria-label={s.name}>
              <SocialIcon name={s.icon} className="w-4 h-4 text-[#8888aa]" />
            </a>
          ))}
        </div>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-[#6c63ff]/40 hover:bg-[#6c63ff]/10 transition-all duration-300 group"
          whileHover={{ y: -2 }}
          aria-label="Back to top"
        >
          <svg className="w-4 h-4 text-[#8888aa] group-hover:text-[#6c63ff] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}
