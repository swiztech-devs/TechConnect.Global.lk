'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[99] p-4 rounded-2xl bg-[#4A89C8]/10 backdrop-blur-xl border border-white/10 text-[#4A89C8] hover:bg-[#4A89C8] hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(74,137,200,0.3)] group pointer-events-auto"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
          
          <div className="absolute inset-0 rounded-2xl border border-[#4A89C8] animate-ping opacity-20 pointer-events-none" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}