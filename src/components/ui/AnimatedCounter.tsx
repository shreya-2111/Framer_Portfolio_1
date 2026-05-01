import { useEffect, useRef, useState } from 'react'

interface Props { to: number; suffix?: string; duration?: number }

export default function AnimatedCounter({ to, suffix = '', duration = 1800 }: Props) {
  const [count, setCount] = useState(0)
  const startTime = useRef<number | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const animate = (ts: number) => {
      if (!startTime.current) startTime.current = ts
      const progress = Math.min((ts - startTime.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * to))
      if (progress < 1) rafRef.current = requestAnimationFrame(animate)
      else setCount(to)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [to, duration])

  return <>{count}{suffix}</>
}
