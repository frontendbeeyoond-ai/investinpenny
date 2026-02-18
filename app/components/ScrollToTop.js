'use client'
import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress =
        docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (scrollProgress <= 20) return null

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full shadow-lg shadow-cyan-500/25 flex items-center justify-center text-white hover:shadow-xl hover:shadow-cyan-500/40 transition-all z-50"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  )
}
