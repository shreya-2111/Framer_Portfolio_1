import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Loader() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (progressRef.current) {
        progressRef.current.style.transition = 'width 2.4s cubic-bezier(0.4,0,0.2,1)'
        progressRef.current.style.width = '100%'
      }
    }, 100)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050508]"
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <div className="orb w-96 h-96 bg-[#6c63ff]/10 top-1/4 left-1/4 absolute" />
      <div className="orb w-64 h-64 bg-[#ff6584]/10 bottom-1/4 right-1/4 absolute" />

      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <motion.div
            className="w-16 h-16 rounded-2xl border border-[#6c63ff]/40 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 2.4, ease: 'linear' }}
          >
            <span className="text-2xl font-black gradient-text-purple font-mono">AC</span>
          </motion.div>
          <motion.div
            className="absolute inset-0 rounded-2xl border border-[#6c63ff]/20"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>

        <div className="text-center">
          <p className="text-[#8888aa] font-mono text-xs tracking-[0.3em] uppercase mb-1">Loading Portfolio</p>
          <h1 className="text-2xl font-bold text-[#e2e2f0]">Alex Carter</h1>
        </div>

        <div className="w-48 h-[2px] bg-[#1a1a2e] rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full w-0 rounded-full"
            style={{ background: 'linear-gradient(90deg, #6c63ff, #ff6584)' }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
