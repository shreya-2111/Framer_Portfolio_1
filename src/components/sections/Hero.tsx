import { Suspense, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { personal } from '../../constants/data'
import ParticleField from '../three/ParticleField'

function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2
    }
  })
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1.4, 100, 200]}>
        <MeshDistortMaterial color="#6c63ff" distort={0.45} speed={2} roughness={0} metalness={0.1} transparent opacity={0.15} />
      </Sphere>
      <Sphere args={[1.42, 60, 60]}>
        <meshBasicMaterial color="#6c63ff" wireframe transparent opacity={0.06} />
      </Sphere>
    </Float>
  )
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-[#6c63ff]/8 -top-32 -left-32 animate-pulse" />
      <div className="orb w-[400px] h-[400px] bg-[#ff6584]/6 bottom-0 right-0 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* 3D Canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#6c63ff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6584" />
            <FloatingSphere />
            <ParticleField />
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <motion.div className="max-w-3xl" variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#6c63ff]/20 text-xs font-mono text-[#6c63ff] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#43e97b] animate-pulse" />
              Available for work
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="text-[#8888aa] font-mono text-sm tracking-widest uppercase mb-3">
            Hello, I'm
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-4">
            <span className="text-[#e2e2f0]">{personal.name.split(' ')[0]} </span>
            <span className="gradient-text">{personal.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#8888aa] mb-4">
            {personal.title}
          </motion.h2>

          <motion.p variants={fadeUp} className="text-base sm:text-lg text-[#8888aa] max-w-xl leading-relaxed mb-10">
            {personal.subtitle} — turning ideas into{' '}
            <span className="text-[#6c63ff] font-medium">pixel-perfect</span> realities.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="group relative px-8 py-4 rounded-2xl bg-[#6c63ff] text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#6c63ff]/30 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6c63ff] to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 rounded-2xl glass border border-white/10 text-[#e2e2f0] font-semibold text-sm hover:border-[#6c63ff]/40 hover:bg-[#6c63ff]/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-16 flex items-center gap-3 text-[#8888aa] text-xs font-mono">
            <motion.div
              className="w-px h-12 bg-gradient-to-b from-transparent via-[#6c63ff] to-transparent"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            Scroll to explore
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none" />
    </section>
  )
}
